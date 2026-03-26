# Mermaid Validation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an automated Mermaid validation workflow for markdown docs in this repository.

**Architecture:** Use a small Node-based script to scan `README.md` and `docs/**/*.md`, extract fenced `mermaid` blocks, and parse them with Mermaid. Keep rendering as an optional `--render` path that shells out to `mmdc`, so fast syntax validation stays lightweight while full render checks remain available when needed.

**Tech Stack:** Node.js, built-in `node:test`, Mermaid, fast-glob, optional Mermaid CLI

---

### Task 1: Add Test Coverage First

**Files:**
- Create: `test/check-mermaid.test.mjs`

- [ ] **Step 1: Write tests for fenced Mermaid block extraction and line-number reporting**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { extractMermaidBlocks } from "../scripts/check-mermaid.mjs";

test("extractMermaidBlocks finds mermaid fences and line numbers", () => {
  const markdown = [
    "# Title",
    "",
    "```mermaid",
    "flowchart TD",
    "A --> B",
    "```",
    "",
    "```js",
    "console.log('ignore')",
    "```",
  ].join("\n");

  const blocks = extractMermaidBlocks(markdown);

  assert.equal(blocks.length, 1);
  assert.equal(blocks[0].line, 3);
  assert.match(blocks[0].code, /flowchart TD/);
});
```

- [ ] **Step 2: Run tests to confirm they fail before implementation exists**

Run: `node --test test/check-mermaid.test.mjs`
Expected: FAIL with module export or file-not-found error for `scripts/check-mermaid.mjs`

### Task 2: Implement The Validator

**Files:**
- Create: `scripts/check-mermaid.mjs`
- Modify: `package.json`

- [ ] **Step 1: Implement `extractMermaidBlocks` and markdown scanning**

```js
export function extractMermaidBlocks(markdown) {
  // return [{ code, line }]
}
```

- [ ] **Step 2: Implement a CLI entrypoint that scans `README.md` and `docs/**/*.md`, parses each block, and exits nonzero on failure**

Run: `node scripts/check-mermaid.mjs`
Expected: either `Checked X Mermaid diagrams` or a nonzero exit with file/line diagnostics

- [ ] **Step 3: Add npm scripts for test, lint, and optional render**

```json
{
  "scripts": {
    "test": "node --test",
    "lint:mermaid": "node scripts/check-mermaid.mjs",
    "render:mermaid": "node scripts/check-mermaid.mjs --render",
    "check:docs": "npm run lint:mermaid"
  }
}
```

### Task 3: Add Repository Plumbing

**Files:**
- Modify: `.gitignore`
- Optional Create: `.github/workflows/docs-mermaid.yml`

- [ ] **Step 1: Ignore `node_modules/` so local installs stay out of git**

```gitignore
node_modules/
```

- [ ] **Step 2: Add a lightweight CI workflow that runs Mermaid lint on push and pull request**

```yaml
name: docs-mermaid
```

### Task 4: Verify End To End

**Files:**
- Modify: `package-lock.json`

- [ ] **Step 1: Install dependencies**

Run: `npm install`
Expected: lockfile created, dependencies installed successfully

- [ ] **Step 2: Re-run tests**

Run: `npm test`
Expected: PASS

- [ ] **Step 3: Run Mermaid lint across the docs**

Run: `npm run lint:mermaid`
Expected: PASS or actionable Mermaid syntax failures with file/line numbers
