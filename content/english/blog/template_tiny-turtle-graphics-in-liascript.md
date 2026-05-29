---
title: "TinyTurtle for LiaScript: Teach JavaScript with Interactive Turtle Graphics"
slug: "tiny-turtle-graphics-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/tiny-turtle"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Programming
    - Students

liascript: true

description: "Use the TinyTurtle template to introduce JavaScript through interactive turtle graphics in your LiaScript courses — ideal for beginners, with an optional live command terminal."
---

Turtle graphics is one of the most effective ways to introduce programming.
The immediate visual feedback — a turtle drawing lines on screen — connects commands to results in a way that abstract code examples cannot.

The [TinyTurtle template](https://github.com/liaTemplates/tiny-turtle) brings [Atul Varma's TinyTurtle](https://toolness.github.io/tiny-turtle/) library to LiaScript.
It provides a minimal but complete turtle implementation on an HTML5 canvas, with an optional interactive terminal for live command entry.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/tiny-turtle/master/README.md
-->
```

One macro: `@TinyTurtle(width, height)` or `@TinyTurtle(width, height, shell)`.

---

## `@TinyTurtle(width, height)` — Execute Turtle Code

Attach `@TinyTurtle(width, height)` to any JavaScript code block.
A canvas of the specified size is created, and the turtle starts at the center facing up.

```` markdown
```js
// Draw a square
for (let i = 0; i < 4; i++) {
  forward(100);
  right(90);
}
```
@TinyTurtle(400, 300)
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/tiny-turtle/master/README.md
-->

# TinyTurtle Demo – Polygons

```js
// Draw a colorful star
penStyle = 'gold';
penWidth = 3;

for (let i = 0; i < 5; i++) {
  forward(120);
  right(144);
}
```
@TinyTurtle(400, 300)
{{< /liascript >}}

---

## Interactive Shell: `@TinyTurtle(width, height, true)`

Pass `true` as the third argument to enable an interactive terminal below the canvas.
Students can type turtle commands directly and see results in real time.

```` markdown
```js
// Start with a clear canvas and a message
penStyle = 'blue';
penWidth = 2;
// Try: forward(100), right(90), forward(100)
```
@TinyTurtle(400, 300, true)
````

The interactive shell is ideal for exercise sessions.
Give students a canvas and ask them to draw shapes by typing commands, without modifying the course code.

---

## Turtle API

All turtle commands operate on the turtle object in scope:

| Command | Description |
|---|---|
| `forward(n)` / `fd(n)` | Move forward `n` pixels |
| `left(deg)` / `lt(deg)` | Turn left by `deg` degrees |
| `right(deg)` / `rt(deg)` | Turn right by `deg` degrees |
| `stamp()` | Draw the turtle shell as a visual marker |
| `penUp()` | Lift the pen (move without drawing) |
| `penDown()` | Lower the pen (start drawing again) |
| `clear()` | Clear the canvas |

**Properties:**

| Property | Description |
|---|---|
| `penStyle` | CSS color string or gradient for the pen |
| `penWidth` | Line width in pixels |
| `rotation` | Current heading in degrees |
| `position` | `{x, y}` of the turtle |
| `pen` | `'up'` or `'down'` |
| `canvas` | Reference to the underlying HTML5 canvas |

---

## Example: Building Up Complexity

TinyTurtle is well-suited to progressive exercises.
Start with a straight line, build up to shapes, then to patterns using loops:

```` markdown
```js
// Level 1: A line
forward(150);
```
@TinyTurtle(300, 200)

```js
// Level 2: A square using a loop
for (let i = 0; i < 4; i++) {
  forward(100);
  right(90);
}
```
@TinyTurtle(300, 200)

```js
// Level 3: A spiral
let step = 5;
for (let i = 0; i < 40; i++) {
  forward(step);
  right(91);
  step += 3;
}
```
@TinyTurtle(300, 300)
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/tiny-turtle/master/README.md" >}}

---

## Use Cases

**Introductory programming** — Use turtle graphics to teach variables, loops, functions, and conditionals with immediate visual feedback.
Students draw a square, then a hexagon, then a circle — each step introducing a new concept.

**Geometry and mathematics** — Explore angles, polygon properties, and coordinate geometry visually.
Calculating the exterior angle of a regular polygon becomes a turtle exercise.

**Computational thinking** — Turtle tasks are naturally sequenced and decomposable.
Students practice breaking a complex shape into sub-problems (draw one arm, repeat for the star).

**Game-based learning** — Ask students to reproduce a given shape.
The canvas output makes it immediately clear whether the answer is correct.

**JavaScript fundamentals** — TinyTurtle is a JavaScript library, so students learn real JavaScript — loops, variables, function calls — while drawing.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **Canvas** | HTML5 Canvas |
| **Interactive shell** | Optional — `@TinyTurtle(w, h, true)` |
| **Based on** | TinyTurtle by Atul Varma (toolness.github.io) |
| **License** | CC0 1.0 Public Domain |
| **Maintained** | Stable (version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/tiny-turtle/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/tiny-turtle/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/tiny-turtle" label="View on GitHub" >}}

---

## Related Templates

- [**p5js**](/blog/p5js-creative-coding-in-liascript) — more powerful creative coding library for intermediate learners
- [**WebDev**](/blog/webdev-html-css-js-in-liascript) — HTML, CSS, and JavaScript with full browser rendering
- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python for beginners who prefer Python syntax
