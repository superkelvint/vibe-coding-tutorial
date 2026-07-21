# Vibe Coding Week 2: From One Laptop to a Reachable System

## What This Week Is For

This week is for a complete beginner who has finished the first build week and now has a working Family Chore Board on one computer.

The student already has a basic mental model of:

```text
user
→ browser client
→ request
→ server
→ database
→ response
→ feedback
```

The problem is that the whole system still depends on the developer's laptop.

The goal of Week 2 is **not cloud mastery**.

The goal is to help the student understand what it means to move an already-understood web application from one laptop onto services that another person can reach through the internet.

This week is a relocation exercise.

It is not a feature sprint.

By the end, the student should be able to tell this story:

```text
A person enters a public URL.

The browser finds the hosted application.

Vercel sends the client files to the browser.

The browser runs React.

React sends a request to a server route.

Vercel runs the server code for that request.

The server validates the request.

The server queries a Postgres database hosted by Supabase.

Supabase returns rows or an error.

The server sends a response.

React updates browser state and the screen.

The user receives accurate success or failure feedback.
```

The relocation map is:

```text
Week 1: local system

One laptop
├── browser
├── React client
├── Node server
└── SQLite database file
```

```text
Week 2: hosted system

User's device
└── browser running React

Vercel
├── built client files
└── server functions

Supabase
└── Postgres database
```

The parts still form one application because requests connect them.

The product remains the same Family Chore Board.

It should still let a user:

- view chores;
- add a chore;
- assign it to a person;
- mark it done;
- reject invalid input;
- see useful loading, success, and failure feedback;
- refresh and recover saved chores;
- open the same shared teaching data from another browser.

The week deliberately avoids adding major product behavior.

The technical progression is:

```text
Day 8:
Understand what happens when a browser opens a local or public URL.

Day 9:
Deploy only the client and observe what moved and what did not.

Day 10:
Move the server responsibility onto Vercel Functions.

Day 11:
Understand why a local SQLite file is not durable hosted storage and create a Supabase Postgres database.

Day 12:
Connect the hosted server to Supabase and restore the complete workflow.

Day 13:
Understand configuration, secrets, local, preview, and production environments.

Day 14:
Trace, verify, explain, and hand off the complete hosted system.
```

The working habits remain:

```text
understand
→ define success
→ inspect the current system
→ predict
→ move one responsibility
→ run focused checks
→ inspect the evidence
→ test the deployed environment
→ break one connection on purpose
→ explain
→ save
```

---

# The Central Rule for Week 2

Do not begin with dashboards, accounts, keys, or deployment buttons.

Begin with the limitation the student can already observe:

```text
The application works only while my laptop is acting as the whole world.
```

Vercel and Supabase should enter the curriculum as answers to specific questions.

```text
Question:
Where can the client files and server code run
so another person can reach them?

Answer:
Vercel.
```

```text
Question:
Where can the shared data live
so it does not depend on one local SQLite file?

Answer:
A hosted Postgres database on Supabase.
```

Do not teach:

```text
Vercel is where apps go.
Supabase is the backend.
```

Teach:

```text
Vercel is taking over specific jobs
that the developer's laptop performed locally.

Supabase is taking over the job
of running and preserving the shared database.
```

The beginner should never have to accept:

```text
It works because the cloud does it.
```

He should be able to name:

```text
which part moved;
where it moved;
what request connects it;
what data crosses the connection;
what evidence proves it worked;
and what can fail.
```

---

# Scope Boundaries

## This Week Includes

```text
- a minimum useful model of how a browser reaches a website;
- URLs, localhost, ports, public hosts, and request paths;
- a simple explanation of domain-name lookup;
- client files and server responses;
- Vercel CLI deployments from a local project folder;
- generated deployment URLs;
- Vercel Functions for server request handlers;
- a hosted Supabase Postgres database;
- moving the existing chores schema from SQLite to Postgres;
- server-side database access;
- environment variables;
- server-only secrets;
- local, preview, and production environments;
- deployment logs and browser Network evidence;
- deployed acceptance testing;
- a final architecture explanation and handoff.
```

## This Week Does Not Include

```text
- login;
- Supabase Auth;
- user sessions;
- Row Level Security as the main application permission model;
- browser-to-database access;
- family invitations;
- per-user or per-family private data;
- roles or admin screens;
- password recovery;
- realtime subscriptions;
- custom domains;
- analytics products;
- payments;
- file uploads;
- background jobs;
- edge functions;
- mobile apps;
- production hardening;
- claims that the prototype is secure for private family information.
```

Those topics answer a different question:

```text
Who is this person,
and what data are they allowed to access?
```

That belongs in a later week.

Week 2 answers:

```text
How does the already-understood system
move from one laptop to reachable hosted services?
```

---

# The Architecture Must Stay Conceptually Stable

Week 1 established:

```text
browser
→ server
→ database
```

Week 2 should preserve that model:

```text
browser on the user's device
→ server function on Vercel
→ Postgres database on Supabase
```

Do not quietly replace it with:

```text
browser
→ Supabase database API
```

Direct browser access can be designed safely with appropriate authentication, grants, and Row Level Security.

That is not this week's lesson.

For this week:

```text
The browser does not receive the database password.

The browser sends application requests to the server.

The server owns the privileged database connection.

The server validates input and controls the response shape.
```

This continuity matters.

The student should experience hosting as a change in **where responsibilities run**, not a mysterious replacement of the architecture he just learned.

---

# The Minimum Useful Internet Model

The student does not need a networking certification.

He does need six dependable ideas.

## 1. A Web Application Contains Different Kinds of Things

Some parts are files sent to the browser:

```text
HTML
CSS
JavaScript
images
fonts
```

Some parts run somewhere else:

```text
server request handlers
database software
saved database rows
```

The browser downloads the client files and runs the JavaScript.

It does not download the whole server or database.

## 2. A URL Is an Address for a Request

A URL can be introduced with:

```text
https://example.com/api/chores
```

```text
https
= how the browser communicates securely

example.com
= the public host name

/api/chores
= the path being requested
```

The URL is not the application itself.

It tells the browser where to send a request and what resource or behavior it is asking for.

## 3. A Name Must Be Resolved to a Reachable Destination

A domain name is a human-friendly name.

A naming system helps the browser discover which network destination should receive requests for that name.

For this week, the student only needs:

```text
Domain name lookup helps the browser find
where requests for a host should go.
```

Do not require memorization of:

```text
A records
AAAA records
CNAME records
name-server delegation
DNS caching rules
```

## 4. `localhost` Means This Computer

When the browser opens:

```text
http://localhost:5173
```

it is asking a program on the same computer.

```text
localhost
= this device

5173
= the specific local port where a program is listening
```

That explains why:

```text
- stopping the local process makes the page unavailable;
- closing the laptop makes the local system unavailable;
- another person's localhost refers to their computer;
- a phone cannot normally reach the developer's localhost by using the same address.
```

## 5. Deployment Makes a Saved Version Reachable

Deployment takes an identified version of the project, builds what is required, and places the result on hosted infrastructure.

A public URL then gives other browsers a reachable address.

Deployment does not automatically mean:

```text
- every local process was moved;
- every local file became durable storage;
- the database was migrated;
- the environment variables exist;
- the deployed app is correct;
- the prototype is production-ready.
```

## 6. The Cloud Means Software Running on Other Computers

Use this plain-English model:

```text
A cloud service runs software and stores data
on computers managed by another company.

We configure and use those computers
without personally maintaining the hardware.
```

Do not let the cloud become magic vocabulary.

---

# What Each Service Does in This Week

| Part | Responsibility |
| --- | --- |
| Browser | Downloads and runs the React client, sends requests, stores temporary UI state, and displays feedback |
| Git repository | Records the exact project versions that can be deployed |
| Vercel deployment | Builds and serves the client files from a public URL |
| Vercel Function | Runs server code when an application request arrives |
| Supabase project | Runs and manages the hosted Postgres database |
| Postgres table | Stores durable shared chore rows |
| Developer laptop | Edits, tests, explains, commits, and inspects the system |

The student should be able to point to each part and say:

```text
This is the job it performs.
```

---

# The Difference Between Moving and Rebuilding

This week should move one responsibility at a time.

```text
Do not redesign the product.

Do not replace the component structure without need.

Do not add authentication.

Do not invent a new data model.

Do not add realtime.

Do not rewrite all server routes at once.
```

Prefer:

```text
Move the client.
Observe the broken connection.

Move one server route.
Observe the restored connection.

Move the database schema.
Observe the persistent data.

Connect the full path.
Verify the same product behavior.
```

The week succeeds when the learner understands the relocation.

It does not succeed merely because the final URL happens to work.

---

# The Daily Rhythm

Use the same rhythm every day.

## 1. Restate the Current System

Ask:

```text
What runs in the browser?

What runs in the server?

Where does the saved data live today?

Which parts are still on this laptop?
```

## 2. Name Today's Relocation Question

Examples:

```text
How can another browser reach the client?

Where can the server run?

Where can durable data live?

How does hosted server code find the database?
```

## 3. Teach the Mental Model Before the Tool

Do not open a dashboard until the learner can state what job the tool is about to perform.

## 4. Predict

Before changing anything, ask:

```text
What do you think will still work?

What do you think will break?

Which part is moving?

Which part is staying local?

What evidence should appear if the prediction is correct?
```

## 5. Make the Smallest Move

Examples:

```text
Deploy only the client.

Create only /api/health.

Create only the chores table.

Connect only the read operation.
```

## 6. Run Focused Checks

Examples:

```text
build
lint
type check
focused automated tests
one request in the Network panel
one function log
one database query
```

## 7. Test Locally and Remotely

A deployed change must be tested at the deployed URL.

Local success is not evidence of deployed success.

## 8. Break One Connection on Purpose

Examples:

```text
wrong URL
wrong API path
failed build
missing environment variable
wrong table name
invalid database password
```

## 9. Debug from Evidence

Use:

```text
Expected:

Actual:

Evidence:

Last confirmed working layer:

First failing layer:

Smallest next check:
```

## 10. Explain Back

The student explains:

```text
what moved;
where it moved;
what stayed local;
what request connects the parts;
what failed;
what evidence revealed the failure.
```

## 11. Save the Work

Create a Git save point only after an understandable and verified change.

---

# The Main Week 2 Prompt Shape

Use this structure for relocation work:

