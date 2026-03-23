# 设计文档：Drafts 资料逐篇整合进教程正文

**日期**：2026-03-24
**状态**：已审批，待执行

---

## 目标

将 `drafts/` 目录下全部 38 个文件（含子目录）中有价值的知识点、细节、数据、案例，逐篇分析后整合到 `docs/` 下的教程正文对应位置，充实内容体系。

---

## 约束条件

- **风格一致**：沿用已有教程的 emoji 标记风格、表格、简洁中文；不写成学术堆砌文
- **正文简洁**：体量大的内容放附录（reference-*.md）或专题（topics/topic-*.md），不撑大章节主文件
- **允许新建文件**：若某 draft 内容独立且完整，可在对应章节目录下新建 reference 或 topic 文件
- **不重复**：同一知识点出现在多个 draft 时只写入一次
- **不破坏现有结构**：`drafts/` 内容只读参考，不移动、不删除

---

## 执行方案

**方案 A：顺序单线程处理**

按以下顺序逐一处理，每个文件完成后再进行下一个：

```
读取 draft → 提取有价值内容 → 确定目标位置 → 写入/更新教程文件 → 下一个
```

---

## 处理队列（共 38 个文件，按批次排序）

### 第一批：笔记与经验汇总
| # | 文件 | 预期目标 |
|---|------|---------|
| 1 | `agentic_coding_xhs_notes.md` | `ch04-first-practice/index.md`、`ch06-basic-cases/part-6-basic-cases.md`、`ch13-advanced-cases/part-13-advanced-cases.md` 实战技巧 |
| 2 | `xhs_notes_merged.md` | 与 #1 同目标，合并去重后补充遗漏内容 |
| 3 | `xhs_notes_xiaoyu_king_raw.md` | 与 #1/#2 同目标，原始版补充细节 |
| 4 | `AI_Agent_Notes_Collection.md` | `ch02-concepts/index.md`、`ch05-agent-mechanics/index.md`、`ch11-design-patterns/index.md` |
| 5 | `AI_Agent_技术深度解读.md` | `ch02-concepts/index.md`、`ch05-agent-mechanics/index.md` 技术原理 |

### 第二批：工具/产品对比
| # | 文件 | 预期目标 |
|---|------|---------|
| 6 | `主流Coding Agent对比分析.md` | `ch01-quickstart/reference-agent-comparison.md` |
| 7 | `Agent与Claw深度对比.md` | `docs/topics/topic-agent-vs-claw.md`（主要）+ `docs/reference-agent-vs-claw.md`（检查重叠） |
| 8 | `OpenClaw vs. Manus AI_ Key Differences.md` | `ch01-quickstart/reference-agent-comparison.md`、`docs/topics/topic-agent-vs-claw.md` |
| 9 | `AI Code Model Comparison_ Claude vs. GPT.md` | `ch01-quickstart/reference-model-comparison.md` |
| 10 | `模型能力对比分析.md` | `ch01-quickstart/reference-model-comparison.md` |

### 第三批：模型与评测
| # | 文件 | 预期目标 |
|---|------|---------|
| 11 | `2026年3月代码模型与智能体全球排名.md` | `ch01-quickstart/reference-benchmarks.md` |
| 12 | `AI Model Benchmark: US vs. China.md` | `ch01-quickstart/reference-benchmarks.md` |
| 13 | `model-comparison/2026-code-agent-handbook.md` | `ch01-quickstart/reference-model-comparison.md`、`ch01-quickstart/reference-benchmarks.md` |

### 第四批：技术机制
| # | 文件 | 预期目标 |
|---|------|---------|
| 14 | `LLM到OpenClaw演进阶段.md` | `ch02-concepts/reference-agent-evolution.md`（或 `ch13-history/reference-agent-evolution.md`） |
| 15 | `LLM与Agent协作关系.md` | `ch02-concepts/reference-human-agent-collaboration.md`、`ch05-agent-mechanics/index.md` |
| 16 | `Agent LLM Interaction Anatomy.md` | `ch05-agent-mechanics/index.md` Agent 内部机制 |
| 17 | `visual-guide-to-llm-agents.md` | `ch02-concepts/index.md`、`ch05-agent-mechanics/index.md` 图解内容 |
| 18 | `AI代理设计优化原则.md` | `ch11-design-patterns/index.md` 设计模式 |
| 19 | `scaffold.md` | `ch04-engineering/part-4-engineering.md`、`ch09-engineering/index.md` 工程实践 |
| 20 | `MCP.md` | `ch08-mcp/part-8-mcp.md` MCP 章节 |
| 21 | `switch model.md` | `ch01-quickstart/reference-model-comparison.md`、`ch09-engineering/index.md` 模型切换 |

