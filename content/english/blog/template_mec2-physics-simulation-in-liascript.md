---
title: "mec2 for LiaScript: 2D Mechanism and Physics Simulation"
slug: "mec2-physics-simulation-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/mec2"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Simulation
    - Physics
    - Engineering
    - STEM
    - No Server
liascript: true

description: "Simulate 2D mechanical linkages, constraint-based mechanisms, and chaos systems in LiaScript using mec2 — define nodes, constraints, and views in JSON and watch them run."
---

Mechanical engineering education benefits enormously from dynamic simulation — but setting up simulation software is a barrier.
The [mec2 template](https://github.com/LiaTemplates/mec2) brings [goessner's mec2](https://goessner.github.io/mec2/) 2D physics and mechanism engine to LiaScript.
Define nodes, constraints, gravity, and visualization views in JSON, and the simulation runs live in the browser.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/mec2/master/README.md
-->
```

---

## Macro 1: `@mec2` — Static Simulation (in fence header)

Place `@mec2` at the start of a JSON code block.
The simulation renders and starts automatically when the slide loads.

```` markdown
```json @mec2
{
  "id": "simple-pendulum",
  "gravity": true,
  "nodes": [
    { "id": "A0", "x": 200, "y": 400, "base": true },
    { "id": "A1", "x": 200, "y": 300, "m": 2 }
  ],
  "constraints": [
    { "id": "c1", "p1": "A0", "p2": "A1", "len": { "type": "const" } }
  ],
  "views": [
    { "show": "pos", "of": "A1", "as": "trace", "id": "v1", "stroke": "rgba(255,0,0,0.5)" }
  ]
}
```
````

Try it live — watch the pendulum swing and leave a red trace:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/mec2/master/README.md
-->

# Simple Pendulum

```json @mec2
{
  "id": "simple-pendulum",
  "gravity": true,
  "nodes": [
    { "id": "A0", "x": 200, "y": 400, "base": true },
    { "id": "A1", "x": 200, "y": 300, "m": 2 }
  ],
  "constraints": [
    { "id": "c1", "p1": "A0", "p2": "A1", "len": { "type": "const" } }
  ],
  "views": [
    { "show": "pos", "of": "A1", "as": "trace", "id": "v1", "stroke": "rgba(255,0,0,0.5)" }
  ]
}
```
{{< /liascript >}}

---

## Macro 2: `@mec2.eval` — Editable Simulation

Attach `@mec2.eval` at the end of a JSON code block to make it editable.
Students can modify masses, positions, and constraints, then click run to see the updated simulation.

```` markdown
```json
{
  "id": "chaos-pendulums",
  "gravity": true,
  "nodes": [
    { "id": "A0", "x": 200, "y": 400, "base": true },
    { "id": "A1", "x": 280, "y": 480, "m": 2 },
    { "id": "A2", "x": 360, "y": 560, "m": 3 },
    { "id": "A3", "x": 440, "y": 640, "m": 4.7 }
  ],
  "constraints": [
    { "id": "a1", "p1": "A0", "p2": "A1", "len": { "type": "const" } },
    { "id": "a2", "p1": "A1", "p2": "A2", "len": { "type": "const" } },
    { "id": "a3", "p1": "A2", "p2": "A3", "len": { "type": "const" } }
  ],
  "views": [
    { "show": "pos", "of": "A3", "as": "trace", "id": "v1", "stroke": "rgba(255,0,0,0.5)" }
  ]
}
```
@mec2.eval
````

---

## mec2 JSON Structure

A mec2 model has four main sections:

| Key | Purpose |
|---|---|
| `"id"` | Unique model identifier |
| `"gravity"` | `true` to enable downward gravity |
| `"nodes"` | Array of point masses |
| `"constraints"` | Array of constraint relations between nodes |
| `"views"` | Optional: tracing, force vectors, velocity arrows |

### Nodes

| Key | Description |
|---|---|
| `"id"` | Node identifier |
| `"x"`, `"y"` | Initial position (pixels, cartesian) |
| `"m"` | Mass (kg); omit for massless/driven |
| `"base": true` | Fixed anchor point |

### Constraints

| Type | Description |
|---|---|
| `"len": {"type": "const"}` | Rigid rod — fixed length |
| `"len": {"type": "drive"}` | Driven length — varies over time |
| `"ori": {"type": "const"}` | Fixed orientation |
| `"ori": {"type": "drive"}` | Driven angle |

### Views

``` json
{
  "show": "pos",
  "of": "A3",
  "as": "trace",
  "id": "v1",
  "stroke": "rgba(255,0,0,0.5)"
}
```

Show options: `pos` (trace), `vel` (velocity), `acc` (acceleration), `force`.

---

## Example: Triple Pendulum (Chaos Demonstration)

The classic chaos demonstration — four pendulums with nearly identical starting positions diverge rapidly:

```` markdown
```json @mec2
{
  "id": "chaos-demo",
  "gravity": true,
  "nodes": [
    { "id": "A0", "x": 200, "y": 400, "base": true },
    { "id": "A1", "x": 280, "y": 480, "m": 2 },
    { "id": "B1", "x": 279, "y": 481, "m": 2 },
    { "id": "A2", "x": 360, "y": 560, "m": 3 },
    { "id": "B2", "x": 359, "y": 561, "m": 3 }
  ],
  "constraints": [
    { "id": "a1", "p1": "A0", "p2": "A1", "len": { "type": "const" } },
    { "id": "a2", "p1": "A1", "p2": "A2", "len": { "type": "const" } },
    { "id": "b1", "p1": "A0", "p2": "B1", "len": { "type": "const" } },
    { "id": "b2", "p1": "B1", "p2": "B2", "len": { "type": "const" } }
  ],
  "views": [
    { "show": "pos", "of": "A2", "as": "trace", "id": "v1", "stroke": "rgba(255,0,0,0.5)" },
    { "show": "pos", "of": "B2", "as": "trace", "id": "v2", "stroke": "rgba(0,255,0,0.5)" }
  ]
}
```
````

Try it live — two nearly identical double pendulums diverge chaotically (modify a starting position and re-run):

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/mec2/master/README.md
-->

# Chaos: Double Pendulums

```json @mec2
{
  "id": "chaos-demo",
  "gravity": true,
  "nodes": [
    { "id": "A0", "x": 200, "y": 400, "base": true },
    { "id": "A1", "x": 280, "y": 480, "m": 2 },
    { "id": "B1", "x": 279, "y": 481, "m": 2 },
    { "id": "A2", "x": 360, "y": 560, "m": 3 },
    { "id": "B2", "x": 359, "y": 561, "m": 3 }
  ],
  "constraints": [
    { "id": "a1", "p1": "A0", "p2": "A1", "len": { "type": "const" } },
    { "id": "a2", "p1": "A1", "p2": "A2", "len": { "type": "const" } },
    { "id": "b1", "p1": "A0", "p2": "B1", "len": { "type": "const" } },
    { "id": "b2", "p1": "B1", "p2": "B2", "len": { "type": "const" } }
  ],
  "views": [
    { "show": "pos", "of": "A2", "as": "trace", "id": "v1", "stroke": "rgba(255,0,0,0.5)" },
    { "show": "pos", "of": "B2", "as": "trace", "id": "v2", "stroke": "rgba(0,255,0,0.5)" }
  ]
}
```
{{< /liascript >}}

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/mec2/master/README.md" >}}

---

## Use Cases

**Mechanical engineering** — Simulate four-bar linkages, slider-cranks, and gear trains as interactive constraint models.

**Physics education** — Demonstrate simple and compound pendulums, chaos theory, and conservation of energy with live traces.

**TVET / machine technology** — Show how drive-constraints model motor-driven mechanisms before students work on real hardware.

**Research demonstrations** — Embed mechanism animations directly in lecture notes without requiring separate simulation software.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebComponent-based |
| **Server required** | No |
| **Editable** | Yes — via `@mec2.eval` |
| **Coordinate system** | Cartesian (y up) |
| **Gravity** | Optional — `"gravity": true` |
| **Views** | Trace, velocity, acceleration, force |
| **Based on** | mec2 by Stefan Gössner |
| **License** | MIT |
| **Maintained** | Version 0.0.1 (stable) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/mec2/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/mec2/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/mec2" label="View on GitHub" >}}

---

## Related Templates

- [**DigiSim**](/blog/digisim-digital-circuits-in-liascript) — interactive digital logic simulation
- [**jscad**](/blog/jscad-3d-cad-in-liascript) — parametric 3D CAD modeling
- [**AVR8js**](/blog/avr8js-arduino-simulator-in-liascript) — AVR/Arduino hardware simulation
- [**gcode-preview**](/blog/gcode-preview-cnc-in-liascript) — G-Code visualization for CNC and 3D printing