```text
Relocation goal:
Which responsibility is moving, and where it is moving.

Current architecture:
Where the client, server, and database run now.

Target architecture for this step:
Where each part should run after this change.

What must remain unchanged:
Existing user behavior, API shape, rules, and feedback.

Constraints:
What must not be redesigned or added.

Acceptance criteria:
Observable conditions that define success.

Existing verification:
Tests, type checks, linting, builds, and manual checks already available.

Required new checks:
Checks needed for the relocated behavior.

Local verification:
What should still work locally.

Deployed verification:
What must be tested through the public or preview URL.

Failure test:
One controlled failure to introduce or simulate.

Evidence:
What Codex must report as passed, failed, or not run.
```

Use this structure for hosted-system debugging:

```text
Bug:
What failed.

Expected:
What should have happened.

Actual:
What happened instead.

Environment:
Local, preview, or production.

Request evidence:
URL, method, status, response body, and timing.

Server evidence:
Function logs or server error.

Database evidence:
Query result, table state, or connection error.

Configuration evidence:
Which required variable names are present in this environment.
Do not paste secret values.

Last confirmed working layer:
The latest part of the path that definitely worked.

Constraints:
Make the smallest fix.
Do not redesign the system.
Explain why the environments behaved differently.
Tell me how to verify the fix locally and remotely.
```

---

# Verification Rules for Hosted Work

## Match the Evidence to the Claim

```text
Claim:
The client builds.

Evidence:
The build command passes.
```

```text
Claim:
The public page is reachable.

Evidence:
The generated Vercel URL opens in a fresh browser.
```

```text
Claim:
The hosted server route runs.

Evidence:
A request receives the expected response and a matching function invocation appears in logs.
```

```text
Claim:
The database row was saved.

Evidence:
The database contains the row and a fresh request returns it.
```

```text
Claim:
The full deployed workflow works.

Evidence:
The user workflow succeeds through the deployed URL, survives refresh, and works in a second browser.
```

## The Hosted Verification Ladder

```text
Level 1:
Read the diff.

Level 2:
Run the changed behavior locally.

Level 3:
Run linting, type checking, tests, and the build.

Level 4:
Call the local server route directly.

Level 5:
Open the preview or production deployment.

Level 6:
Inspect the deployed request and response.

Level 7:
Inspect the function logs.

Level 8:
Inspect the database state.

Level 9:
Repeat the workflow from a fresh browser or second device.
```

Do not skip directly from:

```text
The deployment dashboard is green.
```

to:

```text
The application works.
```

---

# Safety Boundaries Before Starting

Say this clearly:

```text
The Week 2 deployment is a public teaching prototype.

Use fictional chores and fictional names.

Do not enter private family information.

Do not paste passwords, database connection strings,
secret keys, tokens, or private company information into Codex.
```

Also teach:

```text
A database credential belongs only in trusted server configuration.

A secret must not be hard-coded in source files.

A secret must not be committed to Git.

A secret must not be printed in logs.

A secret must not be placed in browser JavaScript.
```

Before any command or dashboard action that changes remote data, ask:

```text
What will this change?

Can it delete or expose anything?

Which environment will it affect?

How would we verify or reverse it?
```

---

# Week 2 Overview

Each day lasts approximately:

```text
90 to 150 minutes
```

The mentor should continue reducing support.

Prompt support should fade like this:

```text
Day 8:
The mentor supplies the mental-model exercises and explanation prompts.

Day 9:
The student predicts deployment behavior and completes a guided deployment prompt.

Day 10:
The student writes acceptance criteria for one hosted server route.

Day 11:
The student explains the storage limitation before creating Supabase resources.

Day 12:
The student writes most of the connection and debugging prompt.

Day 13:
The student identifies configuration boundaries and writes the preview test plan.

Day 14:
The student writes the system explanation, verification report, and handoff.
```

---

# Day 8: What Happens When You Open a Website?

## Main Goal

Build a minimum useful mental model of how a browser reaches a local or public application.

Do not create Vercel or Supabase resources today.

Do not begin by deploying.

The learner should first understand the difference between:

```text
a file on this device;
a program listening on localhost;
and a service reachable through a public URL.
```

## Main Mental Model

```text
The browser does not contain the website in advance.

The browser uses an address to send a request.

A local or remote program receives the request.

That program sends files or data back.

The browser reads the response and shows the result.
```

The public request story is:

```text
1. A person enters a URL.
2. The browser identifies the host and path.
3. A naming system helps locate the host.
4. The browser opens a network connection.
5. The browser sends an HTTP request.
6. A hosted service receives it.
7. The service returns files, data, or an error.
8. The browser reads the response.
9. The browser displays the page and runs JavaScript.
10. The JavaScript may send additional requests.
```

The local request story is:

```text
1. A person opens localhost with a port.
2. The browser asks this same computer.
3. A local development process receives the request.
4. The process returns files or data.
5. If the process stops, the address no longer has a listener.
```

## Why This Day Exists

Without this day, deployment becomes a ritual:

```text
open the deployment tool
start a deployment
wait for green
copy a URL
```

The student may succeed without understanding:

```text
- what was built;
- where it runs;
- why localhost is different;
- why the server can still be missing;
- why a public URL can load a broken application.
```

Day 8 prevents that.

## Start with Familiar Experiences

Compare:

```text
- opening a saved HTML file;
- opening a local Vite URL;
- opening the local API URL;
- opening a public website;
- refreshing after stopping the local client;
- refreshing after stopping only the local server;
- opening localhost on a phone;
- disconnecting Wi-Fi and opening a previously visited page.
```

Ask before each experiment:

```text
Which computer do you think the browser will ask?

Which program must be running?

What response do you expect?

What failure would prove your prediction was wrong?
```

## Address Comparison

Use a table like this:

| Address | What the browser is asking |
| --- | --- |
| `file:///.../index.html` | Read a file from this device |
| `http://localhost:5173` | Ask a program listening on port 5173 on this device |
| `http://localhost:3000/api/chores` | Ask a local server route on this device |
| `https://example.com` | Ask a publicly reachable host |
| `https://example.com/api/chores` | Ask a specific route on a publicly reachable host |

## URL Anatomy Exercise

Use:

```text
https://chores-example.vercel.app/api/chores
```

Have the student label:

```text
https
= protocol

chores-example.vercel.app
= host

/api/chores
= path
```

Then compare:

```text
http://localhost:5173
```

```text
http
= protocol

localhost
= this computer

5173
= port
```

The student does not need to memorize every URL feature.

He should understand that changing the host changes which computer or service receives the request.

## Map the Current Chore Board

Draw:

```text
Developer laptop
├── browser
├── React development process
├── Node server process
└── SQLite file
```

For one action such as Add Chore, trace:

```text
browser click
→ React handler
→ request to local server
→ server validation
→ SQLite insert
→ server response
→ React state update
→ visible feedback
```

Then ask:

```text
What stops working if the React process stops?

What stops working if the Node server stops?

What stops working if the SQLite file is missing?

What stops working when the laptop closes?

Which part could a person on another device currently reach?
```

## Guided Codex Explanation Prompt

```text
I am a complete beginner learning how a web application is served.

Do not write code.

Explain these addresses in plain English:
- a file:// address
- http://localhost:5173
- http://localhost:3000/api/chores
- a public https:// URL

For each one, explain:
1. which computer the browser is asking
2. which program must respond
3. what kind of response may come back
4. what could make the request fail

Then explain this request story:
URL → host lookup → request → response → browser display.

Do not teach DNS record types, TCP packet details, or certificate administration.
Use one simple analogy, but also give the literal technical explanation.
```

## Observation Exercise

Run the local system.

Open the browser Network panel.

Reload the page.

Identify:

```text
- the request for the main page;
- one JavaScript file;
- one CSS file, if present;
- one request to the local API;
- the host and port for each request;
- the response status for each request.
```

The student should see that one visible screen may depend on several requests.

## Break It on Purpose

Use varied failures.

### Failure 1: Stop the Client Process

Expected:

```text
The browser cannot retrieve the client files from the local development address.
```

### Failure 2: Start the Client but Stop the Server

Expected:

```text
The page may load,
but server-backed chore requests fail.
```

### Failure 3: Use the Wrong Port

Expected:

```text
The browser asks a place where no expected program is listening.
```

### Failure 4: Open Localhost on a Phone

Expected:

```text
The phone interprets localhost as the phone itself,
not the developer's laptop.
```

### Failure 5: Disconnect the Network

Compare:

```text
- a local address;
- a public address;
- resources the browser may already have cached.
```

Do not over-teach caching.

Use the experiment to show that local and public requests depend on different connections.

## Debug from Evidence

Ask:

```text
What address did the browser request?

Which host and port did it use?

Did a request appear in the Network panel?

Did any program receive it?

Was there a response status?

Was the failure in finding the destination,
connecting to it,
or using the response?
```

## Verification Focus

The student should demonstrate:

```text
A saved file can open without a development server.

A localhost application depends on a local process.

The client and API can fail independently.

A public host is different from localhost.

The Network panel shows individual requests and responses.

Changing a URL's host or port changes where the browser asks.
```

## Student Deliverable

Create:

```text
week2-day8-internet-mental-model.md
```

Include:

```text
1. A plain-English definition of localhost.

2. A plain-English definition of a public URL.

3. A labeled URL.

4. A diagram of the current local Chore Board.

5. The ten-step public request story.

6. A comparison of file, localhost, and public addresses.

7. Evidence from four controlled failures.

8. Two things the student still does not understand.
```

## Explain Back

The student should say without notes:

```text
A URL tells the browser where to send a request.

Localhost means this computer.

A port identifies which local program should receive the request.

A public host can be reached by other devices through the internet.

The browser receives files or data in responses.

The browser can load the client even while a separate server request fails.

My current app depends on processes and a database file on my laptop.
```

## Done When

```text
The student can explain why localhost works only while local programs run.

The student can distinguish a client-file request from an API request.

The student can label the protocol, host, port, and path in simple URLs.

The student can use the Network panel to identify a request and response.

The student understands that a public URL must point to a reachable hosted service.

The student has not yet been asked to configure Vercel or Supabase.
```

---

# Day 9: Deploy Only the Client and Observe the Missing Pieces

## First, What Problem Is Vercel Solving?

The Family Chore Board currently works because the developer's laptop runs the client, server, and SQLite file. But another person cannot use the client while that laptop is closed.

