---
title: "lia-DynFlex for LiaScript: Resizable Multi-Column Layouts"
slug: "lia-dynflex-resizable-columns-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-DynFlex"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Presentation
    - Teachers
    - No Server
liascript: true

description: "Create drag-to-resize multi-column layouts in LiaScript with lia-DynFlex — flexbox containers with persistent widths, theme integration, and full support for quiz elements in each column."
---

Standard LiaScript columns have fixed widths.
The [lia-DynFlex](https://github.com/MINT-the-GAP/lia-DynFlex) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) adds interactive, resizable flex containers to any course: drag the divider between columns to set the perfect balance, and the layout is saved in `localStorage` for returning visits.
Quiz elements, images, and any other Markdown content work inside each column.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/main/README.md
-->
```

No macros needed — just apply the `dynFlex` class to a `<section>` and `flex-child` to each child `<div>`.

---

## Basic Column Layout

```html
<section class="dynFlex">

<div class="flex-child">

### Column A

Your content here — text, images, code, anything.

</div>

<div class="flex-child">

### Column B

Another section of content.

</div>

<div class="flex-child">

### Column C

A third panel.

</div>

</section>
```

Drag the resize handles between columns to redistribute space.
The layout snaps back on mobile (< 420 px) to a single-column stack.

---

## Multi-Column Quiz Layout

DynFlex handles LiaScript quiz elements automatically.
Separate quiz items with blank lines so each gets its own check button:

```html
<section class="dynFlex">

<div class="flex-child">

**Group A — Arithmetic**

$a)\;\;$ $3 + 4 =$ [[ 7 ]]

$b)\;\;$ $6 \times 8 =$ [[ 48 ]]

$c)\;\;$ $100 - 37 =$ [[ 63 ]]

</div>

<div class="flex-child">

**Group B — Geometry**

Area of a rectangle with $l=5$ and $w=3$: [[ 15 ]]

Perimeter of a square with $s=4$: [[ 16 ]]

</div>

</section>
```

---

## Configuration Options

Use `data-*` attributes on the container for fine-grained control:

| Attribute | Default | Description |
|---|---|---|
| `data-gap` | 20px | Gap between flex items |
| `data-hit` | 22px | Width of the resize handle hit area |
| `data-basis` | 25% | Default width basis for flex items |
| `data-min` | 10% | Minimum width percentage |
| `data-max` | 100% | Maximum width percentage |
| `data-store` | — | localStorage key for persisting widths |

```html
<section class="dynFlex" data-gap="30" data-basis="33" data-store="worksheet-layout">

<div class="flex-child">Left panel</div>
<div class="flex-child">Center panel</div>
<div class="flex-child">Right panel</div>

</section>
```

---

## Example: Side-by-Side Text and Image

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/main/README.md
-->

# Photosynthesis

<section class="dynFlex" data-store="photo-lesson">

<div class="flex-child">

## Explanation

Photosynthesis converts light energy into chemical energy stored in glucose.
The overall equation is:

$$6\,CO_2 + 6\,H_2O + \text{light} \rightarrow C_6H_{12}O_6 + 6\,O_2$$

The process takes place in the **chloroplasts** and has two main stages:
the light-dependent reactions and the Calvin cycle.

</div>

<div class="flex-child">

## Quiz

Which molecule stores the energy produced in photosynthesis?

[( )] Carbon dioxide
[(X)] Glucose
[( )] Water
[( )] Oxygen

Where does photosynthesis take place?

[[chloroplasts]]

</div>

</section>
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/main/README.md" >}}

---

## Use Cases

**Side-by-side explanation and quiz** — Put the explanatory text in the left column and the quiz in the right; students can resize to show more of either.

**Two-language display** — Show the same content in two languages side by side for language learners or bilingual classrooms.

**Image and annotation** — Place a diagram in one column and labeling tasks in the other.

**Instructor vs. student view** — Use different widths to highlight the key information while keeping context visible.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — CSS + script plugin |
| **Server required** | No |
| **Macros** | None — CSS classes only (`dynFlex`, `flex-child`) |
| **Drag-to-resize** | Yes |
| **Persistence** | Yes — localStorage via `data-store` |
| **Responsive** | Yes — single column below 420 px |
| **Quiz support** | Yes — multiple check buttons per column |
| **Theme integration** | Yes — uses LiaScript accent colors |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-DynFlex" label="View on GitHub" >}}

---

## Related Templates

- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen width for projector use
- [**lia-kachel**](/blog/lia-kachel-tile-quizzes-in-liascript) — drag-and-drop tile quiz layouts
- [**BeforeAndAfter**](/blog/beforeandafter-image-comparison-in-liascript) — side-by-side image comparison with a slider
- [**lia-annotation**](/blog/lia-annotation-live-drawing-in-liascript) — freehand drawing overlay for presentation mode
