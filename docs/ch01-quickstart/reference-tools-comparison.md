# 附录：Agent 工具与模型详细对比

> 本文是 [Chapter 1 · 快速上手部署 Agent](./part-1-quickstart.md) 的扩展附录，包含完整对比表、基准测试、使用体验和价格。

---

## 目录

- [附录：Agent 工具与模型详细对比](#附录agent-工具与模型详细对比)
  - [目录](#目录)
  - [终端 CLI 型 Agent 对比](#终端-cli-型-agent-对比)
  - [IDE 型 Agent 对比](#ide-型-agent-对比)
  - [主流 Coding Model 基准测试](#主流-coding-model-基准测试)
  - [笔者使用体验详解](#笔者使用体验详解)
    - [Claude Code + Opus 4.6：端到端闭环王者](#claude-code--opus-46端到端闭环王者)
    - [Codex CLI + GPT-5.4：多 Agent 并行](#codex-cli--gpt-54多-agent-并行)
    - [Cursor / OpenCode：灵活选模型](#cursor--opencode灵活选模型)
  - [中国产模型详解](#中国产模型详解)
  - [Token 价格完整对比](#token-价格完整对比)
    - [成本估算](#成本估算)

---

## 终端 CLI 型 Agent 对比

| 特性 | Claude Code | Codex CLI | Gemini CLI | OpenCode | Aider |
|------|-------------|-----------|------------|----------|-------|
| 开发商 | Anthropic | OpenAI | Google | 社区 | 社区 |
| 开源 | ❌ | ✅ Apache 2.0 | ✅ Apache 2.0 | ✅ MIT | ✅ Apache 2.0 |
| 默认模型 | Claude 系列 | GPT 系列 | Gemini 系列 | 多家 75+ | 多家 100+ |
| 核心优势 | 端到端闭环、SWE-Bench 最强 | 多 Agent 并行、沙箱隔离 | 1M 上下文、免费 | 灵活选模型 | Git 原生 |
| VS Code | ✅ 插件 | ✅ 插件 | ✅ Code Assist | ❌ | ❌ |
| 价格 | 按 token / 订阅 | 按 token / 订阅 | 免费 + 按量 | 免费（自备 Key） | 免费（自备 Key） |

## IDE 型 Agent 对比

| 特性 | Cursor | Windsurf | Trae | Antigravity | Cline | Copilot | Devin |
|------|--------|----------|------|-------------|-------|---------|-------|
| 开发商 | Cursor Inc. | Cognition AI | 字节跳动 | Google | 社区 | GitHub | Cognition AI |
| 形态 | AI IDE | AI IDE | AI IDE | AI IDE | 插件 | 插件 | Web Agent |
| 多模型 | ✅ | ✅ | ✅ | ✅ | ✅ | 自动 | 内置 |
| 核心优势 | SVFS 多 Agent | Cascade | 性价比 | 多 Agent 并行、免费 | MCP 生态 | GitHub 集成 | 全自主 |
| 价格 | $20/月起 | $15/月 | 免费+ | **免费** | 免费 | $10/月起 | $20/月起 |


---

## 主流 Coding Model 基准测试

> 数据截至 2026 年 3 月。详细解读见 👉 [模型评测体系详解](./reference-benchmarks.md)

| 模型 | 厂商 | SWE-Bench | LiveCodeBench | Terminal-Bench | 备注 |
|------|------|:---------:|:-------------:|:--------------:|------|
| Claude Opus 4.6 | Anthropic | **80.8%** | 82.0% | 65.4% | Agent 最强之一 |
| Claude Sonnet 4.6 | Anthropic | ~77% | 79.1% | — | 性能/成本均衡 |
| GPT-5.4 | OpenAI | 77.2% | — | — | 1M 上下文 |
| GPT-5.3-Codex | OpenAI | ~75% | — | **75.1%** | 编码专精 |
| Gemini 3 Pro | Google | 80.6% | **91.7%** | — | 代码生成最强 |
| MiniMax M2.5 | MiniMax | **80.2%** | — | — | 开源最高分 |
| Kimi K2.5 | 月之暗面 | 76.8% | 87.1% | — | Agent Swarm |
| GLM-5 | 智谱 AI | 77.8% | — | — | MIT 开源 |
| DeepSeek V3.2 | DeepSeek | ~73% | 89.6% | — | 最低价 |

---

## 笔者使用体验详解

### Claude Code + Opus 4.6：端到端闭环王者

- **端到端闭环**：从需求分析到修复报错，全流程自动
- **发挥稳定**：长任务链出错率低，细节处理到位
- **上下文理解出色**：1M 窗口理解大型项目

参考事实：Claude Code 日均 13.5 万次 GitHub 提交；有开发者用 16 个并行 Agent 写了 10 万行 Rust 编译器代码。

### Codex CLI + GPT-5.4：多 Agent 并行

- **多 Agent 并行**：独立 worktree 同时工作
- **Debug 突出**：专门编码 RL 训练
- **沙箱安全**：系统级沙箱隔离

### Cursor / OpenCode：灵活选模型

- **Cursor 2.0**：SVFS 多 Agent 并行（最多 8 个）
- **OpenCode**：75+ LLM 供应商，GitHub 120K+ star

> 模型厂家自己的 Agent 通常体验更好——因为做了 Agent 场景专用的后训练强化学习。

---

## 中国产模型详解

| 模型 | 架构 | SWE-Bench | 特色 | 价格 ($/M) |
|------|------|-----------|------|:---:|
| **MiniMax M2.5** | MoE | **80.2%** | 开源最高分，20 万+ RL 环境 | 0.30/1.20 |
| **Kimi K2.5** | 1T/32B 活跃 | 76.8% | Agent Swarm（100 并行），开源 | 0.60/2.50 |
| **GLM-5** | 744B/44B 活跃 | 77.8% | 华为昇腾训练，Slime 降幻觉 | 1.00/3.20 |
| **DeepSeek V3.2** | MoE | ~73% | 极致低价，缓存 0.028/M | 0.28/0.42 |

---

## Token 价格完整对比

> 2026 年 3 月数据，以各厂商官网为准。

| 模型 | 输入 ($/M) | 输出 ($/M) | 上下文 |
|------|-----------|-----------|--------|
| Claude Opus 4.6 | 5.00 | 25.00 | 1M |
| Claude Sonnet 4.6 | 3.00 | 15.00 | 1M |
| Claude Haiku 4.5 | 1.00 | 5.00 | 200K |
| GPT-5.4 | 2.50 | 15.00 | 1M |
| GPT-5.3-Codex | 1.75 | 14.00 | — |
| Gemini 3 Pro | 2.00 | 12.00 | 1M |
| MiniMax M2.5 | 0.30 | 1.20 | — |
| Kimi K2.5 | 0.60 | 2.50 | — |
| GLM-5 | 1.00 | 3.20 | — |
| DeepSeek V3.2 | 0.28 | 0.42 | — |

### 成本估算

- 单次中等任务：Opus $0.10-1.50 / Sonnet $0.05-0.80 / DeepSeek $0.005-0.03
- 日常高频（50-100 次/天）：Opus $150-500/月 / DeepSeek $8-30/月
- 订阅制（Anthropic Max、ChatGPT Pro）对高频用户更划算

---

返回：[Chapter 1 · 快速上手部署 Agent](./part-1-quickstart.md)
