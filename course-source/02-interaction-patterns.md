# Interaction-Lite MDX Patterns

This file defines how to turn the curriculum into a guided MDX workbook without building a miniature LMS.

## Principle

Most lesson content should remain ordinary MDX. Add interactivity only when it asks the learner to:

```text
predict
choose
write
record evidence
verify
explain
```

The course should still be understandable if the custom interactive components are removed.

## Allowed Custom Components

### `Track`

Use `Track` to distinguish the three daily tracks.

```mdx
<Track type="product" title="Product Judgment">
  ...lesson content...
</Track>

<Track type="codex" title="Codex Prompting and Debugging">
  ...lesson content...
</Track>

<Track type="technical" title="Technical Build">
  ...lesson content...
</Track>
```

Do not create a fourth Verification Engineering track. Put verification activities inside all three tracks.

### `Response`

Use one general text-response component for predictions, acceptance criteria, prompt drafts, verification plans, bug reports, evidence reviews, explain-backs, and remaining uncertainty.

```mdx
<Response
  id="day-3-acceptance-criteria"
  prompt="Write observable acceptance criteria for this change."
  rows={6}
/>
```

IDs must be stable, descriptive, and globally unique.

### `Checkpoint`

Use learner-controlled checkpoints for build milestones, checks run, manual tests, regression checks, mentor conversations, and lesson completion.

```mdx
<Checkpoint id="day-3-regression-checked">
  I re-tested the existing Done behavior after the change.
</Checkpoint>
```

A checked box is learner confirmation, not automated proof.

### Native `<details>` and `<summary>`

Use native disclosure elements for progressive hints, examples, intended reasoning, mentor notes, and likely diagnoses.

```mdx
<details>
  <summary>Hint 1</summary>

  Compare the behavior you expected with the state that actually changed.
</details>
```

Prefer several progressive hints over revealing the final answer immediately.

## Do Not Build Initially

Do not create specialized components for:

```text
PromptBuilder
BugReport
ExplainBack
MentorGate
HintLadder
CodexReview
ProductDecision
TestRunner
VerificationDashboard
AutomatedGrader
```

Express these with ordinary MDX, `Response`, `Checkpoint`, blockquotes, and native disclosure elements.

## Reusable Lesson Patterns

### Prediction

```mdx
## Predict Before Running

<Response
  id="lesson-action-prediction"
  prompt="What do you expect to happen, and what evidence would you look for?"
  rows={5}
/>
```

### Product Judgment

```mdx
<Track type="product" title="Product Judgment">

A user asks for a feature. Before agreeing, identify:

- the real user;
- the situation;
- the current workaround;
- the pain;
- the smallest useful test;
- the success signal;
- what is not being built yet.

<Response id="lesson-product-judgment" prompt="Write your product judgment." rows={8} />

</Track>
```

### Acceptance Criteria and Verification Plan

```mdx
## Define Success

<Response
  id="lesson-acceptance-criteria"
  prompt="What observable behavior would prove this worked?"
  rows={6}
/>

<Response
  id="lesson-verification-plan"
  prompt="What checks will you run, and what claim does each check support?"
  rows={8}
/>
```

### Codex Prompt Draft

```mdx
Use this shape:

```text
Goal:
Context:
Constraints:
Acceptance criteria:
Existing verification:
Required new tests:
Regression checks:
Verification commands:
Manual verification:
Evidence:
```

<Response id="lesson-codex-prompt" prompt="Write your Codex prompt." rows={16} />
```

### Evidence Before Debugging

```mdx
## Describe the Failure Before Asking Codex

```text
Bug:
Expected:
Actual:
Steps to reproduce:
Evidence:
Relevant code or location:
Current guess:
```

<Response id="lesson-bug-report" prompt="Record the evidence you have." rows={14} />
```

### Evidence Review

```mdx
## Review the Evidence

Answer:

1. What was checked?
2. What passed?
3. What failed?
4. What was not run?
5. What regression was re-tested?
6. Could a check be passing for the wrong reason?
7. What remains unverified?

<Response id="lesson-evidence-review" prompt="Review the evidence honestly." rows={10} />
```

### Explain Back

```mdx
## Explain Back

<Response
  id="lesson-explain-back"
  prompt="Tell the story from the user's action through the app behavior and the evidence that showed it worked."
  rows={10}
/>

> **Mentor pause:** Explain the mental model and the verification evidence out loud.

<Checkpoint id="lesson-mentor-pause-complete">
  I explained the result and remaining uncertainty to my mentor.
</Checkpoint>
```

## Progressive Scaffolding

- Preamble and Days 1–2: complete prompts, explicit steps, strong hints.
- Days 3–4: partially completed structures and guided verification choices.
- Days 5–6: learner authors most prompts, tests, regression checks, and evidence summaries.
- Day 7 and final readiness: learner proposes the plan, verification, handoff, and known limitations.

Do not remove support abruptly. Later lessons should remain clear and mentor-friendly.
