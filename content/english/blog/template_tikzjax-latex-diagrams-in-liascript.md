---
title: "TikzJax for LiaScript: Render TikZ Diagrams Directly in the Browser"
slug: "tikzjax-latex-diagrams-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Tikz-Jax"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Diagrams
    - LaTeX
    - Mathematics
    - STEM

description: "Use the TikzJax template to render TikZ diagrams directly in your LiaScript courses — the full power of LaTeX graphics in the browser, with editable and non-editable variants."
---

TikZ is the gold standard for technical diagrams in academic publishing.
Circuit diagrams, flowcharts, commutative diagrams, geometric constructions, function plots — TikZ handles all of them with precision and flexibility.
Until recently, rendering TikZ required a full LaTeX installation.

The [TikzJax template](https://github.com/LiaTemplates/Tikz-Jax) brings [tikzjax](https://tikzjax.com) to LiaScript.
TikzJax compiles and renders TikZ code directly in the browser using WebAssembly, with no LaTeX installation and no external server.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
-->
```

Four macros cover two rendering modes (full TikZ and `tikzpicture` wrapper) in both static and editable variants.

---

## Macro 1: `@tikz` in Fence Opener — Full TikZ Code

Use `@tikz` in the fence opener when your code includes the `\begin{tikzpicture}...\end{tikzpicture}` environment (or any other TikZ environment).

```` markdown
``` latex @tikz
\begin{tikzpicture}[scale=2]
  \draw[->] (-0.2,0) -- (3.5,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,1.5) node[above] {$f(x)$};

  \draw[color=blue, domain=0:3, samples=100]
    plot (\x, {sin(\x r)}) node[right] {$\sin(x)$};

  \draw[color=red, domain=0:3, samples=100, dashed]
    plot (\x, {cos(\x r)}) node[right] {$\cos(x)$};
\end{tikzpicture}
```
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
-->

# TikzJax Demo

``` latex @tikz
\begin{tikzpicture}[scale=1.5]
  % Coordinate axes
  \draw[->] (-0.5,0) -- (4,0) node[right] {$x$};
  \draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};

  % Sine curve
  \draw[color=blue, thick, domain=0:3.8, samples=100]
    plot (\x, {sin(\x r)}) node[right] {$\sin(x)$};

  % Cosine curve
  \draw[color=red, thick, domain=0:3.8, samples=100, dashed]
    plot (\x, {cos(\x r)}) node[right] {$\cos(x)$};

  % Zero crossings
  \foreach \x in {0,3.14159}
    \filldraw[blue] (\x,0) circle (1.5pt);

  % Labels
  \node[below] at (1.57,0) {$\frac{\pi}{2}$};
  \node[below] at (3.14159,0) {$\pi$};
\end{tikzpicture}
```
{{< /liascript >}}

---

## Macro 2: `@tikz.picture` — Auto-Wrapped in `tikzpicture`

Use `@tikz.picture` when you only want to write the content *inside* `tikzpicture`.
The macro automatically wraps your code in `\begin{tikzpicture}...\end{tikzpicture}`.

```` markdown
``` latex @tikz.picture
\def \n {5}
\def \radius {3cm}
\def \margin {8}

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
```
````

This is convenient for simple diagrams where you don't need package-level options on the `tikzpicture` environment.

---

## Macros 3 and 4: Editable Variants — `.eval`

`@tikz.eval` and `@tikz.picture.eval` are attached at the end of the code block (not in the fence header).
They make the block editable — students can modify the TikZ code and re-render.

```` markdown
``` latex
\begin{tikzpicture}[scale=2]
  \draw[fill=yellow] (0,0) -- (60:.75cm) arc (60:180:.75cm);
  \draw(120:0.4cm) node {$\alpha$};
  \draw[fill=green!30] (0,0) -- (right:.75cm) arc (0:60:.75cm);
  \draw(30:0.5cm) node {$\beta$};
  \draw[thick, red] (-1.5,0) -- (2.5,0);
  \draw[thick, blue, shift={(60:2cm)}] (-1.5,0) -- (2.5,0);
\end{tikzpicture}
```
@tikz.eval
````

The editable variants are ideal for exercises where students modify an existing diagram — changing angles, adding nodes, adjusting styles.

---

## Macro Overview

| Macro | Position | Wraps in `tikzpicture` | Editable |
|---|---|---|---|
| `@tikz` | Fence opener | No | No |
| `@tikz.picture` | Fence opener | Yes | No |
| `@tikz.eval` | End of block | No | Yes |
| `@tikz.picture.eval` | End of block | Yes | Yes |

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md" >}}

---

## Use Cases

**STEM courses with LaTeX heritage** — Many STEM courses already have TikZ diagrams in their LaTeX slides or notes.
TikzJax allows those same diagrams to appear in interactive LiaScript courses without conversion.

**Circuit and flow diagrams** — Teach electronics, algorithms, and process flows with precisely drawn diagrams.
TikZ's node-and-arrow model is ideal for flowcharts, automata, and Petri nets.

**Mathematical geometry** — Draw circles, triangles, angle arcs, and geometric constructions with exact coordinates.
The `\draw` and `\fill` commands give pixel-perfect control.

**Academic diagrams** — Commutative diagrams, category theory arrows, matrices, and complex labeled figures that are otherwise difficult to produce in web-based tools.

**LaTeX-trained educators** — Lecturers who already know TikZ can publish their course diagrams on the web without learning a new tool.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — tikzjax (WebAssembly) |
| **Server required** | No |
| **TikZ packages** | Core TikZ + standard libraries |
| **Output format** | SVG (rendered inline) |
| **Editable version** | Yes — `@tikz.eval`, `@tikz.picture.eval` |
| **Based on** | tikzjax.com |
| **License** | MIT (implied) |
| **Maintained** | Stable (version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Tikz-Jax" label="View on GitHub" >}}

---

## Related Templates

- [**plantUML**](/blog/plantuml-uml-diagrams-in-liascript) — UML diagrams (class, sequence, state) with PlantUML
- [**Mermaid**](/blog/mermaid-diagrams-in-liascript) — flowcharts, sequence diagrams, Gantt charts from plain text
- [**GGBScript**](/blog/ggbscript-geometry-in-liascript) — interactive geometry constructions with a JavaScript API
- [**JSXGraph**](/blog/jsxgraph-interactive-math-in-liascript) — interactive math graphs and geometry
