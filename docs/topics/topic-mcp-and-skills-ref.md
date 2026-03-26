# 附录：MCP 与 Skills 详解

> 本文是 [Chapter 2 · Agent 运作原理与核心概念](../chapters/ch02-concepts.md) 的扩展附录，深入讲解 MCP 协议、Skills 体系和工具生态。

---

## 1. MCP（Model Context Protocol）深度解析

### MCP 是什么

MCP 最初由 Anthropic 于 2024 年 11 月提出，是一个**开放标准协议**，旨在标准化 AI 应用与外部数据源/工具之间的连接方式。

**重要进展**：2025 年 12 月，Anthropic 将 MCP 捐赠给 **Linux Foundation 旗下的 Agentic AI Foundation（AAIF）**，OpenAI 和 Block 作为联合创始成员加入，Google、Microsoft、AWS、Cloudflare 等提供支持。MCP 已从 Anthropic 的单一项目演变为**行业中立的开放标准**。当前最新规范版本为 **2025-11-25**。

一个类比：**MCP 之于 AI 工具集成，就像 USB-C 之于硬件设备连接。** 在 MCP 出现之前，每接一个外部能力（GitHub、数据库、浏览器等）都需要一套私有集成方案；MCP 把这个过程标准化了。

### MCP 不是什么

| MCP 不是 | MCP 是 |
|---------|--------|
| 一个模型 | Agent 与外部能力之间的连接协议 |
| Agent 框架 | 工具暴露和调用的标准接口 |
| 某家公司的专属标准 | 开放协议（Linux Foundation 治理），行业共建 |
| Function Calling 的替代品 | Function Calling 的标准化和扩展 |

### MCP 架构

```mermaid
flowchart TB
    subgraph Host["MCP Host（Agent 应用）"]
        App["Claude Code / Cursor / 你的应用"]
        Client1["MCP Client 1"]
        Client2["MCP Client 2"]
        Client3["MCP Client 3"]
    end

    subgraph Servers["MCP Servers（能力提供方）"]
        S1["GitHub Server<br/>仓库 · PR · Issue"]
        S2["Browser Server<br/>网页浏览 · 截图"]
        S3["Database Server<br/>SQL 查询 · 数据导出"]
        S4["自定义 Server<br/>内部 API · 知识库"]
    end

    App --> Client1
    App --> Client2
    App --> Client3
    Client1 <--> S1
    Client2 <--> S2
    Client3 <--> S3
    Client3 <--> S4

    style Host fill:#e3f2fd,stroke:#1976d2
    style Servers fill:#e8f5e9,stroke:#388e3c
```

### MCP 提供的三种能力

| 能力类型 | 说明 | 示例 |
|---------|------|------|
| **Tools（工具）** | Agent 可以调用的操作 | 创建 PR、执行 SQL、发送消息 |
| **Resources（资源）** | Agent 可以读取的数据 | 文件内容、数据库记录、API 响应 |
| **Prompts（提示模板）** | 预定义的交互模板 | 代码审查模板、Bug 报告模板 |

### MCP 工作流详解

```mermaid
sequenceDiagram
    participant App as Agent 应用
    participant Client as MCP Client
    participant Server as MCP Server

    Note over App,Server: 初始化阶段
    App->>Client: 启动 MCP Client
    Client->>Server: 连接 MCP Server
    Server-->>Client: 返回能力清单（Tools/Resources）

    Note over App,Server: 使用阶段
    App->>App: LLM 决定需要调用工具
    App->>Client: 发送工具调用请求
    Client->>Server: 转发请求（含参数）
    Server->>Server: 执行操作
    Server-->>Client: 返回结果
    Client-->>App: 传回结果
    App->>App: LLM 处理结果，继续或回复用户
```

### 本地 MCP vs 远程 MCP

```mermaid
flowchart LR
    subgraph Local["本地 MCP"]
        L1["✅ 低延迟"]
        L2["✅ 数据不出域"]
        L3["✅ 部署简单"]
        L4["适合：本地文件 · 浏览器 · 本地数据库"]
    end

    subgraph Remote["远程 MCP"]
        R1["✅ 团队共享"]
        R2["✅ 集中管理权限"]
        R3["✅ 可伸缩"]
        R4["适合：GitHub · Jira · 知识库 · 云服务"]
    end

    style Local fill:#e8f5e9,stroke:#388e3c
    style Remote fill:#e3f2fd,stroke:#1976d2
```

