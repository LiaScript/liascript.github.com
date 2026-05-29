---
title: "BiwaScheme for LiaScript: Functional Programming with Scheme in the Browser"
slug: "biwascheme-scheme-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/biwascheme/biwascheme/master/website/images/biwascheme_logo.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Programming
    - Computer Science
    - No Server

liascript: true

description: "Use the BiwaScheme template to run Scheme programs in your LiaScript courses — a complete Scheme interpreter in the browser, with an optional interactive REPL terminal."
---

Scheme is one of the most influential programming languages ever designed.
Its minimal syntax, powerful macro system, and emphasis on functional programming have made it a foundational language in computer science education — from SICP to modern functional programming courses.

The [BiwaScheme template](https://github.com/liaTemplates/BiwaScheme) brings [BiwaScheme 0.8.0](https://biwascheme.org), a full Scheme interpreter written in JavaScript, to LiaScript.
Students run Scheme programs directly in the browser, with an optional interactive terminal for REPL-style exploration.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/BiwaScheme/master/README.md
-->
```

Two macros: `@BiwaScheme.eval` for batch execution and `@BiwaScheme.evalWithTerminal` for interactive REPL sessions.

---

## Macro 1: `@BiwaScheme.eval` — Execute a Scheme Program

Attach `@BiwaScheme.eval` to a Scheme code block to run it and display output in the console.

```` markdown
```scheme
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(display (factorial 10))
(newline)
(display (map factorial '(1 2 3 4 5 6 7 8)))
```
@BiwaScheme.eval
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/BiwaScheme/master/README.md
-->

# BiwaScheme Demo – Grundlagen

```scheme
(define (factorial n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(print (factorial 10))
(newline)
(print (map factorial '(1 2 3 4 5 6 7 8)))
```
@BiwaScheme.eval
{{< /liascript >}}

---

## Macro 2: `@BiwaScheme.evalWithTerminal` — Interactive REPL

`@BiwaScheme.evalWithTerminal` first evaluates the code block, then opens an interactive terminal.
Students can continue exploring by typing Scheme expressions directly into the terminal.

```` markdown
```scheme
;; Define a set of functions to explore
(define pi 3.14159265)

(define (circle-area r) (* pi r r))
(define (circle-perimeter r) (* 2 pi r))

(display "Functions defined. Try: (circle-area 5)")
(newline)
```
@BiwaScheme.evalWithTerminal
````

The terminal is live — students can call `(circle-area 5)`, define new functions, and experiment freely.
This is ideal for interactive lectures or exercise sessions where students explore concepts step by step.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/BiwaScheme/master/README.md" >}}

---

## What BiwaScheme Supports

BiwaScheme implements R7RS Scheme with most standard procedures:

- `define`, `lambda`, `let`, `let*`, `letrec`
- `cond`, `case`, `when`, `unless`
- `map`, `filter`, `for-each`, `fold-left`, `fold-right`
- Tail call optimization (TCO) — deep recursion works without stack overflow
- `call-with-current-continuation` (`call/cc`)
- `define-syntax` and `syntax-rules` for hygienic macros
- Numeric tower: integers, rationals, reals
- Lists, vectors, strings, characters

Full reference: [biwascheme.org/doc/reference.html](https://www.biwascheme.org/doc/reference.html)

---

## Use Cases

**SICP-style courses** — Work through the Structure and Interpretation of Computer Programs with live, editable examples.
Students evaluate expressions, test substitution models, and build up abstractions incrementally.

**Functional programming fundamentals** — Introduce `map`, `filter`, `fold`, closures, and higher-order functions with a language specifically designed to make these concepts visible.

**Macro systems and metaprogramming** — Show how `define-syntax` and `syntax-rules` work with live examples.
Scheme macros are hygienic and composable — hard to explain, easy to demonstrate.

**Interactive lectures** — Use `@BiwaScheme.evalWithTerminal` to open a REPL during a live session.
Students type expressions and explore the behavior of functions defined in the lecture code.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — BiwaScheme 0.8.0 (JavaScript) |
| **Server required** | No |
| **Standard** | R7RS Scheme |
| **TCO** | Yes — tail calls are optimized |
| **Interactive terminal** | Yes — `@BiwaScheme.evalWithTerminal` |
| **Based on** | BiwaScheme by Yutaka Hara |
| **License** | MIT |
| **Maintained** | Stable (version 0.0.5) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/BiwaScheme/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/BiwaScheme/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/BiwaScheme" label="View on GitHub" >}}

---

## Related Templates

- [**Tau-Prolog**](/blog/tau-prolog-in-liascript) — logic programming with Prolog in the browser
- [**Curiosity-Prolog**](/blog/curiosity-prolog-in-liascript) — lightweight Prolog interpreter
- [**JSCPP**](/blog/jscpp-cpp-in-liascript) — C++ interpreter for imperative-vs-functional comparisons
- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python in the browser via WebAssembly
