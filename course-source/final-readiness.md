# Final Readiness and Course Review

# Final Readiness Exercise

Give him a small project he has not seen before.

The project has:

```text
- a list;
- one Add button;
- one Done button;
- one small bug.
```

Give him this ticket:

```text
Prevent blank items from being added.

The existing Add and Done behavior must continue to work.
```

He should:

```text
1. Explain what the project does.
2. Find how to run it.
3. Locate the relevant code.
4. Turn the ticket into acceptance criteria.
5. Ask Codex for a plan before editing.
6. Predict what should change.
7. Make the smallest change.
8. Test blank input.
9. Test normal input.
10. Test the existing Done behavior.
11. Review the change.
12. Explain the result.
13. Make a Git save point.
14. Write a short handoff summary.
```

He is ready enough to begin the internship when he can do this while staying oriented.

He does not need to work alone.

He does need to remain the person deciding what is happening.

---

# Final Week Review

## Product Judgment

He should be able to answer:

```text
Who is the user?

What pain does the chore board address?

What is the core workflow?

What is the difference between a request and a problem?

What is a smallest useful version?

How do we define success?

What features did we deliberately park?

What did a real user misunderstand?
```

## Codex Prompting and Debugging

He should be able to answer:

```text
Why ask for a plan before code?

How do you ask for a small change?

What are constraints?

What are acceptance criteria?

What is expected versus actual?

What evidence should you gather before asking for a fix?

Why should Codex avoid rewriting everything?

How do you review generated code before keeping it?
```

## Verification Engineering

He should be able to answer:

```text
What are acceptance criteria?

What existing checks does this project have?

When should you use a unit test?

When is an end-to-end test more appropriate?

What is a regression check?

Why is a passing test not absolute proof?

How can an agent accidentally write a weak test?

How do you know a test would have failed before the fix?

Why should deployed behavior be tested separately from local behavior?

What remains unverified after this change?
```

## Technical Mental Models

He should be able to answer:

```text
What does HTML do?

What does CSS do?

What does JavaScript do?

What is an event?

What is state?

What is a component?

What are props?

What is the client?

What is a server?

What is a request?

What is a response?

What is a database?

What is a table?

What is a row?

What is deployment?

Where does the app run?

Where does the data live?
```

---

# One-Sentence Curriculum

```text
Learn to stay oriented while one chore board grows
from a screen,
to an interaction,
to remembered state,
to React,
to remote data,
to shared saved data,
and finally to a deployed prototype,
while building the acceptance criteria, tests, and evidence
that let both the student and Codex know whether each change is correct.
```

---

# Final Mantras

```text
Understand before changing.

Predict before running.

Smallest useful version.

One assumption at a time.

Do not blindly build the request.

Understand the pain first.

Plan before coding.

Small changes beat big rewrites.

Expected versus actual before debugging.

Evidence before guesses.

Define success before coding.

Give the agent a way to prove itself wrong.

A passing test is evidence, not magic.

Test the new behavior and the behavior you might have broken.

Do not weaken the check to make the code pass.

Report what was not verified.

If you cannot explain it, do not keep it.

Park tempting ideas.

The screen is a picture of memory.

Remote data means waiting and failure.

A deployed prototype is not production.

Codex is the helper, not the boss.
```
