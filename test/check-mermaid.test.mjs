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

test("extractMermaidBlocks returns multiple diagrams in one file", () => {
  const markdown = [
    "Intro",
    "",
    "```mermaid",
    "graph LR",
    "A --> B",
    "```",
    "",
    "text",
    "",
    "```mermaid",
    "flowchart TB",
    "X --> Y",
    "```",
  ].join("\n");

  const blocks = extractMermaidBlocks(markdown);

  assert.equal(blocks.length, 2);
  assert.equal(blocks[0].line, 3);
  assert.equal(blocks[1].line, 10);
});
