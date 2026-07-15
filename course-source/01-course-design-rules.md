# Course-Wide Teaching and Design Rules

These rules apply to the preamble, every day of the build week, and the final readiness exercise.

Verification Engineering is a horizontal discipline across Product Judgment, Codex Prompting and Debugging, and Technical Build. Do not render it as a fourth daily track.

# The Difference Between a Learning Task and a Product Task

Do not force a full product interview onto every tiny coding exercise.

Some tasks exist mainly to teach a concept.

## For a Learning Task

Use this short gate:

```text
What are we learning?

What should happen?

How will we test it?

What are we deliberately ignoring for now?
```

Example:

```text
We are making one button change one message.

We are learning what happens after a click.

We will test it by clicking once and watching the message.

We are ignoring forms, databases, React, and styling.
```

## For a Product Task

Use the fuller Product Gate:

```text
Feature request:
[What someone asked for]

Real user:
[Who has the problem]

Situation:
[When the problem happens]

Current workaround:
[What they do today]

Pain:
[What is frustrating]

Smallest useful version:
[Minimum thing to test]

Success signal:
[How we know it helped]

Not building yet:
[Things we are deliberately avoiding]
```

---

# The Codex Rule

Codex is not the boss.

```text
Codex is the helper.

The student is the product owner,
test designer,
tester,
debugger,
and reviewer.
```

Use Codex in this order:

```text
Ask before edit.
Define success before build.
Inspect the project's verification tools before changing code.
Plan before build.
Small before big.
Predict before run.
Reproduce before fix.
Run the checks before claiming success.
Test important existing behavior.
Review the evidence before keeping the work.
Explain before moving on.
```

---

# The Main Prompt Shape

Use this structure for most build prompts:

```text
Goal:
What I want to happen.

Context:
What exists now.

Constraints:
What Codex must not change or add.

Acceptance criteria:
Observable conditions that define success.

Existing verification:
Tests, type checks, linting, build commands, and manual checks already available.

Required new tests:
Tests that should be added or updated for the new behavior.

Regression checks:
Existing behavior that must continue working.

Verification commands:
Commands Codex should run.

Manual verification:
What I will test myself.

Evidence:
What Codex must report as passed, failed, or not run.
```

Use this structure for debugging:

```text
Bug:
What is wrong.

Expected:
What should happen.

Actual:
What happened instead.

Steps to reproduce:
How to make the problem happen again.

Evidence:
Error message, console output, or visible behavior.

Constraints:
Make the smallest fix.
Do not rewrite the whole app.
Explain why it broke.
Tell me how to verify the fix.
```

---

# The Verification Principle

The most important skill in AI-assisted coding is not writing a clever prompt.

It is giving the coding agent a reliable way to determine whether its work is correct.

```text
A weak workflow says:

Build the feature.
```

```text
A stronger workflow says:

Build the feature,
then show me how to check it.
```

```text
A reliable workflow says:

Here is the behavior we want.

Here are the acceptance criteria.

Here are the tests that should pass.

Here are the existing behaviors that must not break.

Run the checks.

Inspect the result.

Do not claim success unless the evidence supports it.
```

The central question is:

```text
What information would the agent need
to prove that this change works?
```

## The Agent Verification Loop

Use this loop for every meaningful change:

```text
Define success
→ identify risks
→ choose verification
→ make the smallest change
→ run the checks
→ inspect the evidence
→ test existing behavior
→ explain the result and remaining uncertainty
```

## Match the Check to the Claim

```text
A small rule:
Use a unit test.

Several pieces working together:
Use an integration test.

A real user workflow in the browser:
Use an end-to-end test.

A visual or exploratory behavior:
Use a manual acceptance test.

A request or database operation:
Inspect the response and saved data.

A deployment change:
Test the deployed environment, not only localhost.
```

Not every beginner exercise needs every kind of test.

Every exercise does need clear evidence.

## The Verification Ladder

Use the cheapest check that gives meaningful confidence, then add stronger checks as risk increases.

