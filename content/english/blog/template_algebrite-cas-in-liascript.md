---
title: "Algebrite for LiaScript: A Computer Algebra System in the Browser"
slug: "algebrite-cas-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://live.staticflickr.com/7327/11125348744_2a75b75427_b.jpg"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Mathematics
    - Computer Science
    - No Server

description: "Use the Algebrite template to add symbolic math computation to your LiaScript courses — evaluate CAS expressions, check student answers algebraically, and verify equations directly in the browser."
---

Symbolic computation is hard to teach without tools.
Students write algebraic expressions, simplify them, differentiate, integrate — but verifying their work by hand is slow, and most CAS tools require software installations or paid subscriptions.

The [Algebrite template](https://github.com/LiaTemplates/Algebrite) brings [Algebrite](http://algebrite.org), a lightweight JavaScript Computer Algebra System, directly into LiaScript.
It supports symbolic simplification, differentiation, integration, factoring, and more — entirely in the browser, with no server required.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/master/README.md
-->
```

The core macro is `@Algebrite.eval` for computation and a family of `@Algebrite.check*` macros for quiz integration.

---

## `@Algebrite.eval` — Evaluate CAS Expressions

Attach `@Algebrite.eval` to a Maxima-syntax code block to evaluate it.
The result is shown below the block.

```` markdown
```Maxima
d(sin(x)^2, x)
```
@Algebrite.eval
````

The code block is editable — students can modify the expression and re-evaluate.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Algebrite/master/README.md
-->

# Algebrite Demo

**Symbolic differentiation:**

```Maxima
d(sin(x)^2 + cos(x)^2, x)
```
@Algebrite.eval

**Symbolic integration:**

```Maxima
integral(x^3 - 2*x + 1, x)
```
@Algebrite.eval

**Factoring and simplification:**

```Maxima
factor(x^3 - 1)
```
@Algebrite.eval

**Large arithmetic:**

```Maxima
100!
```
@Algebrite.eval
{{< /liascript >}}

---

## Quiz Integration — `@Algebrite.check`

`@Algebrite.check(expected)` compares the student's input with the expected value using symbolic equality.
Two expressions that are mathematically equivalent (like `x^2-1` and `(x-1)*(x+1)`) are both accepted.

```` markdown
**Simplify $x^2 - 1$ as a product:**

[[x^2-1]]
@Algebrite.check(x^2-1)
````

Because the comparison is symbolic, students can enter `(x-1)*(x+1)`, `-1+x^2`, or `x^2-1` — all are marked correct.

---

## `@Algebrite.check2` — With Tolerance

For numerical answers that might involve rounding, `@Algebrite.check2(lower, upper)` accepts a tolerance range.

```` markdown
**Compute $\frac{1}{3}$ as a decimal (tolerance ±0.01):**

[[1/3]]
@Algebrite.check2(1/3, 0.01)
````

For multiple answers (e.g., a system of equations), use lists:

```` markdown
$x=$ [[ 2/5 ]] $\;\;\wedge\;\; y=$ [[ 5/7 ]]
@Algebrite.check2([ 2/5 ; 5/7 ], [0.01 ; 0.01])
````

---

## `@Algebrite.check_margin` — Range Check

`@Algebrite.check_margin(lower, upper)` verifies that the input falls within a given interval.
Useful for measurement and engineering tasks where a range of answers is correct.

```` markdown
**Estimate the speed in km/s (between 1.4 and 1.6):**

-> [[ 1.5 ]] km/s
@Algebrite.check_margin(1.4, 1.6)
````

---

## `@Algebrite.check_expression` — Equation Equivalence

`@Algebrite.check_expression(solution=0)` checks whether the student's equation is equivalent to the given solution.

```` markdown
**Factor and equate to zero:**

[[x^2 - 1 = (x-1)*(x+1)]]
@Algebrite.check_expression(x^2-1-(x-1)*(x+1)=0)
````

---

## What Algebrite Supports

Algebrite implements a significant subset of the [Maxima](https://maxima.sourceforge.io) syntax:

- **Simplification**: `simplify(...)`, `rationalize(...)`
- **Calculus**: `d(expr, var)` (derivative), `integral(expr, var)`, `defint(expr, var, a, b)` (definite integral)
- **Algebra**: `factor(...)`, `expand(...)`, `roots(...)`, `gcd(...)`, `lcm(...)`
- **Trigonometry**: `circexp(...)`, `cos(...)`, `sin(...)`, `tan(...)`
- **Linear algebra**: `det(...)`, `inv(...)`, `eigen(...)`
- **Arithmetic**: exact integer arithmetic, arbitrary-precision factorials

Full reference: [algebrite.org/docs](http://algebrite.org/docs/latest-stable/reference.html)

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Algebrite/master/README.md" >}}

---

## Use Cases

**Calculus courses** — Teach differentiation and integration with live computation.
Students type an expression, evaluate it, and compare their manual work with the CAS result.

**Algebra exercises** — Factoring, simplification, and polynomial arithmetic are all handled symbolically.
The `@Algebrite.check` macro accepts any algebraically equivalent form.

**Self-assessment with quizzes** — Standard LiaScript text quizzes compare strings.
`@Algebrite.check` compares mathematical meaning — students can write answers in any equivalent form.

**Engineering and physics courses** — Use `@Algebrite.check_margin` for numerical results where a tolerance range is appropriate.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **CAS language** | Maxima-compatible syntax |
| **Quiz integration** | Yes — 4 check macros |
| **Based on** | Algebrite by Davide Della Casa |
| **License** | MIT |
| **Maintained** | Yes (version 0.6.3) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Algebrite/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Algebrite/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Algebrite" label="View on GitHub" >}}

---

## Related Templates

- [**GGBScript**](/blog/ggbscript-geometry-in-liascript) — GeoGebra-style geometry construction with a JavaScript API
- [**JSXGraph**](/blog/jsxgraph-interactive-math-in-liascript) — interactive function plots and geometry with a JS API
- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python in the browser, includes NumPy and SymPy for symbolic math
- [**Vega**](/blog/vega-data-visualization-in-liascript) — chart and data visualization for quantitative results