Vercel is a service that can take a saved project version, build the client files, and make those files reachable through a public URL. On Day 9, Vercel takes over only the job of serving the React client; it does not automatically take over the Node server or SQLite file.

Git, the Vercel account, and the Vercel CLI have different jobs:

```text
Git:
keeps save points in the project history.

Vercel account:
manages hosted deployments.

Vercel CLI:
sends the local project to Vercel from the terminal.

Vercel:
builds the client and serves it through a public URL.
```

## Main Goal

Deploy the React client to Vercel and use the resulting partial failure to understand what deployment moved and what it left behind.

The goal is not to make the whole application work today.

The goal is to prove:

```text
The client can be publicly reachable
while the server and database are still local.
```

## Main Mental Model

```text
A deployment is a hosted build of a particular saved project version.
```

For today's step:

```text
Before:
The browser gets the React client from a process on the developer's laptop.

After:
The browser gets the built React client from Vercel.
```

The server and database do not move automatically.

## The Prediction Before Deployment

Show the current architecture:

```text
React client
→ local Node server
→ local SQLite file
```

Ask:

```text
If we deploy only the React client, which parts should work?

Which parts should fail?

Will the page structure and styling appear?

Will browser-only interactions work?

Can a public webpage call someone else's localhost?

Will the SQLite database appear on Vercel automatically?
```

The expected prediction is:

```text
The built screen may load.

Client-side interactions may still work.

Requests aimed at localhost will fail or ask the visitor's own device.

The local Node server will remain on the developer's laptop.

The SQLite file will remain on the developer's laptop.
```

Write the prediction before opening Vercel.

## What Vercel Is Doing Today

Use this narrow explanation:

```text
The Vercel CLI sends the local project folder to Vercel.

Vercel creates a deployment from the project version you sent.

Vercel installs the project dependencies.

Vercel runs the configured build.

The build produces client files.

Vercel makes those files reachable through a generated URL.
```

Do not present the generated URL as proof that the whole application works.

## Git and Deployment

Connect the ideas:

```text
Git commit:
An identified save point in the project history.

Deployment:
A hosted result built from an identified project version.
```

The student should be able to answer:

```text
Which local project folder was sent?

Which Git save point or project version was sent?

What build command ran?

Did the build pass?

What generated URL points to this deployment?
```

## Create a Vercel Account and Install the CLI

Create or sign in to a Vercel account before deploying. Install the Vercel CLI from the terminal and confirm it:

```bash
npm install --global vercel
vercel --version
vercel login
```

The account manages deployments; it does not change the project code, server, or database. The CLI sends the local project folder to Vercel. Do not paste passwords, one-time codes, or secret values into Codex.

## Before Deploying from the Project Folder

Run locally:

```text
- the test command;
- the type-check command, if present;
- the lint command, if present;
- the production build command.
```

Record:

```text
Command:

Result:

Any warning:

What this proves:

What this does not prove:
```

The build command proves the client can be built locally.

It does not prove the hosted environment has the same configuration or that server requests will work.

## Guided Relocation Prompt

```text
Relocation goal:
Move only the React client from the local development process to Vercel.

Current architecture:
The React client, Node server, and SQLite database all run on my laptop.

Target architecture for this step:
The client files are built and served by Vercel.
The Node server and SQLite database remain local and are expected not to work from the public deployment.

What must remain unchanged:
- the current user interface
- existing client behavior
- existing API request shape
- existing local development workflow

Constraints:
- do not migrate the server yet
- do not migrate the database yet
- do not add authentication
- do not replace the framework
- do not hide failed requests

Acceptance criteria:
- the project builds successfully
- Vercel produces a generated URL
- the public URL loads the client interface
- the local Git save point or project version sent to Vercel can be identified
- server-backed actions fail honestly if they still point to localhost
- local behavior remains unchanged

Verification:
- run existing tests
- run type checking and linting if available
- run the production build
- open the generated URL in a private window
- open it on a second device if available
- inspect failed API requests in the Network panel

Evidence:
Report what passed, what failed, and what is intentionally incomplete.
Do not claim the whole application works.
```

## Deployment Sequence

Use a guided sequence.

```text
1. Confirm the working tree is clean or intentionally understood.
2. Confirm the latest commit contains the intended client.
3. Open the terminal in the local project folder.
4. Run `vercel` to start a preview deployment.
5. Read each question and explain unfamiliar settings before accepting them.
6. Inspect the build result.
7. Open the generated URL.
8. Test the visible client.
9. Inspect the API requests.
10. Record what moved and what did not.
```

The student should not click through unfamiliar configuration without explaining what it controls.

## Open the Deployed Page and Find the Evidence

When the `vercel` command finishes successfully, it prints a deployment URL. Copy that exact URL into a private or incognito browser window. Check whether the URL opens, whether the page is styled, whether the client files load, and whether the API request targets `localhost` or a public host.

If the URL is lost, run:

```bash
vercel list
```

To inspect a deployment from the terminal, use:

```bash
vercel inspect <deployment-url> --logs
```

The Vercel dashboard can also show the project’s deployments and build logs. Troubleshoot from the first failure: terminal output for a failed CLI deployment, Vercel build logs for a failed build, browser Network and Console panels for client or asset failures, and runtime logs for a hosted server request that fails later in the course.

## The Important Partial Failure

Allow the deployed page to be incomplete.

A useful result is:

```text
The screen loads from Vercel.

The request to a localhost API fails.
```

Explain:

```text
The browser is now running on the visitor's device.

When that browser requests localhost,
it means the visitor's device.

It does not mean the developer's laptop.
```

This is the moment the student should understand why the server must also be hosted.

## Inspect the Network Evidence

At the public URL, identify:

```text
- the document request;
- the JavaScript asset request;
- the API request;
- the host used by each request;
- the response status or connection error;
- the visible feedback shown to the user.
```

Ask:

```text
Did the client load?

Did the API request leave the browser?

Which host did it target?

Could that host possibly refer to the developer's local server from this device?
```

## Break It on Purpose

### Failure 1: Introduce a Small Build Error

Create a branch or controlled commit with one obvious syntax or import error.

Predict:

```text
The deployment should fail during the build.

No successful new deployment should replace the working production deployment.
```

Inspect:

```text
- the failed build step;
- the error message;
- the file and line if provided;
- the previous working deployment.
```

Fix the error locally.

Run the local build.

Commit the fix.

Push and verify a successful deployment.

### Failure 2: Use a Wrong Client API Base URL

Observe:

```text
The client files can still load.

Only the data request fails.
```

The goal is to distinguish:

```text
build failure
```

from:

```text
runtime request failure
```

## Verification Focus

Verify separate claims:

```text
The repository commit exists.

The client build passes.

Vercel created a deployment from that commit.

The generated URL is reachable.

The client interface renders in a fresh browser.

The API request failure is visible and understandable.

The local application still works.

The SQLite file has not moved.
```

## Student Deliverable

Create:

```text
week2-day9-client-deployment.md
```

Include:

```text
1. The generated deployment URL.

2. The deployed branch and commit.

3. The build command and result.

4. A before-and-after architecture diagram.

5. The written prediction from before deployment.

6. What worked at the public URL.

7. What failed at the public URL.

8. Network evidence for the failed API request.

9. Evidence from one failed build and its repair.

10. A statement of what remains local.
```

## Explain Back

The student should say:

```text
Vercel built the React client from a Git commit.

The generated URL lets another browser request those built files.

The client can load even though the server is missing.

A localhost API URL on the public page does not point back to my laptop.

My SQLite database did not move when the client deployed.

A green deployment means the build succeeded.
It does not prove every application workflow succeeds.
```

## Done When

```text
The student can identify the deployed commit and generated URL.

The public client loads in a fresh browser.

The student predicted and explained the missing-server failure.

The student can distinguish a build failure from a runtime request failure.

The local application still works.

No server or database migration has been hidden inside today's work.
```

---

# Day 10: Move the Server Responsibility onto Vercel

## Main Goal

Understand how server code can run on hosted infrastructure and move one request handler at a time to Vercel Functions.

Do not connect the database yet.

The goal is to prove:

```text
public browser
→ hosted server route
→ response
```

## Main Mental Model

Week 1 used a long-running local server process:

```text
npm starts the server.

The process waits on the laptop.

Requests arrive.

The server handles them.
```

Vercel Functions use a request-triggered model:

```text
A request arrives at a route.

Vercel invokes the associated server code.

The code creates a response.

The platform manages the function instances.
```

The server responsibility is unchanged:

```text
receive request
→ read input
→ apply rules
→ call data services when needed
→ create response
```

What changes is where and how the code runs.

## Important Continuity

Do not teach:

```text
We no longer have a server.
```

Teach:

```text
We still have server code.

We are no longer managing one always-running server process ourselves.

Vercel runs the appropriate server function when a request arrives.
```

## Current and Target Architecture

Before:

```text
Public browser
→ Vercel client
→ missing or local-only server
```

After today's first step:

```text
Public browser
→ Vercel client
→ Vercel /api/health function
```

After today's second step:

```text
Public browser
→ Vercel client
→ Vercel /api/chores function
→ temporary sample data
```

The database still does not move today.

## Start with a Health Route

Use:

```text
GET /api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

The health route should not:

```text
- query SQLite;
- query Supabase;
- read a secret;
- contain product logic;
- return a large response.
```

It exists to isolate one claim:

```text
A public request can run hosted server code and receive a response.
```

## Define Success Before Building

```text
Acceptance criteria:

- GET /api/health returns a successful status.
- the response body contains { "status": "ok" }.
- unsupported methods receive an intentional response if the framework requires it.
- the route works locally through the chosen local development setup.
- the route works through a Vercel preview or production URL.
- a matching invocation or log entry can be inspected.
- existing client behavior remains unchanged.
```

## Guided Function Prompt

```text
Relocation goal:
Move one server responsibility to a Vercel Function.

Current architecture:
The client is deployed on Vercel, but the server still runs only as a local Node process.

Target architecture for this step:
GET /api/health runs as hosted server code on Vercel and returns JSON.

Constraints:
- create only the health route first
- do not connect a database
- do not add authentication
- do not add a new framework
- do not move every existing route at once
- preserve the local development workflow where practical

Acceptance criteria:
- GET /api/health returns a 2xx response
- the JSON body is { "status": "ok" }
- the route works locally
- the route works at the deployed URL
- function logs provide evidence of the invocation

