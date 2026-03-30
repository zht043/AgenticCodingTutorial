# Chapter 5 · 🟢 Codex 实用技巧

> 🎯 **目标**：把 Codex CLI 用成一个可靠的终端协作代理。本章和 Ch4（Claude Code）对标，精选日常开发中 ROI 最高的技巧。如果你同时使用两个工具，两章对照读会很快。

## 📑 目录

- [1. 最小工作流：终端里的协作节奏](#1-最小工作流终端里的协作节奏)
- [2. 权限与沙箱模式](#2-权限与沙箱模式)
- [3. 会话管理](#3-会话管理)
- [4. 上下文控制](#4-上下文控制)
- [5. 模型切换](#5-模型切换)
- [6. 多 Agent 与并行](#6-多-agent-与并行)
- [7. 文件与规则体系](#7-文件与规则体系)
- [8. 快捷操作](#8-快捷操作)
- [9. Codex 与 Claude Code 的互补关系](#9-codex-与-claude-code-的互补关系)

---

## 1. 最小工作流：终端里的协作节奏

Codex 更强调**终端执行边界**，最稳的推进顺序是：

```text
给目标 → 限范围 → 读代码 → 说明计划 → 执行 → 验证 → 汇报结果
```

推荐默认把任务描述成这种结构：

```text
目标是什么
范围在哪里
不能做什么
完成后怎么验证
遇到不确定时怎么处理
```

> 🎯 **终端代理最大的优势不是"会说"，而是"能在明确边界里推进真实工作"。**

---

## 2. 权限与沙箱模式

Codex 提供三种自治级别，和 Claude Code 类似但命名不同：

| 模式 | 说明 | 对应 Claude Code |
|:---:|------|:---:|
| 🔒 **Suggest** | 只建议，不执行任何命令 | 默认模式 |
| ✏️ **Auto Edit** | 可自动改文件，命令需确认 | Auto Edit |
| ⚡ **Full Auto** | 文件和命令都自动执行（在沙箱中） | Bypass All |

```bash
# 启动时指定模式
codex --approval-mode full-auto

# 会话内切换
# 通过交互菜单选择
```

### Codex 的沙箱隔离

Codex 的一大特色是 Full Auto 模式下**强制在网络隔离沙箱中运行**——Agent 可以读写文件、跑命令，但不能访问互联网。这比 Claude Code 的 Bypass All 多了一层天然保护。

| 维度 | Claude Code Bypass | Codex Full Auto |
|------|-------------------|-----------------|
| 文件读写 | 自动 | 自动 |
| 命令执行 | 自动 | 自动 |
| 网络访问 | 有（需自己管理） | 默认隔离 |
| 安全感 | 需要手动配沙箱 | 内建沙箱 |

> 💡 **Codex 的沙箱让你可以更放心地用 Full Auto 模式做快速原型**。但仍然建议在 Git 保护下操作。

---

## 3. 会话管理

### 核心操作

| 操作 | 方式 | 使用时机 |
|------|------|---------|
| **新开会话** | 退出后重新 `codex` | 任务切换、上下文污染时 |
| **恢复上次** | `codex --resume` | 继续之前的工作 |
| **查看历史** | `codex --history` | 找到之前的会话 |
| **压缩上下文** | 在对话中要求 Agent 总结当前进度 | 长任务中途 |

### 同样的原则：短会话 > 长会话

Codex 和 Claude Code 一样，长会话会导致上下文退化。当你发现 Agent 开始遗忘约束或重复犯错，就该新开会话。

> 📖 **判断何时清理的四个信号**见 [Ch2 · 0.5d 节](./ch02-agent-first-practice.md#d-会话何时该清理)，对 Codex 同样适用。

---

## 4. 上下文控制

### @引用文件

和 Claude Code 一样，Codex 也支持 `@` 引用把文件内容注入上下文：

```text
请修改 @src/api/users.ts 中的 createUser 函数。
```

### 图片输入

Codex 支持在对话中直接传入图片（截图、设计稿等）：

```bash
codex "请看这个截图，修复页面布局问题" -i screenshot.png
```

### 管住输出噪音

和 Claude Code 一样，用 `| head -30` 截断过长输出，或让 Agent 只汇报关键结果。

---

## 5. 模型切换

Codex 默认使用 OpenAI 的最新模型，也可以手动指定：

```bash
# 启动时指定模型
codex --model gpt-5.4

# 使用 o3 等推理模型
codex --model o3
```

### 模型选择建议

| 场景 | 推荐模型 |
|------|---------|
| 日常开发、补测试、小改动 | 默认模型（通常是最新 GPT） |
| 复杂推理、架构设计 | o3 或 o4-mini |
| 快速原型、简单问答 | gpt-5.4-mini |
| 本地开源模型 | `codex --oss --local-provider ollama` |

### 推理级别

Codex 也有类似 Claude Code Effort 的推理强度控制：

```bash
# 五档推理级别
codex --model gpt-5.4 --reasoning medium   # minimal / low / medium(默认) / high / xhigh
```

> 💡 **和 Claude Code 的互补**：Codex 默认走 OpenAI 模型，Claude Code 默认走 Anthropic 模型。两个工具用不同的模型，可以互相 review。

---

## 6. 多 Agent 与并行

### 开多个 Codex 并行

同一个项目可以开多个终端窗口，每个跑一个独立 Codex session：

```bash
# 终端 1：做实现
codex "实现用户注册功能"

# 终端 2：写测试
codex "为用户注册功能写测试"
```

### Quiet Mode：只看最终结果

```bash
codex --quiet "分析这个项目的目录结构"
```

Quiet Mode 下 Codex 不会逐步展示推理过程，只输出最终结果。适合集成到脚本或 CI 中。

---

## 7. 文件与规则体系

### AGENTS.md（对标 Claude Code 的 CLAUDE.md）

`AGENTS.md` 是 Codex 的项目级指令文件，作用和 `CLAUDE.md` 完全对等。

一份够用的 `AGENTS.md`：

```markdown
# Project: Acme API

## Commands
npm run dev      # 启动开发服务器
npm run test     # 运行测试 (Vitest)
npm run lint     # ESLint + Prettier

## Architecture
- Express REST API, Node 20
- PostgreSQL via Prisma ORM

## Conventions
- 使用 zod 做请求验证
- 返回格式统一为 { data, error }
- 不向客户端暴露堆栈信息

## Boundaries
- 不修改 .env 文件
- 不修改 CI 配置
- 涉及数据库 schema 变更时先停下来问我
```

### 文件对照表

| Claude Code | Codex | 作用 |
|------------|-------|------|
| `CLAUDE.md` | `AGENTS.md` | 项目指令 |
| `CLAUDE.local.md` | `AGENTS.override.md` | 个人覆盖 |
| `~/.claude/CLAUDE.md` | `~/.codex/AGENTS.md` | 全局个人指令 |
| `.claude/settings.json` | `.codex/config.toml` | 项目配置（注意 Codex 用 TOML） |
| `.claude/rules/` | `~/.codex/rules/` | 规则文件 |
| `.claude/skills/` | `.agents/skills/` | Skill 系统 |
| `.claude/commands/` | 无直接对应 | 自定义命令 |
| Auto Memory | 无对应 | Claude Code 独有 |

### Codex 的 Skill 发现路径

Codex 的 Skill 沿目录树**向上扫描**：

```text
CWD/.agents/skills → 父目录 → repo root/.agents → ~/.agents/skills → /etc/codex/skills
```

这意味着你可以把团队通用的 Skill 放在 repo root，个人专用的放在 home 目录。

---

## 8. 快捷操作

### 单行命令模式

不需要进入交互界面，直接一行搞定：

```bash
# 直接问一个问题
codex "这个项目的入口文件在哪？"

# 直接执行一个任务
codex "把所有 TODO 注释列出来"

# 带文件引用
codex "解释 @src/auth/jwt.ts 的认证流程"
```

### 管道输入

```bash
# 把命令输出喂给 Codex 分析
git diff | codex "审查这些改动，找出潜在问题"

# 把错误日志喂给 Codex 排查
npm test 2>&1 | codex "分析这些测试失败的原因"
```

### Git 检查点

Codex 在 Full Auto 模式下会自动创建 Git 检查点，方便你随时回退：

```bash
git log --oneline    # 查看 Codex 创建的检查点
git reset --hard HEAD~1  # 不满意？直接回退
```

### Codex 特有的快捷键与命令

| 操作 | 说明 |
|------|------|
| `Tab` | 排队后续 prompt（类似 Claude Code 的 `/btw`） |
| `!command` | 直接在对话中执行 shell 命令 |
| `Ctrl+G` | 在外部编辑器中编辑长 prompt |
| `codex fork` | 克隆当前会话到新线程（类似 Claude Code 的 `/branch`） |
| `codex review --base main` | 对当前分支做代码审查 |
| `/diff` | 查看当前 git diff |
| `/fast` | 切换快速模式 |
| `/personality` | 切换 Codex 的回复风格 |
| `--search` | 启用实时 Web 搜索能力 |
| `-p fast` | 用命名 Profile 快速切换预设配置 |

---

## 9. Codex 与 Claude Code 的互补关系

这两者不是"谁替代谁"，而是两种互补的工作流。

| 维度 | 🟠 Claude Code | 🟢 Codex |
|------|----------------|---------|
| 默认模型 | Anthropic Claude | OpenAI GPT/o3 |
| 沙箱 | 需手动配 | Full Auto 内建沙箱 |
| 记忆系统 | Auto Memory（自动积累） | 无（靠 AGENTS.md 手动沉淀） |
| 扩展生态 | MCP / Skill / Hook / Plugin 完整体系 | 更轻量，聚焦终端执行 |
| 会话恢复 | `--resume` + 命名 + 完整历史 | `--resume` + 基本历史 |
| 最强场景 | 探索、规划、多轮协作、方法论驱动 | 规则明确、终端执行、隔离沙箱 |
| 一行命令 | `claude "..."` | `codex "..."` |

### 一个稳的组合方式

1. 用 Claude Code 做探索、拆解和方案讨论（Auto Memory 帮你积累项目经验）
2. 用 Codex 在隔离沙箱里执行清晰范围的实现或批量改动
3. 两个工具互相 review——不同模型看同一份代码，更容易发现盲点
4. 最后统一回到验证与人工裁决

> 💡 **最有价值的互补不是"用两个工具做同一件事"，而是"让不同模型从不同角度审查同一份工作"。**

---

## 📌 本章总结

- Codex 的优势在于终端协作、沙箱隔离和单行命令模式。
- `AGENTS.md` 是 Codex 的 `CLAUDE.md`，`.codex/config.toml` 是配置文件（注意 TOML 格式）。
- Full Auto + 内建沙箱是 Codex 最有特色的组合——比 Claude Code 的 Bypass 更安全。
- 两个工具最有价值的互补是让**不同模型互相 review**，而不是做同一件事。
- 对新手最重要的不是"全自动"，而是先建立边界清晰的协作感。

---

<div align="center">

[📚 返回目录](../../README.md#tutorial-contents) | [⬅️ 上一章：Ch04 Claude Code 实用技巧](./ch04-claude-code-tips.md) | [➡️ 下一章：Ch06 基础概念与术语](./ch06-glossary.md)

</div>
