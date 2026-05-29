---
title: "ExplainGit for LiaScript: Visualize Git Repositories Interactively"
slug: "explaingit-git-visualization-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/ExplainGit"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Visualization
    - Computer Science
    - Interactive Exercises
    - No Server
liascript: true

description: "Teach git branching, merging, and history with interactive animations directly in LiaScript — pre-define command sequences or let students type git commands live, powered by ExplainGit."
---

Git is notoriously difficult to teach with text alone.
The [ExplainGit template](https://github.com/LiaTemplates/ExplainGit) embeds [onlywei's explain-git-with-d3](https://github.com/onlywei/explain-git-with-d3) into LiaScript, visualizing commits, branches, merges, and checkouts as animated D3 diagrams.

Define a sequence of git commands in a code block, or present an empty repository for live interaction.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md
-->
```

---

## Macro 1: `@ExplainGit` — Empty Repository Sandbox

Inserts a blank git visualization that students can type commands into:

``` markdown
@ExplainGit
```

An input prompt appears below the diagram.
Students can type git commands and watch the graph update in real time.

---

## Macro 2: `@ExplainGit.eval` — Pre-define a Command Sequence

Place `@ExplainGit.eval` in the header of a code block.
The block content is a sequence of git commands — one per line.
The simulation runs them in order when the slide loads.

```` markdown
```text @ExplainGit.eval
git commit
git commit
git branch feature
git checkout feature
git commit
git commit
git checkout main
git merge feature
```
````

---

## Supported Commands

| Command | Effect |
|---|---|
| `git commit` | Add a commit to the current branch |
| `git commit -m "message"` | Commit with a label |
| `git branch name` | Create a new branch at current HEAD |
| `git checkout name` | Switch to a branch |
| `create origin` | Add a remote `origin` (enables push/fetch visualization) |

**Limitation:** Branches in the remote `origin` are not supported.
The `create origin` command enables remote tracking, but branching and merging on the remote side cannot be visualized.

---

## Examples

### Feature Branch and Merge

```` markdown
```text @ExplainGit.eval
git commit -m "Initial commit"
git commit -m "Add README"
git branch feature-login
git checkout feature-login
git commit -m "Add login form"
git commit -m "Add auth logic"
git checkout main
git merge feature-login
git commit -m "Post-merge cleanup"
```
````

Try it live — watch the feature branch grow and merge back into main:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md
-->

# Feature Branch and Merge

```text @ExplainGit.eval
git commit -m "Initial commit"
git commit -m "Add README"
git branch feature-login
git checkout feature-login
git commit -m "Add login form"
git commit -m "Add auth logic"
git checkout main
git merge feature-login
git commit -m "Post-merge cleanup"
```
{{< /liascript >}}

### Diverged Branches

```` markdown
```text @ExplainGit.eval
git commit
git branch hotfix
git checkout hotfix
git commit -m "Fix bug"
git checkout main
git commit -m "Continue feature work"
git merge hotfix
```
````

Try it live — observe main and hotfix diverge then converge at the merge commit:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md
-->

# Diverged Branches

```text @ExplainGit.eval
git commit
git branch hotfix
git checkout hotfix
git commit -m "Fix bug"
git checkout main
git commit -m "Continue feature work"
git merge hotfix
```
{{< /liascript >}}

### Remote Tracking

```` markdown
```text @ExplainGit.eval
git commit
create origin
git commit
git commit
```
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md" >}}

---

## Use Cases

**Version control courses** — Walk through commit history, branching, and merging with animated diagrams that update command by command.

**Software engineering lectures** — Teach common git workflows (feature branch, gitflow, trunk-based development) by visualizing the DAG step by step.

**Student practice** — Leave an empty `@ExplainGit` sandbox for students to experiment with commands before applying them in a real repository.

**Code review training** — Show the history of a simulated project with realistic commit messages and branch names.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Live input** | Yes — via `@ExplainGit` sandbox |
| **Pre-defined sequence** | Yes — via `@ExplainGit.eval` |
| **Remote support** | Partial — `create origin` only |
| **Remote branching** | Not supported |
| **Based on** | explain-git-with-d3 by onlywei |
| **License** | MIT |
| **Maintained** | Version 0.0.2 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/ExplainGit/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/ExplainGit" label="View on GitHub" >}}

---

## Related Templates

- [**LogicEmu**](/blog/logicemu-ascii-circuits-in-liascript) — logic circuit visualization with ASCII diagrams
- [**DigiSim**](/blog/digisim-digital-circuits-in-liascript) — digital logic simulation with gates and latches
- [**LiveEdit-Embeddings**](/blog/liveedit-embeddings-interactive-examples-in-liascript) — embed live LiaScript examples inline
