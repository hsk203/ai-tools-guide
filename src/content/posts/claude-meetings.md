---
title: "Claude 会议助手（Claude Meetings）"
description: "Claude Meetings 是 Anthropic 为团队推出的 AI 会议助手，能以可见参会者身份加入 Google Meet，边开会边记笔记、答问题、起草计划，会后把纪要和待办留在 Claude 里。"
date: 2026-11-12
lang: zh-CN
category: office
tags: ["AI 办公", "会议记录"]
cover: tool
coverImage: "/images/tools/claude-meetings/pricing.webp"
featured: false
draft: false
pricingModel: paid
startingPrice: "$25/席/月（Team Standard）"
needVPN: true
cnAlternative: "飞书妙记、腾讯会议 AI 小助手"
updatedDate: 2026-11-12
---

Claude Meetings 是让 Claude 直接“坐进”视频会议里干活的 AI 会议助手：它边听边记、边聊边写，会后留下一份能直接用的纪要和待办清单。

## 是什么

Claude Meetings 是 Anthropic 在 2026 年 11 月 10 日随 Claude Sheets、白板一同推出的办公新功能，定位是团队的 AI 会议成员。它不是会后上传录音再转写的工具，而是在会议进行中就加入通话的参与者。据 TechCrunch、路透社等现场报道，它上线时只支持 Google Meet，Anthropic 自己的公告页则写着“即将推出（coming soon）”，两者口径并不完全一致，说明它仍处于分批上线阶段。加入后，Claude 会在参会者名单里可见，并在会议聊天中发一条提示，表明自己是 AI 参会者。它还能调用已连接的工作应用里的数据，并在讨论中把计划画到 Claude 白板上。它默认不进有外部嘉宾的会议，除非管理员明确允许；如果中途有外部嘉宾加入，它会自动退出。

## 能干什么

它最核心的价值，是把“开会”和“出活”合并成同一件事。会议进行中，Claude 会跟随讨论，实时记录要点，不用再由某个人低头记笔记；讨论到某个方案时，它可以直接起草计划、排时间线、标负责人。有人在会议聊天里提问，它能当场回答，还能从已连接的应用里拉数据佐证。会后，笔记、待办事项和它在会中生成的材料都会保存在 claude.ai 里，团队可以直接接着改、接着分派。对经常开跨部门会、项目复盘会的团队来说，这意味着会后不用再花半小时整理纪要，也减少了“会上说好了、会后没人认”的扯皮。当然，它目前的短板也很明显：只支持 Google Meet，其他平台要等后续；它能做的事高度依赖会议本身讨论得是否清楚，含糊的讨论只会得到含糊的纪要。

## 免费还是付费

Claude Meetings 没有单独定价，也没有免费档，它是 Team 与 Enterprise 套餐里的 beta 功能，个人免费版和 Pro 版目前都用不上。费用就是你为团队套餐付的钱，用量计入套餐额度。

| 套餐 | 价格（美元，不含税） | 能用 Claude Meetings 吗 |
| --- | --- | --- |
| Free | $0 | 不能 |
| Pro | $20/月，按月付；年付 $17/月 | 不能 |
| Team Standard | $25/席/月，按月付；年付 $20/席/月 | 可以（beta） |
| Team Premium | $125/席/月，按月付；年付 $100/席/月 | 可以（beta） |
| Enterprise | $20/席/月，年付，另按 API 用量计费 | 可以（beta） |

以上套餐价来自 Claude 官网定价页（claude.com/pricing，2026 年 11 月 12 日核对），Team 需至少 2 个席位、最多 150 席。Anthropic 没有公布 Meetings 单独收费或正式版的定价，正式发布后是否加价、是否下放到 Pro，都以官网为准。

![Claude 官网定价页，个人套餐 Free、Pro、Max、Ultra 四档价格](/images/tools/claude-meetings/pricing.webp)

## 怎么用

1. 确认团队已开通 Claude Team 或 Enterprise 套餐，并由管理员在组织设置里开启 Meetings 功能，同时确认是否允许它加入有外部嘉宾的会议。
2. 在 Google Meet 里发起或加入会议，在 Claude 里把 Claude 添加为参会者；它会出现在参会者名单中，并在聊天里自我介绍。
3. 正常开会即可，讨论中可以直接在会议聊天里向 Claude 提问，比如“把刚才说的上线计划排成时间线”，或让它把讨论画到白板上。
4. 会议结束，到 claude.ai 里查看 Claude 生成的笔记和待办事项，逐条核对负责人、日期和数字，改对后再发给团队或同步到项目管理工具。
5. 第一次使用建议先在内部周会试一次：会前定好议程，会后对照录音抽查两三条纪要，确认准确率再用到客户会议上。

## 国内使用注意

Claude 官网和服务在国内不能直接访问，需要 VPN；注册和付费也要用海外邮箱与支持美元结算的银行卡，国内银行卡大概率会被拒。Team 套餐按席位收费，2 个人起步，一个月至少约 50 美元，个人或两人小团队要先算好账，别为了一个会议功能硬上团队版。国内平替可以先试飞书妙记或腾讯会议 AI 小助手：它们能做会后转写、纪要和待办，虽然做不到“开会时边聊边在白板上画计划”，但对大多数中文会议已经够用，而且支持中文会议、国内支付和合规要求。如果你团队本身就在用 Google Meet、又已经是 Claude Team 用户，Meetings 值得一试；如果只是想找个会议记录工具，先用国内平替更划算。