### MCP 与 A2A：互补的两大协议

除了 MCP，Google 于 2025 年 4 月推出了 **A2A（Agent-to-Agent Protocol）**，同样于 2025 年捐赠给 Linux Foundation。两者是互补关系：

| 协议 | 方向 | 解决什么 |
|------|------|---------|
| **MCP** | 纵向（Agent ↔ 工具） | Agent 如何连接和使用外部工具和数据 |
| **A2A** | 横向（Agent ↔ Agent） | 多个 Agent 如何发现、通信和协作 |

```mermaid
flowchart TB
    subgraph Agents["Agent 层"]
        A1["Agent 1"] <-->|A2A 协议| A2["Agent 2"]
        A2 <-->|A2A 协议| A3["Agent 3"]
    end

    subgraph Tools["工具/数据层"]
        T1["GitHub"]
        T2["数据库"]
        T3["浏览器"]
    end

    A1 <-->|MCP| T1
    A2 <-->|MCP| T2
    A3 <-->|MCP| T3

    style Agents fill:#e3f2fd,stroke:#1976d2
    style Tools fill:#e8f5e9,stroke:#388e3c
```

### 谁支持 MCP？

截至 2026 年 3 月，MCP 已被广泛支持：

| 工具/平台 | MCP 支持情况 |
|----------|------------|
| Claude Code | 原生支持（Anthropic 自家协议） |
| Cursor | 支持 |
| Cline | 支持（社区 MCP 生态活跃） |
| Codex CLI | 部分支持 |
| VS Code Copilot | 支持 |
| OpenCode | 支持 |

### 常见 MCP Server 举例

| MCP Server | 提供的能力 |
|-----------|-----------|
| **@anthropic/mcp-server-github** | 仓库浏览、PR/Issue 操作 |
| **@anthropic/mcp-server-filesystem** | 受控的文件系统访问 |
| **@anthropic/mcp-server-puppeteer** | 浏览器自动化、网页截图 |
| **@anthropic/mcp-server-sqlite** | SQLite 数据库查询 |
| **社区贡献** | Notion、Slack、Google Drive、PostgreSQL 等 |

### 什么时候需要 MCP，什么时候不需要

```mermaid
flowchart TB
    Q1{"需要访问外部系统？<br/>（GitHub / 数据库 / API）"} -->|是| Q2{"多人/多 Agent 共享？"}
    Q1 -->|否| NoMCP["❌ 不需要 MCP<br/>用脚本 / CLI 就够"]

    Q2 -->|是| YesMCP["✅ 用 MCP<br/>标准化接口 + 统一鉴权"]
    Q2 -->|否| Q3{"安全性/审计要求高？"}

    Q3 -->|是| YesMCP
    Q3 -->|否| Maybe["🤔 看情况<br/>简单场景用脚本也行"]
```

---

## 2. Skills 体系详解

### Skills 的定位

Skills 是一种**把工作经验和方法论封装为可复用模块**的机制。它不给 Agent 新的工具或能力，而是**教 Agent 怎么更好地使用已有能力**。

| | 没有 Skill | 有 Skill |
|---|---|---|
| Agent 做代码审查 | 每次自由发挥，质量不稳定 | 按照固定清单逐项检查 |
| Agent 做 TDD | 可能先写代码后补测试 | 严格遵循"红→绿→重构"流程 |
| Agent 做调试 | 可能乱猜原因 | 按照系统化诊断流程定位问题 |

### Skill 的结构

一个典型的 Skill 包含：

```
my-skill/
├── SKILL.md          # 核心：触发条件、工作流程、规则
├── scripts/          # 确定性脚本（可选）
├── templates/        # 可复用模板（可选）
└── references/       # 补充资料（可选）
```

### SKILL.md 应该写什么

一个好的 SKILL.md 至少回答四个问题：

| 问题 | 说明 | 示例 |
|------|------|------|
| **什么时候触发？** | 触发条件 | "当用户要求做代码审查时" |
| **帮 Agent 做什么？** | 核心价值 | "按照标准清单逐项检查代码质量" |
| **需要什么输入？** | 前置条件 | "需要知道要审查的文件范围" |
| **交付什么？** | 输出定义 | "输出审查报告，包含问题列表和建议" |

