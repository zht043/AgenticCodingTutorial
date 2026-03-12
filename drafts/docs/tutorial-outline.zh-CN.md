# Agentic Coding 教程大纲与内容规划

## 定位

这套教程的目标读者是三类人：

- 刚从聊天式 AI 编程转向 Agent 工作流的开发者
- 已经在用 Cursor、Claude Code、Cline、Codex，但还没有形成稳定方法论的人
- 需要为团队设计 Agentic Coding 规范、权限、安全和成本策略的人

建议采用“主线工具 + 对照工具 + 扩展生态”的写法：

- 主线工具：`Claude Code`
- 对照工具：`Codex`、`Cursor`、`Cline`、`GitHub Copilot`
- 扩展主题：`MCP`、`Skills`、插件、上下文工程、多模型协作、安全与成本

这样写的好处是内容不会散，读者也不会在大量产品名之间失去主线。

## 总体写作原则

每章尽量遵循同一个模板：

1. 这一章解决什么问题
2. 读者为什么需要它
3. 核心概念或核心流程
4. 一段最短可执行示例
5. 常见误区和边界
6. 本章实践清单

## Part 0 引言篇：为什么要告别古法编程

### Chapter 1 为什么是 Agentic Coding，而不是“会聊天的 AI”

建议回答的问题：

- 为什么传统“搜索答案 + 复制代码 + 手工调试”的效率正在被重构
- 为什么单纯的 Chatbot 和代码补全已经不够
- Agentic Coding 的核心价值到底是“写代码”还是“驱动完整开发闭环”

建议内容：

- 从“单轮问答”到“持续执行”的范式变化
- 从“生成代码片段”到“读仓库、改文件、跑命令、看结果、继续修”
- 适合 Agent 的任务与不适合 Agent 的任务
- 一个简短对照：古法编程 vs Chatbot 编程 vs Agentic Coding

### Chapter 2 AI Coding 的发展脉络

建议内容：

- Chatbot 阶段
- 代码补全阶段
- IDE Chat 阶段
- Workflow/Chain 阶段
- Agent 阶段
- Multi-Agent / Cloud Agent 阶段

这里适合放一张演化图，突出几个关键变化：

- 是否能执行工具
- 是否能观察真实环境反馈
- 是否能跨多轮保持任务状态
- 是否能自主验证结果

### Chapter 3 Agent 和 LLM 分别做什么

这是全文最重要的概念澄清章之一，建议明确拆开：

- LLM 负责理解、推理、生成
- Agent 负责把模型接入任务循环
- Tool 负责把能力延伸到文件系统、终端、浏览器、搜索、Git
- Memory/Instructions 负责稳定行为
- Verification 负责把“看起来对”变成“真的能跑”

建议在这里引入标准闭环：

`Goal -> Plan -> Act -> Observe -> Verify -> Iterate`

## Part 1 快速上手篇：30 分钟跑通第一个 Agent 工作流

### Chapter 4 新手最短路径

建议直接给三条路线，减少读者纠结：

- 路线 A：`Claude Code` 主线
- 路线 B：`Codex` 主线
- 路线 C：`Cursor` 或 `Cline` 主线

每条路线都只写：

- 需要什么账号
- 需要装什么
- 如何连接模型
- 第一个任务做什么
- 完成后怎么验证

### Chapter 5 部署与接入：官方账号、API、中转商

这一章正好吸收你 brainstorm 的部署内容，但建议分层写：

- 官方支持方案
- 兼容 API 方案
- 中转/聚合方案
- 非官方逆向方案的风险

建议内容：

- `Base URL` 和 `API Token` 的工作原理
- 为什么同一个 Agent 前端可以切不同后端
- 什么是 provider compatibility
- 中转服务常见问题：稳定性、限速、上下文截断、模型映射不一致、日志与隐私风险
- 费率分组不只是价格问题，还可能影响速率和能力

建议配图：

- `Agent -> Provider SDK/API -> Model Endpoint` 流程图
- 官方直连 vs 聚合层转发示意图

### Chapter 6 第一个真正有价值的任务

建议用一个非常标准的任务把方法论钉住：

- 读取一个已有仓库
- 理解结构
- 制定计划
- 修改一处小功能
- 运行测试或命令验证
- 输出变更总结

读者必须在这一章体验到“Agent 不只是写代码，而是在操作开发环境”。

## Part 2 心智模型篇：理解 Agent 的工作方式

### Chapter 7 Chatbot、代码补全、IDE 助手、Code Agent 的区别

建议用矩阵来写，维度可包括：

- 是否理解整个仓库
- 是否能操作文件
- 是否能执行命令
- 是否能自动验证
- 是否适合长任务
- 是否支持插件、MCP、Skill

### Chapter 8 Agent 内部到底发生了什么

建议拆成六层：

- System / Developer / Repo Instructions
- Context Assembly
- Planning
- Tool Use
- Memory / Summarization / Compression
- Verification / Recovery

