---
title: "WebDev for LiaScript: Run HTML, CSS, and JavaScript Live in Your Course"
slug: "webdev-html-css-js-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/WebDev"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - JavaScript
    - Computer Science
    - Live Coding

liascript: true

description: "Use the WebDev template to make HTML, CSS, and JavaScript code blocks editable and executable directly inside your LiaScript courses — no external tools, no setup."
---

Teaching front-end web development means students need to experiment.
They need to change a CSS rule and see it take effect, add a button and wire it up, break something and fix it.

The [WebDev template](https://github.com/liaTemplates/WebDev) makes HTML, CSS, and JavaScript code blocks in your LiaScript courses directly executable.
Students edit code, click the run button, and see the result — all without leaving the course.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md
-->
```

Four macros are available: `@WebDev.HTML`, `@WebDev.JS`, `@WebDev.HTML_CSS`, and `@WebDev.HTML_JS`.

---

## Macro 1: `@WebDev.HTML` — Live HTML Preview

Attach `@WebDev.HTML` to a single HTML code block.
The block becomes editable; clicking run renders the HTML inline.

```` markdown
```html
<h2>My First Heading</h2>
<p>This is a <strong>live</strong> HTML block.</p>
<ul>
  <li>Edit me</li>
  <li>Run me</li>
</ul>
```
@WebDev.HTML
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md
-->

# WebDev Demo – HTML

```html
<h2 style="color: #2c3e50;">Hello from HTML!</h2>
<p>Change this text, click <strong>Run</strong>, and see the result.</p>
<table border="1" cellpadding="8">
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Alice</td><td>95</td></tr>
  <tr><td>Bob</td><td>87</td></tr>
  <tr><td>Carol</td><td>92</td></tr>
</table>
```
@WebDev.HTML
{{< /liascript >}}

---

## Macro 2: `@WebDev.JS` — Execute JavaScript

Attach `@WebDev.JS` to a JavaScript code block to evaluate it and print the result.
Console output is shown below the block.

```` markdown
```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(`i=${i}, sum=${sum}`);
}
console.log("Final sum:", sum);
```
@WebDev.JS
````

---

## Macro 3: `@WebDev.HTML_CSS` — HTML + CSS Together

Use two consecutive code blocks — first HTML, then CSS — and attach `@WebDev.HTML_CSS`.
The CSS is scoped and rendered in an iframe so it does not affect the course page.

```` markdown
```html
<div class="card">
  <h2>Styled Card</h2>
  <p>Hover over me!</p>
</div>
```
```css
.card {
  padding: 20px;
  background: #3498db;
  color: white;
  border-radius: 8px;
  display: inline-block;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
  background: #2980b9;
}
```
@WebDev.HTML_CSS
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md
-->

# WebDev Demo – HTML + CSS

```html
<div class="box">
  <h3>CSS Box Model</h3>
  <p class="content">Try changing the padding, border, or background color.</p>
  <button class="btn">Button</button>
</div>
```
```css
.box {
  font-family: sans-serif;
  padding: 24px;
  background: #ecf0f1;
  border: 3px solid #3498db;
  border-radius: 6px;
  max-width: 300px;
}
h3 { color: #2c3e50; margin: 0 0 12px 0; }
.content { color: #555; margin-bottom: 16px; }
.btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover { background: #2980b9; }
```
@WebDev.HTML_CSS
{{< /liascript >}}

---

## Macro 4: `@WebDev.HTML_JS` — HTML + JavaScript Together

Use two consecutive code blocks — HTML first, JavaScript second — and attach `@WebDev.HTML_JS`.
The JavaScript is evaluated after the HTML is rendered, so `document.getElementById()` and DOM manipulation work.

```` markdown
```html
<h3 id="title">Original Title</h3>
<button onclick="changeTitle()">Change Title</button>
<p id="counter">Clicks: 0</p>
```
```js
let count = 0;
function changeTitle() {
  count++;
  document.getElementById('title').textContent = 'Updated ' + count + ' times!';
  document.getElementById('counter').textContent = 'Clicks: ' + count;
}
```
@WebDev.HTML_JS
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md" >}}

---

## Use Cases

**HTML fundamentals** — Make every HTML example in your course runnable.
Students see immediately how `<h1>` vs `<h2>`, `block` vs `inline`, or semantic tags affect the page.

**CSS exercises** — Let students experiment with colors, typography, flexbox, and grid layouts without a code editor.
The HTML+CSS macro keeps both panes visible and synchronized.

**DOM manipulation** — Introduce JavaScript event handling with live, interactive examples.
Students write `document.getElementById()`, click a button, and see their code work.

**Quick prototyping exercises** — Ask students to build a small component — a card, a navigation bar, a form — directly in the course.
No project setup, no file management.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **Macros** | `@WebDev.HTML`, `@WebDev.JS`, `@WebDev.HTML_CSS`, `@WebDev.HTML_JS` |
| **CSS isolation** | Yes — scoped in iframe for HTML+CSS |
| **Console output** | Yes — for JS |
| **License** | MIT (implied) |
| **Maintained** | Stable (version 0.1.0) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/WebDev/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/WebDev" label="View on GitHub" >}}

---

## Related Templates

- [**JSCPP**](/blog/jscpp-cpp-in-liascript) — C++ interpreter in the browser for systems programming courses
- [**p5js**](/blog/p5js-creative-coding-in-liascript) — creative coding and generative graphics with p5.js
- [**TinyTurtle**](/blog/tiny-turtle-graphics-in-liascript) — turtle graphics to teach JavaScript basics
- [**CodeRunner**](/blog/coderunner-multi-language-execution-in-liascript) — server-side execution for Python, Java, C, and 20+ more languages
