# Codex Prompt: Convert the Four-Hour Preamble

Read the shared course files first:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Then read:

- `course-source/preamble.md`

Convert its four hourly sections into four separate MDX lessons under the course content directory.

Preserve:

- detailed beginner handholding;
- the three-track structure;
- Verification Engineering integrated across the tracks;
- exact or near-exact learner prompts where useful;
- prediction pauses;
- concrete build steps;
- deliberate breakage;
- evidence before debugging;
- explain-back questions;
- mentor pauses;
- clear statements of what is out of scope.

Use only:

- `<Track>`;
- `<Response>`;
- `<Checkpoint>`;
- native `<details>` and `<summary>`;
- ordinary MDX.

For each hour:

1. add frontmatter with title, section, order, estimated time, mental model, and verification focus;
2. require observable success criteria;
3. include proportionate verification;
4. include a simple regression or unchanged-behavior check where meaningful;
5. require an explanation after the activity;
6. use globally unique component IDs;
7. end with a completion checkpoint.

The preamble should provide the strongest scaffolding in the course. Do not summarize it into a short tutorial.

After conversion:

- run MDX validation and the production build;
- inspect for duplicate IDs;
- inspect for missing tracks and verification activities;
- report passed, failed, and not-run checks.
