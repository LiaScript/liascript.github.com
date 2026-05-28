---
title: "LiveEdit-Embeddings for LiaScript: Inline Interactive LiaScript Examples"
slug: "liveedit-embeddings-interactive-examples-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/LiveEdit-Embeddings"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Interactive
    - Developers
    - LiveEditor
    - No Server
description: "Embed fully interactive LiaScript examples directly in your course using the LiveEdit-Embeddings template — students can edit and preview LiaScript code without leaving the slide."
---

When teaching LiaScript itself — or when building meta-courses that demonstrate LiaScript features — you need a way to show live, editable LiaScript code inline.
The [LiveEdit-Embeddings template](https://github.com/LiaTemplates/LiveEdit-Embeddings) does exactly this: it encodes a LiaScript markdown snippet as a base64 URL and embeds the [LiaScript LiveEditor](https://liascript.github.io/LiveEditor/) as an inline iframe.

Students see a preview, can switch to edit mode, and can interact with the embedded LiaScript — without navigating away.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/LiveEdit-Embeddings/refs/heads/main/README.md
-->
```

---

## Macros Overview

All macros are placed in the header of a code block containing LiaScript markdown.
The content of the block is the LiaScript source to embed.

| Macro | View on load | Size |
|---|---|---|
| `@embed` | Default toggle | 80vh |
| `@embed.edit` | Edit mode first | 80vh |
| `@embed.preview` | Preview mode first | 80vh |
| `@embed.style(style)` | Default toggle | Custom |
| `@embed.edit.style(style)` | Edit mode first | Custom |
| `@embed.preview.style(style)` | Preview mode first | Custom |

---

## Macro 1: `@embed` — Default (Toggle View)

The iframe opens with the default LiveEditor toggle between edit and preview.

```` markdown
```markdown @embed
# Hello World

This is a LiaScript example embedded inline.

> **Note:** You can edit this!
```
````

---

## Macro 2: `@embed.preview` — Start in Preview Mode

The iframe starts in rendered preview mode.
Students see the formatted output immediately and can switch to edit if they want.

```` markdown
```markdown @embed.preview
# A Simple Quiz

What is 2 + 2?

[[4]]
```
````

---

## Macro 3: `@embed.edit` — Start in Edit Mode

The iframe opens showing the source code editor.
Useful when the goal is for students to modify the code.

```` markdown
```markdown @embed.edit
# Edit me!

Change this text and see the result in preview.
```
````

---

## Macro 4: `@embed.style(style)` — Custom Size

Override the iframe dimensions and styling:

```` markdown
```markdown @embed.style("height: 400px; width: 100%; border: 1px solid #ccc;")
# Compact Example

A smaller embedded view.
```
````

---

## Example: Teaching LiaScript Quizzes

```` markdown
## How to Write a Quiz in LiaScript

Here's a live editable example — try changing the correct answer:

```markdown @embed.preview
# Quiz Demo

What is the capital of France?

[[ Paris | London | Berlin | Madrid ]]
[[ (Paris) | London | Berlin | Madrid ]]
```
````

---

## How It Works

1. The macro takes the content of the code block
2. Encodes it as base64
3. Constructs a LiaScript LiveEditor URL with the encoded content
4. Renders the URL as an iframe `srcdoc`

No server round-trip is involved.
The embedded course is self-contained in the URL.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/LiveEdit-Embeddings/main/README.md" >}}

---

## Use Cases

**LiaScript documentation and tutorials** — Teach LiaScript features with live inline examples that readers can edit directly.

**Course authoring workshops** — Show participants how to write quizzes, code blocks, and animations, with immediate live preview beside the explanation.

**Developer onboarding** — Embed runnable LiaScript snippets in technical documentation.

**Sandbox exercises** — Provide pre-built code templates for students to modify — they edit the LiaScript markdown and see the rendered result in real time.

**Interactive OER authoring** — Create OER content about OER authoring, with self-referential live examples.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — iframe with base64 LiveEditor URL |
| **Server required** | No |
| **Content format** | LiaScript Markdown |
| **Start in preview** | Yes — `@embed.preview` |
| **Start in edit** | Yes — `@embed.edit` |
| **Custom size** | Yes — `@embed.style(...)` |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/LiveEdit-Embeddings/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/LiveEdit-Embeddings/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/LiveEdit-Embeddings" label="View on GitHub" >}}

---

## Related Templates

- [**aframe**](/blog/aframe-3d-vr-scenes-in-liascript) — embed A-Frame 3D scenes inline
- [**BeforeAndAfter**](/blog/beforeandafter-image-comparison-in-liascript) — image comparison slider
- [**Pannellum**](/blog/pannellum-360-panorama-in-liascript) — 360° panorama viewer
- [**lia-board-mode**](/blog/lia-board-mode-fullscreen-presentation-in-liascript) — full-screen classroom presentation mode
