# Agentic Coding 教程初稿

写作状态：`v0.1 初稿`

这份初稿的目标不是把每一章都写到最终发布质量，而是先把整本教程的主线、语气、知识结构和实践落点一次性搭起来。你后面继续扩写时，只需要沿着这一版补案例、补图、补版本敏感信息、补动图即可。

## 阅读建议

- 如果你是第一次接触 Agentic Coding，先读 Part 0 和 Part 1。
- 如果你已经在用 `Cursor`、`Claude Code`、`Codex` 或 `Cline`，建议直接从 Part 2 和 Part 4 开始。
- 如果你最关心 `Claude Code`、`MCP`、`Skills`、多模型协作、成本和安全，重点看 Part 5 到 Part 7。
- 如果你准备把这套方法带进团队，Part 7 和 Appendix 比产品对比更重要。

## 全书目录

- [Part 0 引言与趋势](./part-0-introduction.zh-CN.md)
- [Part 1 快速上手](./part-1-quickstart.zh-CN.md)
- [Part 2 Agent 心智模型](./part-2-mental-model.zh-CN.md)
- [Part 3 工具与模型地图](./part-3-tools-and-models.zh-CN.md)
- [Part 4 方法论](./part-4-methodology.zh-CN.md)
- [Part 5 Claude Code 深潜](./part-5-claude-code.zh-CN.md)
- [Part 6 MCP、Skills 与插件生态](./part-6-mcp-skills.zh-CN.md)
- [Part 7 多模型、多 Agent、成本与安全](./part-7-advanced.zh-CN.md)
- [Part 8 实战案例](./part-8-case-studies.zh-CN.md)
- [Appendix 附录](./appendix.zh-CN.md)

## 写作主线

这套教程故意不按“先罗列产品，再罗列功能，再罗列命令”的方式来写。那种结构适合百科，不适合教程。教程必须先帮读者建立判断力，再帮读者形成操作习惯，最后才是扩展能力。

因此全书采用以下主线：

1. 为什么 Agentic Coding 会替代大量“古法编程”动作。
2. 如何在 30 分钟内跑通第一次真正有价值的 Agent 工作流。
3. Agent、LLM、Tool、MCP、Skill 到底各自负责什么。
4. 主流工具和主流模型该如何区分、对比和选择。
5. 真正决定上限的不是模型名，而是 Prompt、Context、Verification。
6. 生态扩展、插件、MCP、Skills、多模型协作、安全治理如何进入工程化阶段。

## 主线工具与对照工具

本教程会以 `Claude Code` 作为主线工具，原因很简单：它的叙事最接近“终端里的工程代理”，也最适合把 Agentic Coding 的核心闭环写清楚。对照工具主要包括：

- `Codex`
- `Cursor`
- `Cline`
- `GitHub Copilot coding agent`
- `Trae` 与其他区域性/社区工具

这里的重点不是评测谁第一，而是帮助读者建立一个稳定判断框架：

- 你到底是在选模型，还是在选 Agent 产品？
- 你到底是在买“生成能力”，还是在买“任务闭环能力”？
- 你更缺的是推理能力、上下文治理，还是与真实开发环境连接的能力？

## 版本敏感说明

产品入口、模型版本、价格、费率组、支持矩阵变化很快。初稿正文只保留相对稳定的判断原则，把高频变化的信息放到附录或独立矩阵中维护。正文里如果提到某些命令或配置，默认以官方文档为准，尤其是：

- 安装方式
- 登录方式
- 账号套餐与可用性
- 某个模型是否在某个 Agent 中可用
- 第三方兼容 API 是否仍稳定

## 初稿后续建议

这一版写完之后，最值得优先补的是：

1. 每个 Part 至少一张总图。
2. Part 1、Part 5、Part 6 各补 1 到 2 个带截图的完整流程。
3. 把版本敏感信息独立成表，避免正文迅速过时。
4. 把 Part 8 的案例补成“可复制提示词 + 执行日志 + 复盘”格式。
