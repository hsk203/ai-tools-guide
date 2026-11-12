---
title: "Ideogram Vector 1.0（Ideogram 矢量 1.0）"
description: "Ideogram 2026 年 10 月 22 日发布的矢量模型，一句话生成可编辑的 SVG，或把已有图片转成矢量，Logo、海报、贴纸做完直接进 Illustrator 改。"
date: 2026-11-12
lang: zh-CN
category: art
tags: ["AI 绘画", "矢量图", "Logo 设计"]
cover: tool
coverImage: "/images/tools/ideogram-vector/home.webp"
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费起，API $0.13/张起"
needVPN: true
updatedDate: 2026-11-12
---

Ideogram Vector 1.0 是 Ideogram 2026 年 10 月 22 日发布的矢量模型，它解决的是 AI 出图的一个老痛点：以前 AI 给你的都是位图，放大就糊、改颜色要重画；它直接给你可编辑的 SVG，放大到广告牌也不虚。

## 是什么

Ideogram 本来就以“文字渲染准”出名，Vector 1.0 是它的第一个矢量模型，也是目前少数能一句话生成真正可编辑 SVG 的 AI 工具。生成的不是一张“看起来像矢量”的图，而是由独立形状组成的 SVG 文件，可以在 Illustrator、Figma、Canva 里逐个选中形状改颜色、改大小、删元素。模型同时在 Ideogram 网页应用和 API 上线，官方说法是“所有套餐都可用”。它有两种模式：文字转矢量和图片转矢量，后者不需要写提示词，上传已有 artwork 就能转。

![Ideogram Vector 官网模型页，从一句话或一张图生成可编辑矢量图](/images/tools/ideogram-vector/home.webp)

## 能干什么

- **文字转矢量**：写一句描述，比如“复古徽章风格的咖啡店 Logo，圆形，棕色配米白”，直接生成可编辑 SVG，还能加参考图定风格。
- **图片转矢量**：上传 JPG 或 PNG，把已有插画、Logo、手绘稿转成矢量，放大印刷、做周边、刻字都不糊。
- **Logo、贴纸、印花、海报**：官方定位就是 Logo、印刷品、插画和贴纸这类“要落到实物上”的设计，做完能直接交付印刷厂或上传 Etsy 售卖。
- **品牌色与逐形状精修**：生成后可按品牌色调整配色，逐个形状微调，不用整张重画。
- **API 接入**：两个接口，`POST /v2/svg/generate/ideogram-vector-1`（文字生成）和 `POST /v2/svg/vectorize/ideogram-vector-1`（图片转矢量），一次请求最多生成 8 张，适合批量做 Logo 方案或贴纸系列。

## 免费还是付费

免费增值：免费账号每周有 30 credits（仅限 Google、Apple 或 Microsoft 登录，邮箱密码注册没有），一张低质量 SVG 约 13 credits，免费额度一周大约能做 2 张低质量 SVG。付费分应用内订阅和 API 按量两种：

| 方式 | 价格 | 说明 |
| --- | --- | --- |
| 免费账号 | $0，每周 30 credits | 仅限第三方登录，生成图默认为公开 |
| Plus | $20/月（年付 $15/月） | 每月 2400 优先 credits |
| Pro | $60/月（年付 $42/月） | 每月 7500 credits |
| API 文字转矢量 | $0.13–$0.20/张 | 低/中/高三种质量；高画质加参考图 $0.32/张 |
| API 图片转矢量 | $0.10/张 | 按图计费 |

注意：官方没有公开 Vector 在应用内每次生成消耗多少 credits，Plus 的 2400 credits 能做多少张 SVG 要以应用内实际扣费为准，不要直接按 API 价换算。导出格式方面，官方页面只提到 SVG，未提及 PDF、EPS 或 DXF，印刷厂要其他格式需自己转。

![Ideogram 官网定价页，Plus、Pro、Team 与 Enterprise 四档套餐](/images/tools/ideogram-vector/pricing.webp)

## 怎么用

1. 打开 ideogram.ai，用 Google、Apple 或 Microsoft 账号登录（这样才有每周 30 免费 credits）。
2. 在应用里找到 Ideogram Vector，选择“文字转矢量”或“图片转矢量”。
3. **文字生成**：写清用途、风格和配色，比如“极简线条风瑜伽馆 Logo，莲花图案，墨绿加米白”，可选质量（低质量先验证构图，高质量再出终稿）。
4. **图片转矢量**：上传图片，等转换完成，对比原图和矢量稿，检查细碎线条有没有丢失。
5. 下载 SVG，用 Illustrator 或 Figma 打开，逐个形状调整颜色和细节，确认无误再交付；批量走 API 时可先用干跑（dry_run）报价再扣费。

## 国内使用注意

Ideogram 官网与应用需要 VPN 访问，订阅与 API 充值需海外支付方式，国内用户常用虚拟信用卡或海外卡，人民币直付行不通。免费额度的领取条件要看清：邮箱密码注册的账号没有每周 30 credits，必须用 Google、Apple 或 Microsoft 登录。商用方面，Ideogram 允许生成内容商用，但“能商用”不等于“能注册商标”，做 Logo 前请自行做商标检索；免费账号生成的图默认为公开，涉及未公开品牌方案时建议升级付费套餐再使用。国内目前没有同等“一句话出可编辑 SVG”的平替：即梦 AI、豆包出的是位图，放大和改色都不方便；海外同类可选 Recraft 矢量（约 $0.05/张），但同样需要 VPN。折中办法是即梦出位图稿定方向，再用 Illustrator 的图像描摹手动转矢量，质量取决于原图简洁程度。

参考来源：Ideogram 官网 Vector 模型页（含官方 API 价目表）；Ideogram 定价页与帮助中心；TechPilot、ToolColumn、Creative AI News 第三方评测与价格核对。
