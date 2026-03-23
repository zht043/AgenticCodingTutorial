<div align="center">
<img src="./resources/figures/image-20260312231419463.png" alt="Agentic Coding Tutorial cover" width="720" />

<h1>Agentic Coding Tutorial</h1>

<h3>从「古法编程」升级到 Agent 时代</h3>

<p><strong>让 AI 变成你的日常结对程序员，而不是更聪明的搜索框。</strong></p>

<p>
  <a href="https://creativecommons.org/licenses/by-sa/4.0/">
    <img src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg" alt="License: CC BY-SA 4.0" />
  </a>
  <a href="https://github.com/zht043/AgenticCodingTutorial/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
  <img src="https://img.shields.io/badge/Last%20Updated-2026.03-blue" alt="Last Updated 2026.03" />
  <img src="https://img.shields.io/badge/语言-中文-red" alt="Language: 中文" />
  <img src="https://img.shields.io/badge/Status-Active%20Development-orange" alt="Status: Active Development" />
</p>

<p>一套面向中文开发者的 <strong>Agentic Coding</strong> 系统教程</p>

<p>帮你在 <strong>Agent 工具飞速轮换的时代，掌握一套不会过时的心智模型与实战方法</strong></p>

<blockquote>

💡 <strong>作者寄语</strong>

🧪 **踩坑无数** — 3个月已花费至少 2k 人民币重度使用AI编程，试过各种技巧、Skill 和 Agent 组合  
🔧 **深度实战** — 深度使用过 5 种以上的 Agent 和 10 种以上的模型  
🏗️ **项目验证** — 完成过大型项目的分析和复杂特性的重构  
⚡ **快速验证** — 常用 Agent 快速实现 Idea 的 Prototype  
🎯 **核心目标** — 帮助新手告别「古法写码」，拥抱 AI 时代的变革  
⭐ **跪求 Star** — 制作不易，如果觉得有帮助，欢迎点亮 Star 支持！

</blockquote>

<blockquote>

⏱️ <strong>时效性声明</strong>

⚡ **技术迭代快** — Agent 技术发展与更新极快，教程内容的时效性值得关注  
📅 **内容截止** — 当前教程内容同步至 <strong>2026-03-20</strong>  
🔄 **月度更新** — 小编会保持月度更新，持续同步最新的工具与方法  
🔔 **敬请关注** — 欢迎 Watch 本仓库，第一时间获取行业动态更新

</blockquote>

<p>
  <a href="./docs/ch01-quickstart/index.md">🚀 立即部署 Agent</a> ·
  <a href="#-章节目录">📚 教程目录</a> ·
  <a href="#-什么是-coding-agent">💡 什么是 Coding Agent</a> ·
  <a href="#-谁适合读这套教程">👥 读者指南</a>
</p>

<p>
  <a href="./docs/ch01-quickstart/reference-author-experience.md">📝 作者使用体验</a> ·
  <a href="./docs/ch01-quickstart/reference-tools-comparison.md">🧭 选型导航</a> ·
  <a href="./docs/ch01-quickstart/reference-agent-comparison.md">🤖 Agent 对比</a> ·
  <a href="./docs/ch01-quickstart/reference-model-comparison.md">🧠 模型对比</a> ·
  <a href="./docs/ch01-quickstart/reference-benchmarks.md">📊 评测体系</a>
</p>

</div>

---

## 📌 三句话说清楚这套教程

> 🚀 **快速上手** — 30 分钟跑通一个能改你项目代码的 Agent
>
> 🧩 **系统理解** — 从核心概念到工程方法论，从 Skill 系统到安全合规，建立完整知识体系
>
> 🎯 **实战驱动** — 基础案例 → 进阶案例 → Claude Code / Codex 深度指南，可复制的工作流