Existing verification:
Inspect the repository and list the available tests, lint, type-check, build, and local-development commands before editing.

Required new checks:
Add the smallest focused test appropriate for the route if the project already has a server-test pattern.
Do not introduce a large test framework only for this exercise.

Evidence:
Report the exact commands run, the request tested, the status received, and what remains unverified.
```

## Build and Observe the Health Route

Test locally:

```text
Request:
GET http://localhost:[port]/api/health

Expected status:
2xx

Expected body:
{ "status": "ok" }
```

Then deploy.

Test remotely:

```text
Request:
GET https://[deployment-host]/api/health
```

Inspect:

```text
- request URL;
- response status;
- response body;
- response headers at a high level;
- function invocation or logs;
- visible client behavior if the route is called from the UI.
```

## Move One Read-Only Chore Route

After the health route is understood, move only:

```text
GET /api/chores
```

For today, it may return a small temporary array:

```json
[
  {
    "id": 1,
    "title": "Take out recycling",
    "assigned_to": "Sam",
    "done": false
  }
]
```

Explain clearly:

```text
This is server-provided data.

It is not yet persistent data.

The function is returning a fixed teaching value
so we can verify the hosted request path separately from storage.
```

## Why Temporary Sample Data Is Useful

It isolates:

```text
browser request
→ hosted route
→ JSON response
→ React state
→ rendering
```

If the database is introduced at the same moment, a failure could come from:

```text
- route configuration;
- function runtime;
- request path;
- environment variables;
- database networking;
- database credentials;
- SQL;
- response shape;
- React rendering.
```

One layer at a time keeps the learner oriented.

## Update the Client Carefully

Change the deployed client to request:

```text
/api/chores
```

Prefer a same-origin relative path for the deployed application when the architecture supports it.

Explain:

```text
A relative API path tells the browser:
Ask the same host that served this page,
but use the /api/chores path.
```

Compare:

```text
http://localhost:3000/api/chores
```

with:

```text
/api/chores
```

The student should understand why hard-coding localhost into a public client causes failure.

## Break It on Purpose

### Failure 1: Wrong Route Path

Client requests:

```text
/api/chore
```

Server provides:

```text
/api/chores
```

Inspect:

```text
- requested URL;
- response status;
- visible error feedback;
- whether the function ran.
```

### Failure 2: Function Throws an Error

Introduce a controlled error in the health route on a temporary branch.

Observe:

```text
- browser response;
- user-facing behavior;
- function log;
- deployment remains reachable even though one route fails.
```

### Failure 3: Response Shape Mismatch

Return:

```json
{
  "chores": []
}
```

while the client expects:

```json
[]
```

Ask:

```text
Did the server route run?

Was the status successful?

Did the data shape match the client's expectation?

Which layer should be corrected?
```

## Verification Focus

Verify separate claims:

```text
The health route runs locally.

The health route runs on Vercel.

The read-only chores route returns JSON.

The deployed client requests the hosted route.

The client renders the response.

The function logs show the request reached server code.

The returned chores are not yet persistent.

No database credential exists in browser code.
```

## Student Deliverable

Create:

```text
week2-day10-hosted-server.md
```

Include:

```text
1. A comparison of the local server process and Vercel Functions.

2. The health-route acceptance criteria.

3. Local and deployed request evidence.

4. One function-log example with secrets removed.

5. The /api/chores request and response shape.

6. An explanation of why the sample data is not persistent.

7. Evidence from a wrong route, thrown error, or response-shape mismatch.

8. A diagram of the current partial architecture.
```

## Explain Back

The student should say:

```text
The server responsibility still exists.

Vercel runs server code when a request reaches the function route.

The health route proves the hosted request path without involving a database.

The chores route currently returns temporary sample data.

A successful JSON response does not prove the data was saved.

The function logs help prove whether the request reached server code.
```

## Done When

```text
The student can call /api/health locally and remotely.

The student can identify one function invocation in logs.

The deployed client can load temporary chores from a hosted route.

The student can explain request-triggered server execution in plain English.

The student understands that persistence is still missing.

The database has not yet been connected.
```

---

# Day 11: Why the SQLite File Cannot Simply Come Along

## Main Goal

Understand the difference between deployed application code and durable shared storage, then create a hosted Postgres database on Supabase using the existing chore data model.

Do not connect the deployed application yet.

The goal is to answer:

```text
Where can the shared chore rows live
when the server is no longer one process
with one durable file on the developer's laptop?
```

## Main Mental Model

Week 1 used:

```text
one server process
→ one SQLite engine
→ one database file on the same laptop
```

That was a good architecture for learning and for a local prototype.

The hosted function environment is different:

```text
A request may run in a function instance.

Another request may run later in a different or reused instance.

The function's bundled filesystem is not a shared durable application disk.

Temporary writable space must not be treated as the source of truth.
```

Therefore:

```text
Application code can be deployed with the function.

Shared changing data needs a separate durable service.
```

## Do Not Teach That SQLite Is Bad

Use this explanation:

```text
SQLite worked well for the Week 1 architecture.

The problem is not that SQLite is fake or weak.

The problem is that our hosted execution model
no longer gives every request one dependable shared local file
that should be treated as permanent application storage.
```

The storage requirement changed.

The technology choice changes with it.

## Prediction Exercise

Ask:

```text
What would happen if we bundled chores.db with the function code?

Would all function instances share changes to that file?

Would changes survive new deployments?

Would temporary writable space be a trustworthy permanent database?

Could two simultaneous requests safely treat their local copies as one shared truth?
```

The student should reach:

```text
A deployed file can be read as part of the application bundle,
but changing it does not create a reliable shared durable database.
```

## Code Lifetime Versus Data Lifetime

Compare:

| Thing | Expected lifetime |
| --- | --- |
| A deployment build | Until another deployment replaces or supersedes it |
| One function invocation | Long enough to handle a request |
| One function instance | Managed and reused or removed by the platform |
| Temporary scratch file | Temporary and not the shared source of truth |
| Chore database row | Must remain available across requests, instances, refreshes, and deployments |

The key sentence is:

```text
Durable application data must outlive any one request or function instance.
```

## Introduce Supabase by Responsibility

Do not say only:

```text
Supabase is the backend.
```

Say:

```text
Supabase will run and manage a Postgres database.

That database has its own durable storage and network address.

The Vercel server functions can connect to it when handling requests.
```

For this week, Supabase is being used primarily for:

```text
hosted Postgres
```

Do not introduce:

```text
Auth
Realtime
Storage buckets
Edge Functions
browser client libraries
```

unless only to say they exist but are outside scope.

## SQLite and Postgres Comparison

| Week 1 | Week 2 |
| --- | --- |
| SQLite database engine | Postgres database engine |
| One local database file | A hosted database service |
| Local server opens the file | Hosted server connects over the network |
| File path identifies storage | Connection information identifies the database |
| Local inspection tool | Supabase Table Editor or SQL Editor |
| Reachable while the local system runs | Reachable independently of the developer's laptop |

Keep the conceptual continuity:

```text
Both databases contain tables.

Tables contain rows.

Rows contain fields.

Queries read or change rows.
```

## Preserve the Existing Data Model

Use the Week 1 chore shape:

```text
id
title
assigned_to
done
created_at
```

Do not redesign it into:

```text
users
families
memberships
permissions
recurrence
notifications
points
comments
```

The schema should remain intentionally boring.

Example SQL:

```sql
create table chores (
  id bigint generated by default as identity primary key,
  title text not null,
  assigned_to text not null,
  done boolean not null default false,
  created_at timestamptz not null default now()
);
```

The exact SQL may be adapted to match the existing Week 1 schema.

The important rule is:

```text
Do not change the product meaning during the storage migration.
```

## Introduce Migrations Carefully

Use this definition:

```text
A database migration is a saved, reviewable instruction
for changing the database structure.
```

A migration gives the project a record of:

```text
- what table should exist;
- which columns it contains;
- which rules the database enforces;
- how another environment can reproduce the structure.
```

For this beginner week, the mentor may provide or heavily guide the first migration.

The student should still read every line and explain:

```text
what it creates;
what each field means;
which values are required;
which defaults are applied.
```

## Dashboard Versus Source-Controlled Schema

The Supabase dashboard can be useful for observing and experimenting.

But the project should also retain a schema or migration file in the repository.

Teach:

```text
Dashboard state shows what exists remotely.

Migration files record what the project expects to exist.
```

Do not let the remote table become undocumented magic.

## Create the Supabase Project

Use a guided sequence:

```text
1. Create or select a disposable teaching Supabase project.
2. Record the project name and region without recording secrets in notes.
3. Open the database tools.
4. Review the SQL or migration before running it.
5. Create the chores table.
6. Inspect the table columns.
7. Insert one fictional row manually.
8. Query the row.
9. record the schema in the repository.
```

Use fictional data such as:

```text
Title:
Water the demo plant

Assigned to:
Taylor
```

## The Magic Moment

Insert one row through the Supabase dashboard or SQL Editor.

Then inspect it there.

Explain:

```text
This row exists outside the browser.

It exists outside the Vercel function.

It exists outside the developer's laptop.

The application is not connected to it yet.

Tomorrow the server will request this row.
```

Separating creation from connection makes the database's independent existence visible.

## Guided Schema Prompt

```text
Do not write application code yet.

We are moving the Family Chore Board's persistent storage
from a local SQLite database to a hosted Supabase Postgres database.

Current chore fields:
- id
- title
- assigned_to
- done
- created_at

Help me create the smallest Postgres schema that preserves the same product meaning.

For each field, explain:
1. what it means
2. the Postgres type
3. whether it is required
4. any default
5. one example value

Constraints:
- do not add users, families, auth, RLS policies, reminders, points, recurrence, or extra tables
- do not connect the React client directly to Supabase
- do not write application routes yet
- preserve the existing API meaning

Then provide one migration file and a verification query.
Before suggesting that the migration is run, list what it will create or change.
```

## Verify the Schema

Inspect:

```text
- table name;
- column names;
- column types;
- required fields;
- default values;
- primary key;
- manually inserted teaching row;
- migration file in Git.
```

Ask:

```text
Could a blank title still enter the database?

Does the database default done to false?

Who creates the id?

Who creates created_at?

