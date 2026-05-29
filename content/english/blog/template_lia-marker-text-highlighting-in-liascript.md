---
title: "lia-marker for LiaScript: Color-Coded Text Highlighting Quizzes"
slug: "lia-marker-text-highlighting-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-marker"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Quizzes
    - Interactive
    - Teachers
    - Language Learning
    - No Server
description: "Add interactive text highlighting to LiaScript courses with lia-marker — students color-code words in six colors, while quiz macros verify that the right terms are highlighted in the right color."
---

Reading comprehension and grammar tasks often require marking specific words or phrases in a text.
The [lia-marker](https://github.com/MINT-the-GAP/lia-marker) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) adds a highlighting toolbar to LiaScript courses and a set of quiz macros that automatically check whether the correct words were highlighted in the correct colors.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md
-->
```

After importing, a toolbar button appears in the navigation bar for free highlighting.
Use the macros below to define graded marker quizzes.

---

## Marker Quiz Macros

### `@mark` and `@markCOLOR` — Define target words

Use these inline to mark which text the student must highlight, and in which color:

```markdown
<div class="markerquiz">
@markred(Katze) @markblue(Schritt)
@TextmarkerQuiz
</div>
```

Use `@mark(text)` to accept any color; use `@markCOLOR(text)` to require a specific color.

Available colors: **red**, **blue**, **green**, **yellow**, **pink**, **orange**

### `@TextmarkerQuiz` — Add Check / Solve buttons

Always pair marker targets with `@TextmarkerQuiz` at the end of the `<div class="markerquiz">` block.

### `@markedCOLOR` — Pre-filled highlights (read-only)

Use these to show text pre-highlighted for demonstration purposes:

```markdown
The **mitochondria** is @markedred(the powerhouse) of @markedblue(the cell).
```

---

## Example: Language Arts Lesson

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md
-->

# Parts of Speech

## Task 1 — Nouns and Verbs

Highlight all **nouns** in red and all **verbs** in blue.

<div class="markerquiz">
The @markred(dog) @markblue(runs) across the @markred(garden) every @markred(morning).
@TextmarkerQuiz
</div>

---

## Task 2 — Adjectives

Highlight all **adjectives** in green.

<div class="markerquiz">
The @markgreen(tall) @markred(tree) cast a @markgreen(long), @markgreen(dark) @markred(shadow).
@TextmarkerQuiz
</div>

---

## Task 3 — Any color (free choice)

Mark the word that does NOT belong to the group.

<div class="markerquiz">
apple — banana — @mark(carrot) — pear — cherry
@TextmarkerQuiz
</div>
```

---

## Example: Chemistry Text Analysis

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md
-->

# Oxidation and Reduction

Read the following text.
Highlight all **oxidizing agents** in orange and all **reducing agents** in blue.

<div class="markerquiz">
In the reaction between @markedblue(iron) and @markedorange(oxygen), the
@markblue(iron) is @markblue(oxidized) while @markorange(oxygen) acts as the
@markorange(oxidizing agent). In the reverse process,
@markblue(carbon monoxide) acts as the @markblue(reducing agent).
@TextmarkerQuiz
</div>
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md" >}}

---

## Use Cases

**Reading comprehension** — Students highlight key claims, evidence, or specific grammatical categories directly in a passage.

**Grammar exercises** — Color-code parts of speech: red for nouns, blue for verbs, green for adjectives — quiz automatically checks correctness.

**Scientific text analysis** — Mark reactants vs. products, causes vs. effects, or primary vs. secondary sources.

**Vocabulary building** — Students highlight unknown words in yellow, known words in green, for a visual learning-gap analysis.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Key macros** | `@markCOLOR`, `@mark`, `@markedCOLOR`, `@TextmarkerQuiz` |
| **Colors** | red, blue, green, yellow, pink, orange |
| **Free highlighting** | Yes — toolbar button with color picker |
| **Auto-grading** | Yes — `@TextmarkerQuiz` checks color and word |
| **Pre-filled demos** | Yes — `@markedCOLOR` read-only highlights |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-marker" label="View on GitHub" >}}

---

## Related Templates

- [**lia-kachel**](/blog/lia-kachel-tile-quizzes-in-liascript) — drag-and-drop tile quizzes
- [**lia-orthography**](/blog/lia-orthography-spelling-exercises-in-liascript) — text correction and spelling exercises
- [**TextAnalysis**](/blog/textanalysis-readability-in-liascript) — readability metrics for written content
- [**DragAndDrop**](/blog/drag-and-drop-quizzes-in-liascript) — order and multiple-choice drag-and-drop quizzes
