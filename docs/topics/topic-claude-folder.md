---
> 📚 **Part IV · 进阶专题** | [← 返回专题目录](../../README.md#part-iv-topics)
---

# .claude 文件夹深度解析

> Claude Code 的控制中枢——理解每个文件的作用，让 Agent 完全按照你期望的方式工作。

---

## 快速总结

- **.claude/ 文件夹**是 Claude Code 的**控制中枢**，分为**项目级**（提交 git，团队共享）和**全局级**（`~/.claude/`，个人偏好）两层
- **CLAUDE.md** 是**杠杆率最高的文件**，控制 Claude 在项目中的所有行为，建议保持在 **200 行以内**
- **rules/** 把臃肿的 CLAUDE.md 拆成按关注点分离的模块，支持按文件路径限定作用域
- **commands/** 让你用 Markdown 定义斜杠命令，可以内嵌 shell 命令输出、传递参数
- **skills/** 和 commands 类似，但 Claude 会根据对话内容**自动触发**，不需要手动调用
- **agents/** 定义**专业化子代理**，在独立上下文窗口中运行
- **settings.json** 通过 allow/deny 列表控制 Claude 的**工具权限**

---

## 一、两个文件夹，不是一个

有两个 .claude 目录，不是一个：

| 项目级 (your-project/.claude/) | 全局级 (~/.claude/) |
|--------------------------------|----------------------|
| settings.json | CLAUDE.md |
| commands/ | projects/ |
| CLAUDE.md | commands/ |
| rules/ | skills/ |
| skills/ | agents/ |
| agents/ | |
| ✓ 提交 git（团队配置） | ✗ 不提交（个人配置） |
| 团队所有人共享 | 只有你自己使用 |

**项目级**保存团队配置，提交 git 后所有人都有相同的规则和命令。

**全局 ~/.claude/**保存你的个人偏好和机器本地状态（如会话历史）。

---

## 二、CLAUDE.md — Claude 的使用手册

这是整个系统中**最重要的文件**。Claude Code 启动时读取的第一个东西就是 CLAUDE.md，内容直接加载进系统提示词并在整个对话中保持。

> 简单来说：你在 CLAUDE.md 里写什么，Claude 就遵循什么。

### 多层级配置

| 优先级 | 文件 | 说明 |
|--------|------|------|
| 最高 | CLAUDE.local.md | 个人项目调整，gitignored |
| ↓ | ./CLAUDE.md（项目根目录） | 团队指令，提交 git |
| ↓ | ~/.claude/CLAUDE.md | 全局个人偏好 |
| 最低 | Managed Policy（企业级） | IT 部署，不可覆盖 |

Claude 会读取所有这些文件并合并，高优先级覆盖低优先级的冲突配置。

### 该写什么

**✅ 该写的：**

- 构建、测试和 lint 命令（`npm run test`、`make build` 等）
- 关键的架构决策（如：我们使用 Turborepo 的 monorepo）
- 不明显的陷阱（如：TypeScript 严格模式已开启，未使用的变量会报错）
- import 约定、命名模式、错误处理风格
- 主要模块的文件和文件夹结构

**❌ 不该写的：**

- 任何应该放在 linter 或 formatter 配置里的东西
- 可以通过链接指向的完整文档
- 解释理论的长篇段落

> 💡 **建议**：CLAUDE.md 保持在 **200 行以内**。超过这个长度上下文消耗过大，Claude 对指令的遵循度反而会下降。

### 精简示例

```markdown
# Project: Acme API

## Commands
npm run dev      # Start dev server
npm run test     # Run tests (Jest)
npm run lint     # ESLint + Prettier check

## Architecture
- Express REST API, Node 20
- PostgreSQL via Prisma ORM
- All handlers live in src/handlers/

## Conventions
- Use zod for request validation in every handler
- Return shape is always { data, error }
- Never expose stack traces to the client
- Use the logger module, not console.log

## Watch out for
- Tests use a real local DB, not mocks. Run `npm run db:test:reset` first
- Strict TypeScript: no unused imports, ever
```

约 20 行。Claude 在这个代码库中高效工作所需的一切，不需要反复确认。

---

## 三、rules/ 文件夹 — 模块化指令

当团队规模增长，你最终会得到一个 300 行的 CLAUDE.md，没人维护，所有人都忽略。**rules/ 文件夹**解决了这个问题。

`.claude/rules/` 里的每个 Markdown 文件都会和 CLAUDE.md 一起**自动加载**：

```
.claude/rules/
├── code-style.md
├── testing.md
├── api-conventions.md
└── security.md
```

每个文件保持聚焦，团队成员各自维护各自负责的规则文件，互不干扰。

### 路径作用域规则

真正强大的是**路径作用域规则**——在规则文件中添加 YAML frontmatter，只在 Claude 处理匹配文件时才激活：

```markdown
---
paths:
  - "src/api/**/*.ts"
  - "src/handlers/**/*.ts"
---

# API Design Rules

- All handlers return { data, error } shape
- Use zod for request body validation
- Never expose internal error details to clients
```

当 Claude 在编辑 React 组件时，不会加载这个文件。只有在 `src/api/` 或 `src/handlers/` 内部工作时才加载。没有 paths 字段的规则无条件加载。

---

## 四、commands/ 文件夹 — 自定义斜杠命令

开箱即用的 Claude Code 有内置斜杠命令（`/help`、`/compact` 等）。**commands/ 文件夹**让你添加自己的命令。

`.claude/commands/` 里的每个 Markdown 文件变成一个斜杠命令：

- `review.md` → `/review`
- `fix-issue.md` → `/fix-issue`

### 命令的核心能力：内嵌 Shell 输出

用 `` !`shell command` `` 语法在 Claude 看到 prompt 之前运行 shell 命令并嵌入输出：

```markdown
---
description: Review the current branch diff for issues before merging
---
## Changes to Review

!`git diff --name-only main...HEAD`

## Detailed Diff

!`git diff main...HEAD`

Review the above changes for:
1. Code quality issues
2. Security vulnerabilities
3. Missing test coverage

Give specific, actionable feedback per file.
```

运行 `/review` 时，真实的 `git diff` 会自动注入到 prompt 中，Claude 才看到内容。

### 传递参数

用 `$ARGUMENTS` 接收命令名后面的文本：

```markdown
---
description: Investigate and fix a GitHub issue
argument-hint: [issue-number]
---

Look at issue #$ARGUMENTS in this repo.

!`gh issue view $ARGUMENTS`

Understand the bug, trace it to the root cause, fix it, and write a test.
```

运行 `/fix-issue 234` 会把 issue 234 的内容直接灌入 prompt。

### 项目命令 vs 个人命令

- **项目命令**：`.claude/commands/` — 提交 git，团队共享，格式为 `/project:command-name`
- **个人命令**：`~/.claude/commands/` — 所有项目都可用，格式为 `/user:command-name`

---

## 五、skills/ 文件夹 — 自动触发的工作流

Skills 和 Commands 的表面类似，但**触发机制本质不同**：

| Commands | Skills |
|----------|--------|
| 你手动输入斜杠命令触发 | Claude 根据对话内容自动调用 |
| 单个 .md 文件 | 文件夹 + SKILL.md |
| 适合：可重复的手动工作流 | 适合：上下文感知的自动工作流 |

每个 Skill 在 `skills/` 下有自己的子目录，包含 `SKILL.md` 文件：

```
.claude/skills/
├── security-review/
│   ├── SKILL.md
│   └── DETAILED_GUIDE.md
└── deploy/
    ├── SKILL.md
    └── templates/
        └── release-notes.md
```

### SKILL.md 示例

```markdown
---
name: security-review
description: Comprehensive security audit. Use when reviewing code for vulnerabilities, before deployments, or when the user mentions security.
allowed-tools: Read, Grep, Glob
---

Analyze the codebase for security vulnerabilities:

1. SQL injection and XSS risks
2. Exposed credentials or secrets
3. Insecure configurations
4. Authentication and authorization gaps

Report findings with severity ratings and specific remediation steps.
Reference @DETAILED_GUIDE.md for our security standards.
```

当你说 "review this PR for security issues" 时，Claude 识别匹配并**自动调用**这个 Skill。你也可以用 `/security-review` 显式调用。

> Skills 还可以把辅助文件打包进来——`@DETAILED_GUIDE.md` 引用会拉入 SKILL.md 旁边的详细文档。命令是单个文件，Skills 是一个**包（Package）**。

> 📖 Skills 的完整指南（包括 5 种设计模式）→ [Skill 系统专题](./topic-skills.md)

---

## 六、agents/ 文件夹 — 专业化子代理

当一个任务复杂到需要专门的专家时，在 `.claude/agents/` 中定义**子代理角色**：

```
.claude/agents/
├── code-reviewer.md
└── security-auditor.md
```

每个 Agent 有自己的系统提示词、工具访问权限和模型偏好：

```markdown
---
name: code-reviewer
description: Expert code reviewer. Use PROACTIVELY when reviewing PRs, checking for bugs, or validating implementations before merging.
model: sonnet
tools: Read, Grep, Glob
---

You are a senior code reviewer with a focus on correctness and maintainability. When reviewing code:

- Flag bugs, not just style issues
- Suggest specific fixes, not vague improvements
- Check for edge cases and error handling gaps
- Note performance concerns only when they matter at scale
```

### 子代理的工作原理

```
主 Agent（上下文渐渐填满）
         ↓ 派遣子代理
子代理：独立的全新上下文窗口
        只看到：系统提示 + 这个任务
        完全隔离
         ↓ 完成后返回压缩结果
主 Agent：只收到答案，不被中间探索污染
```

子代理吸收所有"脏探索"，主 Agent 只得到最终答案。

**配置字段说明：**
- **tools**：限制子代理可以使用的工具。安全审计员只需要 Read、Grep、Glob，没有理由写文件。这个限制是有意为之的。
- **model**：为聚焦的任务使用更便宜的模型。Haiku 处理大多数只读探索任务表现良好，把 Sonnet 留给需要推理的工作。

---

## 七、settings.json — 权限配置

`.claude/settings.json` 控制 Claude 能做什么和不能做什么：

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Read",
      "Write",
      "Edit"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(curl *)",
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

- **allow**：Claude 不经确认直接运行的命令
- **deny**：被完全阻止的命令，无论如何都不允许
- **中间地带**：不在任何列表中的命令，Claude 会请求确认——这是有意设计的安全网

`$schema` 行在 VS Code 中启用自动补全和内联校验，建议始终包含。

### settings.local.json

创建 `.claude/settings.local.json` 存放个人不想提交的权限变更，自动 gitignored。

---

## 八、完整全景图

```
your-project/
├── CLAUDE.md                 # 团队指令（提交 git）
├── CLAUDE.local.md           # 个人覆盖（gitignored）
│
└── .claude/
    ├── settings.json         # 权限 + 配置（提交 git）
    ├── settings.local.json   # 个人权限覆盖（gitignored）
    │
    ├── commands/             # 自定义斜杠命令
    │   ├── review.md         # → /project:review
    │   ├── fix-issue.md      # → /project:fix-issue
    │   └── deploy.md         # → /project:deploy
    │
    ├── rules/                # 模块化指令文件
    │   ├── code-style.md
    │   ├── testing.md
    │   └── api-conventions.md
    │
    ├── skills/               # 自动触发的工作流
    │   ├── security-review/
    │   │   └── SKILL.md
    │   └── deploy/
    │       └── SKILL.md
    │
    └── agents/               # 专业化子代理角色
        ├── code-reviewer.md
        └── security-auditor.md

~/.claude/
├── CLAUDE.md                 # 全局个人指令
├── settings.json             # 全局个人设置
├── commands/                 # 个人命令（所有项目）
├── skills/                   # 个人 Skills（所有项目）
├── agents/                   # 个人 Agents（所有项目）
└── projects/                 # 会话历史 + 自动记忆
```

---

## 九、起步路径

如果从零开始，推荐这个渐进路径：

**第一步**：运行 `/init`。Claude Code 读取项目生成初始 CLAUDE.md，然后精简到核心要点。

**第二步**：添加 `.claude/settings.json`，配上适合技术栈的 allow/deny 规则。至少 allow 你的运行命令，deny `.env` 读取。

**第三步**：为最常做的工作流创建一两个命令。代码审查和修复 issue 是好的起点。

**第四步**：随着项目增长，当 CLAUDE.md 变得拥挤时，把指令拆分到 `.claude/rules/` 文件中。在有意义的地方按路径限定作用域。

**第五步**：添加 `~/.claude/CLAUDE.md`，写上个人偏好——比如"总是在实现之前先写类型定义"或"偏好函数式模式而不是基于类的模式"。

> 对于 95% 的项目，这就是你真正需要的全部。Skills 和 Agents 在你有值得打包的复杂重复工作流时才需要引入。

---

> **.claude 文件夹实际上是一个协议**——告诉 Claude 你是谁、你的项目做什么、以及它应该遵循什么规则。定义得越清楚，花在纠正 Claude 上的时间就越少，它花在有用工作上的时间就越多。

---

返回总览：[返回仓库 README](../../README.md)

返回目录：[README · 章节目录](../../README.md#tutorial-contents)
