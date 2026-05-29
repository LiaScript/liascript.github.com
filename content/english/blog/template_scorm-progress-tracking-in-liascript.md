---
title: "SCORM-Progress for LiaScript: Score and Completion Tracking in LMS"
slug: "scorm-progress-tracking-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaPlayground/SCORM-Progress"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - SCORM
    - LMS
    - Interactive
    - Advanced
    - No Server
description: "Display a live gauge of student score and completion progress in LiaScript courses deployed via SCORM — the SCORM-Progress template reads window.SCORE and renders an ECharts gauge visualization."
---

When deploying a LiaScript course as a SCORM package inside an LMS (Moodle, Canvas, ILIAS, etc.), the LMS sets a completion score on the `window.SCORE` object.
The [SCORM-Progress](https://github.com/LiaPlayground/SCORM-Progress) template by [LiaPlayground](https://github.com/LiaPlayground) reads that value and renders a beautiful **ECharts gauge** showing the student's progress from 0 to 100%.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md
-->
```

---

## `@score` — Render a progress gauge

```markdown
@score(My Progress)
```

Renders a circular gauge labelled "My Progress" showing `window.SCORE * 100` as a percentage.

The label can be any text:

```markdown
@score(Course Completion)

@score(Quiz Score)

@score(Current Progress)
```

---

## How `window.SCORE` works

In a SCORM context, the LMS sets `window.SCORE` to a value between `0.0` (0%) and `1.0` (100%) as the student completes quiz items.

The template sets up an observer so the gauge updates automatically whenever `window.SCORE` changes.

---

## Testing without a SCORM LMS

Use a slider to simulate `window.SCORE` during development:

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md
-->

# Progress Test

Set a test score:

window.SCORE = 0.1
<script>@input</script>

@score(Simulated Score)
```

The `<script>@input</script>` block after the text input takes the value typed and runs it as JavaScript, setting `window.SCORE`.
The gauge updates live.

---

## Example: SCORM Course with Progress Dashboard

```markdown
<!--
import: https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md
-->

# Module 3 — Cell Biology

## Course Progress

@score(Module 3 Completion)

---

## Quiz 1 — The Mitochondria

Which molecule is the primary product of cellular respiration?

[( )] ADP
[(X)] ATP
[( )] NADH
[( )] CO2

---

## Quiz 2 — The Cell Membrane

The cell membrane is primarily composed of:

[( )] Proteins only
[(X)] A phospholipid bilayer with embedded proteins
[( )] Carbohydrates
[( )] Nucleic acids

---

## End of Module

Congratulations on completing Module 3.
Your progress gauge above reflects your LMS-reported score.

@score(Final Score)
```

---

## How it works internally

The `@onload` macro in the template registers a getter/setter pair on `window.SCORE`:

```javascript
// Simplified version of the template's onload script
let _score = 0;
Object.defineProperty(window, 'SCORE', {
  get: () => _score,
  set: (val) => {
    _score = val;
    // notifies all @score gauges to update
    sendToGauges(val);
  }
});
```

The `@score` macro renders an ECharts gauge component that subscribes to these updates.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md" >}}

---

## Use Cases

**LMS completion tracking** — Display a live gauge in the course header or summary slide showing how much of the SCORM package the student has completed.

**Student self-monitoring** — A visible progress gauge motivates students by making their completion status tangible.

**Multi-module courses** — Place a `@score` gauge at the end of each module; the LMS score updates the gauge as quizzes are completed.

**Debugging SCORM packages** — Use the `window.SCORE = 0.5\n<script>@input</script>` pattern to verify gauge rendering before deploying to the LMS.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — ECharts gauge |
| **Server required** | No |
| **LMS required** | No for display; Yes for actual SCORM score |
| **Key macro** | `@score(Label)` |
| **Score range** | 0.0 – 1.0 → displayed as 0 – 100% |
| **Live update** | Yes — getter/setter observer pattern |
| **Testing** | `window.SCORE = 0.x` + `<script>@input</script>` |
| **Chart library** | ECharts (bundled) |
| **Author** | LiaPlayground |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/SCORM-Progress/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaPlayground/SCORM-Progress" label="View on GitHub" >}}

---

## Related Templates

- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze quiz answers and share with teacher
- [**lia-timer**](/blog/lia-timer-quiz-countdown-in-liascript) — countdown timers for timed SCORM assessments
- [**H5P-Test**](/blog/h5p-content-in-liascript) — embed H5P content within a SCORM-wrapped LiaScript course
- [**custom-code-imports**](/blog/custom-code-imports-external-files-in-liascript) — load external resources and inject LiaScript content at runtime
