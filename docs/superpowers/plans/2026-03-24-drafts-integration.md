# Drafts 资料整合进教程正文 — 执行计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `drafts/` 目录下全部 38 个文件逐一分析，把有价值的知识点、细节、案例整合到 `docs/` 教程正文的合适位置，充实并改善现有内容体系。

**Architecture:** 顺序单线程处理（方案 A）。每个 draft 文件走一遍「读取 → 提取 → 定位 → 写入 → 提交」五步流程。第七批的 4 个结构改进文件需读完全部后再统一决策。

**Tech Stack:** Markdown 文档编辑；工具：Read、Edit、Write、Glob、Grep、Bash(git commit)

---

## 通用操作模式（每个 Task 都遵循此模式）

```
步骤 1：用 Read 工具读取 draft 文件，识别有价值的知识点、数据、案例
步骤 2：用 Read/Grep 检查目标文件，确认该内容尚未存在（dedup）
步骤 3：用 Edit/Write 将内容写入目标文件合适位置（保持教程风格）
步骤 4：快速通读插入段落，确认格式与上下文衔接正确
步骤 5：git commit（每处理 3-5 个 draft 提交一次）
```

**写入风格要求：**
- 沿用 emoji 标记（📌 💡 ⚠️ 🎯 等）
- 使用表格、mermaid 图、代码块增强可读性
- 优先精简实用：决策 > 原理 > 背景
- 体量大时放 reference 文件，主文件保持简洁

**跳过条件：** 若 draft 内容已被教程完整覆盖，或为纯元数据/版本信息（无教学价值），则跳过并在 commit message 中记录原因。

---

## 文件结构（目标文件清单）

**主要写入目标（已存在）：**
- `docs/ch01-quickstart/reference-agent-comparison.md` — Agent 工具对比
- `docs/ch01-quickstart/reference-model-comparison.md` — 模型对比
- `docs/ch01-quickstart/reference-benchmarks.md` — 评测体系
- `docs/ch02-concepts/index.md` — Agent 核心原理
- `docs/ch02-concepts/reference-agent-evolution.md` — Agent 演进历史
- `docs/ch02-concepts/reference-human-agent-collaboration.md` — 人机协作
- `docs/ch04-first-practice/index.md` — 第一批实战
- `docs/ch04-engineering/part-4-engineering.md` — 工程方法论
- `docs/ch04-engineering/reference-task-capability-matrix.md` — 任务能力矩阵
- `docs/ch05-agent-mechanics/index.md` — Agent 内部机制
- `docs/ch06-basic-cases/part-6-basic-cases.md` — 基础案例
- `docs/ch07-skills/part-7-skills.md` — Skills 系统
- `docs/ch08-mcp/part-8-mcp.md` — MCP
- `docs/ch09-engineering/index.md` — 工程实践深度
- `docs/ch11-design-patterns/index.md` — 设计模式
- `docs/ch12-security/part-12-security.md` — 安全
- `docs/ch13-advanced-cases/part-13-advanced-cases.md` — 进阶案例
- `docs/ch13-history/reference-agent-evolution.md` — 演进时间线
- `docs/ch14-evolution/part-14-evolution.md` — 未来演进
- `docs/topics/topic-agent-vs-claw.md` — Agent vs Claw 专题
- `docs/topics/topic-security.md` — 安全专题
- `docs/topics/topic-task-fit.md` — 任务适配专题
- `docs/reference-agent-vs-claw.md` — 根目录 Agent vs Claw 参考

**可能新建（如内容量足够且无对应文件）：**
- 任何 `docs/ch*/reference-新主题.md`
- 任何 `docs/topics/topic-新主题.md`

---

## 第一批：笔记与经验汇总（#1–5）

> 这批是实战经验密集型资料，优先补充到「实战」类章节。

### Task 1：处理 `agentic_coding_xhs_notes.md`

**Files:**
- Read: `drafts/agentic_coding_xhs_notes.md`
- Modify (可能): `docs/ch04-first-practice/index.md`
- Modify (可能): `docs/ch06-basic-cases/part-6-basic-cases.md`
- Modify (可能): `docs/ch13-advanced-cases/part-13-advanced-cases.md`

