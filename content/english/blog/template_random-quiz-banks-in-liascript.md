---
title: "Random for LiaScript: Dynamic Quiz Banks and Randomized Practice Sets"
slug: "random-quiz-banks-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Random"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Quizzes
    - Self Assessment
    - Teachers
    - No Server
liascript: true

description: "Randomly sample exercises from a larger pool in LiaScript using the Random template — show only N items per page visit, support weighted selection, and filter out already-solved quizzes."
---

A central challenge in self-paced learning is keeping practice fresh.
If students see the same 20 questions every time, they memorize positions rather than content.
The [Random template](https://github.com/LiaTemplates/Random) adds controlled randomization to LiaScript: wrap exercises in `<div class="random">` containers, and let the template pick a subset on each page visit.

---

## Quick Start

``` markdown
<!--
import: https://github.com/liaTemplates/Random/README.md
-->
```

---

## Macro 1: `@Random.random(n, filterFlag)` — Re-randomize Each Visit

Selects `n` items from the pool on every page visit.
Changing slides and coming back will pick a different selection.

``` markdown
@Random.random(2, false)
```

---

## Macro 2: `@Random.static(n, filterFlag)` — Stable Within Session

Selects `n` items and keeps that selection stable as long as the browser session is open.
Refreshing the page may change the selection, but navigating away and back will not.

``` markdown
@Random.static(3, true)
```

The second parameter (`filterFlag`) controls filtering:
- `false` — always show `n` items, regardless of quiz state
- `true` — only include items that have not yet been solved (already-solved quizzes are hidden from the pool)

---

## Defining the Pool: `<div class="random">`

Wrap each exercise or content block in a `<div>` with `class="random"`.
Use `data-propability` (note: original spelling) to weight items:

``` html
<div class="random" data-propability="1">
  <!-- normal weight item -->
  What is 2 + 2? [[4]]
</div>

<div class="random" data-propability="3">
  <!-- 3x more likely to be selected -->
  What is the derivative of x²? [[2x]]
</div>

<div class="random" data-propability="0">
  <!-- fallback: only shown when all other items are solved (with filterFlag=true) -->
  You have solved all exercises! Well done.
</div>
```

The `data-propability` value is relative weight:
- Default (`1`): equal probability
- `3`: three times more likely to appear than a `1`-weighted item
- `0`: special fallback, shown only when the remaining pool is empty (all solved)

---

## Full Example

```` markdown
<!--
import: https://github.com/liaTemplates/Random/README.md
-->

# Practice Quiz

Pick 2 questions from the pool (never the same two in a row):

@Random.random(2, false)

<div class="random" data-propability="1">

**Q1:** What is the speed of light in vacuum?

[[ 3 × 10⁸ m/s | 3 × 10⁶ m/s | 3 × 10¹⁰ m/s ]]
[[ (3 × 10⁸ m/s) | 3 × 10⁶ m/s | 3 × 10¹⁰ m/s ]]

</div>

<div class="random" data-propability="1">

**Q2:** What unit measures electrical resistance?

[[Ohm]]

</div>

<div class="random" data-propability="1">

**Q3:** What is Avogadro's number?

[[6.022 × 10²³]]

</div>

<div class="random" data-propability="0">

All questions solved! Review your notes and try again.

</div>
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Random/main/README.md" >}}

---

## Use Cases

**Self-assessment modules** — Let students practice from a large bank, seeing a fresh subset each session.
With `filterFlag=true`, already-mastered items disappear from the selection.

**Exam preparation** — Build a 50-question bank, show 10 per visit, with harder questions weighted higher.

**Flashcard-style slides** — Wrap vocabulary items as `class="random"` divs and show 5 per slide per visit.

**Homework generation** — Create a shared course with a large exercise pool; each student sees a different sample.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Weighting** | Yes — `data-propability` attribute |
| **Filter solved** | Yes — `filterFlag=true` |
| **Session stable** | Yes — via `@Random.static` |
| **Per-visit fresh** | Yes — via `@Random.random` |
| **License** | MIT |
| **Maintained** | Version 0.0.2 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Random/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Random/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Random" label="View on GitHub" >}}

---

## Related Templates

- [**SpreadSheet**](/blog/spreadsheet-excel-tables-in-liascript) — interactive spreadsheets with student-editable data tables
- [**TextAnalysis**](/blog/textanalysis-readability-in-liascript) — readability checks for teaching material quality
- [**Survey**](/blog/survey-forms-in-liascript) — gather anonymous student feedback inside a course slide