### Skill 的三层加载机制（渐进式披露）

这是 Skill 相比传统 Prompt 最大的优势——**不是一次性加载所有内容，而是按需逐层展开**：

```mermaid
flowchart TB
    subgraph L1["第一层：元数据（~100 tokens）"]
        M["始终加载<br/>名称 · 描述 · 触发条件"]
    end

    subgraph L2["第二层：指令（~1000 tokens）"]
        I["触发时加载<br/>执行步骤 · 规则 · 输出格式"]
    end

    subgraph L3["第三层：资源（5000+ tokens）"]
        R["引用时加载<br/>脚本 · 模板 · 参考资料"]
    end

    L1 -->|"Agent 判断需要此 Skill"| L2
    L2 -->|"执行中需要具体资源"| L3

    style L1 fill:#e3f2fd,stroke:#1976d2
    style L2 fill:#fff3e0,stroke:#f57c00
    style L3 fill:#e8f5e9,stroke:#388e3c
```

**对比传统 Prompt**：把所有规则一次性写进 System Prompt（可能 40,000 tokens），每次对话全量加载。Skill 通过渐进加载，可以将 token 消耗降低 50-80%。

### 写好 Skill 的原则

| 原则 | 说明 |
|------|------|
| **聚焦单一场景** | 一个 Skill 只解决一类问题，不要试图覆盖十种场景 |
| **步骤明确** | 给 Agent 清晰的执行步骤，而不是模糊的原则 |
| **控制上下文** | Skill 本身不应引入大量噪音 |
| **可测试** | 能明确判断 Skill 是否被正确执行 |
| **迭代优化** | 根据实际使用效果持续调整 |

---

## 3. Skills vs MCP：最新趋势与深度对比

> 到 2026 年，更准确的趋势不是“Skills 取代 MCP”，而是很多团队开始从“万物皆 MCP”转向更轻量的 **CLI / 脚本 / 直接 API + Skills** 组合；MCP 仍然保留在需要标准化、统一鉴权、远程连接和跨工具复用的场景里。

### 核心比喻：Skills = 方法论，CLI/API = 轻量执行层，MCP = 标准化连接层

```mermaid
flowchart TB
    subgraph Skills["Skills（方法论层）"]
        S1["自然语言定义（Markdown）"]
        S2["沉淀 SOP、检查单、最佳实践"]
        S3["人类可直接编辑和审查"]
    end

    subgraph Runtime["执行与连接层"]
        C1["CLI / 脚本 / SDK / API<br/>轻量、确定性、易组合"]
        M1["MCP<br/>标准化暴露 Tools / Resources / Prompts"]
        M2["统一鉴权、远程连接、跨工具复用"]
    end

    Skills --- C1
    Skills --- M1
```

### 详细维度对比

| 维度 | Skills | CLI / 脚本 / 直接 API | MCP |
|------|--------|-------------------------|-----|
| **本质** | 教 Agent 怎么做 | 让 Agent 或脚本把事做掉 | 把外部能力标准化暴露给 Agent |
| **载体** | Markdown / 规则文件 | Shell、脚本、SDK、HTTP 请求 | JSON-RPC Server |
| **部署** | 最轻 | 通常也很轻，很多项目现成就有 | 相对更重，需要本地或远程 Server |
| **维护成本** | 低 | 低到中 | 中到高 |
| **上下文开销** | 低（按需加载） | 最低或接近最低 | 受工具数量、描述长度、发现策略影响 |
| **人类可编辑** | 强 | 强 | 中 |
| **确定性** | 中，需靠验证兜底 | 高 | 中到高 |
| **适合场景** | 工作流 SOP、代码审查清单、调试方法论 | 已有命令行工具、已有 SDK、稳定 HTTP 接口 | GitHub/Jira/数据库/浏览器等标准化集成 |
| **跨 Agent 通用性** | 高 | 中到高 | 中 |

### 2026 年更真实的趋势是什么？

