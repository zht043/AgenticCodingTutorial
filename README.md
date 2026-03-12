<div align="center">
![image-20260312231419463](resources/figures/image-20260312231419463.png)

<h1>🤖 Agentic Coding Tutorial</h1>

<h3>从「古法编程」升级到 Agent 时代</h3>

<p><strong>让 AI 变成你的日常结对程序员，而不是更聪明的搜索框。</strong></p>

<p>
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="License: CC BY-NC-SA 4.0" />
  </a>
  <a href="https://github.com/your-repo/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
  <img src="https://img.shields.io/badge/Last%20Updated-2026.03-blue" alt="Last Updated 2026.03" />
  <img src="https://img.shields.io/badge/语言-中文-red" alt="Language: 中文" />
  <img src="https://img.shields.io/badge/Status-Active%20Development-orange" alt="Status: Active Development" />
</p>

<p>一套面向中文开发者的 <strong>Agentic Coding</strong> 教程</p>

<p>帮你在 <strong>Agent 工具飞速轮换的时代，掌握一套不会过时的心智模型与实战方法</strong></p>

<p>
  <a href="#-如何开始阅读">🚀 立即开始阅读</a> ·
  <a href="#-教程-overview">📚 教程目录</a> ·
  <a href="#-什么是-agentic-coding">💡 什么是 Agentic Coding</a>
</p>

</div>

---

## ✨ 三句话说清楚这套教程

> 🚀 **快速上手** — 用最熟悉的编辑器，30 分钟跑通一个能改你项目代码的 Agent
>
> 🧠 **理论脉络** — 把模型 / Agent / 工具 / Memory / 工作流串成一套清晰方法论
>
> 🧪 **实战技巧** — 给出可复制的 Playbook，在真实项目里和 Agent 高效协作

---

## 🧰 主流 Agent 编码工具一览

> 本教程会重点覆盖、对比和串联的主流工具。点击名称了解更多。

<table>
  <tr>
    <td align="center" width="20%">
      <img src="./resources/logos/claude-code.png" alt="Claude Code" height="42" /><br />
      <strong><a href="https://claude.com/product/claude-code">Claude Code</a></strong><br />
      <sub>Anthropic 官方终端 Agent。擅长理解大仓库上下文、多文件联动改动，支持多 Agent 协作和 MCP 扩展。</sub><br />
      <sub>🎯 项目总控 · 大规模重构 · 自动化工作流</sub>
    </td>
    <td align="center" width="20%">
      <img src="./resources/logos/codex-color.png" alt="Codex CLI" height="42" /><br />
      <strong><a href="https://github.com/openai/codex">Codex CLI</a></strong><br />
      <sub>OpenAI 开源终端编码 Agent。本地执行 + 云端沙箱双模式，三级审批控制（Suggest / Auto Edit / Full Auto）。</sub><br />
      <sub>🎯 终端工作流 · 隐私优先 · ChatGPT 集成</sub>
    </td>
    <td align="center" width="20%">
      <img src="./resources/logos/cursor.png" alt="Cursor" height="42" /><br />
      <strong><a href="https://cursor.com">Cursor</a></strong><br />
      <sub>AI 原生 IDE，深度集成 LLM。全代码库索引、Agent 多文件编辑、Tab 智能补全。</sub><br />
      <sub>🎯 日常开发 · 代码补全 · 重构与 Debug</sub>
    </td>
    <td align="center" width="20%">
      <img src="./resources/logos/trae.png" alt="Trae" height="42" /><br />
      <strong><a href="https://www.trae.ai">Trae</a></strong><br />
      <sub>字节跳动出品的 AI IDE（基于 VS Code 内核）。支持 Claude / GPT / DeepSeek 等多模型，SOLO 模式可用自然语言生成完整项目。</sub><br />
      <sub>🎯 全栈生成 · 低价高性价比 · 多模型切换</sub>
    </td>
    <td align="center" width="20%">
      <img src="./resources/logos/opencode-logo.png" alt="OpenCode" height="42" /><br />
      <strong><a href="https://opencode.ai">OpenCode</a></strong><br />
      <sub>开源终端 AI 编码 Agent（Go 实现）。支持 75+ LLM 提供商，Plan / Build 双模式，隐私第一，无供应商锁定。</sub><br />
      <sub>🎯 开源自主 · 多模型接入 · 深度定制</sub>
    </td>
  </tr>