- [ ] **Step 1: 读取 draft，提取关键内容**

  读取 `drafts/agentic_coding_xhs_notes.md`，记录：
  - 哪些实战技巧/经验是教程当前没有的
  - 哪些避坑点值得独立列出
  - 有无数据/具体案例

- [ ] **Step 2: 对比目标文件，确认新增项**

  读取上述三个目标文件，比对已有内容，标记真正的增量。

- [ ] **Step 3: 写入目标文件**

  将新内容 Edit 插入合适位置（实战技巧 → ch04/ch06，复杂案例 → ch13）。

- [ ] **Step 4: 检查写入结果**

  快速通读插入段落，确认格式正确、不重复、衔接自然。

---

### Task 2：处理 `xhs_notes_merged.md`

**Files:**
- Read: `drafts/xhs_notes_merged.md`
- Modify (可能): 同 Task 1 的三个目标文件

- [ ] **Step 1: 读取 draft，与 Task 1 去重**

  读取 `drafts/xhs_notes_merged.md`，仅保留 Task 1 中未覆盖的新内容。

- [ ] **Step 2: 检查目标文件现状（已含 Task 1 的写入）**

- [ ] **Step 3: 写入增量内容**

- [ ] **Step 4: 检查写入结果**

---

### Task 3：处理 `xhs_notes_xiaoyu_king_raw.md`

**Files:**
- Read: `drafts/xhs_notes_xiaoyu_king_raw.md`
- Modify (可能): 同 Task 1 的三个目标文件

- [ ] **Step 1: 读取 draft，提取 Task 1/2 尚未覆盖的细节**
- [ ] **Step 2: 比对当前目标文件状态**
- [ ] **Step 3: 写入剩余增量**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第一批 #1–3）**

  ```bash
  git add docs/
  git commit -m "content: integrate xhs notes (batch 1 #1-3) into ch04/ch06/ch13"
  ```

---

### Task 4：处理 `AI_Agent_Notes_Collection.md`

**Files:**
- Read: `drafts/AI_Agent_Notes_Collection.md`
- Modify (可能): `docs/ch02-concepts/index.md`
- Modify (可能): `docs/ch05-agent-mechanics/index.md`
- Modify (可能): `docs/ch11-design-patterns/index.md`

- [ ] **Step 1: 读取 draft，提取概念与机制类内容**
- [ ] **Step 2: 比对三个目标文件**
- [ ] **Step 3: 写入增量（概念 → ch02，机制 → ch05，设计模式 → ch11）**
- [ ] **Step 4: 检查**

---

### Task 5：处理 `AI_Agent_技术深度解读.md`

**Files:**
- Read: `drafts/AI_Agent_技术深度解读.md`
- Modify (可能): `docs/ch02-concepts/index.md`
- Modify (可能): `docs/ch05-agent-mechanics/index.md`

- [ ] **Step 1: 读取 draft，关注技术原理层内容**
- [ ] **Step 2: 比对目标文件（含 Task 4 的写入）**
- [ ] **Step 3: 写入技术原理增量**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（#4–5）**

  ```bash
  git add docs/
  git commit -m "content: integrate agent notes & tech deep-dive (batch 1 #4-5) into ch02/ch05/ch11"
  ```

---

## 第二批：工具/产品对比（#6–10）

### Task 6：处理 `主流Coding Agent对比分析.md`

**Files:**
- Read: `drafts/主流Coding Agent对比分析.md`
- Modify: `docs/ch01-quickstart/reference-agent-comparison.md`

- [ ] **Step 1: 读取 draft，提取工具对比数据/分析**
- [ ] **Step 2: 读取目标文件，识别缺口**
- [ ] **Step 3: 补充对比内容（新增行/列，或补充工具介绍段落）**
- [ ] **Step 4: 检查**

---

### Task 7：处理 `Agent与Claw深度对比.md`

