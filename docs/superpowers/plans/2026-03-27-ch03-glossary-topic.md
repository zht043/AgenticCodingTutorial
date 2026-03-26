# Ch03 Glossary Topic Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Demote the glossary from the main chapter flow into a standalone topic that Chapter 2 links to on demand.

**Architecture:** Keep the glossary content available as a dedicated topic page, update the main reading flow so Chapter 2 leads directly to Chapter 4, and preserve existing glossary chapter links with a short compatibility redirect page. This keeps the glossary easy to discover without forcing every reader through a dictionary chapter.

**Tech Stack:** Markdown, existing chapter navigation, README table and reader-guide links

---

### Task 1: Create The New Topic Entry

**Files:**
- Create: `docs/topics/topic-glossary.md`
- Modify: `docs/chapters/ch03-glossary.md`

- [ ] **Step 1: Copy the glossary body into the new topic page**

- [ ] **Step 2: Rewrite the old chapter file as a short compatibility page that points readers to the new topic location**

- [ ] **Step 3: Keep the old path valid so existing links do not break**

### Task 2: Rewire Mainline Reading Flow

**Files:**
- Modify: `README.md`
- Modify: `docs/chapters/ch02-concepts.md`
- Modify: `docs/chapters/ch04-first-practice.md`

- [ ] **Step 1: Remove the glossary from the main system-chapter ladder in README and surface it under topics / quick reference**

- [ ] **Step 2: Update reader routes so beginners use the glossary as a companion reference while reading Chapter 2 instead of as a required stop**

- [ ] **Step 3: Change Chapter 2 and Chapter 4 navigation so the main path becomes Ch01 -> Ch02 -> Ch04**

### Task 3: Add Inline Chapter 2 Discovery

**Files:**
- Modify: `docs/chapters/ch02-concepts.md`

- [ ] **Step 1: Add a short callout near the start that points unfamiliar readers to the glossary topic**

- [ ] **Step 2: Add 1-2 inline glossary links at jargon-dense points so the topic is discoverable without interrupting the chapter narrative**

### Task 4: Verify Link Integrity

**Files:**
- Verify: `README.md`
- Verify: `docs/chapters/ch02-concepts.md`
- Verify: `docs/chapters/ch03-glossary.md`
- Verify: `docs/chapters/ch04-first-practice.md`
- Verify: `docs/topics/topic-glossary.md`

- [ ] **Step 1: Search for remaining places that still imply glossary is a mandatory Chapter 3 stop**

- [ ] **Step 2: Review the updated links and bottom navigation for obvious breakage**

- [ ] **Step 3: Summarize the new reading flow for the user**
