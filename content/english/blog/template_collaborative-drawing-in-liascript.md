---
title: "CollaborativeDrawing for LiaScript: Shared Whiteboards for Live Classrooms"
slug: "collaborative-drawing-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg/1280px-Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Collaboration
    - Interactive Exercises
    - Teachers
    - Students
    - Classroom

liascript: true

description: "Add a shared, real-time drawing canvas to any LiaScript course — ideal for live classrooms, annotation tasks, and collaborative note-taking with no server required."
---

When you teach a live session, sometimes the most natural thing is to hand students a marker and say: "draw what you see."
The [CollaborativeDrawing template](https://github.com/LiaTemplates/CollaborativeDrawing) brings that experience into LiaScript — a shared canvas where every connected student draws in their own randomly assigned color, all changes synchronize in real time across all participants.

No server.
No sign-in.
Just open the course in a [LiaScript classroom](https://liascript.github.io/blog/liascript-classroom/), share the link, and start drawing together.

---

## What It Does

The template provides two macros:

- **`@Collaborative.lines`** — freehand drawing with mouse or touch; each participant draws in their own color
- **`@Collaborative.dots`** — click or tap to place dots; useful for marking points on maps, diagrams, or images

Both macros can display a blank canvas or use a **background image** — a map, a diagram, a photograph, or any other visual.
This makes them useful far beyond open-ended sketching: you can ask students to annotate an image, mark locations, label parts of a diagram, or sketch a concept map together.

Synchronization is built on LiaScript's publish-subscribe mechanism.
The drawing state is modeled as a [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (Conflict-free Replicated Data Type), so the order of messages doesn't matter — latecomers automatically receive the full current state when they join.

---

## Quick Start

Add these two lines to your course header (the `persistent: true` flag is required — it keeps the canvas alive when students navigate to other slides):

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md

persistent: true
-->
```

For a version-stable import:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/0.0.1/README.md

persistent: true
-->
```

---

## Drawing Lines: `@Collaborative.lines`

Place a freehand drawing canvas anywhere in your course:

``` markdown
@Collaborative.lines(640,320)
```

The first parameter is width in pixels, the second is height.
The canvas always scales to the full available width, so the pixel values define the aspect ratio rather than a fixed size.

Every student who has the course open gets a unique random color — you can see at a glance who drew what.

**With a background image:**

``` markdown
@Collaborative.lines(640,320,https://upload.wikimedia.org/wikipedia/commons/3/31/A_large_blank_world_map_with_oceans_marked_in_blue-edited.png)
```

Or use the alternative link syntax (preferred for relative paths in your own repository):

``` markdown
@[Collaborative.lines(640,320)](./img/my-diagram.jpg)
```

Try a live freehand canvas:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md

persistent: true
-->

# Collaborative Lines Demo

Draw something on the canvas below.
Each participant in a LiaScript classroom will draw in their own color.

@Collaborative.lines(640,240)
{{< /liascript >}}

---

## Placing Dots: `@Collaborative.dots`

For annotation tasks — marking locations on a map, identifying points on a diagram, voting by placing dots — use the simpler dot macro:

``` markdown
@Collaborative.dots(640,320)
```

Each click or tap places a dot in the current user's color.
This is especially effective with a background image:

``` markdown
@[Collaborative.dots(1000,500)](https://upload.wikimedia.org/wikipedia/commons/3/31/A_large_blank_world_map_with_oceans_marked_in_blue-edited.png)
```

Try it with a world map background:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md

persistent: true
-->

# Collaborative Dots Demo

Click anywhere on the map to mark a location.
In a classroom session, every participant's clicks appear in their own color.

@[Collaborative.dots(640,320)](https://upload.wikimedia.org/wikipedia/commons/3/31/A_large_blank_world_map_with_oceans_marked_in_blue-edited.png)
{{< /liascript >}}

---

## Full Template Demo

The CollaborativeDrawing README is itself a LiaScript course — explore both macros live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md" >}}

---

## Use Cases

**Live classroom warm-ups** — Ask students to sketch a concept, diagram a process, or draw a timeline together on a shared canvas before a lecture segment.

**Geographic and spatial tasks** — Load a map as the background and have students mark cities, trade routes, climate zones, or conflict areas.
Works for history, geography, social studies, and earth sciences.

**Image annotation** — Display a photograph, a technical drawing, or a biological specimen image and ask students to mark, label, or highlight features collaboratively.

**Brainstorming and concept mapping** — Use the freehand canvas as a shared sticky-note board equivalent for mind maps or idea webs.

**Voting and polling** — A dot canvas on an opinion spectrum (agree ↔ disagree) lets you visualize class sentiment instantly.

**Formative assessment** — Ask students to draw a circuit, sketch a graph, or annotate a molecule structure.
The teacher sees all contributions in real time.

---

## The Classroom Connection

The collaborative features only activate when a course is opened in a **LiaScript classroom** — a shared session identified by a room name.
When students connect to the same room, their drawing events are broadcast via LiaScript's pub-sub layer.

New participants who join mid-session automatically receive the current canvas state — the CRDT model means no drawing is lost due to late joins or brief disconnects.

Without a classroom session, the macros still render a functional local canvas, which is useful for solo testing and course development.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no server, no backend |
| **Classroom required** | Yes, for real-time sync (works locally without it) |
| **Touch support** | Yes — works on tablets and phones |
| **Background images** | Yes — any URL or relative path |
| **External API** | No |
| **Offline capable** | After first load (assets cached) |
| **License** | CC0-1.0 |
| **Maintained** | Stable (initial version, 2 years old) |
| **Version-stable import** | Yes (`0.0.1` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/CollaborativeDrawing" label="View on GitHub" >}}

---

## Related Templates

- [**Chat-Simulation**](https://github.com/LiaTemplates/Chat-Simulation) — simulate chat conversations as a learning scenario; pairs well with collaborative annotation tasks
- [**Speech-Recognition-Quiz**](/blog/speech-recognition-quiz-in-liascript) — activate students via spoken input; another classroom-first interaction template
- [**Random**](https://github.com/LiaTemplates/Random) — randomize quiz questions across participants to complement collaborative exercises
- [**SpreadSheet**](https://github.com/LiaTemplates/SpreadSheet) — shared spreadsheet-style data entry for group data-collection tasks
