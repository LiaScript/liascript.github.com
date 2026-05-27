---
title: "SQLite for LiaScript: Teach SQL Interactively in the Browser"
slug: "sqlite-sql-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Database
    - SQL
    - Interactive Exercises
    - Data Science
    - No Server
    - Higher Education

description: "Use the SQLite template to create, query, import, and export SQL databases directly inside LiaScript courses — no server, no setup, just SQL in the browser."
---

SQL is the foundational language of data.
With the [SQLite template](https://github.com/liaTemplates/SQLite), you can teach it interactively — learners write real SQL, run it immediately, and see the results as formatted tables, right inside the course.

No database server to provision, no local software to install, no accounts to create.
The template uses [sql.js](https://github.com/sql-js/sql.js), a WebAssembly port of SQLite, so every database lives entirely in the browser.
Just import the template and start writing SQL.

---

## What is sql.js?

[sql.js](https://github.com/sql-js/sql.js) compiles the full SQLite engine to WebAssembly.
It runs a complete, standards-compliant SQL database inside the browser — without any backend, without any native binaries, without any server-side component.

[SQLite](https://www.sqlite.org) itself is the world's most widely deployed database engine.
It supports the full SQL standard including `JOIN`, `GROUP BY`, window functions, transactions, and constraints.
Because sql.js is SQLite, anything that works in SQLite works here.

The LiaScript SQLite template wraps sql.js into a set of simple macros and lets you use named, independent databases within a single course document.

---

## Quick Start

Add this line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md
-->
```

All macros are now available throughout the document.

---

## Basic Queries: `@SQL.run`

The primary macro turns any SQL code block into a live, editable SQL interpreter.
You give it a database name — that database persists across all code blocks in the same course page that use the same name.

```` markdown
```SQL
CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;
```
@SQL.run(hello-db)
````

Learners can modify the SQL, run it, and see the result table immediately.
The database name (`hello-db` here) is arbitrary — use descriptive names to keep multiple exercises independent.

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md
-->

# SQLite Demo

```SQL
CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;
```
@SQL.run(hello-db)
{{< /liascript >}}

---

## Continuing in the Same Database

Because each database is identified by name, you can spread an exercise across multiple blocks on the same page.
The first block creates and populates the table; subsequent blocks query or modify it:

```` markdown
```SQL
INSERT INTO hello VALUES (2, 'more data');
INSERT INTO hello VALUES (3, 'even more');
```
@SQL.run(hello-db)

```SQL
SELECT * FROM hello WHERE a > 1;
```
@SQL.run(hello-db)
````

This makes it straightforward to build step-by-step exercises where each step builds on the previous one.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md
-->

# SQLite Demo2

```SQL
CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;
```
@SQL.run(hello-db)

```SQL
INSERT INTO hello VALUES (2, 'more data');
INSERT INTO hello VALUES (3, 'even more');
```
@SQL.run(hello-db)

```SQL
SELECT * FROM hello WHERE a > 1;
```
@SQL.run(hello-db)
{{< /liascript >}}

---

## Hidden Setup + Visible Query: `@SQL.run2`

`@SQL.run2` runs two code blocks together.
Mark the setup block with `-` (hidden from learners) and the query block with `+` (visible and editable).

This is useful when you want students to focus on writing a query without having to scroll past schema and sample data:

```` markdown
```SQL  -populate
-- Setup (hidden from learners)
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id   INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT,
  salary NUMERIC
);
INSERT INTO employees (name, dept, salary) VALUES
  ('Alice', 'Engineering', 85000),
  ('Bob',   'Marketing',   72000),
  ('Carol', 'Engineering', 92000),
  ('Dave',  'Finance',    115000),
  ('Eve',   'Engineering', 110000);
```
```SQL  +query
-- Write your query here:
SELECT dept, COUNT(*) AS headcount, ROUND(AVG(salary), 0) AS avg_salary
FROM employees
GROUP BY dept
ORDER BY avg_salary DESC;
```
@SQL.run2(staff)
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md
-->

# SQLite – Hidden Setup Demo

```SQL  -populate
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id     INTEGER PRIMARY KEY,
  name   TEXT NOT NULL,
  dept   TEXT,
  salary NUMERIC
);
INSERT INTO employees (name, dept, salary) VALUES
  ('Alice', 'Engineering', 85000),
  ('Bob',   'Marketing',   72000),
  ('Carol', 'Engineering', 92000),
  ('Dave',  'Finance',    115000),
  ('Eve',   'Engineering', 110000);
```
```SQL  +query
SELECT dept,
       COUNT(*)            AS headcount,
       ROUND(AVG(salary),0) AS avg_salary
FROM employees
GROUP BY dept
ORDER BY avg_salary DESC;
```
@SQL.run2(staff)
{{< /liascript >}}

---

## Loading an External Database: `@SQL.load`

If you have an existing `.db` or `.sqlite` file, you can load it directly from a URL:

```` markdown
@[SQL.load(employees)](https://github.com/LiaTemplates/SQLite/raw/refs/heads/main/employees.db)

```SQL
SELECT department, COUNT(*) AS count, ROUND(AVG(salary), 2) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;
```
@SQL.run(employees)
````

The database is fetched once and held in memory for the rest of the session.
This is useful for courses that work with realistic datasets — export a prepared database from your own SQLite tool, host it on GitHub or any static server, and import it directly into the course.

## EXPORT and IMPORT

Two built-in custom commands let learners move databases between the course and their local machine.

**EXPORT** — downloads the current in-memory database as a `.sqlite` file:

```` markdown
```SQL
-- Create and populate a table, then download it
CREATE TABLE notes (id INTEGER PRIMARY KEY, content TEXT);
INSERT INTO notes (content) VALUES ('First note'), ('Second note');
EXPORT;
```
@SQL.run(my-db)
````

**IMPORT** — opens a file picker so the learner can load a previously exported database:

```` markdown
```SQL
IMPORT;
SELECT name FROM sqlite_master WHERE type='table';
```
@SQL.run(my-db)
````

You can also import directly from a URL:

```` markdown
```SQL
IMPORT https://example.com/path/to/database.db;
SELECT * FROM some_table LIMIT 10;
```
@SQL.run(my-db)
````

These two commands make it possible to design **multi-session exercises**: learners export their work at the end of one session and reimport it in the next.

---

## Full Template Demo

The complete SQLite README is itself a self-documenting LiaScript course — explore all macros and examples live:

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md" >}}

---

## Use Cases

**Database fundamentals courses** — Teach `CREATE TABLE`, `INSERT`, `SELECT`, `JOIN`, aggregations, and constraints with live, runnable exercises.
No local DBMS to install.
Students open the course URL and write SQL immediately.

**Data literacy and data science education** — Combine SQL with realistic datasets.
Load a prepared `.db` file, let students explore it with queries, and pair it with LiaScript's quiz blocks for self-assessment.

**Window functions and advanced SQL** — SQLite supports modern SQL including `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`, and `SUM() OVER (...)`.
Complex analytics exercises work out of the box.

**Multi-exercise courses** — Use `@SQL.run2` to hide schema setup and let students focus entirely on writing the query.
Name databases deliberately to keep independent exercises truly independent on the same page.

**Assessment and homework** — Students build a database, export it with `EXPORT`, and submit the file.
You reimport it to verify their work.

**OER and reproducibility** — Course source is plain Markdown, the database engine runs fully in the browser, and no external service is involved.
Courses remain usable indefinitely without maintaining a server.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebAssembly (WASM), no backend |
| **Database engine** | SQLite via sql.js |
| **SQL support** | Full SQLite SQL including window functions, CTEs, foreign keys |
| **External dependency** | sql.js runtime loaded from CDN on first use |
| **Offline capable** | After first load (browser cache) |
| **Named databases** | Yes — independent per name within one page |
| **Import / Export** | Yes — `.sqlite` / `.db` files, local file picker or URL |
| **Interactive editing** | Yes, with `@SQL.run` and `@SQL.run2` |
| **License** | MIT |
| **Maintained** | Yes |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/SQLite/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/SQLite" label="View on GitHub" >}}

---

## Related Templates

- [**DuckDB**](https://github.com/LiaTemplates/DuckDB) — analytical SQL in the browser with DuckDB/WASM, optimised for large datasets and OLAP queries
- [**AlaSQL**](https://github.com/LiaTemplates/AlaSQL) — lightweight client-side SQL and NoSQL interpreter, works well for JSON and CSV data
- [**PGlite**](https://github.com/LiaTemplates/PGlite) — full PostgreSQL in the browser via PGlite, for courses that target Postgres-specific syntax
- [**Pyodide**](https://github.com/LiaTemplates/Pyodide) — run Python with pandas and data-analysis libraries in the browser, pairs well with SQL for data science courses
