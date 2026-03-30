# Chapter 6 · 📖 基础概念与术语

> 🎯 **定位**：一页"边读边查"的术语速查表。遇到不懂的词就回这里查，不需要从头背。
>
> 📌 **和其他章节的关系**：Prompt / Session / Context / 三层分离 / 文件体系的**实操讲解**在 [Ch2 · 0.5 节](./ch02-agent-first-practice.md#05-在开始实战之前认识你的工作环境)；MCP / Skill / Hook / Command / Plugin 的**分层与安装**在 [Ch3](./ch03-first-extension-setup.md)。本章只做定义速查，不重复展开。

---

## 核心术语

| # | 术语 | 一句话定义 | 类比 | 详讲 |
|:---:|------|----------|------|------|
| 1 | **LLM** | 超大规模"文字接龙"引擎——给它开头，它帮你续写 | 学过海量文本的接龙选手 | [Ch07](./ch07-llm-to-agent.md)、[Ch09](./ch09-llm-reasoning-basics.md) |
| 2 | **Prompt** | 你对 AI 说的话——不管长短，全都算 Prompt | 在饭店点菜时说的那句话 | [Ch10](./ch10-planning.md) |
| 3 | **Context** | 当前这一轮模型**实际看到的所有信息**的总和 | 摊在桌上的全部材料 | [Ch2 §0.5](./ch02-agent-first-practice.md#a-promptsessioncontext-的区别)、[Ch11](./ch11-memory-context-harness.md) |
| 4 | **Token** | AI 的阅读/写作计费单位（1 中文字 ≈ 1-2 token，1 英文词 ≈ 1 token） | 手机流量 | [Ch20](./ch20-token-economics.md) |
| 5 | **Agent** | LLM + 工具 + 记忆 + 规划 = 不只会说话，还会**动手**的执行系统 | 坐在你旁边能真正干活的实习生 | [Ch07](./ch07-llm-to-agent.md)、[Ch08](./ch08-agent-formula.md) |
| 6 | **API / API Key** | API = 程序间通信的窗口；API Key = 你的身份证 + 钱包 | 外卖窗口 + 门禁卡 | [Ch01](./ch01-quickstart.md) |
| 7 | **CLI / IDE / App** | Agent 的三种使用形态：命令行 / 编辑器插件 / 桌面应用 | 同一部电影在影院/电视/手机上看 | — |
| 8 | **Spec** | 给 Agent 的"施工图纸"——明确要做什么、不做什么、怎么验证 | 装修前的设计图 | [Ch10](./ch10-planning.md) |
| 9 | **Tool Calling** | Agent 输出一条结构化指令，让外部系统替它执行真实操作 | 老板下指令，秘书跑腿执行 | [Ch12](./ch12-tools.md) |
| 10 | **Session** | 一段连续对话及其上下文生命周期 | 同一个会议室里的连续讨论 | [Ch11](./ch11-memory-context-harness.md) |

## 扩展层术语

| 术语 | 一句话定义 | 类比 | 详讲 |
|------|----------|------|------|
| **MCP** | 标准化的工具连接协议（Agent ↔ 外部能力） | USB-C 接口 | [Ch14](./ch14-mcp.md) |
| **Skill** | 可复用的方法论手册（教 Agent 怎么做） | 操作手册 | [Ch13](./ch13-skill.md) |
| **Hook** | 特定事件时机自动触发的短动作 | 自动感应开关 | [Ch15](./ch15-hook-plugin.md) |
| **Command** | 手动触发的斜杠命令入口 | 快捷按钮 | [Ch15](./ch15-hook-plugin.md) |
| **Plugin** | 把 Skill + MCP + Hook + Command + 配置打包的安装包 | App Store 里的一键安装包 | [Ch15](./ch15-hook-plugin.md) |

## 进阶术语

| 术语 | 中文 | 一句话定义 | 类比 |
|------|:---:|----------|------|
| **Hallucination** | 幻觉 | AI 一本正经地编造不存在的事实 | 信口开河的同事 |
| **KV Cache** | 键值缓存 | 模型推理时的加速中间状态，不等于长期记忆 | 草稿纸，不是归档系统 |
| **Harness** | 控制面 | 把规则、上下文、工具、验证和恢复组织起来的外层系统 | 马的缰绳和车架 |
| **Compaction** | 压缩整理 | 用摘要代替完整历史，释放上下文空间 | 把会议纪要压成行动项 |
| **CoT** | 思维链 | 让模型把中间推理步骤显式写出来 | 做数学题要写过程 |
| **ReAct** | 推理+行动 | 把思考、行动、观察接成同一个循环 | 边想边试边看 |
| **RAG** | 检索增强生成 | 先查资料再回答，减少编造 | 开卷考试 |
| **Embedding** | 嵌入 | 把文本变成一串数字（向量），用于语义搜索 | 给每段文字打 GPS 坐标 |
| **Inference** | 推理 | 模型接收输入、产出输出的过程 | 学生拿到考题后答题 |
| **System Prompt** | 系统提示 | 预设给 AI 的角色说明书，用户看不到但一直生效 | 上班前的晨会 |
| **Fine-tuning** | 微调 | 用特定数据对模型做专项培训 | 入职后的岗前培训 |
| **Agentic Coding** | 智能体编程 | 用 AI Agent 协助或驱动编程——**本教程的核心主题** | 你指挥 AI 写代码 |

## 常见型号速查

| 厂商 | 代表模型 | 一句话印象 |
|:---:|---------|----------|
| Anthropic | Claude Opus / Sonnet | 当前 Coding Agent 的标杆搭档 |
| OpenAI | GPT-5.4 / o3 | 全能选手，生态最大 |
| Google | Gemini 3.1 Pro | 超长上下文，免费额度友好 |
| 深度求索 | DeepSeek-V3.2 | 开源性价比之王 |
| 阿里云 | Qwen3-Max | 国产千问系列旗舰 |

---

> 💡 更深入的概念讲解从下一章开始：[Ch07 · 从 LLM 到 Agent](./ch07-llm-to-agent.md)。

---

<div align="center">

[📚 返回目录](../../README.md#tutorial-contents) | [⬅️ 上一章：Ch05 Codex 实用技巧](./ch05-codex-tips.md) | [➡️ 下一章：Ch07 从 LLM 到 Agent](./ch07-llm-to-agent.md)

</div>
