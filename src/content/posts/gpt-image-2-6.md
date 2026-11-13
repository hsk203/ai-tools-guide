---
title: "GPT Image 2.6（GPT Image 2.6）"
description: "OpenAI 2026 年 11 月 4 日发布的图像模型，分快慢两档，新增 GIF 动图、SVG 导出与图片标注编辑，ChatGPT 各档订阅都能用。"
date: 2026-11-12
lang: zh-CN
category: art
tags: ["AI 绘画", "GPT", "GIF 动图"]
cover: tool
coverImage: "/images/tools/gpt-image-2-6/docs.webp"
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费档可用，API 约 $0.025/张起"
needVPN: true
cnAlternative: "即梦 AI"
updatedDate: 2026-11-12
---

GPT Image 2.6 是 OpenAI 2026 年 11 月 4 日发布的图像模型，这次最大的变化不是画得更好看，而是多了动图、SVG 导出和更精细的编辑控制，改图时角色和品牌细节更不容易走样。

## 是什么

Images 2.6 在 ChatGPT、Codex 和 API 同步上线，API 里对应两个模型：GPT-Image-2.6 Flare 和 GPT-Image-2.6 Sunburst。Flare 主打快，质量设为 low 时最快约 6 秒出图，海报、产品图的版式质量也有提升；Sunburst 主打精细，质量设为 medium 或 high 时出图质量更高，多轮编辑的一致性更好。官方称新模型比上一代快 50%，全球用户每周通过 ChatGPT、Codex 和 API 生成的图片已达 40 亿张。

## 能干什么

- **GIF 动图**：把品牌吉祥物、产品图或角色做成循环动图，比如让一个卡通角色做表情变化，或把静态产品图变成吸睛的循环展示，适合社媒、表情包和广告投放。
- **更稳的多轮编辑**：改图时角色、产品和品牌细节保持一致，适合同一 IP 或同一产品的系列出图。
- **SVG 导出**：设计稿可直接导出 SVG，进网站、App 或印刷流程，不用再描摹转矢量。
- **图片标注编辑**：ChatGPT 已有的标注功能来到 API，团队可以在图上圈出具体位置，告诉模型“只改这里”，改得更准。
- **复杂度参数**：新增 complexity 参数，控制模型为一次请求做多少规划：简单改图用低复杂度更快，元素多、约束多的复杂场景用中高复杂度；另有质量档位控制细节与保真度。
- **草图变动图**：即使是一张纸上的简单手绘草稿，也能变成有表现力的动画角色，适合视频、游戏前期的动态分镜探索。

## 免费还是付费

订阅加按量两种方式。ChatGPT 侧：Images 2.6 在所有订阅档都可用，免费档额度有限，Plus $20/月，Pro $100、$200、$500/月三档，用量随档位递增；各档具体的图片生成额度 OpenAI 未公开固定数字，以账号内实际显示为准。API 侧按 token 计费，Flare 与 Sunburst 同价：文本输入 $5/百万 token，图片输入 $8/百万 token，图片输出 $30/百万 token，与 2.5 相同。

| 质量（1024×1024） | 每张约价          | 说明               |
| ----------------- | ----------------- | ------------------ |
| low               | 约 $0.025         | 草稿、快速验证     |
| medium            | 约 $0.043         | 日常出图           |
| high              | 约 $0.053         | 精细成图           |
| xhigh / max       | 约 $0.094 / $0.21 | 最高细节，价格陡增 |

注意：OpenAI 定价页本身不直接标“每张多少钱”，上表是第三方团队 2026 年 11 月 5 日实测 token 数换算的结果；2.6 在 low、medium 档比 2.5 贵约 3–4 倍，high 及以上同价，所以只做低质量草稿时 2.5 反而更便宜；2.6 目前不支持 Batch API 批量半价。

## 怎么用

1. **ChatGPT 里用**：打开 ChatGPT，输入提示词直接出图，或上传图片说“把这个角色做成 GIF，6 帧循环”，也可以圈图标注要改的位置。
2. **要快选 Flare**：质量设 low，适合批量试方向；**要精选用 Sunburst**：质量设 medium 或 high，适合终稿和多轮编辑。
3. **做动图**：提示词写清分镜，比如“6 帧循环，角色先惊讶再大笑，背景不变”，出图后检查首尾帧是否衔接。
4. **走 API**：调用 Images API，指定模型为 gpt-image-2.6-flare 或 gpt-image-2.6-sunburst，设置质量与复杂度参数，SVG 导出与标注编辑都在同一接口完成。

![OpenAI 官方图像生成 API 文档](/images/tools/gpt-image-2-6/docs.webp)

## 国内使用注意

ChatGPT 与 OpenAI API 都需要 VPN 访问，订阅与 API 充值需海外支付方式，国内银行卡无法直接付款；API 还需注意账号的组织验证要求。免费档能体验 Images 2.6，但额度和速度有限，重度使用建议至少 Plus（$20/月）。国内平替可选即梦 AI、豆包：出图、改图、中文提示词都更顺手，且无需 VPN；但它们目前做不到 GPT Image 2.6 的 GIF 动图直出与 SVG 导出组合，动图需求可以用即梦出图再进剪映做动画来凑合。另请注意内容安全规则：涉及真人、品牌 Logo 的改图可能被拒绝，商用前请确认生成内容的授权范围。

参考来源：OpenAI 官网 Images 2.6 发布页；OpenAI API 定价页；LaoZhang API、AuthOn 第三方实测与价格换算；ChatGPT 订阅价格核对（Voyager、Enjoy）。