Does the schema match the server's expected field names?
```

Application validation will still remain important.

Database constraints provide another layer of evidence.

## Break It on Purpose

Use a disposable or rolled-back schema experiment.

### Failure 1: Wrong Column Name

Create a query using:

```text
assignedTo
```

when the database column is:

```text
assigned_to
```

Observe the database error.

### Failure 2: Missing Required Field

Attempt to insert a chore without a title.

Observe whether the database rejects it.

### Failure 3: Query the Wrong Table

Use:

```text
chore
```

instead of:

```text
chores
```

Use the error to show that database names are part of the contract.

## Debug from Evidence

Ask:

```text
Did the database receive a query?

Was the table found?

Were the field names correct?

Did a constraint reject the value?

Did the query return zero rows,
or did it fail?

What exact database message provides evidence?
```

## Verification Focus

Verify:

```text
The Supabase project contains a Postgres database.

The chores table exists.

The schema matches the existing product meaning.

A fictional row can be inserted and queried.

An invalid insert is rejected where the schema requires it.

The migration or schema file exists in the repository.

The deployed application is not yet claiming to use this database.
```

## Student Deliverable

Create:

```text
week2-day11-hosted-database.md
```

Include:

```text
1. Why the Vercel function filesystem is not the shared durable database.

2. A code-lifetime versus data-lifetime comparison.

3. A SQLite versus Postgres comparison.

4. The chores schema in plain English.

5. The migration filename.

6. Evidence that the table exists.

7. Evidence that one fictional row exists.

8. Evidence from one invalid query or insert.

9. A current architecture diagram showing the database exists but is not yet connected.
```

## Explain Back

The student should say:

```text
SQLite was appropriate for the local Week 1 system.

A Vercel function does not provide one permanent shared writable database file.

Durable chore rows must outlive requests, function instances, and deployments.

Supabase runs a hosted Postgres database.

The chores table preserves the existing data model.

The database exists independently even though the application is not connected yet.

The migration records the expected database structure.
```

## Done When

```text
The student can explain why application code and persistent data have different lifetimes.

A Supabase Postgres project exists for disposable teaching data.

The chores table matches the Week 1 schema meaning.

One fictional row can be inspected.

The schema is represented in the repository.

No database password or connection string has been committed.

No client-side Supabase connection has been introduced.
```

---

# Day 12: Connect the Hosted Server to Supabase

## Main Goal

Connect Vercel server functions to the Supabase Postgres database and restore the complete shared chore workflow one operation at a time.

The target architecture is:

```text
browser
→ Vercel client
→ Vercel server function
→ Supabase Postgres
→ Vercel server function
→ browser
```

## Main Mental Model

The browser still asks the server.

The server now connects to a database running on another hosted service.

```text
User action
→ browser request
→ Vercel function
→ validation
→ Postgres query
→ query result
→ server response
→ React state update
→ visible feedback
```

The database connection is a server responsibility.

The browser should not receive:

```text
- the database password;
- the full database connection string;
- a privileged secret key;
- unrestricted query capability.
```

## The New Network Connection

Week 1:

```text
Node server
→ opens local SQLite file
```

Week 2:

```text
Vercel function
→ opens a network connection to Supabase Postgres
```

The student should understand:

```text
The server and database are now separate hosted systems.

A database query can fail even when the server function itself runs.
```

## Serverless Database Connection Orientation

Vercel Functions are temporary request-driven compute.

Supabase provides connection options suited to different kinds of clients.

For serverless functions, use the connection method recommended by the current Supabase documentation for temporary or serverless clients.

At the time this curriculum was prepared, Supabase recommends a transaction-pooler connection for serverless or edge functions.

Do not make the beginner memorize connection-pooler internals.

Use this model:

```text
A connection pooler helps many short-lived server requests
share a manageable set of database connections.
```

The mentor should prepare the database library and connection settings carefully.

The student should still understand:

```text
- the function is the database client;
- the connection information is server-only configuration;
- the query still reads or changes Postgres rows;
- the pooler does not replace the database.
```

## Connect One Operation at a Time

Use this order:

```text
1. Read chores.
2. Add one chore.
3. Mark one chore done.
4. Delete only if it already existed in Week 1 and time allows.
```

Do not connect every operation in one unreviewed change.

## Step 1: Read Chores

Target route:

```text
GET /api/chores
```

Server responsibility:

```text
receive request
→ query chores ordered predictably
→ map rows into the expected response shape
→ return JSON
```

Acceptance criteria:

```text
- the function connects using server-only configuration;
- the manually inserted Supabase row is returned;
- the deployed client renders the row;
- loading feedback appears while waiting;
- useful failure feedback appears after a database error;
- no privileged credential appears in browser code or Network responses;
- the local and deployed response shapes agree.
```

## The Second Magic Moment

Before changing data from the app:

```text
1. Confirm the fictional row exists in Supabase.
2. Open the deployed app.
3. Refresh.
4. Observe the row appear.
```

Explain:

```text
The browser did not invent this row.

The Vercel server function queried Supabase.

Supabase returned the row.

The server returned JSON.

React rendered the response.
```

## Step 2: Add a Chore

Target route:

```text
POST /api/chores
```

The server should:

```text
- parse the request body;
- reject a blank title;
- validate assigned_to;
- insert one row;
- return the created row;
- return an intentional error after invalid input or database failure.
```

Prefer confirmed feedback first:

```text
User submits
→ UI shows saving
→ server validates
→ database inserts
→ server returns created row
→ UI adds confirmed row
→ UI shows success
```

Do not start with optimistic updates unless the student can explain rollback.

## Step 3: Mark a Chore Done

Use the existing Week 1 route shape where possible.

The server should:

```text
- identify the requested chore;
- validate the new done value or intended action;
- update only the matching row;
- return the updated row or a clear not-found response.
```

Verify:

```text
Only the selected row changes.

The database row changes.

A refresh returns the changed value.

A second browser receives the changed value after loading again.
```

## Preserve Server Rules

Do not move all responsibility into SQL or the browser.

The server should continue to:

```text
- validate request shape;
- reject invalid user input;
- control which fields can be changed;
- choose the response shape;
- translate internal failures into useful HTTP responses;
- avoid exposing raw credentials or unnecessary database details.
```

The database should continue to:

```text
- store rows durably;
- enforce basic schema constraints;
- generate ids or timestamps where configured;
- execute queries.
```

## Student-Written Connection Prompt

The student should now write most of the prompt.

It should resemble:

```text
Relocation goal:
Replace temporary data in GET /api/chores with rows from Supabase Postgres.

Current architecture:
The React client and Vercel server route are deployed.
GET /api/chores currently returns fixed sample data.
A Supabase Postgres chores table already exists.

Target architecture:
The browser requests /api/chores.
The Vercel function queries Supabase using server-only DATABASE_URL configuration.
The function returns the same JSON shape the client already expects.

What must remain unchanged:
- the existing endpoint path
- the existing response field names
- loading and error feedback
- blank-title validation for later writes
- current client rendering

Constraints:
- do not connect the browser directly to Supabase
- do not expose the database URL
- do not add auth, RLS, realtime, or new product features
- do not rewrite all routes at once
- use the current Supabase-recommended connection option for serverless functions
- keep the smallest database library compatible with the project

Acceptance criteria:
- the manually inserted row appears after refresh
- the request returns a successful status and expected JSON
- a database failure produces an intentional server error and useful client feedback
- existing local checks pass
- the deployed route is tested

Verification:
- inspect the Network request and response
- inspect the Vercel function logs
- inspect the Supabase row
- confirm no credential appears in the client bundle or response
- run tests, type checking, linting, and build commands

Evidence:
Report exact commands and remote checks.
Do not claim write operations work yet.
```

Write separate small prompts for Add and Done.

## End-to-End Evidence for One Action

For Add Chore, record:

```text
User action:

Browser request:

Request method:

Request body:

Server validation:

SQL operation:

Database result:

Response status:

Response body:

React state change:

Visible feedback:

Refresh result:
```

This is the core Week 2 trace.

## Break It on Purpose

Use one failure from each connection category.

### Failure 1: Wrong Table Name

The server queries:

```text
chore
```

instead of:

```text
chores
```

Observe:

```text
The function runs.
The database query fails.
The server should not claim success.
The client should show useful failure feedback.
```

### Failure 2: Wrong Connection Configuration

Temporarily use an invalid development value in a safe environment.

Observe:

```text
- function invocation;
- connection error;
- server response;
- client feedback.
```

Never paste the real secret into the debugging notes.

### Failure 3: Database Saves but Client Misreads the Response

The insert succeeds, but the client expects the wrong shape.

Ask:

```text
Was the row created?

Was the server response successful?

Did the response body match the client contract?

Could retrying create a duplicate row?
```

This demonstrates why database inspection matters.

### Failure 4: Client Updates but Database Does Not

Simulate or identify a path where local state changes before confirmation.

Refresh.

If the chore disappears, explain:

```text
The screen changed,
but persistence was never confirmed.
```

## Debug Layer by Layer

Use:

```text
1. Did the user action fire?
2. Did React create the request?
3. Did the request reach the Vercel route?
4. Did the function receive the expected input?
5. Did validation pass?
6. Did the function connect to Postgres?
7. Did the query execute?
8. Did the row change?
9. Did the function return the expected status and shape?
10. Did React update state?
11. Did the screen show accurate feedback?
12. Did refresh return the saved result?
```

## Verification Focus

Verify the complete hosted path:

```text
The deployed client loads.

GET /api/chores reaches the Vercel function.

The function queries Supabase.

Supabase returns the expected rows.

The server returns the expected JSON shape.

The client renders loading, success, and failure states.

POST creates one row after valid input.

Blank input is rejected.

Done updates only the selected row.

Refresh returns saved data.

A second browser receives the same shared teaching data.

No database credential is visible in browser code or responses.
```

## Student Deliverable

Create:

```text
week2-day12-complete-hosted-path.md
```

Include:

```text
1. The complete hosted architecture diagram.

2. One GET request trace.

3. One Add Chore trace from click to Postgres row and back.

4. One Done trace.

5. Network evidence.

6. Function-log evidence with secrets removed.

7. Database-row evidence.

8. Refresh and second-browser evidence.

9. Evidence from one database connection failure.

10. A list of what remains deliberately unsecured or out of scope.
```

## Explain Back

The student should say:

```text
The browser asks the Vercel server route.

The Vercel function validates the request.

The function uses server-only configuration to connect to Supabase Postgres.

Postgres reads or changes a durable row.

The function returns an HTTP response.

React updates browser state and the screen.

