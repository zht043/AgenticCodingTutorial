# Chapter 11 · 多 Agent 协作

> 目标：理解多 Agent 协作的架构模式、适用场景和实践经验——什么时候该用、怎么用、以及为什么不是越多越好。

**状态：规划中**

---

## 章节规划

### 1. 多 Agent 架构模式

- Planner-Worker：强模型规划 + 快速模型执行
- Writer-Reviewer：互审纠错
- Fan-out 并行：同一任务多 Agent 独立执行，取最优
- Orchestrator 编排：中央调度 + 角色分工

### 2. 产品实践

- Claude Code Agent Teams
- Codex 并行模式
- Cursor background agents

### 3. 3-4 Agent 黄金点

- 为什么不是越多越好
- 工具密度 vs 协调开销的权衡
- 上下文隔离策略

### 4. 实战场景与决策框架

| 场景 | 推荐方案 |
|------|---------|
| 单个 bug | 单 Agent |
| 中等功能 | 单 Agent + 分阶段 |
| 大型重构 | 多 Agent 并行 |
| 高风险 | 多 Agent 互审 + 人工 |

### 5. 多 Agent 的坑

- 合并冲突（21% 成功率数据）
- 上下文泄漏
- 成本失控
- 调试困难

> 内容来源：原 Ch02 第 5 节移出内容 · `AI_Agent_Notes_Collection.md` · `AI_Agent_技术深度解读.md`

---

上一章：[Chapter 10 · Codex CLI 深度使用指南](../ch10-codex/part-10-codex.md)
下一章：[Chapter 12 · 信任边界 — Agent 安全、权限与合规](../ch12-security/part-12-security.md)
