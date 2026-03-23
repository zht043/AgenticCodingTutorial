# 设计文档：Drafts 资料逐篇整合进教程正文

**日期**：2026-03-24
**状态**：已审批，待执行

---

## 目标

将 `drafts/` 目录下全部 37 个文件（含子目录）中有价值的知识点、细节、数据、案例，逐篇分析后整合到 `docs/` 下的教程正文对应位置，充实内容体系。

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

## 处理队列（共 37 个文件，按批次排序）

### 第一批：笔记与经验汇总
| # | 文件 | 预期目标 |
|---|------|---------|
| 1 | `agentic_coding_xhs_notes.md` | ch04/ch06/ch13 实战技巧 |
| 2 | `xhs_notes_merged.md` | 与上同，合并去重 |
| 3 | `xhs_notes_xiaoyu_king_raw.md` | 原始版，补充遗漏细节 |
| 4 | `AI_Agent_Notes_Collection.md` | ch02/ch05/ch11 概念与机制 |
| 5 | `AI_Agent_技术深度解读.md` | ch02/ch05 技术原理 |

### 第二批：工具/产品对比
| # | 文件 | 预期目标 |
|---|------|---------|
| 6 | `主流Coding Agent对比分析.md` | ch01 reference-agent-comparison |
| 7 | `Agent与Claw深度对比.md` | topics/topic-agent-vs-claw |
| 8 | `OpenClaw vs. Manus AI_ Key Differences.md` | ch01/topics 工具对比 |
| 9 | `AI Code Model Comparison_ Claude vs. GPT.md` | ch01 reference-model-comparison |
| 10 | `模型能力对比分析.md` | ch01 reference-model-comparison |

### 第三批：模型与评测
| # | 文件 | 预期目标 |
|---|------|---------|
| 11 | `2026年3月代码模型与智能体全球排名.md` | ch01 reference-benchmarks |
| 12 | `AI Model Benchmark: US vs. China.md` | ch01 reference-benchmarks |
| 13 | `model-comparison/2026-code-agent-handbook.md` | ch01 综合参考 |

### 第四批：技术机制
| # | 文件 | 预期目标 |
|---|------|---------|
| 14 | `LLM到OpenClaw演进阶段.md` | ch02/ch13 演进历史 |
| 15 | `LLM与Agent协作关系.md` | ch02/ch05 协作机制 |
| 16 | `Agent LLM Interaction Anatomy.md` | ch05 Agent 内部机制 |
| 17 | `visual-guide-to-llm-agents.md` | ch02/ch05 图解 |
| 18 | `AI代理设计优化原则.md` | ch11 设计模式 |
| 19 | `scaffold.md` | ch04/ch09 工程实践 |
| 20 | `MCP.md` | ch08 MCP 章节 |
| 21 | `switch model.md` | ch01/ch09 模型切换 |

### 第五批：研究报告
| # | 文件 | 预期目标 |
|---|------|---------|
| 22 | `deep-research-report.md` | 视内容分发 |
| 23 | `deep-research-report-3.md` | 视内容分发 |
| 24 | `deep-research-report-4.md` | 视内容分发 |
| 25 | `deep-research-report-5.md` | 视内容分发 |
| 26 | `2026 Coding Agent 深度研究报告.md` | ch13/ch14 演进与趋势 |
| 27 | `Coding Agent 在软件与AI工程细分任务中的实战效果评估报告.md` | ch04/ch06 任务适配 |
| 28 | `Agent 工程师任务调研与评估.md` | ch04 工程方法论 |
| 29 | `AgenticCodingTutorial 深度改进方案报告.md` | 结构改进参考 |
| 30 | `AgenticCodingTutorial 深度改进方案（新增5个互不冲突方案）.md` | 结构改进参考 |

### 第六批：kimi 报告系列
| # | 文件 | 预期目标 |
|---|------|---------|
| 31 | `kimi/coding_agent_comprehensive_report.md` | 综合补充各章 |
| 32 | `kimi/coding_agent_analysis_report.md` | ch04/ch06 分析 |
| 33 | `kimi/coding_agent_trend_analysis_report.md` | ch14 趋势演进 |
| 34 | `kimi/coding_agent_methodology_report.md` | ch04/ch07 方法论 |
| 35 | `kimi/coding_agent_paradigm_shift_report.md` | ch02/ch14 范式转变 |

### 第七批：规划文件（用于结构改进参考）
| # | 文件 | 预期目标 |
|---|------|---------|
| 36 | `plan/tutorial-restructuring-plan.md` | 结构改进参考 |
| 37 | `plan/comprehensive-restructuring-plan.md` | 结构改进参考 |

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

- 每个 draft 文件都被分析过，有明确处置结论（写入 / 跳过 + 理由）
- 教程正文内容更丰富、更具体、更有实战价值
- 不引入风格不统一、重复或矛盾的内容
- `drafts/` 原始文件保持不变