The row survives refresh because it lives in Postgres,
not because React remembered it.

A second browser can load the same shared teaching data.
```

## Done When

```text
The complete deployed core workflow works through the public or preview URL.

The manually inserted database row appears in the app.

A valid chore can be added and survives refresh.

A blank chore is rejected.

Only the selected chore becomes done.

A second browser sees the shared teaching data after loading.

The student can locate failures in the browser, function, connection, query, or rendering layer.

No privileged database credential is exposed to the browser or committed to Git.
```

---

# Day 13: Configuration, Secrets, Preview, and Production

## Main Goal

Understand how the same code connects to different hosted resources without hard-coding secret or environment-specific values.

Use a Vercel preview deployment to test a small change before production.

The goal is not to build a sophisticated release pipeline.

The goal is to understand:

```text
Code describes behavior.

Configuration tells that code
which external resources to use in one environment.
```

## Main Mental Model

The application code may say:

```text
Connect to the database identified by DATABASE_URL.
```

The environment supplies:

```text
DATABASE_URL = [the actual server-only connection information]
```

The code can remain the same while the value changes between environments.

## Why Environment Variables Enter Only Now

If environment variables are introduced before the learner understands the hosted connections, they look like ritual:

```text
Create this file.
Paste this long string.
Use this special name.
Do not ask why.
```

Now the learner can connect the value to a responsibility:

```text
The Vercel function needs to know
which Postgres database to contact
and how to authenticate to it.
```

## Code Versus Configuration

Use this comparison:

| Belongs in code | Belongs in configuration |
| --- | --- |
| Validate that a title is not blank | Database connection URL |
| Query the chores table | Secret database password |
| Return a 400 response for invalid input | Environment-specific service address |
| Map a row into API JSON | Optional environment label |
| Display loading feedback | Values that differ between local, preview, and production |

The student should be able to explain why:

```text
The rule is part of the application.

The credential identifies a particular external resource.
```

## The Three Environments

Use:

```text
Local
Preview
Production
```

### Local

```text
Purpose:
Build, run, inspect, and debug on the developer's computer.

Typical address:
localhost.

Configuration:
Local environment file or development settings.
```

### Preview

```text
Purpose:
Test a proposed Git branch or change through a real hosted URL
before it becomes the main public version.

Typical address:
A generated Vercel preview URL.

Configuration:
Preview environment variables.
```

### Production

```text
Purpose:
Serve the version currently intended as the main public prototype.

Typical address:
The project's production URL.

Configuration:
Production environment variables.
```

The beginner does not need custom environments this week.

## Environment Diagram

```text
Same repository
      │
      ├── local run
      │     └── local configuration
      │
      ├── preview deployment
      │     └── preview configuration
      │
      └── production deployment
            └── production configuration
```

## The Secret Boundary

Teach this clearly:

```text
Server-only environment variables
can be read by trusted server code.

Browser JavaScript is delivered to users
and must be treated as inspectable.
```

For a Vite client, variables intentionally exposed through the client build convention are not secret.

Therefore:

```text
Do not put DATABASE_URL in a VITE_ variable.

Do not import the server database module into client code.

Do not print the connection string to the browser Console.

Do not return the connection string in an API response.
```

## Local Configuration

Use a local environment file such as:

```text
.env.local
```

It may contain a variable name such as:

```text
DATABASE_URL=[server-only value]
```

The curriculum notes and README should list only:

```text
DATABASE_URL
```

They should not contain the actual value.

Confirm that local secret files are ignored by Git.

Before continuing, run:

```text
git status
```

The secret file should not appear as a file to commit.

## Preview and Production Configuration

In Vercel, configure required server variables for the intended environments.

The student should record:

```text
Variable name:
DATABASE_URL

Available to:
Development, Preview, Production, or selected environments

Secret value recorded in repository:
No
```

Do not ask the student to copy the value into notes or screenshots.

## A Note About Database Environment Isolation

For a real production system, preview and production commonly need carefully separated data and access.

For this disposable beginner prototype, the mentor may choose one of two approaches.

### Simpler Teaching Approach

```text
Preview and production use the same disposable Supabase database.
```

If this approach is used, state the limitation:

```text
A preview test can change the same teaching rows
seen by the production prototype.

This is acceptable only because the data is fictional and disposable.
```

### Better-Isolated Approach

```text
Preview and production use separate disposable database projects or branches.
```

Use this only if the mentor has prepared it and it does not distract from the mental model.

Do not turn Supabase branching or multi-environment database operations into a required Week 2 topic.

## Build a Preview Workflow

Use one small verified change.

Example:

```text
Improve the text shown while chores are loading.
```

Sequence:

```text
1. Confirm production currently works.
2. Create a feature branch.
3. Change one small user-facing behavior.
4. Run local checks.
5. Commit the change.
6. Push the branch.
7. Open the generated preview URL.
8. Test the changed behavior.
9. Test one important regression.
10. Compare the preview URL with production.
11. Merge only after the evidence is acceptable.
12. Verify the resulting production deployment.
```

## Student-Written Preview Prompt

```text
Relocation and release goal:
Test one small change in a Vercel preview deployment before production.

Current behavior:
[describe the current production behavior]

Proposed change:
[describe one small change]

What must remain unchanged:
- chore loading
- adding a valid chore
- rejecting a blank chore
- marking only the selected chore done
- persistence after refresh

Environment assumptions:
- local uses local configuration
- preview uses Vercel preview configuration
- production uses Vercel production configuration
- do not display or log secret values

Acceptance criteria:
- local checks pass
- the branch creates a preview deployment
- the preview URL contains the intended change
- production does not change before merge
- the preview can still read and write disposable teaching data
- one regression workflow passes

Failure test:
Temporarily remove or misconfigure one required variable only in a safe preview context, then observe and repair the failure.

Evidence:
- commit
- preview URL
- build result
- Network request
- function log
- manual acceptance checks
- production comparison
```

## Break It on Purpose

### Failure 1: Missing Preview Environment Variable

Temporarily remove or rename the required database variable in a safe preview setup.

Predict:

```text
The client files may still build and load.

The function route may run.

The database connection should fail.

Production should remain unchanged if only preview configuration was modified.
```

Inspect:

```text
- preview build;
- page load;
- API status;
- function error;
- user-facing feedback;
- production behavior.
```

Restore the variable.

Create a new preview deployment if required.

Verify the repair.

### Failure 2: Secret Accidentally Added to a Tracked File

Do not use a real secret for this exercise.

Use a clearly fake value to demonstrate:

```text
- Git notices the file;
- the value would become part of repository history if committed;
- moving it to an ignored local environment file removes it from the tracked source.
```

The student should understand that deleting a real secret from the latest file does not automatically remove it from Git history.

If a real secret is ever committed, stop and involve the mentor to rotate it.

### Failure 3: Preview Works but Production Fails

Compare:

```text
- branch and commit;
- environment-variable names;
- deployment environment;
- API request;
- function logs.
```

Do not assume that preview and production share identical configuration.

## Configuration Debugging Checklist

```text
Which environment am I testing?

Which commit is deployed there?

Does the required variable name exist there?

Did the new deployment occur after the variable was added or changed?

Is the server code reading the correct variable name?

Did the client accidentally expect a server-only variable?

Is the request reaching the function?

Is the function failing before or during the database connection?
```

Do not paste values while debugging.

Compare names, presence, environment, and behavior.

## Verification Focus

Verify:

```text
The local environment can run without committing secrets.

The secret file is ignored by Git.

The Vercel function reads server-side configuration.

The client bundle does not contain the database connection string.

A feature branch creates a preview deployment.

The preview URL differs from production.

Production remains unchanged before merge.

The preview failure caused by missing configuration is visible and repairable.

The merged commit creates or updates production as expected.
```

## Student Deliverable

Create:

```text
week2-day13-environments-and-preview.md
```

Include:

```text
1. A definition of configuration.

2. A code-versus-configuration table.

3. A local, preview, and production comparison.

4. Required environment-variable names without values.

5. Evidence that local secret files are ignored.

6. The preview branch and commit.

7. The preview URL and production URL.

8. Evidence that production did not change before merge.

9. Evidence from one missing-variable failure and repair.

10. The database-environment isolation limitation used by this prototype.
```

## Explain Back

The student should say:

```text
Code describes the application's behavior.

Configuration tells the code which external database to use in an environment.

The database credential belongs only in server configuration.

Client-side build variables are visible to users and cannot hold privileged secrets.

Local, preview, and production are separate execution contexts.

A preview URL lets me test a branch before changing production.

A green preview does not prove production has the same configuration.
```

## Done When

```text
The student can distinguish code from configuration.

The student can explain local, preview, and production environments.

No secret value is committed or exposed to the browser.

A small branch change is tested through a preview URL.

Production remains unchanged until merge.

A missing preview variable is diagnosed from evidence and repaired.

The student states honestly whether preview and production share one disposable database.
```

---

# Day 14: Trace, Verify, Explain, and Hand Off the Hosted System

## Main Goal

Verify the complete hosted system from a clean browser, observe one real user when possible, explain every major connection, and produce a truthful handoff.

Do not add features today.

The goal is to answer:

```text
Could another developer understand,
run, verify, and continue this hosted prototype
without guessing how the pieces fit together?
```

## Main Mental Model

Deployment is not one successful click.

It is a repeatable chain:

```text
understood source
→ identified commit
→ successful build
→ hosted client
→ hosted server route
→ database connection
→ durable row
→ accurate browser feedback
→ deployed verification
→ documented limitations
```

A system is only as trustworthy as the evidence supporting each claim.

## The Complete Story

The student should draw and narrate:

```text
1. A person opens the Vercel production URL.

2. The browser sends a request to the Vercel host.

3. Vercel returns the built client files.

4. The browser runs React.

5. React sends GET /api/chores.

6. Vercel invokes the server function.

7. The function reads server-side configuration.

8. The function connects to Supabase Postgres.

9. Postgres returns chore rows or an error.

10. The function returns an HTTP response.

11. React stores the response in browser state.

12. React renders the screen.

13. The user submits a new chore.

14. React shows pending feedback and sends POST /api/chores.

15. The function validates the request.

16. Postgres inserts the row.

17. The function returns the created row.

18. React shows confirmed success.

19. After refresh, React requests the saved rows again.
```

## Public Prototype Warning

This week deliberately does not include authentication or per-user authorization.

Therefore say clearly:

```text
This is a public teaching prototype.

