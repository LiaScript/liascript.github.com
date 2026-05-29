---
title: "lia-canvas-ocr for LiaScript: Handwriting Recognition in Math Quizzes"
slug: "lia-canvas-ocr-handwriting-recognition-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-canvas-ocr"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Interactive
    - Teachers
    - No Server
    - Mathematics
liascript: true

description: "Let students hand-write math answers on a canvas with lia-canvas-ocr — the browser-based LaTeX OCR engine recognizes handwriting and fills quiz fields automatically, no server needed."
---

Typing LaTeX in a text field is a high barrier for students who just want to write `x²+3x-1` with a stylus.
The [lia-canvas-ocr](https://github.com/MINT-the-GAP/lia-canvas-ocr) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) solves this by adding a drawing canvas to any LiaScript answer field.
Students draw their math answer on the canvas, select it with a rectangle, click "Submit as Solution" — and the handwriting is recognized by a local LaTeX OCR model and inserted into the quiz field automatically.
No data leaves the browser.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# Addition Quiz

$a)\;\;$ $10 + 5 =$ [[ 15 ]]

@canvas

$b)\;\;$ $50 + 30 =$ [[ 80 ]]

@canvas
```

Place `@canvas` directly below any answer field.
A small pen icon appears next to the field; clicking it opens the drawing canvas.

---

## How It Works

1. Click the **pen icon** next to a quiz answer field
2. **Draw** your answer on the canvas with a finger, stylus, or mouse
3. Use the **Submit as Solution** tool to draw a rectangle around your answer
4. The OCR engine recognizes the handwriting and inserts LaTeX into the input field

The recognized LaTeX is shown with a compact preview below the field.
The preview hides while the field is focused for editing.

---

## Canvas Tools

| Tool | Function |
|---|---|
| **Pen** | Draw with customizable color, width, and opacity |
| **Eraser** | Erase parts of the drawing |
| **Background** | Set a blank, grid, or lined background |
| **Undo / Redo** | Step through drawing history |
| **Submit as Solution** | Draw a selection rectangle, then submit area for OCR |

The canvas supports touch and stylus input with pinch-to-zoom and pan.
It can be resized by dragging the corners.
Background and all drawings persist across page reloads via `localStorage`.

---

## The OCR Engine

The OCR is powered by the [Xenova/texify2](https://huggingface.co/Xenova/texify2) model running entirely in the browser via **Transformers.js** and ONNX Runtime WebAssembly.
No data is sent to any server.
The model (~900 MB) is downloaded once and cached by the browser; it loads lazily, only when the student first clicks "Submit as Solution".

---

## Example: Fraction and Equation Quiz

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# Math Worksheet

**Task 1 — Addition**

$12 + 7 =$ [[ 19 ]]

@canvas

---

**Task 2 — Fractions**

Simplify: $\frac{6}{9} =$ [[ \frac{2}{3} ]]

@canvas

---

**Task 3 — Algebra**

Solve for $x$: $2x + 4 = 10$, so $x =$ [[ 3 ]]

@canvas
```

Students can type answers in the standard input fields, or switch to the canvas for handwriting at any point.
Both input methods work side by side.

Try it live — draw your answers on the canvas and click "Submit as Solution" to see OCR in action:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md
-->

# Math Worksheet

**Task 1 — Addition**

$12 + 7 =$ [[ 19 ]]

@canvas

---

**Task 2 — Fractions**

Simplify: $\frac{6}{9} =$ [[ \frac{2}{3} ]]

@canvas

---

**Task 3 — Algebra**

Solve for $x$: $2x + 4 = 10$, so $x =$ [[ 3 ]]

@canvas
{{< /liascript >}}

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md" >}}

---

## Use Cases

**Primary and secondary math** — Students accustomed to writing answers on paper can continue with a stylus on a tablet, lowering the digital barrier while still using LiaScript's auto-grading.

**Fraction and algebra quizzes** — The OCR model handles complex LaTeX expressions including fractions, exponents, square roots, and operators with high accuracy.

**Accessible assessment** — Students who struggle with keyboard input (dyslexia, motor difficulties) can write their answers in their natural style.

**Combined with lia-annotation** — Import both plugins so the teacher can annotate slides while students use the canvas for their answers.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — 100 % client-side |
| **Server required** | No |
| **OCR model** | Xenova/texify2 via Transformers.js |
| **Model size** | ~900 MB (cached after first load) |
| **Macro** | `@canvas` — one line below any answer field |
| **Touch/stylus** | Yes — pinch-to-zoom and pan |
| **Persistence** | Yes — drawings and background saved in localStorage |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-canvas-ocr" label="View on GitHub" >}}

---

## Related Templates

- [**lia-annotation**](/blog/lia-annotation-live-drawing-in-liascript) — freehand drawing overlay for lecture slides
- [**lia-coordinate**](/blog/lia-coordinate-interactive-math-plots-in-liascript) — drag-and-drop point placement on coordinate systems
- [**lia-Mathe**](/blog/lia-mathe-fraction-quizzes-in-liascript) — interactive fraction quizzes with circle and rectangle visualizations
- [**lia-orthography**](/blog/lia-orthography-spelling-exercises-in-liascript) — text correction and dictation exercises