这里可以顺手解释：

- 为什么上下文越长不一定越好
- 为什么过度提示和过度记忆会让 Agent 变笨
- 为什么“任务拆解质量”比“提示词花哨程度”更重要

### Chapter 9 Agent 的边界与失败模式

建议内容：

- 上下文污染
- Memory 污染
- 长任务漂移
- 并行任务相互干扰
- stdout 过长吞掉 token
- 本地环境与模型假设不一致
- 权限不足或权限过大

## Part 3 工具与模型地图：先分清产品，再谈谁更强

### Chapter 10 主流 Code Agent 全景图

建议收录的对象：

- `Claude Code`
- `Codex`
- `Cursor`
- `Cline`
- `GitHub Copilot coding agent`
- `Trae`
- `OpenCode` 或其他你想纳入的社区方案

建议比较维度：

- 运行形态：CLI、IDE、云端、混合
- 官方支持的模型与后端
- 是否开放扩展能力
- 是否适合大型仓库
- 是否适合自动执行
- 权限控制是否细粒度
- 团队协作能力

### Chapter 11 主流 Code LLM 图谱

这章一定要强调：

- 模型不等于 Agent
- 同一个 Agent 前端可以接不同模型
- 好用程度是“模型能力 x Agent 框架 x 提示词 x 工具链 x 验证流程”的乘积

建议对比的模型族：

- `Claude` 系列
- `GPT / Codex` 系列
- `Gemini` 系列
- `Kimi`
- `GLM`
- 其他你认为会出现在中文读者工作流里的模型

建议不要把正文绑定死在单个版本号上，而是单独维护一个“当期版本附录”。

### Chapter 12 如何选工具、选模型、选组合

建议给一套决策树：

- 我是新手，先选什么
- 我是个人开发者，预算有限，怎么搭
- 我是企业团队，如何兼顾审计、安全和成本
- 我是做重构、修 bug、跨仓改动、脚手架生成、文档整理，分别怎么选

## Part 4 方法论篇：Prompt、Context、Verification 才是分水岭

### Chapter 13 面向 Agent 的 Prompt 技巧

建议和普通 Chatbot Prompt 显式区分：

- 明确目标
- 明确边界
- 明确验收标准
- 明确操作范围
- 明确禁止事项
- 明确输出格式

建议加入一个通用模板：

- 背景
- 目标
- 约束
- 相关文件
- 验证方式
- 交付要求

### Chapter 14 计划先行：让 Agent 先分析，再执行

这里可以吸收你提到的：

- 先 plan 再 act 的方法论
- 贵模型先做规划，便宜模型做批量执行
- Codex 做分析/计划，Claude Opus 做实现，或者反过来

建议内容：

- 什么时候必须先出计划
- 什么时候可以直接执行
- 计划应该细到什么程度
- 如何让 Agent 在长任务中阶段性回报

### Chapter 15 Context Engineering

建议重点写这些文件或机制：

- `AGENTS.md`
- `CLAUDE.md`
- Cursor Rules
- Copilot Instructions
- 项目 README、设计文档、架构图的上下文价值

建议内容：

- 什么信息值得固化到记忆文件
- 什么信息应该按任务临时注入
- 如何减少长期记忆污染
- 何时做 compact / summarize

### Chapter 16 Verification Engineering

建议内容：

- 为什么“请确认没问题”不算验证
- 如何让 Agent 主动跑测试、lint、build、截图、日志检查
- 如何写出更可靠的完成条件
- 如何在失败后让它基于错误信息继续修

## Part 5 Claude Code 深潜篇

这一部分可以单独写得比别的工具更深，因为它是全书主线。

### Chapter 17 Claude Code 的工作模式

建议内容：

- CLI 与 IDE 集成的差异
- 适合 Claude Code 的任务类型
- 与传统 IDE Chat 的根本区别

### Chapter 18 Claude Code 配置与会话管理

建议内容：

- 官方后端与兼容后端的区别
- 如何配置不同模型
- 会话中途切换模型的策略
- `effort` 这类推理强度参数的使用场景
- 什么时候要限制权限，什么时候要放宽权限

### Chapter 19 Claude Code 的高频实用技巧

建议收录：

- `CLAUDE.md` 记忆文件
- permissions 配置
- 适合做成快捷操作的常见命令
- 长任务如何阶段汇报
- 如何避免 stdout 过长
- 如何处理中途跑偏
- 如何处理 context 占用过多
- 如何避免 memory 污染

这章适合预留多个动图占位。

### Chapter 20 Claude Code 生态：Hooks、Subagents、MCP、Skills、插件

建议内容：

- Hook 适合做什么
- Subagent 适合做什么
- MCP 何时比 Skill 更合适
- Skill 何时比 MCP 更轻量
- 社区工具案例：`SuperClaude`、`claude-mem`、`Claude Code History Viewer`

## Part 6 MCP、Skills 与插件生态

### Chapter 21 MCP 到底解决了什么问题

