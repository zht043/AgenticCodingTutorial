import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";

const CH04_PATH = new URL("../docs/chapters/ch02-agent-first-practice.md", import.meta.url);

test("chapter 4 mermaid diagrams use light backgrounds for readable labels", async () => {
  const markdown = await fs.readFile(CH04_PATH, "utf8");

  assert.doesNotMatch(
    markdown,
    /style\s+\w+\s+fill:#2d2d2d\b/i,
    "ch4 should not use dark node fills that hide text in Mermaid diagrams",
  );
});
