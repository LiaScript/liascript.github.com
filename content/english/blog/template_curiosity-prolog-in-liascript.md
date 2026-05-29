---
title: "Curiosity-Prolog for LiaScript: Lightweight Logic Programming in the Browser"
slug: "curiosity-prolog-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Curiosity-Prolog"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Programming
    - Computer Science

liascript: true

description: "Use the Curiosity-Prolog template to add a simple Prolog interpreter to your LiaScript courses — a lightweight alternative for introductory logic programming exercises."
---

Not every logic programming exercise needs a full Prolog system.
For introductory exercises — family trees, simple rule-based reasoning, first-order logic — a lighter interpreter is often more appropriate.

The [Curiosity-Prolog template](https://github.com/liaTemplates/curiosity-prolog) provides a minimal Prolog interpreter based on [curiosity-driven.github.io/prolog-interpreter](https://curiosity-driven.github.io/prolog-interpreter).
It is smaller and simpler than [Tau-Prolog](/blog/tau-prolog-in-liascript), which makes it useful for quick demonstrations and exercises where the full feature set of standard Prolog is not needed.

> For a fully functional Prolog implementation with module support, `library(lists)`, and quiz integration, see the [Tau-Prolog template](/blog/tau-prolog-in-liascript).

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/curiosity-prolog/master/README.md
-->
```

Three macros: `@Prolog.db`, `@Prolog.shell`, and `@Prolog.ui` in the fence opener.

---

## Macro 1: `@Prolog.db(id)` — Load a Prolog Database

`@Prolog.db(id)` loads (consults) a Prolog program into a named session.
The session name is the shared identifier used to connect the database to queries.

```` markdown
```prolog mydb
parent(alice, charlie).
parent(alice, diana).
parent(bob, charlie).
parent(bob, diana).

grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
```
@Prolog.db(mydb)
````

---

## Macro 2: `@Prolog.shell(id)` — Query the Database

`@Prolog.shell(id)` creates an interactive shell for querying the named database.
Students type queries and get answers.

```` markdown
```prolog
parent(alice, X).
```
@Prolog.shell(mydb)
````

The two macros together define the basic workflow: load a knowledge base with `@Prolog.db`, then explore it with `@Prolog.shell`.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/curiosity-prolog/master/README.md
-->

# Curiosity-Prolog Demo

```prolog animals
% Animals and their properties
animal(dog).
animal(cat).
animal(bird).
animal(fish).

has_legs(dog).
has_legs(cat).
has_legs(bird).

can_fly(bird).
can_swim(fish).
can_swim(dog).

% Rules
pet(X) :- animal(X).
```
@Prolog.db(animals)

**What animals can swim?**

```prolog
can_swim(X).
```
@Prolog.shell(animals)

**What animals have legs?**

```prolog
has_legs(X).
```
@Prolog.shell(animals)
{{< /liascript >}}

---

## Convenience Macro: `@Prolog.ui` in Fence Opener

The `@Prolog.ui(id, initial_query)` macro in the fence opener combines database and shell into one block.
The program is loaded when run, and the initial query is executed immediately.

```` markdown
```prolog @Prolog.ui(shapes, `has_sides(X, 4).`)
has_sides(triangle, 3).
has_sides(square, 4).
has_sides(pentagon, 5).
has_sides(hexagon, 6).

regular(square).
regular(triangle).

shape(X) :- has_sides(X, _).
```
````

This is ideal for self-contained demonstrations where you want the student to see both the rules and the initial query result at a glance.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/curiosity-prolog/master/README.md" >}}

---

## Use Cases

**First Prolog exposure** — Introduce the concepts of facts, rules, and queries with a minimal interface.
The lighter interpreter reduces cognitive overhead for students who are encountering logic programming for the first time.

**Knowledge representation exercises** — Model simple domains — animals, shapes, family relationships, geography — as Prolog fact bases and ask students to write queries.

**Declarative vs imperative comparisons** — Use side-by-side examples to show how the same problem is expressed imperatively (in Python or JavaScript) and declaratively (in Prolog).

**Quick in-lecture demos** — Curiosity-Prolog's lightweight nature makes it fast to load and responsive for short interactive demonstrations during lectures.

---

## Curiosity-Prolog vs. Tau-Prolog

| Feature | Curiosity-Prolog | Tau-Prolog |
|---|---|---|
| **Interpreter size** | Small, fast to load | Larger, more complete |
| **Standard library** | None | `library(lists)` |
| **Module support** | No | Yes |
| **Quiz integration** | No | Yes (`@Tau.check`) |
| **Incremental loading** | No | Yes (`@Tau.program_append`) |
| **Best for** | Introductory exercises | Advanced logic programming |

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes |
| **Server required** | No |
| **Sessions** | Multiple named sessions per page |
| **Based on** | curiosity-driven.github.io/prolog-interpreter |
| **License** | CC0 1.0 Public Domain |
| **Maintained** | Stable (version 0.0.2) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/curiosity-prolog/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/curiosity-prolog/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/curiosity-prolog" label="View on GitHub" >}}

---

## Related Templates

- [**Tau-Prolog**](/blog/tau-prolog-in-liascript) — full-featured Prolog with module support and quiz integration
- [**BiwaScheme**](/blog/biwascheme-scheme-in-liascript) — Scheme interpreter for functional and declarative programming
- [**JSCPP**](/blog/jscpp-cpp-in-liascript) — C++ interpreter for contrast with imperative programming
