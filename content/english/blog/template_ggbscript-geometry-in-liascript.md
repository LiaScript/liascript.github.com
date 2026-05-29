---
title: "GGBScript for LiaScript: Interactive Geometry Constructions in the Browser"
slug: "ggbscript-geometry-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/GGBScript"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Mathematics
    - Visualization
    - STEM

liascript: true

description: "Use the GGBScript template to create interactive GeoGebra-style geometry constructions directly in your LiaScript courses — with a JavaScript API and support for LiaScript input sliders."
---

Geometry education benefits enormously from interactive visualizations.
Students who can drag a point, observe how angles change, or animate a transformation understand geometry differently than those who only read about it.

The [GGBScript template](https://github.com/LiaTemplates/GGBScript) provides a JavaScript-based geometry construction API inspired by GeoGebra.
Code blocks with the `@GGBScript` macro render as interactive canvas diagrams — and they integrate with LiaScript's `@input` scripting to create fully dynamic, animated visualizations controlled by sliders.

> GGBScript is an experimental implementation developed with the assistance of ChatGPT. It covers the most common geometry constructions but is not yet a complete GeoGebra replacement.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->
```

One macro: `@GGBScript` used in the fence opener (not at the end of the block).

---

## `@GGBScript` — Geometry Construction Blocks

Place `@GGBScript` in the header line of a JavaScript code block.
The code runs and renders as an interactive geometry diagram.
Double-click on the diagram to edit the code and see changes immediately.

```` markdown
```js @GGBScript
Titel("Dreieck und Mittelpunkt");

const A = Punkt(1, 1, "A");
const B = Punkt(5, 1, "B");
const C = Punkt(3, 4, "C");

const dreieck = Polygon(A, B, C);
Farbe(dreieck, "lightblue");

Mittelpunkt(A, B, C);
```
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->

# GGBScript Demo

```js @GGBScript
Titel("Kreis und Sehne");

// Points on a circle
const M = Punkt(3, 3, "M");
const K = Kreis(M, 2, "K");

const A = Punkt(1.3, 3.9, "A");
const B = Punkt(4.7, 4.3, "B");
const C = Punkt(4.5, 1.5, "C");

// Triangle inscribed in circle
const dreieck = Polygon(A, B, C);
Farbe(dreieck, "#ddeeff");

// Midpoints of sides
const MAB = Mittelpunkt(A, B);
const MBC = Mittelpunkt(B, C);
const MAC = Mittelpunkt(A, C);
```
{{< /liascript >}}

---

## Available Construction Primitives

GGBScript uses a German-language API that mirrors GeoGebra's command vocabulary:

### Points and Lines

| Function | Description |
|---|---|
| `Punkt(x, y, "name")` | Create a named point |
| `Gerade(A, B, "name")` | Line through two points |
| `Strecke(A, B, "name")` | Line segment between two points |
| `Vektor(A, B, "name")` | Vector from A to B |
| `Lot(C, G, "name")` | Perpendicular from point to line |
| `Parallele(C, G, "name")` | Line through point parallel to line |

### Shapes

| Function | Description |
|---|---|
| `Kreis(M, r, "name")` | Circle with center and radius |
| `Kreis(A, B, C)` | Circle through three points |
| `Ellipse("M", a, b)` | Ellipse with semi-axes a and b |
| `Vieleck(A, B, C, ...)` | Polygon through named points |
| `Polygon(A, B, C, ...)` | Same as Vieleck |

### Measurements and Derived Objects

| Function | Description |
|---|---|
| `Mittelpunkt(A, B)` | Midpoint of two points |
| `Schnittpunkt(g1, g2)` | Intersection of two objects |
| `Winkel(A, B, C)` | Angle at vertex B |
| `Abstand(obj1, obj2)` | Distance between objects |

### Display

| Function | Description |
|---|---|
| `Titel("text")` | Set diagram title |
| `Farbe(obj, "color")` | Set object color |
| `UserAxisLimits(xMin, xMax, yMin, yMax)` | Set axis limits |
| `Diagramm(false)` | Hide the coordinate axes |

---

## Interactive Examples with Sliders

GGBScript integrates with LiaScript's `@input` scripting system.
Sliders defined with `<script input="range" ...>` update diagram parameters in real time:

```` markdown
Rotation:
<script input="range" min="0" max="360" value="0" output="rotation">
@input
</script>°

```js @GGBScript
const A = Punkt(2, 1, "A");
const B = Punkt(5, 1, "B");
const C = Punkt(3, 4, "C");

const P = Polygon(A, B, C);
Farbe(P, "red");

const M = Mittelpunkt(P);
const P2 = Rotation(P, M, @input(`rotation`));
Farbe(P2, "blue");
```
````

The polygon rotates live as the slider moves — no page reload, no server interaction.

---

## Transformations

| Function | Description |
|---|---|
| `Verschiebung(obj, dx, dy, "name")` | Translate object by (dx, dy) |
| `Rotation(obj, M, angle)` | Rotate object around center M by angle in degrees |

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md" >}}

---

## Use Cases

**Euclidean geometry** — Construct triangles, circles, perpendicular bisectors, and inscribed polygons step by step in the course text.
Students can double-click to modify constructions.

**Transformation geometry** — Animate rotations, reflections, and translations with input sliders.
Students drag the rotation angle and see the transformed shape update instantly.

**Introductory coordinate geometry** — Plot points, lines, and distances on a coordinate plane.
Teach the distance formula, midpoint theorem, and circle equations visually.

**STEM courses** — Illustrate geometric principles in physics, engineering, and optics — angles of incidence, vector components, gear ratios.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — JavaScript canvas renderer |
| **Server required** | No |
| **API language** | German (GeoGebra-style) |
| **Slider integration** | Yes — via `@input` |
| **Double-click edit** | Yes — live code edit in diagram |
| **Status** | Experimental (community-developed with ChatGPT) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/GGBScript" label="View on GitHub" >}}

---

## Related Templates

- [**JSXGraph**](/blog/jsxgraph-interactive-math-in-liascript) — mature, feature-rich interactive math and geometry library
- [**Algebrite**](/blog/algebrite-cas-in-liascript) — symbolic computation (CAS) in the browser
- [**TikzJax**](/blog/tikzjax-latex-diagrams-in-liascript) — static but precise TikZ geometry diagrams from LaTeX code
- [**p5js**](/blog/p5js-creative-coding-in-liascript) — canvas-based creative coding for geometric animations
