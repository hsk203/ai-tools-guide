---
title: "本地电脑助手（Sentient OS）"
description: "Sentient OS 是跑在 Mac 本地的开源 AI 助手：夜里读你的笔记、邮件、日历和文件，写成你能打开的 Markdown 知识库；白天用 Sidekick 帮你操作电脑、Double Tap 帮你回邮件。"
date: 2026-11-12
lang: zh-CN
category: office
tags: ["AI 办公", "本地 AI"]
cover: tool
coverImage: "/images/tools/sentient-os/home.webp"
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费"
needVPN: true
cnAlternative: "豆包电脑版、Kimi 电脑版"
updatedDate: 2026-11-12
---

Sentient OS 是把 AI 助手装进你自己电脑里的尝试：它夜里读你的资料、早上交一份准备好的工作，白天还能直接替你操作电脑。

## 是什么

Sentient OS（官网 sentient-os.ai）是一款 macOS 应用，由 Jesai Tarun 和 Aditya Vellanki 创立的 Sentient OS 公司开发，入选 Y Combinator 2026 年秋季批次，2026 年 10 月 27 日发布 2.6 版。它的核心理念是“理解发生在本地”：内置的小模型在你的 Mac 上运行，通常在夜间读取你授权的资料来源——笔记、邮件、消息、日历、文件和截图，然后把学到的关于你的人、项目和习惯，写成一堆普通的 Markdown 文件，存在你电脑上的文件夹里，你能随时打开、编辑。白天它提供 Sidekick（电脑操作助手）和 Double Tap（回信助手）两个功能。

![Sentient OS 官网首页：Hand off the work you're already doing，macOS 下载入口](/images/tools/sentient-os/home.webp)

## 能干什么

它最想解决的，是每天早上“先花一小时搞清楚今天要干什么”的问题。夜里，它会读你授权的资料，早上你醒来时，工作已经被注意到、查过资料、准备好了：比如某封邮件需要回，它已经按你的语气写好了草稿；某个订阅要续费了，它会标出来提醒；某个项目的资料散在各处，它已经汇总成一份笔记。白天，Sidekick 能接手具体操作，比如帮你整理文件、跨应用查资料、按你的指令完成多步任务；Double Tap 则专治“回 15 封邮件”的早晨，两秒写出像你写的回复，你确认后再发。需要注意的是，它的推理是分层的：本地小模型负责反复阅读和整理，真正难的推理交给由你选择的大模型，比如你自己的 ChatGPT 或 Claude 账号。

![Sentient OS 官网的用户评价](/images/tools/sentient-os/feature.webp)

## 免费还是付费

个人使用目前免费，赚钱靠企业端，这是官方 GitHub README 里写明的商业模式：“本地理解让我们的成本很低，我们的业务是企业端：工作集成、商业授权和支持。”官网的限时活动是：在应用内输入码 FINAL_1000，可终身免费，但仅限前 1,000 名。

### 个人版

- **价格**：$0
- **说明**：输入 FINAL_1000 码终身免费，仅限前 1,000 名

### 企业版

- **价格**：官网未公开，以官网为准
- **说明**：付费购买工作集成、商业授权与支持

### 外接大模型

- **价格**：另收费
- **说明**：接 ChatGPT、Claude 等按对方套餐或 API 计费

写这篇文章时（2026 年 11 月 12 日），FINAL_1000 码是否还有名额无法核实：它在官网首页抓取中没有直接出现，相关说法来自多家第三方评测转述官网活动；前 1,000 名随时可能用完，请以官网和应用内提示为准，不要默认一定能领到。企业版没有公开价目表，需要联系官方询价。

## 怎么用

1. 先确认硬件：需要 Apple 芯片 Mac（M1 或更新），macOS 15.4 或更高版本，内置模型在 8GB 内存的机器上也能跑；Intel Mac 不支持，Windows 只有等候名单。
2. 到官网 sentient-os.ai 下载 Mac 版安装，安装时在应用内输入 FINAL_1000 码（如果还有名额），再逐项授权它可以读哪些资料：邮件、日历、笔记、消息、文件、截图，只开你需要的。
3. 第一个晚上让电脑保持插电、不要关机，让它完成第一次夜间学习；第二天早上打开它生成的 Markdown 知识库，检查它对你的人、项目和习惯的理解有没有错。
4. 白天试 Sidekick：点刘海交办一个小任务，比如“把下载文件夹里的截图按日期归类”，先在旁边看着它操作，确认没问题再交办更重要的事；试 Double Tap：打开一封邮件，双击右 Command 键，看它起草的回复像不像你写的，改好再发。
5. 用一周后再决定：知识库准不准、草稿省不省时间、Sidekick 可不可靠，三项里至少两项满意再继续用；不满意就卸载，知识库文件还在你电脑上，不会被锁住。

## 国内使用注意

Sentient OS 是 Mac 专属，Windows 用户现在只能排队等，国内大量 Windows 办公电脑直接用不上。官网和下载在国内访问可能不稳定，大概率需要 VPN；它要接的 ChatGPT、Claude 在国内同样需要 VPN 和海外账号、海外支付，本地模型部分可以离线跑，但一旦用上云端大模型，网络和支付门槛就回来了。如果你是 Mac 用户、又在意数据留在本地，它值得一试；如果主力是 Windows 或中文办公场景，先观望 Windows 版和中文支持再说。
