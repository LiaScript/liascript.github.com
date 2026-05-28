---
title: "dbdiagram for LiaScript: Design and Visualize Database Schemas with DBML"
slug: "dbdiagram-schema-visualization-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://raw.githubusercontent.com/LiaTemplates/dbdiagram/main/logo.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Diagrams
    - Database
    - Computer Science
    - Higher Education

description: "Use the dbdiagram template to render interactive entity-relationship diagrams from DBML text directly in your LiaScript courses — with a single macro."
---

Database schema diagrams are hard to maintain.
Draw them by hand and they drift from the code.
Use a screenshot and it's outdated the moment the schema changes.

The [dbdiagram template](https://github.com/LiaTemplates/dbdiagram) solves this by rendering ER diagrams directly from text using **DBML** (Database Markup Language).
Write your schema in a code block, add one macro, and get an interactive, zoomable diagram rendered via [dbdiagram.io](https://dbdiagram.io).
Change the text, the diagram updates.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/dbdiagram/0.0.1/README.md
-->
```

Three macros are available — choose based on how much interactivity you want:

| Macro | Where | Button | Editable |
|-------|-------|--------|----------|
| `@dbdiagram` | fence opener | No — renders immediately | No |
| `@dbdiagram.edit` | fence opener | No — renders immediately | Yes (double-click border) |
| `@dbdiagram.eval` | after closing fence | Yes — click Run | No |

---

## DBML Syntax

DBML is a simple, readable syntax for describing database schemas.

### Tables and Columns

```` markdown
```sql @dbdiagram
Table users {
  id       int  [pk, increment]
  name     varchar(100) [not null]
  email    varchar(100) [not null, unique]
  role     varchar(20)  [default: 'user']
  created  timestamp
}
```
````

Column settings: `pk`, `not null`, `null`, `unique`, `increment`, `default: value`, `note: 'text'`.

### Relationships

Define how tables connect using `ref:` inline or in a separate `Ref:` block:

```` markdown
```sql @dbdiagram
Table orders {
  id          int [pk, increment]
  user_id     int [ref: > users.id]   // many-to-one
  total       decimal(10,2)
  placed_at   timestamp
}

Table order_items {
  id         int  [pk, increment]
  order_id   int  [ref: > orders.id]  // many-to-one
  product_id int  [ref: > products.id]
  quantity   int
  price      decimal(10,2)
}
```
````

| Symbol | Meaning |
|--------|---------|
| `>` | Many-to-one (foreign key → primary key) |
| `<` | One-to-many |
| `-` | One-to-one |
| `<>` | Many-to-many |

### Indexes

```` markdown
```sql @dbdiagram
Table posts {
  id         int [pk, increment]
  author_id  int
  title      varchar(200)
  slug       varchar(200) [unique]
  published  boolean [default: false]

  indexes {
    (author_id, published) [name: 'idx_author_status']
    slug                   [unique]
  }
}
```
````

---

## Macro 1: `@dbdiagram` — Instant Render

Place `@dbdiagram` in the fence opener to render the diagram immediately, with no button.
Ideal for presenting a schema as a visual illustration.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/dbdiagram/0.0.1/README.md
-->

# dbdiagram Demo – E-Commerce Schema

``` sql @dbdiagram
Table users {
  id        int          [pk, increment]
  name      varchar(100) [not null]
  email     varchar(100) [not null, unique]
}

Table products {
  id         int           [pk, increment]
  name       varchar(200)  [not null]
  price      decimal(10,2) [not null]
  stock      int           [default: 0]
  category   varchar(50)
}

Table orders {
  id          int       [pk, increment]
  user_id     int       [ref: > users.id]
  placed_at   timestamp
  total       decimal(10,2)
}

Table order_items {
  id          int           [pk, increment]
  order_id    int           [ref: > orders.id]
  product_id  int           [ref: > products.id]
  quantity    int
  price       decimal(10,2)
}
```
{{< /liascript >}}

---

## Macro 2: `@dbdiagram.edit` — Editable Diagram

Use `@dbdiagram.edit` in the fence opener to render the diagram immediately AND let learners modify it.
Double-click the diagram border to open the code editor and apply changes.

```` markdown
``` sql @dbdiagram.edit
Table articles {
  id         int          [pk, increment]
  title      varchar(200) [not null]
  content    text
  author_id  int          [ref: > authors.id]
  published  boolean      [default: false]
}

Table authors {
  id    int          [pk, increment]
  name  varchar(100) [not null]
  bio   text
}
```
````

This is particularly useful in exercises: show a schema, let students extend or correct it, and see the changes reflected immediately in the diagram.

---

## Macro 3: `@dbdiagram.eval` — Run Button

`@dbdiagram.eval` is placed after the closing fence (like `@PGlite.eval`).
The diagram is not rendered until the student clicks the **Run** button.
Useful when you want deliberate student interaction or want to control reveal timing.

```` markdown
```sql
Table blog_posts {
  id         int          [pk, increment]
  title      varchar(200) [not null]
  slug       varchar(200) [unique]
  content    text
  author_id  int          [ref: > users.id]
  created_at timestamp
}
```
@dbdiagram.eval
````

---

## PGlite Integration

The [PGlite template](/blog/pglite-postgresql-in-liascript) includes a built-in `ERDIAGRAM;` command that generates a dbdiagram.io diagram automatically from the live database schema.
This creates a seamless workflow: define tables with DDL, run `ERDIAGRAM;`, and see the visual schema without switching tools.

```` markdown
```sql
CREATE TABLE authors (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE books (
  id        SERIAL PRIMARY KEY,
  title     VARCHAR(200),
  author_id INT REFERENCES authors(id)
);

ERDIAGRAM;
```
@PGlite.eval(library)
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/dbdiagram/main/README.md" >}}

---

## Use Cases

**Database design courses** — Present normalized schemas as interactive diagrams.
Students see foreign keys, cardinalities, and index definitions at a glance.
The editable variant lets them redesign tables as part of an exercise.

**ER diagram exercises** — Give students an incomplete schema in `@dbdiagram.edit` and ask them to add a missing table or relationship.
No drawing tool needed.

**Schema review and documentation** — Embed a living schema diagram in a LiaScript course that serves both as lecture material and as documentation.
Update the DBML text, the diagram updates.

**Teaching data modeling principles** — Compare 1NF, 2NF, 3NF by showing before/after schemas side by side using two `@dbdiagram` blocks.

**Cross-template learning** — Use dbdiagram in combination with PGlite: design the schema visually, implement it with DDL, verify it, and re-render the diagram from the live database with `ERDIAGRAM;`.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Rendering requires internet access (dbdiagram.io iframe) |
| **Server required** | No — but dbdiagram.io must be reachable |
| **External service** | Yes — diagrams are embedded from dbdiagram.io |
| **Offline use** | Not supported |
| **Query language** | DBML (Database Markup Language) |
| **Editable mode** | Yes — `@dbdiagram.edit` |
| **Run-button mode** | Yes — `@dbdiagram.eval` |
| **PGlite integration** | Yes — `ERDIAGRAM;` command |
| **License** | MIT |
| **Maintained** | Yes (TypeScript, version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/dbdiagram/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/dbdiagram/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/dbdiagram" label="View on GitHub" >}}

---

## Related Templates

- [**PGlite**](/blog/pglite-postgresql-in-liascript) — full PostgreSQL with built-in `ERDIAGRAM;` that renders via dbdiagram
- [**Mermaid**](/blog/mermaid-diagrams-in-liascript) — text-based diagrams: ER, flowcharts, sequence, and more
- [**SQLite**](/blog/sqlite-sql-in-liascript) — relational SQL in the browser
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — analytical SQL for data-heavy schemas
