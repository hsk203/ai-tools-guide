---
title: "Prospero：5MB 的原生轻量编程 harness"
description: "Prospero 是开发者 Chris Wellons 用 C++ 写的原生编程 harness，一个可执行文件只有几 MB，不吃内存也能指挥 AI Agent 写代码、开子任务、远程跑任务，社区版免费开源。"
date: 2026-11-12
lang: zh-CN
category: coding
tags: ["AI 编程", "开源工具", "轻量"]
cover: tool
featured: false
draft: false
pricingModel: freemium
startingPrice: "免费"
needVPN: true
updatedDate: 2026-11-12
---

Prospero 是开发者 Chris Wellons（skeeto）用 C++ 写的原生轻量编程 harness，一个可执行文件只有十几 MB，不吃内存也能指挥 AI Agent 写代码、开子任务、远程跑任务，社区版免费开源。

## 是什么

Prospero 诞生于 2026 年 10 月 21 日，作者是 nullprogram 博客的 Chris Wellons。他受够了基于网页技术栈的编程 harness：动不动吃掉几个 GB 内存，于是用 C++ 加 Dear ImGui 自己写了一个。它的特点是“小而全”：单个原生可执行文件，不用守护进程、不用服务器，空闲时几乎不占资源；作者称资源占用比网页栈 harness 低约两个数量级，安装包约 10–12MB。界面多窗格可拖拽停靠，支持子 Agent、Git 工作树、MCP 服务器、桌面视觉控制，还能通过 SSH 或 WSL 在远程机器上跑无界面引擎。

它本身不带模型：出厂不预置任何服务商，你需要自己接 llama.cpp、vLLM、LiteLLM、OpenRouter 这类 OpenAI 兼容接口，或 Anthropic 的 Messages API（支持扩展思考和提示缓存）。配置用一个纯文本 INI 文件（`~/.config/prospero/prospero.ini`）。2026 年 11 月的更新又加了 PDF 阅读和 OpenAI 订阅接入，迭代非常快。

## 能干什么

- **指挥 Agent 写代码**：在原生窗口里开会话，让 Agent 读代码、改代码、跑测试，全程有文字记录和待办清单。
- **开子 Agent 并行干活**：一个任务拆成多个子 Agent，各自处理一部分，互不干扰上下文。
- **远程跑任务**：同一份可执行文件能以无界面模式跑在另一台机器上，通过 SSH 或 WSL 连接，窗口关了任务还能继续。
- **桌面视觉控制**：Agent 能看屏幕、点鼠标、敲键盘，适合开发、测试原生图形界面程序和游戏。
- **永不无限等待**：每个操作都有截止时间，拿不到授权就超时拒绝，不会卡住整个任务。
- **自己帮自己配置**：连上模型后，可以直接问 Prospero 怎么用，它会读内置文档、帮你改配置、带你找到界面位置。

它的代价是“什么都得自己配”：没有开箱即用的模型、没有云端托管、没有新手引导，适合喜欢折腾的开发者，不适合想装完就用的新手。项目也非常年轻，版本间可能有破坏性变化。

## 免费还是付费

| 版本 | 价格 | 说明 |
| --- | --- | --- |
| Community Edition（社区版） | $0 | GitHub 开源，Unlicense（等同公共领域），可自由使用、修改 |
| Professional Edition（专业版） | $25 一次性 | itch.io 购买，内置跨平台远程部署引擎；不是订阅 |

社区版在 GitHub 的 skeeto/prospero 仓库免费获取，专业版在作者的 itch.io 页面一次性付 $25，买断制。模型费用另算：本地 llama.cpp 不花钱，云端 API 按你自己的 Key 计费。注意一个版本口径出入：GitHub README 称支持 Windows、macOS、Linux 三平台，但 Hacker News 讨论指出专业版购买页一度只写 Windows 和 Mac；2026 年 11 月 9 日的开发日志称 Linux 构建已覆盖 RHEL 8 等老发行版，购买前以 itch.io 当前页面为准。

## 怎么用

1. 打开 github.com/skeeto/prospero，在 Releases 里下载对应系统的社区版，或从源码构建；想用远程引擎再去 itch.io 买 $25 专业版。
2. 准备模型：本地用 llama.cpp 起一个 OpenAI 兼容服务，或准备 OpenRouter、Anthropic 等服务的 API Key。
3. 编辑 `~/.config/prospero/prospero.ini`，填入接口地址、模型名和 Key，保存后重启。
4. 在命令行用 `prospero .` 在当前项目目录开一个会话，或直接打开图形界面新建会话。
5. 在对话框里描述任务，让 Agent 先列计划再动手；需要并行时开子 Agent，需要远程跑时配一台 SSH 主机；遇到不会用的地方，直接问 Prospero 自己。

## 国内使用注意

GitHub、itch.io 和模型 API 在国内都需要 VPN 才能稳定访问，下载和配 Key 之前先准备好网络。支付上，$25 专业版走 itch.io，需要支持美元的国际卡；社区版免费，不付费也能用核心功能。模型是关键变量：本地 llama.cpp 可以离线跑，但效果取决于你的显卡和模型大小；云端 API 要走 VPN 且按量计费，Claude 订阅不能直接接进来（OpenAI 订阅在 11 月更新后已支持）。国内没有同款原生轻量 harness，平替思路是 Cursor、Claude Code 这类主流 Agent 工具先顶着，电脑配置低、又想长期本地跑 Agent 时，再回来试 Prospero。最后提醒：它是 2026 年 10 月底才发布的新项目，照着本文步骤操作前，先看一眼 GitHub README 的最新说明。
