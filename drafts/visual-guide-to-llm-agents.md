# A Visual Guide to LLM Agents — 辅助材料

> 原文：[A Visual Guide to LLM Agents](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-llm-agents)
> 作者：Maarten Grootendorst · 2025-03-17
> 本文为阅读辅助材料，以 Mermaid 图表还原原文核心架构图

---

## 1. 什么是 LLM Agent？

传统 LLM 只做 next-token prediction，缺乏记忆、工具调用和实时信息获取能力。
**Agent = LLM + 记忆 + 工具 + 规划**

### 1.1 经典 Agent 框架（Russell & Norvig）

```mermaid
flowchart LR
    E[Environment\n环境] -->|感知| S[Sensors\n传感器]
    S --> A[Agent\n智能体]
    A -->|决策| EF[Effectors\n效应器]
    EF --> AC[Actuators\n执行器]
    AC -->|行动| E
```

### 1.2 增强型 LLM Agent

```mermaid
flowchart TB
    TI[Textual Input\n文本输入 — 传感器] --> LLM[LLM\n大语言模型]
    LLM --> T[Tools\n工具 — 执行器]
    LLM --> R[Reasoning & Planning\n推理与规划 — 效应器]
    T -->|结果| LLM
    R -->|计划| LLM
```

### 1.3 自主性光谱

```mermaid
flowchart LR
    A[完全引导\nPredefined Steps] ---|→| B[半自主\nHuman-in-the-Loop] ---|→| C[完全自主\nFully Autonomous]
    style A fill:#e8f5e9
    style C fill:#ffebee
```

---

## 2. 记忆（Memory）

### 2.1 短期记忆 — 上下文窗口

```mermaid
flowchart LR
    U1[User: 你好] --> CW[Context Window\n上下文窗口]
    A1[Assistant: 你好！] --> CW
    U2[User: 后续问题] --> CW
    CW --> LLM[LLM 推理]
    LLM --> A2[Assistant: 回答]
```

### 2.2 短期记忆 — 对话摘要

```mermaid
flowchart LR
    H[完整对话历史] --> SUM[Summarization LLM\n摘要模型]
    SUM --> CS[压缩后的摘要]
    CS --> NP[新 Prompt\n= 摘要 + 最新消息]
    NP --> LLM[LLM 推理]
```

### 2.3 长期记忆 — 向量数据库 / RAG

```mermaid
flowchart TB
    Conv[历史对话] --> EMB1[Embedding Model\n嵌入模型]
    EMB1 --> VDB[(Vector Database\n向量数据库)]
    NewQ[新问题] --> EMB2[Embedding Model]
    EMB2 --> Search[相似度搜索]
    VDB --> Search
    Search --> Retrieved[检索到的相关记忆]
    Retrieved --> LLM[LLM 推理]
    NewQ --> LLM
```

### 2.4 认知记忆架构

```mermaid
flowchart TB
    Agent[Agent\n智能体]
    SM[(Semantic Memory\n语义记忆 — 世界知识)]
    EM[(Episodic Memory\n情景记忆 — 事件经历)]
    WM[(Working Memory\n工作记忆 — 当前状态)]
    PM[(Procedural Memory\n程序记忆 — 操作方法)]
    SM --> Agent
    EM --> Agent
    WM --> Agent
    PM --> Agent
```

---

## 3. 工具（Tools）

### 3.1 工具调用流程

```mermaid
sequenceDiagram
    participant U as User
    participant LLM as LLM
    participant CI as Code Interpreter
    participant API as External API

    U->>LLM: 提问
    LLM->>LLM: 决定需要调用工具
    LLM->>CI: 生成 JSON {function, params}
    CI->>API: 执行 API 调用
    API-->>CI: 返回结果
    CI-->>LLM: 传回结果
    LLM->>U: 基于结果回答
```

### 3.2 固定工具序列 vs 自主工具选择

