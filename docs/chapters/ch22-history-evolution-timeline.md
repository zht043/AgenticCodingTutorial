# Chapter 22 · 📜 技术简史、演进主线与时间线

> 目标：把 Coding Agent 放回完整技术史里看清楚。读完这一章，你应该知道 Agent 为什么不是突然冒出来的新物种，而是程序合成、IDE 辅助、LLM、工具调用、评测体系与系统工程化层层叠加的结果。

## 📑 目录

- [1. 两层时间线](#1-两层时间线)
- [2. 前史：Agent 之前，业界怎样尝试"让机器写程序"](#2-前史agent-之前业界怎样尝试让机器写程序)
- [3. 2020-2022：条件成熟期](#3-2020-2022条件成熟期)
- [4. 2022-2024：Coding Agent 爆发的五条主线](#4-2022-2024coding-agent-爆发的五条主线)
- [5. 软件工程化：从 HumanEval 到 SWE-bench](#5-软件工程化从-humaneval-到-swe-bench)
- [6. 产品形态重排：IDE、CLI、Computer Use、云端代理](#6-产品形态重排ideclcomputer-use云端代理)
- [7. 2025-2026：终端原生、上下文工程、MCP 与 CLI 辩论](#7-2025-2026终端原生上下文工程mcp-与-cli-辩论)
- [8. 到 2026 年 3 月，我们到底处在什么阶段](#8-到-2026-年-3-月我们到底处在什么阶段)

---

## 1. 两层时间线

理解 Agent 历史时，最有用的不是背产品名，而是区分两层时间线：

- 长前史：程序合成、符号主义、IDE 智能辅助
- 新主线：Transformer、LLM、RAG、Tool Use、ReAct、SWE-bench、CLI-first Agent

---

## 2. 前史：Agent 之前，业界怎样尝试”让机器写程序”

今天的 Agent 继承了很早期的一些老问题。这条线至少可以追到三个阶段：

### 符号主义与程序合成（1950s-1980s）

最早的尝试是从**形式规格自动推导程序**。这条路的假设是：如果你能精确描述”要什么”，机器就应该能自动生成”怎么做”。

代表成果包括：
- 自动定理证明
- 基于规则的代码生成
- 形式化方法（如 Z、VDM）

这条路的局限性后来很清楚：**精确描述需求本身，往往和写代码一样难**。

### IDE 智能辅助（1990s-2010s）

放弃了”全自动”以后，业界转向**辅助人类更快地写代码**：

| 阶段 | 代表技术 | 核心理念 |
|------|---------|---------|
| 语法高亮与补全 | IntelliSense、Eclipse | 帮你少打几个字 |
| 静态分析 | FindBugs、PMD、ESLint | 帮你找到常见错误 |
| 重构工具 | Rename、Extract Method | 帮你安全地改结构 |
| 代码搜索 | SourceGraph、Kite | 帮你找到参考实现 |

这些工具极大提升了效率，但它们有一个共同边界：

> **它们理解代码的结构，但不理解代码的意图。**

### 统计学习与早期 ML（2015-2019）

深度学习兴起后，出现了第一批用神经网络做代码的尝试：

- 代码补全模型（如 TabNine 早期版本）
- Bug 检测分类器
- 代码相似度搜索

但这些系统仍然更像”更聪明的模式匹配”，还没有达到”理解目标并自主推进”的程度。

> 🏛️ **Agent 并不是替代软件工程历史，而是在吃下它留下来的问题。**

---

## 3. 2020-2022：条件成熟期

LLM 时代带来的关键变化，不只是生成能力变强，而是多项关键能力开始组合。

### Transformer 与 Scaling Laws（2017-2020）

- 2017：Attention Is All You Need 奠定架构基础
- 2020：GPT-3（175B）证明了 few-shot learning 的可行性
- 2020：Scaling Laws 论文说明模型越大表现越好有规律可循
- 2020：RAG 论文提出检索增强生成范式

### Codex 与代码大模型（2021）

- 2021：OpenAI Codex 在 159GB Python 代码上微调 GPT-3
- 2021：GitHub Copilot 技术预览，首个主流 AI 代码补全工具
- 2021：HumanEval 基准建立，开始可量化评估代码生成能力

### ReAct、CoT 与指令对齐（2022）

2022 年是 Agent 理论基石年，三件事同时成熟：

| 突破 | 论文/事件 | 意义 |
|------|----------|------|
| **思维链推理** | Chain-of-Thought Prompting | 让模型展示中间推理步骤 |
| **推理+行动统一** | ReAct | Agent 循环的理论基础 |
| **指令对齐** | InstructGPT / RLHF | 让模型真正”听话” |

> 🔑 **关键认知**：2022 年之所以重要，不是因为某个产品火了，而是因为推理、行动和对齐同时到位——Agent 的三个前提条件第一次同时满足。

---

## 4. 2022-2024：Coding Agent 爆发的五条主线

从 ChatGPT 发布到 2024 年底，Coding Agent 的演化可以沿五条清晰的主线来看：

### 主线一：推理显式化

| 时间 | 进展 | 意义 |
|------|------|------|
| 2022 | CoT、Self-Consistency | 推理可以被激活和改进 |
| 2023 | Tree of Thoughts、Reflexion | 推理可以有结构、可以自我修正 |
| 2024 | o1、DeepSeek-R1 | 推理成为独立可训练的能力 |

### 主线二：工具使用

| 时间 | 进展 | 意义 |
|------|------|------|
| 2023 | Toolformer、Function Calling API | 模型学会自主决定何时用工具 |
| 2023 | Code Interpreter | AI 第一次能”跑代码” |
| 2024 | MCP 协议发布 | 工具接入标准化 |

### 主线三：自治循环

| 时间 | 进展 | 意义 |
|------|------|------|
| 2023 | AutoGPT | 引爆 Agent 概念，虽不稳定但启发行业 |
| 2024 | Devin | 首个”AI 软件工程师”产品化尝试 |
| 2024 | SWE-agent、OpenHands | 学术和开源社区跟进，验证可行性 |
| 2025 | Claude Code、Codex CLI | CLI-first Agent 成为主流形态 |

### 主线四：多 Agent 协作

| 时间 | 进展 | 意义 |
|------|------|------|
| 2023 | MetaGPT、ChatDev、AutoGen | 用 SOP 和角色分工组织多 Agent |
| 2024 | Mixture-of-Agents | 多模型协作方法 |
| 2025 | A2A 协议 | Agent 间通信标准化 |

### 主线五：软件工程化

| 时间 | 进展 | 意义 |
|------|------|------|
| 2021 | HumanEval | 代码生成基准 |
| 2023 | SWE-bench | 从”会写函数”到”会修真实 Issue” |
| 2024 | SWE-agent、Agentless | 不同路线验证工程化可行性 |
| 2024-25 | Terminal-bench、实际部署 | 评测接近真实工程任务 |

---

## 5. 软件工程化：从 HumanEval 到 SWE-bench

### 为什么主战场从 HumanEval 迁移到 SWE-bench

HumanEval 测的是”给你函数签名和 docstring，写出函数体”。这很有用，但离真实软件工程差很远：

| 维度 | HumanEval | SWE-bench |
|------|-----------|-----------|
| 任务规模 | 单函数 | 整个仓库 |
| 上下文 | 函数签名 | 真实 Issue + 整个代码库 |
| 验证方式 | 预设测试用例 | 仓库自带测试套件 |
| 需要的能力 | 代码生成 | 定位 + 理解 + 修改 + 验证 |

SWE-bench 的出现标志着评测从”会不会写代码”转向”能不能像工程师一样解决问题”。

### 关键系统的不同路线

| 系统 | 路线 | 核心思路 |
|------|------|---------|
| **SWE-agent** | 自治 Agent | 给 Agent 好的 ACI（Agent-Computer Interface） |
| **OpenHands** | 通用平台 | 构建通用的 Agent 开发平台 |
| **Agentless** | 非自治基线 | 用更简单的流水线证明不一定需要复杂 Agent |

> Agentless 的存在特别有价值：它证明了”更复杂的系统不一定更好”，反过来迫使 Agent 系统证明自己的复杂度是必要的。

---

## 6. 产品形态重排：IDE、CLI、Computer Use、云端代理

到 2025 年，Coding Agent 的产品形态可以按两个维度画成四象限：

| | 嵌入式（在已有环境中） | 独立式（自有环境） |
|---|---|---|
| **本地** | IDE 插件（Copilot、Cursor） | CLI Agent（Claude Code、Codex CLI） |
| **云端** | 云 IDE（Bolt、Replit Agent） | 云端自治（Devin、GitHub Coding Agent） |

### 四种形态的深度分析

**IDE 嵌入式**：最低学习成本，但受限于 IDE 的交互范式。适合日常辅助。

**CLI 独立式**：终端原生，不依赖特定 IDE，更接近工程师的真实工作环境。2025 年后成为增长最快的形态。

**云端 IDE**：零本地环境，适合快速原型和非工程师用户。

**云端自治**：最高自主性，可以长时间独立运行。但也面临最大的信任和验证挑战。

### 范式转移

```
代码补全 -> 代码生成 -> 代码编辑 -> 任务执行 -> 项目管理
```

每一步都是自主性的提升，但也是验证难度的提升。

---

## 7. 2025-2026：终端原生、上下文工程、MCP 与 CLI 辩论

### Context Engineering 成为显学

2025 年，行业共识开始从”Prompt Engineering”转向”Context Engineering”：

| 层次 | 关注什么 | 影响什么 |
|------|---------|---------|
| Prompt Engineering | 这一轮怎么说 | 单轮质量 |
| Context Engineering | 整个工作环境给了什么信息 | 系统性稳定度 |
| Harness Engineering | 权限、流程、验证、恢复怎么组织 | 端到端可靠性 |

### CLI vs MCP 工程辩论

一场有意义的技术辩论在 2025-2026 年持续展开：

| 立场 | 核心论点 |
|------|---------|
| **MCP 优先** | 标准化接口、统一鉴权、生态效应 |
| **CLI 优先** | 更轻量、复用现有工程资产、更低上下文成本 |
| **务实中间派** | 先 CLI，需要时再上 MCP；Skills 补方法论 |

### Bounded Autonomy

到 2026 年，行业逐渐收敛到一个共识：

> **不是”全自动”vs”全手动”，而是”在明确边界内的受控自治”。**

这个概念被称为 Bounded Autonomy：Agent 可以在定义好的范围内自主行动，但关键决策点仍然需要人类参与。

### Anthropic Harness 2.0（2026 年 3 月）

Anthropic Harness 2.0 的发布标志着 Agent 工程框架的一次重要迭代：

- **从双代理到三代理**：V1 的 Initializer + Coding Agent 升级为 Planner + Generator + Evaluator 的 GAN 式架构
- **Evaluator 的引入**：首次在工程实践中引入独立的评估 Agent，用 Playwright 真正运行应用来验证质量
- **Harness 优先的论证**：完整 Harness 相比单一 Agent 的效果差距（功能残缺 vs 完整可玩应用），再次验证了 Harness 比模型更值得投入的工程经验

这个案例在技术史上的意义在于：它不是在追求更强的模型，而是在追求更好的**模型外侧系统**。

---

## 8. 到 2026 年 3 月，我们到底处在什么阶段

### 已经具备的能力

| 能力 | 成熟度 |
|------|--------|
| 代码生成与编辑 | 高度成熟，日常可依赖 |
| Bug 定位与修复 | 大部分场景可用 |
| 测试生成 | 可用但需人工审查覆盖度 |
| 代码审查辅助 | 可用，适合做第二层检查 |
| 重构与迁移 | 中等规模可用 |

### 不应过度信任的能力

| 能力 | 当前状态 |
|------|---------|
| 架构级决策 | 需要人类主导 |
| 安全关键代码 | 必须人工审计 |
| 长时间自治运行 | 仍需检查点和人类介入 |
| 跨系统协调 | 仍在早期 |

一个稳妥的判断是：

> 📍 **主流 Agent 已经进入”很好用”，但还没有进入”高风险场景下可完全信任自治”。2026 年的核心问题不只是”模型够不够强”，而是系统能不能稳、验证链够不够硬、权限边界是不是清楚。**

---

## 📌 本章总结

- Agent 是符号主义、IDE 辅助、统计学习、LLM 研究路线和工程路线共同推进的结果。
- 2022 年推理、行动和对齐同时到位，Agent 的三个前提条件第一次同时满足。
- 2022-2024 年爆发沿五条主线展开：推理显式化、工具使用、自治循环、多 Agent 协作、软件工程化。
- 评测主战场从 HumanEval 迁移到 SWE-bench，从”会不会写”转向”能不能像工程师一样解决问题”。
- 产品形态分化为 IDE 嵌入、CLI 独立、云端 IDE、云端自治四种。
- 2025-2026 年的核心议题是上下文工程、Bounded Autonomy 和系统可靠性。

---

<details><summary><span style="color: #e67e22; font-weight: bold;">📜 进阶：Agent 技术完整演进时间线</span></summary>

### 完整时间线

> 时效性声明：最后校对于 2026 年 3 月。AI 领域变化极快，请以各厂商最新官方信息为准。
>
> 🇨🇳 = 中国产品/团队 · 📄 = 论文/框架 · 🔧 = 工具/产品 · 🧠 = 模型

| 日期 | 事件 | 公司/团队 | 类别 | 意义 |
|------|------|----------|------|------|
| 2020.06 | GPT-3 发布（175B 参数） | OpenAI | 🧠 | 证明 few-shot learning 可行性，开启大模型时代 |
| 2020 | RAG 论文发表 | Meta AI | 📄 | 提出检索增强生成范式，奠定后续 RAG 生态基础 |
| 2021.06 | GitHub Copilot 技术预览 | GitHub / OpenAI | 🔧 | 首个主流 AI 代码补全工具，开启 AI 辅助编程时代 |
| 2021.08 | OpenAI Codex 模型发布 | OpenAI | 🧠 | GPT-3 微调于 159GB Python 代码，驱动 Copilot |
| 2022.03 | InstructGPT | OpenAI | 🧠 | RLHF 让模型真正"听话"，奠定对齐技术基础 |
| 2022.06 | GitHub Copilot GA | GitHub | 🔧 | 代码补全正式商用，$10/月，迅速获百万用户 |
| 2022.10 | ReAct 论文 | Google / Princeton | 📄 | 提出 Reasoning + Acting 统一范式，Agent 理论基石 |
| 2022.11 | ChatGPT 发布 | OpenAI | 🧠 | LLM 从研究工具变成大众产品，2 个月破亿用户 |
| 2022.12 | Amazon CodeWhisperer 预览 | AWS | 🔧 | 免费 AI 代码补全，Copilot 首个主要竞品 |
| 2023.03 | GPT-4 发布 | OpenAI | 🧠 | 多模态 + 大幅提升推理能力，Agent 能力基座 |
| 2023.03 | ChatGPT Plugins | OpenAI | 🔧 | 首次让 LLM 调用第三方服务 |
| 2023.03 | AutoGPT 开源 | Toran Bruce Richards | 📄 | 引爆 Agent 概念热潮，虽不稳定但启发了整个行业 |
| 2023.06 | OpenAI Function Calling API | OpenAI | 🧠 | 结构化工具调用标准化，Agent 的"手"正式接上 |
| 2023.06 | 🇨🇳 Baidu Comate 公测 | 百度 | 🔧 | 国内首个商业化全场景 AI 编码助手 |
| 2023.07 | ChatGPT Code Interpreter | OpenAI | 🔧 | 沙箱化 Python 执行，AI 首次能"跑代码" |
| 2023.10 | 🇨🇳 通义灵码发布 | 阿里云 | 🔧 | Qwen 驱动的 IDE 插件，代码生成/补全/审查 |
| 2024.01 | 🇨🇳 GLM-4 系列发布 | 智谱 AI | 🧠 | 智谱新一代大模型，支持 128K 上下文，多模态能力 |
| 2024.06 | 🇨🇳 CodeArts 发布 | 华为 | 🔧 | 自动驾驶式研发平台，覆盖需求→开发→测试→运维全流程 |
| 2025.05 | 🇨🇳 CodeBuddy 发布 | 腾讯 | 🔧 | IDE + 插件 + CLI 全形态，85-90% 腾讯工程师使用 |
| 2023 | Cursor IDE 早期版本 | Anysphere | 🔧 | AI 原生 IDE 先驱，VS Code fork + 深度 AI 集成 |
| 2023 | Aider 开源 | Paul Gauthier | 🔧 | 开源终端 AI 结对编程工具，git 集成，多模型支持 |
| 2024.02 | Devin 发布 | Cognition AI | 🔧 | 首个"AI 软件工程师"产品化尝试，引发行业震动 |
| 2024.03 | Claude 3 系列发布 | Anthropic | 🧠 | Opus/Sonnet/Haiku 三档，Opus 成为编码能力标杆 |
| 2024.04 | GitHub Copilot Workspace 预览 | GitHub | 🔧 | 自然语言→规划→实现的 Agent 工作流（后重建为 Coding Agent） |
| 2024.04 | Amazon Q Developer | AWS | 🔧 | CodeWhisperer 升级，加入 Agent 能力和云集成 |
| 2024.06 | 🇨🇳 豆包 MarsCode | 字节跳动 | 🔧 | 代码补全 + 云 IDE + Bug 修复（Trae 前身） |
| 2024.09 | Replit Agent | Replit | 🔧 | 自主构建完整应用，规划→编辑→部署 |
| 2024.10 | Claude Computer Use (Beta) | Anthropic | 🧠 | 首个商业化 Computer Use 能力，AI 学会操作电脑 |
| 2024.10 | Bolt.new | StackBlitz | 🔧 | 浏览器内全栈 AI 应用构建器，6 个月达 ~$40M ARR |
| 2024.11 | Windsurf IDE | Codeium | 🔧 | "Agentic IDE"，Cascade 工作流引擎（后被 OpenAI 收购） |
| 2024.12 | Devin GA | Cognition AI | 🔧 | 正式商用 $500/月，端到端自主编码 Agent |
| 2024.12 | 🇨🇳 DeepSeek V3 开源 | 深度求索 | 🧠 | 671B MoE 开源，编码能力逼近闭源模型，性价比标杆 |
| 2025.01 | 🇨🇳 Trae 发布 | 字节跳动 | 🔧 | 免费 AI IDE，多模型切换，Builder 模式一键生成项目 |
| 2025.01 | JetBrains Junie 预览 | JetBrains | 🔧 | JetBrains IDE 内置 Agent，分步解决复杂问题 |
| 2025.02 | **Claude Code 研究预览** | Anthropic | 🔧 | 终端原生 Coding Agent 标杆，伴随 Claude 3.7 Sonnet 发布 |
| 2025.02 | GitHub Copilot Agent Mode 预览 | GitHub | 🔧 | IDE 内自主多文件编辑 + 终端命令 + 自修复 |
| 2025.02 | Cursor Agent Mode | Anysphere | 🔧 | Composer 进化为自主 Agent，多文件编辑 + 终端 |
| 2025.04 | Codex CLI 开源 | OpenAI | 🔧 | 开源终端 Agent (Rust)，沙箱权限分级 |
| 2025.05 | **Claude Code GA** | Anthropic | 🔧 | 正式发布，伴随 Claude Opus 4 / Sonnet 4 |
| 2025.05 | 🇨🇳 CodeBuddy 发布 | 腾讯 | 🔧 | IDE + 插件 + CLI 全形态，85-90% 腾讯工程师使用 |
| 2025.06 | Gemini CLI 开源 | Google | 🔧 | Apache 2.0 开源，60 req/min 免费，1M 上下文 |
| 2025.06 | 🇨🇳 Baidu Comate AI IDE | 百度 | 🔧 | 多模态输入（文字/语音/图片/图表），多 Agent 协作 |
| 2025.09 | GitHub Copilot Coding Agent GA | GitHub | 🔧 | 云端自主 Agent，自动领 Issue 并提交 PR |
| 2025.11 | OpenClaw 开源 | 社区 (Peter Steinberger) | 🔧 | 首个"全自主生活 Agent"，60 天 214K+ Stars |
| 2025.11 | Claude Code 达 $1B+ ARR | Anthropic | 🔧 | 研究预览仅 9 个月即达十亿美元年化收入 |
| 2026.01 | 🇨🇳 Kimi Code 发布 | 月之暗面 | 🔧 | 终端 + IDE Agent，Kimi K2.5 驱动，支持 ACP 协议 |
| 2026.02 | 🇨🇳 Qwen3-Max 发布 | 阿里云 | 🧠 | 千问旗舰线，适合复杂多步骤任务，支持思考模式 + 内置工具 |
| 2026.03 | 🇨🇳 MiniMax-M2.7 发布 | MiniMax | 🧠 | 当前最新 M 系旗舰，强调 real-world engineering / tool calling |
| 2026.03 | 🇨🇳 GLM-5 发布 | 智谱 AI | 🧠 | 智谱新一代旗舰基座，面向 Agentic Engineering、复杂系统工程 |


---

## 附录 A：AI_Agent_Programming_Evolution_Report 论文列表整理版

> 下面这份清单根据 `AI_Agent_Programming_Evolution_Report.md` 的原始分类整理。为方便本教程阅读，我保留了**类别、题名、年份、核心意义**四列，去掉了引用数与部分扩展说明。它不是“唯一正确书单”，但足够作为这一章的检索索引。

### A.1 基础模型与预训练范式（2017–2021）

| 序号 | 论文 | 年份 | 核心意义 |
|------|------|------|----------|
| 1 | Attention Is All You Need | 2017 | Transformer 基础架构 |
| 2 | Scaling Laws for Neural Language Models | 2020 | 说明规模化训练的收益规律 |
| 3 | Language Models are Few-Shot Learners (GPT-3) | 2020 | 把 in-context learning 推到主流 |
| 4 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | 2020 | RAG 基础范式 |
| 5 | Evaluating Large Language Models Trained on Code (Codex) | 2021 | 代码大模型与 HumanEval 基准 |
| 6 | WebGPT: Browser-assisted Question-answering with Human Feedback | 2021 | Web Agent 先驱 |

### A.2 推理机制与指令对齐（2022）

| 序号 | 论文 | 年份 | 核心意义 |
|------|------|------|----------|
| 7 | Chain-of-Thought Prompting Elicits Reasoning in Large Language Models | 2022 | 思维链提示 |
| 8 | Self-Consistency Improves Chain of Thought Reasoning in Language Models | 2022 | 多路径自洽解码 |
| 9 | Large Language Models are Zero-Shot Reasoners | 2022 | 零样本推理激活 |
| 10 | Least-to-Most Prompting Enables Complex Reasoning in Large Language Models | 2022 | 任务分解式推理 |
| 11 | Training Language Models to Follow Instructions with Human Feedback (InstructGPT) | 2022 | RLHF 指令对齐 |
| 12 | Constitutional AI: Harmlessness from AI Feedback | 2022 | RLAIF / 自我批评对齐 |
| 13 | ReAct: Synergizing Reasoning and Acting in Language Models | 2022 | 现代 Agent 基础循环 |
| 14 | MRKL Systems: A Modular, Neuro-symbolic Architecture | 2022 | 模块化工具体系雏形 |
| 15 | TALM: Tool Augmented Language Models | 2022 | 工具增强语言模型 |
| 16 | Inner Monologue: Embodied Reasoning through Planning with Language Models | 2022 | 具身规划中的环境反馈 |
| 17 | Do As I Can, Not As I Say (SayCan) | 2022 | 语言到机器人动作接地 |
| 18 | Code as Policies: Language Model Programs for Embodied Control | 2022 | 代码即行动策略 |
| 19 | Program of Thoughts Prompting | 2022 | 程序化中间推理 |
| 20 | Selection-Inference | 2022 | 可解释逻辑推理分解 |
| 21 | Direct Preference Optimization (DPO) | 2023 | 更简洁的偏好优化 |

### A.3 工具使用与自主 Agent 爆发（2023）

| 序号 | 论文 | 年份 | 核心意义 |
|------|------|------|----------|
| 22 | Toolformer: Language Models Can Teach Themselves to Use Tools | 2023 | 自监督学习工具调用 |
| 23 | Augmented Language Models: a Survey | 2023 | 工具、检索、推理增强综述 |
| 24 | GPT-4 Technical Report | 2023 | 强能力模型推动 Agent 实用化 |
| 25 | HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face | 2023 | LLM 作为控制器编排专家模型 |
| 26 | Visual ChatGPT: Talking, Drawing and Editing with Visual Foundation Models | 2023 | 多模态工具编排 |
| 27 | Reflexion: Language Agents with Verbal Reinforcement Learning | 2023 | 反思与语言记忆 |
| 28 | Self-Refine: Iterative Refinement with Self-Feedback | 2023 | 迭代自反馈优化 |
| 29 | Tree of Thoughts: Deliberate Problem Solving with Large Language Models | 2023 | 树搜索式推理 |
| 30 | Graph of Thoughts: Solving Elaborate Problems with Large Language Models | 2023 | 图搜索式推理 |
| 31 | PAL: Program-Aided Language Models | 2023 | 让程序执行承担推理计算 |
| 32 | ART: Automatic Multi-step Reasoning and Tool-use for Large Language Models | 2023 | 自动化多步推理与工具使用 |
| 33 | Generative Agents: Interactive Simulacra of Human Behavior | 2023 | 记忆、反思、规划的社会模拟 |
| 34 | Voyager: An Open-Ended Embodied Agent with Large Language Models | 2023 | 具身终身学习与技能库 |
| 35 | Gorilla: Large Language Model Connected with Massive APIs | 2023 | API 调用准确率与工具连接 |
| 36 | ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs | 2023 | 大规模 API 工具学习 |
| 37 | Tool Learning with Foundation Models | 2023 | 工具学习综述 |
| 38 | Large Language Models as Tool Makers (LATM) | 2023 | LLM 不只会用工具，也会造工具 |
| 39 | CREATOR: Disentangling Abstract and Concrete Reasonings through Tool Creation | 2023 | 通过工具创建提升能力 |
| 40 | Language Agent Tree Search Unifies Reasoning Acting and Planning (LATS) | 2023 | MCTS 与语言代理结合 |
| 41 | Plan-and-Solve Prompting | 2023 | 先规划后执行 |
| 42 | Describe, Explain, Plan and Select (DEPS) | 2023 | 交互式规划框架 |
| 43 | ReWOO: Decoupling Reasoning from Observations for Efficient Augmented Language Models | 2023 | 推理与观察解耦 |
| 44 | SwiftSage: A Generative Agent with Fast and Slow Thinking | 2023 | 快慢思维 Agent 架构 |
| 45 | FunSearch: Mathematical Discoveries from Program Search with LLMs | 2023 | 程序搜索驱动发现 |
| 46 | FireAct: Toward Language Agent Fine-tuning | 2023 | 面向 Agent 能力的微调 |

### A.4 多 Agent 协作与软件工程基准（2023–2024）

| 序号 | 论文 | 年份 | 核心意义 |
|------|------|------|----------|
| 47 | CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society | 2023 | 角色扮演式通信代理 |
| 48 | MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework | 2023 | SOP 驱动的软件团队模拟 |
| 49 | ChatDev: Communicative Agents for Software Development | 2023 | 对话链驱动的 SDLC |
| 50 | AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation | 2023 | 多代理对话编排框架 |
| 51 | Improving Factuality and Reasoning through Multiagent Debate | 2023 | 代理辩论提升质量 |
| 52 | AgentBench: Evaluating LLMs as Agents | 2023 | 多环境 Agent 基准 |
| 53 | SWE-bench: Can Language Models Resolve Real-World GitHub Issues? | 2023 | 仓库级软件工程黄金基准 |
| 54 | WebArena: A Realistic Web Environment for Building Autonomous Agents | 2023 | 真实 Web 环境基准 |
| 55 | A Survey on Large Language Model based Autonomous Agents | 2023 | Brain-Perception-Action 综述 |
| 56 | TaskWeaver: A Code-First Agent Framework | 2023 | 代码优先的 Agent 框架 |

### A.5 编码 Agent 与推理扩展（2024）

| 序号 | 论文 | 年份 | 核心意义 |
|------|------|------|----------|
| 57 | Executable Code Actions Elicit Better LLM Agents (CodeAct) | 2024 | 用可执行代码统一动作空间 |
| 58 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering | 2024 | ACI 与自动化软件工程 |
| 59 | Agentless: Demystifying LLM-based Software Engineering Agents | 2024 | 非自治强基线，反思复杂度 |
| 60 | OpenHands: An Open Platform for AI Software Developers as Generalist Agents | 2024 | 通用软件开发 Agent 平台 |
| 61 | OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments | 2024 | 真实操作系统环境基准 |
| 62 | Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Model Parameters | 2024 | Test-time compute 理论基础 |
| 63 | Self-Discover: Large Language Models Self-Compose Reasoning Structures | 2024 | 自主发现推理结构 |
| 64 | Mixture-of-Agents Enhances Large Language Model Capabilities | 2024 | 多模型协作方法 |
| 65 | Large Language Model based Multi-Agents: A Survey of Progress and Challenges | 2024 | 多 Agent 进展综述 |
| 66 | The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use | 2024 | GUI Agent 初步研究 |
| 67 | AgentTuning: Enabling Generalized Agent Abilities for LLMs | 2023 | 面向 Agent 能力的微调 |

### A.6 最新前沿：推理模型、上下文工程与终端 Agent（2025–2026）

| 序号 | 论文或报告 | 年份 | 核心意义 |
|------|------------|------|----------|
| 68 | Learning to Reason with LLMs (OpenAI o1) | 2024 | 推理模型与长思考范式 |
| 69 | DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning | 2025 | 纯 RL 推理能力路线 |
| 70 | Prompt Repetition Improves Non-Reasoning LLMs | 2025 | 提示词重复提升准确率 |
| 71 | Building Effective Agents | 2024 | 面向实践的 Agent 构建指南 |
| 72 | Building Effective AI Coding Agents for the Terminal (OpenDev) | 2026 | 终端原生 Agent 架构总结 |
| 73 | The Rise and Potential of Large Language Model Based Agents: A Survey | 2023 | 大规模 Agent 综述 |

### 如果你只读 12 篇，建议先读这 12 篇

1. Attention Is All You Need
2. Language Models are Few-Shot Learners
3. Evaluating Large Language Models Trained on Code
4. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
5. ReAct: Synergizing Reasoning and Acting in Language Models
6. Toolformer: Language Models Can Teach Themselves to Use Tools
7. Reflexion: Language Agents with Verbal Reinforcement Learning
8. Tree of Thoughts: Deliberate Problem Solving with Large Language Models
9. SWE-bench: Can Language Models Resolve Real-World GitHub Issues?
10. SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering
11. Agentless: Demystifying LLM-based Software Engineering Agents
12. OpenHands: An Open Platform for AI Software Developers as Generalist Agents

</details>
