# Chapter 2 Agent Concepts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite Chapter 2 so it teaches agent fundamentals through a stronger visual narrative while preserving most existing content.

**Architecture:** Rebuild the chapter around a beginner-friendly narrative flow, then distribute the existing memory/tools/planning content across shorter sections with one-purpose diagrams. Keep appendix links for advanced detail, but simplify the main reading experience.

**Tech Stack:** Markdown, Mermaid diagrams, existing chapter and topic links

---

### Task 1: Restructure The Chapter Outline

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Replace the chapter table of contents with a flow that starts from "LLM vs Agent" before diving into components**

- [ ] **Step 2: Move existing durable ideas into the new sequence instead of deleting them**

- [ ] **Step 3: Add transitions that explain why the reader is moving from one section to the next**

### Task 2: Increase Illustration Density

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Replace dense diagrams with smaller, one-purpose diagrams**

- [ ] **Step 2: Add visual comparisons for one-shot LLM, augmented LLM, and looping Agent behavior**

- [ ] **Step 3: Add separate diagrams for memory, tool layers, MCP flow, and planning termination**

### Task 3: Rewrite For Public Readability

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Reduce academic tone and keep paragraphs short**

- [ ] **Step 2: Use concrete coding-agent examples to explain abstract concepts**

- [ ] **Step 3: Keep appendix links, but move heavy detail out of the main path when needed**

### Task 4: Verify Document Integrity

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Review Mermaid syntax and heading anchors for obvious breakage**

- [ ] **Step 2: Check that retained claims still read coherently after reordering**

- [ ] **Step 3: Summarize the final changes for the user**

### Task 5: Deepen The LLM-vs-Agent Explanation

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Reframe plain LLMs with the "brain in a vat" metaphor**

- [ ] **Step 2: Add an open-loop vs closed-loop explanation grounded in feedback control**

- [ ] **Step 3: Add a ReAct subsection that explains reasoning-action-observation as the bridge to agentic behavior**
