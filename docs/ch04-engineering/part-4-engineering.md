# Chapter 4 · Agent 驱动的软件工程工作流

> 目标：系统了解 Agent 在软件开发全生命周期中能介入哪些环节、擅长什么、不擅长什么。即使你没有编程经验，读完本章也能理解软件开发的基本流程和 Agent 的角色。

**状态：规划中**

---

## 章节规划

### 1. 软件开发全流程概览（面向零基础读者）

- 需求分析 → 设计 → 编码 → 测试 → 代码审查 → CI/CD → 部署 → 监控
- 每个环节干什么、谁来干、产出是什么
- 为什么要这么多步骤（质量保障的逻辑）

### 2. Agent 介入矩阵：逐维度分析

| 环节 | Agent 能力评级 | 说明 |
|------|---------------|------|
| Plan / 需求分析 | Good | 需求梳理、技术选型草案 |
| Design / 架构设计 | Limited-Good | API 设计、数据模型，但复杂架构需人工 |
| Code / 编码实现 | Excellent | 代码补全、功能实现、重构 |
| Test / 测试 | Excellent | 单元测试生成、E2E、测试数据 |
| Review / 代码审查 | Good | PR 描述、自动审查 |
| CI/CD | Poor | 复杂配置几乎 0% 成功率 |
| Git 冲突解决 | Limited | 约 21% 成功率 |
| 部署/监控 | Limited | 脚本生成可以，决策需人工 |

### 3. Spec-Driven Development（SDD）

- 以规格书驱动 Agent 而非随意聊天
- SDD 工作流：写 Spec → Agent 实现 → 验证 → 迭代
- Spec 模板和最佳实践

### 4. 任务分解方法论

- 如何把大任务拆成 Agent 友好的子任务
- 任务粒度的"黄金区间"
- 依赖关系标记

### 5. 三种协作模式

| 模式 | 适用场景 | 人工参与度 |
|------|---------|-----------|
| 建议模式（Suggestion） | 需求/架构/文档 | 高 |
| Patch-first | 代码变更 + 测试验证 | 中 |
| 受控自治（Approval） | 多步任务，分检查点 | 低 |

### Reference

- `reference-task-capability-matrix.md`：完整 45 任务评估表

> 内容来源：`Coding Agent 在软件与AI工程细分任务中的实战效果评估报告.md` · `deep-research-report-5.md` · Kimi `methodology_report`

---

上一章：[Chapter 3 · Agent 技术发展简史](../ch03-history/part-3-history.md)
下一章：[Chapter 5 · 人机协同方法论](../ch05-collaboration/part-5-collaboration.md)
