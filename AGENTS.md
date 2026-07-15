# Curriculum and MDX Authoring Guidance

These instructions capture the lesson-writing preferences established while developing Day 1. Follow them for every future lesson, especially before asking the user to review presentation details.

## The central educational stance

The learner is a young adult beginner, not a compliance tester. Write like an approachable mentor: direct, warm, concrete, curious, and respectful. Avoid robotic curriculum language, bureaucratic checklists, inflated jargon, and abstract prompts that make the learner guess what is expected.

The central mantra of the course is:

> You are not here to create software. You are here to solve user problems.

Repeat and reinforce this idea throughout the course. A developer is not merely an implementer of requests. The developer must understand who has the problem, when it happens, what pain it creates, and what evidence would show that the pain became smaller.

Users usually do not hand developers a clean problem statement. They often describe the solution they imagine:

```text
“Add a button that sends me a reminder every morning.”
```

That request may hide a different problem: unclear ownership, a badly timed reminder, too many reminders, or a responsibility that is repeatedly forgotten. Treat the request as a hypothesis about a solution, not as a complete product specification.

Teach traditional product thinking explicitly:

- Who is the user?
- What situation are they in?
- What are they trying to accomplish?
- What do they do today?
- What is painful, costly, slow, risky, or repeatedly frustrating?
- What is the smallest intervention worth testing?
- What observable signal would show that the pain decreased?
- What are we deliberately not building yet?

Product judgment is not a fourth track. It is one of the three tracks, while Verification Engineering runs through Product Judgment, Codex Prompting and Debugging, and Technical Build.

## Lesson experience

Start from something familiar and concrete. Give the learner an interaction they recognize before introducing terminology. Use examples from everyday products such as messaging, social posts, maps, banking, video uploads, email, shopping, music, travel, and forms.

Prefer this rhythm:

1. Start with a familiar situation.
2. Ask the learner to predict what will happen.
3. Show the mental model in plain language.
4. Give several concrete examples.
5. Let the learner inspect or describe one real interaction.
6. Ask for evidence, including a safe edge case and a regression check.
7. Ask the learner to explain it back in their own words.

Do not front-load many response boxes. The learner should notice something before being asked to document it. Combine related questions into one meaningful response where possible.

## The five-part app model

Use the model:

```text
user → data → action → rule → feedback
```

Explain why it matters in two ways:

1. It is the first mental map for how the app will eventually be implemented across the browser, client state, server, database, and deployment.
2. It gives the learner a debugging map. When behavior is wrong, ask where reality diverged: did the action happen, did a rule reject it, did data change, was it persisted, did the server return stale data, or did the screen show stale feedback?

Make this purpose explicit. Do not present the model as vocabulary to memorize.

## Verification and debugging

Verification must be embedded in all three tracks, never rendered as a fourth track.

Every meaningful exercise should make the learner:

- predict before meaningful execution;
- define observable acceptance criteria;
- identify what checks are actually available;
- choose a check proportionate to the claim;
- gather evidence before asking for a diagnosis;
- try a safe edge case or deliberate failure where appropriate;
- re-run the normal path as a regression check;
- question whether generated tests or checks are meaningful;
- state what remains unverified;
- explain the result and uncertainty to a mentor.

Use plain language for checkpoints. Avoid compressed jargon such as:

```text
I explained the model, the evidence, the edge case, the regression check, and the remaining uncertainty to a mentor.
```

Prefer:

```text
I explained one app interaction to my mentor, showed what I checked, described what happened, and said what I still do not know.
```

The learner should understand what they are confirming without translating course terminology first.

## Semantic MDX formatting: do not misuse `<pre>`

This is a hard rule:

> Do not put ordinary prose into `<pre>`.

`<pre>` is only for content whose fixed layout is meaningful:

- actual Codex prompts;
- command snippets;
- arrow diagrams and action flows;
- reusable sentence scaffolds;
- text where preserving line structure is the point.

Use semantic, visually styled ordinary MDX for everything else:

- Ordered steps → `<ol>`.
- Questions or examples → `<ul>`.
- Comparisons such as ephemeral/persistent data → Markdown tables.
- Term/definition pairs → `<dl>` with `<dt>` and `<dd>`.
- Label/value examples such as User, Data, Action, Rule, Feedback → a two-column card using ordinary HTML/MDX and bold labels.
- Explanatory summaries → paragraphs or a styled callout.
- Product discovery fields → a two-column card or table.

