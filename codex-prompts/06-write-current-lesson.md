# Write or revise a current course lesson

Read `AGENTS.md` and the published lessons immediately before and after the lesson you are changing. Treat older `course-source/` drafts and `codex-prompts/00`–`05` as historical references.

Keep the 14-day Family Chore Board sequence. Write one short mission around a concrete situation and one question. State what the learner will do, what should appear, and where to look if it differs. Explain new words only when needed. Use a short Codex prompt for a coding task, at most two meaningful `<Response>` boxes, and one final `<Checkpoint>`.

Do not restore daily Product Judgment or Verification Engineering frameworks. Do not add daily test plans, deliberate failures, regression worksheets, coverage audits, or evidence reports. Keep database secrets out of browser code and tracked files. Ask Codex to run existing project checks only at major code milestones and report pass or fail briefly.

Use semantic MDX. Preserve relevant response and checkpoint IDs, keep images responsive, and use `import.meta.env.BASE_URL` for lesson links. After editing, audit IDs across all lessons and run `npm run check` and `npm run build`.