**Files:**
- Read: `drafts/Agent与Claw深度对比.md`
- Modify: `docs/topics/topic-agent-vs-claw.md`（主）
- Check: `docs/reference-agent-vs-claw.md`（检查重叠，避免重复写入）

- [ ] **Step 1: 读取 draft**
- [ ] **Step 2: 读取两个目标文件，判断重叠程度**
- [ ] **Step 3: 将新增内容写入 topic-agent-vs-claw.md；若有内容更适合根目录 reference，写入该文件**
- [ ] **Step 4: 检查两个文件不互相矛盾**

---

### Task 8：处理 `OpenClaw vs. Manus AI_ Key Differences.md`

**Files:**
- Read: `drafts/OpenClaw vs. Manus AI_ Key Differences.md`
- Modify (可能): `docs/ch01-quickstart/reference-agent-comparison.md`
- Modify (可能): `docs/topics/topic-agent-vs-claw.md`

- [ ] **Step 1: 读取 draft，重点提取 OpenClaw/Manus 差异化分析**
- [ ] **Step 2: 比对目标文件（含 Task 6/7 的写入）**
- [ ] **Step 3: 写入新增内容**
- [ ] **Step 4: 检查**

---

### Task 9：处理 `AI Code Model Comparison_ Claude vs. GPT.md`

**Files:**
- Read: `drafts/AI Code Model Comparison_ Claude vs. GPT.md`
- Modify: `docs/ch01-quickstart/reference-model-comparison.md`

- [ ] **Step 1: 读取 draft，提取模型能力对比数据**
- [ ] **Step 2: 读取目标文件**
- [ ] **Step 3: 补充模型对比（表格、场景分析、结论）**
- [ ] **Step 4: 检查**

---

### Task 10：处理 `模型能力对比分析.md`

**Files:**
- Read: `drafts/模型能力对比分析.md`
- Modify: `docs/ch01-quickstart/reference-model-comparison.md`

- [ ] **Step 1: 读取 draft，与 Task 9 去重**
- [ ] **Step 2: 比对目标文件（含 Task 9 写入）**
- [ ] **Step 3: 写入增量**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第二批 #6–10）**

  ```bash
  git add docs/
  git commit -m "content: integrate tool/model comparison drafts (batch 2 #6-10)"
  ```

---

## 第三批：模型与评测（#11–13）

### Task 11：处理 `2026年3月代码模型与智能体全球排名.md`

**Files:**
- Read: `drafts/2026年3月代码模型与智能体全球排名.md`
- Modify: `docs/ch01-quickstart/reference-benchmarks.md`

- [ ] **Step 1: 读取 draft，提取排名数据、评测维度**
- [ ] **Step 2: 读取目标文件**
- [ ] **Step 3: 更新或补充排名表格、评测说明**
- [ ] **Step 4: 检查**

---

### Task 12：处理 `AI Model Benchmark: US vs. China.md`

**Files:**
- Read: `drafts/AI Model Benchmark: US vs. China.md`
- Modify: `docs/ch01-quickstart/reference-benchmarks.md`

- [ ] **Step 1: 读取 draft，提取中美模型对比的评测角度**
- [ ] **Step 2: 比对目标文件（含 Task 11 写入）**
- [ ] **Step 3: 补充中美对比视角**
- [ ] **Step 4: 检查**

---

### Task 13：处理 `model-comparison/2026-code-agent-handbook.md`

**Files:**
- Read: `drafts/model-comparison/2026-code-agent-handbook.md`
- Modify (可能): `docs/ch01-quickstart/reference-model-comparison.md`
- Modify (可能): `docs/ch01-quickstart/reference-benchmarks.md`

- [ ] **Step 1: 读取 draft，判断内容主要属于模型对比还是评测体系**
- [ ] **Step 2: 按内容性质分配到对应目标文件**
- [ ] **Step 3: 写入**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第三批 #11–13）**

  ```bash
  git add docs/
  git commit -m "content: update benchmarks and model comparison (batch 3 #11-13)"
  ```

---

## 第四批：技术机制（#14–21）

### Task 14：处理 `LLM到OpenClaw演进阶段.md`