</table>

---

## 📚 教程 Overview

<table>
  <tr>
    <th width="5%">📖</th>
    <th width="30%">章节</th>
    <th width="50%">你会学到</th>
    <th width="15%">状态</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td><a href="./docs/ch01-quickstart/part-1-quickstart.md"><strong>🚀 快速上手部署 Agent</strong></a></td>
    <td>环境配置 → 工具安装 → 跑通第一个「让 Agent 改真实代码」的闭环</td>
    <td><img src="https://img.shields.io/badge/-编写中-yellow" /></td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td><a href="./docs/ch02-concepts/part-2-concepts.md"><strong>🧠 Agent 运作原理与核心概念</strong></a></td>
    <td>执行链路拆解 · Model / Agent / Tools / Memory 四要素 · 为什么 Agent 有时聪明有时蠢</td>
    <td><img src="https://img.shields.io/badge/-编写中-yellow" /></td>
  </tr>
  <tr>
    <td align="center">3</td>
    <td><a href="./docs/ch03-playbook/part-3-playbook.md"><strong>🧪 Agent 实战技巧 Playbook</strong></a></td>
    <td>通用提示词模板 · Claude Code / Codex / Cursor 专用技巧 · 可直接复制的工作流</td>
    <td><img src="https://img.shields.io/badge/-编写中-yellow" /></td>
  </tr>
</table>

---

## 💡 什么是 Agentic Coding？

简单说：**让有「工具调用能力」的 LLM 参与完整开发流程，而不是只当它写几段代码片段。**

它关心的核心问题是：

> 💬 「如何设计流程、分工和检查点，让你和 Agent **一起**完成工作？」

而不是：

> 🚫 「这行提示词要不要多加两个形容词？」

---

## ⚔️ 告别古法编程：Agent vs 传统工作流

| 维度 | 🏚️ 传统「古法编程」 | 🤖 Agentic Coding |
| :---: | --- | --- |
| **你的角色** | 从需求到上线所有步骤亲力亲为 | 拆问题、设约束、审查关键节点 |
| **工作单元** | 文件 / 函数 | 任务 / 工作流 |
| **信息获取** | 自己翻代码、搜文档、跑命令 | Agent 自动搜集汇总，你做判断 |
| **反馈闭环** | 亲自跑测试、看日志、Debug | Agent 先跑工具，整理异常给你审查 |

> 📌 **体验上的变化：你不再只是「执行器」，而更像项目的「技术负责人」。**

---

## 🎯 Agent 的能力边界

> 先搞清楚一件事：**什么该交给 Agent，什么必须由你来定夺。**

| 维度 | ✅ Agent 擅长 | ⚠️ 需要你把关 |
| :---: | --- | --- |
| **任务类型** | 目标清晰、可拆解、结果可验证的工程任务 | 目标模糊、强依赖业务语境或涉及重大风险的决策 |
| **信息处理** | 从大代码库 / 文档中搜索、聚合、改写、生成样板 | 理解隐含规则、历史包袱、团队政治和灰度地带 |
| **体力活** | 读代码、批量改动、跑命令、补测试与文档 | 方案取舍、上线回滚决策、对质量与事故负责 |

> 📝 **关于上下文长度** — 截至 2026 年初，主流模型的推理上下文已达 **几十万到上百万 tokens**。Agent 可以在一次对话里装下大型工程的关键代码 + 文档 + 部分历史记录，支撑一次完整变更。

---

## 🛠️ 高 ROI 应用场景