1. **Skills 继续增长，但更多是沉淀方法论，不是替代协议层。**
2. **很多团队优先走 CLI / 脚本 / 直接 API。** 这条路线通常更轻量，也更容易复用现有工程资产。
3. **MCP 仍然活跃，而且没有消失。** 例如 Perplexity 在 2026 年 3 月的帮助中心仍在持续提供本地和远程 MCP 支持说明。
4. **真正变化的是“默认选型顺序”**：不是一上来就把所有外部能力包装成 MCP，而是先问“现有 CLI/API 能不能解决”，不行再引入 MCP。
5. **大规模 API 场景会更在意上下文成本。** Cloudflare 在 2026 年 2 月公开写到，如果把其 2,500+ API 端点逐个暴露为 MCP 工具，会消耗超过 200 万 tokens，于是他们转向更紧凑的 Code Mode / 渐进发现方案。

> 注：以上判断基于 2026 年 3 月可公开核对的资料，包括 Perplexity 仍在维护的 MCP 帮助中心、Cloudflare 关于大规模 API 与 Code Mode 的公开文章，以及 Machina 等围绕 Skills/命令驱动能力目录的社区实践。

### 为什么 CLI / API + Skills 组合在上升？

1. **复用现有资产**：很多团队本来就有 `gh`、`kubectl`、`terraform`、内部脚本和稳定 HTTP API。
2. **更低的上下文和样板开销**：不是所有能力都值得包装成独立的 MCP 工具。
3. **更直接的可控性**：脚本、CLI 和 SDK 调用的执行路径更短，更容易调试和审计。
4. **Skills 恰好补足“方法论”缺口**：CLI/API 解决“怎么执行”，Skills 解决“按什么流程执行”。
5. **MCP 仍然是企业级整合的重要选项**：尤其在统一鉴权、远程连接、工具治理、跨产品复用时仍然很有价值。

### 最佳实践：Skills + CLI/API + MCP 组合

它们不是竞争关系，最佳实践是**组合使用**：

| 场景 | Skills 负责 | CLI / API 负责 | MCP 负责 |
|------|-----------|------------------|---------|
| 代码审查 + PR | 定义审查清单、评分标准、流程 | 跑 lint/test，调用 `gh` 查看 PR | 需要标准化 GitHub 集成时再接入 |
| 数据库迁移 | 定义迁移流程、回滚策略、检查点 | 跑迁移脚本、直连 SQL/SDK | 多环境统一治理时接数据库 MCP |
| Bug 调试 | 定义系统化诊断流程（日志→复现→定位→修复） | 调日志命令、调监控 API | 需要把观测系统能力统一暴露给 Agent 时使用 |
| 项目初始化 | 定义技术栈选择、目录结构、配置模板 | 调脚手架命令、调用 GitHub API | 团队化复用时再做成 MCP |

### 常见误区

| 误区 | 现实 |
|------|------|
| "Skills 要取代 MCP" | 不会。Skills 无法给 Agent 新的外部访问能力 |
| "现在流行 CLI / API，就不用 MCP 了" | 也不对。MCP 在标准化集成、统一鉴权、远程连接场景依然很重要 |
| "有了 MCP 就不需要 Skills" | MCP 只解决"能不能做"，不解决"怎么做好" |
| "Skills 不可靠，因为是自然语言" | 配合确定性脚本（lint、test）做验证，可靠性不亚于硬编码工作流 |

---

## 4. Skill / MCP / 插件 / 脚本：四者完整对比

### 本质定义

```mermaid
flowchart LR
    Skill["Skill<br/>📋 方法论手册<br/>'怎么做'"]
    MCP["MCP<br/>🔌 标准接口<br/>'能访问什么'"]
    Plugin["插件<br/>📦 功能扩展<br/>'产品体验增强'"]
    Script["脚本<br/>⚙️ 命令工具<br/>'确定性执行'"]

    Skill --- Core["Agent<br/>工作系统"]
    MCP --- Core
    Plugin --- Core
    Script --- Core
```

### 详细对比表

| 维度 | Skill | MCP | 插件 | 脚本 |
|------|-------|-----|------|------|
| **核心价值** | 复用经验和流程 | 标准化外部连接 | 产品集成和体验 | 确定性自动化 |
| **类比** | 应用程序 | USB-C 接口 | 应用商店扩展 | 命令行工具 |
| **技术门槛** | 低（Markdown） | 高（需编码+部署） | 中等 | 低-中 |
| **Token 消耗** | 低（渐进加载） | 中等 | 取决于实现 | 无（不占上下文） |
| **跨平台** | 强 | 中等 | 弱（通常绑平台） | 强 |
| **网络需求** | 无 | 可能需要 | 取决于实现 | 无 |
| **维护成本** | 低 | 高 | 中 | 低 |