**Files:**
- Read: `drafts/LLM到OpenClaw演进阶段.md`
- Read both: `docs/ch02-concepts/reference-agent-evolution.md`、`docs/ch13-history/reference-agent-evolution.md`
- Modify: 按内容类型分配：概念/原理层 → `docs/ch02-concepts/reference-agent-evolution.md`；时间线/历史事件 → `docs/ch13-history/reference-agent-evolution.md`

- [ ] **Step 1: 读取 draft，梳理 LLM → Agent → OpenClaw 演进脉络**
- [ ] **Step 2: 读取两个 reference-agent-evolution 文件**
- [ ] **Step 3: 将演进阶段内容按类型写入对应文件（原理 → ch02，时间线 → ch13）**
- [ ] **Step 4: 检查**

---

### Task 15：处理 `LLM与Agent协作关系.md`

**Files:**
- Read: `drafts/LLM与Agent协作关系.md`
- Modify (可能): `docs/ch02-concepts/reference-human-agent-collaboration.md`
- Modify (可能): `docs/ch05-agent-mechanics/index.md`

- [ ] **Step 1: 读取 draft，提取 LLM-Agent 协作模式与关系说明**
- [ ] **Step 2: 读取两个目标文件**
- [ ] **Step 3: 协作关系理论 → ch02 reference；机制实现细节 → ch05**
- [ ] **Step 4: 检查**

---

### Task 16：处理 `Agent LLM Interaction Anatomy.md`

**Files:**
- Read: `drafts/Agent LLM Interaction Anatomy.md`
- Modify: `docs/ch05-agent-mechanics/index.md`

- [ ] **Step 1: 读取 draft（英文），提取 Agent-LLM 交互解剖图/流程**
- [ ] **Step 2: 读取目标文件**
- [ ] **Step 3: 将交互解剖内容写入 ch05**

  若 draft 为英文，提取核心要点并以中文重述（而非逐字翻译），保持教程简洁实用的风格。
- [ ] **Step 4: 检查**

---

### Task 17：处理 `visual-guide-to-llm-agents.md`

**Files:**
- Read: `drafts/visual-guide-to-llm-agents.md`
- Modify (可能): `docs/ch02-concepts/index.md`
- Modify (可能): `docs/ch05-agent-mechanics/index.md`

- [ ] **Step 1: 读取 draft，提取可视化图解内容（mermaid/表格/架构图）**
- [ ] **Step 2: 比对目标文件，找到可强化图解说明的位置**
- [ ] **Step 3: 将图解内容/描述写入**
- [ ] **Step 4: 检查**

---

### Task 18：处理 `AI代理设计优化原则.md`

**Files:**
- Read: `drafts/AI代理设计优化原则.md`
- Modify: `docs/ch11-design-patterns/index.md`

- [ ] **Step 1: 读取 draft，提取设计原则（可操作的 best practices）**
- [ ] **Step 2: 读取 ch11 目标文件**
- [ ] **Step 3: 将设计原则补充到 ch11**
- [ ] **Step 4: 检查**

---

### Task 19：处理 `scaffold.md`

**Files:**
- Read: `drafts/scaffold.md`
- Modify (可能): `docs/ch04-engineering/part-4-engineering.md`
- Modify (可能): `docs/ch09-engineering/index.md`

- [ ] **Step 1: 读取 draft，判断 scaffold 内容属于初级工程实践还是高级工程话题**
- [ ] **Step 2: 读取两个目标文件**
- [ ] **Step 3: 按内容深度分配写入（基础实践 → ch04，进阶工程 → ch09）**
- [ ] **Step 4: 检查**

---

### Task 20：处理 `MCP.md`

**Files:**
- Read: `drafts/MCP.md`
- Modify: `docs/ch08-mcp/part-8-mcp.md`

- [ ] **Step 1: 读取 draft，提取 MCP 协议细节、使用场景、配置方法**
- [ ] **Step 2: 读取 ch08 目标文件**
- [ ] **Step 3: 补充 MCP 内容（协议说明、实战示例、注意事项）**
- [ ] **Step 4: 检查**

