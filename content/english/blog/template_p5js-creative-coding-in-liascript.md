---
title: "p5js for LiaScript: Creative Coding and Generative Graphics in the Browser"
slug: "p5js-creative-coding-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://p5js.org/assets/img/p5js.svg"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Visualization
    - Programming
    - STEM

description: "Use the p5js template to create interactive canvas sketches and generative graphics directly in your LiaScript courses — with multi-file project support and a live terminal."
---

p5.js brings the Processing creative coding environment to the web.
It is built for artists, designers, educators, and beginners who want to draw, animate, and interact with graphics using JavaScript.

The [p5js LiaScript template](https://github.com/LiaTemplates/p5js) makes p5.js sketches executable directly inside course pages.
Students write code, click run, and see their canvas immediately — with an interactive terminal for live exploration and a stop button to halt animations.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/p5js/0.0.2/README.md
-->
```

Two macros: `@P5.eval` for single sketches and `@P5.project` for multi-file projects.

> **Important:** In this template, p5.js functions and properties are accessed via a `p5.` prefix — for example, `p5.setup`, `p5.draw`, `p5.createCanvas()`. This is different from standalone p5.js where these are global.

---

## Macro 1: `@P5.eval` — Execute a p5.js Sketch

Attach `@P5.eval` to a JavaScript code block.
The sketch is rendered on a canvas below the block.
An interactive terminal opens so students can type p5.js expressions directly (e.g., `p5.background('red')`).

```` markdown
```js
p5.setup = function () {
  p5.createCanvas(400, 300);
};

p5.draw = function () {
  p5.background(220);
  p5.fill(66, 133, 244);
  p5.noStroke();
  p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
};
```
@P5.eval
````

Click the stop button (■) to halt the animation loop.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/p5js/0.0.2/README.md
-->

# p5js Demo – Interaktive Grafik

```js
p5.setup = function () {
  p5.createCanvas(400, 300);
  p5.background(30);
};

p5.draw = function () {
  // Trail effect
  p5.fill(30, 30, 30, 20);
  p5.rect(0, 0, p5.width, p5.height);

  // Moving circles
  let x = p5.width / 2 + p5.sin(p5.frameCount * 0.05) * 120;
  let y = p5.height / 2 + p5.cos(p5.frameCount * 0.07) * 80;

  p5.noStroke();
  p5.fill(100, 180, 255, 200);
  p5.ellipse(x, y, 30, 30);

  p5.fill(255, 120, 100, 200);
  p5.ellipse(p5.width - x, p5.height - y, 20, 20);
};
```
@P5.eval
{{< /liascript >}}

---

## Macro 2: `@P5.project` — Multi-File Projects

`@P5.project` supports up to 10 files.
Files prefixed with `+` are shown to the student; files prefixed with `-` are included but hidden.

```` markdown
```js    +sketch.js
// Main sketch — visible to students
p5.setup = function () {
  p5.createCanvas(400, 300);
};

p5.draw = function () {
  p5.background(255);
  drawShapes();
};
```
```js -helpers.js
// Helper file — hidden from students
function drawShapes() {
  p5.fill(66, 133, 244);
  p5.noStroke();
  p5.ellipse(200, 150, 100, 100);

  p5.fill(234, 67, 53);
  p5.rect(100, 100, 60, 60);
}
```
@P5.project
````

This structure is ideal for exercises where you provide helper functions in hidden files and students complete the visible sketch.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/p5js/0.0.2/README.md" >}}

---

## The `p5.` Prefix Convention

Because LiaScript courses run in a shared browser environment, p5.js is scoped to avoid conflicts with other libraries.
The key difference from standard p5.js:

| Standard p5.js | LiaScript p5js template |
|---|---|
| `function setup() { ... }` | `p5.setup = function () { ... }` |
| `createCanvas(400, 300)` | `p5.createCanvas(400, 300)` |
| `background(220)` | `p5.background(220)` |
| `mouseX`, `mouseY` | `p5.mouseX`, `p5.mouseY` |
| `frameCount` | `p5.frameCount` |
| `mouseIsPressed` | `p5.mouseIsPressed` |

Everything else — `fill()`, `stroke()`, `ellipse()`, `rect()`, `text()`, `noise()`, `sin()`, `cos()` — uses the same `p5.` prefix.

---

## Use Cases

**Visual algorithms** — Illustrate sorting algorithms, graph traversal, and pathfinding with animated visualizations.
Students see data structures moving, not just code running.

**Generative art and design** — Create Perlin noise terrains, fractal trees, and particle systems.
p5.js is widely used in design schools and creative coding courses.

**Game prototyping** — Build simple games (Pong, Snake, Breakout) as interactive exercises.
The sketch/draw loop maps directly onto a game loop.

**Data visualization** — Draw charts, graphs, and data-driven animations.
p5.js makes it simple to map data values to canvas coordinates.

**Physics simulations** — Model simple physical systems — springs, gravity, Brownian motion — as animated sketches.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **p5.js version** | 1.2.0 (from cdnjs) |
| **Interactive terminal** | Yes — after sketch runs |
| **Stop button** | Yes — halts `draw()` loop |
| **Multi-file support** | Yes — `@P5.project` (up to 10 files) |
| **p5.js reference** | [p5js.org/reference](https://p5js.org/reference/) |
| **License** | MIT |
| **Maintained** | Stable (version 0.0.2) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/p5js/0.0.2/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/p5js/0.0.2/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/p5js" label="View on GitHub" >}}

---

## Related Templates

- [**TinyTurtle**](/blog/tiny-turtle-graphics-in-liascript) — introductory turtle graphics for beginners
- [**WebDev**](/blog/webdev-html-css-js-in-liascript) — HTML, CSS, and JavaScript with live rendering
- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — simulate Arduino hardware in the browser
- [**JSXGraph**](/blog/jsxgraph-interactive-math-in-liascript) — interactive mathematical graphics and geometry
