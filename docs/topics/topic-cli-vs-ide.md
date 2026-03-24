---
> 📚 **Part IV · 进阶专题** | [← 返回专题目录](../../README.md#part-iv-topics)
---

# 附录：CLI、VS Code 插件、桌面应用——什么关系？

> 本文是 [Chapter 1 · 快速上手部署 Agent](../ch01-quickstart/part-1-quickstart.md) 的扩展附录，帮你理解 Agent 工具的不同形态和它们之间的关系。

---

## 🔗 各工具形态对照表

| 工具 | CLI | VS Code 插件 | 桌面 App | Web 端 |
|------|-----|-------------|---------|--------|
| Claude Code | ✅ 本体 | ✅ 插件 | ✅ | ✅ |
| Codex CLI | ✅ 本体 | ✅ 插件 | ✅ Codex App | ✅ |
| Gemini CLI | ✅ 本体 | ✅ Code Assist | ❌ | ✅（可在 Cloud Shell 等云终端运行） |
| Cursor | ✅ CLI（beta） | — | ✅ 自身即 IDE | ❌ |
| Antigravity | ❌ | — | ✅ 自身即 IDE | ❌ |
| OpenCode | ✅ 本体 | ✅ IDE extension | ✅ | ❌ |

---

## 🧠 理解"CLI 是本体"

> **对于 Claude Code、Codex、Gemini CLI：CLI 是本体，VS Code 插件和桌面应用只是它的延伸界面。Cursor 以 IDE 为主，于 2025 年 8 月另行发布了 CLI（beta），支持在终端和 headless 环境中使用 Agent。**

这意味着：

1. **🔄 配置共享**：CLI 中配好的 API Key，在插件和 App 中同样生效
2. **🎯 核心能力一致**：CLI 能做的事，插件和 App 也能做
3. **⚡ CLI 更灵活**：自动化脚本、CI/CD、headless 环境
4. **👁️ 插件/App 更直观**：可视化 diff、文件树、交互审批

以 Claude Code 为例，当前官方文档重点介绍的配置层级是：

```
~/.claude/settings.json          # 用户级全局设置
<repo>/.claude/settings.json     # 项目共享设置
<repo>/.claude/settings.local.json  # 本地私有设置（通常不提交）
```

---

> 📖 返回正文：[Chapter 1 · 快速上手部署 Agent](../ch01-quickstart/part-1-quickstart.md)
