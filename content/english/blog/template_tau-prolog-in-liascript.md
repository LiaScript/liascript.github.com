---
title: "Tau-Prolog for LiaScript: Interactive Logic Programming in the Browser"
slug: "tau-prolog-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "http://tau-prolog.org/logo/tauprolog256.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Programming
    - Computer Science
    - No Server

liascript: true

description: "Use the Tau-Prolog template to run Prolog programs and queries interactively in your LiaScript courses — full logic programming in the browser, with quiz integration."
---

Prolog is the language of logic programming.
Unlike imperative languages, Prolog programs describe *what is true* rather than *how to compute it*.
This makes it essential in AI, natural language processing, theorem proving, and formal methods courses.

The [Tau-Prolog template](https://github.com/liaTemplates/tau-prolog) brings [Tau-Prolog](http://tau-prolog.org), a complete Prolog interpreter written in JavaScript, to LiaScript.
Students load Prolog databases, run queries step by step, append rules incrementally, and even get quiz answers checked by the interpreter.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/tau-prolog/master/README.md
-->
```

Four macros form the core workflow: `@Tau.program`, `@Tau.query`, `@Tau.program_append`, and `@Tau.check`.
A convenience macro `@Tau` in the fence opener combines program and query in one block.

---

## Macro 1: `@Tau.program(id)` — Load a Prolog Database

`@Tau.program(id)` consults (loads) a Prolog program into a named session.
Each named session is independent and persistent across the page.

```` markdown
```prolog family.pro
parent(tom, bob).
parent(tom, liz).
parent(bob, ann).
parent(bob, pat).

ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).
```
@Tau.program(family.pro)
````

---

## Macro 2: `@Tau.query(id)` — Query the Database

`@Tau.query(id)` queries the loaded session.
Click the run button to get the first answer; click again to get the next.
Each click returns one unification.

```` markdown
```prolog
ancestor(tom, X).
```
@Tau.query(family.pro)
````

Try it live — program and queries together:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/tau-prolog/master/README.md
-->

# Tau-Prolog Demo

```prolog family.pro
% Facts
color(rose, red).
color(tulip, yellow).
color(carnation, white).
color(violet, blue).

% Rules
warm_color(Flower) :- color(Flower, red).
warm_color(Flower) :- color(Flower, yellow).

cool_color(Flower) :- color(Flower, blue).
cool_color(Flower) :- color(Flower, white).
```
@Tau.program(family.pro)

**What flowers are warm-colored?** Click ▷ repeatedly for all answers.

```prolog
warm_color(X).
```
@Tau.query(family.pro)

**What color is the rose?**

```prolog
color(rose, C).
```
@Tau.query(family.pro)
{{< /liascript >}}

---

## Macro 3: `@Tau.program_append(id)` — Add Rules Incrementally

`@Tau.program_append` adds new facts and rules to an existing session without replacing the existing database.
This is ideal for lessons that build up a knowledge base step by step.

```` markdown
```prolog
% Extend the existing session with new rules
likes(alice, prolog).
likes(bob, python).
likes(alice, python).

speaks_same_language(X, Y) :-
  likes(X, L), likes(Y, L), X \= Y.
```
@Tau.program_append(family.pro)
````

---

## Convenience Macro: `@Tau` in Fence Opener

The `@Tau(id, initial_query)` fence opener creates both the program block and the query block from a single code block — useful for self-contained examples.

```` markdown
```prolog @Tau(holiday.pro,`goes_to(Who, france).`)
goes_to(axel, england).
goes_to(beate, greece).
goes_to(clemens, france).
goes_to(elmar, france).
```
````

---

## Macro 4: `@Tau.check` — Prolog-Based Quiz Answers

`@Tau.check(id, expected_query)` checks a student's text input against the loaded Prolog program.
This enables exercises where the correct answer can only be verified by logical evaluation — not string matching.

```` markdown
```prolog genealogy.pro
male(adam). male(alfred). male(bernd).
female(adele). female(anna). female(barbara).

parent(bernd, adam).
parent(bernd, adele).
parent(barbara, alfred).
parent(barbara, anna).
```
@Tau.program(genealogy.pro)

**Name one parent of alfred:**

[[parent(barbara, alfred).]]
@Tau.check(genealogy.pro, `setof(X, @'input, [alfred, anna])`)
````

Students type a Prolog query; `@Tau.check` evaluates it against the database and compares results with the expected solution.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/tau-prolog/master/README.md" >}}

---

## Use Cases

**Logic programming courses** — Teach unification, backtracking, and the resolution principle with interactive examples.
Students run queries step by step and see all solutions by clicking repeatedly.

**AI and knowledge representation** — Model family trees, ontologies, and expert system rules.
Tau-Prolog includes `library(lists)` for list processing (`append/3`, `member/2`, `reverse/2`, `length/2`).

**Constraint solving exercises** — Build puzzles like the famous N-Queens problem or map coloring as Prolog programs that students can query directly.

**Prolog quizzes** — Use `@Tau.check` to verify student answers at the semantic level.
Two equivalent Prolog queries return the same result, so students are not penalized for syntactic variation.

**Incremental knowledge base building** — Use `@Tau.program_append` across multiple sections of a course to demonstrate how a Prolog knowledge base grows as new facts and rules are added.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — Tau-Prolog (JavaScript) |
| **Server required** | No |
| **Modules** | `library(lists)` included |
| **Sessions** | Multiple named sessions per page |
| **Backtracking** | Yes — click repeatedly for next solution |
| **Quiz integration** | Yes — `@Tau.check` |
| **Based on** | Tau-Prolog by José Antonio Riaza Valverde |
| **License** | BSD-3 Clause |
| **Maintained** | Yes (version 0.3.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/tau-prolog/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/tau-prolog/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/tau-prolog" label="View on GitHub" >}}

---

## Related Templates

- [**Curiosity-Prolog**](/blog/curiosity-prolog-in-liascript) — lighter Prolog interpreter for simpler exercises
- [**BiwaScheme**](/blog/biwascheme-scheme-in-liascript) — Scheme/Lisp interpreter, another declarative language in the browser
- [**JSCPP**](/blog/jscpp-cpp-in-liascript) — C++ in the browser for imperative-vs-declarative comparisons
- [**Pyodide**](/blog/pyodide-python-in-liascript) — full Python, useful for AI and logic programming comparisons