---

### Task 21：处理 `switch model.md`

**Files:**
- Read: `drafts/switch model.md`
- Modify (可能): `docs/ch01-quickstart/reference-model-comparison.md`
- Modify (可能): `docs/ch09-engineering/index.md`

- [ ] **Step 1: 读取 draft，提取模型切换的场景、方法、注意事项**
- [ ] **Step 2: 读取两个目标文件**
- [ ] **Step 3: 切换建议 → ch01 reference；工程化切换方案 → ch09**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第四批 #14–21）**

  ```bash
  git add docs/
  git commit -m "content: integrate technical mechanism drafts (batch 4 #14-21)"
  ```

---

## 第五批：研究报告（#22–28，跳过 #29–30 延至第七批）

> **编号对齐说明**：本计划 Task 29–34 对应第六批 kimi 报告；设计文档（spec）中延迟处理的 #29/#30（「深度改进方案」两文件）在本计划中对应第七批 Task 35，请勿混淆。

### Task 22：处理 `deep-research-report.md`

**Files:**
- Read: `drafts/deep-research-report.md`
- Modify: `docs/ch12-security/part-12-security.md`
- Modify (可能): `docs/topics/topic-security.md`

- [ ] **Step 1: 读取 draft（权限管理、绕过风险、Workspace 边界安全分析）**
- [ ] **Step 2: 读取安全相关目标文件**
- [ ] **Step 3: 补充安全分析内容（权限模型、风险说明、防御建议）**
- [ ] **Step 4: 检查**

---

### Task 23：处理 `deep-research-report-3.md`

**Files:**
- Read: `drafts/deep-research-report-3.md`
- Modify: `docs/ch01-quickstart/reference-model-comparison.md`

- [ ] **Step 1: 读取 draft（Claude Opus vs GPT-5.3-Codex 用户感受对比）**
- [ ] **Step 2: 比对目标文件**
- [ ] **Step 3: 补充用户感受角度的模型对比**
- [ ] **Step 4: 检查**

---

### Task 24：处理 `deep-research-report-4.md`

**Files:**
- Read: `drafts/deep-research-report-4.md`
- Modify: `docs/ch04-engineering/reference-task-capability-matrix.md`
- Modify (可能): `docs/topics/topic-task-fit.md`

- [ ] **Step 1: 读取 draft（细分任务 Agent 能力评估）**
- [ ] **Step 2: 读取任务能力矩阵和任务适配专题文件**
- [ ] **Step 3: 补充细分任务评估数据**
- [ ] **Step 4: 检查**

---

### Task 25：处理 `deep-research-report-5.md`

**Files:**
- Read: `drafts/deep-research-report-5.md`
- Modify: `docs/ch04-engineering/reference-task-capability-matrix.md`
- Modify (可能): `docs/topics/topic-task-fit.md`

> ⚠️ 注意：与 Task 24 内容同名，仔细 dedup，避免重复写入。

- [ ] **Step 1: 读取 draft，仅提取 Task 24 未覆盖的内容**
- [ ] **Step 2: 比对（含 Task 24 写入）**
- [ ] **Step 3: 写入增量**
- [ ] **Step 4: 检查**

---

### Task 26：处理 `2026 Coding Agent 深度研究报告.md`

**Files:**
- Read: `drafts/2026 Coding Agent 深度研究报告.md`
- Modify: `docs/ch13-history/index.md`
- Modify: `docs/ch13-history/reference-agent-evolution.md`（时间线补充）
- Modify: `docs/ch14-evolution/part-14-evolution.md`

- [ ] **Step 1: 读取 draft，提取演进历史和趋势预测内容**
- [ ] **Step 2: 读取 ch13/ch14 目标文件**
- [ ] **Step 3: 历史内容 → ch13；趋势内容 → ch14**
- [ ] **Step 4: 检查**

---

### Task 27：处理 `Coding Agent 在软件与AI工程细分任务中的实战效果评估报告.md`