> 🔧 **实战主线**
>
> 本教程的所有实操演示以 **Claude Code**（CLI + VS Code 插件）为主线工具。
> 选择 Claude Code 是因为它目前在闭环能力、代码库理解、多 Agent 编排方面综合表现最强。
>
> 但请放心——**核心方法论（SDD、任务分解、上下文工程、验证闭环等）跨工具通用**。
> 无论你用 Cursor、Codex CLI、Gemini CLI 还是其它 Agent，本教程的方法论都完全适用。
> 习惯使用其它工具的读者一样可以精读本教程，工具操作上的差异不影响方法论的学习。

---

## 🛠️ 主流 Agent 工具一览

> 💡 **排版说明**：为了更紧凑的阅读体验，我们将工具分为四类，每类精选代表性产品。

**🇺🇸 国际主流 (Coding)**

<table>
  <tr>
    <td align="center" width="16%">
      <img src="./resources/logos/claude-code.png" alt="Claude Code" height="32" /><br />
      <strong><a href="https://claude.com/product/claude-code">Claude Code</a></strong><br />
      <sub>Anthropic · 行业标杆</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/cursor.png" alt="Cursor" height="32" /><br />
      <strong><a href="https://cursor.com">Cursor</a></strong><br />
      <sub>Anysphere · 最流行 IDE</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/github-copilot.png" alt="GitHub Copilot" height="32" /><br />
      <strong><a href="https://github.com/features/copilot">GitHub Copilot</a></strong><br />
      <sub>GitHub · 自动领 Issue</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/codex-color.png" alt="Codex CLI" height="32" /><br />
      <strong><a href="https://github.com/openai/codex">Codex CLI</a></strong><br />
      <sub>OpenAI · 开源终端</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/Gemini_CLI_logo.webp" alt="Gemini CLI" height="32" /><br />
      <strong><a href="https://geminicli.com/">Gemini CLI</a></strong><br />
      <sub>Google · 1M 上下文</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/Google_Antigravity_icon.webp" alt="Antigravity" height="32" /><br />
      <strong><a href="https://antigravity.google/">Antigravity</a></strong><br />
      <sub>Google · 全栈应用开发</sub>
    </td>
  </tr>
</table>

**🇨🇳 国产主流 (Coding)**

<table>
  <tr>
    <td align="center" width="16%">
      <img src="./resources/logos/tongyi_lingma_logo.png" alt="通义灵码" height="32" /><br />
      <strong><a href="https://lingma.aliyun.com/">通义灵码</a></strong><br />
      <sub>阿里云 · 插件下载破千万</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/trae.png" alt="Trae" height="32" /><br />
      <strong><a href="https://www.trae.ai">Trae</a></strong><br />
      <sub>字节跳动 · 10x AI Engineer</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/baidu_comate.png" alt="Baidu Comate" height="32" /><br />
      <strong><a href="https://comate.baidu.com/">Baidu Comate</a></strong><br />
      <sub>百度 · 3.5S 多智能体架构</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/codebuddy_logo.png" alt="CodeBuddy" height="32" /><br />
      <strong><a href="https://codebuddy.tencent.com/">CodeBuddy</a></strong><br />
      <sub>腾讯 · 企微生态深度打通</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/kimi_code_logo.png" alt="Kimi Code" height="32" /><br />
      <strong><a href="https://kimi.ai/">Kimi Code</a></strong><br />
      <sub>月之暗面 · 视觉编程最强</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/huawei_codearts.png" alt="CodeArts" height="32" /><br />
      <strong><a href="https://www.huaweicloud.com/product/codeartssnap.html">CodeArts</a></strong><br />
      <sub>华为 · 自动驾驶式研发</sub>
    </td>
  </tr>
</table>

**🌐 开源生态 / 更多工具**

