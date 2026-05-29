---
title: "VTK for LiaScript: 3D Scientific Visualization Powered by VTK.js"
slug: "vtk-3d-visualization-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/VTK"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Visualization
    - WebGL
    - Engineering
    - STEM

liascript: true

description: "Use the VTK template to embed interactive 3D scientific visualizations in your LiaScript courses — powered by VTK.js and WebGL, with editable code blocks and VTI dataset loading."
---

Scientific and engineering visualization often requires three dimensions.
Volume rendering, isosurfaces, 3D mesh views, medical imaging data — these cannot be adequately represented in 2D plots.

The [VTK template](https://github.com/LiaTemplates/VTK) brings [VTK.js](https://kitware.github.io/vtk-js/) to LiaScript.
VTK.js (Visualization Toolkit JavaScript) is a WebGL-based port of the industry-standard Visualization Toolkit by Kitware.
It allows rendering of 3D geometries, volume data, and interactive scientific scenes directly in the browser.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/vtk/master/README.md
-->
```

Four macros cover editable code blocks (`@VTK.eval`), run-only blocks (`@VTK.run`), and dataset loading (`@VTK.load`, `@VTK.loadIframe`).

---

## Macro 1: `@VTK.eval(divId)` — Editable VTK Code

`@VTK.eval(divId)` is attached at the end of a JavaScript code block.
The block is rendered in a 500px-tall 3D canvas, identified by the `divId`.
Students can modify the code and re-run.

The key pattern: use `document.getElementById("divId")` to get the container, then build a VTK scene using the `vtk.*` namespace.

```` markdown
```js
var view = document.getElementById("demo_cone");
var renderer = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance({
    rootContainer: view,
    containerStyle: { height: '100%', overflow: 'hidden' },
    background: [0.1, 0.1, 0.2]
});

var actor  = vtk.Rendering.Core.vtkActor.newInstance();
var mapper = vtk.Rendering.Core.vtkMapper.newInstance();
var source = vtk.Filters.Sources.vtkConeSource.newInstance({ resolution: 60 });

actor.setMapper(mapper);
mapper.setInputConnection(source.getOutputPort());
actor.getProperty().setColor(0.4, 0.7, 1.0);

var r = renderer.getRenderer();
r.addActor(actor);
r.resetCamera();
renderer.getRenderWindow().render();
```
@VTK.eval(demo_cone)
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/vtk/master/README.md
-->

# VTK Demo – 3D-Kegel

```js
var view = document.getElementById("vtk_demo");
var fullScreenRenderer = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance({
    rootContainer: view,
    containerStyle: { height: '100%', overflow: 'hidden' },
    background: [0.1, 0.1, 0.25]
});

var actor  = vtk.Rendering.Core.vtkActor.newInstance();
var mapper = vtk.Rendering.Core.vtkMapper.newInstance();
var cone   = vtk.Filters.Sources.vtkConeSource.newInstance({ resolution: 60, height: 1.5 });

actor.setMapper(mapper);
mapper.setInputConnection(cone.getOutputPort());
actor.getProperty().setColor(0.3, 0.6, 1.0);

var renderer = fullScreenRenderer.getRenderer();
renderer.addActor(actor);
renderer.resetCamera();
fullScreenRenderer.getRenderWindow().render();
```
@VTK.eval(vtk_demo)
{{< /liascript >}}

---

## Macro 2: `@VTK.run(divId)` — Static Rendering

`@VTK.run(divId)` is used in the fence opener.
The code block is not shown to students — only the 3D canvas appears.
Use this for illustrations that students observe rather than modify.

```` markdown
```js @VTK.run(sphere_demo)
var view = document.getElementById("sphere_demo");
var renderer = vtk.Rendering.Misc.vtkFullScreenRenderWindow.newInstance({
    rootContainer: view,
    background: [0.05, 0.05, 0.1]
});

var actor  = vtk.Rendering.Core.vtkActor.newInstance();
var mapper = vtk.Rendering.Core.vtkMapper.newInstance();
var sphere = vtk.Filters.Sources.vtkSphereSource.newInstance({ thetaResolution: 60, phiResolution: 60 });

actor.setMapper(mapper);
mapper.setInputConnection(sphere.getOutputPort());
actor.getProperty().setColor(0.9, 0.5, 0.2);

renderer.getRenderer().addActor(actor);
renderer.getRenderer().resetCamera();
renderer.getRenderWindow().render();
```
````

---

## Macro 3: `@VTK.load(url)` — Load a VTI Dataset

`@VTK.load(url)` loads a VTK Image Data (`.vti`) file and renders it as a volume.
This is the macro for medical imaging, CT scan, and scientific volume data visualization.

```` markdown
@VTK.load(https://data.kitware.com/api/v1/file/58e665158d777f16d095fc2e/download)
````

The volume is rendered with a transfer function (color and opacity mapping) that maps data values to visual properties.

---

## Macro 4: `@VTK.loadIframe(url)` — Embed a VTK Viewer

`@VTK.loadIframe(url)` embeds the Kitware VolumeViewer application in an iframe with a given dataset URL.

```` markdown
@VTK.loadIframe(https://kitware.github.io/vtk-js-datasets/data/vti/head-binary-zlib.vti)
````

---

## Available VTK.js Primitives

VTK.js exposes the full VTK pipeline model via the `vtk.*` namespace:

| Namespace | Examples |
|---|---|
| `vtk.Filters.Sources` | `vtkConeSource`, `vtkSphereSource`, `vtkCylinderSource`, `vtkPlaneSource` |
| `vtk.Rendering.Core` | `vtkActor`, `vtkMapper`, `vtkRenderer`, `vtkCamera` |
| `vtk.Rendering.Misc` | `vtkFullScreenRenderWindow` |
| `vtk.Common.DataModel` | `vtkPiecewiseFunction` |
| `vtk.IO.Core` | `vtkHttpDataSetReader` |

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/vtk/master/README.md" >}}

---

## Use Cases

**Engineering education** — Visualize 3D mechanical parts, stress tensors, and flow fields.
The VTK pipeline model (source → filter → mapper → actor) mirrors how professional engineering visualization tools work.

**Medical and bioscience courses** — Render volumetric CT or MRI data with `@VTK.load`.
Students see 3D anatomical structures and explore transfer functions interactively.

**Computer graphics courses** — Teach rendering pipelines, shading, actor properties, and camera positioning using a real-world 3D visualization API.

**Scientific computing** — Visualize simulation results: temperature fields, pressure distributions, particle trajectories.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebGL via VTK.js |
| **Server required** | No (for geometry); yes (for remote VTI datasets) |
| **3D interaction** | Yes — rotate, zoom, pan |
| **Volume rendering** | Yes — `@VTK.load` |
| **Editable blocks** | Yes — `@VTK.eval` |
| **Based on** | VTK.js by Kitware |
| **VTK.js version** | loaded from unpkg.com |
| **Maintained** | Stable (version 0.0.3) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/vtk/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/vtk/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/VTK" label="View on GitHub" >}}

---

## Related Templates

- [**JSCAD**](/blog/jscad-3d-cad-in-liascript) — parametric 3D CAD modeling with JavaScript
- [**p5js**](/blog/p5js-creative-coding-in-liascript) — 2D canvas-based creative coding
- [**Vega**](/blog/vega-data-visualization-in-liascript) — 2D data charts and statistical visualizations
- [**mec2**](/blog/mec2-physics-simulation-in-liascript) — 2D mechanical linkage and physics simulation
