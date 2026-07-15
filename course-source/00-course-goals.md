# Course Goals and Educational North Star

This file contains the stable educational goals shared by every lesson. It should be read before converting any lesson source into MDX.

# Vibe Coding Foundations + 7-Day Build Week

## What This Curriculum Is For

This curriculum is for a complete beginner who is about to enter an internship where AI-assisted coding is expected.

The goal is **not mastery**.

The goal is to help him build a reliable mental map of how webapps work and a reliable way of working with Codex without falling into copy-paste hell.

By the end, he should be able to tell this story:

```text
A user sees a screen.
The user takes an action.
The app notices the action.
The app changes what it remembers.
Rules decide what should happen next.
The screen updates.
Sometimes the app asks another computer for data.
Sometimes that data is saved in a shared database.
Deployment lets another person use the app from a real URL.
```

The technical map is:

```text
screen
→ click
→ memory
→ rules
→ components
→ request/response
→ shared saved data
→ deployment
```

The working habits are:

```text
understand
→ define success
→ identify how correctness will be checked
→ predict
→ ask
→ change one small thing
→ run the checks
→ observe the evidence
→ test what might have broken
→ explain
→ save
```

The finished project will be a simple **Family Chore Board**.

It will eventually let a family:

- add a chore;
- assign it to a person;
- mark it done;
- delete it;
- save chores in a shared database;
- open the app from a public URL.

This app is intentionally boring.

Boring is good.

Boring leaves room for the mental models.

---

# The Three Tracks Every Day

Every day has the same three tracks.

A fourth discipline, **Verification Engineering**, runs through all three. It is not a separate phase at the end. It shapes the product definition, the Codex prompt, the implementation, and the decision to keep or reject the work.

## Track 1: Product Judgment

This track teaches him not to build requests blindly.

The question is:

```text
What problem are we actually trying to solve?
```

He should learn to separate:

```text
What someone asked for
```

from:

```text
What is painful in their real life
```

and from:

```text
What is the smallest thing worth testing
```

## Track 2: Codex Prompting and Debugging

This track teaches him how to use Codex without surrendering control.

The question is:

```text
What help do I need from Codex right now?
```

Codex can:

- explain;
- propose a plan;
- scaffold a small change;
- inspect code;
- help find a bug;
- suggest a test;
- review a diff.

Codex should not decide:

- what problem matters;
- what success means;
- whether the result actually works;
- whether the code is safe to keep;
- whether the scope is too large.

## Track 3: Technical Build

This track adds one new technical mental model at a time.

The question is:

```text
What new layer of the app are we learning today?
```

The student does not need to memorize all syntax.

He does need to be able to explain the new layer in plain English.

## The Horizontal Discipline: Verification Engineering

This discipline teaches him to give Codex everything it needs to detect when its own work is wrong.

The question is:

```text
What evidence would convince us that this change is correct?
```

Verification may include:

```text
- acceptance criteria;
- unit tests;
- integration tests;
- end-to-end tests;
- type checking;
- linting;
- build commands;
- browser Console output;
- Network requests;
- database inspection;
- screenshots;
- manual test steps;
- regression checks.
```

The student should learn:

```text
A coding task has two parts:

1. Make the change.
2. Create or use evidence that the change is correct.
```

Codex is most reliable when the environment gives it fast, specific feedback.

Product Judgment defines what success means.

Codex Prompting tells the agent how to verify it.

Technical Build creates the behavior and the tests.

The human reviews whether the evidence is meaningful.

---