<table>
  <tr>
    <td align="center" width="16%">
      <img src="./resources/logos/opencode-logo.png" alt="OpenCode" height="32" /><br />
      <strong><a href="https://opencode.ai">OpenCode</a></strong><br />
      <sub>多模型接入全形态覆盖</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/codegeex_logo.png" alt="CodeGeeX" height="32" /><br />
      <strong><a href="https://codegeex.cn/">CodeGeeX</a></strong><br />
      <sub>智谱 · 免费开源代码助手</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/aider_logo.png" alt="Aider" height="32" /><br />
      <strong><a href="https://github.com/paul-gauthier/aider">Aider</a></strong><br />
      <sub>开源 · 终端 AI 结对编程</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/cline_logo.png" alt="Cline" height="32" /><br />
      <strong><a href="https://github.com/cline/cline">Cline</a></strong><br />
      <sub>开源 · VS Code AI 助手</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/windsurf_logo.png" alt="Windsurf" height="32" /><br />
      <strong><a href="https://codeium.com/windsurf">Windsurf</a></strong><br />
      <sub>Codeium · AI 原生 IDE</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/devin_logo.png" alt="Devin" height="32" /><br />
      <strong><a href="https://devin.ai/">Devin</a></strong><br />
      <sub>Cognition · 自主 AI 工程师</sub>
    </td>
  </tr>
</table>

**🤖 通用 Agent / Claw 🦞 (非代码专精)**

<table>
  <tr>
    <td align="center" width="16%">
      <img src="./resources/logos/openclaw_logo.png" alt="OpenClaw" height="32" /><br />
      <strong><a href="https://github.com/OpenClawAI/OpenClaw">OpenClaw</a></strong><br />
      <sub>开源 · 通用 Agent 标杆</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/manus_logo.png" alt="Manus" height="32" /><br />
      <strong><a href="https://manus.im/">Manus</a></strong><br />
      <sub>通用 Agent 标杆</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/chatgpt.png" alt="ChatGPT Tasks" height="32" /><br />
      <strong><a href="https://openai.com/">ChatGPT Tasks</a></strong><br />
      <sub>OpenAI · 任务执行引擎</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/perplexity_logo.png" alt="Perplexity" height="32" /><br />
      <strong><a href="https://www.perplexity.ai/">Perplexity</a></strong><br />
      <sub>深度研究与信息整合</sub>
    </td>
    <td align="center" width="16%">
      <img src="./resources/logos/kimi_logo.png" alt="Kimi Agent" height="32" /><br />
      <strong><a href="https://kimi.moonshot.cn/">Kimi Agent</a></strong><br />
      <sub>月之暗面 · 办公三件套</sub>
    </td>
    <td align="center" width="16%">
      🦞<br />
      <strong><a href="https://www.volcengine.com/">ArkClaw</a></strong><br />
      <sub>字节 · 飞书生态云端 Agent</sub>
    </td>
  </tr>
</table>

> 📖 深度阅读： [作者使用体验与心得](./docs/ch01-quickstart/reference-author-experience.md) · [附录：Agent 工具与模型详细对比](./docs/ch01-quickstart/reference-tools-comparison.md) · [附录：主流 Agent 工具对比](./docs/ch01-quickstart/reference-agent-comparison.md)

## 🧠 主流 Coding 模型一览

> 🐎 **好马配好鞍**：优秀的 Agent 就像是一套精良的马具（Harness），但要真正搞定艰巨复杂的代码任务，你还需要一匹强健的「好马」——也就是底层驱动的大模型。以下是各家最新的旗舰模型：

**🇺🇸 国际模型**

| 模型 | 出品方 | 上下文 | 特色 |
|:---:|---|:---:|:---|
| **Claude Opus 4.6** | Anthropic | 1M | 🏆 Anthropic 最强复杂任务，coding / agents 强项 |
| **GPT-5.4 Pro** | OpenAI | 1M | ⚡ 官方主旗舰，面向 agentic、编码、专业工作流 |
| **Gemini 3.1 Pro** | Google | 1M | 🌊 Google Gemini 3 系 Pro 线，支持 thinking、agentic workflows |
| **Llama 4 Maverick** | Meta | 10M | 🦙 Meta 最新主力，原生多模态、MoE、超长上下文 |
| **nemotron-3-super** | NVIDIA | 1M | ⚙️ NVIDIA 新一代主力，agentic / coding / tool calling 强 |
| **grok-code-fast** | xAI（X） | 256K | 🛠️ xAI 官方 Code model，偏 agentic coding / pair programming |

