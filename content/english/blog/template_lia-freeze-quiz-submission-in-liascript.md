---
title: "lia-freeze-v2 for LiaScript: Quiz Submission and Teacher Review Links"
slug: "lia-freeze-quiz-submission-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-freeze-v2"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Teachers
    - Interactive
    - No Server
    - Quizzes
liascript: true

description: "Let students freeze their LiaScript quiz answers into a shareable URL with lia-freeze-v2 — the teacher opens the link, sees exactly what the student answered, and the page is locked for review."
---

LiaScript courses store quiz state in the student's browser — but there's no built-in way to hand that state to a teacher for grading.
The [lia-freeze-v2](https://github.com/MINT-the-GAP/lia-freeze-v2) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) closes this gap with a "freeze" mechanism: at the end of the course the student clicks a button to generate a URL that encodes all their quiz answers.
The teacher opens the URL and sees the completed course, locked for review and automatically scored.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
version: 1.0.0
-->
```

> **Important:** The course must have `version: 1.0.0` or higher in its header.
> LiaScript only persists quiz state to IndexedDB for versioned courses — without it the freeze snapshot will be empty.

---

## The Workflow

1. The student works through the course and answers all quizzes
2. On the final submission slide, they click **Create Link**
3. The plugin encodes all quiz answers into a compressed URL token
4. The student copies and sends the link to the teacher
5. The teacher opens the link — answers are restored and the page is locked for review

---

## Key Macros

### `@Abgabe` — Submission slide

Place this on the **final slide** of the course to render the name field and link creation button:

```markdown
## Submit your work

@Abgabe
```

### `@Auswertung` — Evaluation / teacher view

Place this at the end of your course.
When the teacher opens the freeze link, this slide shows all quiz answers automatically scored.

```markdown
@Auswertung
```

Optional parameters track academic integrity:

```markdown
@Auswertung(F12;Tab;Time)
```

| Option | Effect |
|---|---|
| `F12` | Flags if the student opened browser DevTools |
| `Tab` | Flags if the student switched to another tab/window |
| `Time` | Records time spent on each slide |

### `@ADetails` — Point values and topic tags

Place after any quiz block to assign points and optional topic tags:

```markdown
The capital of France is [[Paris]].

@ADetails(1;Geography)

Which are primary colors? [[X]] Red  [[X]] Blue  [[ ]] Green

@ADetails(2;Art)
```

### `@Exam(N)` — Timed exam mode

Place on a dedicated intro slide to start a countdown when students leave that slide:

```markdown
## Exam Instructions

You have **60 minutes** to complete this exam.

@Exam(60)
```

When time runs out, the submission link is generated automatically and the student is redirected to the `@Abgabe` slide.

---

## Full Example Course

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
version: 1.0.0
-->

# English Quiz

## Task 1 — Fill in the blanks

The capital of Germany is [[Berlin]].

@ADetails(1;Geography)

The largest planet is [[Jupiter]].

@ADetails(1;Astronomy)

## Task 2 — Multiple choice

Which are primary colors?

    [[ ]] Green
    [[X]] Red
    [[X]] Blue
    [[X]] Yellow

@ADetails(2;Art)

## Task 3 — Free text

Describe photosynthesis in one sentence.

[[___ ___]]

@ADetails(3;Biology)

## Submit

@Abgabe

@Auswertung(F12;Tab;Time)
```

Try it live — answer the quizzes, then go to the Submit slide and click **Create Link** to see the freeze mechanism in action:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
version: 1.0.0
-->

# English Quiz

## Task 1 — Fill in the blanks

The capital of Germany is [[Berlin]].

@ADetails(1;Geography)

The largest planet is [[Jupiter]].

@ADetails(1;Astronomy)

## Task 2 — Multiple choice

Which are primary colors?

    [[ ]] Green
    [[X]] Red
    [[X]] Blue
    [[X]] Yellow

@ADetails(2;Art)

## Submit

@Abgabe

@Auswertung(F12;Tab;Time)
{{< /liascript >}}

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md" >}}

---

## Use Cases

**School assessments** — Students complete a quiz course at home or in a computer lab, generate a freeze link, and send it to the teacher via email or LMS.

**Timed exams** — Use `@Exam(N)` to set a hard time limit; the submission is automatic when time expires.

**Formative feedback** — Teachers open freeze links to see exactly which questions each student got wrong, with per-topic scoring from `@ADetails`.

**Combined with lia-coordinate / lia-canvas-ocr** — Point positions and OCR-recognized answers are also captured in the freeze snapshot.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no server needed |
| **Server required** | No |
| **Key macros** | `@Abgabe`, `@Auswertung`, `@ADetails`, `@Exam` |
| **Version requirement** | `version: 1.0.0` or higher in course header |
| **State encoding** | Compressed URL token |
| **Integrity tracking** | Optional — F12, tab switch, time per slide |
| **Timed exam** | Yes — `@Exam(N)` in minutes |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-freeze-v2" label="View on GitHub" >}}

---

## Related Templates

- [**lia-timer**](/blog/lia-timer-quiz-countdown-in-liascript) — per-quiz countdown that hides the solution button until time is up
- [**lia-coordinate**](/blog/lia-coordinate-interactive-math-plots-in-liascript) — coordinate exercises whose answers are captured in the freeze snapshot
- [**lia-canvas-ocr**](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript) — handwriting recognition for quiz fields
- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized quiz banks to vary assignments across students
