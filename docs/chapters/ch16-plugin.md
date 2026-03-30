# Chapter 16 · 🧰 Plugin

> 目标：把 Plugin 放回打包层理解。读完这一章，你应该知道 Plugin 的价值不在“更高级”，而在把方法、能力和配置装成可安装、可分发的一整套。

## 目录

- [1. Plugin 在解决什么问题](#1-plugin-在解决什么问题)
- [2. Plugin 通常包含什么](#2-plugin-通常包含什么)
- [3. 一个最小示例](#3-一个最小示例)
- [4. 安装前先看什么](#4-安装前先看什么)
- [5. Plugin 和 MCP / Skill / Hook / Command 的关系](#5-plugin-和-mcp--skill--hook--command-的关系)
- [6. Plugin 不是越多越好](#6-plugin-不是越多越好)

## 1. Plugin 在解决什么问题

Plugin 的关键价值是：

> 📦 **把一套零散能力打包成一个可安装的整体。**

## 2. Plugin 通常包含什么

一个 Plugin 往往会打包：

- Skill
- MCP 配置
- Hook
- Command
- 规则文件或默认设置

因此 Plugin 关注的是“可复用的交付形态”，而不是单一能力本身。

## 3. 一个最小示例

一个团队内部 Plugin 通常长这样：

```text
team-engineering-plugin/
├── review.skill
├── github.mcp.json
├── postcompact.hook
├── review.command.md
└── default-rules.md
```

安装后，新成员拿到的不是“一个神奇按钮”，而是一套已经拼好的默认工作系统：

- 审查时自动带上团队 review Skill
- 需要外部仓库能力时直接走 GitHub MCP
- 会话压缩后自动沉淀摘要
- 默认规则文件随插件一起下发

所以 Plugin 真正节省的，不是“推理成本”，而是：

- 新成员的装配成本
- 团队默认配置的复制成本
- 把多份零散说明重新拼装的沟通成本

## 4. 安装前先看什么

在安装任何 Plugin 前，至少先看清三件事：

- 它到底打包了哪些 Skill、Hook、MCP 配置和默认规则
- 它会不会引入你当前项目里不需要的隐式行为
- 它的来源、维护者和升级节奏是否可信

一个很实用的判断是：

> 🔍 **先把 Plugin 当成“会修改你工作系统的配置包”，而不是“装上就会更强”的魔法增强。**

## 5. Plugin 和 MCP / Skill / Hook / Command 的关系

最容易记的一种分工是：

- `Skill` 管“怎么做”
- `MCP` 管“能访问什么”
- `Hook` 管“在什么时候自动触发”
- `Command` 管“人怎样显式触发一段固定流程”
- `Plugin` 管“怎样把前面这些能力装成可安装的整体”

所以 Plugin 并不是“比 Skill / MCP 更高一层的智能”，而是更偏交付和分发层。

| 你想解决的问题 | 更适合什么 |
|---|---|
| 教 Agent 按某套方法做事 | `Skill` |
| 给 Agent 外部连接能力 | `MCP` |
| 在固定生命周期自动做动作 | `Hook` |
| 给人一个固定可复用的手动入口 | `Command` |
| 把前面这些组合成一键安装包 | `Plugin` |

## 6. Plugin 不是越多越好

Plugin 的问题不在“能不能装”，而在“装了之后你还看不看得清系统边界”。

常见风险包括：

- 来源不受控，带来供应链风险
- 把很多隐式规则、Hook、MCP 配置一起打包，结果边界不透明
- 为了图省事装很多插件，最后自己都不知道哪条行为是谁触发的

所以更稳的做法通常是：

- 只保留少量高频、可信、可审计的 Plugin
- 安装后先看它打包了什么，而不是直接盲信“装完就更强”
- 把团队真正长期依赖的能力，沉淀成清晰的 Skill / Hook / MCP 配置，而不是只靠黑盒插件

## 📌 本章总结

- Plugin 是打包与分发层，不是更高一层的“智能”。
- 它最适合沉淀团队默认能力组合，而不是代替你理解系统边界。
- 安装前先看内容、来源和副作用，比装完再猜强得多。
- 真正长期依赖的能力，最终还是要回到可读、可审计的 Skill / Hook / MCP 配置。

## 📚 继续阅读

- 想继续看“分发之前的原子能力”是什么：回到 [Ch13 · MCP](./ch13-mcp.md)、[Ch14 · Skill](./ch14-skill.md) 和 [Ch15 · Hook](./ch15-hook.md)
- 想看这些能力在真实工程流里怎么组合：继续看 [Ch18 · Agent 设计模式](./ch18-agent-patterns.md)

---

<div align="center">

[📚 返回目录](../../README.md#tutorial-contents) | [⬅️ 上一章：Ch15 Hook](./ch15-hook.md) | [➡️ 下一章：Ch17 Agent 错误用法](./ch17-agent-failure-modes.md)

</div>