**🇨🇳 国产模型**

| 模型 | 出品方 | 上下文 | 特色 |
|------|--------|--------|------|
| **Kimi K2.5** | 月之暗面 | 256K | 🔥 当前最智能/最全能 Kimi 模型，原生多模态、thinking、多步工具使用 |
| **GLM-5** | 智谱 AI | 200K | 🏛️ 智谱新一代旗舰基座，面向 Agentic Engineering、复杂系统工程、长程 Agent |
| **MiniMax-M2.7** | MiniMax | 200K | 📏 当前最新 M 系旗舰，强调 real-world engineering / tool calling / search |
| **DeepSeek-V3.2** | 深度求索 | 128K | 💰 reasoning-first for agents，支持 Thinking in Tool-Use，开源性价比标杆 |
| **Qwen3-Max** | 阿里云 | 256K | 🌐 千问旗舰线，适合复杂多步骤任务，支持思考模式 + 内置工具 |

> 📖 深度阅读： [附录：主流 Coding 模型对比](./docs/ch01-quickstart/reference-model-comparison.md) · [附录：模型与 Agent 评测体系详解](./docs/ch01-quickstart/reference-benchmarks.md)
>
> ⚠️ **不要只看榜单**：公开排行榜很重要，但不等于长期真实体验。像 MiniMax 这类产品，榜单成绩很亮眼，并不自动代表你的工作流里就一定更省心；而且厂商普遍也会做 benchmark 定向优化。建议同时结合 `Google`、`Reddit`、`小红书`、`知乎`、`B 站` 上的真实反馈一起看。

---

## 🤖 什么是 Coding Agent？

**Coding Agent 是能自主读代码、写代码、跑测试、修 Bug 的 AI 系统。** 它不是更聪明的聊天框，而是一个围绕大模型构建的任务执行系统——拥有记忆、工具、规划能力，能在你的项目里完成真实的工程任务。

```
你："帮我重构这个模块，加上单元测试"

Agent：读代码 → 理解结构 → 规划方案 → 逐步重构 → 写测试 → 跑测试 → 修失败 → 全部通过 → 提交
```

它关心的核心问题是：

> 「如何设计流程、分工和检查点，让你和 Agent **一起**高效完成工作？」

### 💡 为什么现在要学 Agent？

- ⚡ **效率跃迁**：经验丰富的开发者报告 2-5x 的生产力提升，部分场景甚至更多
- 🌱 **门槛重塑**：没有编程经验的人也可以用 Agent 构建真实产品——"一人创业公司"已经出现
- 🔄 **行业变革**：Agent 正在重塑软件开发的分工模式——你不再只是写代码的人，而是指挥 AI 团队的技术负责人
- 🎯 **通用技能**：与 Agent 协作的能力（任务拆解、工作流设计、验证策略）是跨工具、跨时代的通用技能

### 🔀 Coding Agent vs 通用 Agent（Manus / OpenClaw 🦞）

本教程聚焦 **Coding Agent**（Claude Code、Codex CLI、Cursor 等）。你可能也听说过 Manus、OpenClaw 🦞 这些通用 Agent——它们能力很强，但解决的是不同的问题：

| 维度 | 🔧 Coding Agent（如 Claude Code） | 🌐 通用 Agent（如 OpenClaw 🦞、Manus） |
| :---: | --- | --- |
| **🎯 定位** | 软件研发专用的协作工具 | 通用任务自动化助手 |
| **💬 交互模式** | 会话级，用完即停 | 7×24 常驻或按需启动 |
| **🔒 安全模型** | 最小权限 + 人工审批 | 需广泛系统权限 |
| **📦 部署复杂度** | 一行命令安装 | 通常需要更多配置 |