### 第五批：研究报告
> ⚠️ 注意：#29、#30 与第七批 #36、#37 均为教程结构改进类元文档，**四个文件需在第七批统一读完后再决策**，第五批处理 #29/#30 时仅读取，不立即写入。

| # | 文件 | 预期目标 |
|---|------|---------|
| 22 | `deep-research-report.md` | 安全分析报告 → `ch12-security/part-12-security.md`、`docs/topics/topic-security.md` |
| 23 | `deep-research-report-3.md` | Claude Opus vs GPT 对比 → `ch01-quickstart/reference-model-comparison.md` |
| 24 | `deep-research-report-4.md` | 细分任务 Agent 能力评估 → `ch04-engineering/reference-task-capability-matrix.md`、`docs/topics/topic-task-fit.md` |
| 25 | `deep-research-report-5.md` | 细分任务 Agent 能力评估 → `ch04-engineering/reference-task-capability-matrix.md`、`docs/topics/topic-task-fit.md` |
| 26 | `2026 Coding Agent 深度研究报告.md` | `ch13-history/index.md`、`ch14-evolution/part-14-evolution.md` 演进与趋势 |
| 27 | `Coding Agent 在软件与AI工程细分任务中的实战效果评估报告.md` | `ch04-engineering/part-4-engineering.md`、`ch06-basic-cases/part-6-basic-cases.md` 任务适配 |
| 28 | `Agent 工程师任务调研与评估.md` | `ch04-engineering/part-4-engineering.md` 工程方法论 |
| 29 | `AgenticCodingTutorial 深度改进方案报告.md` | 延迟至第七批与 #30/#36/#37 统一决策 |
| 30 | `AgenticCodingTutorial 深度改进方案（新增5个互不冲突方案）.md` | 延迟至第七批与 #29/#36/#37 统一决策 |

### 第六批：kimi 报告系列
| # | 文件 | 预期目标 |
|---|------|---------|
| 31 | `kimi/coding_agent_comprehensive_report.md` | 综合补充各章（读取后按内容分发） |
| 32 | `kimi/coding_agent_analysis_report.md` | `ch04-engineering/part-4-engineering.md`、`ch06-basic-cases/part-6-basic-cases.md` |
| 33 | `kimi/coding_agent_trend_analysis_report.md` | `ch14-evolution/part-14-evolution.md` 趋势演进 |
| 34 | `kimi/coding_agent_methodology_report.md` | `ch04-engineering/part-4-engineering.md`、`ch07-skills/part-7-skills.md` 方法论 |
| 35 | `kimi/coding_agent_paradigm_shift_report.md` | `ch02-concepts/index.md`、`ch14-evolution/part-14-evolution.md` 范式转变 |
| 36 | `kimi/coding_agent_summary.md` | 综合摘要，视内容分发（优先补充 ch02/ch04） |

### 第七批：规划/改进文件（四文件合并决策）
> 读完所有四个文件后再统一决策：哪些结构建议已在现有文档中体现（跳过），哪些有价值的具体改进点可以落实为章节内容补充。

| # | 文件 | 预期目标 |
|---|------|---------|
| 37 | `AgenticCodingTutorial 深度改进方案报告.md`（来自第五批 #29） | 与 #38/#39/#40 统一决策 |
| 38 | `AgenticCodingTutorial 深度改进方案（新增5个互不冲突方案）.md`（来自第五批 #30） | 与 #37/#39/#40 统一决策 |
| 39 | `plan/tutorial-restructuring-plan.md` | 与 #37/#38/#40 统一决策 |
| 40 | `plan/comprehensive-restructuring-plan.md` | 与 #37/#38/#39 统一决策 |

---

## 写入决策规则

| 情况 | 操作 |
|------|------|
| 内容可以精简后嵌入已有文件 | 直接 Edit 插入合适位置 |
| 内容体量大但主题已有 reference 文件 | 补充到对应 reference 文件 |
| 内容完整独立，当前无对应文件 | 新建 reference-*.md 或 topic-*.md |
| 内容形成完整新主题，可独立成章 | 新建章节文件（需明确标注） |
| 内容已在教程中覆盖，无新增价值 | 跳过，记录原因 |

---

## 成功标准

- 每个 draft 文件都被分析过，有明确处置结论（写入目标路径 / 跳过 + 理由）
- 教程正文内容更丰富、更具体、更有实战价值
- 不引入风格不统一、重复或矛盾的内容
- `drafts/` 原始文件保持不变
