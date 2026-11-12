---
title: "Local Code Mac：断网也能用的本地离线 AI 编程助手"
description: "Local Code 是 Draw Things 出品的 Mac 本地 AI 编程助手，模型和代码都跑在自己电脑上，断网也能写代码、做表格、改 PPT，隐私敏感的工作不用再把文件发给云端。"
date: 2026-11-12
lang: zh-CN
category: coding
tags: ["AI 编程", "本地模型", "Mac 应用"]
cover: tool
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费"
needVPN: true
updatedDate: 2026-11-12
---

Local Code 是 Draw Things 出品的 Mac 本地 AI 编程助手，模型和代码都跑在自己电脑上，断网也能写代码、做表格、改 PPT，隐私敏感的工作不用再把文件发给云端。

## 是什么

Local Code 是画图应用 Draw Things 团队做的 AI Agent，2026 年 9 月 12 日开启公开测试，10 月 28 日正式发布并完全开源（GPLv3）。它最大的特点是“开箱即用”：不用装 Ollama、不用配推理服务器、不用注册账号、不用 API Key，打开应用内置的模型选择器下载一个模型就能开工。模型跑在本地时，提示词、文件和工具输出都留在你的 Mac 上，官方演示就是关掉 Wi-Fi 照常工作。整个应用跑在苹果 App Sandbox 和 Hardened Runtime 里，只能读写你授权的文件夹，不能擅自启动其他应用。

它内置了一套完整工具链：Python 3.14、Node.js 24、Shell、Git，还有文档工具和可操控的浏览器，整个应用约 600MB。模型按内存分档：Qwen 3.8 27B 约 10GB，16GB 内存起步、推荐 32GB；DeepSeek 4 Flash 0731 约 89GB，推荐 48GB 内存；DeepSeek 4.1 Flash 1017 约 376GB，推荐 64GB 内存，大模型用 SSD 流式加载，不用一次全读进内存。

![Local Code 官网首页](/images/tools/local-code/home.webp)

## 能干什么

- **写代码、审代码**：写 Python、JavaScript，搭网站和小应用，跑起来验证，改 Bug。
- **处理文档表格**：读 Word、改 PowerPoint、分析电子表格、做带饼图和柱状图的图表和演示文稿。
- **生成图片视频**：通过 Draw Things 命令行生成图片、视频和动态信息图。
- **联网办事**：内置浏览器可以访问网站、完成在线任务；经你授权后，还能读 Mail、Messages、Notes，改 Calendar 和 Photos。
- **离线工作**：模型下载好之后，飞机上、没网的会议室里都能用，这是它相对云端 Agent 最大的优势。

但本地模型的短板要说在前面：少数派的深度体验指出，在配置一般的 Mac 上，本地大模型出词速度只有个位数到几十个 Token/秒，一个简单的 GitHub 项目分析在高思考模式下可能接近 1 小时。Qwen 3.8 27B 能干活，但不是前沿水平，别指望它替代 Claude、GPT 这类云端模型。

![Local Code 官网离线与沙盒功能展示](/images/tools/local-code/feature.webp)

## 免费还是付费

| 方式 | 价格 | 说明 |
| --- | --- | --- |
| 本地模型 | $0 | 模型下载免费，按 Token 不收费 |
| 自带 API Key | 按模型商收费，无加价 | 接云端模型时用自己的 Key |
| 云积分（预付） | $9.99 / $19.99 / $99.99 一次性 | 用官方托管模型时消耗，无订阅 |

本地运行完全免费，也没有订阅制；只有在应用内用官方托管的云模型时，才需要预付充值积分，用多少扣多少。官网还提供“Where Models Run”开关，选 On Device 就是纯本地，切换到云端的那次会话隐私承诺即失效，用之前要看清。

## 怎么用

1. 打开官网 getlocalcode.app（**认准这个域名，别去 localcode.app，那是同名异物**），点直接下载 Mac 版。
2. 按内存选模型：16GB 内存先装 Qwen 3.8 27B；32GB 以上可试 4-bit 版；48GB 以上再考虑 DeepSeek 4 Flash，下载要预留足够硬盘空间。
3. 在设置里把“Where Models Run”设为 On Device，再到 Permitted Folders 只授权一个工作文件夹，别一上来就开放整个磁盘。
4. 先派一个小任务试水，比如“分析这个表格并画一张图”，检查结果和速度都满意再扩大使用。
5. 需要云端模型补强时，再接自己的 API Key 或买预付积分；做完敏感任务记得切回本地模式。

## 国内使用注意

官网、GitHub 和模型下载在国内需要 VPN，下载模型本身就是几 GB 到几百 GB，要预留时间和稳定的网络；**装好并下载完模型之后，本地使用就不再需要联网**，这是它最适合国内用户的一点。Mac App Store 上架状态说法不一：官方发布文说“即将上架”，但搜索已能看到 App Store 列表页，**以官网现状为准，走官网直接下载最稳妥**。只支持 Apple Silicon Mac，没有 Windows、Linux 版，8GB 内存的机器基本跑不动，16GB 是起步线。国内没有同款 Mac 沙盒离线 Agent，平替思路是用 Ollama 加 OpenCode 自己拼一套本地编程 Agent，配置麻烦一些，但同样数据不出境；如果只是偶尔写代码，对速度有要求，还是云端模型更划算。
