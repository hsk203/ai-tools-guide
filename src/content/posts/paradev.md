---
title: "Paradev：同时指挥上百个编程 Agent 的桌面应用"
description: "Paradev（原 Superset）是并排跑多个编程 Agent 的桌面应用，每个任务独占一个 Git 工作树，互不干扰，改完统一审、统一合，适合同时推进多个需求的开发者。"
date: 2026-11-12
lang: zh-CN
category: coding
tags: ["AI 编程", "多 Agent", "Claude Code"]
cover: tool
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费"
needVPN: true
cnAlternative: "通义灵码、豆包 MarsCode"
updatedDate: 2026-11-12
---

Paradev（原 Superset）是并排运行多个编程 Agent 的桌面应用，每个任务独占一个 Git 工作树，互不干扰，改完统一审、统一合，适合同时推进多个需求的开发者。

## 是什么

Paradev 的定位不是又一个编程 Agent，而是“Agent 的指挥台”。Claude Code、Codex、OpenCode 这些是干活的 Agent，Paradev 是让它们同时干活的地方：一个任务开一个 Git 工作树和分支，十个 Agent 就在十个分支上并行工作，你在一个窗口里看进度、审 diff、合代码。它由 Superset 在 2026 年 10 月 26 日改名而来，同日宣布获得 Union Square Ventures 领投的 1150 万美元种子轮，官网称可扩展到 100 多个 Agent 并行。

它支持 20 多种命令行 Agent，包括 Claude Code、Codex、OpenCode、Gemini CLI、Cursor Agent、Mistral Vibe、Kimi Code、Grok CLI 等，任何 CLI Agent 都能接进来，换 Agent 不用换工作流。代码在 GitHub 开源，采用 MIT 协议（2026 年 11 月 4 日起，此前为 Elastic License 2.0），桌面版 2.0.6 发布于 2026 年 11 月 8 日。需要注意：它不替你付模型费，模型调用直接走你自己的 Agent 订阅或 API Key，Paradev 不做中间代理。

![Paradev 官网首页](/images/tools/paradev/home.webp)

## 能干什么

- **并行跑多个任务**：重构、修 Bug、写测试分给不同 Agent，各自在独立工作树里干活，不会互相覆盖文件。
- **集中审阅和合并**：看板按空闲、进行中、待处理、待审阅、已合并等状态列出任务，diff 和 PR 流程都在应用内完成。
- **自动化跑起来**：Pro 版支持按事件或定时触发 Agent，比如自动分流 Issue、起草更新日志、升级依赖。
- **远程和云端工作区**：Pro 版可通过 SSH 接远程主机、用 iPhone、iPad 应用随时查看 Agent 进度和审 diff；Team 版起提供云端工作区。
- **终端和 SDK 驱动**：除了桌面应用，还有 CLI、TypeScript SDK 和 MCP 服务器，可以用脚本或其他 Agent 来指挥 Paradev。

它的短板也很明确：工作树只隔离文件，不隔离进程，也不保证合并时没有冲突，合代码仍要人工把关；也没有内置的“第二个模型复审”机制，审阅质量取决于你自己或你配置的 Agent。

![Paradev 官网移动端功能展示](/images/tools/paradev/feature.webp)

## 免费还是付费

| 方案 | 价格 | 包含 |
| --- | --- | --- |
| Free | $0，限 1 名用户 | 本地工作区、桌面应用、CLI |
| Pro | $20/用户/月，年付 $16/用户/月 | 自动化、远程主机、iPhone / iPad 应用、Linear 和 Slack 集成 |
| Team | $60/用户/月，年付 $54/用户/月 | Pro 全部功能 + 云端工作区，每席每月 150 小时 |
| Ultra | $200/用户/月，按月付 | Team 全部功能 + 云端工作区每席每月 500 小时 |
| Enterprise | 定制 | SAML SSO、SCIM、审计日志、SOC 2 Type II 报告 |

价格以官网 paradev.com/pricing 为准。免费版对个人开发者基本够用，Pro 的价值主要在自动化和手机端查看；云端工作区是 Team、Ultra 才有的能力，按需升级。另提醒：模型费用另算，Claude、Codex 等订阅要自己另付。

![Paradev 官网定价页](/images/tools/paradev/pricing.webp)

## 怎么用

1. 打开 paradev.com 下载桌面应用（Mac 版，另有实验性 Linux AppImage），或从 GitHub Releases 获取。
2. 打开应用，连接你的代码仓库，确认已装好至少一个 CLI Agent（如 Claude Code）。
3. 新建任务，写清需求，选一个 Agent，Paradev 会为它建一个 Git 工作树和分支。
4. 需要并行时再开几个任务，各派不同 Agent，看板上实时看每个任务的状态。
5. 任务完成后在应用内审 diff，没问题就合并，有问题打回让 Agent 改；想省事可以给重复性任务配自动化规则。

## 国内使用注意

官网、GitHub 和它调用的 Agent 服务在国内都需要 VPN，下载和登录阶段先把网络准备好。平台限制要先看清：**桌面应用只支持 macOS（另有实验性 Linux 版），Windows 版官方说法是“计划中、无明确日期”**，Windows 用户目前只能观望。付费要用支持美元的信用卡或借记卡，国内银联卡一般刷不过。国内没有完全相同的并行编排工具，平替思路是通义灵码、豆包 MarsCode 这类国产编程 Agent先把单任务跑顺，再用 Git 分支手动隔离多任务；如果团队已经在用 Claude Code 或 Codex 且常年多任务并行，Paradev 的免费版值得先装来试一周。
