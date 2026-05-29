---
title: "ABCjs for LiaScript: Embed and Play Music Notation in Open Courses"
slug: "abcjs-music-notation-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/logo.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Music
    - Visualization
    - OER
    - Interactive
    - No Server
    - Teachers

liascript: true

description: "Use the ABCjs template to write, render, and play music in ABC notation directly inside your LiaScript courses — no server, no extra tools, just text."
---

Music belongs in open courses.
Whether you teach music theory, introduce students to folk music traditions, document historical scores, or simply want to liven up a language lesson with a melody — the [ABCjs template](https://github.com/LiaTemplates/ABCjs) lets you write music in plain text and render it as interactive sheet music with a built-in audio player, directly in the browser.

No server, no MIDI files to upload, no external embedding.
Just import the template, write [ABC notation](https://en.wikipedia.org/wiki/ABC_notation), and your course comes alive with sound.

---

## What is ABC Notation?

[ABC notation](https://abcnotation.com) is a text-based music notation system — simple enough to type in a plain text editor, expressive enough to describe melodies, chords, rhythms, lyrics, and multiple voices.
It was originally created for folk and traditional music and is widely used in online score archives.

A short example:

``` text
X: 1
T: Ode an die Freude
C: L. v. Beethoven
M: 4/4
L: 1/4
K: D
E E F G | G F E D | C C D E | E3/2 D/ D2 |
```

The [ABCjs JavaScript library](https://www.abcjs.net) turns this text into rendered notation with a playback button — and the LiaScript template wraps it into a simple macro you can use directly in your course.

---

## Quick Start

Add a single line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md
-->
```

For a version-stable import (recommended for published courses):

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ABCjs/0.0.2/README.md
-->
```

That's it. All four macros are now available in your document.

---

## Rendering Notes: `@ABCJS.render`

The simplest macro renders your ABC code as sheet music with a play button:

```` markdown
``` abc @ABCJS.render
X: 1
T: Ode an die Freude
C: L. v. Beethoven
M: 4/4
L: 1/4
K: D
E E F G | G F E D | C C D E | E3/2 D/ D2 |
E E F G | G F E D | C C D E | D3/2 C/ C2 |
D D E C | D E/F/ E C | D E/F/ E D | C D G,2 |
E E F G | G F E D | C C D E | D3/2 C/ C2 |
```
````

Try it directly in the LiveEditor:

{{< liascript  mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md
-->

# ABCjs Demo – Noten rendern

``` abc @ABCJS.render
X: 1
T: Ode an die Freude
C: L. v. Beethoven
M: 4/4
L: 1/4
K: D
E E F G | G F E D | C C D E | E3/2 D/ D2 |
E E F G | G F E D | C C D E | D3/2 C/ C2 |
D D E C | D E/F/ E C | D E/F/ E D | C D G,2 |
E E F G | G F E D | C C D E | D3/2 C/ C2 |
```
{{< /liascript >}}

---

## Live Editing: `@ABCJS.eval`

The real power comes with `@ABCJS.eval`.
This turns the code block into an editable LiaScript editor — learners can modify the score, change notes, transpose melodies, and hear the result immediately.
All changes are preserved in the course state.

```` markdown
``` abc
% audio: true
% autoplay: false
% notes: true
X: 1
T: Twinkle Twinkle Little Star
M: 4/4
L: 1/4
K: C
C C G G | A A G2 | F F E E | D D C2 |
G G F F | E E D2 | G G F F | E E D2 |
C C G G | A A G2 | F F E E | D D C2 |
```
@ABCJS.eval
````

The comment lines (`% audio: true`, etc.) are settings that override the macro defaults — you can embed them directly in the ABC code.

Try the editable example live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md
-->

# ABCjs Demo – Live-Editor

``` abc
% audio: true
% autoplay: false
% notes: true
X: 1
T: Twinkle Twinkle Little Star
M: 4/4
L: 1/4
K: C
C C G G | A A G2 | F F E E | D D C2 |
G G F F | E E D2 | G G F F | E E D2 |
C C G G | A A G2 | F F E E | D D C2 |
```
@ABCJS.eval
{{< /liascript >}}

---

## Fine-grained Control: `@ABCJS.renderWith` and `@ABCJS.evalWith`

Both macros accept parameters to configure the output precisely:

```` markdown
``` abc @ABCJS.renderWith(channel="10" audio="true" notes="false")
X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|"Em"EBBA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
```
````

Available options:

| Option | Description |
|--------|-------------|
| `audio` | Show audio controls (default: `true`) |
| `autoplay` | Start playing automatically when visible (default: `false`) |
| `channel` | MIDI channel — use `10` for percussion |
| `notes` | Render sheet music or playback-only (default: `true`) |
| `program` | MIDI instrument number |
| `responsive` | Fit to screen width (default: `true`) |
| `tablature` | Add instrument tablature (e.g., for guitar or violin) |
| `stereo` | Stereo panning effect (default: `false`) |
| `voicesOff` | Play accompaniment without melody |
| `chordsOff` | Silence guitar chord symbols |

---

## Full Template Demo

The full ABCjs README is itself a self-documenting LiaScript course — you can explore all features live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md" >}}

---

## Use Cases

**Music education** — Render scales, intervals, sight-reading exercises, and harmonization tasks directly in the course text.
Students can modify the notation and hear the result without leaving the page.

**Folk and traditional music** — ABC notation has a vast archive at [abcnotation.com](https://abcnotation.com).
Paste any score directly into your course.

**Music theory** — Present chord progressions, voice-leading examples, or counterpoint exercises with playback.
Use `@ABCJS.eval` to let students experiment with modifications.

**Language courses** — Embed songs and nursery rhymes to support pronunciation, rhythm, and vocabulary learning.

**OER and open archives** — Since ABC is plain text, your scores are fully version-controllable with Git, shareable without binaries, and independent of any proprietary format.

---

## Learning ABC Notation

ABC notation is easy to pick up.
A good starting point is the official documentation at [abcnotation.com](https://abcnotation.com) and the following video series:

- [How to get started with ABC notation](https://www.youtube.com/watch?v=jwzzueA5siQ)
- [ABC notation basics](https://www.youtube.com/watch?v=H8hWKP5cEXE)
- [Next steps with ABC notation](https://www.youtube.com/watch?v=u6_tjcKE42A)
- [Including lyrics in ABC notation](https://www.youtube.com/watch?v=RWNeCjid0zc)
- [Polyphony and multiple voices](https://www.youtube.com/watch?v=HxLKo4HL19g)

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no server, no backend |
| **Audio playback** | Built-in via abcjs Web Audio synthesis |
| **Interactive editing** | Yes, with `@ABCJS.eval` |
| **External API** | No |
| **Offline capable** | After first load (assets cached) |
| **License** | CC0-1.0 |
| **Maintained** | Yes (TypeScript, latest build 2024) |
| **Version-stable import** | Yes (`0.0.2` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/ABCjs" label="View on GitHub" >}}

---

## Related Templates

- [**mermaid_template**](/blog/mermaid-diagrams-in-liascript) — text-based diagram notation (flowcharts, sequence diagrams, Gantt)
- [**JSXGraph**](/blog/jsxgraph-and-liascript-a-perfect-match) — interactive mathematical visualizations
- [**plantUML**](https://github.com/LiaTemplates/plantUML) — UML diagrams via PlantUML
- [**Tikz-Jax**](https://github.com/LiaTemplates/Tikz-Jax) — render TikZ/LaTeX figures in the browser
