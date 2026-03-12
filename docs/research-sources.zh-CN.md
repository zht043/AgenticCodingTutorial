# Agentic Coding 热门资料与取材清单

更新时间：`2026-03-11`

整理原则：

- 事实性内容优先采用官方文档或官方仓库
- 方法论与生态观察补充采用高热度 GitHub 项目和社区教程
- 版本变化很快的内容只作为“取材来源”，不建议直接原样写死在正文

## 一、最值得作为正文主干依据的官方资料

### 1. Anthropic / Claude Code

- [Anthropic: Introducing agentic coding](https://www.anthropic.com/engineering/claude-code-best-practices)
  - 适合用来写“为什么 Agentic Coding 值得学”和最佳实践框架。
- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
  - 适合用来写 Claude Code 定位与能力边界。
- [Claude Code common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
  - 适合用来写“读仓库、规划、修改、验证”的标准流程。
- [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory)
  - 适合写 `CLAUDE.md`、记忆策略、上下文污染。
- [Claude Code settings](https://docs.anthropic.com/en/docs/claude-code/settings)
  - 适合写配置、权限、模型后端等话题。
- [Claude Code subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
  - 适合写多 Agent 协作。
- [Claude Code hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)
  - 适合写自动化工作流和防呆机制。
- [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
  - 适合连接到 MCP 章节。
- [Claude Code slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
  - 适合写高频命令和效率技巧。
- [Claude Code GitHub Actions](https://docs.anthropic.com/en/docs/claude-code/github-actions)
  - 适合写从本地 Agent 延展到 CI / PR 自动化。

### 2. OpenAI / Codex

- [OpenAI: Introducing Codex](https://openai.com/index/introducing-codex/)
  - 适合写 Codex 的产品定位与工作方式。
- [OpenAI: Codex updates](https://openai.com/index/introducing-codex-upgrades/)
  - 适合写 Codex 的产品演进。
- [OpenAI: Introducing Codex on ChatGPT](https://openai.com/index/introducing-codex/)
  - 适合写云端 Agent 方向的产品形态。
- [openai/codex](https://github.com/openai/codex)
  - GitHub 搜索结果显示约 `55k+ stars`，适合引用为高热度官方开源实现。

### 3. Cursor

- [Cursor Docs: Agent](https://docs.cursor.com/agent)
  - 适合写 Cursor 的 Agent 使用范式。
- [Cursor Docs: Rules](https://docs.cursor.com/context/rules)
  - 适合写 repo 级规则、上下文工程和约束注入。

### 4. Cline

- [cline/cline](https://github.com/cline/cline)
  - GitHub 搜索结果显示约 `56k+ stars`，是高热度的开源 Coding Agent 项目。
- [Cline Docs](https://docs.cline.bot/)
  - 适合写 Cline 的能力、MCP 结合方式和使用流程。

### 5. GitHub Copilot Coding Agent

- [GitHub Docs: About coding agent](https://docs.github.com/en/copilot/concepts/about-coding-agent)
  - 适合用来做“云端/平台型 Agent”对照。

### 6. MCP 官方资料

- [Model Context Protocol introduction](https://modelcontextprotocol.io/introduction)
  - 适合解释 MCP 的定位。
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
  - GitHub 搜索结果显示约 `76k+ stars`，适合用来证明 MCP 生态热度。

## 二、适合用来补充生态、实用技巧和社区经验的高热度 GitHub 项目

### 1. Claude Code 生态

- [The SuperClaude Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)
  - GitHub 搜索结果显示约 `19k+ stars`
  - 适合引用“先 plan 再 act”“命令体系化”的方法论。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)
  - GitHub 搜索结果显示约 `24k+ stars`
  - 适合用于记忆管理和长期上下文章节。
- [MrLesk/Claude-Code-History-Viewer](https://github.com/MrLesk/Claude-Code-History-Viewer)
  - GitHub 搜索结果显示约 `200+ stars`
  - 适合作为实用周边工具案例。

### 2. Cursor / Rules 生态

- [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)
  - GitHub 搜索结果显示约 `35k+ stars`
  - 适合写“项目规则文件”怎么设计、怎么借鉴。

### 3. MCP 生态

- [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers)
  - GitHub 搜索结果显示约 `3k+ stars`
  - 适合写“现成 MCP 怎么找、怎么选”。

### 4. Skills 生态

- [AgentSkills on GitHub](https://github.com/AgentSkills/agentskills)
  - GitHub 搜索结果显示约 `5k+ stars`
  - 适合观察社区如何组织 skill。
- [zht043/AgentSkills](https://github.com/zht043/AgentSkills)
  - 这是你自己的仓库，适合直接作为“meta skill 指导开发新 skill”的案例。

## 三、适合补充“教程写法”和“案例叙事方式”的社区资料

### 1. Anthropic 生态的教程和视频

- [Armin Ronacher: Agentic Coding, Abstracting the Problem](https://www.youtube.com/watch?v=J1R1-G9ZMV8)
  - 适合参考“如何从工程视角解释 Agentic Coding，而不是只讲产品功能”。
- [claudecode101.com](https://www.claudecode101.com/)
  - 适合参考教程组织方式和新手导向写法。

### 2. 多工具实践文章

- [Mahesh Rijal: The Complete Guide to Agentic Coding Tools](https://maheshdoesthings.com/p/the-complete-guide-to-agentic-coding)
  - 适合做横向产品对照取材。
- [Mukesh: Agentic coding update](https://www.mukesh.io/blog/agentic-coding/)
  - 适合参考生态盘点写法。
- [GitHub Resources: Agentic Workflows](https://github.com/resources/articles/ai/software-development-with-agentic-workflows)
  - 适合写“企业/平台视角下的 Agentic workflow”。

## 四、适合写“部署、中转、风险”章节的资料

- [云雾 API 文档：分组的特殊性及价格差异](https://yunwu.apifox.cn/doc-5459009)
  - 适合用来说明“不同费率分组不只是价格不同”。
  - 这类资料只能用来写“风险提示”和“判断方法”，不建议全文直接依赖单一服务商文档。

建议在正文里的表述方式：

- 官方支持优先
- 兼容 API 方案作为补充
- 逆向或非官方通道强调不稳定性、风控、日志、安全、速率和能力漂移风险

## 五、建议从这些资料里分别抽取什么内容

### 用于写“引言篇”

- Anthropic 的 agentic coding 文章
- GitHub 的 agentic workflows 文章
- Armin Ronacher 的分享

### 用于写“快速上手篇”

- Claude Code overview / common workflows
- Cursor Agent 文档
- Cline Docs
- OpenAI Codex 官方介绍

### 用于写“Agent vs LLM / MCP vs Skills”

- Claude Code docs
- MCP 官方 introduction
- Cursor Rules docs
- AgentSkills / SuperClaude / claude-mem 这些社区项目

### 用于写“Claude Code 深潜篇”

- Anthropic 官方各子页面
- SuperClaude
- claude-mem
- Claude Code History Viewer

### 用于写“部署与安全”

- 官方产品文档
- 中转商文档只用作风险旁注

## 六、建议你在正文中避免直接写死的内容

这些内容很容易过时，建议单独放附录或单独维护：

- 模型具体版本号横评
- 价格、速率、费率组
- 某些第三方兼容层是否仍可用
- 某个插件是否仍在维护
- 某个工具是否仍支持某个模型

## 七、最推荐的正文取材组合

如果你想尽快开始写，我建议优先用这 10 组资料搭正文主框架：

1. Anthropic 的 agentic coding 文章
2. Claude Code overview
3. Claude Code common workflows
4. Claude Code memory
5. Claude Code hooks / subagents / MCP
6. OpenAI Codex 官方介绍 + `openai/codex`
7. Cursor Agent + Rules
8. Cline Docs + `cline/cline`
9. MCP 官方介绍 + `modelcontextprotocol/servers`
10. SuperClaude + AgentSkills + claude-mem 作为生态补充

## 八、建议在后续写作时增加的两个文档

- `docs/chapter-writing-checklist.md`
  - 统一每章写作模板、插图需求、案例结构。
- `docs/version-sensitive-matrix.md`
  - 单独维护模型版本、产品支持矩阵、价格、兼容性。
