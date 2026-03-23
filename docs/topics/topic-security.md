---
> 📚 **Part IV · 进阶专题** | [← 返回专题目录](../README.md#part-iv--进阶专题--深度参考资料库27-篇)
---

# Chapter 12 · 信任边界 — Agent 安全、权限与合规

> 目标：理解 Agent 的安全风险面，学会设计权限模型和安全护栏——让 Agent 强大但可控。

**状态：规划中**

---

## 章节规划

### 1. 权限模型解析

- Allow / Ask / Deny 评估顺序
- Workspace 隔离 vs Endpoint 隔离
- bypass 模式的风险

### 2. 真实漏洞案例剖析

7 个已公开的 CVE/GHSA 漏洞：
- CVE-2025-59536：信任提示前的命令执行（CVSS 8.7）
- CVE-2026-21852：环境变量 API Key 泄漏
- CVE-2025-66032：Shell 解析绕过（CVSS 9.8）
- CVE-2026-24887：Find 命令执行绕过（CVSS 8.8）
- CVE-2026-24053：ZSH clobber 目录绕过（CVSS 7.7）
- CVE-2026-24052：WebFetch 域名验证缺陷
- CVE-2025-59829：Deny 规则符号链接绕过（CVSS 6.5）

### 3. Prompt 注入与供应链攻击

- 36% MCP Skills 存在漏洞（Snyk 数据）
- RAG 语言污染与间接注入
- 恶意 MCP Server 风险

### 4. 风险评估矩阵

- 哪些任务高危（CI/CD 执行、数据迁移、生产环境操作）
- 哪些任务安全（代码阅读、测试生成、文档）
- 风险分级框架（低/中/高）

### 5. 安全护栏设计

- Deny rules 最佳实践
- Sandbox 配置
- 审计日志（OpenTelemetry events）
- 最小权限原则的工程落地

### 6. 事件响应工作流

- 发现 Agent 越权行为后的处置流程
- 回滚策略
- 团队通知与复盘

### 7. 合规考量

- 数据驻留与隐私
- 代码审计追溯
- 企业环境下的 Agent 治理

> 内容来源：`deep-research-report.md` · `2026 Coding Agent 深度研究报告.md` · `deep-research-report-5.md`

---

上一章：[Chapter 11 · 多 Agent 协作](../ch11-multi-agent/part-11-multi-agent.md)
下一章：[Chapter 13 · 进阶实战案例](../ch13-advanced-cases/part-13-advanced-cases.md)
