---
title: "lia-annotation for LiaScript: Live Drawing Overlay for Classroom Presentations"
slug: "lia-annotation-live-drawing-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-annotation"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Presentation
    - Teachers
    - No Server
    - Interactive
liascript: true

description: "Add a freehand drawing overlay to every LiaScript slide with lia-annotation — pen, eraser, undo/redo, and optional LaTeX OCR for handwritten quiz answers, all in presentation mode."
---

Teaching live with LiaScript sometimes calls for writing directly on the slide — circling a term, sketching a diagram, or annotating an equation.
The [lia-annotation](https://github.com/MINT-the-GAP/lia-annotation) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) adds a floating toolbar to every slide in presentation mode, letting instructors draw freehand strokes, erase them, and undo/redo, all without leaving the slide.
When paired with [lia-canvas-ocr](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript), it can also recognize handwritten answers and insert them directly into quiz fields.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md
-->
```

There are no macros to write.
After importing, a toolbar appears on the left edge of the viewport whenever the course is in Presentation mode.

---

## The Toolbar

The annotation toolbar provides six tools:

| Tool | Function |
|---|---|
| **Cursor** | Disable drawing — interact with slide content normally |
| **Pen** | Draw freehand strokes; second click opens color/width/opacity panel |
| **Eraser** | Erase strokes; second click opens size and "Clear all" panel |
| **Undo** | Undo the last stroke |
| **Redo** | Redo the last undone stroke |
| **Eye** | Show or hide all annotations on the current slide |

When an OCR engine is loaded, an additional **OCR** button appears.
The OCR workflow:
1. Click OCR in the toolbar
2. Draw a rectangle around the handwritten solution
3. Click **Submit as Solution** near the rectangle

The recognized text is inserted into the nearest quiz answer field as LaTeX.

---

## Pen and Eraser Options

Click the **Pen** button a second time to open its options panel:
- **Colors** — 10 preset colors
- **Pen width** — slider from 1 to 24 px
- **Opacity** — slider from 10 % to 100 %

Click the **Eraser** button a second time:
- **Eraser size** — slider from 4 to 80 px
- **Clear all** — removes every stroke on the current slide

---

## Combining Annotation with OCR

Import both plugins to enable the full handwriting-to-quiz workflow:

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# Math Quiz

Solve the equation and write your answer.

What is $3 \times 7$?

[[ 21 ]]
```

With both plugins loaded, students can draw their answer on the annotation layer and submit it via the OCR button.
The result is inserted into the `[[ ]]` field automatically.

---

## Example: Annotated Biology Lesson

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md
-->

# Cell Structure

![Cell diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Animal_cell_structure_en.svg/640px-Animal_cell_structure_en.svg.png "Animal cell")

> Use the drawing tool to label the organelles you can identify.
>
> Click **Pen** in the left toolbar, then draw arrows and labels directly on the diagram.

---

# Discussion

Which organelle is responsible for energy production?

- [[ ]] Nucleus
- [[ ]] Ribosome
- [[X]] Mitochondria
- [[ ]] Golgi apparatus
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md" >}}

---

## Use Cases

**Live classroom annotation** — The instructor draws arrows, underlines keywords, or circles important values directly on any slide during a lecture.

**Handwriting-to-quiz** — Combined with lia-canvas-ocr, students draw solutions and the annotation OCR button converts handwriting to text and fills quiz fields automatically.

**Remote teaching** — Annotations are visible during screen shares, making online lectures feel more interactive and whiteboard-like.

**Highlighting and review** — Use the pen to highlight key passages in a text-heavy slide and the toggle button to show/hide the overlay for before/after comparisons.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Macros** | None — import activates toolbar |
| **Toolbar position** | Left edge, Presentation mode only |
| **Colors** | 10 presets |
| **Pen width** | 1–24 px |
| **Eraser size** | 4–80 px |
| **OCR integration** | Optional — load lia-canvas-ocr alongside |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-annotation" label="View on GitHub" >}}

---

## Related Templates

- [**lia-canvas-ocr**](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript) — draw answers and submit via LaTeX OCR
- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen width and font size slider for classroom display
- [**lia-navigation**](/blog/lia-navigation-hierarchical-toc-in-liascript) — collapsible hierarchical table of contents
- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze quiz answers into a shareable teacher review link
