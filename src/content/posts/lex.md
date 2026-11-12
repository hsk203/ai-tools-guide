---
title: "Lex：极简 AI 写作应用（已停止新用户注册）"
description: "Lex 曾是最受写作者喜爱的极简 AI 写作应用，但 2026 年 9 月底创始人宣布年底前关停、10 月起已停止接受新用户。这篇写给还在用它的老用户，以及想学它长处的人。"
date: 2026-11-12
lang: zh-CN
category: writing
tags: ["AI 写作", "文档编辑"]
cover: tool
featured: false
draft: false
pricingModel: freemium
startingPrice: "$0（新用户已停止注册）"
needVPN: true
cnAlternative: "飞书文档"
updatedDate: 2026-11-12
---

**⚠️ 先说最重要的事：Lex 已于 2026 年 10 月起停止接受新用户，创始人宣布将在年底前逐步关停。新用户请直接看文末的替代方案；老用户请先备份，再继续往下读。**

**Lex 曾是最受写作者喜爱的极简 AI 写作应用：一个安静的写作页面，AI 藏在旁边随叫随到，从不抢戏。**

## 是什么

Lex 2022 年秋天诞生于 newsletter 公司 Every 的内部项目，一夜之间约 2.5 万人加入等候名单，2023 年独立成公司并拿到 275 万美元种子轮融资。定位一直没变：精简版 Google Docs + 内置 AI，不是一个聊天框。

2026 年 9 月底，创始人 Nathan Baschez 发文宣布加入 Notion，Lex 将在年底前逐步关停，Roughdraft 将作为独立开源项目继续。2026 年 10 月的核查显示，lex.page 首页挂出横幅：“Lex is no longer accepting new customers. Existing accounts will keep working as usual.”（Lex 不再接受新用户，现有账号可继续正常使用。）

## 能干什么

以下功能针对仍可正常使用的老用户账号：

- **Checks 行内改稿**：Lex 最出名的功能。选中一段运行 Checks，它会按精简、语法、可读性等目标逐行给建议，粉色高亮标在草稿里，点“?”还能追问理由。
- **Ask Lex**：就着当前文档对话，问结构、问论证、要反馈，不用把文章复制到别的工具里。
- **多模型切换**：Lex 不自研模型，而是让你在写作时换模型用。Pro 默认 GPT-4.1，另有 Claude 4 Opus / Sonnet、GPT-5 等可选，免费版用较小的模型。
- **自定义提示词与风格指南**：保存常用的提示词供团队复用；Style Guide 让 AI 学习你的文风；Knowledge Base 存共享参考资料。
- **版本与协作**：Rewind 可以 scrub 整条编辑历史、恢复任意时刻；实时协作免费，分享链接就能一起写；导出支持 Word、PDF、Markdown、HTML、LaTeX 五种格式，也能发到 Google Drive。

没做出来的也有：Track Changes（修订模式）至今仍标着“Coming soon”，Windows 版只停留在预告阶段，2025 年 8 月支持 GPT-5 之后更新基本停滞。

## 免费还是付费

免费增值，但新用户已经买不了了。官网定价页现在只剩一句话：“Pricing information for existing users only.”（仅面向现有用户的定价信息），不再公开标价。

| 方案 | 情况 |
|---|---|
| 免费版 | $0，核心编辑器与协作免费；AI 用量有限（每天 30 次 Ask Lex、每月 30 次 Checks，另有较低的每日 AI 处理额度） |
| Pro | 最后一次公开价（2025 年 7 月）：$24.99/月，或 $179.88/年（约 $14.99/月）；解锁 GPT-4.1、Claude 4 等高级模型、iOS 应用与优先邮件支持 |
| 退款 | 官网称用了一个月不满意可邮件申请退款；创始人承诺关停时也会提供退款与导出通道 |

注意：网上流传的“Pro 约 $12/月”是旧价，2025 年 7 月已涨到 $24.99/月（年付约 $14.99/月），且官网现已不再公开标价。截至 2026 年 10 月底，具体的关停日期、导出工具和退款细则尚未公布。

## 怎么用（老用户）

1. 登录 lex.page，打开要继续写的文档。
2. 写完一段就选中它运行 Checks，逐条看建议、逐条接受，别一键全接受。
3. 结构或论证卡住了，用 Ask Lex 追问，比如“这段论证哪里最弱”。
4. 把常用的改稿要求存成自定义提示词，把文风要求写进 Style Guide。
5. **立即备份**：逐篇导出 Markdown（转 Notion 或 Markdown 工具最干净），Word 格式适合转 Google Docs；风格指南和自定义提示词没有批量导出，手动复制保存成纯文本。
## 国内使用注意

- **要 VPN**：官网在国内直连不稳定，注册和使用建议走 VPN。
- **新用户不要再找注册入口**：官网横幅已明确关闭，网上流传的旧版注册教程和邀请链接都已失效。
- **老用户立即备份**：不要等官方的导出工具，创始人承诺的 offramp 工具截至 2026 年 10 月底还没影；全量导出也没有官方批量入口，文档多的话可以用开发者 API（lex.page/api/v1）先拉一份清单再逐篇导。
- **平替**：创始人去了 Notion，Notion + Notion AI 是最接近的落点，并承诺给 Lex 用户折扣；行内改稿看 Grammarly 或 ProWritingAid；中文协作文档看飞书文档；想接着用 Lex 的思路写 Markdown，试 Lex 团队的开源接替工具 Roughdraft（`npm i -g roughdraft`）。

> 参考来源：Lex 官网定价页（lex.page/pricing，2026-11-12 核对，仅余“现有用户”说明）；AI Ignitions《Lex Review: The AI Writing Editor That Stopped Taking New Users》（2026-10-14，10 月 24 日核查）；The AI Directory《Lex Review 2026》（2026-09-21 核对价格）；ToolRadar《Lex Reviews, Pricing & Alternatives》（2026-10-01 核对官网）。
