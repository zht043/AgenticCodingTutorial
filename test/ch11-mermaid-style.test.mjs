import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";

const CH11_PATH = new URL("../docs/chapters/ch11-memory-context-harness.md", import.meta.url);

test("chapter 11 mermaid diagrams use chapter 2 light styling", async () => {
  const markdown = await fs.readFile(CH11_PATH, "utf8");

  assert.doesNotMatch(
    markdown,
    /style\s+\w+\s+fill:#(?:1a1a2e|2d2d2d)\b/i,
    "ch11 should not use dark Mermaid fills",
  );

  assert.doesNotMatch(
    markdown,
    /classDef\s+\w+\s+fill:#(?:1a1a2e|2d2d2d)\b/i,
    "ch11 should use chapter 2 style light classDef fills",
  );
});