> 🎯 **核心结论**：你在 Coding Agent 中练就的任务拆解、工作流设计、验证方法，在通用 Agent 时代依然完全可迁移。

> 深入了解 Agent 与 Claw 范式的架构差异见 → [附录：Agent 与 Claw 范式深度对比](./docs/reference-agent-vs-claw.md)

---


## 📚 章节目录

### Part I · 🚀 起步篇 — "快速上手 + 基础概念"
| # | 章节 | 你会学到 | 状态 |
|---|------|---------|------|
| 1 | [🚀 快速上手部署 Agent](docs/ch01-quickstart/index.md) | 安装 → 配置 → 跑通第一个闭环 | ✅ |
| 2 | [🧩 Agent 核心原理](docs/ch02-concepts/index.md) | Agent 四要素 · TAO 循环 · Memory · Tools · MCP | ✅ |
| 3 | [📖 术语速查手册](docs/ch03-glossary/index.md) | LLM · Prompt · Context · Token · Agent · API 等核心术语 | ✅ |

### Part II · 🎯 基础实战篇 — "从动手开始建立信任"
| # | 章节 | 你会学到 | 状态 |
|---|------|---------|------|
| 4 | [🎮 你的第一批实战](docs/ch04-first-practice/index.md) | Plan→Act · 理解仓库 · Fix Bug · 写测试 · CRUD · Git | ✅ |
| 5 | [🔧 Agent 内部机制与工具体系](docs/ch05-agent-mechanics/index.md) | Agent 循环 · 五类工具 · Session 与 Context | ✅ |
| 6 | [🔍 代码探索与验证驱动](docs/ch06-explore-verify/index.md) | init CLAUDE.md · 测试驱动 · Bug 修复 · 截图验证 | ✅ |
| 7 | [📋 规划优先与 Prompt 工程](docs/ch07-plan-prompt/index.md) | 探索→规划→编码 · Prompt 约束技巧 · @引用 | ✅ |
| 8 | [⚙️ 扩展生态与会话管理](docs/ch08-config-session/index.md) | 权限 · MCP/Skills/Plugins · clear/compact/resume | ✅ |

### Part III · ⚙️ 方法论与认知篇 — "系统化方法论"
| # | 章节 | 你会学到 | 状态 |
|---|------|---------|------|
| 9 | [🏗️ 工程化工作流](docs/ch09-engineering/index.md) | SDD · 任务分解 · 三种协作模式 | ✅ |
| 10 | [🤝 人机协同方法论](docs/ch10-collaboration/index.md) | Harness 工程 · 上下文 · 失败模式 · Token 经济学 · 成熟度 | ✅ |
| 11 | [🧬 Agent 设计模式](docs/ch11-design-patterns/index.md) | Router · Evaluator · Planner-Worker · RAG · Writer-Reviewer | ✅ |
| 12 | [👁️ AI Code Review](docs/ch12-code-review/index.md) | Agent 审查工作流 · GitHub Actions · AI 幻觉避坑 | ✅ |
| 13 | [📜 技术发展简史](docs/ch13-history/index.md) | 六阶段演进 · 产品大爆发 · 80% 翻转 · 职业冲击 | ✅ |

### Part IV · 📚 进阶专题 — "深度参考资料库"（28 篇）

> 前面章节正文保持精简，深度内容统一收入此处。新手第一遍可跳过，需要时按需查阅。

<details>
<summary>📂 点击展开 28 个专题列表</summary>

