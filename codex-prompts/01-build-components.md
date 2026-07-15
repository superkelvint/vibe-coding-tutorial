# Codex Prompt: Implement the Minimal Interactive Components

Read:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Inspect the current course shell and reuse its existing conventions.

Implement or finish only these custom components:

## `Track`

- supports `product`, `codex`, and `technical` variants;
- renders arbitrary MDX children;
- uses textual labels and does not rely on color alone;
- remains mostly presentational.

Do not create a fourth Verification Engineering variant.

## `Response`

- accepts a stable unique `id`, prompt, and row count;
- renders an accessible labeled textarea;
- restores and saves text through the shared localStorage utility;
- avoids browser-only API access during server rendering;
- shows a restrained saved-state indicator;
- handles malformed or missing stored data safely.

## `Checkpoint`

- accepts a stable unique `id`;
- renders an accessible learner-controlled checkbox;
- saves and restores checked state;
- renders arbitrary child text;
- never presents a checked state as automated proof.

Use native `<details>` and `<summary>` for hints. Do not create specialized PromptBuilder, BugReport, ExplainBack, MentorGate, HintLadder, VerificationDashboard, TestRunner, or grading components.

Use one small versioned state shape:

```ts
type CourseState = {
  version: 1;
  responses: Record<string, string>;
  checkpoints: Record<string, boolean>;
};
```

Centralize persistence logic and use one clearly named storage key.

Update the demonstration lesson to prove that:

- each component renders in MDX;
- state survives refresh;
- keyboard use works;
- malformed local state does not crash the page.

Run configured checks and the production build. Report what passed, failed, or was not run.
