import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import {
  CreateVideoResponseDto,
  DefaultApi,
  GetVideoTaskResponseDto,
  TemplateDto,
  VideoTaskStatusEnum,
} from "./api";
import FormData from "form-data";
import { Readable } from "stream";
import { Configuration } from "./configuration";

const BASE_PATH = "https://api.zapcap.dev";

export type ZapCapOptions = {
  apiKey: string;
  axios?: AxiosInstance;
  basePath?: string;
};

export type PollForTranscriptOptions = {
  retryFrequencyMs: number; // in milliseconds
  timeoutMs: number; // in milliseconds
};

export type ProcessedWords = {
  words: ProcessedWord[];
};
export type ProcessedWord = {
  end: number;
  text: string;
  type: string;
  start: number;
  end_time: number;
  confidence: number;
  start_time: number;
  emoji?: string;
  important?: boolean;
  id: string;
};

export class ZapCap {
  private _client: DefaultApi;
  private _axios: AxiosInstance;
  public helpers: ZapCapHelpers;

  constructor(options: ZapCapOptions) {
    const basePath = options.basePath ?? BASE_PATH;
    const apiKey = options.apiKey;

    const config = new Configuration({
      apiKey,
      basePath,
    });
    this._axios =
      options.axios ??
      axios.create({
        baseURL: basePath,
        headers: { "User-Agent": "zapcap-sdk:1.0.0", "x-api-key": apiKey },
      });

    this._client = new DefaultApi(config, BASE_PATH, this._axios);
    this.helpers = new ZapCapHelpers(this, this._axios);
  }

  async getTemplates(): AxiosPromise<Array<TemplateDto>> {
    return await this._client.getTemplates();
  }

  async getVideoTask(
    videoId: string,
    taskId: string
  ): AxiosPromise<GetVideoTaskResponseDto> {
    return await this._client.getVideoTask(videoId, taskId);
  }

  async approveTranscript(
    videoId: string,
    taskId: string
  ): Promise<AxiosPromise<void>> {
    return await this._client.approveTranscript(videoId, taskId);
  }

  async uploadVideo(file: File): AxiosPromise<CreateVideoResponseDto>;
  async uploadVideo(file: Readable): AxiosPromise<CreateVideoResponseDto>;
  async uploadVideo(...args: any[]): AxiosPromise<CreateVideoResponseDto> {
    const file = args[0];
    const formData = new FormData();

    if (args.length === 1 && args[0] instanceof File) {
      //@ts-ignore
      formData.append("file", Readable.fromWeb(file.stream()), {
        filename: file.name,
        contentType: file.type,
      });
    } else if (args.length === 1 && args[0] instanceof Readable) {
      const form = new FormData();
      form.append("file", file);

      return await this._axios.post("videos", form);
    } else {
      throw new Error("Invalid arguments provided to uploadVideo");
    }

    return this._axios.post("videos", formData);
  }

  async createVideoTask(
    videoId: string,
    templateId: string,
    autoApprove = false,
    language?: string
  ) {
    return await this._client.createTask(videoId, {
      templateId,
      autoApprove,
      language,
    });
  }
}

class ZapCapHelpers {
  private _zapCap: ZapCap;
  private _axios: AxiosInstance;

  constructor(zapCap: ZapCap, axios: AxiosInstance) {
    this._zapCap = zapCap;
    this._axios = axios;
  }

  async pollForTranscript(
    videoId: string,
    taskId: string,
    options: PollForTranscriptOptions = {
      retryFrequencyMs: 5000,
      timeoutMs: 60000,
    },
    verboseLogging: boolean = true
  ): Promise<ProcessedWords> {
    const { retryFrequencyMs, timeoutMs } = options;
    const startTime = Date.now();
    let pollCount = 0;

    const checkStatus = async (): Promise<ProcessedWords> => {
      pollCount++;
      if (verboseLogging) {
        console.log(`Transcript polling attempt #${pollCount}`);
      }
      const response = await this._zapCap.getVideoTask(videoId, taskId);
      if (response.data.status === VideoTaskStatusEnum.Failed) {
        throw new Error("ZapCap: Video task failed");
      }
      if (response.data.transcript) {
        if (verboseLogging) {
          console.log("Transcript ready for download.");
        }
        const transcriptUrl = response.data.transcript;
        const download = await this._axios.get<ProcessedWords>(transcriptUrl);
        return download.data;
      } else if (Date.now() - startTime > timeoutMs) {
        return Promise.reject(
          new Error(
            "ZapCap: Timeout reached while waiting for transcription to complete"
          )
        );
      } else {
        if (verboseLogging) {
          console.log(
            `Transcript not ready yet, retrying in ${retryFrequencyMs}ms...`
          );
        }
        await new Promise((resolve) => setTimeout(resolve, retryFrequencyMs));
        return checkStatus();
      }
    };

    return checkStatus();
  }

  async pollForRender(
    videoId: string,
    taskId: string,
    options: PollForTranscriptOptions = {
      retryFrequencyMs: 5000,
      timeoutMs: 120000,
    },
    verboseLogging: boolean = true
  ): Promise<Readable> {
    const { retryFrequencyMs, timeoutMs } = options;
    const startTime = Date.now();
    let pollCount = 0;

    const checkStatus = async (): Promise<Readable> => {
      pollCount++;
      if (verboseLogging) {
        console.log(`Render polling attempt #${pollCount}`);
      }

      const response = await this._zapCap.getVideoTask(videoId, taskId);
      if (!response.data.transcriptApproved) {
        throw new Error("ZapCap: Transcript it not approved yet");
      }
      if (response.data.status === VideoTaskStatusEnum.Failed) {
        throw new Error("ZapCap: Video task failed");
      }
      if (response.data.downloadUrl) {
        if (verboseLogging) {
          console.log("Downloading render...");
        }
        const downloadUrl = response.data.downloadUrl;
        const download: AxiosResponse<Readable> = await this._axios.get(
          downloadUrl,
          {
            responseType: "stream",
          }
        );
        return download.data;
      } else if (Date.now() - startTime > timeoutMs) {
        throw new Error("Timeout reached while waiting for render to complete");
      } else {
        if (verboseLogging) {
          console.log(
            `Render not ready yet, retrying in ${retryFrequencyMs}ms...`
          );
        }
        await new Promise((resolve) => setTimeout(resolve, retryFrequencyMs));
        return checkStatus();
      }
    };

    return checkStatus();
  }
}
