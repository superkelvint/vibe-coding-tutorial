# Codex Prompt: Add Navigation, Progress, Export, and Reset

Read:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Inspect all generated MDX lessons before editing.

Add or complete:

- the course home page;
- a clear distinction between the preamble and seven-day build week;
- the course outline;
- previous and next lesson navigation;
- approximate checkpoint-based lesson and course progress;
- a practical resume-current-lesson affordance;
- reset-progress behavior with accessible confirmation;
- export of learner notes and checkpoints to readable Markdown.

The home page should show each lesson's:

- title;
- estimated time;
- primary mental model;
- verification focus;
- completion status.

The exported Markdown should group learner work by lesson and use human-readable categories where present, including:

- Product Judgment;
- Acceptance Criteria;
- Verification Plan;
- Codex Prompt;
- Checks Run;
- Regression Checks;
- Evidence;
- What Remains Unverified;
- Explain Back.

Do not export only raw IDs or raw JSON. Empty responses may be omitted unless needed for useful structure.

Do not add accounts, a backend, automated grading, analytics, gamification, or a mentor dashboard.

Run configured checks and the production build. Report passed, failed, and not-run checks separately.