#### 🧭 选型与环境配置
| 专题 | 简介 |
|------|------|
| [🖥️ CLI vs IDE](docs/topics/topic-cli-vs-ide.md) | 使用形态选择 |
| [🤖 Agent vs 代码补全](docs/topics/topic-agent-vs-completion.md) | Agent 与 Copilot/Tabnine 等的本质区别 |
| [💰 API vs 订阅制](docs/topics/topic-api-vs-subscription.md) | 付费模式选择策略 |
| [🇨🇳 中国区用户指南](docs/topics/topic-china-users.md) | 特殊环境配置 |

#### 🧠 核心技术原理
| 专题 | 简介 |
|------|------|
| [⚡ Prompt Cache](docs/topics/topic-prompt-cache.md) | 机制与优化策略 |
| [🧠 LLM 推理与 Agent](docs/topics/topic-llm-reasoning-and-agent.md) | CoT/Reasoning 如何影响 Agent |
| [🧩 上下文工程](docs/topics/topic-context-engineering.md) | 深度 Context 管理 |
| [🎨 多模态应用](docs/topics/topic-multimodal.md) | 图片/截图/PDF 在 Agent 中的应用 |
| [🧠 大模型幻觉问题](docs/topics/topic-llm-hallucination.md) | LLM 幻觉成因与缓解策略 |

#### 🔧 工具生态深入
| 专题 | 简介 |
|------|------|
| [📝 Skill 系统](docs/topics/topic-skills.md) | Skill 完整指南 |
| [🔌 MCP 协议](docs/topics/topic-mcp.md) | MCP 完整指南 |
| [🪝 Hooks](docs/topics/topic-hooks.md) | Claude Code Hooks 机制 |
| [⚖️ CLI vs MCP](docs/topics/topic-cli-vs-mcp.md) | 何时用 Shell 何时用 MCP |

#### 🏗️ 架构与协作模式
| 专题 | 简介 |
|------|------|
| [🧬 设计模式详解](docs/topics/topic-design-patterns-detail.md) | 架构图 + 伪代码 + 完整实现 |
| [👥 多 Agent 组合](docs/topics/topic-multi-agent.md) | 多 Agent 实战指南 |
| [🐝 Swarm vs Team](docs/topics/topic-swarm-vs-team.md) | 去中心化 vs 有协调者 |
| [🆚 Agent vs NoCode](docs/topics/topic-agent-vs-nocode.md) | Agent 与 ComfyUI/Diffy 等的区别 |

#### 📐 方法论深入
| 专题 | 简介 |
|------|------|
| [🎯 任务适配度](docs/topics/topic-task-fit.md) | 哪些任务适合 Agent |
| [📊 Agent 能力矩阵](docs/topics/topic-capability-matrix.md) | 各类任务的 Agent 表现评级 |
| [💬 Prompt 模板库](docs/topics/topic-prompt-templates.md) | 可复用的 Prompt 模板 |
| [🚨 失败模式](docs/topics/topic-failure-modes.md) | 七种失败模式与恢复术 |
| [🏗️ 大型项目策略](docs/topics/topic-large-project.md) | 大项目的 Agent 使用策略 |
| [🔄 Prompt→Harness](docs/topics/topic-prompt-to-harness.md) | 演进案例 |

#### 🛡️ 安全与质量
| 专题 | 简介 |
|------|------|
| [🤥 AI 幻觉避坑](docs/topics/topic-ai-hallucination.md) | 检测与防御 |
| [🔒 安全权限合规](docs/topics/topic-security.md) | 最小权限 · Agent 治理 |
| [🤝 人机协同详解](docs/topics/topic-human-agent-collab.md) | 深度协作方法论 |

#### 🔭 对比与视野
| 专题 | 简介 |
|------|------|
| [⚔️ Agent vs Claw](docs/topics/topic-agent-vs-claw.md) | 范式对比 |

</details>

### Part V · 🏗️ 进阶实战篇 — "复杂场景的对话历史与分析"
> 持续添加各种复杂实战场景的 Agent 对话历史和用法分析（规划中）