Before finishing a lesson, scan every fenced block and ask: “Is this actually code, a prompt, a diagram, or a template?” If not, convert it.

Do not solve presentation problems by adding more custom components. Ordinary MDX, lists, tables, `<details>`, `<aside>`, and CSS are preferred.

## Visual and layout preferences

Use visuals when they materially clarify the concept. For app lessons, original fictional UI mockups are preferred over copied screenshots or branded interfaces. A visual should sit next to the explanation it illustrates, not in a detached gallery far away from the relevant text.

Keep images responsive:

- They must stay within the lesson column.
- They must preserve aspect ratio.
- They must not cause horizontal scrolling.
- Use descriptive alt text and a short caption that says what the learner should notice.

Visual examples should teach a state change, feedback state, persistence difference, stale data problem, or inconsistency—not merely decorate the page.

Use restrained styling:

- White backgrounds are preferred for cards, tables, and prompt boxes.
- Use darker borders and accent colors for hierarchy.
- Avoid pale blue/green fills that make the page look noisy or washed out.
- Use padding, line spacing, dividers, and bold labels to improve scanning.
- Tables should be readable two-column comparisons, not dense text dumps.
- Responsive layouts must collapse cleanly on small screens.

## Track-specific guidance

### Product Judgment

Introduce why product thinking matters before asking the learner to perform it. Do not ask the learner to invent features while studying familiar products. Separate:

```text
what someone requested
what problem they actually have
what pain is worth reducing
what smallest change is worth testing
```

### Codex Prompting and Debugging

Codex is a discussion partner and helper, not the product owner. The learner owns the problem definition, success criteria, test design, review, and decision to keep the work.

Require evidence before debugging. Teach the learner to record expected behavior, actual behavior, reproduction steps, visible evidence, and uncertainty before asking Codex for a diagnosis.

### Technical Build

Add one technical mental model at a time. Explain it in plain English before asking for syntax. When there is no code task, say so honestly and use manual observation as the appropriate evidence instead of inventing automated commands.

When introducing React, explain components as the answer to a visible interface problem: a growing screen becomes easier to understand and reuse when it is split into named pieces with focused jobs. Show what data a component receives and how it reports an action before introducing library vocabulary. A familiar open-source example such as React DayPicker may illustrate how a reusable component handles rich interaction states—range selection, disabled dates, month navigation, and keyboard focus—but do not make a beginner install a component library unless the lesson explicitly needs it. The learner should understand the component idea first.

## Product-design artifacts and agent workflow

The course is teaching a product-thinking workflow, not merely a coding workflow. For a new product lesson, guide the learner through this order:

1. Start with the real user problem, situation, current workaround, and pain.
2. Define the smallest useful workflow and today’s explicit scope.
3. Map users, data, actions, rules, and feedback.
4. Define observable acceptance criteria and make a prediction.
5. Ask ChatGPT to brainstorm possible UX mockups or flows from the user actions.
6. Have ChatGPT draft a basic PRD and high-level design document.
7. Require the learner to review and approve those AI-generated documents before using them.
8. Ask ChatGPT to create an implementation plan with small milestones, visible output after every milestone, and checks for every milestone.
9. Give the approved documents and plan to Codex.
10. Ask Codex to implement only the next milestone, run its checks, perform the planned manual check, and report evidence.
11. Ask Codex to critically review test coverage, happy cases, edge cases, weak checks, and remaining uncertainty.
12. At the end, ask Codex to compare the actual implementation with the PRD, design document, and implementation plan, identifying complete, partial, missing, extra, and unverified work.
13. The learner reviews Codex’s evidence and output before accepting the work.

### Why the artifacts exist

The PRD and high-level design are not paperwork added for its own sake. Writing them forces the learner to think through the user experience and implementation before code makes decisions expensive to change. Changes are cheapest before any code is written.

These files serve two audiences in sequence:

- ChatGPT drafts them;
- the learner critically reviews and approves them;
- Codex reads the approved files as critical project context.

Future Codex agents should be able to understand the problem, intended users, chosen experience, scope, constraints, and important decisions without reconstructing the product from scattered code. Never present AI-generated documents as automatically trustworthy. Human approval comes before agent execution.

Save these artifacts in the project when appropriate:

