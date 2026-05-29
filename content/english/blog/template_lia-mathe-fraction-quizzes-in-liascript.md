---
title: "lia-Mathe for LiaScript: Interactive Fraction Quizzes with Visual Feedback"
slug: "lia-mathe-fraction-quizzes-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-Mathe"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Mathematics
    - STEM
    - Interactive
    - No Server
liascript: true

description: "Create interactive fraction quizzes in LiaScript with lia-Mathe — students set divisions with a slider and click circle or rectangle segments to represent fractions, with automatic grading."
---

Teaching fractions with static diagrams only goes so far.
The [lia-Mathe](https://github.com/MINT-the-GAP/lia-Mathe) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) provides two visual fraction exercise types: a **circle (pie)** and a **rectangle (grid)**.
Students drag a slider to set the number of sections, then click the correct segments to represent the given fraction — and LiaScript grades the answer automatically.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->
```

---

## `@circleQuiz` — Pie chart fraction exercise

```markdown
@circleQuiz(3/8)
```

Renders an interactive pie chart.
The student uses a slider to set the number of sectors, then clicks the correct number of sectors to represent the fraction 3/8.

For a version with custom quiz options (e.g., limiting the solution button):

```markdown
@circleQuizC(3/8,`<!-- data-solution-button="2" -->`)
```

---

## `@rectQuiz` — Rectangle grid fraction exercise

```markdown
@rectQuiz(1/3)
```

Renders an interactive rectangle.
The student sets rows and columns using sliders, then clicks the correct cells to represent the fraction 1/3.

```markdown
@rectQuizC(1/4,`<!-- data-solution-button="2" -->`)
```

---

## Example: Fraction Worksheet

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->

# Fractions — Visual Exercises

## Task 1 — Mark 1/2 on the circle

Use the slider to set the number of sectors, then click the correct sectors to show 1/2.

@circleQuiz(1/2)

---

## Task 2 — Mark 3/4 on the rectangle

Set rows and columns, then click to shade exactly 3/4 of the rectangle.

@rectQuiz(3/4)

---

## Task 3 — Which fraction is shown?

The circle below represents a fraction.
Use the slider and clicks to match it.

@circleQuizC(2/5,`<!-- data-solution-button="4" -->`)

---

## Task 4 — Compare fractions

First shade 2/3 on the circle.

@circleQuiz(2/3)

Then shade 3/4 on the rectangle.
Which is larger?

@rectQuiz(3/4)

[( )] 2/3
[(X)] 3/4
[( )] They are equal
```

Try it live — use the sliders to set sections and click to shade the correct fraction:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
-->

# Fractions — Visual Exercises

## Mark 1/2 on the circle

Use the slider to set the number of sectors, then click to show 1/2.

@circleQuiz(1/2)

---

## Mark 3/4 on the rectangle

Set rows and columns, then click to shade exactly 3/4.

@rectQuiz(3/4)

---

## Which is larger?

First shade 2/3 on the circle.

@circleQuiz(2/3)

Then shade 3/4 on the rectangle. Which is larger?

@rectQuiz(3/4)

[( )] 2/3
[(X)] 3/4
[( )] They are equal
{{< /liascript >}}

---

## Example: Combined with lia-coordinate

Fraction exercises pair naturally with coordinate exercises from [lia-coordinate](/blog/lia-coordinate-interactive-math-plots-in-liascript) in the same course:

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Math Worksheet

## Fractions

Mark 5/8 on the circle.

@circleQuiz(5/8)

---

## Coordinate Systems

Plot the point $A(3, 2)$ on the coordinate plane.

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=700;id=c1`)
@CreatePoint(`c1;A;3;2`, ` `)
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md" >}}

---

## Use Cases

**Primary math** — Introducing fractions visually with the circle model (pie) and the area model (rectangle) side by side.

**Fraction comparison** — Students shade two different fractions and visually compare which is larger.

**Equivalence exercises** — Ask students to shade `2/4` on the rectangle and `1/2` on the circle to discover they are equal.

**Combined with lia-freeze-v2** — Fraction quiz states are captured in the freeze snapshot and can be sent to the teacher for review.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Key macros** | `@circleQuiz`, `@rectQuiz`, `@circleQuizC`, `@rectQuizC` |
| **Input** | Slider (number of sections) + click (segment selection) |
| **Grading** | Automatic — checks correct fraction representation |
| **Quiz options** | Yes — pass LiaScript comment block as second argument |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.2 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-Mathe" label="View on GitHub" >}}

---

## Related Templates

- [**lia-coordinate**](/blog/lia-coordinate-interactive-math-plots-in-liascript) — interactive coordinate systems and function plotting
- [**JSXGraph**](/blog/jsxgraph-mathematics-in-liascript) — general-purpose interactive math with JSXGraph
- [**lia-canvas-ocr**](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript) — handwrite fraction answers and auto-recognize via OCR
- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze quiz state and share with teacher for review
