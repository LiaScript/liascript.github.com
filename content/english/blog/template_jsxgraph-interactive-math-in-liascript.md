---
title: "JSXGraph for LiaScript: Interactive Math and Geometry in the Browser"
slug: "jsxgraph-interactive-math-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/logo.gif"
categories:
    - Template
    - Feature
tags:
    - Templates
    - Visualization
    - Mathematics
    - Interactive
    - JavaScript
    - STEM

description: "Add interactive function graphs, dynamic geometry, and animated math constructions to LiaScript courses with JSXGraph — browser-only, no server required."
template:
    repo: "https://github.com/LiaTemplates/JSXGraph"
    raw: "https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md"
    demo: "https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md"
    liveeditor: "https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md"
    difficulty: "Intermediate"
    audience:
        - Teachers
        - Developers
    license: "MIT"
---

Mathematics comes alive when learners can move points, drag sliders, and watch functions redraw in real time.
The [JSXGraph template](https://github.com/LiaTemplates/JSXGraph) brings exactly that to LiaScript — interactive geometry, function plots, parametric curves, and 3D visualizations, all running entirely in the browser.

No external service, no plugin, no installation.
Import one line, write JavaScript code blocks, and your course renders fully interactive mathematical diagrams.

---

## What is JSXGraph?

[JSXGraph](https://jsxgraph.org) is a cross-browser library for interactive geometry, function plotting, charting, and data visualization.
It has been used in mathematics education for over a decade and supports an enormous range of constructions: points, lines, circles, polygons, function graphs, tangents, Riemann sums, 3D views, and much more.

The LiaScript JSXGraph template wraps JSXGraph into a custom web component and exposes four macros that cover the most common teaching scenarios.

---

## Quick Start

Add this line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md
-->
```

To pin to a specific version and avoid unexpected changes, use:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/0.0.3/README.md
-->
```

All macros are now available throughout your document.

---

## Rendered Graph: `@JSX.Graph`

The most common macro.
Place `@JSX.Graph` in the opening fence of any JavaScript code block and JSXGraph renders a live, interactive board.
The variable `board` is automatically provided — you do not need to initialise it manually.

```` markdown
``` javascript @JSX.Graph
var f = board.create('functiongraph', [
  function(x) { return Math.sin(x); }
]);
var g = board.create('functiongraph', [
  function(x) { return Math.cos(x); }
], { dash: 2 });
```
````

Try it live — the graph is draggable and zoomable:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md
-->

# Sine and Cosine

``` javascript @JSX.Graph
var f = board.create('functiongraph', [
  function(x) { return Math.sin(x); }
]);
var g = board.create('functiongraph', [
  function(x) { return Math.cos(x); }
], { dash: 2 });
```
{{< /liascript >}}

---

## Quadratic Explorer with Sliders

Sliders let learners manipulate parameters and instantly see the effect — ideal for exploring how coefficients change a parabola:

```` markdown
``` javascript @JSX.Graph
var a = board.create('slider', [[-6,-6],[2,-6],[-5,1,5]], {name:'a'});
var b = board.create('slider', [[-6,-7],[2,-7],[-5,0,5]], {name:'b'});
var c = board.create('slider', [[-6,-8],[2,-8],[-5,0,5]], {name:'c'});

board.create('functiongraph', [
  (x) => a.Value()*x*x + b.Value()*x + c.Value()
]);
```
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md
-->

# Quadratic Function Explorer

``` javascript @JSX.Graph
var a = board.create('slider', [[-6,-6],[2,-6],[-5,1,5]], {name:'a'});
var b = board.create('slider', [[-6,-7],[2,-7],[-5,0,5]], {name:'b'});
var c = board.create('slider', [[-6,-8],[2,-8],[-5,0,5]], {name:'c'});

board.create('functiongraph', [
  (x) => a.Value()*x*x + b.Value()*x + c.Value()
]);
```
{{< /liascript >}}

---

## Custom Parameters: `@JSX.Graph.withParams`

For geometry constructions and diagrams, you often want to control the viewport, hide the axes, or disable navigation.
`@JSX.Graph.withParams` accepts any JSXGraph board options directly in the macro call:

```` markdown
``` js @JSX.Graph.withParams(`axis="false" boundingbox="[-6, 6, 6, -6]" showNavigation="false"`)
var A = board.create('point', [-3, -1], {name:'A'});
var B = board.create('point', [ 3, -1], {name:'B'});
var C = board.create('point', [ 0,  4], {name:'C'});

board.create('triangle', [A, B, C]);
board.create('circumcenter', [A, B, C], {name:'U'});
board.create('circumcircle', [A, B, C], {strokeColor: '#888'});
```
````

Drag the vertices and watch the circumcenter and circumcircle update in real time:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md
-->

# Circumscribed Circle

``` js @JSX.Graph.withParams(`axis="false" boundingbox="[-6, 6, 6, -6]" showNavigation="false"`)
var A = board.create('point', [-3, -1], {name:'A'});
var B = board.create('point', [ 3, -1], {name:'B'});
var C = board.create('point', [ 0,  4], {name:'C'});

board.create('polygon', [A, B, C]);
board.create('circumcenter', [A, B, C], {name:'U'});
board.create('circumcircle', [A, B, C], {strokeColor: '#888'});
```
{{< /liascript >}}

---

## Editable Code: `@JSX.Script`

`@JSX.Script` renders a board but also lets learners reveal and modify the underlying JavaScript by double-clicking the diagram.
This is the macro to use when understanding the code is part of the learning goal.

```` markdown
``` javascript @JSX.Script
board = JXG.JSXGraph.initBoard(jxgbox, {boundingbox: [-5, 5, 5, -5], axis: true});

var n = board.create('slider', [[1,4],[4,4],[1,5,20]], {name:'n', snapWidth:1});
var f = function(x){ return Math.sin(x); };
var plot = board.create('functiongraph', [f]);
var rs = board.create('riemannsum', [
  f, function(){ return n.Value(); }, 'left', -Math.PI, Math.PI
], {fillColor:'#ffff00', fillOpacity:0.4});
```
````

Learners see a working Riemann sum visualisation and can inspect and change the code directly.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md
-->

# Riemann Sum

``` javascript @JSX.Script
board = JXG.JSXGraph.initBoard(jxgbox, {boundingbox: [-5, 5, 5, -5], axis: true});

var n = board.create('slider', [[1,4],[4,4],[1,5,20]], {name:'n', snapWidth:1});
var f = function(x){ return Math.sin(x); };
var plot = board.create('functiongraph', [f]);
var rs = board.create('riemannsum', [
  f, function(){ return n.Value(); }, 'left', -Math.PI, Math.PI
], {fillColor:'#ffff00', fillOpacity:0.4});
```
{{< /liascript >}}

---

## Executable Code: `@JSX.Eval`

`@JSX.Eval` turns a code block into a run button: learners write or modify JSXGraph code and execute it themselves.
Unlike `@JSX.Script`, the code block stays visible and editable before running.
Add `@JSX.Eval` on the line immediately after the closing fence:

```` markdown
``` javascript
board = JXG.JSXGraph.initBoard(jxgbox, {
  boundingbox: [-5, 5, 5, -5], axis: true
});
board.create('functiongraph', [
  function(x) { return Math.cos(x); }
]);
```
@JSX.Eval
````

This is useful for open-ended coding exercises where learners write their own constructions from scratch.

---

## Load from External File: `@[JSX.Load](url)`

For complex constructions maintained in a separate file, use the `@[JSX.Load]` macro with a URL pointing to a plain JavaScript file:

``` markdown
@[JSX.Load](https://example.com/my-construction.js)
```

This keeps the course document clean while reusing sophisticated constructions across multiple courses.

---

## Why JSXGraph in LiaScript?

**For mathematics teachers:** function graphs, sliders, geometric constructions, and calculus visualisations are available without writing HTML or setting up any infrastructure.
The entire interactivity runs in the reader's browser.

**For STEM courses:** JSXGraph supports physics simulations, mechanism animations, and 3D views — a single library covers a large portion of visual needs across disciplines.

**For learners:** the combination of editable code (`@JSX.Script`, `@JSX.Eval`) and live visual feedback creates a direct link between algebraic manipulation and geometric intuition — exactly the kind of active engagement that supports deep understanding.

**For OER:** because everything runs client-side and the course is a plain Markdown file, JSXGraph visualisations travel with the document.
Share a URL and the interactive diagram is included — no server, no hosting for the computation, no account required.

---

## Full Template Demo

The complete JSXGraph template README — including all macro examples, 3D visualisations, and the Riemann sum demo — is embedded here directly from GitHub:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md" >}}

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md" label="Try on LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/JSXGraph/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/JSXGraph" label="View on GitHub" >}}

---

## Technical Facts

| Property | Detail |
|----------|--------|
| Runs in browser | ✅ yes — no server, no backend |
| External dependency | JSXGraph CDN + MathJax CDN (loaded automatically) |
| Offline use | ❌ requires internet for CDN on first load |
| Template version | 0.0.3 (pin for stability) |
| Maintenance status | ✅ actively maintained |
| License | MIT |

**MathJax support is included:** the template loads MathJax 3 automatically, so LaTeX notation like `\\(\\vec{v}\\)` works inside JSXGraph labels and text elements.

---

## Related Templates

{{< preview "jsxgraph-and-liascript-a-perfect-match" >}}

Looking for other visualisation options?

- **[Mermaid](https://github.com/LiaTemplates/mermaid_template)** — flowcharts, sequence diagrams, Gantt charts in a declarative text syntax
- **[Vega](https://github.com/LiaTemplates/Vega)** — data-driven charts and interactive plots with Vega-Lite
- **[GGBScript](https://github.com/LiaTemplates/GGBScript)** — GeoGebra-style algebra and geometry constructions
- **[Algebrite](https://github.com/LiaTemplates/Algebrite)** — symbolic computer algebra (CAS) for exact calculations