建议一定要写清三件事：

- MCP 不是模型
- MCP 不是 Agent 本身
- MCP 是让模型安全、标准化接入外部能力的一种协议层

建议内容：

- MCP 的角色与架构
- 本地 MCP 与远程 MCP
- 常见 MCP 场景：浏览器、数据库、GitHub、设计稿、知识库
- 为什么 MCP 会成为 Agent 生态的公共接口

### Chapter 22 Skills、MCP、插件、脚本的关系

这是另一个非常关键的概念章，建议用一张对比表写清：

- Skill 更偏“复用经验和工作流”
- MCP 更偏“暴露可调用能力”
- 插件更偏“产品层集成体验”
- 脚本更偏“你自己控制的确定性自动化”

### Chapter 23 Skill 开发入门

建议内容：

- Skill 的基本结构
- `SKILL.md` 应该写什么
- 如何减少无关上下文
- 如何把脚本、模板、参考资料组织好
- 如何设计 skill 的触发条件

这里非常适合加入你的 `AgentSkills` 仓库作为案例：

- 用 meta skill 帮忙设计新 skill
- 如何让 skill 既有约束又不过度啰嗦

### Chapter 24 MCP 开发入门

建议内容：

- 从“先安装一个现成 MCP”开始
- 再讲如何写自己的 MCP Server
- 本地调试、权限控制、日志与安全
- 适合做成 MCP 的功能判断标准

## Part 7 进阶篇：多模型、多 Agent、成本与安全

### Chapter 25 多模型组合使用技巧

建议从最有实用价值的组合讲起：

- 强模型做规划，便宜模型做重复执行
- 强模型做关键评审，快模型做探索和试错
- 不同 Agent 前端承担不同角色

建议避免写成“玄学配方”，而是写成决策原则：

- 任务复杂度
- 风险等级
- 可验证性
- token 预算
- 延迟要求

### Chapter 26 Multi-Agent 和 Parallel Agent

建议内容：

- 什么时候适合并行
- 什么时候并行会引入混乱
- 如何给不同 Agent 划清职责
- 汇总 Agent 与执行 Agent 如何协作

### Chapter 27 Token、长任务与成本控制

这一章可以直接承接你的 brainstorm：

- 为什么长 stdout 很贵
- 为什么无脑贴全量日志会让效果变差
- 如何缩短反馈链路
- 如何做阶段性总结
- 如何在不丢关键信息的前提下压缩上下文

### Chapter 28 权限、安全与团队治理

建议内容：

- 默认权限最小化
- 机密信息处理
- 生产环境操作边界
- 第三方 API 和中转商的信任问题
- 团队里如何规范 Agent 的可执行范围

## Part 8 实战案例篇

建议至少准备 5 个案例，每个案例都统一结构：

1. 场景介绍
2. 初始 Prompt
3. Agent 的计划
4. 关键执行过程
5. 验证方式
6. 结果复盘
7. 可迁移经验

建议案例池：

- 接手陌生仓库并完成首次功能修改
- 修一个跨前后端的复杂 bug
- 为遗留项目补测试并顺手清理技术债
- 从 PRD 或 issue 出发实现一个小功能
- 安装并使用一个 MCP，然后开发一个简单 Skill

## Appendix 建议内容

### Appendix A 术语表

- LLM
- Agent
- Tool
- MCP
- Skill
- Context Window
- Memory
- Verification
- Provider

### Appendix B 常用命令与配置片段

- Claude Code 常用指令
- Codex 常用指令
- Cursor / Cline 常见配置项
- Base URL / Token 配置片段

### Appendix C 版本敏感信息表

建议把这些单独维护：

- 模型版本号
- 产品支持矩阵
- 价格和费率
- 插件生态活跃度

## 对你现有 brainstorm 的整合建议

你的 brainstorm 基本都能保留，但建议做三种处理：

### 1. 适合放在主线正文里的内容

- 为什么要用 Agentic Coding
- Agent vs LLM
- 主流 Agent 和主流模型对比
- 快速上手流程
- Prompt 技巧
- 多模型组合
- Token 与上下文管理
- 权限与安全

### 2. 适合做成工具深潜专题的内容

- Claude Code 配置与实践技巧
- `CLAUDE.md`
- permission 绕行策略与风险
- `SuperClaude`、`claude-mem`
- `Claude Code History Viewer`

### 3. 适合做成附录或独立更新页的内容

- 模型具体版本号横评
- 各类中转服务商价格与分组
- 非官方兼容方案的时效性配置细节

如果把第 3 类直接塞进正文，整本教程会很快过时。

## 建议的正文写法节奏

最推荐的阅读体验是：

1. 先讲为什么
2. 再让读者马上跑通
3. 再解释背后的原理
4. 再做产品与模型对比
5. 再讲方法论和避坑
6. 最后再进到 MCP、Skills、多 Agent、安全、成本

这个顺序比“先把所有概念讲完再开始实战”更适合教程型内容。
