# 🚀 ZapCap SDK

The ZapCap SDK provides a powerful interface to the ZapCap API, allowing you to effortlessly generate amazing subtitles for your videos, manage video tasks, and streamline your video processing workflow with just a few lines of code. Detailed documentation of our API can be found at our [OpenAPI Documentation](https://api.zapcap.dev/api).

## 📦 Installation

```bash
npm install zapcap
```

or

```bash
yarn add zapcap
```

## 🔑 Setting Up

> **Note:** If you do not have a ZapCap API Key, please contact us at [hi@zapcap.dev](mailto:hi@zapcap.dev) to get one.

Before you start, make sure you have your ZapCap API Key. Configure it in your environment:

```
ZAPCAP_API_KEY=your_api_key_here
```

## 🌟 Getting Started

```typescript
import { ZapCap } from "zapcap";
import fs from "fs";

const zapcap = new ZapCap({
  apiKey: process.env.ZAPCAP_API_KEY,
});

// Upload a video
const {
  data: { id: videoId },
} = await zapcap.uploadVideo(fs.createReadStream("path/to/your/video.mp4"));

// Create a video task with the first available template
const { data: templates } = await zapcap.getTemplates();
const templateId = templates[0].id;
const {
  data: { taskId },
} = await zapcap.createVideoTask(videoId, templateId);

console.log(`Video uploaded and task created with ID: ${taskId}`);
```

## 🛠 Helper Functions

The ZapCap SDK includes helper functions designed to simplify common tasks such as polling for transcript completion and downloading videos. These utilities enhance the SDK's ease of use, allowing for more streamlined workflows.

### 🔄 Polling for Transcripts

> **Note:** All endpoints that need to be polled will have a corresponding webhook integration added in the near future.

After initiating a video task, you may need to poll for its completion to download the transcript. The `pollForTranscript` helper function automates this process.

```typescript
const transcript = await zapcap.helpers.pollForTranscript(videoId, taskId, {
  retryFrequencyMs: 5000, // Poll every 5 seconds
  timeoutMs: 60000, // Timeout after 60 seconds
});
```

### 🔄 Polling for Render Completion

> **Note:** All endpoints that need to be polled will have a corresponding webhook integration added in the near future.

Similar to polling for transcripts, the `pollForRender` function can be used to wait for a video rendering task to complete, using async/await syntax for simplicity and clarity.

```typescript
const stream = await zapcap.helpers.pollForRender(videoId, taskId, {
  retryFrequencyMs: 5000, // Poll every 5 seconds
  timeoutMs: 120000, // Timeout after 120 seconds
});
```

### 📥 Downloading Videos

Once a video task is completed, you may download the rendered video using streams. This is particularly useful for handling large files efficiently and can be done using async/await syntax.

```typescript
import fs from "fs";
import { pipeline } from "stream/promises";

const stream = await zapcap.helpers.pollForRender(
  videoId,
  taskId,
  {
    retryFrequency: 5000,
    timeout: 120000,
  },
  true // Enable verbose logging
);
const outputPath = "output.mp4";
const writeStream = fs.createWriteStream(outputPath);
await pipeline(stream, writeStream);
console.log(`Video has been downloaded and saved to ${outputPath}`);
```

This approach leverages the `pollForRender` helper to wait for the video rendering process to complete before initiating the download, ensuring the video is ready.

## 🔄 Workflow & 💳 Billing Overview

The ZapCap SDK streamlines the process of enhancing your videos with automated subtitles, making it simple to integrate into your existing video processing pipeline. Here's an overview of the typical workflow and billing practices:

### Workflow

1. **Initialization**: Start by setting up your ZapCap API Key and creating an instance of the ZapCap SDK.
2. **Video Upload**: Upload your video files to be processed.
3. **Task Creation**: For each video, create a processing task using one of the available templates. By default, the task is created with transcript status unapproved. During the creation of the task, you can provide `autoApprove: true` in the body to make the API render the video straightaway after the transcription is generated. If `autoApprove: true` is not provided, you will have to call `zapcap.approveTranscript(videoId, taskId)` once the transcript is approved, and the video is ready to be rendered.
4. **Status Monitoring**: Utilize helper functions to monitor the status of your tasks. _Note: Webhook integration will soon replace the need for polling, making the process even smoother._
5. **Completion & Download**: Once processing is completed, download your video with subtitles directly or fetch the transcription.

This workflow is designed to be both flexible and straightforward, ensuring you can focus on creating great content while we handle the subtitles.

### Billing

During our **closed alpha** phase, ZapCap is excited to offer our API services **free of charge** to select customers. This is a unique opportunity for early adopters to integrate advanced video processing capabilities into their applications at no cost.

**Here's how you can participate:**

- **Exclusive Access**: To become a part of our select group of alpha users, simply email us at [hi@zapcap.dev](mailto:hi@zapcap.dev). Please include an explanation of your use case and how you plan to use the ZapCap API. Our team is eager to learn about your projects and how we can support them.
- **Feedback Contribution**: As an alpha user, your insights and feedback will be invaluable. You'll have the chance to shape the development of ZapCap, ensuring it meets your needs and expectations.

**Future Billing Plans:**

As we progress beyond the alpha phase, ZapCap will transition to a **usage-based billing model**. This model is designed to be cost-effective, ensuring you only pay for the processing time you use, which includes video upload, transcription, and rendering.

For inquiries about the alpha program or future billing options, feel free to reach out at [hi@zapcap.dev](mailto:hi@zapcap.dev).

## 📚 Features

- 📹 <b>Video Upload:</b> Upload your videos for processing.
- 🛠 <b>Task Management:</b> Create tasks for videos, poll their status, and fetch results.
- 📝 <b>Transcription:</b> Approve, get, and update video transcriptions.
- 🎨 <b>Templates:</b> Utilize templates to standardize video processing.
- 🧾 <b>Billing Information:</b> Check your usage and remaining render duration.

## 📄 API Reference

Refer to the official [ZapCap API documentation](https://api.zapcap.dev/api) for a comprehensive list of endpoints and their functionalities.

## ✉️ Support

For support, please open an issue or contact hi@zapcap.dev.

---

Happy coding! 🎉
