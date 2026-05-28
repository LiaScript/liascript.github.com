---
title: "Fullscreen for LiaScript: Clean Presentation Mode Without the Navigation Bar"
slug: "fullscreen-presentation-mode-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Fullscreen"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Presentation
    - Teachers
    - No Server

description: "Use the Fullscreen template to automatically hide the LiaScript navigation bar when entering fullscreen mode — one import, zero configuration, clean presentations."
---

LiaScript courses have a navigation bar at the top.
For reading and editing, it is helpful.
For presenting in front of an audience, it is visual noise.

The [Fullscreen template](https://github.com/LiaTemplates/Fullscreen) solves this with a single import.
When a learner or presenter presses <kbd>F11</kbd> to enter fullscreen, the navigation bar disappears automatically.
When they leave fullscreen, it returns.
No configuration, no extra markup, no macros.

---

## Quick Start

Add the import to your course header and the plugin is active:

``` markdown
<!--
author:   Your Name
import:   https://raw.githubusercontent.com/LiaTemplates/Fullscreen/0.0.1/README.md
-->

# Your Course Title
```

That is the entire setup.

---

## How It Works

The template registers a `window.onresize` event listener via `@onload`.
When the browser window dimensions match the full screen resolution, the listener hides the `#lia-toolbar-nav` element and removes its top margin.
When the user exits fullscreen, the listener restores the navigation bar.

```
F11 pressed → fullscreen detected → nav hidden → clean slide view
F11 pressed again → fullscreen exited → nav restored → normal navigation
```

This works with any browser that supports the native fullscreen API, including Chrome, Firefox, and Edge.

---

## Using It in Presentations

LiaScript renders each section as a slide-like page.
Combined with the Fullscreen template, the workflow for a live lecture becomes:

1. Open your LiaScript course URL in the browser
2. Press <kbd>F11</kbd> to enter fullscreen
3. Use <kbd>→</kbd> / <kbd>←</kbd> or the arrow buttons to navigate slides
4. The navigation bar is hidden — the audience sees only your content

The template works particularly well with courses that use the `Slides` display mode (`?mode=Slides` in the URL), which formats each section as a horizontal presentation slide.

---

## Combining with Other Templates

The Fullscreen template is passive — it adds no macros and does not interfere with any other template.
It can be imported alongside any other LiaScript template in the same header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Fullscreen/0.0.1/README.md
         https://raw.githubusercontent.com/LiaTemplates/ABCjs/main/README.md
         https://raw.githubusercontent.com/LiaTemplates/citations/refs/heads/main/README.md
-->
```

All three are active simultaneously.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Fullscreen/main/README.md" >}}

---

## Use Cases

**Lecture presentations** — Open a LiaScript course in a browser, press F11, and present without any UI chrome distracting the audience.
No need to export to PowerPoint or PDF.

**Student kiosk mode** — Deploy a course on a kiosk or shared terminal where you want the content to fill the screen without visible navigation controls.

**Screencasts and recordings** — Record course walkthroughs without the navigation bar appearing in the frame.

**Clean screenshots for documentation** — Capture course pages without interface elements for use in printed materials or promotional screenshots.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **Macros** | None — import only |
| **Trigger** | Native fullscreen (F11 or browser fullscreen API) |
| **Reversible** | Yes — nav bar is restored on exit |
| **Conflicts with other templates** | No |
| **License** | MIT |
| **Maintained** | Stable (version 0.0.1) |
| **Version-stable import** | Yes (`0.0.1` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Fullscreen/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Fullscreen/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Fullscreen" label="View on GitHub" >}}

---

## Related Templates

- [**Citations**](/blog/citations-bibtex-references-in-liascript) — BibTeX references and bibliography for academic course materials
- [**ABCjs**](/blog/abcjs-music-notation-in-liascript) — music notation in LiaScript, also useful in presentation-style courses
- [**Chat Simulation**](/blog/chat-simulation-in-liascript) — animated conversation displays for interactive presentations
- [**Wikimedia Commons**](/blog/wikimedia-commons-in-liascript) — embed media assets cleanly in presentation slides
