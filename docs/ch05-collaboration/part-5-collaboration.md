# Chapter 5 · 人机协同方法论 — 从"能用"到"10x"

> 目标：掌握与 Agent 高效协作的核心方法论和实操技巧——不是学更多功能，而是学会更好地"驾驭"Agent。

**状态：规划中**

---

## 章节规划

### 1. Harness 工程：真正的杠杆不在模型

- Agent = Model + Harness，80% 的价值在 Harness
- LangChain 案例：仅改 Harness，排名从 Top 30 → Top 5
- Agent 效果 = 模型能力 × Harness 质量

### 2. 上下文工程

- CLAUDE.md / AGENTS.md 编写最佳实践
- @references 和文件引用策略
- `/compact` 与会话管理
- 三层记忆架构（瞬时 / 短期 / 长期）

### 3. Prompt 策略

- 三句话法则（先分析 → 修改后验证 → 不确定就停）
- 渐进式任务构建
- 结构化指令模板
- 何时给自由度、何时给约束

### 4. 七种失败模式与恢复术

上下文污染、Memory 污染、长任务漂移、并行干扰、stdout 吞 token、环境假设错误、权限失控——每种的症状、成因和解法。

### 5. Token 经济学

- 省钱省时的实操技巧
- 模型分级使用策略（Haiku/Sonnet/Opus 各司其职）
- Prompt Cache 利用
- 控制命令输出

### 6. Agentic Coding vs Vibe Coding

- 核心区别：理解、验证、责任
- 何时 Vibe Coding 是合理的
- 何时必须 Agentic Coding

### 7. 大型项目策略

- 分阶段执行
- 会话管理（何时重开、如何带摘要）
- 文件边界划分

### 8. Agent 成熟度模型

从新手到 10x 的 5 个台阶：
1. 能跑通基本对话
2. 知道何时先出计划
3. 掌握上下文工程
4. 建立 Skill 和工作流体系
5. 多 Agent 协作 + 自动化管线

> 内容来源：原 Ch02 第 6 节 · `reference-human-agent-collaboration.md` · `AI_Agent_Notes_Collection.md` · `2026 Coding Agent 深度研究报告.md`

---

上一章：[Chapter 4 · Agent 驱动的软件工程工作流](../ch04-engineering/part-4-engineering.md)
下一章：[Chapter 6 · 基础实战案例](../ch06-basic-cases/part-6-basic-cases.md)
