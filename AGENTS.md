# AGENTS.md

本文件定义本仓库内 Agent 的默认工作约束。

## Mermaid 校验默认规则

- 如果用户**没有明确要求**执行 Mermaid 渲染校验，默认**不要主动运行**任何 Mermaid 渲染校验。
- 这包括但不限于：
  - `npm run lint:mermaid`
  - `npm run check:docs`
  - `node scripts/check-mermaid.mjs`
  - 任何等价的 Mermaid 渲染 / 截图 / SVG 生成校验脚本
- 即使修改了 Mermaid 图，本仓库内也应默认**跳过**这类渲染校验，除非用户明确说要做 Mermaid 校验、文档渲染校验，或明确要求验证 Mermaid 图是否可渲染。

## 说明

- 默认可以继续做常规的内容检查、结构检查、文本搜索和必要的代码/文档修改。
- 如果是否执行某个命令存在歧义，只要它本质上属于 Mermaid 渲染校验，就默认不执行。
