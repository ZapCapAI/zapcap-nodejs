/* tslint:disable */
/* eslint-disable */
/**
 * ZapCap API
 * API for generating amazing subtitles for your videos
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface ApiKeyStatusResponseDto
 */
export interface ApiKeyStatusResponseDto {
    /**
     * API Key
     * @type {string}
     * @memberof ApiKeyStatusResponseDto
     */
    'apiKey': string;
    /**
     * Status of API Key. Can only be disabled by support.
     * @type {boolean}
     * @memberof ApiKeyStatusResponseDto
     */
    'active': boolean;
}
/**
 * 
 * @export
 * @interface CreateVideoResponseDto
 */
export interface CreateVideoResponseDto {
    /**
     * 
     * @type {VideoStatusEnum}
     * @memberof CreateVideoResponseDto
     */
    'status': VideoStatusEnum;
    /**
     * Use this `id` to create a video task
     * @type {string}
     * @memberof CreateVideoResponseDto
     */
    'id': string;
}


/**
 * 
 * @export
 * @interface CreateVideoTaskRequestDto
 */
export interface CreateVideoTaskRequestDto {
    /**
     * Template `id` gotten from Get Templates endpoint
     * @type {string}
     * @memberof CreateVideoTaskRequestDto
     */
    'templateId': string;
    /**
     * Optional flag to automatically approve the task upon creation. When set to true, the task is immediately marked as approved, allowing it to proceed to the next stage of processing without requiring manual approval. This is useful for workflows where immediate processing of the task is desired, bypassing the need for an explicit approval step.
     * @type {boolean}
     * @memberof CreateVideoTaskRequestDto
     */
    'autoApprove'?: boolean;
}
/**
 * 
 * @export
 * @interface CreateVideoTaskResponseDto
 */
export interface CreateVideoTaskResponseDto {
    /**
     * `id` to use when querying the processing task\'s status in the Get Video Task endpoint
     * @type {string}
     * @memberof CreateVideoTaskResponseDto
     */
    'taskId': string;
}
/**
 * 
 * @export
 * @interface GetVideoTaskResponseDto
 */
export interface GetVideoTaskResponseDto {
    /**
     * 
     * @type {VideoTaskStatusEnum}
     * @memberof GetVideoTaskResponseDto
     */
    'status': VideoTaskStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GetVideoTaskResponseDto
     */
    'id': string;
    /**
     * Url to download the transcript. Link is valid for 1 hour
     * @type {string}
     * @memberof GetVideoTaskResponseDto
     */
    'transcript': string | null;
    /**
     * Url to download the final file. Link is valid for 1 hour
     * @type {string}
     * @memberof GetVideoTaskResponseDto
     */
    'downloadUrl': string | null;
    /**
     * Whether the transcript has been approved.
     * @type {boolean}
     * @memberof GetVideoTaskResponseDto
     */
    'transcriptApproved'?: boolean;
}


/**
 * 
 * @export
 * @interface TemplateDto
 */
export interface TemplateDto {
    /**
     * 
     * @type {string}
     * @memberof TemplateDto
     */
    'id': string;
}
/**
 * 
 * @export
 * @interface UpdateWordEntryDto
 */
export interface UpdateWordEntryDto {
    /**
     * The subtitle text
     * @type {string}
     * @memberof UpdateWordEntryDto
     */
    'text': string;
    /**
     * Type of the entry
     * @type {string}
     * @memberof UpdateWordEntryDto
     */
    'type': string;
    /**
     * End time in seconds
     * @type {number}
     * @memberof UpdateWordEntryDto
     */
    'end_time': number;
    /**
     * Start time in seconds
     * @type {number}
     * @memberof UpdateWordEntryDto
     */
    'start_time': number;
    /**
     * Emoji representation of the word
     * @type {string}
     * @memberof UpdateWordEntryDto
     */
    'emoji'?: string | null;
    /**
     * Indicates if the word is important, and should be highlighted.
     * @type {boolean}
     * @memberof UpdateWordEntryDto
     */
    'important'?: boolean;
}
/**
 * 
 * @export
 * @interface UserBillingResponseDto
 */
