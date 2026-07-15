# Mentor Guide and Recurring Drills

# Daily Five-Minute Product Roleplay

Do this every day.

You play the user.

He plays the product builder.

Say things like:

```text
Can you add reminders?

Can you add login?

Can you add AI?

Can you add a leaderboard?

Can you add recurring chores?

Can you add chat?

Can you make it a mobile app?
```

He may not say yes immediately.

He begins with:

```text
Maybe. Let me understand the problem first.
```

Then he asks at least three questions:

```text
What happened that made you want this?

Tell me about the last time it happened.

What do you do today instead?

What is painful about that?

Who is affected?

What would be good enough for now?
```

Then he proposes:

```text
Smallest test:
[small version]

Success signal:
[how we know it helped]

Not building yet:
[larger version]
```

## Roleplay Scoring

Give 0–2 points for each:

```text
Did he avoid saying yes immediately?

Did he ask about a real recent example?

Did he identify the user?

Did he identify the pain?

Did he identify the current workaround?

Did he propose a smaller version?

Did he define success?

Did he name what not to build?
```

A strong answer scores 12 or more.

---

# The Debugging Mental Model

Debugging is not asking Codex to try random repairs.

It is narrowing down where reality stopped matching the plan.

Use:

```text
1. Reproduce the bug.
2. State expected versus actual.
3. Gather evidence.
4. Decide which layer may be failing.
5. Change one thing.
6. Test again.
7. Explain why the fix worked.
```

## The Layers to Check

```text
Screen:
Is the wrong thing visible?

Event:
Did the click happen?

Rule:
Did the right function run?

State:
Did memory change?

Rendering:
Did the screen update from memory?

Request:
Was the external request sent?

Response:
What came back?

Database:
Was the row actually saved?

Configuration:
Does the deployed app have the settings it needs?
```

## Varied Bugs Across the Week

Do not use only spelling mistakes.

Include different categories:

```text
Day 1:
Edited or refreshed the wrong file.

Day 2:
The click changes the wrong item.

Day 3:
Memory changes but the screen does not, or vice versa.

Day 4:
A child receives the wrong prop.

Day 5:
The request succeeds but the app expects the wrong data shape.

Day 6:
The screen updates but the database does not save.

Day 7:
Local configuration works but deployment configuration is missing.
```

---

# The Explain-Back Rule

At the end of every session, ask him to explain without looking at the code.

Use:

```text
What problem were we solving?

What did the user do?

What did the app remember?

What rule ran?

What changed on the screen?

What broke?

What evidence helped us?

What was the smallest fix?

What did we deliberately not build?
```

He does not need perfect vocabulary.

He does need a coherent story.

---

# Mentor Guidance

## Help More at the Beginning

During the preamble and first two days:

```text
- provide exact prompts;
- point to likely files;
- ask prediction questions;
- demonstrate how to inspect evidence;
- stop large rewrites early.
```

## Remove Support Gradually

By Days 5–7:

```text
- ask him to write the prompt first;
- ask him to define acceptance criteria;
- ask him what evidence he needs;
- ask him to explain the proposed plan;
- ask him to choose what not to build;
- ask him to write the handoff summary.
```

## Do Not Rescue Too Quickly

When something breaks, wait long enough for him to say:

```text
Expected ______.
Actual ______.
The evidence I have is ______.
The layer I suspect is ______.
```

Then help.

## Stop When Understanding Falls Behind

If the code grows faster than the mental model, remove features.

Do not celebrate complexity.

Celebrate orientation.

---
