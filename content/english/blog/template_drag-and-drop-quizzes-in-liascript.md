---
title: "DragAndDrop Template for LiaScript: Order and Multiple-Choice Drag Quizzes"
slug: "drag-and-drop-quizzes-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MichaelMarkert/LiaScript_DragAndDrop_Template"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Quizzes
    - Interactive
    - Teachers
    - No Server
description: "Build drag-and-drop quizzes in LiaScript with the DragAndDrop template — sortable order exercises and pool-based multiple-choice selection, both graded automatically."
---

Drag-and-drop quizzes are more engaging than click-to-select, especially for sequencing and sorting tasks.
The [LiaScript_DragAndDrop_Template](https://github.com/MichaelMarkert/LiaScript_DragAndDrop_Template) by [Michael Markert](https://github.com/MichaelMarkert) provides two macros for drag-and-drop interaction: `@dragdroporder` for putting items in the correct sequence, and `@dragdropmultiple` for selecting the correct subset from a shuffled pool.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md
-->
```

> **Note:** Both macros require `@uid` as the first argument.
> This must be passed explicitly to ensure unique element IDs on each use.

---

## `@dragdroporder` — Sequence / sorting quiz

Students arrange items into the correct order by dragging:

```markdown
@dragdroporder(@uid, 4|2|3|1, 1|2|3|4)
```

- Argument 1: `@uid` (always pass this)
- Argument 2: Initial order (pipe-separated item indices, shuffled presentation)
- Argument 3: Correct order (pipe-separated item indices)

The item labels are defined by their position: `1` is the first item, `2` the second, and so on.

### Full example — historical events

```markdown
<!--
import: https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md
-->

# Drag-and-Drop Quizzes

## Task 1 — Put the events in chronological order

Drag the cards into the correct order:

| Step | Event |
|---|---|
| 1 | French Revolution begins |
| 2 | Napoleon becomes Emperor |
| 3 | Battle of Waterloo |
| 4 | Congress of Vienna |

@dragdroporder(@uid, 3|1|4|2, 1|2|3|4)
```

---

## `@dragdropmultiple` — Multiple-choice from a pool

Students select the correct items from a larger shuffled pool:

```markdown
@dragdropmultiple(@uid, 1|2|3|4|5|6, 1|3|5)
```

- Argument 1: `@uid` (always pass this)
- Argument 2: Full pool of items (pipe-separated, shuffled on render)
- Argument 3: Correct item indices from the pool

### Full example — classification exercise

```markdown
## Task 2 — Select all mammals

Drag only the mammals into the answer box:

| # | Animal |
|---|---|
| 1 | Dog |
| 2 | Salmon |
| 3 | Bat |
| 4 | Salamander |
| 5 | Whale |
| 6 | Crow |

@dragdropmultiple(@uid, 1|2|3|4|5|6, 1|3|5)
```

---

## Combined example: Biology classification

```markdown
<!--
import: https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md
-->

# Cell Division — Drag-and-Drop

## Task 1 — Order the phases of mitosis

Drag the phases into the correct sequence:

| # | Phase |
|---|---|
| 1 | Interphase |
| 2 | Prophase |
| 3 | Metaphase |
| 4 | Anaphase |
| 5 | Telophase |

@dragdroporder(@uid, 3|5|1|4|2, 1|2|3|4|5)

---

## Task 2 — Select phases of MEIOSIS only

Drag only the items that apply specifically to meiosis (not mitosis):

| # | Statement |
|---|---|
| 1 | Produces haploid cells |
| 2 | Produces 2 daughter cells |
| 3 | Includes crossing-over |
| 4 | Produces 4 daughter cells |
| 5 | Used for growth and repair |
| 6 | Homologous chromosomes pair |

@dragdropmultiple(@uid, 1|2|3|4|5|6, 1|3|4|6)
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md" >}}

---

## Use Cases

**Sequence exercises** — Students reconstruct historical timelines, algorithm steps, laboratory procedures, or narrative story elements by sorting.

**Classification quizzes** — Drag items into the correct category: mammals vs. reptiles, acids vs. bases, primary vs. secondary sources.

**Grammar reordering** — Reorder scrambled words to form a correct sentence.

**Combine with lia-kachel** — Use lia-kachel for inline text gap fill and DragAndDrop for full card sorting on the same page.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — JavaScript plugin |
| **Server required** | No |
| **Key macros** | `@dragdroporder`, `@dragdropmultiple` |
| **Required first arg** | `@uid` — unique ID per macro call |
| **Grading** | Automatic — checks order or set equality |
| **Pool size** | Unlimited — pipe-separated item list |
| **Author** | Michael Markert (MichaelMarkert) |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MichaelMarkert/LiaScript_DragAndDrop_Template/refs/heads/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MichaelMarkert/LiaScript_DragAndDrop_Template" label="View on GitHub" >}}

---

## Related Templates

- [**lia-kachel**](/blog/lia-kachel-tile-quizzes-in-liascript) — tile-based drag-and-drop within text gaps
- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized quiz banks
- [**lia-marker**](/blog/lia-marker-text-highlighting-in-liascript) — color-coded text highlighting quizzes
- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze quiz answers and submit to teacher