export interface UserBillingResponseDto {
    /**
     * Total render duration accumulated
     * @type {number}
     * @memberof UserBillingResponseDto
     */
    'totalRenderDuration': number;
    /**
     * Total render duration use accumulated
     * @type {number}
     * @memberof UserBillingResponseDto
     */
    'usedRenderDuration': number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const VideoStatusEnum = {
    Todo: 'todo',
    Uploaded: 'uploaded',
    Aborted: 'aborted'
} as const;

export type VideoStatusEnum = typeof VideoStatusEnum[keyof typeof VideoStatusEnum];


/**
 * 
 * @export
 * @enum {string}
 */

export const VideoTaskStatusEnum = {
    Pending: 'pending',
    Transcribing: 'transcribing',
    TranscriptionCompleted: 'transcriptionCompleted',
    Rendering: 'rendering',
    Completed: 'completed',
    Failed: 'failed'
} as const;

export type VideoTaskStatusEnum = typeof VideoTaskStatusEnum[keyof typeof VideoTaskStatusEnum];


/**
 * 
 * @export
 * @interface WordEntryDto
 */
export interface WordEntryDto {
    /**
     * Id of the specific word instance
     * @type {string}
     * @memberof WordEntryDto
     */
    'id': string;
    /**
     * The subtitle text
     * @type {string}
     * @memberof WordEntryDto
     */
    'text': string;
    /**
     * Type of the entry
     * @type {string}
     * @memberof WordEntryDto
     */
    'type': string;
    /**
     * Confidence score for the word recognition
     * @type {number}
     * @memberof WordEntryDto
     */
    'confidence': number;
    /**
     * End time in seconds
     * @type {number}
     * @memberof WordEntryDto
     */
    'end_time': number;
    /**
     * Start time in seconds
     * @type {number}
     * @memberof WordEntryDto
     */
    'start_time': number;
    /**
     * Emoji representation of the word
     * @type {string}
     * @memberof WordEntryDto
     */
    'emoji'?: string | null;
    /**
     * Indicates if the word is important, and should be highlighted.
     * @type {boolean}
     * @memberof WordEntryDto
     */
    'important'?: boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiKeyStatus: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api-keys/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        approveTranscript: async (videoId: string, id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('approveTranscript', 'videoId', videoId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('approveTranscript', 'id', id)
            const localVarPath = `/videos/{videoId}/task/{id}/approve-transcript`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoId 
         * @param {CreateVideoTaskRequestDto} createVideoTaskRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTask: async (videoId: string, createVideoTaskRequestDto: CreateVideoTaskRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('createTask', 'videoId', videoId)
            // verify required parameter 'createVideoTaskRequestDto' is not null or undefined
            assertParamExists('createTask', 'createVideoTaskRequestDto', createVideoTaskRequestDto)
            const localVarPath = `/videos/{videoId}/task`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createVideoTaskRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplates: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/templates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranscript: async (videoId: string, id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getTranscript', 'videoId', videoId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTranscript', 'id', id)
            const localVarPath = `/videos/{videoId}/task/{id}/transcript`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserBilling: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user-billing`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVideoTask: async (videoId: string, id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getVideoTask', 'videoId', videoId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getVideoTask', 'id', id)
            const localVarPath = `/videos/{videoId}/task/{id}`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {Array<UpdateWordEntryDto>} updateWordEntryDto Array of updated word entries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTranscript: async (videoId: string, id: string, updateWordEntryDto: Array<UpdateWordEntryDto>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('updateTranscript', 'videoId', videoId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateTranscript', 'id', id)
            // verify required parameter 'updateWordEntryDto' is not null or undefined
            assertParamExists('updateTranscript', 'updateWordEntryDto', updateWordEntryDto)
            const localVarPath = `/videos/{videoId}/task/{id}/transcript`
                .replace(`{${"videoId"}}`, encodeURIComponent(String(videoId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateWordEntryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {File} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadVideo: async (file: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadVideo', 'file', file)
            const localVarPath = `/videos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication API_KEY required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiKeyStatus(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiKeyStatusResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiKeyStatus(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.apiKeyStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async approveTranscript(videoId: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.approveTranscript(videoId, id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.approveTranscript']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} videoId 
         * @param {CreateVideoTaskRequestDto} createVideoTaskRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTask(videoId: string, createVideoTaskRequestDto: CreateVideoTaskRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateVideoTaskResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTask(videoId, createVideoTaskRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.createTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTemplates(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TemplateDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTemplates(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getTemplates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTranscript(videoId: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WordEntryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTranscript(videoId, id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getTranscript']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserBilling(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserBillingResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserBilling(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getUserBilling']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVideoTask(videoId: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetVideoTaskResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVideoTask(videoId, id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getVideoTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {Array<UpdateWordEntryDto>} updateWordEntryDto Array of updated word entries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTranscript(videoId: string, id: string, updateWordEntryDto: Array<UpdateWordEntryDto>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WordEntryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTranscript(videoId, id, updateWordEntryDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.updateTranscript']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {File} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadVideo(file: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateVideoResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadVideo(file, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.uploadVideo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiKeyStatus(options?: any): AxiosPromise<ApiKeyStatusResponseDto> {
            return localVarFp.apiKeyStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        approveTranscript(videoId: string, id: string, options?: any): AxiosPromise<void> {
            return localVarFp.approveTranscript(videoId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} videoId 
         * @param {CreateVideoTaskRequestDto} createVideoTaskRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTask(videoId: string, createVideoTaskRequestDto: CreateVideoTaskRequestDto, options?: any): AxiosPromise<CreateVideoTaskResponseDto> {
            return localVarFp.createTask(videoId, createVideoTaskRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTemplates(options?: any): AxiosPromise<Array<TemplateDto>> {
            return localVarFp.getTemplates(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranscript(videoId: string, id: string, options?: any): AxiosPromise<Array<WordEntryDto>> {
            return localVarFp.getTranscript(videoId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserBilling(options?: any): AxiosPromise<UserBillingResponseDto> {
            return localVarFp.getUserBilling(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVideoTask(videoId: string, id: string, options?: any): AxiosPromise<GetVideoTaskResponseDto> {
            return localVarFp.getVideoTask(videoId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} videoId 
         * @param {string} id 
         * @param {Array<UpdateWordEntryDto>} updateWordEntryDto Array of updated word entries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTranscript(videoId: string, id: string, updateWordEntryDto: Array<UpdateWordEntryDto>, options?: any): AxiosPromise<Array<WordEntryDto>> {
            return localVarFp.updateTranscript(videoId, id, updateWordEntryDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {File} file 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadVideo(file: File, options?: any): AxiosPromise<CreateVideoResponseDto> {
            return localVarFp.uploadVideo(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public apiKeyStatus(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).apiKeyStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} videoId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public approveTranscript(videoId: string, id: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).approveTranscript(videoId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} videoId 
     * @param {CreateVideoTaskRequestDto} createVideoTaskRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createTask(videoId: string, createVideoTaskRequestDto: CreateVideoTaskRequestDto, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).createTask(videoId, createVideoTaskRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTemplates(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getTemplates(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} videoId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTranscript(videoId: string, id: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getTranscript(videoId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUserBilling(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getUserBilling(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} videoId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getVideoTask(videoId: string, id: string, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getVideoTask(videoId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} videoId 
     * @param {string} id 
     * @param {Array<UpdateWordEntryDto>} updateWordEntryDto Array of updated word entries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public updateTranscript(videoId: string, id: string, updateWordEntryDto: Array<UpdateWordEntryDto>, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).updateTranscript(videoId, id, updateWordEntryDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {File} file 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public uploadVideo(file: File, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).uploadVideo(file, options).then((request) => request(this.axios, this.basePath));
    }
}


