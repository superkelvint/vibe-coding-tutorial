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
users
→ data
→ actions
→ rules
→ feedback
→ browser client
→ request/response
→ server
→ shared persistent data
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

# Four-Hour Preamble

The preamble teaches isolated fundamentals so the seven-day week can focus on connecting them.

By the end of the preamble, he should understand:

```text
HTML = what exists on the page
CSS = how it looks
JavaScript = what happens
Browser = reads the files and shows the result
Git = understandable save points for code
Codex = helper, not boss
Product judgment = understand the pain before choosing the feature
```

## What He Sends When Finished

```text
1. Screenshot of a tiny webpage in the browser

2. Screenshot before clicking a button

3. Screenshot after clicking the button

4. Screenshot showing Git working locally

5. Notes from one short product conversation

6. Three prompts he wrote:
   - one build prompt
   - one debug prompt
   - one product-discovery prompt

7. A short voice or live explanation of:
   - what changed;
   - why it changed;
   - what broke;
   - how he fixed it.
```

---

## Preamble Overview: What the First Four Hours Teach

The preamble is a four-hour beginner orientation before the seven-day build week. It is not a test of prior coding knowledge.

By the end, the student should understand:

```text
where a project folder and files live;
how the browser reads a webpage;
what HTML and CSS do;
how JavaScript notices a click and changes the page;
how Git records an understandable save point; and
why product thinking comes before implementation.
```

The four-hour progression is:

```text
Hour 1:
Setup, files, browser, and Git.

Hour 2:
Make a tiny webpage with HTML and CSS.

Hour 3:
Make a button do something with plain JavaScript.

Hour 4:
Investigate a real user problem and write better prompts.
```

The preamble deliberately postpones React, servers, databases, SQLite, accounts, deployment, advanced JavaScript, and large application architecture. Each hour should ask the student to predict, observe, test a small edge case, record evidence, and explain the idea back.

## Preamble Hour 1: Setup, Files, Browser, and Git

### Mental Model

```text
A project is a folder containing files.

The browser reads some of those files.

Git records understandable checkpoints in the project.
```

Git is a tool that keeps a history of the changes you make to a project.
We will use it to create clear local save points after work that we have checked.
You do not need an online account for this lesson; everything happens on your own computer.

### Product Judgment Track

This is a learning task.

Ask:

```text
What are we learning?
How a project folder, files, browser, and Git relate.

What should happen?
We create a file, change it, and save a checkpoint.

How will we test it?
The file exists, the browser can open it, and Git says the work is saved.

What are we ignoring?
Branches, React, servers, and deployment.
```

### Codex Prompting and Debugging Track

Ask Codex for explanations, not setup magic.

Suggested prompt:

```text
I am a complete beginner.

Explain these in plain English:
- project folder
- file
- browser
- terminal
- Git repository
- commit

Use one simple analogy.
Do not give me a long history lesson.
```

### Technical Build Track

Install or confirm:

```text
VS Code
Git
A browser
```

Use the official installation pages for your operating system:

| Operating system | VS Code | Git |
| --- | --- | --- |
| Windows | [Download VS Code](https://code.visualstudio.com/download) | [Install Git for Windows](https://git-scm.com/install/windows) |
| macOS | [Download VS Code](https://code.visualstudio.com/download) | [Install Git for macOS](https://git-scm.com/install/mac) |
| Linux | [Download VS Code](https://code.visualstudio.com/download) | [Install Git for Linux](https://git-scm.com/install/linux) |

If Git is already installed, you do not need to install it again. Check it with:

```bash
git --version
```

Create a folder called:

```text
vibe-prework
```

Create:

```text
notes.txt
```

Write:

```text
My first Git save point.
```

Run:

```bash
git init
git status
git add notes.txt
git commit -m "Add first notes file"
git status
```

### Make a second change

Add a second line to `notes.txt`:

```text
I can compare my changes.
```

Before saving it, predict what Git should notice. Then run:

```bash
git status
git diff
```

The diff should show the new line as an unsaved change. Now create a second save point:

```bash
git add notes.txt
git diff --staged
git commit -m "Add comparison note"
git status
```

The final status should again show a clean working tree.

### View the history and compare save points

Show the two save points:

```bash
git log --oneline
```

Then compare the newest commit with the one immediately before it:

```bash
git diff HEAD~1 HEAD
```

This should show the second line that was added. The student has now seen that Git records a history and can show the difference between save points.

### Pause and Predict

Before each command, ask:

```text
What do you think this command will change?

Does it change the file, Git's memory, or neither?
```

### Explain Back

He should be able to say:

```text
The file is the work.

Git noticed the file.

I chose the file for the save point.

The commit created the save point.

The history shows my save points.

The diff shows how one save point differs from another.
```

---

## Preamble Hour 2: Make a Tiny Webpage

### Mental Model

```text
HTML says what exists.
CSS says how it looks.
The browser reads both and draws the page.
```

### Product Judgment Track

Ask:

```text
Can someone understand what this page is about by looking at it?
```

This is a small lesson in product clarity.

### Codex Prompting and Debugging Track

Use this prompt:

```text
I am a beginner.

Create one very small HTML file.

The page should include:
- a heading
- a paragraph
- a list of three favorite things
- a button that does not work yet
- a little CSS for the background, text, and button

Use only HTML and CSS.
Do not use JavaScript.
Do not use React.
Do not use npm.

Before the code, tell me what I should expect to see.

After the code, explain:
1. what the HTML does
2. what the CSS does
3. why the button does nothing yet
```

### Technical Build Track

Create:

```text
index.html
```

Paste the generated code.

Before opening it, ask him to predict:

```text
How many visible things will appear?

Which part will be largest?

What color do you expect?

Will the button work? Why not?
```

Open it in the browser.

Then manually change:

```text
1. The heading
2. The paragraph
3. The three list items
4. One color
5. The button text
```

### Explain Back

He should complete:

```text
HTML does ______.

CSS does ______.

The browser does ______.

The button does nothing because ______.
```

### Save Point

Commit the understandable change.

---

## Preamble Hour 3: Make a Button Do Something

### Mental Model

```text
User clicks.
JavaScript notices.
JavaScript changes the page.
```

### Product Judgment Track

This is a learning task.

The smallest useful interaction is:

```text
One click causes one visible change.
```

### Codex Prompting and Debugging Track

Use this prompt:

```text
I am a beginner.

Create one simple HTML file with:
- a message
- a button
- simple styling

When I click the button, the message should change.

Use HTML, CSS, and JavaScript in one file.
Keep it very small.
Do not use React or frameworks.

Before the code, describe the click story in plain English.

After the code, explain:
1. what the user clicks
2. what JavaScript looks for
3. what JavaScript changes
4. why the names must match
```

### Technical Build Track

Create:

```text
button.html
```

Before clicking, ask:

```text
What message do you expect now?

What message do you expect after clicking?

Which code probably connects the button to the message?
```

Change manually:

```text
1. Button text
2. Message before clicking
3. Message after clicking
4. One color
```

### Break It on Purpose

Change the button ID so the HTML and JavaScript no longer agree.

Open the browser Console before asking Codex.

Ask:

```text
What happened?
What did you expect?
What evidence do we have?
Which two names should match?
```

Then use:

```text
Bug:
The button stopped changing the message.

Expected:
Clicking the button changes the message.

Actual:
Nothing happens.

Evidence:
[paste the browser Console error if there is one]

I intentionally changed one ID.

Help me compare:
1. the ID in the HTML
2. the ID JavaScript is looking for
3. the smallest fix

Do not rewrite the whole file.
```

### Explain Back

He should say:

```text
The click was noticed by ______.

The code tried to find ______.

The bug happened because ______.

The smallest fix was ______.
```

---

## Preamble Hour 4: Product Judgment and Better Prompts

### Mental Model

```text
Users describe solutions.
Builders investigate problems.
```

### Product Judgment Track

Talk to one person for 10–15 minutes about chores, responsibilities, reminders, or things people forget.

Do not pitch an app.

Ask:

```text
Tell me about the last time a responsibility was forgotten.

What happened?

Who was involved?

What did you do instead?

What was annoying?

How often does this happen?

What would have been good enough?
```

Fill out:

```text
User:

Situation:

Current workaround:

Pain:

Smallest useful fix:

Feature ideas to avoid for now:
```

### Codex Prompting and Debugging Track

Write three prompts.

#### Build Prompt

Use:

```text
Goal
Context
Constraints
Acceptance criteria
Existing verification
Required new tests
Regression checks
Verification commands
Manual verification
Evidence
```

#### Debug Prompt

Use:

```text
Bug
Expected
Actual
Steps to reproduce
Evidence
Constraints
```

#### Product Discovery Prompt

Use:

```text
A user asked for [feature].
Do not write code.
Help me uncover the real pain.
```

### Technical Build Track

There is no major new technical layer in this hour.

The goal is to connect judgment to building.

Create:

```text
prework-notes.md
```

Save the discovery notes and three prompts.

Commit them.

### Verification Exercise

For the button page, write three checks before changing the code again:

```text
Acceptance criterion:
Clicking the button changes the message.

Regression check:
The original message is visible before clicking.

Failure check:
If the button and JavaScript IDs do not match, the expected behavior fails and evidence appears in the Console or visible behavior.
```

The goal is to begin thinking:

```text
How would Codex know whether its work was right?
```

---

# The 7-Day Build Week

The preamble taught isolated fundamentals.

The seven-day week now builds one durable mental model before introducing the project:

```text
users
→ see data
→ take actions
→ rules determine what is allowed
→ ephemeral or persistent data changes
→ the application gives feedback
```

The technical progression is:

```text
Day 1:
Understand familiar web applications through users, data, actions, rules, and feedback.

Day 2:
Understand the browser as the client and build a browser-only interaction.

Day 3:
Understand the server, requests, responses, waiting, success, and failure.

Day 4:
Introduce the Family Chore Board and build its browser-only core workflow.

Day 5:
Use React to keep state and the screen synchronized.

Day 6:
Connect the app to a server and shared persistent database.

Day 7:
Deploy, test with another user, and hand off the work clearly.
```

Each day lasts approximately:

```text
90 to 150 minutes
```

The mentor should guide heavily early in the week and gradually remove support.

Prompt support should fade like this:

```text
Preamble:
Use complete prompts.

Days 1–2:
Use guided questions and complete explanation prompts.

Day 3:
The student supplies examples, predictions, and failure cases.

Days 4–5:
The student writes acceptance criteria and constraints.

Day 6:
The student writes most of the build and debugging prompts.

Day 7:
The student writes the plan, prompt, test steps, and handoff summary.
```

---

# Day 1: Understand Web Applications Through Apps You Already Know

## Main Goal

Develop a high-level mental model of web applications by examining products the student already understands as a user.

Do not introduce the Family Chore Board.

Do not begin with an unfamiliar codebase.

Use familiar applications such as:

```text
Instagram
Facebook
YouTube
WhatsApp
Amazon
Uber
Gmail
Google Maps
online banking
```

## Main Mental Model

A web application keeps track of four connected things:

```text
1. Users
2. Data
3. Actions users take
4. Feedback showing what happened
```

Rules connect them:

```text
The right user
performs an allowed action
on the right data
and receives accurate feedback.
```

The recurring loop is:

```text
user
→ sees data
→ takes an action
→ rule is checked
→ data is read or modified
→ feedback appears
```

## Ephemeral and Persistent Data

Introduce the distinction immediately.

```text
Ephemeral data:
Temporary information used during an interaction.

Persistent data:
Saved information that should remain available later.
```

Familiar examples:

```text
WhatsApp message being typed:
ephemeral

WhatsApp message after Send succeeds:
persistent

Instagram caption before publishing:
ephemeral

Published Instagram post:
persistent

Amazon filter currently selected:
often ephemeral

Completed Amazon order:
persistent
```

## Feedback as a Core Responsibility

Feedback answers:

```text
Did the app notice my action?

Is it still working?

Did the action succeed?

Did it fail?

What changed?

What should I do next?
```

Examples:

```text
Instagram:
The heart changes and the count may increase.

WhatsApp:
The message shows sending, sent, delivered, or failed.

Amazon:
The cart count changes or an error explains why it could not.

Uber:
The app shows searching, driver assigned, arrival time, or no driver available.
```

## Track 1: Product Judgment

For each familiar application, ask:

```text
Who is the user?

What are they trying to accomplish?

What data matters to them?

What action matters most?

What feedback gives them confidence?

What would make the app confusing or untrustworthy?
```

Do not ask the student to invent features.

The goal is to understand the existing user problem and workflow.

## Track 2: Codex Prompting and Debugging

Codex acts as a discussion partner, not a builder.

Suggested prompt:

```text
I am learning how web applications work.

Do not write code.

Help me analyze [application name] using this model:

1. users
2. important data
3. ephemeral data
4. persistent data
5. actions
6. rules
7. feedback while an action is happening
8. feedback after success
9. feedback after failure

Use plain English.

After your explanation, ask me five questions to check whether I understand it.
```

Teach the student to challenge vague explanations:

```text
What exactly changed?

Was the change temporary or saved?

Which user performed the action?

What feedback proves it worked?

What could cause the action to fail?
```

## Track 3: Technical Orientation

There is no major coding task today.

Choose three familiar applications and complete:

```text
Application:

Main users:

Important data:

One example of ephemeral data:

One example of persistent data:

Three user actions:

One important rule:

Feedback while waiting:

Feedback after success:

Feedback after failure:
```

Then trace one action in detail.

Example:

```text
User types a WhatsApp message
→ temporary message text exists in the browser
→ user presses Send
→ the app checks the action
→ the message is sent and saved
→ the screen shows sending
→ the screen later shows sent, delivered, or failed
```

## Verification Focus

There is no code to verify today.

The evidence is the student's ability to apply the model to an app they already know.

Ask the student to explain without notes:

```text
Who are the users?

What data exists?

Which data is temporary?

Which data is persistent?

What actions are possible?

What rules apply?

What feedback appears?

What could become inconsistent?
```

## Misconceptions to Catch

Do not move on if the student believes:

```text
The screen is the whole application.

All data visible on screen is permanently saved.

Every click changes persistent data.

Feedback is only visual decoration.

Large applications use completely different basic ideas from small ones.
```

## Student Deliverable

Create a short mental-model document containing:

```text
1. A definition of a web application in the student's own words.

2. A diagram:
user → action → rule → data change → feedback

3. An explanation of ephemeral and persistent data.

4. A breakdown of three familiar applications.

5. One complete action lifecycle from each application.

6. Three examples of useful feedback.

7. Three examples of possible consistency bugs.

8. Two remaining questions.
```

## Explain Back

The student should be able to say:

```text
A web application keeps track of users and data.

Users take actions that read, create, change, or delete data.

Some data is temporary and some is saved.

Rules decide what is allowed.

The application gives feedback while an action is happening
and after it succeeds or fails.

Many bugs happen when the user, action, data, saved result,
and visible feedback do not agree.
```

## Done When

```text
The student can analyze a familiar application
in terms of users, data, actions, rules, and feedback.

The student can distinguish ephemeral data from persistent data.

The student understands that the screen represents data.

The student has not yet been asked to understand a new product or codebase.
```

---

# Day 2: The Browser Is the Client

## Main Goal

Understand what happens entirely inside the user's browser and build the smallest browser-only application loop.

The student should learn what the browser can do by itself before learning what requires a server.

## Main Mental Model

```text
Client = the application running in the user's browser.
```

The browser can:

```text
download files;
show a screen;
notice clicks and typing;
keep temporary data;
apply rules locally;
update the screen immediately.
```

The browser-only loop is:

```text
user sees data
→ user takes an action
→ browser code notices
→ ephemeral data changes
→ browser updates the screen
→ user receives feedback
```

No server is required for every interaction.

## Core Demonstration

Build one tiny interaction, such as:

```text
a Like button;
a counter;
an expandable menu;
a selected item;
a temporary note;
a light/dark display toggle.
```

Recommended example:

```text
A Like button starts with:
Liked: false

The user clicks Like.

The browser changes it to:
Liked: true

The button and message update.
```

## What the Student Must Notice

```text
The action feels immediate.

The browser can change the screen without contacting a server.

The changed value may exist only in browser memory.

A refresh may reset it.

A second browser does not automatically know about it.
```

## Track 1: Product Judgment

This is a learning task.

Use the short gate:

```text
What are we learning?
What the browser can do locally.

What should happen?
One user action changes one temporary value and produces feedback.

How will we test it?
Take the action, observe the change, refresh, and compare.

What are we ignoring?
Servers, accounts, databases, React, and deployment.
```

Ask:

```text
What feedback would make this action understandable?

What would confuse the user?

Should this particular change survive a refresh?

Would another user need to see it?
```

## Track 2: Codex Prompting and Debugging

Planning prompt:

```text
Do not write code yet.

I want to build one tiny browser-only interaction.

The user will [action].
The browser should temporarily remember [data].
The screen should show [feedback].

Explain:
1. what the user sees before the action
2. what data the browser remembers
3. what changes after the action
4. what visible feedback proves it worked
5. what should happen after refresh

Do not use React, a server, a database, npm, or external libraries.
```

Build prompt:

```text
Goal:
Create one small browser-only interaction.

Context:
Use one HTML file with simple CSS and JavaScript.

Constraints:
- no React
- no server
- no database
- no external libraries
- keep the code small

Acceptance criteria:
- the initial state is visible
- one user action changes one temporary value
- the screen gives immediate feedback
- refreshing restores the initial state

Manual verification:
- observe the initial state
- perform the action
- confirm the visible change
- refresh
- confirm the temporary change is gone

Before the code, explain what the browser is doing in plain English.
```

## Track 3: Technical Build

Build one page with:

```text
one visible value;
one button;
one click handler;
one temporary state change;
one visible feedback change.
```

Before running, ask:

```text
What data exists before the click?

Where does that data currently live?

What should change after the click?

What should the user see?

What do you expect after refresh?
```

## Break It on Purpose

Use one browser-only bug:

```text
The data changes but the screen does not update.
```

or:

```text
The screen changes but the underlying temporary value does not.
```

or:

```text
The click handler changes the wrong item.
```

Debug using:

```text
Expected:
What should the browser remember and show?

Actual:
What did it remember or show instead?

Evidence:
Visible behavior and browser Console output.

Suspected layer:
Event, rule, temporary data, or screen update.
```

## Verification Focus

Verify the full browser-only claim:

```text
The initial value is correct.

The click is noticed.

The temporary value changes.

The screen reflects the new value.

The feedback is understandable.

A refresh restores the initial state.

No server request was required.
```

Open the Network panel and observe that the interaction itself does not create a data request.

The initial page files may have been loaded over a network, but the click behavior can still be handled locally.

## Explain Back

The student should say:

```text
The client is the application running in my browser.

The browser showed the screen and noticed my click.

JavaScript changed temporary data in the browser.

The browser updated the screen to give me feedback.

The change disappeared after refresh because it was not saved persistently.

Not every user action needs a server.
```

## Done When

```text
The student can explain what the browser does locally.

The student can trace one browser-only action from click to feedback.

The student understands that a visible change is not necessarily persistent.

The student can distinguish changing the screen from saving shared data.
```

---

# Day 3: The Server, Requests, Responses, Waiting, and Failure

## Main Goal

Develop a durable intuition for the client–server boundary.

The student should understand why the browser sometimes needs another computer and what happens while it waits.

Do not introduce the Family Chore Board yet.

Use familiar application stories and a prepared learning endpoint.

## Main Mental Model

```text
Client:
The application running in the user's browser.

Server:
Another computer that receives requests,
applies rules,
accesses data,
and sends responses.
```

The request–response lifecycle is:

```text
1. The user takes an action.
2. The browser creates a request.
3. The request travels to the server.
4. The server reads the request.
5. The server applies rules.
6. The server may read or modify persistent data.
7. The server sends a response.
8. The browser reads the response.
9. The browser updates its temporary data and screen.
10. The user receives success or failure feedback.
```

## Familiar Examples

### Instagram Feed

```text
The browser asks:
Give me posts this user is allowed to see.

The server:
Identifies the user,
finds appropriate posts,
and returns data.

The browser:
Displays the posts.
```

### Sending a WhatsApp Message

```text
The typed message begins as ephemeral browser data.

The user presses Send.

The browser sends a request.

The server validates, saves, and routes the message.

The server responds.

The browser shows sending, sent, delivered, failed, or retry feedback.
```

### Online Banking

```text
The browser requests the user's account balance.

The server verifies the user and permissions.

The server reads persistent financial data.

The server returns only permitted information.

The browser displays the response.
```

## The Critical Comparison

### Browser-Only Action

```text
User opens a menu.

The browser changes temporary data.

The browser redraws the screen.

No server request is required.
```

### Server-Backed Action

```text
User sends a message.

The browser sends a request.

The server validates and saves the message.

The server responds.

The browser shows the confirmed result or failure.
```

The student must learn:

```text
Not every click contacts a server.

Changing the screen does not prove that something was saved.

A successful server response does not prove that the browser displayed it correctly.
```

## The Four Visible Network States

```text
idle
loading
success
error
```

Connect each state to user feedback:

```text
Idle:
The action has not started.

Loading:
The request is in progress.

Success:
The server accepted the request or returned the data.

Error:
The request failed, the server rejected it, or the response could not be used.
```

## Track 1: Product Judgment

Ask:

```text
Why does this action need a server?

What data must be shared or persistent?

What rule should the server enforce?

What should the user see while waiting?

What should happen after success?

What should happen after failure?

Should the user be able to retry?
```

Use a familiar workflow such as:

```text
loading a public profile;
searching for a video;
sending a message;
checking an order;
requesting a ride.
```

## Track 2: Codex Prompting and Debugging

Explanation prompt:

```text
Do not write code.

Explain the difference between a browser client and a server using:
- opening an Instagram feed
- sending a WhatsApp message
- viewing an online bank balance

For each example, identify:
1. what happens only in the browser
2. what request is sent
3. what the server must check
4. what persistent data is read or changed
5. what response comes back
6. what feedback the browser should show while waiting
7. what feedback should appear after success or failure

Use plain English and one diagram for each example.
```

Build prompt for a prepared endpoint:

```text
Goal:
Load a small list of familiar sample items from a prepared endpoint.

Context:
The browser-only page currently displays temporary local data.

Constraints:
- use plain HTML, CSS, and JavaScript
- do not build a server
- do not use React
- do not add a database
- show loading, success, and error states

Acceptance criteria:
- loading feedback appears while waiting
- returned data appears after success
- a useful error appears after failure
- the page does not claim success before the response arrives

Verification:
- inspect the request in the Network panel
- inspect the response status
- inspect the response data
- test a working URL
- test a deliberately broken URL
```

Debug prompt:

```text
Bug:
The browser request did not produce the expected result.

Expected:
[describe expected screen and data]

Actual:
[describe actual screen]

Evidence:
- request URL
- request method
- response status
- response body shape
- Console message
- visible feedback

Help me decide whether the problem is:
- the request
- the server response
- the response data shape
- the browser's temporary state
- or the screen update

Make the smallest fix.
Do not rewrite the page.
```

## Track 3: Technical Build

Use a prepared public teaching endpoint or mentor-provided tiny server.

The student does not build the server today.

The browser should:

```text
start in an idle state;
request a small list;
show loading;
receive a response;
store the response temporarily;
render the returned data;
show an error after a controlled failure.
```

Open the Network panel and inspect:

```text
request URL;
request method;
request timing;
response status;
response body.
```

## Persistence Demonstration

Compare two experiments.

### Experiment A: Browser Memory Only

```text
Change a value locally.
Refresh.
The change disappears.
```

### Experiment B: Server-Provided Data

```text
Load data from the server.
Refresh.
The browser requests it again.
The data returns from the server.
```

If the prepared server supports a disposable write operation, also demonstrate:

```text
Send a change.
Wait for server confirmation.
Refresh.
Request the data again.
Observe whether the saved change returns.
```

## Break It on Purpose

Use varied failures:

```text
wrong URL;
server returns an error status;
response has the wrong shape;
loading never stops;
error feedback is hidden;
success is shown before the response arrives.
```

Ask before fixing:

```text
Did the request leave the browser?

Did the server respond?

Was the status successful?

Did the response contain the expected data?

Did the browser store it?

Did the screen render it?
```

## Verification Focus

Verify separate claims separately:

```text
The request was sent.

The server responded.

The response status was understood.

The response data had the expected shape.

The browser stored the response temporarily.

The screen displayed the response correctly.

Loading feedback appeared while waiting.

Failure feedback appeared after an error.
```

## Explain Back

The student should answer:

```text
What is the client?

Where does the client run?

What is the server?

Why does the browser send a request?

What does the server do with it?

What is a response?

Why might a request fail?

What should the user see while waiting?

Why does changing the screen not prove that data was saved?

Why can some actions happen without a server?
```

## Done When

```text
The student can draw the client–server boundary.

The student can trace a request from user action to feedback.

The student understands idle, loading, success, and error.

The student can use the Network panel as evidence.

The student can explain why visible data, browser memory,
server responses, and persistent storage are different things.
```

---

# Day 4: Introduce the Family Chore Board and Build the Browser-Only Workflow

## Main Goal

Apply the existing mental model to a new, deliberately simple product.

Introduce the Family Chore Board only after the student understands familiar applications and the client–server boundary.

Build the smallest useful workflow entirely in the browser first.

## Main Mental Model

Analyze the project before coding:

```text
Users:
Family members.

Data:
Chores, assignments, and completion status.

Actions:
Add, assign, mark done, and eventually delete.

Rules:
Blank chores are not allowed.
Only the selected chore should change.

Feedback:
The list updates, completed chores look different,
and invalid input produces a useful message.
```

For today:

```text
All chore data is ephemeral browser state.

The workflow can be tested,
but it does not survive refresh
and is not shared with another browser.
```

## Track 1: Product Judgment

Use the Product Gate:

```text
Real user:
A family member sharing household responsibilities.

Situation:
People need to know what must be done and who is responsible.

Current workaround:
Memory, verbal reminders, paper, or text messages.

Pain:
Responsibilities are forgotten or unclear.

Smallest useful version:
Add a chore, assign a person, and mark it done.

Success signal:
A user can add three chores and mark one complete.

Not building yet:
Login, reminders, points, calendar, recurring chores,
chat, AI, or a database.
```

Ask the student to map the app using:

```text
Who is the user?

What data exists?

Which data is currently ephemeral?

What actions modify it?

What rules apply?

What feedback proves each action worked?

Which parts would eventually require a server?
```

## Track 2: Codex Prompting and Debugging

Planning prompt:

```text
Do not write code yet.

We are building a browser-only Family Chore Board.

Help me model:
1. the users
2. the data for one chore
3. the list of chores
4. the actions users can take
5. the rules for each action
6. the feedback after each action
7. what will disappear after refresh
8. what would eventually need a server

Keep the product scope to:
- add a chore
- assign a person
- show the list
- mark one chore done
```

Student-written build prompt must include:

```text
Goal
Context
Constraints
Acceptance criteria
Existing verification
Required new tests
Regression checks
Verification commands
Manual verification
Evidence
```

## Track 3: Technical Build

Build in plain HTML, CSS, and JavaScript.

The app should:

```text
add a chore;
assign it to a person;
show the list;
mark one chore done;
prevent blank chores.
```

Optional only if the core mental model is secure:

```text
delete a chore;
count unfinished chores.
```

Do not add persistence today.

## Prediction Pause

Before each change, ask:

```text
Which user action are we implementing?

What data exists before the action?

What data should change?

What rule must be checked?

What feedback should appear?

Should this survive refresh today?
```

## Break It on Purpose

Choose one state or rendering bug:

```text
The correct chore data changes but the screen does not redraw.

The screen changes but the underlying chore data does not.

Clicking Done changes the wrong chore.

Blank input appears to succeed.
```

Debug by locating the broken link:

```text
user action
→ rule
→ state change
→ screen update
→ feedback
```

## Verification Focus

Test state transitions, not only screenshots.

Verify:

```text
A valid chore can be added.

A blank chore is rejected with feedback.

The assigned person is visible.

Only the selected chore becomes done.

Other chores remain unchanged.

Refreshing clears the list, as expected for today's browser-only version.
```

## Explain Back

The student should say:

```text
The users are ______.

One chore contains ______.

The chore list lives ______.

When Add is clicked, ______ changes.

When Done is clicked, ______ changes.

The screen updates because ______.

The chores disappear after refresh because ______.

To share and save them later, we will need ______.
```

## Done When

```text
The student can apply the users–data–actions–feedback model
to a new product.

The student understands the complete browser-only workflow.

The student can explain why the app is useful as a prototype
but not yet persistent or shared.
```

---

# Day 5: React Keeps Browser State and the Screen Synchronized

## Main Goal

Rebuild or reorganize the same browser-only workflow in React without adding product scope.

## Main Mental Model

```text
React helps keep the screen synchronized with browser state.
```

The story is:

```text
App owns the chore data.

App gives data to smaller components.

A user acts inside a component.

The component reports the action.

App updates state.

React redraws the affected screen.

The user receives feedback.
```

React does not automatically provide:

```text
a server;
a database;
persistence;
accounts;
shared data.
```

A React application can still be entirely client-side.

## Track 1: Product Judgment

Ask:

```text
Does rebuilding in React solve a new user problem?
```

Not directly.

Today is a technical learning task.

Use the gate:

```text
What are we learning?
How React organizes browser state and screen updates.

What should happen?
The same core workflow should still work.

How will we test it?
Add, assign, reject blank input, and mark one chore done.

What are we ignoring?
Servers, databases, auth, reminders, and new features.
```

## Track 2: Codex Prompting and Debugging

Planning prompt:

```text
Do not write code yet.

Here is my browser-only chore application.

Help me identify:
1. what data belongs in React state
2. which component should own that state
3. what each smaller component displays
4. what actions each component reports
5. what feedback each action produces
6. how the existing acceptance criteria will be preserved

Keep the number of components small.
Do not add product features.
Do not add a server or database.
```

Comparison prompt:

```text
Compare the plain JavaScript version and React version.

Use this structure:

Data:
Where browser state lives.

Actions:
How user actions are handled.

Rules:
Where validation happens.

Feedback:
How the screen reflects state.

Persistence:
Why both versions still lose data after refresh.
```

## Track 3: Technical Build

Use Vite to create a small React app.

Required behavior:

```text
display chores;
add a chore;
assign a person;
reject blank input;
mark a chore done.
```

Suggested component shape:

```text
App
ChoreForm
ChoreList
ChoreItem
```

Keep state ownership simple.

## Break It on Purpose

Use one React-specific synchronization bug:

```text
A child receives the wrong prop name.

A handler updates a copy but not React state.

An item uses the wrong identity and the wrong chore changes.

The rule works but feedback is not rendered.
```

Ask:

```text
What data should the child receive?

What action should the child report?

Where should state change?

What should React redraw?

What evidence shows where the chain broke?
```

## Verification Focus

Prefer tests that interact as a user would.

Verify:

```text
The React version preserves all Day 4 behavior.

The correct item changes.

Blank input remains rejected.

The screen reflects current state.

No previous behavior disappeared during the rewrite.

Refreshing still clears the browser-only data.
```

## Explain Back

The student should say:

```text
The chore data lives in ______.

A ChoreItem receives ______.

When the user clicks Done, the component reports ______.

The state changes in ______.

React then ______.

The data is still not persistent because ______.
```

## Done When

```text
The student can tell the React data-flow story.

The student understands that React manages client-side UI and state,
not server persistence.

The student can explain the same users–data–actions–feedback loop
through React components.
```

---

# Day 6: Connect the Client to Shared Persistent Data

## Main Goal

Connect the React client to a server-backed database so chores survive refresh and can be shared between browsers.

## Main Mental Model

```text
Browser state:
What this client remembers right now.

Server:
Receives requests and applies rules.

Database:
Persistent shared data outside the browser.
```

The complete action story becomes:

```text
user takes an action
→ React shows pending feedback
→ client sends a request
→ server checks the action
→ database data is read or modified
→ server sends a response
→ client updates browser state
→ React updates the screen
→ user sees confirmed success or failure
```

The key product idea is:

```text
One person's browser is not the family's shared source of truth.
```

## Track 1: Product Judgment

Use the Product Gate:

```text
Feature request:
Save chores in a database.

Real user:
A family using more than one browser or device.

Situation:
Different people need to see the same chore list.

Current limitation:
The browser-only list disappears and is not shared.

Pain:
Each browser has a different temporary version.

Smallest useful version:
One shared chores table.

Success signal:
Add a chore in one browser and see it after refresh and in another browser.

Not building yet:
Login, individual accounts, comments, reminders,
history, or advanced permission controls.
```

## Track 2: Codex Prompting and Debugging

Schema prompt:

```text
Do not write app code yet.

Help me describe one chore as persistent data.

For each field, explain:
1. what it means
2. one example value
3. why the app needs it

Use:
- id
- title
- assigned_to
- done
- created_at
```

Student-written build prompt must include:

```text
Goal
Current client behavior
Server or service being used
Database table shape
Request and response expectations
Loading feedback
Success feedback
Failure feedback
Operations that must work
What must not be added
Existing checks
New tests
Regression checks
Two-browser verification
Evidence to report
```

Debugging story:

```text
A chore appears immediately,
but disappears after refresh.
```

Ask:

```text
Did browser state change?

Was a request sent?

Did the server accept it?

Did the database change?

What did the response say?

What happened when the client loaded again?
```

## Track 3: Technical Build

Use Supabase or a similar managed teaching service.

Create one table:

```text
chores
```

Minimum fields:

```text
id
title
assigned_to
done
created_at
```

Connect the client so it can:

```text
load chores;
add a chore;
mark a chore done;
delete a chore, if time allows.
```

Every server-backed action should have:

```text
idle feedback;
pending feedback;
success feedback;
failure feedback.
```

## Optimistic Versus Confirmed Feedback

Introduce carefully:

```text
Optimistic feedback:
The client updates before the server confirms.

Confirmed feedback:
The client updates after a successful response.
```

For a beginner, prefer confirmed feedback first.

If optimistic feedback is demonstrated, require a failure rollback explanation.

## Magic Moment

Manually add one chore in the database dashboard.

Refresh the app.

When it appears, explain:

```text
The client did not invent this chore.

The persistent database already contained it.

The client requested chores from the server
and rendered the response.
```

## Break It on Purpose

Use one end-to-end data-flow bug:

```text
The screen updates but no request is sent.

The request succeeds but the client expects the wrong data shape.

The database saves the row but the screen does not update.

The client shows success after an error response.

The change saves, but reload uses the wrong query.
```

Debug layer by layer:

```text
user action
→ browser handler
→ request
→ server response
→ database state
→ browser state
→ React rendering
→ feedback
```

## Verification Focus

Verify both immediate behavior and persistence:

```text
Loading appears while chores are requested.

Saved chores render after success.

Add sends a request and creates a database row.

Done changes the correct database row.

Failure produces useful feedback.

Refresh returns the saved data.

A second browser sees the same data.

Existing client behavior still works.
```

A visible chore is not proof that it was persisted.

Inspect:

```text
Network request;
response status;
response data;
database dashboard;
refresh behavior;
second-browser behavior.
```

## Safety Boundary

Say clearly:

```text
This is a disposable teaching database.

Do not place private information in it.

Never put a privileged service secret in browser code.

A browser-safe key still requires limited database permissions.

Publicly writable data should be treated as temporary prototype data.
```

## Explain Back

The student should answer:

```text
Where does browser state live?

Where does persistent chore data live?

What request is sent after Add?

What rule should the server enforce?

What does the response confirm?

Why does the chore survive refresh?

Why can another browser see it?

What feedback appears while waiting, after success, and after failure?
```

## Done When

```text
The student can trace one chore from user action,
through the client and server,
into the database,
and back to visible feedback.

The student can distinguish temporary client state
from persistent shared data.
```

---

# Day 7: System Recap, Real User Test, and Work Handoff

## Main Goal

Review the complete system, let another person use it when possible, observe what breaks, and explain the work clearly. Deployment is explained conceptually, not taught as a hosting-provider tutorial.

## Main Mental Model

```text
Local:
The client and server work on the developer's computer.

Deployed:
The client and server are available from a real URL. This is discussed as a concept, not implemented through a provider tutorial today.

Server-backed:
The client sends requests to the server, which reads and changes SQLite.

Prototype:
Another user can try the workflow.

Production:
The system is secure, reliable, supported, and ready for real use.
```

The final story is:

```text
A user opens a URL.

The browser downloads the client application.

The client requests persistent chore data.

The server applies rules and accesses the database.

The server returns a response.

React shows the data.

The user takes an action.

The client sends another request.

The server saves the change.

The client gives accurate feedback.
```

## Recap the key mental models

Day 7 should reinforce the ideas from the whole week:

```text
Solve the user problem, not merely the requested feature.

user → data → action → rule → feedback

Temporary browser data is different from shared saved data.

React components organize the client and keep the screen synchronized with browser state.

The client asks the server for shared data.

The server applies rules and reads or changes SQLite rows.

Verification provides evidence and catches unintended regressions.
```

The learner should be able to use these models together when explaining or debugging one interaction. The goal is not to memorize every library or command, but to identify which layer is responsible and what evidence would prove it worked.

## Track 1: Product Judgment

Use the Product Gate:

```text
Feature request:
Review the complete system and test it with a real person.

Real user:
Someone who is not sitting at the developer's computer.

Situation:
They need to try the shared chore workflow.

Current limitation:
The developer may be the only person who has tried the complete workflow.

Pain:
The builder may not notice where a new user hesitates or loses trust.

Smallest useful version:
A tested client–server–SQLite workflow and, if a public URL already exists, one real-user test through it.

Success signal:
A tester can complete the core workflow and the builder can explain what is verified and what is not.

Not building yet:
Hosting-provider setup, custom domains, analytics, payments, mobile apps,
full auth, or production hardening.
```

## Real User Test

If a public URL already exists, send it to one person. Otherwise, run the client and server locally and let the person try the workflow while sitting with you.

Say:

```text
Please open this link.

Without me explaining it, try to:
1. add a chore;
2. assign it;
3. mark it done.
```

Then ask:

```text
What confused you?

What did you expect to happen?

What did you click first?

Where did you hesitate?

Did the feedback make each action clear?

Did you trust that the change was saved?
```

Do not begin with feature requests.

## Track 2: Codex Prompting and Debugging

The student writes a final system-review prompt:

```text
Approved product requirements
High-level design
Implementation plan
Client, server, and SQLite responsibilities
Local verification
Real-user verification
What must not change
Known limitations
Evidence required before claiming success
```

Final debugging prompt:

```text
Bug:
The complete workflow works in one place but fails during the final test.

Expected:
The client loads and saves shared chores.

Actual:
[describe visible result]

Evidence:
- build result
- browser Console
- Network request
- response status
- SQLite evidence
- visible feedback

Help me determine whether the failure is:
- browser code
- request construction
- server or SQLite behavior
- response data shape
- or screen rendering

Make the smallest fix.
Do not add features.
```

Final review prompt:

```text
Review this project like a senior engineer teaching a beginner.

Do not rewrite it.

List the top five issues by importance across:
- correctness
- client–server behavior
- data consistency
- feedback and error handling
- confusing code
- missing edge cases
- unnecessary complexity
- security
- user experience

For each issue, explain why it matters.
Recommend only one issue to fix before we stop.
```

## Track 3: Technical Build

Run the complete local workflow. If a public URL already exists, repeat the important checks there. Do not teach a hosting provider today.

The complete prototype should:

```text
load chores from persistent storage;
show loading and error feedback;
add a chore;
mark a chore done;
survive refresh;
work in a second browser;
remain usable on a phone-sized screen;
and have its limitations documented honestly.
```

## Manual Test Checklist

```text
Open the local client and server.

Observe the initial loading state.

Confirm saved chores appear.

Add a valid chore.

Try a blank chore.

Observe pending and success feedback.

Refresh.

Mark a chore done.

Open from another browser.

Open on a phone-sized screen.

Test one controlled failure.

Check the SQLite row.

Confirm no secret values are in the repository.
```

## Small Handoff Exercise

Make one final tiny verified change.

Example:

```text
Improve the feedback shown while a chore is saving.
```

Write a handoff summary:

```text
What changed:

Why:

Which user and action are affected:

What data changes:

Client behavior:

Server or database behavior:

Feedback behavior:

How I tested it:

What I did not change:

Known limitations:

What should happen next:
```

## Verification Focus

Run local checks and every regression check through Day 6.

If a public URL already exists, repeat the important acceptance tests there.
Otherwise record deployment as not performed rather than learning a provider during the recap.

Verify separately:

```text
client loads;
request is sent;
server responds;
persistent data changes;
client state updates;
feedback is accurate;
refresh restores saved data;
second browser sees shared data;
real user can attempt the workflow.
```

Do not claim deployment was verified if no public URL was tested.

## Explain Back

The student should tell the full story:

```text
The user opens the client.

The browser downloads and runs the client.

The client asks the server for chores.

The server applies rules and reads the database.

The server returns persistent data.

React stores the response in browser state and shows it.

When the user changes a chore,
the client gives pending feedback and sends a request.

The server saves the change and responds.

The client shows confirmed success or useful failure feedback.

After refresh, the client requests the saved data again.
```

## Done When

```text
The student can demonstrate the complete local prototype and, if available, a public version.

The student can explain the users, data, actions, rules, feedback,
client, server, database, and deployment layers.

The student can show evidence for visible behavior, persistence, and real-user observation.

The student can describe deployment status and limitations honestly and hand off the work clearly.
```

## Final Repository README

The final handoff should include a repository-root `README.md`.

Explain that it is the project’s front door for humans and future Codex agents. It should answer:

```text
What problem does this project solve?
What can it do now?
How do I start the client?
How do I start the server?
What does SQLite store?
How do I run the checks?
What settings are needed?
What is deliberately not built?
What is the deployment status?
What limitations remain?
```

Ask Codex to inspect the actual repository, product documents, package scripts, client, server, SQLite setup, tests, and verification commands before writing the README. Codex must use exact commands and truthful capabilities. It must not invent features, settings, deployment status, security guarantees, or test results. Missing information should be stated clearly.

The student should review the README’s claims and verify its documented commands. The README is not a replacement for the PRD or high-level design; it is the practical orientation and handoff document for someone approaching the repository.

---

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
The student misclassifies ephemeral data as persistent or misses important feedback.

Day 2:
Browser state changes but the screen does not, or the wrong item changes.

Day 3:
The request succeeds but the client expects the wrong response shape, or loading never stops.

Day 4:
Chore state changes but the screen does not, or blank input appears to succeed.

Day 5:
A component receives the wrong prop or reports the wrong action.

Day 6:
The screen updates but the persistent database does not, or the response is misread.

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
Learn to see familiar web applications as systems of users, data, actions, rules, and feedback; understand what happens in the browser and what requires a server; then apply that model as one chore board grows from temporary client state, to React, to shared persistent data, and finally to a deployed prototype, while building the acceptance criteria, tests, and evidence that let both the student and Codex know whether each change is correct.
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