```text
docs/product-requirements.md
docs/high-level-design.md
docs/implementation-plan.md
```

The implementation plan should emphasize visible milestones. After each milestone, the learner should be able to see the product taking shape. Avoid plans that hide all visible output until the end or ask Codex to perform a large invisible refactor first.

Do not create duplicate planning prompts. If ChatGPT has already created the reviewed implementation plan, Codex should execute the next milestone rather than inventing a second whole-product plan. Codex’s execution prompt should identify the milestone, visible result, smallest change, focused checks, regression checks, manual check, evidence, and remaining uncertainty.

### ChatGPT, Codex, and learner responsibilities

Keep the division of labor explicit:

- ChatGPT: brainstorm UX options, help draft the PRD, help draft the high-level design, and suggest the milestone implementation plan;
- learner: understand the user problem, choose the UX direction, review and approve the artifacts, define success, and decide whether the result solves the problem;
- Codex: read the approved context, implement one milestone at a time, create and run development-time tests, inspect coverage, reason through edge cases, debug from evidence, and audit implementation against the plan.

Codex is an additional reviewer, not the final authority. The learner should review Codex’s report, logs, test results, and resulting changes before accepting them. The learner should not be forced to reproduce a complete test-suite audit manually; Codex should perform the critical coverage analysis and explain its findings.

## Testing, regressions, and forward momentum

Explain tests to a beginner as development-time code that an agent creates and runs to check correctness. Tests are not normally user-facing runtime features.

Introduce both levels plainly:

- a unit test checks one small behavior in isolation, such as rejecting a blank chore name;
- an end-to-end test checks a complete user journey, such as adding two chores and marking only one complete.

Introduce **regression** as an unintended break in behavior that previously worked. Make the emotional and practical value explicit: without tests, vibe coding can become whack-a-mole—two steps forward and one step back. Focused tests preserve progress, provide early warnings, and let the learner keep moving forward with more confidence.

Do not teach tests as a guarantee that the app has no bugs. Teach them as a safety net. Ask Codex to:

- map every required behavior to a meaningful test or check;
- inspect available coverage rather than only reporting a percentage;
- identify checks that could pass for the wrong reason;
- separate happy-case checks from edge-case checks;
- think through invalid input, repeated actions, missing choices, empty data, long values, wrong-item selection, stale UI, and refresh behavior where relevant;
- report what passed, failed, was not run, and remains unverified.

Do not force a new testing framework or external library into a beginner exercise without approval. Use the existing project checks when available, and use manual browser checks for visual behavior when that is the proportionate evidence.

## Interaction patterns and IDs

Use only the established interaction patterns unless the lesson truly cannot be expressed otherwise:

- `<Track>` for Product Judgment, Codex Prompting and Debugging, and Technical Build;
- `<Response>` for predictions, product analysis, prompts, evidence, explain-backs, and uncertainty;
- `<Checkpoint>` for learner-controlled milestones;
- native `<details>` and `<summary>` for hints and progressive disclosure;
- ordinary MDX for the rest.

Do not create a fourth Verification Engineering track.

Every `Response` and `Checkpoint` ID must be stable, descriptive, and globally unique. Audit IDs across the entire lesson collection, not only the new file.

## Final review checklist

Before handing off a lesson:

- Read it as a beginner in their early twenties. Does it sound like a person helping them?
- Does it explain why the lesson matters before asking for work?
- Is the product/user-problem stance explicit?
- Is the mantra “You are not here to create software. You are here to solve user problems.” reinforced?
- Are user requests distinguished from underlying pain and proposed solutions?
- Are examples concrete and plentiful enough to make the idea visible?
- Are images placed beside the explanation they support?
- Is every prose block semantically formatted instead of placed in `<pre>`?
- Are ordered sequences ordered lists and comparisons tables?
- Are acceptance criteria observable?
- Is prediction required before meaningful execution?
- Are available checks identified?
- Is evidence gathered before debugging?
- Is there a focused check, safe edge case, and regression check where appropriate?
- Does the learner review whether checks are meaningful?
- Is remaining uncertainty named?
- Is the mentor pause understandable without jargon?
- Is there a final completion checkpoint?
- Are there exactly three tracks and no verification fourth track?
- Do `npm run check` and `npm run build` pass?
- Are images responsive and free of horizontal overflow?