```text
Level 1:
Read the diff.

Level 2:
Run the changed behavior manually.

Level 3:
Run linting, type checking, and the build.

Level 4:
Run focused automated tests.

Level 5:
Run the full test suite.

Level 6:
Run end-to-end user workflows.

Level 7:
Verify in the deployed environment.

Level 8:
Observe real usage and production behavior.
```

## Agent-Generated Tests Are Evidence, Not Proof

Tests written by the same agent that wrote the feature are useful, but they are not automatically trustworthy.

The agent may accidentally:

```text
- test its implementation rather than the requirement;
- miss an edge case;
- assert something too weak;
- mock away the behavior that matters;
- weaken an existing test;
- remove a failing test;
- skip a test;
- claim success without running the test;
- test only the happy path.
```

Review tests by asking:

```text
Does this test represent the acceptance criterion?

Would it fail before the fix?

Could a broken implementation still pass?

Does it test user-visible behavior where appropriate?

Did any existing test become weaker?

Were any tests skipped, deleted, or rewritten unnecessarily?
```

The beginner mantra is:

```text
Do not ask only:
Did Codex write tests?

Ask:
Do the tests provide convincing evidence?
```

---

# What to Avoid All Week

Avoid prompts like:

```text
Make me an app.

Fix it.

Make it better.

Add all the features.

Rewrite everything.

Use whatever libraries you want.
```

Prefer:

```text
Explain what exists before changing it.

Plan the smallest change first.

Do not rewrite the whole app.

Do not add a library unless it is necessary.

Tell me what changed.

Tell me how I can test it.

Find and run the project's existing checks.

Add or update focused tests for the new behavior.

Do not weaken, delete, or skip tests just to make the change pass.

Report what you ran, what passed, what failed, and what remains unverified.

Make the smallest fix.
```

---

# The Daily Rhythm

Use the same rhythm every day.

## 1. Product Warmup

Ask:

```text
What are we trying to learn or validate today?

Who benefits from this?

What is the smallest useful result?

What are we not building today?
```

## 2. Define Success

Write acceptance criteria before asking Codex to build.

Ask:

```text
What observable behavior would prove this worked?

What important behavior must remain unchanged?

What edge case is most likely to fail?
```

## 3. Inspect the Verification Environment

Before editing, find out:

```text
What tests already exist?

How are they run?

Is there a type-check command?

Is there a lint command?

How is the project built?

Is there an end-to-end test setup?

What must still be checked manually?
```

## 4. Mental Model

Teach one idea in plain language.

## 5. Prediction

Before running generated code, ask:

```text
What do you expect to see?

What should happen when you click?

What part of the code seems responsible?

What are you unsure about?
```

## 6. Codex Plan

Ask Codex to explain the proposed change, risks, and verification plan before making a large change.

## 7. Build Small

Change one small behavior.

## 8. Run Focused Checks

Run the fastest checks that directly cover the change.

Examples:

```text
focused unit test
integration test
type check
lint
build
```

## 9. Test Manually

Use the app like a user.

## 10. Test a Regression

Re-test at least one important behavior that the change could have broken.

## 11. Break It on Purpose

Introduce one controlled bug or test one edge case.

## 12. Debug from Evidence

Describe expected versus actual.

Read the failing test, error, Console output, Network response, or visible behavior before asking Codex.

## 13. Review the Evidence

Ask:

```text
What did we actually verify?

What did we not verify?

Could the checks be passing for the wrong reason?

Did any test become weaker or disappear?
```

## 14. Explain Back

The student explains what happened in plain English.

## 15. Save the Work

Make a Git save point after an understandable, verified change.

---

# Safety Boundaries Before Starting

Say this clearly before the internship and repeat it during the week:

```text
Never paste company secrets, passwords, private keys,
customer data, confidential documents, or private source code
into an AI tool unless the company has explicitly approved it.
```

Also teach:

```text
Do not run a command just because Codex suggested it.

Pause before commands that:
- delete files;
- change permissions;
- install unfamiliar software;
- modify remote systems;
- expose credentials;
- change a database.
```

The beginner rule is:

```text
If a command could destroy, expose, or publish something,
ask a human before running it.
```

---
