# Codex Prompt: Bootstrap the Course Shell

Read these files before making changes:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Inspect the existing project before choosing an architecture.

Build the interaction-lite course shell described by those files.

Use:

- Astro;
- MDX;
- TypeScript;
- React only for interactive islands;
- localStorage for learner responses and checkpoints;
- minimal dependencies;
- static generation where possible.

Implement:

- Astro and MDX support if absent;
- a course content collection;
- a base course layout;
- a course home page shell;
- a lesson layout;
- previous and next navigation foundations;
- shared, versioned course-state utilities;
- calm, accessible course styling.

Also create one small demonstration MDX lesson that includes:

- all three tracks;
- Verification Engineering integrated inside the tracks;
- a prediction response;
- observable acceptance criteria;
- a verification-plan response;
- a checkpoint;
- a regression question;
- an evidence-review response;
- an explain-back response;
- a mentor pause.

The demonstration lesson exists only to validate the shell and interaction model. Do not invent substantial curriculum content.

Before editing:

1. summarize the architecture you will use;
2. identify existing project constraints;
3. list the files you expect to create or change.

After implementation:

1. run TypeScript checking if configured;
2. run linting and tests if configured;
3. run the production build;
4. report passed, failed, and not-run checks separately;
5. explain how course state is stored;
6. explain how a source lesson will be converted into MDX.

Do not add authentication, a backend, automated grading, a built-in test runner, an embedded editor, analytics, gamification, or generalized LMS functionality.
