---
title: "plantUML for LiaScript: UML and Architecture Diagrams in Your Course"
slug: "plantuml-uml-diagrams-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://plantuml.com/img/plantuml_logo.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Diagrams
    - Computer Science
    - Software Engineering

liascript: true

description: "Use the plantUML template to embed UML class diagrams, sequence diagrams, flowcharts, and architecture diagrams in your LiaScript courses — rendered via the PlantUML service."
---

UML diagrams are a core tool in software engineering education.
Class hierarchies, sequence diagrams, state machines, component architectures — all are easier to teach when students can see them rendered clearly and modify them directly.

The [plantUML template](https://github.com/LiaTemplates/plantUML) adds [PlantUML](https://plantuml.com) to LiaScript.
Write UML in the PlantUML text notation; the template renders it as an image via the PlantUML rendering service and embeds it in the course.

> **Note:** Diagrams are rendered by the [plantuml.com](https://plantuml.com) online service.
> An internet connection is required.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/liascript-templates/plantUML/master/README.md
-->
```

Three macros: `@plantUML` and `@plantUML.svg` / `@plantUML.png` in the fence opener for static display, and `@plantUML.eval(svg|png)` for an editable version.

---

## `@plantUML` — Render a PlantUML Diagram

Place `@plantUML` in the header line of a code block containing valid PlantUML notation.
The diagram is rendered as an SVG image (default) and embedded inline.

```` markdown
```text @plantUML
@startuml
Alice -> Bob : Hello
Bob --> Alice : Hi!
Alice -> Bob : Are you free?
Bob --> Alice : Sure!
@enduml
```
````

`@plantUML.png` renders as PNG; `@plantUML.svg` makes the SVG rendering explicit.

---

## UML Diagram Types

PlantUML supports the full range of UML diagram types:

### Sequence Diagram

```` markdown
```text @plantUML
@startuml
participant Client
participant Server
participant Database

Client -> Server : POST /login
Server -> Database : SELECT user
Database --> Server : user row
Server --> Client : 200 OK + token
@enduml
```
````

### Class Diagram

```` markdown
```text @plantUML
@startuml
abstract class Shape {
  + draw()
  + area() : float
}

class Circle {
  - radius : float
  + draw()
  + area() : float
}

class Rectangle {
  - width : float
  - height : float
  + draw()
  + area() : float
}

Shape <|-- Circle
Shape <|-- Rectangle
@enduml
```
````

### State Machine

```` markdown
```text @plantUML
@startuml
[*] --> Idle
Idle --> Processing : start()
Processing --> Done : finish()
Processing --> Error : fail()
Error --> Idle : reset()
Done --> [*]
@enduml
```
````

### Activity / Flowchart

```` markdown
```text @plantUML
@startuml
start
:Input x;
if (x > 0?) then (yes)
  :Print "positive";
else (no)
  if (x == 0?) then (yes)
    :Print "zero";
  else (no)
    :Print "negative";
  endif
endif
stop
@enduml
```
````

---

## `@plantUML.eval` — Editable Diagram

`@plantUML.eval(svg)` or `@plantUML.eval(png)` is attached at the end of a code block.
The block becomes editable; students can modify the diagram and re-render.

```` markdown
```
@startuml
Bob -> Alice : hello
Alice --> Bob : world
@enduml
```
@plantUML.eval(png)
````

This is ideal for exercises where students extend a partial class diagram, add actors to a sequence diagram, or complete a state machine.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/liascript-templates/plantUML/master/README.md" >}}

---

## Use Cases

**Software architecture courses** — Draw component diagrams, deployment diagrams, and package structures in plain text.
Students can modify any diagram in the course and see the result immediately.

**Object-oriented programming** — Illustrate inheritance hierarchies, interfaces, and design patterns with class diagrams.
The `@plantUML.eval` macro turns exercises into hands-on modeling tasks.

**System design** — Teach microservice architectures, API contracts, and event flows with sequence and component diagrams.

**Agile and project management** — PlantUML supports Gantt charts and DITAA ASCII art diagrams, which are useful for project planning exercises.

**Computer science theory** — Draw finite automata, pushdown automata, and Turing machine transition diagrams using PlantUML's state diagram notation.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Partial — rendering via plantuml.com |
| **Server required** | Yes — plantuml.com (internet required) |
| **Output formats** | SVG (default), PNG |
| **Editable version** | Yes — `@plantUML.eval(svg\|png)` |
| **Supported diagrams** | Sequence, Class, State, Activity, Component, Deployment, Gantt, DITAA |
| **Version** | 0.0.11 |
| **License** | MIT |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liascript-templates/plantUML/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liascript-templates/plantUML/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/plantUML" label="View on GitHub" >}}

---

## Related Templates

- [**TikzJax**](/blog/tikzjax-latex-diagrams-in-liascript) — TikZ diagrams in the browser (pure client-side, no server)
- [**Mermaid**](/blog/mermaid-diagrams-in-liascript) — flowcharts, sequence, ER diagrams in a Markdown-friendly syntax
- [**dbdiagram**](/blog/dbdiagram-schema-visualization-in-liascript) — entity-relationship diagrams for database courses
- [**Vega**](/blog/vega-data-visualization-in-liascript) — data-driven charts and graphs
