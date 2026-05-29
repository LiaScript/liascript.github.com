---
title: "lia-coordinate for LiaScript: Interactive JSXGraph Coordinate Exercises"
slug: "lia-coordinate-interactive-math-plots-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-coordinate"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Mathematics
    - STEM
    - Interactive
    - No Server
description: "Build interactive coordinate system exercises in LiaScript with lia-coordinate — drag points, plot functions, draw value tables, and auto-grade student answers, powered by JSXGraph."
---

Drawing a coordinate system on a slide is straightforward; making it interactive is another matter.
The [lia-coordinate](https://github.com/MINT-the-GAP/lia-coordinate) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) builds on [JSXGraph](https://jsxgraph.uni-bayreuth.de/) to provide a full set of declarative macros for interactive coordinate plane exercises.
Students drag points, plot functions by typing formulas, or fill in value tables — all with automatic grading built in.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->
```

The import pulls in both lia-coordinate and JSXGraph automatically.

---

## Core Macros

### `@CoordinateSystem` — Draw a coordinate plane

```markdown
@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;width=800;id=board1`)
```

Parameters (semicolon-separated `key=value`):

| Parameter | Default | Description |
|---|---|---|
| `xmin`, `xmax` | -4, 4 | Horizontal axis bounds |
| `ymin`, `ymax` | -3, 3 | Vertical axis bounds |
| `width` | — | Initial width in pixels |
| `id` | — | Board identifier used to connect other macros |

### `@AxisLabel` — Add axis labels with LaTeX

```markdown
@AxisLabel(`id=board1;xlabel=$x$;ylabel=$f(x)$`)
```

### `@PlotFunction` — Plot a function curve

```markdown
@PlotFunction(`board1;f;0.5*x^2-2;#b41f65`)
```

Parameters: `<boardId>;<funcName>;<formula>;<color>`

### `@PlotInput` — Student-drawn function input

```markdown
@PlotInput(`board1;g;#0055cc`)
```

Renders a LaTeX input field where students type a function and see it plotted live.

### `@CreatePoint` — Draggable point exercise

```markdown
@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;id=ex1`)
@AxisLabel(`id=ex1;xlabel=$x$;ylabel=$y$`)

Drag point $A$ to the coordinates $(2 | 3)$.

@CreatePoint(`ex1;A;2;3`, ` `)
```

The student drags the point to the target; the check button validates position within a tolerance of 0.05 units.

### `@Point` — Pre-defined fixed or movable point

```markdown
@Point(`board1;A;2;3`)
@Point(`board1;B;-3;-1;fix`)
```

### `@PointOnGraph` — Drag a point onto a function

```markdown
Drag point $A$ onto the graph of $f(x) = 2x - 1$.

@PointOnGraph(`board1;A;f;2*x-1;0.05`)
```

### `@Table` — Value table connected to a coordinate board

```markdown
@CoordinateSystem(`xmin=-5;xmax=5;ymin=-4;ymax=4;id=tab1`)
@Table(`n=3;x;f;P;id=tab1`)
```

Students fill in x/y values and the corresponding points appear on the graph live.

---

## Example: Full Worksheet

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md
-->

# Linear Functions — Worksheet

## Task 1: Plot a Function

Plot the function $f(x) = 2x - 1$ and mark two points.

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-6;ymax=6;width=700;id=t1`)
@AxisLabel(`id=t1;xlabel=$x$;ylabel=$f(x)$`)
@PlotFunction(`t1;f;2*x-1;#e63946`)

---

## Task 2: Find the Intersection

Drag point $P$ to the x-intercept of $f(x) = 2x - 1$.

@CoordinateSystem(`xmin=-5;xmax=5;ymin=-5;ymax=5;width=700;id=t2`)
@AxisLabel(`id=t2;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`t2;f;2*x-1;#e63946`)

@CreatePoint(`t2;P;0.5;0`, ` `)

---

## Task 3: Fill the Value Table

Complete the value table for $f(x) = x^2 - 3$.

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=6;width=700;id=t3`)
@AxisLabel(`id=t3;xlabel=$x$;ylabel=$f(x)$`)
@Table(`n=5;x;f;P;id=t3`)
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md" >}}

---

## Use Cases

**Algebra and analysis** — Plot functions and ask students to identify roots, intersections, or maxima by dragging points.

**Geometry exercises** — Place points and check whether students can identify coordinates of given vertices.

**Value tables** — Students complete function tables; points appear on the graph as they fill in values, giving instant visual feedback.

**Combined with lia-freeze-v2** — Student answers (point positions) can be frozen and shared with the teacher for review.

**Combined with lia-canvas-ocr** — Students use the canvas OCR to submit handwritten coordinate answers that are auto-inserted into quiz fields.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — JSXGraph + custom plugin |
| **Server required** | No |
| **Key macros** | `@CoordinateSystem`, `@PlotFunction`, `@PlotInput`, `@CreatePoint`, `@PointOnGraph`, `@Table` |
| **Drag tolerance** | 0.05 units (configurable per exercise) |
| **LaTeX in labels** | Yes — via MathJax |
| **Panning / zooming** | Yes |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-coordinate" label="View on GitHub" >}}

---

## Related Templates

- [**JSXGraph**](/blog/jsxgraph-mathematics-in-liascript) — the underlying JSXGraph template for general interactive math
- [**lia-Mathe**](/blog/lia-mathe-fraction-quizzes-in-liascript) — fraction quizzes with circle and rectangle visualizations
- [**lia-canvas-ocr**](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript) — handwriting recognition for quiz fields
- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze and share student quiz results
