---
title: "A-Frame for LiaScript: 3D and VR Scenes in Your Course"
slug: "aframe-3d-vr-scenes-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/aframe"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Media
    - WebGL
    - Interactive
    - STEM
    - No Server
liascript: true

description: "Embed interactive 3D scenes and VR environments in LiaScript using the A-Frame template — write HTML A-Frame markup in a code block and render a fully interactive WebGL scene on any page."
---

3D visualization transforms abstract concepts in mathematics, science, and engineering into something students can explore spatially.
The [aframe template](https://github.com/LiaTemplates/aframe) integrates [A-Frame](https://aframe.io/) — Mozilla's WebXR/WebGL framework — into LiaScript.

Write A-Frame HTML in a code block and get an interactive 3D scene (or VR environment with a headset) embedded directly in the course.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/aframe/0.0.6/README.md
-->
```

---

## Macro 1: `@AFRAME.scene` — Render an A-Frame Scene

Place `@AFRAME.scene` in the header of an HTML code block containing A-Frame markup.

```` markdown
```html @AFRAME.scene
<a-scene>
  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```
````

---

## Macro 2: `@AFRAME.sceneWithStyle(style)` — Custom Container Size

Control width, height, or border of the scene container:

```` markdown
```html @AFRAME.sceneWithStyle("height: 400px; width: 100%;")
<a-scene>
  <a-box position="0 1 -3" color="#4CC3D9"></a-box>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```
````

---

## Macro 3: `@[AFRAME.model](url)` — Load a .glb 3D Model

Load an external `.glb` model file as a scene:

``` markdown
@[AFRAME.model](https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models/2.0/Duck/glTF-Binary/Duck.glb)
```

For a custom container style:

``` markdown
@[AFRAME.modelWithStyle("height: 500px;")](https://example.com/model.glb)
```

---

## Macro 4: `@[AFRAME.image360](url)` — 360° Panorama

Load an equirectangular panorama image as a 360° scene:

``` markdown
@[AFRAME.image360](https://example.com/panorama.jpg)
```

---

## A-Frame HTML Reference

| Element | Description |
|---|---|
| `<a-scene>` | Root container; holds all 3D elements |
| `<a-box>` | Rectangular box |
| `<a-sphere>` | Sphere |
| `<a-cylinder>` | Cylinder |
| `<a-plane>` | Flat plane (useful as floor) |
| `<a-sky>` | Skybox / background |
| `<a-entity gltf-model="url:...">` | External glTF/glb model |
| `<a-entity camera>` | Camera (auto-added if omitted) |

### Common Attributes

| Attribute | Description |
|---|---|
| `position="x y z"` | 3D position |
| `rotation="x y z"` | Rotation in degrees |
| `scale="x y z"` | Scale factor |
| `color="#hex"` | Material color |
| `radius="n"` | Sphere/cylinder radius |

---

## Example: Coordinate Axes Visualization

```` markdown
```html @AFRAME.scene
<a-scene>
  <!-- X axis (red) -->
  <a-box position="1 0 0" scale="2 0.05 0.05" color="red"></a-box>
  <!-- Y axis (green) -->
  <a-box position="0 1 0" scale="0.05 2 0.05" color="green"></a-box>
  <!-- Z axis (blue) -->
  <a-box position="0 0 1" scale="0.05 0.05 2" color="blue"></a-box>
  <a-sky color="#222"></a-sky>
</a-scene>
```
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/aframe/0.0.6/README.md" >}}

---

## Use Cases

**3D geometry education** — Visualize polyhedra, coordinate systems, and spatial transformations in interactive 3D.

**Architecture and design courses** — Load `.glb` models of buildings or structures for interactive inspection.

**Virtual lab environments** — Create 3D representations of lab setups with labeled components for pre-lab orientation.

**360° virtual field trips** — Embed panoramic images of locations (geological sites, historical places, biology habitats) for immersive virtual tours.

**VR-ready learning** — Students with VR headsets can enter the scene in full VR directly from the course page.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebGL/WebXR |
| **Server required** | No |
| **VR support** | Yes — with WebXR-compatible headset |
| **3D models** | Yes — `.glb` / glTF via URL |
| **360° panorama** | Yes — equirectangular images |
| **Custom styling** | Yes — `@AFRAME.sceneWithStyle(...)` |
| **Based on** | A-Frame by Mozilla (aframe.io) |
| **License** | MIT |
| **Maintained** | Version 0.0.6 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/aframe/0.0.6/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/aframe/0.0.6/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/aframe" label="View on GitHub" >}}

---

## Related Templates

- [**Pannellum**](/blog/pannellum-360-panorama-in-liascript) — 360° panoramas with hotspot annotations
- [**jscad**](/blog/jscad-3d-cad-in-liascript) — parametric 3D CAD modeling with JSCAD
- [**VTK**](/blog/vtk-3d-visualization-in-liascript) — scientific 3D visualization (meshes, volumes, isosurfaces)
- [**BeforeAndAfter**](/blog/beforeandafter-image-comparison-in-liascript) — image slider for before/after comparisons
