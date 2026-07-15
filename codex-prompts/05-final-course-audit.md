# Codex Prompt: Final Course Audit

Read the shared course files:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Then inspect the complete generated MDX course.

Do not substantially rewrite lessons unless needed to fix a clear problem.

Audit every lesson for:

- a clear primary mental model;
- Product Judgment;
- Codex Prompting and Debugging;
- Technical Build;
- Verification Engineering integrated across all three tracks rather than isolated as a fourth track;
- substantial handholding appropriate to its place in the course;
- observable success criteria before implementation;
- inspection of available checks where appropriate;
- prediction before meaningful actions;
- focused verification proportionate to the claim;
- at least one regression question or check;
- evidence before debugging;
- review of whether tests and checks are meaningful;
- a statement of what remains unverified;
- explain-back;
- mentor pause;
- globally unique component IDs;
- accessible semantic structure.

Audit the course-wide progression:

- complete prompts and strong hints early;
- partial templates in the middle;
- increasingly learner-authored plans, prompts, tests, evidence, and handoffs later;
- no abrupt removal of support.

Also ask:

- Did the conversion preserve the source curriculum's handholding?
- Did it become a documentation site instead of a course?
- Did it become a miniature LMS?
- Did it become a testing textbook instead of a mental-model course?
- Does each verification activity connect evidence to a specific claim?
- Does the learner report failed, not-run, and unverified work honestly?
- Can the mentor identify likely misconceptions and intervene?

Fix meaningful shortcomings.

Run:

- TypeScript checking;
- configured tests;
- linting if configured;
- the production build.

Report separately:

- passed checks;
- failed checks;
- checks not run;
- limitations;
- remaining unverified behavior.

Do not add new platform features during the audit unless needed to satisfy an existing course requirement.
