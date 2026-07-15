# Codex Prompt: Convert One Curriculum Source File

Read the shared course rules first:

- `course-source/00-course-goals.md`
- `course-source/01-course-design-rules.md`
- `course-source/02-interaction-patterns.md`

Then read:

- `course-source/vibe-coding-foundations-and-7-day-curriculum.md`

From `course-source/vibe-coding-foundations-and-7-day-curriculum.md` convert Day 1's content into the appropriate MDX lesson under:

- `src/content/lessons/week1/day1.mdx` 

Preserve the source lesson's:

- detailed handholding;
- plain-language mental models;
- Product Judgment track;
- Codex Prompting and Debugging track;
- Technical Build track;
- Verification Engineering across all three tracks;
- concrete prompts and prompt scaffolds;
- acceptance criteria;
- inspection of existing verification where appropriate;
- focused checks;
- manual verification;
- regression checks;
- deliberate bugs or edge cases;
- evidence gathering;
- test skepticism;
- explain-back questions;
- mentor guidance;
- explicit scope boundaries.

Do not render Verification Engineering as a fourth track.

Use only the existing interaction patterns:

- `<Track>`;
- `<Response>`;
- `<Checkpoint>`;
- native `<details>` and `<summary>`;
- ordinary MDX.

Do not create a new custom component unless the lesson truly cannot be expressed with the existing patterns. Prefer a longer MDX lesson over a new abstraction.

For each generated lesson:

1. include frontmatter with title, section, order, estimated time, mental model, and verification focus;
2. state what is intentionally out of scope;
3. require prediction before meaningful execution;
4. require observable acceptance criteria;
5. guide the learner to identify available checks where appropriate;
6. include focused verification proportionate to the claim;
7. include at least one regression question or check;
8. require evidence before debugging;
9. review whether generated tests or checks are meaningful where relevant;
10. ask what remains unverified;
11. end with explain-back and a mentor pause;
12. include a final completion checkpoint;
13. use stable, descriptive, globally unique IDs.

Preserve the course's fading scaffolding:

- Days 1–2: strong guidance and complete examples;
- Days 3–4: partial templates and guided choices;
- Days 5–6: mostly learner-authored prompts and verification plans;
- Day 7: learner-owned plan, checks, evidence, handoff, and limitations.

Do not significantly summarize the source. Do not remove examples merely to make the page shorter. Do not invent extra features or technologies.

After conversion:

1. run MDX validation and the production build;
2. inspect for duplicate component IDs;
3. inspect for missing tracks;
4. inspect for missing acceptance criteria, regression checks, evidence review, or remaining-uncertainty questions;
5. report what passed, failed, or was not run;
6. summarize any source material that could not be represented faithfully.
