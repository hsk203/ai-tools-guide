---
title: "Google Colab 免费 GPU 全攻略：不用买显卡，T4 免费跑模型"
description: "Google Colab 免费提供 NVIDIA T4 GPU（16GB 显存），浏览器里就能跑 Stable Diffusion、Whisper 字幕识别和小模型。本文综合 5 个 YouTube 实测教程，讲清楚怎么开通、能跑什么、免费版有哪些限制。"
date: 2026-11-13
lang: zh-CN
category: coding
tags: ["Google Colab", "免费 GPU", "T4", "AI 教程"]
cover: tool
coverImage: "/images/tools/google-colab/home.webp"
featured: false
draft: false
pricingModel: free
startingPrice: "$0"
needVPN: true
updatedDate: 2026-11-13
---

没有显卡也能跑 AI 模型：Google Colab 是 Google 提供的免费云端 Jupyter 笔记本，打开浏览器就能用，免费版自带一块 NVIDIA T4 GPU（16GB 显存），跑 Stable Diffusion 生图、Whisper 字幕识别、7B 级小模型推理都够用。本文综合 5 个 YouTube 实测教程（中文 2 个、英文 3 个），讲清楚 Colab 是什么、怎么开通 T4、实测能跑什么、免费版的限制，以及国内用户要注意什么。

![Colab 更改运行时类型，选 T4 GPU](/images/tools/google-colab/home.webp)

## Colab 是什么

Colab（Google Colaboratory）是 Google 的托管式 Jupyter Notebook 服务：代码在 Google 数据中心的 Linux 虚拟机上运行，你的电脑只负责显示浏览器页面。不用装 Python、不用装 CUDA、不用买显卡，有个 Google 账号就能开。

它和本地跑模型的区别就一句话：**算力是 Google 借你的，用完就收回**。笔记本文件可以存到 Google Drive，虚拟机本身是临时的，断开后磁盘上的东西会清空——这一点后面会细讲，先记住结论：重要文件一定要存到云端硬盘。

## 免费版能拿到什么 GPU

免费版通常分到的是 **NVIDIA Tesla T4**，一块 2018 年的图灵架构数据中心显卡：

- **显存 16GB GDDR6**（`nvidia-smi` 里显示约 15GB 可用，即 15360MiB）
- **2560 个 CUDA 核心**，计算能力 7.5，支持 FP16 / INT8 / INT4
- **系统内存约 12GB，磁盘约 100–112GB**

免费版能选的硬件加速器一般只有 T4，A100、V100、L4 等更强的卡要购买计算单元（付费）才能用。还有一点要先说清楚：**Colab 不保证免费用户一定能拿到 GPU**。官方 FAQ 原话是，可用的 GPU 和 TPU 类型会随时间变化；高峰期资源紧张时，可能只分到 CPU 运行时，或者提示暂时无法连接 GPU。这是免费版最大的不确定性，不是你操作错了。

## 怎么开通：四步选 T4

1. 打开 colab.research.google.com，用 Google 账号登录，点「新建笔记本」。
2. 点顶部菜单「代码执行程序」（英文界面是 Runtime）→「更改运行时类型」（Change runtime type）。
3. 在「硬件加速器」里选 **T4 GPU**，点「保存」。
4. 点右上角「连接」，等出现绿色对勾和内存/磁盘用量条，就连上了。

连上之后先验证一下，确认真的拿到了 GPU。在代码格里运行：

```
!nvidia-smi
```

输出里应该能看到 Tesla T4 和约 15GB 显存。如果报错或显示没有 GPU，说明这次没分到资源，稍后再试，或者换个时段——高峰期确实会分不到。

## 实测能跑什么

综合几个视频的实测，免费 T4 的能力边界大概是这样：

- **AI 生图（Stable Diffusion）**：SD 1.5、SDXL 这类模型没问题。有教程实测 SDXL 占用约 7.1GB 显存，远在 16GB 之内；ComfyUI 也能在免费 T4 上跑，用 INT8 量化模型，首图约 3.5 分钟出图。大一点的新模型（如 20GB 以上的权重）就装不下了，别硬上。
- **Whisper 字幕识别**：这是中文教程里最实用的场景。把视频传到 Google Drive，在 Colab 里跑 Whisper 一键脚本生成字幕。有博主实测：自己手动搭环境至少要 10 分钟（光下载就要 7 分钟），一键脚本 2 分钟就能准备好环境开始识别；识别模型可以缓存在云端硬盘里，下次不用重新下载。
- **小模型推理**：7–8B 的开源模型是甜点区。比如 llama3.1:8b 下载约 4.9GB，装 Ollama 后在 T4 上能正常对话；1B、2B 的小模型更快。想跑 70B 这种大模型就别想了，显存不够。
- **小模型微调与训练**：LoRA 微调小模型、MNIST 这类入门训练都可以。有完整教程用免费 T4 训 MNIST 达到 98% 以上准确率；学 CUDA 编程也可以在 T4 上练手，不用自己买卡。
- **ComfyUI 等带界面的工具**：能跑，但免费版有个坑——通过隧道暴露的公开链接（如 Gradio / Cloudflare 链接）在运行时结束就失效，而且免费版不支持后台执行，关掉页面任务就停了。临时体验可以，别当成长期服务。

