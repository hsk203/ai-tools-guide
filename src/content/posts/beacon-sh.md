---
title: "Beacon（beacon.sh）：给编程 Agent 装上跨工具记忆"
description: "Beacon 是开源的编程 Agent 记忆层，把 Claude Code、Cursor、Codex 等 20 多个工具的会话打通，修过的 Bug、下过的结论不用换个工具就重讲一遍。"
date: 2026-11-12
lang: zh-CN
category: coding
tags: ["AI 编程", "Agent 记忆", "Claude Code"]
cover: tool
coverImage: "/images/tools/beacon-sh/home.webp"
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费"
needVPN: true
updatedDate: 2026-11-12
---

Beacon 是 Asymptote Labs 开源的编程 Agent 记忆层，让 Claude Code、Cursor、Codex 等 20 多个工具共享同一份会话记忆，换工具不用从头再讲一遍项目。

## 是什么

Beacon 解决的是一个很具体的痛点：每个编程 Agent 会话结束就失忆，今天在 Claude Code 里修好的 Bug、定下的架构约定，明天换到 Cursor 或 Codex 又要重新解释一遍。它于 2026 年 10 月发布，采用 MIT 开源协议，开发商 Asymptote Labs 拿到了 550 万美元种子轮融资，11 月 2 日登上 Product Hunt 当日第一。

它的原理是坐在 Agent 之上、而不是某个工具之内：记录各工具的会话，包括提示词、回复、工具调用、命令、文件操作、审批、MCP 交互和 Token 用量，统一成一套事件模型，默认写成本地 JSONL 文件。随后用 Jev 这类评估器筛出真正值得学习的运行，由人审核后提炼成可复用的技能，再通过 MCP 或 Agent Skills 交给下一个 Agent 调用。也就是说，它不是简单存聊天记录，而是把“踩过的坑”变成“下次自动遵守的规则”。

![Beacon 官网首页](/images/tools/beacon-sh/home.webp)

## 能干什么

- **跨工具找回上下文**：在 Claude Code 里修好的问题，换到 Cursor 后让 Agent 先搜一下 Beacon，就不用再讲一遍背景。
- **把经验沉淀成技能**：重复出现的改法、调试套路经审核后变成技能，装进 `~/.agents/skills` 或 `~/.claude/skills` 供各工具复用。
- **发现风险和浪费**：云端版会标记泄露的密钥、重复的重试循环等低效行为，并附证据和修复建议。
- **看清 Token 花销**：统一时间线里能看到各工具、各会话的 Token 消耗，方便定位哪个任务最烧钱。
- **团队共享记忆**：Team 版提供共享命名空间和组织级 API Key，适合多人共用一套项目经验。

需要注意的是，不同工具的记录完整度不一样：官方支持矩阵显示，Claude Code 捕获最完整，Codex CLI 不记录文件活动，Cursor 不记录 Token，具体以官方矩阵为准。另外目前没有任何公开基准能证明它省了多少 Token 或时间，别把它当成省钱工具。

## 免费还是付费

### 开源本地版

- **价格**：$0
- **包含**：本地记录、本地检索

### Beacon Cloud

- **价格**：$0
- **包含**：20+ 个 Agent、统一时间线、50 条 findings、MCP 会话搜索

### Beacon Cloud Pro

- **价格**：$20/月，年付 $15/月
- **包含**：findings 不限量、Agent 自存自取记忆、完整 MCP、实时提醒

### Beacon Cloud Team

- **价格**：$30/席/月，另加 $10/月基础费（年付 $5/月），最多 20 席
- **包含**：Pro 全部功能 + 团队共享工作区

### Enterprise

- **价格**：定制
- **包含**：SSO、审计日志、自选存储区域

价格以官网定价页和官方文档为准。免费版能搜历史会话，但“Agent 自己存记忆、下次自己取回”这个核心能力要 Pro 才有。另据第三方评测指出，官网定价页不同位置对 Team 的表述有出入，付费前务必以结算页显示为准。

![Beacon 官网定价页](/images/tools/beacon-sh/pricing.webp)

## 怎么用

1. 在 Mac 上用 Homebrew 安装：`brew update && brew trust asymptote-labs/tap && brew tap asymptote-labs/tap && brew install beacon && beacon endpoint install`，Linux 有安装包，Windows 有 MSI。
2. 运行交互式安装，它会引导登录 beacon.sh，**注意这一步默认预选 Beacon Cloud**，想让数据只留本机要手动改选 Local，确认后再继续。
3. 照常使用 Claude Code、Cursor、Codex 等工具，Beacon 会在后台记录会话。
4. 打开仪表盘查看 findings，对有价值的结论点批准，提炼成技能。
5. 下次换工具开工时，让 Agent 先通过 MCP 检索 Beacon 里的相关会话和技能，再动手改代码。

## 国内使用注意

官网、GitHub 和它依赖的模型服务在国内都需要 VPN 才能稳定访问，安装和登录阶段要先准备好网络。最关键的一点是隐私：**安装默认走云端，确认后会话会发往境外服务器**，涉及公司代码、密钥和客户项目时，先选 Local 模式，只在本机跑；免费版的 50 条 findings 很快会用完，先用免费版在真实项目上跑一两周，确认“换工具真能找回记忆”再考虑付 Pro。国内目前没有同款跨工具记忆产品，平替做法是把项目约定写进各工具的规则文件（如 CLAUDE.md），再配合各工具自带的记忆功能，效果弱一些，但零成本、数据不出境。
