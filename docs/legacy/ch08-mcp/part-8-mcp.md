# Chapter 8 · MCP 协议

> 目标：深入理解 MCP 的定位、用法和局限——以及为什么 2026 年的趋势是"MCP 回归合理位置"而非"万物皆 MCP"。

**状态：规划中**

---

## 章节规划

### 1. MCP 基础

- MCP（Model Context Protocol）是什么
- 协议架构：Host / Client / Server
- 工作流：发现 → 选择 → 调用 → 返回
- 与 Function Calling 的关系

### 2. 实战配置

- 常见 MCP Server 推荐（GitHub、数据库、浏览器等）
- Claude Code 中配置 MCP
- 调试与排错

### 3. MCP vs Skill：90% 的误解

- MCP = 能力扩展（"双手"），Skill = 知识注入（"大脑"）
- 上下文成本真相：1 个 MCP Server = 8K-18K tokens
- 各自适用场景决策框架

### 4. MCP vs CLI/API

- 为什么"能用 CLI 就先用 CLI"
- 什么时候才真正需要 MCP
- 成本与复杂度对比

### 5. 趋势分析

- 从"万物皆 MCP"到"MCP 回归合理位置"
- AAIF（Agentic AI Foundation）与治理
- MCP 在企业级场景的价值
- Skills + CLI/API + MCP 组合使用的最佳实践

### 6. 快速决策树

- 从 Ch02 移入的完整决策流程图
- 扩展版：加入成本和维护考量

> 内容来源：`reference-mcp-and-skills.md` · `AI_Agent_技术深度解读.md` · `AI_Agent_Notes_Collection.md`

---

## 实战配置速查

> MCP 是专为 AI 设计的"通用 USB-C 接口"——让 Claude 直接连数据库、拉 GitHub PR、查 Notion/Slack。
>
> MCP 概念的深度解析（协议架构、与 Skill 的区别、决策框架等）请参阅：[`docs/ch02-concepts/reference-mcp-and-skills.md`](../../ch02-concepts/reference-mcp-and-skills.md)

### PostgreSQL 集成

**挂载命令：**

```bash
claude mcp add postgres npx -y @modelcontextprotocol/server-postgres postgresql://<用户名>:<密码>@localhost:5432/<数据库名>
```

**使用示例：**

- "帮我查一下 users 表的结构，然后看下最新注册的 5 个用户的 status 字段是什么。"
- "我在跑这段登录逻辑时报错了，请对比一下本地代码里的 SQL 查询和数据库当前的实际表结构。"

### GitHub 集成

**挂载命令：**

```bash
claude mcp add github npx -y @modelcontextprotocol/server-github --env GITHUB_PERSONAL_ACCESS_TOKEN=<你的专属Token>
```

**使用示例：**

- "请帮我 Review 一下 PR #123，指出潜在的内存泄漏风险。"
- "查看 Issue #45，然后基于它提到的报错日志，在当前项目里找到对应的代码文件并修复它。"

### 管理命令

```bash
claude mcp list              # 查看当前挂载的 MCP 服务器
claude mcp remove <name>     # 卸载指定 MCP 服务器
```

### 安全提示

数据通过本地 MCP Server 抓取后再喂给云端 LLM，建议数据库使用 Read-Only 账号，避免 Claude 意外执行写操作。MCP 本地中转的设计让你始终拥有数据阻断权。

---

上一章：[Chapter 7 · Skill 系统](../ch07-skills/part-7-skills.md)
下一章：[Chapter 9 · Claude Code 深度使用指南](../ch09-claude-code/part-9-claude-code.md)
