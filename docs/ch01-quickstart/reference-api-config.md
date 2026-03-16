# 附录：各工具 API 配置详解

> 本文是 [Chapter 1](./part-1-quickstart.md) 的扩展附录。主文档仅展示 Claude Code 配置，本附录补充其它工具。

---

## 通用概念

| 参数 | 作用 | 类比 |
|------|------|------|
| **Base URL** | API 请求发到哪台服务器 | 网站地址 |
| **API Key** | 身份认证 + 计费 | 门禁卡 |

> ⚠️ 永远不要把 API Key 提交到 Git 仓库。

---

## Codex CLI

**环境变量：**
```bash
export OPENAI_BASE_URL="https://your-provider.com/v1"
export OPENAI_API_KEY="sk-your-key"
codex
```

**配置文件（推荐）：**

`~/.codex/config.toml`：
```toml
model = "gpt-5-codex"
model_provider = "openai"
base_url = "https://your-provider.com/v1"
```

`~/.codex/auth.json`：
```json
{ "OPENAI_API_KEY": "sk-your-key" }
```

---

## Cursor

GUI 配置：Settings → Models → Add Model → 填入 Base URL 和 API Key。

---

## OpenCode

`~/.config/opencode/opencode.json`：
```json
{
  "provider": {
    "anthropic": { "endpoint": "https://your-provider.com/v1" }
  }
}
```

`~/.local/share/opencode/auth.json`：
```json
{ "anthropic": { "api_key": "sk-your-key" } }
```

启动后 `/models` 选择模型。

---

## Gemini CLI

默认使用 Google 账号免费额度。如需 API Key：
```bash
export GEMINI_API_KEY="your-key"
gemini
```

---

## 中转服务示例（云雾 API）

| 工具 | Base URL |
|------|----------|
| Claude Code | `ANTHROPIC_BASE_URL="https://yunwu.ai"` |
| Codex CLI | `base_url = "https://yunwu.ai/v1"` |
| OpenCode | `"endpoint": "https://yunwu.ai/v1"` |

> 图文教程：[Codex 接入](https://yunwu.apifox.cn/doc-7422014) · [OpenCode 接入](https://yunwu.apifox.cn/doc-8105901)

---

返回：[Chapter 1](./part-1-quickstart.md)
