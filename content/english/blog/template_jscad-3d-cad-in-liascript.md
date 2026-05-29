---
title: "JSCAD for LiaScript: Parametric 3D CAD Modeling in the Browser"
slug: "jscad-3d-cad-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/jscad"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Engineering
    - TVET
    - No Server

liascript: true

description: "Use the JSCAD template to create and display parametric 3D CAD models in your LiaScript courses — powered by JSCAD.app, with a fullscreen interactive 3D viewer."
---

Parametric 3D modeling is a core skill in mechanical engineering, product design, and TVET manufacturing programs.
Teaching it usually requires CAD software installations, license management, and significant setup time.

The [JSCAD template](https://github.com/LiaTemplates/jscad) brings [JSCAD](https://jscad.app) — a JavaScript-based parametric 3D modeling library — to LiaScript.
Students write JavaScript code that defines 3D geometry using the JSCAD API; the template compresses it and renders it in a fullscreen 3D viewer embedded in the course.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/jscad/master/README.md
-->
```

Two macros: `@JSCAD` in the fence opener for a static full-view model, and `@JSCAD.eval` for an editable version.

---

## Macro 1: `@JSCAD` — Render a 3D Model

Place `@JSCAD` in the header of a JavaScript code block.
The model is rendered in a fullscreen 3D viewer with a fullscreen button.
The viewer supports mouse rotation, zoom, and pan.

Every JSCAD model requires the same structure:
1. Import the primitives or operations you need
2. Define a `main()` function that returns the geometry
3. Export it with `module.exports = { main }`

```` markdown
```javascript @JSCAD
const { cube, sphere, cylinder } = require('@jscad/modeling').primitives
const { union, subtract } = require('@jscad/modeling').booleans
const { translate } = require('@jscad/modeling').transforms

const main = () => {
  const box = cube({ size: 30 })
  const hole = cylinder({ radius: 10, height: 40 })
  return subtract(box, hole)
}

module.exports = { main }
```
````

---

## Macro 2: `@JSCAD.eval` — Editable Model

`@JSCAD.eval` is attached at the end of a JavaScript code block.
The block is visible and editable; clicking run re-renders the model.
The 3D viewer is smaller (inline height) to fit next to the code.

```` markdown
```javascript
const { cube } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const main = () => {
  return cube()
}

module.exports = { main }
```
@JSCAD.eval
````

---

## JSCAD API Overview

JSCAD models are built by composing primitives and applying transformations and boolean operations:

### Primitives (`@jscad/modeling/primitives`)

| Function | Description |
|---|---|
| `cube({ size })` | Cube with given side length |
| `cuboid({ size: [x, y, z] })` | Box with different dimensions |
| `sphere({ radius, segments })` | Sphere |
| `cylinder({ radius, height })` | Cylinder |
| `torus({ innerRadius, outerRadius })` | Torus |
| `circle({ radius })` | 2D circle (for extrusion) |
| `rectangle({ size: [w, h] })` | 2D rectangle |
| `polygon({ points })` | 2D polygon from point array |
| `star({ vertices, outerRadius })` | 2D star |

### Boolean Operations (`@jscad/modeling/booleans`)

| Function | Description |
|---|---|
| `union(a, b)` | Combine two solids |
| `subtract(a, b)` | Subtract b from a |
| `intersect(a, b)` | Keep only the overlap |

### Transforms (`@jscad/modeling/transforms`)

| Function | Description |
|---|---|
| `translate([x, y, z], obj)` | Move object |
| `rotate([rx, ry, rz], obj)` | Rotate by angles (radians) |
| `scale([sx, sy, sz], obj)` | Scale object |

### Extrusions (`@jscad/modeling/extrusions`)

| Function | Description |
|---|---|
| `extrudeLinear({ height }, shape)` | Linear extrusion of a 2D shape |
| `extrudeRotate({ segments }, shape)` | Lathe extrusion around Z axis |

---

## Example: Threaded-Hole Part

```` markdown
```javascript @JSCAD
const jscad = require('@jscad/modeling')
const { cuboid, cylinder, cylinderElliptic } = jscad.primitives
const { subtract, union } = jscad.booleans
const { translate } = jscad.transforms

const main = () => {
  // Base block
  const base = cuboid({ size: [60, 40, 10] })

  // Four mounting holes
  const hole = cylinder({ radius: 3, height: 12 })
  const holes = [
    translate([-22,  14, 0], hole),
    translate([ 22,  14, 0], hole),
    translate([-22, -14, 0], hole),
    translate([ 22, -14, 0], hole),
  ]

  // Central boss
  const boss = cylinder({ radius: 10, height: 20 })
  const bossHole = cylinder({ radius: 6, height: 22 })
  const bossWithHole = subtract(boss, bossHole)

  return subtract(
    union(base, bossWithHole),
    ...holes
  )
}

module.exports = { main }
```
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/jscad/master/README.md" >}}

---

## Use Cases

**Mechanical engineering courses** — Teach part design concepts — extrusion, boolean operations, parametric dimensions — with live 3D models.
Students modify a parameter (e.g., wall thickness) and see the updated part immediately.

**TVET manufacturing training** — Embed component drawings as 3D models in training materials.
Students rotate and inspect the part from any angle, understanding spatial relationships before working with physical material.

**Product design** — Sketch 3D concepts in code.
The parametric approach forces explicit design intent — every dimension is a variable, every constraint is code.

**3D printing preparation** — JSCAD models can be exported as STL from jscad.app.
Teach students to design printable parts directly in the course.

**Computer graphics education** — The JSCAD pipeline (primitive → transform → boolean → render) mirrors graphics pipeline concepts from OpenGL and game engines.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — via jscad.app iframe |
| **Server required** | No (local code); jscad.app loads the viewer |
| **3D interaction** | Yes — rotate, zoom, pan |
| **Editable version** | Yes — `@JSCAD.eval` |
| **Export** | STL available in the jscad.app viewer |
| **Based on** | JSCAD / jscad.app by Davor Hrg |
| **JSCAD version** | @jscad/modeling |
| **License** | MIT |
| **Maintained** | Stable (version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/jscad/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/jscad/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/jscad" label="View on GitHub" >}}

---

## Related Templates

- [**VTK**](/blog/vtk-3d-visualization-in-liascript) — 3D scientific visualization with VTK.js and WebGL
- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — simulate Arduino hardware in the browser
- [**p5js**](/blog/p5js-creative-coding-in-liascript) — 2D canvas-based creative coding
- [**mec2**](/blog/mec2-physics-simulation-in-liascript) — 2D mechanism and physics simulation
