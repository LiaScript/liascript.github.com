---
title: "H5P in LiaScript: Embed Interactive H5P Content in Courses"
slug: "h5p-content-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/andre-dietrich/H5P-Test"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Interactive
    - Quizzes
    - H5P
description: "Embed H5P interactive activities — quizzes, videos, presentations, games — directly in LiaScript courses using a simple iframe. A proof-of-concept for integrating H5P content from h5p.org or any LRS."
---

[H5P](https://h5p.org) is a widely used open-source framework for interactive HTML5 content: drag-and-drop exercises, video quizzes, flashcards, branching scenarios, interactive maps, and dozens more activity types.
The [H5P-Test](https://github.com/andre-dietrich/H5P-Test) repository by [André Dietrich](https://github.com/andre-dietrich) demonstrates how to embed H5P content from h5p.org (or any compatible LRS) directly inside a LiaScript course using a plain HTML `<iframe>`.

---

## Quick Start

No import is required.
H5P content is embedded directly with standard HTML:

```markdown
<!--
author: Your Name
-->

# H5P in LiaScript

<iframe
  src="https://h5p.org/h5p/embed/6725"
  width="100%"
  height="500"
  frameborder="0"
  allowfullscreen="allowfullscreen"
></iframe>
```

Replace `6725` with your own H5P content ID, or use the embed URL from any H5P-compatible platform.

---

## Finding H5P embed URLs

Any H5P activity published on [h5p.org](https://h5p.org/content-types-and-applications) has an **Embed** button below it.
Click it to copy the `<iframe>` snippet, then paste it directly into your LiaScript Markdown.

Self-hosted H5P (via Moodle, WordPress H5P plugin, or standalone h5p-standalone) generates the same kind of embed URL.

---

## Example: Quiz and Flashcard in One Course

```markdown
# Interactive Review

## Flashcard Vocabulary

Practice chemistry terms:

<iframe
  src="https://h5p.org/h5p/embed/1216"
  width="100%"
  height="400"
  frameborder="0"
  allowfullscreen="allowfullscreen"
></iframe>

---

## Multiple Choice Quiz

<iframe
  src="https://h5p.org/h5p/embed/6725"
  width="100%"
  height="480"
  frameborder="0"
  allowfullscreen="allowfullscreen"
></iframe>

---

## What is H5P?

[( )] A JavaScript chart library
[(X)] An open-source interactive HTML5 content framework
[( )] A SCORM packaging tool
```

---

## Self-Hosted H5P

For courses that must work offline or need full control over content, H5P can be self-hosted.
Point the `src` to your own instance:

```html
<iframe
  src="https://yourdomain.com/wp-admin/admin-ajax.php?action=h5p_embed&id=42"
  width="100%"
  height="500"
  frameborder="0"
  allowfullscreen="allowfullscreen"
></iframe>
```

Or use [h5p-standalone](https://github.com/tunapanda/h5p-standalone) and host the H5P package directly in the LiaScript `static/` folder.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/andre-dietrich/H5P-Test/main/README.md" >}}

---

## Limitations

> **This is a proof-of-concept.**
> Score reporting from H5P back into LiaScript is not integrated.
> The H5P activity runs in its own iframe context.
> xAPI / SCORM events from H5P do not automatically flow into LiaScript's quiz state.
> For tracked assessments, consider using LiaScript's native quiz types or the [SCORM-Progress](/blog/scorm-progress-tracking-in-liascript) template instead.

---

## Use Cases

**Reusing existing H5P libraries** — If your institution already has hundreds of H5P activities in Moodle or WordPress, embedding them in a LiaScript course avoids recreating them from scratch.

**Branching scenarios** — H5P's Course Presentation and Branching Scenario types have no direct LiaScript equivalent; embedding them fills the gap.

**Video quizzes** — H5P's Interactive Video allows quizzes to appear at specific timestamps; embed the interactive video directly in a LiaScript section.

**Drag-and-drop and sorting** — H5P has rich drag-and-drop activity types that complement LiaScript's text-gap approach.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — iframe |
| **Server required** | No (uses h5p.org) / Yes (self-hosted) |
| **Syntax** | Plain HTML `<iframe>` |
| **Score integration** | None — H5P runs independently |
| **H5P source** | h5p.org, Moodle, WordPress, self-hosted |
| **Content types** | All H5P types (quiz, video, flashcards, …) |
| **Status** | Proof-of-concept / experimental |
| **Age** | ~6 years (original repo) |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/andre-dietrich/H5P-Test/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/andre-dietrich/H5P-Test/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/andre-dietrich/H5P-Test" label="View on GitHub" >}}

---

## Related Templates

- [**SCORM-Progress**](/blog/scorm-progress-tracking-in-liascript) — SCORM score tracking and progress visualization in LiaScript
- [**DragAndDrop**](/blog/drag-and-drop-quizzes-in-liascript) — native LiaScript drag-and-drop quizzes without iframe
- [**lia-kachel**](/blog/lia-kachel-tile-quizzes-in-liascript) — tile-based drag-and-drop with full touch support
- [**custom-code-imports**](/blog/custom-code-imports-external-files-in-liascript) — load and execute external code files in LiaScript
