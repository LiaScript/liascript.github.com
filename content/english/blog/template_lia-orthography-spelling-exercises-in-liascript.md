---
title: "lia-orthography for LiaScript: Spelling and Dictation Exercises"
slug: "lia-orthography-spelling-exercises-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-orthography"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Language Learning
    - Quizzes
    - Interactive
    - Teachers
    - No Server
liascript: true

description: "Create interactive spelling correction and dictation exercises in LiaScript with lia-orthography — inline correction, full-text editing with diff feedback, and narrated dictation gaps."
---

Spelling exercises require more than multiple-choice: students need to type corrections and see exactly what they got wrong.
The [lia-orthography](https://github.com/MINT-the-GAP/lia-orthography) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) adds three exercise types:
an **inline correction** field, a **full-text textarea** with diff highlighting, and a **dictation gap** that reads a word aloud and asks students to type the spelling.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->
```

---

## Macros

### `@orthography` — Inline text correction

Students receive a short incorrect sentence and type the corrected version:

```markdown
@orthography(
  `<!-- data-solution-button="2" -->`,
  `The apel is red.`,
  `The apple is red.`
)
```

- Argument 1: LiaScript quiz options comment (can be empty: `` ` ` ``)
- Argument 2: The incorrect text shown to the student
- Argument 3: The correct reference text (used for grading)

---

### `@orthographytext` — Multi-line text correction

For longer texts, renders a textarea where the student can rewrite the full passage:

```markdown
@orthographytext(
  `<!-- data-solution-button="2" -->`,
  `Their going to the park with there dog. Its a beautifull day.`,
  `They're going to the park with their dog. It's a beautiful day.`
)
```

On check, the submitted text is compared to the reference with character-level diff highlighting — errors shown in red, corrections shown in green.

---

### `@diktat` — Narrated dictation gap

The text-to-speech narrator reads the word; the student types the spelling into a gap:

```markdown
Anna @diktat(went) to the @diktat(zoo) yesterday.
She saw a @diktat(giraffe) and a @diktat(penguin).
```

The narrator skips over the surrounding text and speaks only the target word.
Students type the spelling before revealing the answer.

---

## Example: English Spelling Unit

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->

# Spelling Practice

## Task 1 — Find the Errors

Correct all spelling mistakes in the following sentence:

@orthography(
  `<!-- data-solution-button="2" -->`,
  `She recieved a beautifull present from her freind.`,
  `She received a beautiful present from her friend.`
)

---

## Task 2 — Correct the Paragraph

Rewrite the following paragraph without errors:

@orthographytext(
  ` `,
  `I have went to school yesterday. We lerned about the enviroment. Our techer showed us intresting exampels.`,
  `I went to school yesterday. We learned about the environment. Our teacher showed us interesting examples.`
)

---

## Task 3 — Dictation

Listen and type the missing words:

The @diktat(knight) rode across the @diktat(bridge) at @diktat(midnight).
He carried a @diktat(sword) and a @diktat(shield).
```

Try it live — correct the spelling errors and listen for the dictation words:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->

# Spelling Practice

## Task 1 — Find the Errors

Correct all spelling mistakes:

@orthography(
  `<!-- data-solution-button="2" -->`,
  `She recieved a beautifull present from her freind.`,
  `She received a beautiful present from her friend.`
)

---

## Task 2 — Correct the Paragraph

@orthographytext(
  ` `,
  `I have went to school yesterday. We lerned about the enviroment. Our techer showed us intresting exampels.`,
  `I went to school yesterday. We learned about the environment. Our teacher showed us interesting examples.`
)

---

## Task 3 — Dictation

Listen and type the missing words:

The @diktat(knight) rode across the @diktat(bridge) at @diktat(midnight).
He carried a @diktat(sword) and a @diktat(shield).
{{< /liascript >}}

---

## Example: German Spelling (Rechtschreibung)

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md
-->

# Rechtschreibübungen

## Aufgabe 1 — Großschreibung von Nomen

Korrigiere alle Fehler:

@orthography(
  `<!-- data-solution-button="4" -->`,
  `der hund läuft durch den garten zum haus.`,
  `Der Hund läuft durch den Garten zum Haus.`
)

---

## Aufgabe 2 — Diktat

Höre zu und schreibe die fehlenden Wörter:

Die @diktat(Sonne) schien hell über die @diktat(Wiese).
Die @diktat(Kinder) spielten @diktat(fröhlich) im @diktat(Freien).
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md" >}}

---

## Use Cases

**Primary language arts** — Inline and textarea correction exercises for spelling, capitalization, and punctuation.

**Foreign language learning** — Dictation gaps for vocabulary spelling practice; students hear the L2 word and type it from memory.

**Dictation exercises** — Classic school dictation recreated digitally: the TTS narrator reads each word, students type, then compare against the reference.

**Differentiated instruction** — Combine `@orthography` (shorter tasks) with `@orthographytext` (longer passages) for different skill levels in the same course.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Key macros** | `@orthography`, `@orthographytext`, `@diktat` |
| **Feedback** | Character-level diff (red/green highlighting) |
| **Dictation TTS** | Yes — uses LiaScript narrator |
| **Quiz options** | Yes — pass comment block as first argument |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-orthography" label="View on GitHub" >}}

---

## Related Templates

- [**lia-marker**](/blog/lia-marker-text-highlighting-in-liascript) — color-coded text highlighting quizzes
- [**lia-canvas-ocr**](/blog/lia-canvas-ocr-handwriting-recognition-in-liascript) — handwritten answer recognition
- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze and submit quiz results to teacher
- [**lia-timer**](/blog/lia-timer-quiz-countdown-in-liascript) — timed spelling quizzes with countdown