### 组合使用示例

一个完整的 Agent 工作流通常会**组合使用**这四种能力：

```mermaid
flowchart TB
    Task["任务：做一次代码审查并提 PR"]

    Skill_CR["Skill：代码审查方法论<br/>（定义检查清单和流程）"]
    Script_Lint["脚本：运行 ESLint + 测试<br/>（确定性检查）"]
    MCP_GH["MCP：GitHub 集成<br/>（读取 PR diff、创建评论）"]
    Plugin_IDE["插件：IDE diff 展示<br/>（可视化变更）"]

    Task --> Skill_CR
    Skill_CR --> Script_Lint
    Script_Lint --> MCP_GH
    MCP_GH --> Plugin_IDE
```

---

## 5. 工具调用的"四大魔咒"

在生产环境中使用 Agent 工具调用，会遇到四个核心挑战：

### 1. 执行幻觉（Execution Hallucination）

Agent 选错 API、编造参数、甚至"以为"自己已经执行成功。最糟糕的是**静默失败**——Agent 报告"已完成"但实际什么都没做。

**应对**：始终要求 Agent 展示工具调用的实际输出，而不是只接受它的"自我报告"。

### 2. 上下文衰退（Context Rot）

工具返回的结果、日志、历史对话不断堆积，token 越用越多，模型越来越难"记住"早期的重要信息。

**应对**：控制工具输出长度，定期做摘要，分阶段执行任务。

### 3. 延迟与成本爆炸（Delay and Cost Explosion）

每个小请求都要经过"意图判断→选工具→填参数→执行→处理结果"的完整链路，延迟和费用迅速上升。

**应对**：简单操作用脚本直接执行，不经过 LLM 决策；利用 Prompt Cache 减少重复上下文的费用。

### 4. 安全边界崩塌（Prompt Injection）

用户输入和系统指令共用一条文本流，攻击者可能通过精心构造的输入劫持工具调用。

**应对**：对高风险操作设置人工确认；MCP Server 实现最小权限原则；审计工具调用日志。

---

## 6. 工具数量的"Less is More"原则

### 为什么工具多了反而效果差

```mermaid
flowchart LR
    Few["少量精准工具<br/>5-10 个"] --> Good["✅ 选择准确<br/>✅ 上下文精简<br/>✅ 响应快速"]
    Many["大量工具<br/>50+ 个"] --> Bad["❌ 选择困难<br/>❌ 上下文膨胀<br/>❌ 延迟增加"]
```

### 实证数据

多项研究和实践表明：

- 工具描述占据的上下文空间随数量线性增长
- 工具选择准确率在工具数量超过 ~20 个后明显下降
- LangChain 团队通过精简工具栈，将 Agent 性能显著提升

### 工具管理的最佳实践

| 策略 | 说明 |
|------|------|
| **动态加载** | 不要一次性加载所有工具，根据任务按需加载 |
| **分层组织** | 核心工具始终可用，专业工具按需启用 |
| **优先 CLI** | 能用脚本/CLI 解决的不要做成 MCP |
| **定期清理** | 删除不再使用的 MCP 配置 |
| **文档清晰** | 每个工具的描述要精准，帮助模型正确选择 |

---

## 7. 工业界的三大护栏

面对工具调用的挑战，工业界发展出三层防护机制：

### 1. 路由层

```mermaid
flowchart TB
    Query["用户查询"] --> Router["路由判断"]
    Router -->|简单问题| Small["轻量模型<br/>快速 · 便宜"]
    Router -->|复杂问题| Large["强力模型<br/>准确 · 贵"]
    Router -->|需要工具| Agent["Agent 流程<br/>工具调用链"]
```

### 2. 缓存体系

- **Prompt Cache**：重复的系统指令前缀自动缓存，减少计费
- **KV Cache**：模型推理中的中间计算结果缓存
- **语义缓存**：相似问题命中历史回答，避免重复推理

### 3. MCP 标准化连接

把 N 种 Agent × M 种工具的集成复杂度，从 O(N×M) 降低到 O(N+M)——每种 Agent 只需对接 MCP 协议，每种工具只需实现 MCP Server。

---

返回主文档：[Chapter 2 · Agent 运作原理与核心概念](../chapters/ch02-concepts.md)

返回目录：[README · 章节目录](../../README.md#tutorial-contents)
