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

## Preamble Hour 1: Setup, Files, Browser, and Git

### Mental Model

```text
A project is a folder containing files.

The browser reads some of those files.

Git records understandable checkpoints in the project.
```

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
GitHub collaboration, branches, React, servers, and deployment.
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
A GitHub account
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
