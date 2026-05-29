---
title: "lia-navigation for LiaScript: Collapsible Hierarchical Table of Contents"
slug: "lia-navigation-hierarchical-toc-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-navigation"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Presentation
    - Teachers
    - No Server
liascript: true

description: "Replace LiaScript's default TOC with a collapsible, hierarchical navigation tree using lia-navigation — bookmarks, expand/collapse, active highlighting, and persistent state storage."
---

Long LiaScript courses can have dozens of sections, making the default flat table of contents hard to navigate.
The [lia-navigation](https://github.com/MINT-the-GAP/lia-navigation) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) replaces the default TOC with a collapsible, hierarchical navigation tree.
Sections expand and collapse, the current section is highlighted automatically, bookmarks persist across sessions, and the entire hierarchy reflects the heading structure of the document.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md
-->
```

There are no macros to write.
After importing, the navigation sidebar is automatically enhanced with the hierarchical tree.

---

## Features

- **Expand / collapse** — Each parent heading can be expanded or collapsed independently
- **Active highlighting** — The current slide is automatically highlighted in the tree
- **Bookmarks** — Students can bookmark any section for quick return
- **Level-based styling** — Headings at different depths receive distinct visual styles
- **Persistent state** — Expanded/collapsed state and bookmarks persist in `localStorage`

---

## Example: Structured Biology Course

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md
-->

# Cell Biology

## 1. Cell Structure

### 1.1 The Cell Membrane

The cell membrane is a selectively permeable lipid bilayer.

### 1.2 The Nucleus

The nucleus contains the cell's DNA and directs its activities.

### 1.3 Organelles

#### 1.3.1 Mitochondria

Mitochondria produce ATP through cellular respiration.

#### 1.3.2 Ribosomes

Ribosomes synthesize proteins from mRNA templates.

## 2. Cell Division

### 2.1 Mitosis

Mitosis produces two identical daughter cells.

### 2.2 Meiosis

Meiosis produces four genetically unique gametes.

## 3. Quizzes

### 3.1 Structure Quiz

Which organelle is called the powerhouse of the cell?

[( )] Nucleus
[(X)] Mitochondria
[( )] Ribosome
[( )] Golgi apparatus

### 3.2 Division Quiz

How many daughter cells does mitosis produce?

[( )] 1
[(X)] 2
[( )] 4
[( )] 8
```

With lia-navigation loaded, the deep heading structure (`##`, `###`, `####`) appears as a collapsible tree in the sidebar, making it easy to jump between sections of a long course.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md" >}}

---

## Use Cases

**Long textbook-style courses** — A biology, chemistry, or history course with 30+ sections benefits from hierarchical navigation that can be collapsed by chapter.

**Workshop materials** — Instructors with multi-day training courses can organize material into collapsed modules; participants open only the day they're working on.

**Reference documents** — Technical documentation or language reference sheets are much easier to browse with a collapsible tree than a long flat list.

**Bookmarking for review** — Students bookmark the sections they want to revisit for an exam, then use the bookmark list as a personal study guide.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Macros** | None — import activates navigation |
| **Expand / collapse** | Yes — per section heading |
| **Bookmarks** | Yes |
| **Active highlighting** | Yes — current slide |
| **Persistence** | Yes — localStorage |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-navigation" label="View on GitHub" >}}

---

## Related Templates

- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen width for classroom display
- [**lia-DynFlex**](/blog/lia-dynflex-resizable-columns-in-liascript) — resizable multi-column layouts for course content
- [**Fullscreen**](/blog/fullscreen-presentation-mode-in-liascript) — fullscreen presentation mode
- [**lia-annotation**](/blog/lia-annotation-live-drawing-in-liascript) — freehand drawing overlay for lecture slides
