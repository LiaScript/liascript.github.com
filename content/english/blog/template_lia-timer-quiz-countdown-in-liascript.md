---
title: "lia-timer for LiaScript: Countdown Timers for Quizzes and Exercises"
slug: "lia-timer-quiz-countdown-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/MINT-the-GAP/lia-timer"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Quizzes
    - Interactive
    - Teachers
    - No Server
description: "Add countdown timers to any LiaScript quiz with lia-timer — three trigger modes (immediate, on-check, manual), flexible time formats, and optional on-screen badges for timed assessments."
---

Timed quizzes and exercises motivate focused work and simulate exam conditions.
The [lia-timer](https://github.com/MINT-the-GAP/lia-timer) community plugin by [MINT-the-GAP](https://github.com/MINT-the-GAP) adds a countdown timer to any LiaScript quiz with a single HTML comment — no JavaScript required.
Three trigger modes let you start the clock automatically, on the first check attempt, or only when the student explicitly clicks a start button.

---

## Quick Start

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md
-->
```

No macros. Add `data-solution-timer` attributes as a comment directly above the quiz block.

---

## Attributes

| Attribute | Values | Description |
|---|---|---|
| `data-solution-timer` | `10s`, `2min`, `1:30`, `90`, `500ms` | Duration of the countdown |
| `data-solution-timer-start` | `immediate`, `oncheck`, `onclick` | When to start the timer |
| `data-solution-timer-badge` | `on`, `off` | Show/hide the countdown badge on the quiz |
| `data-solution-timer-start-label` | any text | Label for the start button (onclick mode) |

### Time formats

- `10s` — 10 seconds
- `2min` — 2 minutes
- `1:30` — 1 minute 30 seconds
- `90` — 90 seconds (plain number = seconds)
- `500ms` — 500 milliseconds

---

## Trigger modes

### `immediate` — Countdown starts on page load

```markdown
<!-- data-solution-timer="30s" data-solution-timer-start="immediate" -->
What is the capital of France?

[( )] Berlin
[(X)] Paris
[( )] Madrid
[( )] Rome
```

The timer starts as soon as the student reaches this quiz slide.

---

### `oncheck` — Countdown starts on first check

```markdown
<!-- data-solution-timer="60s" data-solution-timer-start="oncheck" -->
$2^8 = $ [[256]]
```

No timer is visible until the student clicks **Check** for the first time.
After that, the remaining time counts down.

---

### `onclick` — Student starts the timer manually

```markdown
<!-- data-solution-timer="45s" data-solution-timer-start="onclick" data-solution-timer-start-label="Start 45-second timer" -->
Translate into German: "The weather is beautiful today."

[[Das Wetter ist heute schön.]]
```

A button with the given label is shown.
The countdown only begins when the student clicks it.

---

## Example: Timed Test

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md
-->

# Speed Math Quiz

## Round 1 — Mental arithmetic (10 s each)

<!-- data-solution-timer="10s" data-solution-timer-start="immediate" -->
$7 \times 8 =$ [[56]]

---

<!-- data-solution-timer="10s" data-solution-timer-start="immediate" -->
$144 \div 12 =$ [[12]]

---

<!-- data-solution-timer="10s" data-solution-timer-start="immediate" -->
$\sqrt{81} =$ [[9]]

---

## Round 2 — Longer calculation (allow 90 s, start when ready)

<!-- data-solution-timer="1:30" data-solution-timer-start="onclick" data-solution-timer-start-label="Begin 90-second task" -->
A train travels at 120 km/h for 45 minutes.
How many kilometres does it travel?

[[90]]

---

## Round 3 — Language fill-in (timer starts on first check)

<!-- data-solution-timer="30s" data-solution-timer-start="oncheck" -->
The opposite of "shallow" is:

[[deep]]
```

---

## Combining with lia-freeze-v2

```markdown
<!--
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
-->

# Timed Vocabulary Quiz

@freeze

<!-- data-solution-timer="20s" data-solution-timer-start="immediate" -->
"Der Schmetterling" means:

[( )] The butterfly
[(X)] The butterfly
[( )] The dragonfly

@endfreeze

@submit(mailto:teacher@school.edu)
```

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md" >}}

---

## Use Cases

**Exam simulation** — Give each question a strict time budget; the timer locks answers when it expires.

**Speed drills** — Short 5–10 second timers for mental math, vocabulary recall, or reading-speed exercises.

**Pressure-free practice** — Use `onclick` mode so students start the timer only when they feel ready, removing anxiety from timed practice.

**Classroom pacing** — Immediate timers ensure all students move on at the same pace during synchronous sessions.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — script plugin |
| **Server required** | No |
| **Syntax** | HTML comment above quiz block |
| **Trigger modes** | `immediate`, `oncheck`, `onclick` |
| **Time formats** | `s`, `min`, `mm:ss`, plain seconds, `ms` |
| **Badge** | On-screen countdown badge (optional) |
| **Start button label** | Customizable |
| **Community template** | Yes (MINT-the-GAP) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/MINT-the-GAP/lia-timer" label="View on GitHub" >}}

---

## Related Templates

- [**lia-freeze-v2**](/blog/lia-freeze-quiz-submission-in-liascript) — freeze quiz answers and submit to teacher
- [**lia-orthography**](/blog/lia-orthography-spelling-exercises-in-liascript) — timed spelling and dictation exercises
- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized quiz banks for timed practice sets
- [**SCORM-Progress**](/blog/scorm-progress-tracking-in-liascript) — track scores and completion in LMS environments
