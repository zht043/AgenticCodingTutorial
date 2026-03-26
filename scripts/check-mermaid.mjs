import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { renderMermaid } from "@mermaid-js/mermaid-cli";
import fg from "fast-glob";
import puppeteer from "puppeteer";

const DEFAULT_PATTERNS = ["README.md", "docs/**/*.md"];
const MERMAID_FENCE = /^```mermaid[^\n]*\n([\s\S]*?)^```[ \t]*$/gm;

export function extractMermaidBlocks(markdown) {
  const blocks = [];

  for (const match of markdown.matchAll(MERMAID_FENCE)) {
    const code = match[1].trim();
    const offset = match.index ?? 0;
    const line = markdown.slice(0, offset).split("\n").length;

    blocks.push({ code, line });
  }

  return blocks;
}

async function collectMermaidBlocks(patterns = DEFAULT_PATTERNS) {
  const files = await fg(patterns, { onlyFiles: true });
  const blocks = [];

  for (const file of files) {
    const markdown = await fs.readFile(file, "utf8");
    for (const block of extractMermaidBlocks(markdown)) {
      blocks.push({ file, ...block });
    }
  }

  return blocks;
}

async function validateBlock(browser, block) {
  await renderMermaid(browser, block.code, "svg", {
    viewport: { width: 800, height: 600, deviceScaleFactor: 1 },
    mermaidConfig: { theme: "default" },
  });
}

async function main() {
  const blocks = await collectMermaidBlocks();

  if (blocks.length === 0) {
    console.log("No Mermaid diagrams found.");
    return;
  }

  const failures = [];
  const browser = await puppeteer.launch({
    headless: "shell",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const block of blocks) {
      try {
        await validateBlock(browser, block);
      } catch (error) {
        failures.push({
          file: block.file,
          line: block.line,
          message: error instanceof Error ? error.message : String(error),
        });
      }
    }
  } finally {
    await browser.close();
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`${failure.file}:${failure.line} ${failure.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Checked ${blocks.length} Mermaid diagram(s): rendered successfully.`);
}

const isCliEntrypoint =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isCliEntrypoint) {
  await main();
}
