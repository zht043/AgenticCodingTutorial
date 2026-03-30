# Chapter 4 · 🟠 Claude Code 实用技巧

> 🎯 **目标**：把 Claude Code 用得更稳、更顺手。本章不追求把所有功能一次讲全，而是精选日常开发中 ROI 最高的技巧，每条都能在 30 秒内上手。

## 📑 目录

- [1. 最小工作流：四步闭环](#1-最小工作流四步闭环)
- [2. 权限与自治模式](#2-权限与自治模式)
- [3. 会话管理](#3-会话管理)
- [4. 上下文控制](#4-上下文控制)
- [5. 模型切换与推理强度](#5-模型切换与推理强度)
- [6. 子 Agent 与并行](#6-子-agent-与并行)
- [7. 文件与记忆体系](#7-文件与记忆体系)
- [8. 快捷键与隐藏命令](#8-快捷键与隐藏命令)
- [9. 效率口诀](#9-效率口诀)

---

## 1. 最小工作流：四步闭环

Claude Code 最值得记住的不是某个命令，而是这条最小闭环：

```text
Explore → Plan → Implement → Verify
```

日常第一轮对话，推荐直接带上这三句约束：

```text
1. 先分析再执行，先告诉我你打算怎么做。
2. 修改后必须验证，告诉我你实际跑了什么。
3. 如果不确定，就停下来说明，不要猜。
```

> 🧭 **Claude Code 不是"让它直接写"，而是"先让它读懂，再让它按边界执行"。**

---

## 2. 权限与自治模式

### 三种权限心智模型

| 模式 | 文件编辑 | 命令执行 | 适合什么场景 |
|:---:|:---:|:---:|---|
| 🛡️ **默认模式** | 需确认 | 需确认 | 第一次接手陌生仓库、敏感项目 |
| ✏️ **Auto Edit** | 自动 | 需确认 | 日常开发——Agent 自由改文件，命令你把关 |
| ⚡ **Bypass All** | 自动 | 自动 | 隔离沙箱里的快速原型、低风险批量操作 |

### 切换方式

```bash
# CLI 启动时直接进入全自动模式（慎用，建议配合沙箱）
claude --dangerously-skip-permissions

# 会话内查看和切换
/permissions
```

**VS Code 插件**：侧边栏 → 齿轮图标 → Permission Mode 下拉选择。

> ⚠️ **Bypass All 安全提醒**：此模式下 Agent 可以不经确认执行任意命令。只建议在 Docker/沙箱/worktree 隔离环境 + 已 Git 保存所有重要变更的情况下使用。

### 权限白名单精细控制

与其全部 Bypass，不如在 `.claude/settings.json` 里按需放行：

```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Bash(git status)", "Bash(git diff *)"],
    "deny": ["Bash(rm -rf *)", "Bash(curl *.sh | bash)", "Read(./.env)"]
  }
}
```

这样日常测试命令自动放行，危险命令始终拦截。

---

## 3. 会话管理

这是影响 Claude Code 使用效果最大的一个技能。会话管太长 → Agent 变蠢；切太频 → 丢上下文。关键是知道**什么时候该做什么**。

### 七个核心操作

| 操作 | 命令 | 使用时机 |
|------|------|---------|
| **清空重来** | `/clear` | 切换到完全不同的任务；Agent 陷入死循环 |
| **压缩历史** | `/compact` | 完成一个子任务后进入下一个；对话超过 15 分钟 |
| **带摘要压缩** | `/compact "已完成 X，下一步做 Y"` | 你比 Agent 更清楚什么信息对下一步重要 |
| **恢复上次** | `claude --resume` | 昨天没做完的任务今天继续 |
| **恢复指定** | `claude --resume <session-id>` | 恢复特定历史会话 |
| **命名会话** | `claude --name "fix-login-bug"` | 方便后续 `--resume` 精确找回 |
| **浏览历史** | `claude --history` | 查找和选择历史会话 |

### 什么时候该新开会话

| 信号 | 建议 |
|------|------|
| 任务已经变了 | 新开（旧上下文干扰新任务） |
| Agent 忘记你反复强调的约束 | `/compact` 或新开 |
| 你已经纠正同一个错误两次 | 新开（失败尝试在污染判断） |
| 对话明显变长变慢 | `/compact` |

> 🔑 **宁可多开几个短会话，也不要死守一个长会话。** 新会话的新鲜上下文是免费的，污染的上下文会让 Agent 越来越蠢。

### 跨会话交接

长任务分多个 session 完成时，在旧 session 结束前生成交接摘要：

```
请生成任务交接摘要：总体目标、已完成工作、未完成工作、关键约束、关键文件路径。
```

新 session 开头粘贴摘要，Agent 就能快速恢复上下文。也可以把交接写进 `HANDOFF.md` 文件，更持久。

---

## 4. 上下文控制

### @引用：精准注入文件

```text
请修改 @src/api/users.ts 中的 createUser 函数，
参考 @src/services/userService.ts 的 validate 方法。
```

`@` 引用会自动把文件内容注入上下文，比让 Agent 自己搜索快得多、也更精准。

### 中途插 Prompt：/btw

Agent 正在工作时，你突然想问个不相关的问题：

```bash
/btw 这个项目的 CI 配置在哪个文件？
```

`/btw` 让你在不中断当前任务的情况下插入一个并行问题。Agent 会在当前任务告一段落后回答。

### 管住命令输出噪音

Agent 跑命令时输出太长会污染上下文。用管道截断：

```text
请运行 npm test | head -30
```

或者让 Agent 跑完后只汇报结果，不要把全部输出留在上下文里。

### /init：一键初始化 CLAUDE.md

```bash
/init
```

Claude Code 会读取你的项目结构，自动生成一份 `CLAUDE.md` 初始版本。生成后你再手动精简到核心要点。

---

## 5. 模型切换与推理强度

### 什么时候切模型

把 Sonnet 理解成默认主力，Opus 理解成攻坚模式：

| 场景 | 推荐模型 |
|------|---------|
| 日常实现、补测试、文档、一般修复 | Sonnet（默认） |
| 跨文件重构、难调试、复杂依赖、深推理 | Opus |
| 子 Agent 的只读探索任务 | Haiku（省钱） |

```bash
# 会话内切换
/model opus
/model sonnet

# 混合模式：Plan 用 Opus，执行用 Sonnet
/model opusplan
```

### 推理强度控制（Effort）

| 档位 | Token 消耗 | 适合 |
|------|-----------|------|
| **Low** | 最少 | 子 Agent、文件查找、简单问答 |
| **Medium** | 适中 | Agent 工作流、代码审查、日常开发 |
| **High**（默认） | 较多 | 复杂编码、架构设计、疑难 Debug |
| **Max**（仅 Opus） | 不限 | 跨文件 Bug、关键架构决策 |

```bash
/effort          # 会话内切换
claude --effort max  # 启动时指定
```

### 推荐流程

1. 先用默认模型推进
2. 连续两轮没进展就停
3. 压缩无关历史
4. 再切更强模型处理真正卡住的问题

---

## 6. 子 Agent 与并行

### 开多个 Claude Code 并行

同一个项目可以开多个终端窗口 / VS Code 面板，每个跑一个独立 Claude Code session。适合：

- 一个做实现，一个做 review
- 一个跑测试等结果，一个继续写下一段
- 不同子任务并行推进

```bash
# 终端 1
claude --name "implement-auth"

# 终端 2
claude --name "write-tests"
```

> 💡 用 `/color` 给不同窗口设置不同配色，避免操作混乱。

### 指挥子 Agent

Claude Code 支持把任务分派给子 Agent，子 Agent 在独立的上下文窗口中运行，不会污染主 Agent 的上下文。

```text
请派一个 subagent 去分析 src/legacy/ 目录的架构，
输出一份模块依赖图和改进建议。
主 Agent 先继续当前任务，等 subagent 回来后再合并结果。
```

也可以在 `.claude/agents/` 目录下预定义子 Agent 角色（见 [Ch3 · .claude 文件夹全景图](./ch03-first-extension-setup.md#6-claude-文件夹全景图)）。

> 📖 **多 Agent 协作模式的深度对比**（Swarm vs Team、Orchestrator 模式等）见 [Ch18 · Agent 设计模式](./ch18-agent-patterns.md)。

---

## 7. 文件与记忆体系

### 快速回顾文件分工

| 文件 | 谁写 | 作用 |
|------|------|------|
| `CLAUDE.md` | 你 | 项目规则、约束、常用命令 |
| `.claude/rules/*.md` | 你 | 模块化规则（支持按路径生效） |
| `MEMORY.md` + 主题文件 | Agent 自动 | 自动记忆（构建命令、调试经验、偏好） |
| `.claude/settings.json` | 你 | 权限边界 |
| `.claude/skills/` | 你或 Plugin | 可复用方法手册 |
| `.claude/commands/` | 你 | 自定义斜杠命令 |
| `.claude/agents/` | 你 | 子 Agent 角色定义 |

### /customize：一站式配置入口

```bash
/customize
```

打开交互式配置面板，可以在里面管理：

- Memory（Auto Memory 开关、存储路径）
- Plugin（已安装的 Plugin 列表、启用 / 禁用）
- Model 偏好
- 主题和外观

### 手动管理记忆

```text
请记住：这个项目用 Vitest 而不是 Jest。
请忘掉关于旧构建脚本的记忆。
```

也可以直接编辑 `~/.claude/projects/<project>/memory/MEMORY.md`。

> 📖 **MCP / Skill / Hook / Command / Plugin 的安装与配置**见 [Ch3 · 配置使用第一个](./ch03-first-extension-setup.md)。

---

## 8. 快捷键与隐藏命令

### 最实用的快捷键

| 快捷键 | 功能 |
|--------|------|
| **Ctrl+Enter**（推荐改为默认发送键） | 发送消息（避免 Enter 误触） |
| `Shift+Tab` | 三种模式循环切换：Normal → Auto-Accept → Plan Mode |
| `Ctrl+J` / `Option+回车`（Mac） | 换行（不发送） |
| `Ctrl+V` | 直接粘贴截图（Mac 也是 Ctrl，不是 Cmd） |
| `Ctrl+R` | 搜索 prompt 历史 |
| `Ctrl+G` | 打开外部编辑器编写多行输入（长 prompt 神器） |
| `Ctrl+T` | 切换任务列表（/tasks）显示 |
| `Ctrl+U` | 删除整行输入 |
| `Esc Esc` | 打开 /rewind |
| `Ctrl+B` | 后台运行当前任务 |
| `Ctrl+O` | 展开/折叠输出 |

> 💡 **强烈建议第一时间把发送键改为 Ctrl+Enter**。在精心构建多行 Prompt 时误按 Enter 发出半成品指令，既浪费 Token 又干扰 Agent 理解。
>
> **CLI 中修改**：`/config` → 找到 "Send Message Keybinding" → 改为 Cmd+Enter / Ctrl+Enter
>
> **VS Code 插件**：设置（`Cmd+,`）→ 搜索 `claude code submit` → 改为 Cmd+Enter

### 隐藏命令速查

| 命令 | 功能 | 使用场景 |
|------|------|---------|
| `/btw` | 并行提问，不中断当前任务 | 正在工作时插个问题 |
| `/rewind`（或 `Esc Esc`） | 回退代码和/或对话 | 撤销 Agent 的操作 |
| `/branch` | 分叉对话到新会话 | 想试新方向但不想丢进度 |
| `/simplify` | 三 Agent 并行代码审查 | 写完功能后优化代码 |
| `/insights` | 生成使用习惯分析报告 | 每月跑一次，优化习惯 |
| `/cost` | 查看本次会话 Token 消耗 | 控制预算 |
| `/doctor` | 诊断 Claude Code 环境问题 | 连接失败、配置异常时 |
| `/export` | 导出对话为 Markdown | 保存讨论内容 |
| `/loop 5m` | 定时重复执行任务 | 持续监控某个状态 |
| `/color` | 终端配色 | 多窗口时区分不同 session |
| `/model opusplan` | Plan 用 Opus，执行用 Sonnet | 省 Opus 额度 |
| `/plan` | 直接进入规划模式 | 复杂任务先出方案 |
| `/voice` | 语音模式（按住空格说话） | 解放双手 |
| `/context` | 可视化当前上下文占用 | 审计 token 分布 |
| `/usage` | 查看订阅计划用量与速率限制 | 控制额度 |
| `/teleport` | 在 Web 端和本地终端之间迁移会话 | 跨设备继续 |
| `/tasks` | 持久化任务列表管理 | 大任务分步追踪 |

### 进阶工作流技巧

| 技巧 | 说明 |
|------|------|
| **"Think" 关键词** | 在 prompt 中加入 "Think" 或 "Think hard" 会触发更深的推理，适用于架构决策和复杂调试 |
| **Git Worktree 并行** | 同时跑多个会话，每个用独立 git worktree 隔离——Claude Code 创始团队的头号提效技巧 |
| **反馈自学习** | 每次 Agent 犯错后，让它写入 `CLAUDE.md` 规则，久而久之 Agent 自动适应你的项目 |
| **带焦点 compact** | `/compact focus on auth logic` — 压缩时指定保留重点，比默认压缩更精准 |

### /rewind 的五个选项

1. **Restore code and conversation** — 代码 + 对话都回退
2. **Restore conversation** — 只回退对话
3. **Restore code** — 只回退代码
4. **Summarize from here** — 从这点开始总结
5. **Never mind** — 取消

### /rewind vs /branch

| | /rewind | /branch |
|---|---------|---------|
| 作用 | 回退到之前状态 | 分叉到平行会话 |
| 比喻 | 后悔药 | 平行宇宙 |
| 原对话 | 回退到之前状态 | 保持不变 |
| 适合 | 撤销错误操作 | 尝试不同方案 |

---

## 9. 效率口诀

> **短 CLAUDE.md + 上下文治理 + Skill 按需 + Hook 硬约束 + Subagent 隔离 + 验证闭环**

### 卡住了怎么办：快速决策树

```text
Claude Code 卡住了？
  ↓
配置是否正确？ → 跑 /doctor
  ↓ 是
上下文是否过长？ → /compact 或 /clear
  ↓ 否
需要回退？ → /rewind
需要分叉尝试？ → /branch
需要切更强模型？ → /model opus
需要优化代码？ → /simplify
都不是？ → 跑一次 /insights 了解使用习惯
```

---

## 📌 本章总结

- 先建立最小闭环（Explore → Plan → Implement → Verify），不要一上来堆配置。
- 权限按需放行比全部 Bypass 更安全——用 `settings.json` 精细控制。
- 会话管理是最大的效率杠杆：该压缩就压缩，该新开就新开。
- `@引用` > 让 Agent 自己搜；`/btw` 插问题不中断任务；命令输出截断防止污染。
- Sonnet 日常用，Opus 攻坚用，Haiku 给子 Agent 省钱用。
- 多窗口并行 + 子 Agent 分工，是处理复杂任务的利器。
- 把发送键改成 Ctrl+Enter 是第一天就该做的事。

---

<div align="center">

[📚 返回目录](../../README.md#tutorial-contents) | [⬅️ 上一章：Ch03 配置使用第一个](./ch03-first-extension-setup.md) | [➡️ 下一章：Ch05 Codex 实用技巧](./ch05-codex-tips.md)

</div>