![Whisper 笔记本选 T4 GPU 并挂载云端硬盘](/images/tools/google-colab/whisper.webp)

## 免费版的限制（先知道，再动手）

免费之所以免费，是因为限制写得很清楚：

- **单次会话最长 12 小时**：连续用满 12 小时会被断开，而且经常不到 12 小时就断了。
- **闲置约 90 分钟断开**：页面没操作一段时间会先弹「你还在吗？」的提示，不回应就断开。
- **没有公开的免费额度**：Google 不公布免费版能用多少小时，额度按资源情况动态分配。用得太猛会被临时限制，常见提示是「由于使用量限制，目前无法连接 GPU」，一般要等一天左右才恢复。
- **虚拟机是临时的**：断开后磁盘清空，所有没保存的文件都没了。正确姿势是挂载 Google Drive，把数据、模型、结果都存到云端硬盘里；免费 Google 账号的 15GB 空间是 Drive、Gmail、Google Photos 共用的。
- **不能当 24 小时服务器**：免费版不支持后台执行、定时任务，拿它挂长期服务是违反使用规则的，迟早会被限流甚至封号。

一句话总结：**免费 T4 是绝佳的试验场，不是生产环境。** 学习、做实验、跑一次性任务很合适；要长期稳定跑，就得付费。

## 国内用户注意

Colab 是 Google 的服务，国内直连通常打不开，需要能访问 Google 的网络（和 Gmail、YouTube 同一个条件），再加一个 Google 账号。账号本身免费注册，登录后就能用，不用绑信用卡——这也是它比很多云 GPU 平台门槛低的地方。

另外提醒一句：Colab 界面和菜单有中文版，跟着教程点「代码执行程序 → 更改运行时类型」就能找到，不用怕英文界面。

## 什么时候值得升级付费版

出现下面几种情况，再考虑付费：

- 经常在高峰期分不到 GPU，或者被用量限制挡住；
- 要跑 A100、L4、H100 这类大卡，或者要更大的显存和内存；
- 任务一次跑超过 12 小时，或者需要后台执行、不断线；
- 要把模型挂成长期可用的服务。

付费方式有按月订阅的 Colab Pro、Pro+，也有按量购买的计算单元（Compute Units），高级 GPU 按计算单元扣费。**具体价格以官网为准**（2026 年第三方资料所见约 Pro 9.99 美元/月起，按量约 9.99 美元买 100 计算单元；第三方实测 100 计算单元约能跑 80–90 小时 T4，仅供参考，官方不公布换算标准）。另外从 2026 年 9 月起，Google AI 订阅也附带 Colab 计算单元，有 Gemini 会员的话可以先看看自己账号里有没有额度再决定要不要单独买。

对大多数人来说，先把免费版用熟、确认自己真的需要长期算力，再付费也不迟。

## 适合谁

- **想学 AI 但没显卡的人**：学 PyTorch、训小模型、练 CUDA，免费 T4 完全够用。
- **做自媒体、剪视频的人**：Whisper 字幕识别、SD 生图这类一次性任务，用完就关，成本为零。
- **想试开源模型的人**：7B 级模型先在 Colab 上跑通，再决定要不要本地部署。

不适合的是：要 24 小时在线的服务、要跑大模型微调、或者每天高强度用 GPU 的人——免费额度撑不住，付费或租卡更划算。

## 参考视频

本文综合了以下 5 个 YouTube 视频（中文 2 个、英文 3 个），核心事实均经多个来源交叉验证：

1. **ITCoderGao《谷歌太夯了！免费 GPU 云服务器给你用，额度充足，实测跑模型很丝滑，手把手教你如何使用 | google colab 使用教程》**（中文，2026-11-13）：手把手实测教程，从开通到跑模型全流程，描述里附了可直接打开的 Colab 笔记本链接。https://www.youtube.com/watch?v=Gkds30pVu6U
2. **《用谷歌 Colab 加速字幕识别！Colab 免费 GPU 应用实操详解》**（中文）：以 Whisper 语音识别为例，讲 T4 免费 GPU、挂载云端硬盘保存数据、一键脚本 2 分钟准备环境，以及免费版 12 小时上限、额度动态分配。https://www.youtube.com/watch?v=6fn_1QsdNaQ
3. **ErrorFixer《Google Colab Complete Tutorial — Free Cloud Python, GPU, ML & Data Science》**（英文，2026-08-27）：完整入门教程，T4 约 15GB 显存、单次最长 12 小时、闲置约 90 分钟断开、MNIST 实测 98% 以上准确率，并讲了免费/按量/Pro/Pro+ 的价格档位。https://www.youtube.com/watch?v=5BYV6_1Bjoc
4. **Free Files《How To Get a FREE GPU in 2026 — No Credit Card No Crack》**（英文）：T4 16GB 显存，强调不用信用卡，逐步演示更改运行时类型选 T4 的操作。https://www.youtube.com/watch?v=cPahL-4XCjk
5. **《Get FREE High CPU, GPU & Storage on Google Colab in 2026 | Complete Guide》**（英文）：讲怎么把免费的 GPU、CPU、内存、存储用到满，约 15GB 显存、约 112GB 磁盘，覆盖 Stable Diffusion、Whisper、LLM 等场景。https://www.youtube.com/watch?v=18_MM6meN1c
