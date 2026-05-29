---
title: "lia-kachel for LiaScript: Drag-and-Drop Tile Quizzes"
slug: "lia-kachel-tile-quizzes-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-kachel"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Quizzes
    - Interactive
    - Teachers
    - No Server
liascript: true

description: "Enhance LiaScript's built-in tile quizzes with lia-kachel — rounded drag-and-drop cards with full touch support, order-independent grading, and sequential reveal modes for classroom exercises."
---

LiaScript has a native tile (Kachel) quiz syntax for drag-and-drop answers.
The [lia-kachel](https://github.com/MINT-the-GAP/lia-kachel) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) enhances it significantly: rounded cards that match the LiaScript design system, proper touch support for tablets and phones, cross-root drop emulation, and two extra macros for order-independent grading and sequential reveal of answer slots.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md
-->
```

> Note: The import URL uses `lia-Kachel` (capital K), matching the GitHub repo.

---

## Macro Reference

### `@Kachelfolge` — Order-independent tile selection

Use when the correct tiles must all be present but the order doesn't matter:

```markdown
<!-- data-randomize="true" -->
Wähle die richtigen Farben aus:

@Kachelfolge(`[->[(rot)]][->[(blau)]][->[(grün)|Haus]]`)
```

Tile syntax: `[->[(Antwort)]]` or `[->[(Antwort)|Beschriftung]]`

- `(Antwort)` — the correct answer (in round brackets)
- Alternatives without brackets are presented as wrong options: `[->[(rot)|blau|grün]]`

### `@KachelfolgeN` — Sequential reveal

Shows only the next empty slot — useful when the number of required tiles is unknown:

```markdown
Wähle alle roten Farbtöne aus:

@KachelfolgeN(`[->[(Karmesin)]][->[(Scharlach)]][->[(Rubinrot)|Kobalt]]`)
```

### `<div class="Kachel">` — Wrap standard tile quizzes

Wrap any standard LiaScript tile quiz with the `Kachel` class to enable touch support and the improved styling:

```html
<div class="Kachel">

<!-- data-randomize="true" -->
In diese Lücke muss [->[(gelb)]] rein. \
Und hier kommt [->[(rot)]] hin. \
Das Adjektiv lautet [->[pink|grün|(rot)]].

</div>
```

---

## Quiz Configuration

Standard LiaScript quiz options work directly above the macro:

```markdown
<!-- data-randomize="true" -->
@Kachelfolge(`[->[(A)]][->[(B)]][->[(C)]]`)

<!-- data-solution-button="2" -->
@Kachelfolge(`[->[(1)]][->[(2)|Label]][->[(3)]]`)

<!-- data-show-partial-solution="true" -->
@Kachelfolge(`[->[(X)]][->[(Y)]]`)
```

---

## Example: German Grammar Lesson

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md
-->

# Adjektivendungen

## Aufgabe 1 — Nominativ Singular

Wähle die richtige Adjektivendung aus:

Der **schön**[->[(e)|(en)|(em)]] Garten.

Eine **schön**[->[(e)]] Blume.

Das **schön**[->[(e)|(en)|(em)]] Haus.

---

## Aufgabe 2 — Kasus gemischt

Ordne die Pronomen den Kasus zu:

<!-- data-randomize="true" -->
@Kachelfolge(`[->[(Nominativ)|Akkusativ]][->[(Dativ)|Genitiv]]`)

---

## Aufgabe 3 — Satzstellung

Bring die Satzteile in die richtige Reihenfolge:

@KachelfolgeN(`[->[(Gestern)]][->[(habe)]][->[(ich)]][->[(gelernt)]]`)
```

Try it live — drag the tiles into the correct gaps:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md
-->

# Adjektivendungen

## Nominativ Singular

Choose the correct adjective ending:

Der **schön**[->[(e)|(en)|(em)]] Garten.

Eine **schön**[->[(e)]] Blume.

Das **schön**[->[(e)|(en)|(em)]] Haus.

---

## Satzstellung

Bring the sentence parts into the correct order:

@KachelfolgeN(`[->[(Gestern)]][->[(habe)]][->[(ich)]][->[(gelernt)]]`)
{{< /liascript >}}

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md" >}}

---

## Use Cases

**Vocabulary and grammar quizzes** — Students drag correct words, suffixes, or pronouns into gaps, with randomized distractors.

**Science classification** — Drag chemical elements, animals, or geological periods into the correct category.

**Sequencing exercises** — Use `@KachelfolgeN` to have students reconstruct a process (the water cycle, historical events, algorithm steps) in the correct order, one step at a time.

**Touch-first classrooms** — The enhanced touch support makes tile quizzes work reliably on iPads and Android tablets, which the native LiaScript tile quiz may not handle as smoothly.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Key macros** | `@Kachelfolge`, `@KachelfolgeN`, `<div class="Kachel">` |
| **Touch support** | Yes — full drag-and-drop on mobile |
| **Order-independent grading** | Yes — `@Kachelfolge` |
| **Sequential reveal** | Yes — `@KachelfolgeN` |
| **Randomize** | Yes — `data-randomize="true"` |
| **Quiz freeze** | Yes — answers lock on solve |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-Kachel/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-kachel" label="View on GitHub" >}}

---

## Related Templates

- [**DragAndDrop**](/blog/drag-and-drop-quizzes-in-liascript) — JS-based drag-and-drop order and multiple-choice quizzes
- [**lia-marker**](/blog/lia-marker-text-highlighting-in-liascript) — color-coded text highlighting quizzes
- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized quiz banks for practice sets
- [**lia-DynFlex**](/blog/lia-dynflex-resizable-columns-in-liascript) — multi-column layouts for side-by-side quizzes
