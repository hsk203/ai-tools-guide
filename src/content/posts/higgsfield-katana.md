---
title: "Higgsfield Katana：在 Claude 里复刻爆款剪辑的 AI 技能"
description: "Higgsfield Katana 是跑在 Claude 里的视频编辑技能，拿一条参考成片加最多 5 张照片，就能复刻它的镜头结构和节奏，换成你自己的人物和产品。"
date: 2026-11-12
lang: zh-CN
category: video
tags: ["AI 视频", "Claude", "视频剪辑"]
cover: tool
coverImage: "/images/tools/higgsfield-katana/home.webp"
featured: false
draft: false
pricingModel: freemium
startingPrice: "$15/月起（按年付）"
needVPN: true
cnAlternative: "剪映、即梦 AI"
updatedDate: 2026-11-12
---

Higgsfield Katana 是 Higgsfield 在 2026 年 10 月 8 日推出的 Claude 技能：拿一条你喜欢的参考成片，再加最多 5 张照片，它就能按原片的镜头结构和节奏，复刻出属于你自己的人物和产品的版本。

## 是什么

Katana 不是一个独立的剪辑软件，而是一个跑在 Claude 对话里的 Higgsfield 技能，通过 Higgsfield MCP 连接器工作。它不从零生成视频，而是“照着抄”：先读懂参考成片的镜头顺序、时长和卡点，再用你照片里的人物、产品或服装替换进去，重新生成并拼成一条新片。输出的 MP4 会保持参考片的时长、画幅和帧率，这些参数在 Claude 里不能单独改。Katana 适合已经知道成片应该长什么样的场景，比如看到一条爆款产品视频、时尚短片或转场剪辑效果很好，想换成自己的货来拍同款。

![Higgsfield 官网首页：视频作品展示与 MCP、Seedance 等产品入口](/images/tools/higgsfield-katana/home.webp)

## 能干什么

- **复刻参考剪辑**：上传自己的参考视频，或从 Katana 预设库里挑一个现成的，Katana 会按原片的镜头顺序、节奏和卡点重建一条新片。
- **换角换产品**：最多上传 5 张人物、产品或服装照片，Katana 把它们放进参考片的各个镜头里，保持形象一致。
- **风格迁移与动作迁移**：预设库分三类，个性化剪辑是整条复刻，风格迁移是把参考片的视觉风格搬到你的素材上，动作迁移是把参考片的运镜和动作搬过来。
- **对话里改片**：生成后直接在 Claude 里用 plain 话提修改意见，比如“换第三个镜头”“把产品特写再放大一点”，只有受影响的镜头会重新生成，不用整条重做。
- **批量换版本**：同一条参考片换一套照片就是一个新版本，适合一个产品拍多条同款变体、一个模板出多个达人版本。Katana 还能和同一连接器里的 Genjutsu 等工具配合，先做动作迁移或物体替换，再拿结果当 Katana 的参考片。

## 免费还是付费

Katana 本身没有独立定价，不单独收费，用的是你已有的 Higgsfield 订阅积分，在 Claude 里跑也没有加价。每次生成前，Claude 会弹一张卡片显示这次要花多少积分，确认后再扣费；如果修改需要重新生成镜头，会额外扣积分。Higgsfield 的订阅分三档，积分按月清零、不结转：

### Starter

- **月付**：$19
- **按年付（折合每月）**：$19
- **每月积分**：270

### Plus

- **月付**：$59
- **按年付（折合每月）**：$47
- **每月积分**：1,200

### Ultra

- **月付**：$129
- **按年付（折合每月）**：$99
- **每月积分**：3,000

不同来源核对到的价格略有出入：有 2026 年 10 月底核对的记录是 Starter $19、Plus $59/$47、Ultra $129/$99，也有较早的记录是 $15/$39/$99，原因是官方定价会按地区和促销调整，上面这张表以 10 月底的核对为准，付款前以官网为准。另注意两点：Katana 每条剪辑没有固定积分价，实测一条约 12.7 秒的剪辑花了约 154 积分；MCP 通道永远扣积分，网页端的免费生成在 Claude 里用不了。

## 怎么用

1. 先在 Higgsfield 官网注册并开通付费订阅，免费档没有积分，跑不了 Katana。
2. 在 Claude（网页版或桌面版）里打开 Settings → Connectors，点 Add custom connector，名字填 Higgsfield，MCP 地址填 `https://mcp.higgsfield.ai/mcp`，连接后登录 Higgsfield 账号授权，不需要 API Key。
3. 在 Claude 里输入 `/katana` 打开预设库，或输入 `/katana/预设名` 直接跑某个预设，也可以直接说“用 Higgsfield 帮我按这个视频做一条产品剪辑”。
4. 按提示上传参考视频，再通过 Higgsfield 弹出的上传窗口传最多 5 张照片（直接贴在 Claude 对话框里的图片不会被传过去），也可以给一个媒体文件的直链；Instagram 或 TikTok 主页链接不能用。
5. 看 Claude 显示的积分卡片确认价格，生成后在对话里直接提修改意见，改好后在聊天窗口预览并下载，成片同时会存到 Higgsfield 的 Assets 里。

## 国内使用注意

Claude 和 Higgsfield 在国内都需要 VPN 才能访问，Higgsfield 订阅要用海外支付方式，价格还可能因地区不同而浮动。参考视频一定要用自己拥有版权或已获授权的成片，包括里面的音乐、画面、人物和 Logo，直接搬运别人的爆款视频有侵权风险，Katana 官方也明确要求这一点。中文提示词能用，但 Claude 里的指令和预设名建议用英文，生成效果更稳。国内平替可以先用剪映的模板和智能剪辑复刻同款结构，或用即梦 AI 生成单镜头再拼剪，虽然没有 Katana 这种“参考片加照片一键复刻”的流程，但胜在不用 VPN、不用海外支付。

来源：Higgsfield 官方博客、Higgsfield 官网 Katana 页、Higgsfield 定价页（经 Blotato、Voyager 核对）、GenMediaLab 实测、RiffKit 教程。
