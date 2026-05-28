---
title: "Chat-Simulation for LiaScript: Bring Dialogues to Life in Your Course"
slug: "chat-simulation-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/logo.gif"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Interactive Exercises
    - Teachers
    - Students
    - Interactive
    - No Server
    - Language Learning

liascript: true

description: "Use the Chat-Simulation template to embed animated, multi-participant chat conversations directly in your LiaScript course — ideal for dialogues, case studies, and collaborative learning scenarios."
---

Sometimes the most effective way to present information is not as a list or an explanation, but as a conversation.
The [Chat-Simulation template](https://github.com/LiaTemplates/Chat-Simulation) lets you embed animated chat dialogues directly in your LiaScript course — complete with typing indicators, speech bubbles, and support for full Markdown and LiaScript elements inside every message.

A simple JSON array of participants and messages is all you need.
No server, no external service, no configuration beyond a single import line.

---

## What is `@CHAT`?

The `@CHAT` macro renders a JSON array of `{name, message}` objects as a live chat window.
Messages appear one by one with a simulated typing delay, just like a real chat.

The **first participant** is always aligned to the left (the "main" voice).
All other participants appear on the right.
You can have as many participants as you like — they are distinguished by name and color automatically.

Messages support:

- Standard **Markdown** (bold, italic, links, lists)
- **LaTeX math** (`$...$` and `$$...$$`)
- **LiaScript multimedia** — images, videos, audio, even embedded charts

This makes the template useful far beyond simple role-play scenarios.
You can embed a full Socratic dialogue about a mathematical topic, with formulas, visualizations, and video references, presented entirely as a chat exchange.

---

## Quick Start

Add this import line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md
-->
```

For a version-stable import (recommended for published courses):

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/0.0.1/README.md
-->
```

That's it — the `@CHAT` macro is now available throughout your document.

---

## Basic Conversation

Here is a minimal example: two students discussing what LiaScript is.

```` markdown
``` javascript @CHAT
[
  { "name": "Alice", "message": "Have you tried LiaScript yet?" },
  { "name": "Bob",   "message": "Not yet — what is it exactly?" },
  { "name": "Alice", "message": "It's a Markdown extension that turns plain text into **interactive courses** — quizzes, code, animations, all in the browser." },
  { "name": "Bob",   "message": "So no LMS required?" },
  { "name": "Alice", "message": "Exactly. You write in a `.md` file, share a link, and anyone can open it — even offline. 🎉" }
]
```
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md
-->

# Chat-Simulation Demo

``` javascript @CHAT
[
  { "name": "Alice", "message": "Have you tried LiaScript yet?" },
  { "name": "Bob",   "message": "Not yet — what is it exactly?" },
  { "name": "Alice", "message": "It's a Markdown extension that turns plain text into **interactive courses** — quizzes, code, animations, all in the browser." },
  { "name": "Bob",   "message": "So no LMS required?" },
  { "name": "Alice", "message": "Exactly. You write in a `.md` file, share a link, and anyone can open it — even offline. 🎉" }
]
```
{{< /liascript >}}

---

## Multi-Participant Chats

There is no limit on the number of participants.
The first name in the array is always the "main" voice (left side).
All others appear on the right, labeled by name.

```` markdown
``` javascript @CHAT
[
  { "name": "Tutor",   "message": "Good morning everyone! Today's topic: **version control with Git**." },
  { "name": "Maria",   "message": "I always mix up `merge` and `rebase` 😅" },
  { "name": "Jonas",   "message": "Same — what's the actual difference?" },
  { "name": "Tutor",   "message": "`merge` preserves history as-is and adds a merge commit. `rebase` rewrites commits onto the target branch — cleaner log, but rewrites history." },
  { "name": "Maria",   "message": "So `rebase` is risky on shared branches?" },
  { "name": "Tutor",   "message": "Exactly. Golden rule: **never rebase a branch others are working on.**" },
  { "name": "Jonas",   "message": "Got it. `merge` for public branches, `rebase` for local cleanup. ✅" }
]
```
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md
-->

# Git Q&A

``` javascript @CHAT
[
  { "name": "Tutor",   "message": "Good morning everyone! Today's topic: **version control with Git**." },
  { "name": "Maria",   "message": "I always mix up `merge` and `rebase` 😅" },
  { "name": "Jonas",   "message": "Same — what's the actual difference?" },
  { "name": "Tutor",   "message": "`merge` preserves history as-is and adds a merge commit. `rebase` rewrites commits onto the target branch — cleaner log, but rewrites history." },
  { "name": "Maria",   "message": "So `rebase` is risky on shared branches?" },
  { "name": "Tutor",   "message": "Exactly. Golden rule: **never rebase a branch others are working on.**" },
  { "name": "Jonas",   "message": "Got it. `merge` for public branches, `rebase` for local cleanup. ✅" }
]
```
{{< /liascript >}}

---

## Rich Content in Messages

Because LiaScript processes the `message` field as HTML with Markdown support, you can embed nearly anything — math formulas, images, videos, even inline charts.

A message with LaTeX:

``` json
{ "name": "Maya", "message": "The vertex form is $f(x) = (x-2)^2 - 1$, so the minimum is at $S(2 \\mid -1)$." }
```

A message with a video link:

``` json
{ "name": "Lena", "message": "Found a great explainer: !?[Quadratic functions](https://www.youtube.com/watch?v=B_PtpvhnNg0)" }
```

A message with an image:

``` json
{ "name": "Tom", "message": "Here's the parabola: ![Parabola sketch](https://upload.wikimedia.org/wikipedia/commons/b/b9/Parabeln-var-s.svg)" }
```

This means you can use Chat-Simulation not just for simple dialogues, but for **annotated worked examples**, **peer discussion reconstructions**, and **case study walkthroughs** where domain content lives inside the conversation.

---

## Full Template Demo

The full Chat-Simulation README is itself a self-documenting LiaScript course — explore all features live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md" >}}

---

## Use Cases

**Language learning** — Present a dialogue between native speakers.
Students follow the conversation and encounter vocabulary, idioms, and sentence structures in context.
Combine with audio links or pronunciation guides inside the messages.

**Social and ethical scenarios** — Simulate a conversation around a dilemma, a historical debate, or a professional situation.
Learners observe different perspectives before reflecting or deciding.

**Peer learning and Socratic dialogue** — Reconstruct how a concept is worked out step by step through questioning.
Formulas, sketches, and references appear naturally inside the chat flow.

**Onboarding and process walkthroughs** — Walk new team members or students through a process as a simulated support chat, with links and screenshots embedded in the messages.

**Case studies** — Present a client-consultant or doctor-patient exchange as context for a case-based learning activity.
The simulated conversation sets the scene before a quiz or reflection task follows.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no server, no backend |
| **External API** | No |
| **Participants** | Any number; first = left (main), others = right |
| **Message format** | JSON array of `{name, message}` objects |
| **Markdown support** | Yes — bold, italic, links, math, multimedia |
| **LiaScript elements** | Yes — charts, videos, images, formulas |
| **Typing animation** | Yes — animated indicator with randomised delays |
| **Offline capable** | After first load (assets cached) |
| **License** | MIT |
| **Maintained** | Yes (latest version 0.0.1, active) |
| **Version-stable import** | Yes (`0.0.1` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Chat-Simulation/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Chat-Simulation" label="View on GitHub" >}}

---

## Related Templates

- [**CollaborativeDrawing**](/blog/collaborative-drawing-in-liascript) — shared whiteboard for live classroom collaboration
- [**Speech-Recognition-Quiz**](/blog/speech-recognition-quiz-in-liascript) — quiz responses evaluated by spoken word
- [**Random**](https://github.com/LiaTemplates/Random) — randomise quiz banks and question pools
- [**TextAnalysis**](https://github.com/LiaTemplates/TextAnalysis) — text metrics and style analysis for language courses
