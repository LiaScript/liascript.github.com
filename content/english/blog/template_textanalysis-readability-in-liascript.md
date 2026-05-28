---
title: "TextAnalysis for LiaScript: Readability Scores and Text Complexity Metrics"
slug: "textanalysis-readability-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/TextAnalysis"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Interactive Exercises
    - Language Learning
    - No Server
description: "Analyze text readability in LiaScript using the TextAnalysis template — compute Flesch-Kincaid grade, Gunning Fog, SMOG, reading/speaking time, and more, with inline interpretation tables."
---

Writing clear learning materials requires understanding how readable they actually are.
The [TextAnalysis template](https://github.com/LiaTemplates/TextAnalysis) attaches standard readability metrics to any text block in LiaScript.
Students can paste or edit text and instantly see Flesch-Kincaid grades, Gunning Fog index, syllable counts, reading time, and more — directly in the course slide.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md
-->
```

---

## Macro Overview

All macros are end-of-block macros: attach them after a plain text code block.

| Macro | Output |
|---|---|
| `@Textanalysis.full` | All tests, compact values only |
| `@Textanalysis.FULL` | All tests with interpretation table |
| `@Textanalysis.time` | Reading and speaking time (compact) |
| `@Textanalysis.TIME` | Reading and speaking time with guide |
| `@Textanalysis.base` | Word/syllable/sentence count + grade (compact) |
| `@Textanalysis.BASE` | Same with full interpretation |
| `@Textanalysis.check(\`["test1","test2"]\`)` | Custom selection of tests |

**Rule:** Uppercase first letter = shows interpretation table. Lowercase = value only.

---

## Macro 1: `@Textanalysis.FULL` — Complete Analysis with Interpretation

```` markdown
```text
The mitochondria is the powerhouse of the cell.
Cellular respiration converts glucose and oxygen into ATP, carbon dioxide, and water.
This process occurs in three main stages: glycolysis, the citric acid cycle, and the electron transport chain.
```
@Textanalysis.FULL
````

---

## Macro 2: `@Textanalysis.time` and `@Textanalysis.TIME`

```` markdown
```text
Your text here.
```
@Textanalysis.time
````

Reading time is estimated at 200–250 words per minute.
Speaking time at 130–150 words per minute.

---

## Macro 3: `@Textanalysis.base`

```` markdown
```text
Your text here.
```
@Textanalysis.base
````

Shows word count, syllable count, sentence count, and the readability consensus grade level.

---

## Macro 4: Custom Test Selection — `@Textanalysis.check(...)`

Choose exactly which tests to run using a JSON array of test names:

```` markdown
```text
Your text here.
```
@Textanalysis.check(`["fleschReadingEase","gunningFog","readingTime"]`)
````

---

## Available Tests

| Test Name | Metric |
|---|---|
| `words` | Total word count |
| `syllables` | Total syllable count |
| `sentences` | Total sentence count |
| `fleschReadingEase` | Flesch Reading Ease (0–100; 60+ = standard) |
| `fleschKincaidGrade` | Flesch-Kincaid U.S. grade level |
| `gunningFog` | Gunning Fog Index (years of education needed) |
| `smogIndex` | SMOG index (simple measure of gobbledygook) |
| `automatedReadabilityIndex` | ARI — character-based readability |
| `colemanLiauIndex` | Coleman-Liau Index (letter-based) |
| `daleChallReadabilityScore` | Dale-Chall — word familiarity based |
| `readabilityConsensus` | Average grade across all indices |
| `readingTime` | Estimated silent reading time |
| `speakingTime` | Estimated speaking/presentation time |

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/TextAnalysis/main/README.md" >}}

---

## Use Cases

**Language learning** — Students assess the complexity of their own writing against target proficiency levels (A1-C2).

**Technical writing courses** — Measure and improve readability of reports, manuals, and instructional texts.

**Curriculum development** — Check whether learning material complexity matches the target audience grade level.

**Teacher training** — Demonstrate how readability metrics differ across texts; compare a newspaper article to a scientific abstract.

**OER quality review** — Add readability checks to shared course materials before publication.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — all metrics computed client-side |
| **Server required** | No |
| **Input format** | Plain text in code block |
| **Metrics** | 13 standard readability indices |
| **Interpretation mode** | Uppercase macros show explanation table |
| **Custom selection** | Yes — `@Textanalysis.check(...)` |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/TextAnalysis/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/TextAnalysis/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/TextAnalysis" label="View on GitHub" >}}

---

## Related Templates

- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized practice sets from larger question banks
- [**SpreadSheet**](/blog/spreadsheet-excel-tables-in-liascript) — tabular data entry with formulas for linguistic data
- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen presentation plugin for teachers
