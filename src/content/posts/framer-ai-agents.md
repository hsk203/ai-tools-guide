---
title: "Framer AI Agents（Framer AI 智能体）"
description: "Framer 内置的 AI 智能体，一句话生成、改版、翻译网站，所有改动都在画布上可编辑，免费档含 500 个 AI credits 试用。"
date: 2026-11-12
lang: zh-CN
category: art
tags: ["AI 绘画", "AI 建站", "网站设计"]
cover: tool
featured: false
draft: false
pricingModel: freemium
startingPrice: "$0 起，Basic $10/月"
needVPN: true
cnAlternative: "CoDesign"
updatedDate: 2026-11-12
---

Framer AI Agents 是建站工具 Framer 内置的 AI 智能体，它不是给你一张设计稿图片，而是直接在你的网站项目里建页面、改文案、调版式，改完点发布就能上线。

## 是什么

Framer 本来就是设计师常用的无代码建站工具，2026 年 6 月的 Framer 3.0 把 AI 智能体放进了编辑器。官方定义是“一组内置于 Framer 的 AI 智能体”：从一句话或一个现有网站出发，让智能体创建页面、优化布局、更新 CMS 内容或检查 SEO，所有结果都落在画布上，保持可编辑。除了内置智能体，Framer 还提供 MCP 服务器，能把 Claude Code、Cursor、Codex 等外部 AI 工具连进 Framer 项目，2026 年 10 月上线时处于免费预览阶段，用量算在你自己的 AI 工具账上，不消耗 Framer 的 AI credits。

![Framer 官网首页，带 AI 设计智能体的专业建站工具](/images/tools/framer-ai-agents/home.webp)

## 能干什么

- **一句话建站**：描述你要的网站，比如“给一家咖啡馆做一页落地页，暖色调，突出周末市集”，智能体生成页面结构、文案和版式。
- **改现有网站**：不用重新生成整站，直接说“把首页标题换大一点”“给产品页加一个价格表”，智能体只改指定部分。
- **管 CMS 与多语言**：更新 CMS 条目、批量改文案、做 AI 翻译，把网站翻成多语言版本。
- **SEO 检查与修复**：让智能体检查页面 SEO 问题并给出修改建议。
- **安全迭代**：改动可以先放进分支（Branches），在画布上检查确认后再合并发布，不怕 AI 一次改坏线上站；Skills 功能还能把你的工作方式存成可复用的指令，Contexts、Chats、Mentions、References 则用来给智能体喂上下文、图片和参考链接；模型可在 GPT、Sonnet、Opus、Fable 之间切换。

![Framer AI 官网的 AI 设计界面](/images/tools/framer-ai-agents/feature.webp)

## 免费还是付费

免费增值，AI 按 credits 计费，额度随站点套餐走，价格按站点算（不是按团队）：

| 套餐 | 价格（年付） | AI credits | 说明 |
| --- | --- | --- | --- |
| Free | $0 | 500，一次性试用 | Framer 子域名，仅限非商业用途 |
| Basic | $10/月（月付 $15） | 1000/月 | 可绑自定义域名，首月 credits 翻倍 |
| Pro | $30/月（月付 $45） | 3000/月 | 含 staging、分支、重定向，首月 credits 翻倍 |
| Enterprise | 定制 | 定制 | 联系销售 |

一个第三方实测显示，在免费账号里做一个落地页花了 142 credits，照此估算 Free 的 500 credits 约够做 3 次、Basic 每月约 7 次、Pro 每月约 21 次；Framer 官方则按每次约 300 credits 估算，实际消耗因任务复杂度而异，额度用到 80% 时会收到提醒。额外编辑席位 $20/月，内容编辑席位 $10/月。

![Framer 官网定价页，Free、Basic、Pro 三档套餐与 AI credits 额度](/images/tools/framer-ai-agents/pricing.webp)

## 怎么用

1. 打开 framer.com 注册账号，新建一个项目（或打开已有项目）。
2. 在编辑器里打开 AI 聊天，说清你要做什么，比如“做一个三栏的产品介绍页，配一张主图和三个卖点”。
3. 智能体在画布上直接改动，你逐项检查：文案、间距、配色、图片，不满意就让它再改一版，或自己动手微调。
4. 复杂的改动先放进分支确认，确认无误再合并；满意后点发布，Free 套餐发布到 Framer 子域名，付费套餐可绑自己的域名。
5. 想用外部 AI 工具改站，可接 Framer MCP，让 Claude Code 或 Cursor 直接读写你的 Framer 项目。

## 国内使用注意

Framer 官网与编辑器需要 VPN 访问，订阅需海外支付方式，国内银行卡一般无法直接付款。免费档只能发到 Framer 子域名且官方建议仅限非商业用途，正式商用至少要上 Basic（$10/月，年付）才能绑自己的域名。AI credits 是按工作区共享的额度，团队多人共用一个工作区时要留意消耗速度；额度用完后 AI 功能会暂停，直到下月重置或升级套餐。国内平替可选 CoDesign、墨刀（原型）或上线了等无代码建站工具，但它们没有 Framer 这种“智能体直接在画布上改站”的体验；如果只是要一个简单的展示站，用国内建站工具更快更便宜，只有当你需要 Framer 的设计自由度与 AI 改站流程时，才值得翻墙付费。

参考来源：Framer 官网 AI 页面与定价页；Framer 帮助中心 AI credits 说明；SaaSCRMReview、Goodspeed、AnyGen 第三方价格核对与实测。
