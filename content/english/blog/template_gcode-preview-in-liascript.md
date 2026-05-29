---
title: "gcode-preview for LiaScript: Visualize G-Code for 3D Printing and CNC in Open Courses"
slug: "gcode-preview-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/example/eiffel-tower.png"
categories:
    - Template
    - Case Study
tags:
    - Templates
    - Simulation
    - Engineering
    - TVET
    - Live Coding
    - STEM
    - No Server

liascript: true

description: "Use the gcode-preview template to embed interactive G-Code visualizations directly in LiaScript courses — ideal for 3D printing, CNC machining, and technical education."
---

G-Code is the language of digital fabrication.
Every 3D printer, CNC milling machine, laser cutter, and lathe is controlled by sequences of G-Code instructions — yet most learners never get to see what those instructions actually describe spatially.

The [gcode-preview template](https://github.com/LiaTemplates/gcode-preview) changes that.
It integrates the [gcode-preview](https://github.com/xyz-tools/gcode-preview) npm package directly into LiaScript courses, so learners can visualize G-Code paths, layer by layer, in the browser — with no server, no software to install, and no file uploads.

---

## What is G-Code?

[G-Code](https://en.wikipedia.org/wiki/G-code) (also called RS-274) is the dominant programming language for numerically controlled machine tools.
A G-Code program is a sequence of commands that describe how a tool should move through space: which coordinates to reach, at what speed, whether to extrude material or only travel, and how to handle layers.

A minimal example:

``` text
G0 X0 Y0 Z0.2    ; rapid move to start position
G1 X42 Y42 E10   ; extrude while moving to (42,42)
G0 X100 Y100 Z20.2
G1 X42 Y42 E10
```

In 3D printing education, CNC training, and maker contexts, understanding the connection between the G-Code text and the resulting physical path is a core competency — and exactly what this template makes visible and interactive.

---

## Quick Start

Add a single import line to your LiaScript course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md
-->
```

All macros are now available in your document.

---

## Visualizing G-Code: `@GCODE.preview`

The simplest macro adds a 3D viewer directly below a code block.
Add `@GCODE.preview` to the opening fence of any `gcode` block:

```` markdown
``` gcode @GCODE.preview
G0 X0 Y0 Z0.2
G1 X42 Y42 E10
G0 X100 Y100 Z20.2
G1 X42 Y42 E10
```
````

The viewer renders the toolpath as a 3D scene — extrusion moves in one color, travel moves in another.
You can rotate and zoom with the mouse.

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md
-->

# G-Code Preview Demo

``` gcode @GCODE.preview
G0 X0 Y0 Z0.2
G1 X42 Y0 E5
G1 X42 Y42 E5
G1 X0 Y42 E5
G1 X0 Y0 E5
G0 X5 Y5 Z0.4
G1 X37 Y5 E5
G1 X37 Y37 E5
G1 X5 Y37 E5
G1 X5 Y5 E5
G0 X10 Y10 Z0.6
G1 X32 Y10 E5
G1 X32 Y32 E5
G1 X10 Y32 E5
G1 X10 Y10 E5
```
{{< /liascript >}}

---

## Customizing the Viewer: `@GCODE.previewWithParams`

For full control over the visualization, use `@GCODE.previewWithParams`.
You can set colors, line widths, render modes, and more:

```` markdown
``` gcode @GCODE.previewWithParams(style="width: 100%; height: 300px;" backgroundColor="#1a1a2e" renderTravel="true" renderTubes="true" extrusionColor="#e94560" travelColor="#0f3460" lineWidth="3")
G0 X0 Y0 Z0.2
G1 X42 Y42 E10
G0 X100 Y100 Z20.2
G1 X42 Y42 E10
```
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md
-->

# G-Code Preview — Custom Style

``` gcode @GCODE.previewWithParams(style="width: 100%; height: 300px;" backgroundColor="#1a1a2e" renderTravel="true" extrusionColor="#e94560" travelColor="#16213e" lineWidth="3" renderTubes="true")
G0 X0 Y0 Z0.2
G1 X42 Y0 E5
G1 X42 Y42 E5
G1 X0 Y42 E5
G1 X0 Y0 E5
G0 X5 Y5 Z0.4
G1 X37 Y5 E5
G1 X37 Y37 E5
G1 X5 Y37 E5
G1 X5 Y5 E5
G0 X10 Y10 Z0.6
G1 X32 Y10 E5
G1 X32 Y32 E5
G1 X10 Y32 E5
G1 X10 Y10 E5
```
{{< /liascript >}}

---

## Live Editing: `@GCODE.eval` and `@GCODE.evalWithParams`

The `@GCODE.eval` and `@GCODE.evalWithParams` macros go at the **end** of the code block (not in the fence opener).
Learners can edit the G-Code, run it, and immediately see the result — the output panel is resizable.

```` markdown
``` gcode
G0 X0 Y0 Z0.2
G1 X42 Y42 E10
```
@GCODE.evalWithParams(extrusionColor="green" backgroundColor="#222" style="width: 100%;" animate="false")
````

This is particularly powerful in a teaching context: students modify a single coordinate, re-run, and observe exactly how the toolpath changes — a tight feedback loop that static diagrams cannot provide.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md
-->

# G-Code Live Editor

Modify the G-Code below and press **Run** to see the updated toolpath.

``` gcode
; Simple square spiral
G0 X0 Y0 Z0.2
G1 X50 Y0 E5
G1 X50 Y50 E5
G1 X0 Y50 E5
G1 X0 Y0 E5
G0 X5 Y5 Z0.4
G1 X45 Y5 E4
G1 X45 Y45 E4
G1 X5 Y45 E4
G1 X5 Y5 E4
G0 X10 Y10 Z0.6
G1 X40 Y10 E3
G1 X40 Y40 E3
G1 X10 Y40 E3
G1 X10 Y10 E3
```
@GCODE.evalWithParams(extrusionColor="#00b4d8" backgroundColor="#03045e" style="width: 100%; height: 400px;" animate="true")
{{< /liascript >}}

---

## Loading External G-Code Files: `@GCODE.load`

Real G-Code files from slicers and CAM software can be large — sometimes thousands of lines.
The `@GCODE.load` macros let you link to any `.gcode` file (from your course repository or an absolute URL) without embedding it inline:

``` markdown
@[GCODE.load.preview](./example/eiffel-tower.gcode)

@[GCODE.load.eval](./example/eiffel-tower.gcode)
```

The template repo includes an Eiffel Tower example — a complex multi-layer print that dramatically shows the layered visualization:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md" >}}

---

## Supported Parameters

The viewer accepts a rich set of configuration options, all passable via `@GCODE.previewWithParams` or `@GCODE.evalWithParams`:

| Parameter | Type | Description |
|-----------|------|-------------|
| `backgroundColor` | `string` | Canvas background color (CSS color or hex) |
| `extrusionColor` | `string` | Color for extrusion moves |
| `travelColor` | `string` | Color for travel (non-extrusion) moves |
| `topLayerColor` | `string` | Highlight color for the topmost layer |
| `lastSegmentColor` | `string` | Color for the last printed segment |
| `renderTravel` | `boolean` | Show travel moves (default: false) |
| `renderTubes` | `boolean` | Render paths as 3D tubes |
| `renderExtrusion` | `boolean` | Show extrusion moves |
| `animate` | `boolean` | Animate the toolpath layer by layer |
| `lineWidth` | `number` | Width of rendered lines |
| `lineHeight` | `number` | Height of rendered lines |
| `startLayer` | `number` | First layer to display |
| `endLayer` | `number` | Last layer to display |
| `allowDragNDrop` | `boolean` | Allow dropping a local `.gcode` file onto the viewer |
| `buildVolume` | `{ x, y, z }` | Show build volume bounding box |
| `initialCameraPosition` | `number[]` | Starting camera coordinates |
| `toolColors` | `Record<number, string>` | Per-tool colors for multi-material prints |
| `style` | `string` | CSS style string for the viewer container |

---

## Use Cases

**3D printing courses** — Show students the difference between infill patterns, support structures, and perimeters.
Let them write a simple G-Code shape from scratch and visualize the result before ever touching a printer.

**CNC machining training** — Explain cutting paths, approach moves, and tool changes with interactive visualizations.
The color-coded travel vs. extrusion moves map directly to air moves vs. cutting passes.

**Technical education and TVET** — Many vocational training programs cover CNC or additive manufacturing.
gcode-preview brings the machine behavior into the classroom without requiring physical machines.

**Maker spaces and workshops** — Participants can paste G-Code exported from their slicer directly into an `@GCODE.eval` block and inspect the toolpath before printing.

**CAD/CAM introductions** — Compare hand-written G-Code with slicer output to build intuition for what slicers actually produce.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — no server, no backend |
| **Interactive 3D viewer** | Yes — rotate, zoom, pan |
| **Live editing** | Yes, with `@GCODE.eval` |
| **Load external files** | Yes, via `@GCODE.load` |
| **Drag & drop** | Supported via `allowDragNDrop` parameter |
| **External API** | No |
| **Offline capable** | After first load (assets cached) |
| **License** | Unlicense |
| **Maintained** | Yes |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/gcode-preview/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/gcode-preview" label="View on GitHub" >}}

---

## Related Templates

- [**MicroBit-Simulator**](/blog/microbit-simulator-in-liascript) — simulate BBC micro:bit and MicroPython programs in the browser
- [**AVR8js**](https://github.com/LiaTemplates/AVR8js) — Arduino-compatible AVR microcontroller simulator
- [**JSXGraph**](/blog/jsxgraph-and-liascript-a-perfect-match) — interactive mathematical visualizations and geometry
- [**DigiSim**](https://github.com/LiaTemplates/DigiSim) — digital logic circuit simulator
- [**jscad**](https://github.com/LiaTemplates/jscad) — 3D CAD modeling with JSCAD in the browser