Anyone who can reach the exposed application routes
may be able to read or change the fictional teaching data.

Do not use private names, real family information,
or sensitive responsibilities.
```

Do not describe the prototype as production-ready.

## Final Clean-Browser Verification

Use a private window or fresh browser profile.

Run:

```text
1. Open the production URL.
2. Observe the initial loading feedback.
3. Confirm saved fictional chores appear.
4. Add a valid fictional chore.
5. Observe pending and confirmed feedback.
6. Refresh.
7. Confirm the chore returns.
8. Mark one chore done.
9. Confirm only that chore changes.
10. Refresh again.
11. Confirm the done state returns.
12. Open a second browser or device.
13. Confirm the same shared teaching data loads.
14. Try a blank chore.
15. Confirm useful rejection feedback.
16. Trigger or simulate one controlled server or database failure.
17. Confirm the application does not falsely claim success.
18. Return the system to a working state.
```

## Verify Every Layer Separately

### Client Delivery

Evidence:

```text
The production URL returns the client application.
```

### Client Runtime

Evidence:

```text
The browser Console does not show an unexplained fatal error.
```

### Request

Evidence:

```text
The expected API request appears in the Network panel.
```

### Hosted Server

Evidence:

```text
The function receives the request and produces a matching log or response.
```

### Database

Evidence:

```text
The expected row exists or changes in Supabase Postgres.
```

### Response Contract

Evidence:

```text
The response status and JSON shape match the client expectation.
```

### Browser State and Rendering

Evidence:

```text
React shows the confirmed result and accurate feedback.
```

### Persistence

Evidence:

```text
Refresh requests the data again and returns the saved result.
```

### Shared Reachability

Evidence:

```text
A second browser or device can load the same fictional data.
```

## Real-User Test

When possible, ask someone who did not build the app to use the production URL.

Say:

```text
This is a public teaching prototype with fictional data.

Without me explaining the controls, please:
1. find the chore list;
2. add one fictional chore;
3. assign it;
4. mark it done;
5. refresh and check whether it stayed saved.
```

Observe:

```text
What did they click first?

Did they understand loading feedback?

Did they know when the save was confirmed?

Did they hesitate after an error?

Did they believe a local screen change was saved?

Did the public-prototype warning make sense?
```

Do not begin with:

```text
What new features do you want?
```

Begin with:

```text
Where did the current workflow confuse or mislead you?
```

## Final Controlled Failure

Choose one contained failure:

```text
- missing preview environment variable;
- wrong API path;
- failed deployment build;
- wrong database table name;
- invalid database connection in a safe environment;
- server returns an intentional error;
- client receives an unexpected response shape.
```

The student writes:

```text
Expected:

Observed:

Environment:

User impact:

Last confirmed working layer:

First failing layer:

Evidence:

Immediate fix:

Verification after fix:

Prevention:

Remaining uncertainty:
```

## Final Codex Review Prompt

```text
Review this hosted Family Chore Board like a senior engineer teaching a beginner.

Do not rewrite the project.

First reconstruct the actual architecture from the repository:
- client framework and build
- Vercel server routes
- Supabase Postgres connection
- environment-variable names
- database schema or migrations
- available tests and verification commands

Then list the top five issues by importance across:
- correctness
- deployed client behavior
- server request handling
- database consistency
- secret handling
- environment configuration
- loading and failure feedback
- missing regression checks
- unnecessary complexity
- inaccurate documentation

For each issue:
1. cite the relevant file or behavior
2. explain why it matters
3. identify the evidence needed
4. recommend the smallest fix

Do not add authentication, RLS, realtime, new product features, or a framework migration.

Recommend only one issue to fix before the week ends.
```

## Make One Final Small Improvement

Choose one issue supported by user or verification evidence.

Examples:

```text
- loading feedback is unclear;
- a database error displays a generic blank screen;
- the README omits the preview workflow;
- one route lacks a focused test;
- the client shows success before the server confirms;
- the public-prototype warning is missing.
```

Use the full verification loop:

```text
define success
→ identify risk
→ make the smallest change
→ run focused checks
→ run full checks
→ test preview
→ merge
→ test production
→ explain
→ save
```

## Final Repository README

The repository-root `README.md` should answer:

```text
What problem does this project demonstrate?

What can the Chore Board do now?

What is the hosted architecture?

Where does the client run?

Where does the server code run?

Where does the database run?

How do I install dependencies?

How do I run the project locally?

Which environment-variable names are required?

How do I create or apply the database schema?

How do I run tests, linting, type checking, and the build?

How do I create a preview deployment?

How do I verify production?

How do I inspect function logs?

How do I inspect database rows?

What data is safe to use in this prototype?

What is deliberately not built?

What security and operational limitations remain?
```

The README must not include:

```text
- actual secret values;
- invented commands;
- invented deployment status;
- claims of private user data protection;
- claims that authentication exists;
- claims that preview and production data are isolated if they are not;
- claims that checks passed if they were not run.
```

## Architecture Document

Create or update:

```text
docs/hosted-architecture.md
```

Include:

```text
1. Local Week 1 architecture.
2. Hosted Week 2 architecture.
3. Request flow for loading chores.
4. Request flow for adding a chore.
5. Service responsibility table.
6. Environment comparison.
7. Secret boundary.
8. Failure layers.
9. Known limitations.
10. Deferred Week 3 questions about identity and authorization.
```

## Final Handoff Summary

Use:

```text
What changed during Week 2:

Why the architecture changed:

Current production URL:

Current production commit:

Client responsibility:

Vercel server responsibility:

Supabase Postgres responsibility:

Required environment-variable names:

Database migration or schema location:

Verification commands run:

Deployed workflows tested:

Controlled failures tested:

What was not verified:

Known security limitations:

Known data-isolation limitations:

Deferred work:
```

## Verification Focus

Run all available project checks.

At minimum:

```text
- focused tests for changed routes or behavior;
- full test suite, if available;
- type checking, if available;
- linting, if available;
- production build;
- local core workflow;
- preview core workflow;
- production core workflow;
- Network request inspection;
- function-log inspection;
- database-row inspection;
- refresh check;
- second-browser check;
- secret scan through repository status and review;
- README command verification.
```

Report:

```text
Passed:

Failed:

Not run:

Manual only:

Remaining uncertainty:
```

## Student Deliverable

Create:

```text
week2-final-handoff.md
```

Include:

```text
1. The complete hosted-system story.

2. The final architecture diagram.

3. The production URL and commit.

4. The verification report.

5. One real-user observation, if available.

6. One incident-style controlled-failure note.

7. A list of environment-variable names without values.

8. The database schema location.

9. Known limitations.

10. Deferred Week 3 topics.
```

## Explain Back

The student should tell the complete story without looking at the code:

```text
A person opens the Vercel URL.

Vercel sends the built React client.

The browser runs React and requests chores.

Vercel invokes the server function.

The function validates the request and reads server configuration.

The function connects to Supabase Postgres.

Postgres returns or changes durable rows.

The function returns an HTTP response.

React updates browser state and the screen.

Refresh works because the data is requested again from Postgres.

A second browser can reach the same hosted system.

The deployment is still a public teaching prototype,
not a private production family application.
```

## Done When

```text
The student can trace a public request through every hosted layer.

The production core workflow works from a clean browser.

Saved data survives refresh.

A second browser can load the same fictional data.

The student can distinguish client, function, database, and configuration failures.

The repository contains truthful setup and verification documentation.

No secret is exposed in source, browser code, notes, or screenshots.

Known limitations are documented honestly.

Authentication, authorization, RLS, and realtime remain deliberately deferred.
```

---

# What to Avoid All Week

Avoid turning the week into dashboard tourism.

Do not celebrate:

```text
I created an account.

I copied a key.

The dashboard shows green.

The URL opens on my computer.
```

without asking:

```text
Which responsibility moved?

What exact request works now?

What evidence proves it?

What remains local or incomplete?
```

Avoid prompts like:

```text
Deploy my whole app.

Make this work on Vercel.

Connect everything to Supabase.

Fix the cloud errors.

Set up production.

Use best practices for everything.
```

Prefer:

```text
Explain the current architecture before editing.

Identify which responsibility is moving in this step.

Predict what will break when only this part moves.

Preserve the current user behavior and API shape.

Move one route before moving all routes.

Do not expose secrets to the client.

Run local and deployed checks.

Report what remains incomplete.

Do not claim success from a green deployment alone.
```

Avoid architecture jumps such as:

```text
- replacing React with another framework;
- replacing the server with direct client database access;
- adding authentication during database migration;
- adding realtime while basic persistence is still failing;
- changing the schema and product workflow at the same time;
- rewriting all server routes in one step;
- adding deployment tools without a demonstrated need.
```

Prefer continuity:

```text
same product
same core workflow
same client–server boundary
same data meaning
new physical locations
```

---

# Daily Five-Minute Relocation Review

Do this at the start or end of every day.

The mentor names one action, such as:

```text
Open the app.

Load chores.

Add a chore.

Mark a chore done.

Refresh.
```

The student answers:

```text
1. Where does the browser run?
2. Where do the client files come from?
3. What request is sent?
4. Which server code receives it?
5. What rule is checked?
6. Where does the durable data live?
7. What response returns?
8. What feedback should the user see?
9. What evidence would prove each step?
10. What could fail?
```

## Review Scoring

Give 0–2 points for each:

```text
Did the student identify the correct device or service?

Did the student distinguish client files from server code?

Did the student name the request path or method at a useful level?

Did the student describe the server responsibility?

Did the student distinguish browser state from database state?

Did the student identify useful evidence?

Did the student name one plausible failure?

Did the student state what is still out of scope?
```

A strong answer scores 12 or more.

The purpose is not perfect vocabulary.

The purpose is orientation.

---

# The Hosted Debugging Mental Model

Debugging a hosted application means locating the first connection where reality stopped matching the plan.

Use:

```text
1. Reproduce the problem in a named environment.
2. State expected versus actual.
3. Identify the deployed branch and commit.
4. Gather browser evidence.
5. Gather server evidence.
6. Gather database evidence if relevant.
7. Identify the last confirmed working layer.
8. Identify the first failing layer.
9. Change one thing.
10. test locally and remotely.
11. Explain why the fix worked.
```

## The Layers to Check

```text
URL:
Did the browser request the intended address?

Host lookup and connection:
Could the browser reach the host?

