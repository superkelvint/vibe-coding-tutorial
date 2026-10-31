# Curriculum and MDX Authoring Guidance

This is the current authoring guide for the published course. Older `course-source/` files preserve early drafts; use the live MDX lessons and this guide for future edits.

## Audience and aim

Write for a young adult beginner. Sound like a helpful person, not a compliance checklist. Start with an action or situation the learner can picture, then name the technical idea that explains it. Use “you,” short paragraphs, and concrete examples.

The course follows one Family Chore Board through 14 days. Week 1 ends with a working local app. Week 2 moves the page, server, and saved chores online. Product thinking has one standalone lesson at the end, alongside the reference guides. Do not restore a daily Product Judgment track.

The guiding idea is: “You are not here to create software. You are here to solve user problems.” Reinforce it where a real choice about the user's experience appears; do not repeat it as a ritual on every page.

## The lesson shape

Keep each required day a short mission:

1. Begin with one familiar situation and the question it creates.
2. State what the learner will make or observe today, what remains unfinished, and what result should appear.
3. Explain one new mental model in plain English before naming tools or syntax.
4. Give a short sequence of actions and one reusable Codex prompt when coding help is needed.
5. End with one simple visible result check and a brief takeaway.

Aim for roughly 300–700 words of main content per day. Provider setup may need a little more space, but should still feel like one task. Prefer two or fewer `<Response>` boxes and one completion `<Checkpoint>` per required lesson; use a third response only when it adds a distinct learning moment. Do not front-load a form before the learner sees something.

Do not teach Verification Engineering as a named discipline. Do not add a `verificationFocus` field, a verification panel, daily verification plans, coverage audits, deliberate failure exercises, regression worksheets, or multi-part evidence reports. A normal day asks the learner to try the result and notice whether it matches the prediction. Codex runs existing project checks at major code milestones and reports pass or fail briefly. Keep essential safety rules, including keeping database credentials out of browser code and tracked files.

The learner should be able to answer at a glance: What am I doing? What should I see? Where do I look if it differs?

## Teach concepts when needed

Use the pattern: concrete problem → natural question → plain-English answer → tool or term. Explain `browser`, `server`, `database`, `API`, `deploy`, `localhost`, `Preview`, and similar terms using a page, device, program, or saved row the learner can picture. Do not stack unfamiliar nouns in the first explanation.

For a hosted or terminal workflow, show how to set up what is needed, start the action, recognize that it finished, open the result, and locate relevant errors. Explain an intentionally incomplete result: on Day 9 the public page can load while another person's browser still cannot reach the server on the learner's laptop.

Use `user → data → action → rule → feedback` as a map for understanding an interaction and locating confusion. Do not make the learner memorize it as vocabulary.

Keep React DayPicker in its optional guide. Teach React components in the main path through the chore form, list, and row. Preserve the build sequence: plain JavaScript, React, local SQLite, Vercel page and function, then Supabase Postgres.

## MDX and presentation

Use ordinary MDX, semantic HTML, responsive images, and the existing `<Response>` and `<Checkpoint>` components. Use `<pre>` or fenced blocks only for code, commands, prompts, diagrams, or templates whose line breaks matter. Use lists for steps and tables for comparisons. Do not add custom components to solve a writing problem.

Put a visual beside the explanation it supports. Use descriptive alt text and a short caption. Images must fit the lesson column on a phone without horizontal scrolling. Keep cards and tables readable, with restrained colors and white backgrounds.

Every retained `Response` and `Checkpoint` ID must be stable, descriptive, and unique across the collection. Avoid changing an ID when the learner's answer still means the same thing. Links must respect `import.meta.env.BASE_URL`.

## Course upkeep

Keep the home page grouped into the required path and optional references. Do not turn guides into prerequisites. Update this guide, live MDX, and any active authoring templates together when the course structure changes. Treat large historical curriculum drafts in `course-source/` as archives, not as instructions to reintroduce old tracks or worksheets.

Before handing off edits, read the lesson as a beginner, check that the action and expected result are clear, confirm IDs are unique, and run `npm run check` and `npm run build`.