### Part VI · 🔭 趋势与展望
| # | 章节 | 你会学到 | 状态 |
|---|------|---------|------|
| — | [🔭 Agent 技术展望](docs/outlook/evolution.md) | 职业影响 · 技术路线图 · 行业趋势 | ✅ |

### Part VII · 🧬 从零构建你自己的 Agent
> Nano Agent 从零实现（规划中）

---

## 🎯 谁适合读这套教程？

本教程面向三类读者，各有推荐阅读路线：

### 🗺️ 推荐阅读路线

#### 👨‍💻 程序员 / 软件工程师
Ch01 → Ch02 → Ch04 → Part II 全部（Ch05-08）
→ Ch09 工程化工作流 → Ch10 人机协同 → Part IV Skill/MCP 专题
→ Part V 进阶实战

#### 📊 产品经理 / 技术管理者
Ch01 → Ch02 → Ch03 术语 → Ch04 → Ch13 技术简史 → Ch11 设计模式
→ Ch09 工程化工作流 → Ch12 Code Review → Part VI 趋势与展望

#### 🌱 零基础 / 非开发者
Ch01 → Ch02 → **Ch03 术语速查手册**（重点精读）→ Ch04 → Part II 全部（Ch05-08）
→ Ch09 工程化工作流 → Ch10 人机协同 → Part V 进阶实战

---

## 📝 关于本教程的几点说明

- 🔧 **以 Claude Code 为实战主线**，所有实操以 Claude Code CLI 和 VS Code 插件为标准演示。核心方法论跨工具通用——习惯用 Cursor、Codex CLI 等其它工具的读者一样适用
- 🔄 **产品和模型都在快速变化**，教程内容定期校对，请以各厂商最新官方文档为准
- 📚 **前面章节正文保持精简**，深度内容统一收入 Part IV 进阶专题，新手第一遍可跳过
- 🎯 **所有技巧和方法论都来自实战**，非纸上谈兵

---

## ⚠️ 新手常见思维误区

| 误区 | 现实 |
| --- | --- |
| ❌「Agent 就是更聪明的 ChatGPT」 | ✅ Agent = LLM + 工具 + 记忆 + 规划循环。它会自己动手改代码、跑测试、修 bug |
| ❌「提示词是核心技能」 | ✅ 真正重要的是**任务拆解**——把大目标拆成小步骤，设好检查点 |
| ❌「Agent 能力 = 模型能力」 | ✅ Agent 表现 = 模型能力 × 上下文质量 × 任务结构清晰度。后两项在你手中 |
| ❌「工具/插件越多越好」 | ✅ 工具太多让 Agent 决策混乱、上下文膨胀。Less is More |
| ❌「全自动 = 高效」 | ✅ 半自主模式（Agent 规划执行 + 关键节点你审批）才是当前最高效的模式 |

---

## 🧰 Agent Skills 资源推荐

> 💡 Skill 是 Agent 时代的"方法论手册"——把经验沉淀为可复用的工作流模板。详见 [Ch07 · Skill 系统](./docs/ch07-skills/part-7-skills.md)。

| 项目 | 说明 |
|------|------|
| **[zht043/AgentSkills](https://github.com/zht043/AgentSkills)** | 笔者个人维护的 Skills 集合，包含实际项目中沉淀的工作流和最佳实践 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | 社区知名 Skills 框架，强调从 brainstorm 到执行审查的完整闭环 |
| **[anthropics/skills](https://github.com/anthropics/skills)** | Anthropic 官方 Skills 仓库，包含示例模板和参考实现 |
| **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** | 持续维护的 Agent Skills 资源列表，适合生态摸底和选型 |

```bash
# 安装示例（Claude Code）
git clone https://github.com/obra/superpowers ~/.claude/skills/superpowers
```


---

<div align="center">

<p><strong>如果觉得有帮助，欢迎 Star 支持！</strong></p>

<p>Made with care for Chinese developers in the Agent era.</p>

</div>
