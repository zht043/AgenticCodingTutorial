# Ch02 / Ch05 Agent Four-Part Restructure Plan

> **Execution mode:** Inline execution in this session

**Goal:** Rebuild Chapter 2 around the reader-facing formula `Agent = LLM + Planning + Tools + Memory`, then narrow Chapter 5 so it focuses on mechanism and execution-layer detail instead of repeating the conceptual explanation.

**Files:**
- Modify: `/Users/zht/Project/AgentWorkSpace/AgenticCodingTutorial/docs/chapters/ch02-concepts.md`
- Modify: `/Users/zht/Project/AgentWorkSpace/AgenticCodingTutorial/docs/chapters/ch05-agent-mechanics.md`

## Task 1: Rebuild Ch02 Around The Four-Part Formula

- [ ] Replace the current Chapter 2 table of contents with a flow that centers a single large section: `Agent = LLM + Planning + Tools + Memory`.
- [ ] Keep the existing `LLM 为什么不等于 Agent` opening because it already gives the right intuition bridge from one-shot LLM to looping agent.
- [ ] Expand Section 2 so it becomes the main teaching container with these subsections:
  - `2.1 一个够用的总公式`
  - `2.2 四部分如何组成一个闭环`
  - `2.3 LLM：大脑，但不是整个 Agent`
  - `2.4 Planning：由 LLM 驱动的规划与决策`
  - `2.5 Tools：由 LLM 选择和调用的行动能力`
  - `2.6 Memory：由 LLM 读取和写回的状态系统`
  - `2.7 关键澄清：Planning / Tools / Memory 也离不开 LLM`
- [ ] Preserve the strongest current explanations, but move duplicate material from old Sections 3-5 into the relevant Section 2 subsections instead of repeating them later.

## Task 2: Deepen The Four Component Explanations

- [ ] In the `LLM` subsection, add a compact explanation of large language model fundamentals:
  - next-token prediction
  - why it still looks like reasoning
  - why “大脑” is accurate but incomplete
- [ ] In the `Planning` subsection, make the hybrid model explicit:
  - outer harness supplies loop, stop conditions, guardrails
  - inner LLM supplies situational reasoning and next-step selection
  - clarify ReAct versus plan-then-execute
- [ ] In the `Tools` subsection, explain that tools do not “replace” the LLM:
  - the LLM decides whether to call a tool
  - the harness executes the tool
  - the result goes back to the LLM for the next decision
  - keep Function Calling, MCP, and Skills in one coherent ladder
- [ ] In the `Memory` subsection, explain that memory is not magical persistence:
  - context window as working memory
  - summaries as compression
  - files / retrieval as longer-term memory
  - the LLM must read memory before it can use it

## Task 3: Refocus Ch05 On Execution Mechanics

- [ ] Keep Chapter 5 as the “how it runs” chapter, not the “what each component means” chapter.
- [ ] Trim repeated conceptual definitions that are now covered in Ch02.
- [ ] Reframe the chapter intro so it explicitly says:
  - Ch02 explains the four-part model
  - Ch05 explains the wrapper, payload, loop, permissions, and failure modes
- [ ] Keep and sharpen the execution-layer material:
  - Agentic Loop
  - access boundaries
  - tool categories in practice
  - session/context decay
  - long-document failure patterns
- [ ] Add or strengthen a pointer to `/Users/zht/Project/AgentWorkSpace/AgenticCodingTutorial/docs/topics/topic-agent-llm-internals.md` as the code / pseudocode deep dive.

## Task 4: Verify Flow And Coherence

- [ ] Read Chapter 2 top-to-bottom and confirm it now answers the user’s core question in one place.
- [ ] Read Chapter 5 top-to-bottom and confirm it no longer competes with Ch02 for the same explanatory space.
- [ ] Check heading anchors, Mermaid blocks, and chapter links for obvious breakage.
- [ ] Review the diff to ensure only the intended chapter files plus this plan file changed.
