# 🚀 ZapCap SDK

The ZapCap SDK provides a powerful interface to the ZapCap API, allowing you to effortlessly generate amazing subtitles for your videos, manage video tasks, and streamline your video processing workflow with just a few lines of code.

## 📦 Installation

```bash
npm install zapcap
```

or

```
yarn add zapcap
```

## 🔑 Setting Up

Before you start, make sure you have your ZapCap API Key. Configure it in your environment:

```
ZAPCAP_API_KEY=your_api_key_here
```

## 🌟 Getting Started

```
import { ZapCap } from 'zapcap-sdk';
import fs from 'fs';

(async () => {
  const zapcap = new ZapCap({
    apiKey: process.env.ZAPCAP_API_KEY,
  });

  // Upload a video
  const videoId = await zapcap.uploadVideo(fs.createReadStream("path/to/your/video.mp4"));

  // Create a video task with the first available template
  const templates = await zapcap.getTemplates();
  const templateId = templates[0].id;
  const taskId = await zapcap.createVideoTask(videoId, templateId, true);

  console.log(`Video uploaded and task created with ID: ${taskId}`);
})();
```

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