**Files:**
- Read: `drafts/Coding Agent 在软件与AI工程细分任务中的实战效果评估报告.md`
- Modify: `docs/ch04-engineering/part-4-engineering.md`
- Modify (可能): `docs/ch06-basic-cases/part-6-basic-cases.md`

- [ ] **Step 1: 读取 draft，提取各类任务的实战效果评估**
- [ ] **Step 2: 读取目标文件**
- [ ] **Step 3: 工程方法论 → ch04；具体案例 → ch06**
- [ ] **Step 4: 检查**

---

### Task 28：处理 `Agent 工程师任务调研与评估.md`

**Files:**
- Read: `drafts/Agent 工程师任务调研与评估.md`
- Modify: `docs/ch04-engineering/part-4-engineering.md`

- [ ] **Step 1: 读取 draft，提取工程师任务调研结论**
- [ ] **Step 2: 比对 ch04（含 Task 27 写入）**
- [ ] **Step 3: 补充任务调研与评估视角**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第五批 #22–28）**

  ```bash
  git add docs/
  git commit -m "content: integrate research reports (batch 5 #22-28) into security/model/task/history/engineering"
  ```

---

## 第六批：kimi 报告系列（#31–36）

### Task 29：处理 `kimi/coding_agent_comprehensive_report.md`

**Files:**
- Read: `drafts/kimi/coding_agent_comprehensive_report.md`
- Modify (可能): `docs/ch02-concepts/index.md`
- Modify (可能): `docs/ch04-engineering/part-4-engineering.md`
- Modify (可能): `docs/ch06-basic-cases/part-6-basic-cases.md`
- Modify (可能): `docs/ch14-evolution/part-14-evolution.md`
- Modify (可能): 其他章节（读取后按内容性质追加）

- [ ] **Step 1: 读取全文，建立内容索引（每节对应哪个教程章节）**
- [ ] **Step 2: 按章节逐一比对目标文件，提取增量**
- [ ] **Step 3: 分批写入各目标文件**
- [ ] **Step 4: 检查所有写入**

---

### Task 30：处理 `kimi/coding_agent_analysis_report.md`

**Files:**
- Read: `drafts/kimi/coding_agent_analysis_report.md`
- Modify: `docs/ch04-engineering/part-4-engineering.md`
- Modify (可能): `docs/ch06-basic-cases/part-6-basic-cases.md`

- [ ] **Step 1: 读取 draft**
- [ ] **Step 2: 比对目标文件（含之前所有写入）**
- [ ] **Step 3: 写入增量**
- [ ] **Step 4: 检查**

---

### Task 31：处理 `kimi/coding_agent_trend_analysis_report.md`

**Files:**
- Read: `drafts/kimi/coding_agent_trend_analysis_report.md`
- Modify: `docs/ch14-evolution/part-14-evolution.md`

- [ ] **Step 1: 读取 draft，提取趋势分析**
- [ ] **Step 2: 比对 ch14（含 Task 26 写入）**
- [ ] **Step 3: 写入新趋势内容**
- [ ] **Step 4: 检查**

---

### Task 32：处理 `kimi/coding_agent_methodology_report.md`

**Files:**
- Read: `drafts/kimi/coding_agent_methodology_report.md`
- Modify: `docs/ch04-engineering/part-4-engineering.md`
- Modify (可能): `docs/ch07-skills/part-7-skills.md`

- [ ] **Step 1: 读取 draft，提取方法论内容**
- [ ] **Step 2: 工程方法论 → ch04；Skills 相关 → ch07**
- [ ] **Step 3: 写入**
- [ ] **Step 4: 检查**

---

### Task 33：处理 `kimi/coding_agent_paradigm_shift_report.md`

**Files:**
- Read: `drafts/kimi/coding_agent_paradigm_shift_report.md`
- Modify: `docs/ch02-concepts/index.md`
- Modify: `docs/ch14-evolution/part-14-evolution.md`

- [ ] **Step 1: 读取 draft，提取编程范式转变的核心论点**
- [ ] **Step 2: 概念层面 → ch02；演进展望 → ch14**
- [ ] **Step 3: 写入**
- [ ] **Step 4: 检查**

