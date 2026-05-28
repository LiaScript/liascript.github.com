---
title: "lia-board-mode for LiaScript: Full-Screen Classroom Presentation Mode"
slug: "lia-board-mode-fullscreen-presentation-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-board-mode"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Presentation
    - Teachers
    - No Server
description: "Turn any LiaScript course into a classroom-ready presentation with lia-board-mode — full-screen slide width, adjustable font sizes from the toolbar, and mode-conditional content blocks."
---

When teaching with LiaScript in the classroom, the standard layout may not fill the screen optimally for projector use.
The [lia-board-mode](https://github.com/MINT-the-GAP/lia-board-mode) community template by [MINT-the-GAP](https://github.com/MINT-the-GAP) addresses this: import it into any course and slides stretch to ~98.5% screen width in Presentation and Slides modes, with an adjustable font size slider in the toolbar.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
-->
```

There are no macros to write.
Importing the template activates all board mode features automatically.

---

## What It Does

### 1. Full-Screen Width in Presentation and Slides Modes

In Presentation mode and Slides mode, content expands to ~98.5% of screen width.
This removes the centered narrow-column layout and gives maximum use of projector or whiteboard space.

Standard Textbook mode is unaffected.

### 2. Font Size Slider in the Toolbar

After importing, an **AA** button appears in the LiaScript toolbar.
Clicking it reveals a slider from 14px to 48px.
The selection persists in `localStorage` — returning students see the same size they last used.

Auto-boost mapping based on base font:
| Base font | Boosted font |
|---|---|
| Default | 18px |
| Medium | 24px |
| Large | 32px |

### 3. Mode-Conditional Content: `data-lia-only`

HTML blocks with the `data-lia-only` attribute are visible only in the specified mode:

``` html
<div data-lia-only="slides">
  This content is only shown in Slides mode.
</div>

<div data-lia-only="presentation">
  This content is only shown in Presentation mode.
</div>

<div data-lia-only="textbook">
  This content is only shown in Textbook (reading) mode.
</div>
```

This lets instructors create three-in-one courses:
- Minimal slide view for classroom projection
- Full-detail view for self-study (textbook mode)
- Intermediate view for slides export

---

## Example: Combining Modes

```` markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md
-->

# Introduction to Cells

<div data-lia-only="presentation">

## Key Point

The mitochondria is the powerhouse of the cell.

</div>

<div data-lia-only="textbook">

## Full Explanation

The mitochondria produces ATP through oxidative phosphorylation.
The inner membrane contains the electron transport chain, which couples electron transfer to proton pumping and drives ATP synthase.

</div>

<div data-lia-only="slides">

```
Mitochondria → ATP Production → Cellular Energy
```

</div>
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md" >}}

---

## Use Cases

**Classroom lectures** — Import lia-board-mode and use Presentation mode for full-screen display on projectors.
The font size slider means the teacher can adapt to the room without re-authoring.

**Single-source authoring** — Write one LiaScript document that serves as both classroom slides (Presentation mode, `data-lia-only="presentation"`) and self-study reading (Textbook mode, `data-lia-only="textbook"`).

**Accessibility** — The font size slider (14px to 48px) supports students with vision difficulties in a classroom setting.

**Remote teaching** — Large font sizes improve readability during screen shares and video calls.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Macros** | None — import activates features |
| **Full width** | Yes — Presentation and Slides modes |
| **Font size** | Yes — toolbar slider, 14–48px |
| **Persistence** | Yes — localStorage |
| **Mode-conditional blocks** | Yes — `data-lia-only` attribute |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-board-mode" label="View on GitHub" >}}

---

## Related Templates

- [**TextAnalysis**](/blog/textanalysis-readability-in-liascript) — readability metrics for teaching material
- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized practice sets for classroom use
- [**Pannellum**](/blog/pannellum-360-panorama-in-liascript) — 360° panorama images for immersive presentations
- [**aframe**](/blog/aframe-3d-vr-scenes-in-liascript) — 3D/VR scenes for science and engineering lectures
