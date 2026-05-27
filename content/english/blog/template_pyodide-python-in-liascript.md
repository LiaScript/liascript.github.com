---
title: "Pyodide for LiaScript: Run Python Directly in Your Course"
slug: "pyodide-python-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/logo.jpg"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Code
    - Programming
    - Python
    - Interactive
    - Data Science
    - No Server

description: "Use the Pyodide template to run Python code directly inside LiaScript courses — no server, no setup. Just import and teach."
---

Python is the most widely taught programming language in the world.
With the [Pyodide template](https://github.com/LiaTemplates/Pyodide), you can bring it directly into your LiaScript course — executable, editable, and fully browser-based.

No server, no Jupyter notebook to maintain, no student setup required.
Just import the template, write Python code blocks, and your course runs Python live in the browser via [WebAssembly](https://webassembly.org/).

---

## What is Pyodide?

[Pyodide](https://pyodide.org) is a full port of CPython to WebAssembly.
It runs a complete Python interpreter inside the browser — no backend, no connection to a remote Python server.

Scientific libraries like `numpy`, `matplotlib`, `scipy`, and `pandas` are supported and load automatically on first use.
The first execution of a new library takes a few seconds while it downloads; afterwards the browser caches it.

The LiaScript Pyodide template wraps this into two simple macros that work directly with LiaScript code blocks.

---

## Quick Start

Add this line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md
-->
```

That's it. Both macros are now available in your document.

---

## Editable Code: `@Pyodide.eval`

The primary macro turns any Python code block into a live, editable Python interpreter.
Learners can modify the code, run it, and see the output immediately — without leaving the course page.

```` markdown
``` python
import sys

for i in range(5):
    print("Hello", "World #" + str(i))

sys.version
```
@Pyodide.eval
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md
-->

# Pyodide Demo

``` python
import sys

for i in range(5):
    print("Hello", "World #" + str(i))

sys.version
```
@Pyodide.eval
{{< /liascript >}}

---

## Hidden Execution: `@Pyodide.exec`

`@Pyodide.exec` runs Python code without showing the editor to the learner.
Only the output is visible.

This is useful for pre-loading state, computing results in the background, or showing live output without distracting boilerplate:

```` markdown
@Pyodide.exec(`import sys
result = [x**2 for x in range(1, 6)]
print("Squares:", result)
print("Python:", sys.version)`)
````

---

## Scientific Libraries: numpy and matplotlib

Pyodide automatically downloads any missing package when first referenced.
Standard scientific libraries work out of the box:

```` markdown
``` python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 200)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Sine Wave")
ax.set_xlabel("x")
ax.set_ylabel("sin(x)")

plt.show()
```
@Pyodide.eval
````

> **Note:** Use `plt.show()` as the last line — the template intercepts this call and renders the figure as an inline image in the course.

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md
-->

# Pyodide – matplotlib Demo

``` python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 200)
y = np.sin(x)

fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Sine Wave")
ax.set_xlabel("x")
ax.set_ylabel("sin(x)")

plt.show()
```
@Pyodide.eval
{{< /liascript >}}

---

## Full Template Demo

The full Pyodide README is itself a self-documenting LiaScript course — explore all features and examples live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md" >}}

---

## Use Cases

**Introductory programming courses** — Run Python from the very first lesson.
No environment to install, no "it works on my machine" problems.
Students open the course URL and start coding immediately.

**Data science education** — `numpy`, `pandas`, `matplotlib`, and `scipy` are all available.
Students can run data analysis exercises, plot results, and explore datasets — entirely in the browser.

**STEM and physics courses** — Combine Python code with LiaScript's interactive elements.
Use sliders, surveys, and quiz blocks alongside live Python simulations.

**Assessment and exercises** — Use `@Pyodide.exec` for hidden setup code, then present editable problems for learners to complete and run themselves.

**OER and accessibility** — Because Python runs in the browser and course sources are plain Markdown, your material is version-controllable, forkable, and platform-independent.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebAssembly (WASM), no backend |
| **Python version** | CPython via Pyodide 0.29 |
| **Scientific libraries** | numpy, matplotlib, scipy, pandas — auto-downloaded |
| **External dependency** | Pyodide runtime loaded from CDN on first use |
| **Offline capable** | After first load (browser cache) |
| **Interactive editing** | Yes, with `@Pyodide.eval` |
| **stdin support** | Yes — via browser `prompt()` |
| **License** | MIT |
| **Maintained** | Yes — last update April 2026 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Pyodide" label="View on GitHub" >}}

---

## Related Templates

- [**CodeRunner**](https://github.com/LiaScript/CodeRunner) — server-side execution for 20+ languages including Python, Java, C, and Ruby
- [**MicroBit-Simulator**](https://github.com/LiaTemplates/MicroBit-Simulator) — MicroPython in the browser for BBC micro:bit simulations
- [**JSCPP**](https://github.com/LiaTemplates/JSCPP) — C++ interpreter running entirely in the browser, no server needed
- [**SQLite**](https://github.com/LiaTemplates/SQLite) — SQL databases and queries directly in the browser
