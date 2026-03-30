# Chapter 7 · 🧠 从 LLM 到 Agent

> 目标：把"模型很聪明"这件事和"Agent 能持续干活"这件事分开理解。读完这一章，你应该知道为什么普通 LLM 不等于 Agent，为什么 Agent 需要闭环，以及 `Model + Harness` 这层压缩视角为什么比只看模型更有用。

## 📑 目录

- [0. 先校准几个直觉](#0-先校准几个直觉)
- [1. 普通 LLM 更像开环系统](#1-普通-llm-更像开环系统)
- [2. 中间还有一层：Augmented LLM](#2-中间还有一层augmented-llm)
- [3. Agent 的关键跨越：进入反馈闭环](#3-agent-的关键跨越进入反馈闭环)
- [4. 从四件套到 Model + Harness](#4-从四件套到-model--harness)
- [5. Prompt、Context、Harness 不是一回事](#5-promptcontextharness-不是一回事)
- [6. 几个问题驱动问答](#6-几个问题驱动问答)

---

## 0. 先校准几个直觉

很多人第一次认真用 Agent，最容易有这几个误解：

| 常见直觉 | 更接近现实的说法 |
|---|---|
| Agent 就是更强的聊天模型 | Agent 是围绕模型搭出来的行动系统 |
| 模型越强，Agent 就一定越好用 | 结果更接近 `Model × Context × Task Structure × Verification` |
| 给的信息越多越好 | 关键不是量大，而是相关、干净、可回放 |
| 问一次就该直接得到最终答案 | 很多任务必须在环境反馈里反复推进 |

---

## 1. 普通 LLM 更像开环系统

如果要给普通 LLM 找一个最有画面感的比喻：

> 🧠 **它像一个被放在培养缸里的大脑。**

这个大脑非常会思考，也非常会语言表达。你问它"如果你是程序员，你会怎么修这个 bug"，它可以把步骤讲得头头是道，甚至听起来比很多真人都更像那么回事。

但问题在于，它首先是一个**脱离真实环境的大脑**。它擅长的是脑内推演，而不是和外部世界持续交互。

```mermaid
flowchart LR
    classDef input fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef model fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef output fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    A["👤 你的问题"]:::input --> B["🧠 LLM<br/>理解并续写"]:::model --> C["💬 一次回答"]:::output
```

普通 LLM 最擅长的是：

- 理解输入
- 续写输出
- 在当前上下文里给出看起来合理的回答

但它默认停在这里：

```text
输入 -> 生成回答 -> 结束
```

所以它很像一个**开环系统**：

- 会分析
- 会解释
- 甚至会给出很像样的方案
- 但默认不会主动去接触真实环境、执行动作、再拿结果回来纠偏

换句话说，**缸中大脑最大的问题，不是不会想，而是想完以后碰不到世界。**

它可以：

- 想象执行一条命令后"理论上"会发生什么
- 猜测某个 API 大概会返回什么
- 推演一段代码改完后"应该"能过测试

但只要它没有真的去执行、真的去观察、真的去拿回反馈，它就仍然只能停留在"可能对"的状态里。

> **普通 LLM 默认是在"回答"，不是在"执行"。**

### 从控制论看：普通 LLM 更像开环，Agent 更像闭环

如果借控制论的语言来看，这个差别会更清楚。

普通 LLM 更像一个**开环系统**：你给输入，它给输出，这一轮就结束了。它当然可以把答案说得很漂亮，但它缺少一个最关键的东西：**根据环境反馈持续修正自己的能力**。

```mermaid
flowchart LR
    classDef user fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef model fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef env fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef gap fill:#f7c6c7,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    U["输入目标"]:::user --> L["普通 LLM"]:::model --> O["输出答案"]:::env
    O -.没有真实反馈回路.-> L
    O --> G["说得通 不等于做得成"]:::gap
```

而 Agent 更像**闭环系统**——先决定动作、再作用到环境、再读取反馈、再调整下一步。这时候系统不再只是"生成一个看起来合理的答案"，而是在真实反馈中不断**收束解空间**。

你可以把"收束解空间"理解成：

- 没有反馈时，模型只能在很多"也许对"的路径里猜
- 有了反馈后，错误路径会被排除，正确路径会越来越清晰

这也是为什么控制论和反馈系统对理解 Agent 很有帮助。一个系统想在动态环境里稳定地完成目标，不能只会规划，还得能**根据误差和反馈不断修正**。

### 为什么它看起来很聪明，却经常在关键时刻掉链子

大众读者最容易困惑的一点是：既然模型已经这么聪明，为什么还要搞 Agent 这套复杂结构？

因为只靠"输入一次，回答一次"，很多任务根本做不完。

```mermaid
flowchart TB
    classDef user fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef model fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef limit fill:#f7c6c7,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    U["👤 用户目标"]:::user --> L["🧠 普通 LLM"]:::model
    L --> A["📰 不知道最新信息"]:::limit
    L --> B["🛠️ 不会真的跑命令、改文件、点按钮"]:::limit
    L --> C["🧵 长任务里容易忘前面发生了什么"]:::limit
```

比如你说：

- "帮我总结这个仓库最近 5 次提交的变化"
- "把这个 bug 修掉，并且补上测试"
- "查一下现在的汇率，再帮我比较两个付款方案"

这些任务都不只是"想一想"，还需要：

- 去拿外部信息
- 去操作真实环境
- 记住前面做过什么
- 根据结果决定下一步

这里最容易误导新手的两个现象是：

| 现象 | 它真正说明什么 |
| --- | --- |
| 🧵 长对话里"说记住了"，后面却答不出来 | 它没有稳定持久记忆系统，只能依赖当前上下文窗口 |
| ➗ 简单计算或简单推理也可能答错，而且答得很自信 | 语言流畅不等于每一步中间推理都可靠 |

这两个现象后面还会再出现，但它们本质上分别属于：

- `Memory / Context` 问题
- `Verification` 问题

---

## 2. 中间还有一层：Augmented LLM

在普通 LLM 和完整 Agent 之间，往往还隔着一层：

```text
LLM -> Augmented LLM -> Agent
```

这里的 `Augmented LLM` 指的是：

- 给模型加上检索
- 给模型加上工具
- 给模型加上状态回写
- 但还没有把整条任务闭环做完整

```mermaid
flowchart LR
    classDef user fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef model fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef ext fill:#e8d6ff,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef out fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    U["👤 用户问题"]:::user --> M["🧠 LLM"]:::model
    M --- T["🔧 工具"]:::ext
    M --- R["💾 记忆 / 检索"]:::ext
    M --> O["💬 更可靠的回答"]:::out
```

这层很重要，因为很多产品看起来已经"会调工具"，但本质上仍然更像：

> 🧩 **带外设的模型，而不是会持续推进任务的工作系统。**

你可以把三者粗略区分成这样：

| 形态 | 核心特征 | 常见短板 |
| --- | --- | --- |
| 裸 LLM | 单次生成 | 看不到执行结果，缺少状态和验证 |
| Augmented LLM | 有工具和上下文增强 | 能力增强了，但未必有稳定控制面 |
| Agent | 有目标推进闭环 | 复杂度上升，需要更强的 Harness |

理解这一层以后，后面你就不容易把"会搜一下、会调一下工具"误认成"已经是成熟 Agent"。

---

## 3. Agent 的关键跨越：进入反馈闭环

Agent 最关键的变化，不是说得更多，而是进入了这条闭环：

```text
Observe -> Plan -> Act -> Verify -> Continue
```

```mermaid
flowchart LR
    classDef goal fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef agent fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef env fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef obs fill:#e8d6ff,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    G["🎯 目标"]:::goal --> A["🤖 Agent"]:::agent --> E["🌍 真实环境"]:::env --> O["👀 反馈 / 结果 / 错误"]:::obs --> A
```

也就是说，它不再只靠脑内推演，而是：

1. 先决定下一步
2. 去执行一个动作
3. 读取真实反馈
4. 根据反馈修正路径

这时模型更像：

> 🔁 **闭环里的推理引擎，而不是一次性回答器。**

ReAct 是这一步里最值得记住的桥梁。ReAct 这个名字本身就说明了重点：

- **Reason**：先想一想，现在最合理的动作是什么
- **Act**：真的去做这个动作
- **Observe**：看环境返回了什么结果

然后再进入下一轮。

这件事看上去朴素，但它改变了系统的性质。因为模型不再只是靠脑内推演一路写到结尾，而是会让**推理**和**环境反馈**互相纠正。

```mermaid
flowchart LR
    classDef reason fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef act fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef observe fill:#e8d6ff,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef update fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    R["Reason 先形成判断"]:::reason --> A["Act 真的去做"]:::act --> O["Observe 读回环境反馈"]:::observe --> U["更新判断与下一步"]:::update --> R
```

这就是 ReAct 真正厉害的地方：

- 推理不再是终点，而是行动前的准备
- 行动不再是盲做，而是为了拿回新信息
- 观察不再是附属步骤，而是下一轮推理的输入

> **ReAct 让模型不只是"会讲步骤"，而是开始"用步骤去试探现实"。**

如果把这一节压成一句话，就是：

> 🔁 **普通 LLM 停在"给答案"，Agent 进入了"边想边试边看"的闭环。**

> **LLM 像缸中大脑，擅长脑内推演；Agent 则像接上了眼睛、手和反馈回路的大脑，能在真实环境里边做边收束。**

---

## 4. 从四件套到 Model + Harness

理解 Agent，有两种都很有用的视角。

### 视角一：四件套

```text
Agent = LLM + Planning + Tools + Memory
```

它适合解释系统里到底有哪些核心部件。

### 视角二：压缩为两层

```text
Agent = Model + Harness
```

这里：

- `Model` 负责理解、推理、生成
- `Harness` 负责把上下文、工具、状态、验证、恢复和边界组织起来

这条压缩视角很重要，因为工程里大量问题都不在模型本体，而在模型外侧的系统层。

如果你只想记一个更实用的工程判断，可以记这条：

```text
Agent 效果 ≈ Model × Context × Task Structure × Verification
```

也就是说，模型强只是其中一个变量。真正决定结果上限的，往往还包括：

- 这一轮到底看到了什么
- 任务有没有被拆成可执行步骤
- 有没有把输出拉回现实做验证

---

## 4a. 一次真实请求的内部轨迹

从用户视角看，你在终端里输入一句话，Agent 几秒后给你一大段回复，看起来像是一次性生成的；但实际上，**Agent 内部可能已经循环了十几轮**。

比如你说：

> "帮我找到项目里所有未使用的依赖并清理掉。"

Agent 内部可能经历这样的循环：

| 轮次 | Agent 在判断什么 | 使用工具 | 观察结果 |
|:---:|---|---|---|
| 1 | 先确认项目类型和包管理器 | `Read` / `Shell` | 发现是 Node.js 项目，用 npm |
| 2 | 需要看哪些包被声明了 | `Read package.json` | 列出了当前 dependencies |
| 3 | 需要在代码里搜索引用 | `Grep` / `SemanticSearch` | 初步发现几个包没有被调用 |
| 4 | 还要排除配置文件里的间接使用 | `Grep` 配置目录 | 其中一个包其实在构建配置里用到了 |
| 5 | 确认真正未使用的依赖后再删除 | `Shell npm uninstall ...` | 删除命令成功 |
| 6 | 不能只删，还要验证是否没破坏项目 | `Shell npm test` | 测试通过 |
| 7 | 任务完成，整理结果汇报用户 | — | 输出删除了什么、如何验证的 |

> 💡 **关键认知**：你看到的是"一条完成回复"，Agent 内部经历的却是"多轮局部判断"。它不是一下子把整条链路都想完，而是在每一步里借新反馈不断收束。

---

## 4b. 自主性不是开关，而是一条光谱

Planning 还直接决定了系统到底有多"自主"。

```mermaid
flowchart LR
    classDef low fill:#d8eefb,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef mid fill:#ffe3a3,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d
    classDef high fill:#b7e3a1,stroke:#2d2d2d,stroke-width:2px,color:#2d2d2d

    A["预定义步骤 你指定每一步"]:::low --- B["半自主 Agent 自己推进 关键动作需确认"]:::mid --- C["高自主 长链路独立执行"]:::high
```

今天大多数主流 Coding Agent 都落在中间这段：

- LLM 会自己做局部规划
- 但危险操作、权限边界、最终验收仍然有人类在环里

> 🎛️ **自主性不是二选一，而是按风险分级的光谱。越是高风险、不可逆、外部依赖强的动作，越要保留人类在环里。**

---

## 5. Prompt、Context、Harness 不是一回事

这三个词经常被混用，但它们不在同一层：

| 概念 | 它回答什么问题 |
|---|---|
| Prompt | 这一轮你怎么说 |
| Context | 这一轮模型实际看到了什么 |
| Harness | 整个系统如何组织行动、验证和恢复 |

所以很多所谓"Prompt 问题"，其实是：

- Context 装配问题
- Harness 设计问题
- 验证链缺失问题

这也是为什么同一个模型，换一套工作流和规则文件，表现会像换了一个系统。

---

## 6. 几个问题驱动问答

**Q：模型更强，是不是 Agent 就自然更强？**  
不一定。更强模型当然有帮助，但如果 Context 很脏、任务没拆开、验证链缺失，结果仍然会跑偏。

**Q：只要能调工具，就已经算 Agent 了吗？**  
不一定。很多系统只是 `Augmented LLM`，会调用能力，但还没有把持续推进、状态回写和恢复动作组织成闭环。

**Q：同一个 session 里连续聊天，是不是等于模型一直记着？**  
也不等于。更常见的真实情况是 runtime 在维护更大的 session state，并在每一轮重新组装 context。这个边界会在 [Ch11 · Memory、Context 与 Harness](./ch11-memory-context-harness.md) 里展开。

**Q：为什么后面会反复讲 Planning、Memory、Tools 和 Harness？**  
因为 Agent 不是单一能力，而是一个系统。你看到的"稳不稳"，最后通常都是这些部件一起决定的。

---

## 📌 本章总结

- LLM 默认更像开环系统，擅长回答，不天然擅长持续执行。
- Agent 的本质不是"更会说"，而是进入了反馈闭环；`ReAct` 之所以关键，就是因为它把推理、行动和观察接上了。
- `Augmented LLM` 是一层常见中间态，它解释了为什么"会调工具"还不等于"完整 Agent"。
- 四件套视角有助于理解组成，`Model + Harness` 视角更有利于工程诊断。
- `Prompt / Context / Harness` 分层，是后续方法论章节的共同前提。

## 📚 继续阅读

- 想把 Agent 的四件套一次看全：继续看 [Ch08 · Agent = Model + Harness = LLM + Planning + Memory + Tools](./ch08-agent-formula.md)
- 想理解"看起来会推理"和"真正可靠"之间的差距：继续看 [Ch09 · LLM 推理基础](./ch09-llm-reasoning-basics.md)

<div align="center">

[📚 返回目录](../../README.md#tutorial-contents) | [⬅️ 上一章：Ch06 基础概念与术语](./ch06-glossary.md) | [➡️ 下一章：Ch08 Agent = Model + Harness](./ch08-agent-formula.md)

</div>