```mermaid
flowchart TB
    subgraph Fixed["固定序列 (Framework-determined)"]
        direction LR
        F1[Tool 1] --> F2[Tool 2] --> F3[Tool 3]
    end

    subgraph Auto["自主选择 (LLM-decided)"]
        direction TB
        LLM2[LLM] -->|选择| T1[Tool A]
        LLM2 -->|选择| T2[Tool B]
        LLM2 -->|选择| T3[Tool C]
        T1 -->|结果| LLM2
        T2 -->|结果| LLM2
        T3 -->|结果| LLM2
    end
```

### 3.3 Model Context Protocol (MCP)

Anthropic 提出的标准化工具集成协议。

```mermaid
flowchart LR
    Host[MCP Host\nLLM 应用] <--> Client[MCP Client\n连接管理]
    Client <--> S1[MCP Server\nGitHub]
    Client <--> S2[MCP Server\nWeather]
    Client <--> S3[MCP Server\nDatabase]
```

#### MCP 工作流

```mermaid
sequenceDiagram
    participant H as MCP Host (LLM App)
    participant S as MCP Server (GitHub)

    H->>S: 1. 发现：有哪些工具？
    S-->>H: 2. 返回工具列表 + JSON Schema
    H->>H: 3. LLM 选择工具
    H->>S: 4. 发送调用请求
    S->>S: 5. 执行操作
    S-->>H: 6. 返回结果
    H->>H: 7. LLM 格式化回复给用户
```

---

## 4. 规划（Planning）

### 4.1 规划循环

```mermaid
flowchart LR
    Task[任务] --> Plan[制定计划]
    Plan --> Exec[执行步骤]
    Exec --> Eval[评估结果]
    Eval --> Reflect[反思]
    Reflect -->|更新计划| Plan
    Eval -->|完成| Done[输出结果]
```

### 4.2 推理方法

#### Chain-of-Thought (CoT)

```mermaid
flowchart TB
    Q[问题] --> E1[示例 1:\n步骤推理过程]
    E1 --> E2[示例 2:\n步骤推理过程]
    E2 --> CQ[当前问题]
    CQ --> CoT[逐步推理 → 答案]

    ZS[Zero-Shot CoT] -.->|"Let's think step-by-step"| CoT
```

### 4.3 ReAct（Reasoning + Acting）

```mermaid
flowchart TB
    Q[用户查询] --> T1[Thought\n推理当前状况]
    T1 --> A1[Action\n执行工具调用]
    A1 --> O1[Observation\n观察结果]
    O1 --> T2[Thought\n基于观察再推理]
    T2 --> A2[Action\n继续执行或回答]
    A2 --> O2[Observation / Final Answer]

    style T1 fill:#e3f2fd
    style T2 fill:#e3f2fd
    style A1 fill:#fff3e0
    style A2 fill:#fff3e0
    style O1 fill:#e8f5e9
    style O2 fill:#e8f5e9
```

### 4.4 Reflexion（反思学习）

```mermaid
flowchart TB
    Actor[Actor\n执行者 — ReAct/CoT] --> Output[输出]
    Output --> Evaluator[Evaluator\n评估者 — 打分]
    Evaluator --> SR[Self-Reflection\n自我反思]
    SR --> Mem[(Memory\n反思记忆)]
    Mem --> Actor

    subgraph Memory Types
        STM[Short-term\n近期行动历史]
        LTM[Long-term\n过往反思总结]
    end
    STM --> Actor
    LTM --> Actor
```

### 4.5 Self-Refine（自我优化）

```mermaid
flowchart LR
    G[Generate\n生成初始输出] --> F[Feedback\n自我反馈]
    F --> R[Refine\n优化输出]
    R --> F2[Feedback\n再次反馈]
    F2 -->|满意| Final[最终输出]
    F2 -->|不满意| R2[Refine\n继续优化]
```

---

## 5. 多智能体协作（Multi-Agent）

### 5.1 多智能体系统架构

