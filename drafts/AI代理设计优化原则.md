# AI代理设计优化原则

## 🧑‍💻 User

skill 和插件不是越多越好，相反越精简越好

rag vs markdown

上下文进化史

harness engineer

人机协同的哲学与方法论

agent长流程失控

agent team互相review

黑盒 vs 人工监督PlanAct

思考上面的问题，搜索互联网上相关的信息，然后输出你的分析

---
## 🤖 Assistant

**技能与插件：越精简越好（Less is More）**

在AI代理（Agent）构建中，“技能”（Skills）和“插件/工具”（Plugins/Tools，如MCP工具）并非越多越好。过多工具会导致上下文窗口膨胀、延迟增加、模型决策混乱。搜索结果显示，**本地Skills**优势显著：运行快、无网络开销、自然语言引导、设置极简（只需Markdown描述），适合行为引导和上下文适应。 而MCP或外部工具更适合精确操作，但有延迟。核心原则是“动态加载”：代理只在需要时加载相关技能，避免“工具洪水”。这与“Agent Skills”简化工作流的思想一致——取代笨重RAG，减少上下文浪费，实现“渐进披露”（progressive disclosure）。实际案例：LangChain等框架通过精简工具栈，将代理性能大幅提升，而非堆砌功能。

**RAG vs Markdown（知识存储与上下文管理）**

**Markdown**适合本地/原型代理：结构化（标题、段落易分块）、上下文有限、调试透明、LLM天生理解。直接读取整个文件即可“定向”（orientation），无需向量搜索的“迷失森林”问题。 **RAG**（向量检索）则擅长大规模知识库：语义检索、条件加载、解耦事实与行为逻辑。但若知识库混乱（冗余、无标签），会引入幻觉或低效。最佳实践是**混合**：Markdown存行为逻辑/系统提示，RAG存长文档/外部知识。上下文工程（Context Engineering）强调：提示用Markdown分节（XML或标题），RAG仅按需拉取，避免静态内容膨胀上下文。

**上下文进化史（Context Evolution History）**

LLM上下文从早期短窗口（几千token）进化到百万级，但长流程代理仍面临“遗忘”与漂移。历史管理关键：将实验/会话历史总结为“动态知识库”，用于迭代精炼（如进化搜索中的in-context evolution）。 现代方案包括外部记忆（episodic/semantic）、摘要机制、版本控制。Harness工程正是为此而生——追踪上下文演化，避免“doom loops”。上下文不再是静态prompt，而是循环精炼的状态机。

**Harness Engineer（Harness工程师）**

这是2025-2026兴起的新角色/学科：不是优化模型本身，而是设计“马具”（Harness）——围绕代理的系统层（提示、工具、中间件、验证循环、追踪）。目标：让代理在长任务中自主却可靠。LangChain案例：仅改Harness（自验证、上下文注入、故障检测），无需换模型，就将编码代理从Top30提升到Top5。 Harness工程师负责“准备并交付上下文”，引入人类在环（human-in-the-loop）、权限控制、追踪分析。哲学：模型是原料，Harness才是架构。未来，软件工程师将转型为“Agent Workflow Designer + Harness Engineer”。

**人机协同的哲学与方法论（Human-Machine Collaboration）**

核心哲学：**增强而非替代**（Augmentation over Automation），人类+AI协同产出优于任何一方单独表现，尤其在创造性、复杂决策、内容生成任务。 方法论包括：
- **理论框架**：分布式认知、活动理论、人-AI协同度模型（HAI-SDM）。
- **关键机制**：Theory of Mind（ToM，用户推断AI心智状态）、共享目标、透明沟通、反馈循环。
- **模式**：人类负责判断/伦理/创意，AI负责速度/规模；引入“人类在环”检查点。结果：协同能力（collaborative ability）独立于个人能力，可量化（Bayesian IRT框架）。 宣言式总结：AI是伙伴，设计需透明、可解释、伦理优先。

**Agent长流程失控（Long Process Out of Control）**

长运行代理（跨会话、小时级）常见失效：上下文漂移、记忆丢失、循环（reasoning loops）、幻觉级联、成本失控、状态不持久。 根源是概率性组件串联，无结构。解决：Harness工程（持久状态、检查点、超时/重试）、多代理协调、外部记忆、电路断路器（circuit breakers）。Anthropic等方案用多代理桥接会话，避免单代理“忘指令”。生产中，纯自治不可行——必须加治理与人类监督。

**Agent Team互相Review（Multi-Agent Mutual Review）**

单代理易出错，多代理团队通过**角色分工+互评**提升可靠性：Planner（规划）、Executor（执行）、Critic（批判）、Expert（专家）。像“对手团队”（team of rivals）：对立激励+分层否决权，预声明验收标准。 模式包括Loop反馈、Orchestrator-Worker、A2A协议。好处：错误早发现、并行加速、鲁棒性强。实际：5个代理群聊可相互纠错，但需标准化接口避免混乱。未来多代理系统将是企业标配。

**黑盒 vs 人工监督PlanAct（Black Box vs Human-Supervised Plan-Act）**

**黑盒**（纯自治、隐藏推理）在代理时代已不可持续：合规难、调试难、责任不明，尤其长流程易失控。 **人工监督Plan-Act**（或Plan-and-Execute / ReAct变体）：先规划（分解子任务）、再执行+人类审核关键点。优势：可解释、可中断、安全。ReAct适合动态不确定场景（边想边做），Plan-Execute适合结构化任务（先全盘规划）。混合最佳：Planner模块生成可检视计划，人类/ Critic审核，执行层加工具调用。核心：从“黑盒魔法”转向“透明编排”。

**综合分析与建议**

这些话题形成完整闭环：**精简技能/Markdown上下文** → **Harness工程管理进化史** → **多代理互Review防失控** → **人机协同+人工监督PlanAct**确保安全。哲学底层是“人本AI”（Human-Centered AI）：代理不是独立黑盒，而是可控的协同系统。实践路径：
1. 从Markdown起步，逐步加轻量RAG。
2. 聘/转型Harness工程师，聚焦追踪与验证。
3. 构建多代理团队（角色+互评）。
4. 始终保留人类监督闸门（Plan阶段审核）。

结果：代理从“有趣玩具”变成生产力引擎，却不失控。2026年，成功代理项目90%取决于Harness与协同设计，而非单纯模型能力。建议开发者立即评估当前代理的“精简度”与“监督覆盖率”，否则长流程风险将快速暴露。
