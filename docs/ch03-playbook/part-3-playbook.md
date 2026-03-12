# Chapter 3 · Agent 实战技巧 Playbook

> 目标：把 Agent 变成你的「结对程序员」，而不是更聪明的搜索框。

这一章会更偏「菜谱」风格，直接给出可以抄用的工作流和提示模板。不同工具（Claude Code / Codex / Cursor / Copilot / Cline 等）会有各自的小节。

## 1. 通用实战技巧

适用于大多数 Agent 编码工具的基础套路，比如：

- 每天开始工作前，如何用 Agent 快速建立「今日任务上下文」
- 如何让 Agent 安全地批量重构，而不是一把梭
- 如何和 Agent 分工：由它写草稿，你做评审与定稿
- 如何在 Review / Debug / 性能排查中用好 Agent

本节会提供一组「通用提示词模板」，可以直接复制到你常用的工具里。

## 2. Claude Code 专用技巧

这一节会聚焦在 Claude Code 上：

- 适合它的项目结构调优方式
- 如何组织仓库内的说明文件，让 Claude Code 更好地理解项目
- MCP / Skills / 插件 与日常开发结合的典型用法

预计会拆成多个子文档，例如：

- `claude-code-basic.md`
- `claude-code-mcp-skills.md`
- `claude-code-workflows.md`

## 3. Codex / Cursor / 其他工具技巧

针对 Codex / Cursor / Copilot / Cline 等，分别整理：

- 工具特性与适用场景
- 与 Claude Code 的配合方式（比如「一个做全局规划，一个做局部落地」）
- 各自适合的提示风格和工作流设计

这些内容也会拆分到独立文件中，比如：

- `codex-playbook.md`
- `cursor-playbook.md`
- `copilot-playbook.md`

## 4. 典型场景工作流集合

最后会给出若干「可照搬的工作流」，覆盖：

- 搭新项目脚手架
- 在遗留项目里接手一个陌生模块
- 重构一块核心逻辑
- 写 / 补测试
- 跨语言重写、大规模迁移

每个工作流都会包含：

- 适用场景
- 步骤拆解（你做什么，Agent 做什么）
- 推荐使用的工具与提示词
- 常见翻车点

---

返回总览：[返回仓库 README](../../README.md)

