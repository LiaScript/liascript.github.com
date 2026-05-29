---
title: "KekuleJS for LiaScript: Chemistry Structures and Molecular Visualization"
slug: "kekulejs-chemistry-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/KekuleJS"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Chemistry
    - Visualization
    - STEM
    - No Server
liascript: true

description: "Use the KekuleJS template to render 2D and 3D chemical structure formulas, interactive periodic tables, and molecular files directly in LiaScript — no plugins required."
---

Drawing chemical structures in web-based learning materials traditionally requires image exports or external tools.
The [KekuleJS template](https://github.com/LiaTemplates/KekuleJS) integrates [Kekule.js](https://github.com/partridgejiang/Kekule.js) — a comprehensive cheminformatics library — into LiaScript, enabling 2D and 3D molecular visualization, interactive periodic tables, and CML/MOL file loading directly in the browser.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md
-->
```

---

## Macro 1: `@Kekule.molecule2d` — 2D Structural Formula

Place `@Kekule.molecule2d` in the header of an XML code block containing CML (Chemical Markup Language).
The molecule is rendered as a flat, bond-angle structural formula.

**Note:** Avoid using `@` symbols in your CML code — LiaScript will interpret them as macro calls.

```` markdown
```xml @Kekule.molecule2d
<cml xmlns="http://www.xml-cml.org/schema">
  <molecule>
    <atomArray>
      <atom id="a1" elementType="C" x2="0.4125" y2="0.6348"/>
      <atom id="a2" elementType="C" x2="-0.4125" y2="0.6348"/>
      <atom id="a3" elementType="C" x2="-0.6674" y2="-0.1498"/>
      <atom id="a4" elementType="N" x2="0" y2="-0.6348"/>
      <atom id="a5" elementType="C" x2="0.6674" y2="-0.1498"/>
    </atomArray>
    <bondArray>
      <bond id="b1" order="S" atomRefs2="a1 a2"/>
      <bond id="b2" order="D" atomRefs2="a2 a3"/>
      <bond id="b3" order="S" atomRefs2="a3 a4"/>
      <bond id="b4" order="S" atomRefs2="a4 a5"/>
      <bond id="b5" order="D" atomRefs2="a5 a1"/>
    </bondArray>
  </molecule>
</cml>
```
````

Try it live — see the 2D structural formula of pyridine rendered from CML:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md
-->

# 2D Structure: Pyridine

```xml @Kekule.molecule2d
<cml xmlns="http://www.xml-cml.org/schema">
  <molecule>
    <atomArray>
      <atom id="a1" elementType="C" x2="0.4125" y2="0.6348"/>
      <atom id="a2" elementType="C" x2="-0.4125" y2="0.6348"/>
      <atom id="a3" elementType="C" x2="-0.6674" y2="-0.1498"/>
      <atom id="a4" elementType="N" x2="0" y2="-0.6348"/>
      <atom id="a5" elementType="C" x2="0.6674" y2="-0.1498"/>
    </atomArray>
    <bondArray>
      <bond id="b1" order="S" atomRefs2="a1 a2"/>
      <bond id="b2" order="D" atomRefs2="a2 a3"/>
      <bond id="b3" order="S" atomRefs2="a3 a4"/>
      <bond id="b4" order="S" atomRefs2="a4 a5"/>
      <bond id="b5" order="D" atomRefs2="a5 a1"/>
    </bondArray>
  </molecule>
</cml>
```
{{< /liascript >}}

---

## Macro 2: `@Kekule.molecule3d` — 3D Molecular Viewer

Same CML input, but rendered in an interactive 3D viewer with rotation, zoom, and toolbar.

```` markdown
```xml @Kekule.molecule3d
<cml xmlns="http://www.xml-cml.org/schema">
  <molecule id="caffeine">
    <atomArray>
      <!-- atom definitions with x2/y2 coordinates -->
    </atomArray>
    <bondArray>
      <!-- bond definitions -->
    </bondArray>
  </molecule>
</cml>
```
````

---

## Macro 3: `@Kekule.periodicTable` and `@Kekule.periodicTable(large)`

Inserts an interactive periodic table element — elements are selectable and display symbol, name, and atomic number.

``` markdown
@Kekule.periodicTable

@Kekule.periodicTable(large)
```

Not recommended to place more than one table per page.

Try it live — click any element to see its name and atomic number:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md
-->

# Interactive Periodic Table

@Kekule.periodicTable
{{< /liascript >}}

---

## Macro 4: Load from File — `@[Kekule.load](url)` and `@[Kekule.load3d](url)`

Load a molecule directly from a `.mol` or `.xyz` file URL.

``` markdown
@[Kekule.load](/data/example.mol)

@[Kekule.load3d](/data/caffeine.mol)
```

---

## Macro 5: `@Kekule.eval2d` and `@Kekule.eval3d`

These attach to code block ends to render editable CML content as 2D or 3D molecules.

```` markdown
``` text
<cml> ... </cml>
```
@Kekule.eval2d
````

---

## CML Format Reference

CML (Chemical Markup Language) is XML-based.
The minimal structure requires:

| Element | Purpose |
|---|---|
| `<cml>` | Root element with namespace |
| `<molecule>` | Container for a single molecule |
| `<atomArray>` | List of atoms |
| `<atom id="..." elementType="C" x2="..." y2="...">` | Atom with 2D coordinates |
| `<bondArray>` | List of bonds |
| `<bond id="..." order="S\|D\|T" atomRefs2="a1 a2">` | Bond between two atoms |

Bond orders: `S` = single, `D` = double, `T` = triple.

CML files can be exported from many chemistry tools (MarvinSketch, ChemDraw, Avogadro).

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md" >}}

---

## Use Cases

**Chemistry courses** — Embed structural formulas of organic molecules without images.
Update the CML source and the structure re-renders automatically.

**STEM education** — Show the periodic table as an interactive component for element lookup, replacing static image-based tables.

**Biochemistry and pharmacology** — Display complex biomolecules (amino acids, nucleotides, drugs) in 3D viewer for spatial understanding.

**Laboratory preparation** — Embed target molecules and reactants as interactive 3D models in experiment instructions.

**Secondary chemistry** — Visualize Lewis structures, functional groups, and ring systems in a format students can rotate and explore.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — all rendering is client-side |
| **Server required** | No |
| **2D viewer** | Yes — flat structural formula |
| **3D viewer** | Yes — interactive rotate/zoom/toolbar |
| **File loading** | Yes — `.mol`, CML |
| **Periodic table** | Yes — interactive, mini or large |
| **Based on** | Kekule.js by Partridge Jiang |
| **License** | MIT |
| **Maintained** | Version 0.0.2 (stable) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/KekuleJS/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/KekuleJS" label="View on GitHub" >}}

---

## Related Templates

- [**PeriodicTable**](/blog/periodictable-interactive-chemistry-in-liascript) — standalone interactive periodic table template
- [**ChemfigJS**](/blog/chemfigjs-structural-formulas-in-liascript) — LaTeX-style structural formula drawing (chemfig syntax)
- [**Algebrite**](/blog/algebrite-cas-in-liascript) — symbolic math computation for chemical equilibria
- [**VTK**](/blog/vtk-3d-visualization-in-liascript) — 3D scientific visualization with WebGL
