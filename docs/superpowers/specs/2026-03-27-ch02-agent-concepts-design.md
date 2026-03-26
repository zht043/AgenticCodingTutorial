# Chapter 2 Agent Concepts Redesign

**Goal:** Rework Chapter 2 into a more visual, public-reader-friendly explanation of how agents work while preserving the chapter's existing core content and practical conclusions.

## Reader

- Primary audience: general readers and beginners who are curious about coding agents
- Secondary audience: technical readers who want a clean mental model before going deeper

## Problems In The Current Chapter

- The chapter contains the right concepts, but it starts with abstractions instead of a concrete intuition readers can immediately visualize.
- Several diagrams try to explain too much at once, so they read like system architecture instead of teaching illustrations.
- Memory, tools, and planning are present, but the narrative jump from "chat model" to "agent" is still too abrupt for non-experts.

## Redesign Direction

### Narrative Spine

Use a progressive sequence that mirrors the visual reference article:

1. Start from what a normal LLM does well
2. Show where a normal LLM falls short
3. Introduce the "augmented LLM" idea
4. Show how an agent becomes a loop instead of a one-shot answer
5. Expand the loop into memory, tools, planning, MCP, and skills
6. End with practical rules for readers using coding agents

### Illustration Strategy

Increase illustration density so each cognitive jump has its own visual. Target roughly 10 lightweight mermaid diagrams rather than a few dense diagrams.

Planned illustration set:

1. One-shot LLM vs looped Agent
2. Why plain LLMs feel smart but still hit walls
3. Augmented LLM to Agent transition
4. Think -> Act -> Observe -> Update loop
5. Agent four-part system map
6. Autonomy spectrum
7. Short-term memory and context window
8. Summary memory and long-task compression
9. Long-term memory and file-based retrieval
10. Tool stack from local CLI to MCP and subagents
11. MCP workflow
12. Planning, verification, and stop conditions

### Content Preservation Rules

- Keep the original chapter's strongest claims and practical guidance wherever possible.
- Prefer moving and rewriting over deleting.
- Reduce jargon and research framing when a simpler everyday explanation works.
- Keep deeper technical details via short summaries plus links to existing topic appendices.

## Chapter Structure

1. Quick misconception check
2. First understand the difference between LLM and Agent
3. Memory: how agents keep context alive
4. Tools, MCP, and Skills: how agents interact with the world
5. Planning: how agents decide, verify, and stop
6. Chapter recap with a few durable operating principles

## Writing Style

- Use shorter sections and more visible signposts
- Keep paragraphs compact
- Favor concrete examples over abstract definitions
- Use illustrations as teaching anchors, not decoration

## Scope Notes

- Keep Chapter 2 self-contained and readable without needing appendix material
- Avoid splitting into a new chapter unless the final length becomes obviously harmful
- If some technical details feel too heavy for the main flow, compress them and point to the topic docs

## Follow-up Refinement

For the subsection "Why LLM is not yet an Agent", strengthen the explanation with:

- A "brain in a vat" metaphor for plain LLMs
- A control-theory framing: open-loop versus closed-loop behavior
- A beginner-friendly explanation of ReAct as the bridge from reasoning-only systems to feedback-driven agents