Deployment:
Did the intended commit build successfully?

Client delivery:
Did the browser receive the client files?

Client runtime:
Did React start without a fatal error?

Request construction:
Did the client send the correct method, path, headers, and body?

Routing:
Did the request match the intended Vercel Function?

Function execution:
Did the server code run?

Validation:
Did the server accept or reject the input intentionally?

Configuration:
Did this environment contain the required variable names?

Database connection:
Could the function reach and authenticate to Postgres?

Database query:
Did the intended table and fields exist?

Database state:
Was the row actually read or changed?

Response:
Did the server return the intended status and JSON shape?

Client state:
Did React store the returned result?

Rendering:
Did the screen reflect the current state?

Feedback:
Did the user receive accurate loading, success, or failure information?
```

## Last Working Layer, First Failing Layer

Use this beginner-friendly technique.

Example:

```text
The public page loaded.

The Add request appeared in the Network panel.

The Vercel function log shows the request.

The function reports that DATABASE_URL is missing.
```

Therefore:

```text
Last confirmed working layer:
Function invocation.

First failing layer:
Environment configuration before database connection.
```

This is more useful than:

```text
Supabase is broken.
```

## Common Week 2 Failure Categories

### Client Build Failure

Evidence:

```text
Deployment build log.
```

### Wrong Public API Path

Evidence:

```text
Browser Network request and response status.
```

### Function Runtime Failure

Evidence:

```text
Function logs and server response.
```

### Missing Environment Variable

Evidence:

```text
Named environment configuration and function error.
```

### Database Connection Failure

Evidence:

```text
Function error after invocation but before query success.
```

### SQL or Schema Failure

Evidence:

```text
Database error naming the table, column, constraint, or query problem.
```

### Persistence Illusion

Evidence:

```text
The screen changed,
but refresh or database inspection shows no saved row.
```

### Response Contract Failure

Evidence:

```text
Successful request with a JSON shape the client cannot use.
```

### Environment Difference

Evidence:

```text
Local or preview works,
but production has a different commit or configuration.
```

---

# The Explain-Back Rule

At the end of every session, ask the student to explain without looking at the code.

Use:

```text
What responsibility were we moving today?

Where did it run before?

Where does it run now?

What stayed in the old location?

What request connects the pieces?

What data crosses that request?

What evidence proved the change worked?

What failed on purpose?

What was the last working layer?

What was the smallest fix?

What remains deliberately out of scope?
```

For a deployed workflow, also ask:

```text
Which branch and commit did you test?

Was it local, preview, or production?

Did you inspect the database or only the screen?

What remains unverified?
```

The student does not need perfect infrastructure vocabulary.

He does need a coherent system story.

---

# Mentor Guidance

## Teach the Job Before the Product Name

Before saying Vercel, ask:

```text
Where could these client files and server handlers run
so another browser can reach them?
```

Before saying Supabase, ask:

```text
Where could the shared database live
so it outlives one laptop and one request?
```

The product name should attach to an understood responsibility.

## Do Not Hide the Partial Failures

The partially broken states are the curriculum.

Useful moments include:

```text
The page loads but localhost requests fail.

The hosted route works but returns temporary data.

The database exists but the app is not connected.

The server runs but configuration is missing.

The row saves but the client misreads the response.
```

Do not rush to hide these states with a large all-at-once fix.

## Prepare Operational Complexity That Does Not Teach the Main Idea

The mentor may pre-select:

```text
- the Vercel account or team structure;
- the simplest repository connection method;
- the server-function file convention for the project;
- the Postgres library;
- the current Supabase-recommended serverless connection option;
- the disposable database project;
- the initial migration format.
```

The student must still understand what each prepared choice does.

Preparation should remove accidental setup friction, not remove the mental model.

## Do Not Rescue Too Quickly

When a hosted request fails, wait for the student to say:

```text
Environment:
______

Expected:
______

Actual:
______

Last confirmed working layer:
______

Evidence:
______

Next smallest check:
______
```

Then help.

## Stop When Understanding Falls Behind

If the student can no longer explain:

```text
- where the browser is running;
- where the server code is running;
- where the database row lives;
- which request connects them;
- which environment is being tested;
```

stop adding changes.

Return to the diagram.

## Use Fictional Data Only

Repeat:

```text
This prototype has no login or private user boundary.

Use only fictional, disposable teaching data.
```

## Require Remote Evidence

Do not accept:

```text
It worked on localhost.
```

for a deployment claim.

Require:

```text
I tested this exact commit
through this preview or production URL
and inspected this request, log, or database row.
```

## Keep the Product Boring

Do not add features to make the hosted version feel more impressive.

The intellectual work is already substantial:

```text
internet address
→ client delivery
→ hosted request
→ server invocation
→ configuration
→ database connection
→ durable row
→ deployed feedback
```

---

# Final Readiness Exercise

Give the student a deployed teaching application he has not seen before.

The application has:

```text
- a React list;
- one hosted GET route;
- one Supabase Postgres table;
- one preview deployment;
- one controlled configuration bug.
```

The ticket is:

```text
The preview page loads,
but the list shows an error.

Production still works.

Find the failing layer and make the smallest repair.
```

The student should:

```text
1. Identify the preview URL.
2. Identify the branch and commit.
3. Confirm the client files load.
4. Inspect the failed Network request.
5. Identify the response status.
6. Inspect the function logs.
7. Determine whether the function ran.
8. Check required environment-variable names without revealing values.
9. Identify the last working layer.
10. Explain the smallest repair before making it.
11. Repair only the preview configuration or code responsible.
12. trigger a new preview deployment if needed.
13. Verify the preview workflow.
14. Confirm production remains working.
15. Write a short incident note.
16. Explain what remained unchanged.
```

He is ready enough to continue when he can stay oriented through this process.

He does not need to know every Vercel or Supabase setting.

He does need to distinguish:

```text
client delivery
from server execution;

server execution
from database connection;

configuration failure
from product-code failure;

preview
from production;

visible screen state
from durable database state.
```

---

# Final Week Review

## Internet and Browser Mental Models

The student should be able to answer:

```text
What does localhost mean?

What is a port?

What does a URL tell the browser?

What are the protocol, host, and path?

At a high level, how does a domain name help the browser find a destination?

What is an HTTP request?

What is an HTTP response?

Why can the client load while an API request fails?

Why does localhost on another device not point to the developer's laptop?
```

## Deployment Mental Models

The student should be able to answer:

```text
What is a deployment?

How does a deployment relate to a Git commit?

What did Vercel move on Day 9?

What remained local?

What does a generated deployment URL represent?

Why does a successful build not prove the application workflow works?

What is the difference between preview and production?
```

## Hosted Server Mental Models

The student should be able to answer:

```text
What is a Vercel Function?

How is it different from the local long-running server process?

What server responsibilities remain the same?

Why did we create /api/health first?

How do function logs help debugging?

Why can the route work while the database connection fails?
```

## Hosted Database Mental Models

The student should be able to answer:

```text
Why was SQLite appropriate locally?

Why is a function's temporary filesystem not the shared durable database?

What is Postgres?

What is Supabase doing in this project?

What is a table?

What is a row?

What is a migration?

Why must durable rows outlive requests and deployments?

At a high level, why is a connection pooler useful for short-lived server functions?
```

## Configuration and Secret Mental Models

The student should be able to answer:

```text
What is configuration?

What is an environment variable?

Why should DATABASE_URL not be hard-coded?

Why must the browser not receive the database connection string?

What is the difference between a server variable and a Vite client-exposed variable?

Why can local, preview, and production behave differently?

Why might changing a variable require a new deployment?
```

## Verification Engineering

The student should be able to answer:

```text
What evidence proves the client built?

What evidence proves the public page is reachable?

What evidence proves the function ran?

What evidence proves the database row changed?

Why is a visible screen change not enough?

Why must deployed behavior be tested through the deployed URL?

What is the last working layer?

What is the first failing layer?

What remains unverified after a green deployment?
```

## Scope and Safety

The student should be able to answer:

```text
Why is this still a public teaching prototype?

Why should it contain only fictional data?

What identity and permission topics were deliberately deferred?

Why did we preserve the browser → server → database architecture?

What would need to be learned before storing private family information?
```

---

# One-Sentence Curriculum

```text
Start with a working client–server–SQLite application on one laptop; build a minimum useful model of URLs, localhost, requests, and public hosts; then relocate the client and server to Vercel and the durable data to Supabase Postgres one responsibility at a time, using local, preview, and production evidence to prove which connections work, which fail, and why.
```

---

# Final Mantras

```text
Mental model before dashboard.

Name the job before the service.

Localhost means this computer.

A URL is an address for a request.

The client can load while the server fails.

A green build is not a working product.

Move one responsibility at a time.

Preserve the architecture while changing the location.

Server code is still server code when a platform invokes it.

Application files and durable data have different lifetimes.

The database must outlive the request.

The browser does not receive the database password.

Code describes behavior.
Configuration identifies the environment's resources.

Preview is for evidence before production.

Test the deployed environment, not only localhost.

The screen is not proof of persistence.

Inspect the request.
Inspect the function.
Inspect the row.

Find the last working layer.

Change one thing.

Use fictional data in a public prototype.

Authentication and authorization are a later question.

If you cannot explain where it runs,
do not keep adding infrastructure.

Codex is the helper, not the operator.
```

---

# Official Reference Pages

Use current official documentation while teaching provider-specific steps. Dashboard labels and recommended connection details can change.

## Vercel

- [Deployments](https://vercel.com/docs/deployments)
- [Generated deployment URLs](https://vercel.com/docs/deployments/generated-urls)
- [Git deployments](https://vercel.com/docs/git)
- [Deployment environments](https://vercel.com/docs/deployments/environments)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Function runtimes and filesystem support](https://vercel.com/docs/functions/runtimes)
- [Environment variables](https://vercel.com/docs/environment-variables)
- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)

## Supabase

- [Database overview](https://supabase.com/docs/guides/database/overview)
- [Connect to Postgres](https://supabase.com/docs/guides/database/connecting-to-postgres)
- [Postgres.js quickstart](https://supabase.com/docs/guides/database/postgres-js)
- [Database migrations](https://supabase.com/docs/guides/deployment/database-migrations)
- [Securing your data](https://supabase.com/docs/guides/database/secure-data)

Provider documentation should support the curriculum's mental model.

It should not replace the student's responsibility to predict, inspect, verify, and explain.