```mermaid
flowchart TB
    User[用户任务] --> Orch[Orchestrator / Supervisor\n编排器]
    Orch --> A1[Agent 1\n专长：搜索]
    Orch --> A2[Agent 2\n专长：编码]
    Orch --> A3[Agent 3\n专长：分析]
    A1 -->|结果| Orch
    A2 -->|结果| Orch
    A3 -->|结果| Orch
    Orch --> Final[最终输出]

    A1 --- T1[Tools A, B, C]
    A2 --- T2[Tools D, E, F]
    A3 --- T3[Tools G, H, I]
```

### 5.2 Generative Agents（生成式智能体）

```mermaid
flowchart TB
    Profile[Profile\n人格 / 背景设定] --> Agent[Agent]

    subgraph Core Modules
        Memory[(Memory Stream\n记忆流 — 存储所有交互)]
        Planning[Planning\n日程规划]
        Reflection[Reflection\n反思 — 综合洞察]
    end

    Memory --> Agent
    Planning --> Agent
    Reflection --> Agent
    Agent -->|新事件| Memory
    Memory -->|高分记忆| Retrieval[Retrieval\n检索]
    Retrieval --> Agent
```

#### 记忆检索评分

```mermaid
flowchart LR
    Q[新查询] --> Score[综合评分]
    R[Recency\n时近性] --> Score
    I[Importance\n重要性] --> Score
    Re[Relevance\n相关性] --> Score
    Score --> Top[Top-K 记忆\n返回给 Agent]
```

### 5.3 CAMEL 框架（角色扮演协作）

```mermaid
sequenceDiagram
    participant U as User (定义任务)
    participant AIU as AI User\n(代表人类引导)
    participant AIA as AI Assistant\n(执行任务)

    U->>AIU: 分配任务 + 角色
    U->>AIA: 分配任务 + 角色
    AIU->>AIA: "请考虑 X 问题..."
    AIA-->>AIU: "我提议方案 Y..."
    AIU->>AIA: "能否展开 Z 方面？"
    AIA-->>AIU: "Z 的工作原理是..."
    Note over AIU,AIA: 迭代对话直到解决
```

---

## 核心概念总结

| 模块 | 核心问题 | 关键技术 |
|------|----------|----------|
| **记忆** | 如何记住？ | Context Window / 摘要 / 向量数据库 / RAG |
| **工具** | 如何行动？ | Function Calling / JSON / MCP |
| **规划** | 如何思考？ | CoT / ReAct / Reflexion / Self-Refine |
| **多智能体** | 如何协作？ | Orchestrator / 角色扮演 / 生成式智能体 |

```mermaid
flowchart TB
    LLM[LLM Core\n大语言模型] --> Mem[Memory\n记忆]
    LLM --> Tools[Tools\n工具]
    LLM --> Plan[Planning\n规划]
    LLM --> Multi[Multi-Agent\n多智能体]

    Mem --> STM[短期记忆]
    Mem --> LTM[长期记忆]
    Tools --> FC[Function Calling]
    Tools --> MCP2[MCP]
    Plan --> CoT2[CoT]
    Plan --> ReAct2[ReAct]
    Plan --> Ref[Reflexion]
    Multi --> Orch2[Orchestrator]
    Multi --> GA[Generative Agents]

    style LLM fill:#1a237e,color:#fff
    style Mem fill:#0d47a1,color:#fff
    style Tools fill:#01579b,color:#fff
    style Plan fill:#006064,color:#fff
    style Multi fill:#004d40,color:#fff
```

---

> **参考文献**
> - Russell & Norvig (2016) — Agent 定义
> - Cognitive Architectures for Language Agents (2023) — 认知记忆架构
> - Toolformer — 工具学习
> - Generative Agents (Park et al.) — 生成式智能体模拟
> - AutoGen / MetaGPT / CAMEL — 多智能体框架
> - Anthropic MCP — 模型上下文协议