| 场景 | Agent 可以做的事 |
| :---: | --- |
| 🔍 **熟悉项目** | 生成项目导览 / 架构草图，回答「某功能在哪里实现」「这段逻辑影响哪些地方」 |
| 💻 **日常开发** | 写初版实现、补样板代码、补测试、更新文档、生成 PR 描述 |
| 🔄 **大规模改动** | 接口迁移、库升级、跨语言改写、统一风格和 API 使用方式 |
| 🔧 **运行 / 运维** | 粗筛日志与指标、生成报告、整理排查步骤、固化故障 Playbook |

---

## 📐 这不是「只教你点点点」的教程

这套教程不会停留在「安装插件、点几个按钮」的层面，而是系统讲解一批在 Agent 时代真正有用的专业知识：

- 🏗️ **工程结构设计** — 如何为 Agent 设计项目结构与文档，让它更快读懂你的工程
- 🧩 **任务拆解与编排** — 如何拆解任务、规划多步工作流，让 Agent 按步骤完成复杂改动
- 🔌 **工具与能力沉淀** — 怎样给 Agent 设计 Tools / MCP / Skills，把团队经验沉淀成可复用能力
- ✅ **验证与防呆** — 让 Agent 改代码的同时，顺手跑测试 / 静态检查 / 生成变更说明
- 📊 **观测与调优** — 如何把 Agent 当成一套可以观察和调试的「系统」，而不是黑盒

> 🎓 一套面向 Agent 时代的「工程实践与方法论」，而不仅是某个产品的使用手册。

---

## 💸 Money is All You Need

> 一个看似简单的「改几行代码」，背后可能有多少轮 token 在默默燃烧。

Agent 很强，但每一步都在花钱。这套教程会穿插讲解：

| 策略 | 说明 |
| :---: | --- |
| 📏 **控制上下文** | 在不牺牲结果质量的前提下，控制上下文长度和调用次数 |
| ✂️ **拆解请求** | 把「一次性大请求」拆成「多步短请求」，便于复用和 debug |
| ⚖️ **模型选择** | 根据任务选择合适的模型与调用模式，平衡质量与账单 |

> 🎯 **目标：让你在优雅地完成任务的同时，看到账单也能保持镇定。**

---

## 🦞 OpenClaw 之后，还值得学 Agent 吗？

很多人会问：

> 「如果未来真的出现类似 OpenClaw 这种'万能 AI 开发员'，我现在还需要学 Agent 吗？」



简短回答：**值得，而且成本并不高。**

- 🧠 真正花时间的不是「学某个产品按钮在哪里」，而是建立一套**任务拆解、工作流设计、验证方法**的思维方式
- 🔄 即便未来出现更强的「Claw 级」系统，这些经验依然**可迁移**
- 🎮 把今天的 Agent 当作「未来更强系统的预演场」— 你练的是一种**与智能系统协作的通用能力**

> 即便有人认为当前 Agent 产品形态是「过渡形态」，你在这个阶段学到的很多东西，在下一个时代仍然有效。

---

## 📖 如何开始阅读？

```mermaid
graph TD
  step1["Step 1: 浏览本 README<br/>确认这套教程是不是你需要的"]
  step2["Step 2: Chapter 1 快速上手<br/>30 分钟跑通第一个闭环"]
  ch2["Chapter 2 补原理<br/>🧠 理解心智模型"]
  ch3["Chapter 3 抄 Playbook<br/>🧪 上手更多场景"]

  step1 --> step2
  step2 --> ch2
  step2 --> ch3
```

> 💬 如果你已经有自己的 Agent 使用习惯，也欢迎直接提 **Issue / PR**，把你的工作流补充进对应章节。一起把这套教程打磨成 Agent 时代的「程序员基础设施」之一。

---

<div align="center">

<p><strong>⭐ 如果觉得有帮助，欢迎 Star 支持！</strong></p>

<p>Made with ❤️ for Chinese developers in the Agent era.</p>

</div>