---

### Task 34：处理 `kimi/coding_agent_summary.md`

**Files:**
- Read: `drafts/kimi/coding_agent_summary.md`
- Modify (可能): `docs/ch02-concepts/index.md`（优先）
- Modify (可能): `docs/ch04-engineering/part-4-engineering.md`

- [ ] **Step 1: 读取 draft（综合摘要），提取精华结论**
- [ ] **Step 2: 比对目标文件（含之前所有写入），仅保留真正的增量**
- [ ] **Step 3: 写入**
- [ ] **Step 4: 检查**
- [ ] **Step 5: Commit（第六批 #31–36）**

  ```bash
  git add docs/
  git commit -m "content: integrate kimi report series (tasks 29-34, spec #31-36)"
  ```

---

## 第七批：结构改进类元文档（四文件合并决策）

> **⚠️ 规则**：先逐一读完全部 4 个文件，建立完整的改进建议清单，再统一判断哪些可以落地为具体内容补充，哪些已被现有文档覆盖（跳过）。禁止边读边改，避免出现互相矛盾的结构建议被分别执行。

### Task 35：读取四个改进文件，建立决策清单

**Files:**
- Read: `drafts/AgenticCodingTutorial 深度改进方案报告.md`
- Read: `drafts/AgenticCodingTutorial 深度改进方案（新增5个互不冲突方案）.md`
- Read: `drafts/plan/tutorial-restructuring-plan.md`
- Read: `drafts/plan/comprehensive-restructuring-plan.md`

- [ ] **Step 1: 依次读取全部四个文件**

- [ ] **Step 2: 整理改进建议清单**

  列出所有提案，格式：
  ```
  建议 N：[具体内容]
  状态：已覆盖 / 可落地（目标：具体文件）/ 跳过（理由）
  ```

- [ ] **Step 3: 执行「可落地」的改进**

  对每个可落地建议逐一执行：
  - 找到目标文件
  - 确认该改进未重复执行
  - 用 Edit/Write 实施
  - 逐一检查

  > ⚠️ 若可落地项超过 5 处，每完成 3–5 处写入后执行一次中间提交，避免过大单次提交：
  > ```bash
  > git add docs/ && git commit -m "content: apply partial improvements from meta docs (batch 7, interim)"
  > ```

- [ ] **Step 4: Commit（第七批）**

  ```bash
  git add docs/
  git commit -m "content: apply actionable improvements from meta-planning docs (batch 7)"
  ```

---

## 最终收尾

### Task 36：最终验证与总结提交

- [ ] **Step 1: 统计处理结果**

  检查 38 个 draft 文件的处置状态（写入 / 跳过 + 理由），确保无遗漏。

- [ ] **Step 2: 验证新增内容的一致性**

  用 Grep 检查是否存在明显重复段落（同一 H2/H3 标题出现两次），并抽查修改量最大的 3–5 个文件：
  ```bash
  # 检查各文件中重复的二级标题
  grep -n "^## " docs/ch04-engineering/part-4-engineering.md | sort | uniq -d
  grep -n "^## " docs/ch02-concepts/index.md | sort | uniq -d
  # 对其他高频修改文件同样检查
  ```

- [ ] **Step 3: 最终提交**

  ```bash
  git add docs/
  git commit -m "content: complete drafts integration — all 38 files processed

  Summary:
  - Batch 1 (xhs notes + agent notes): enriched ch04/ch06/ch13/ch02/ch05/ch11
  - Batch 2 (tool/model comparison): updated ch01 reference files + topics
  - Batch 3 (benchmarks): updated reference-benchmarks + reference-model-comparison
  - Batch 4 (technical mechanisms): enriched ch02/ch05/ch08/ch09/ch11
  - Batch 5 (research reports): enriched ch04/ch06/ch12/ch13/ch14 + topics
  - Batch 6 (kimi reports): enriched ch02/ch04/ch07/ch14
  - Batch 7 (meta docs): applied actionable structural improvements"
  ```
