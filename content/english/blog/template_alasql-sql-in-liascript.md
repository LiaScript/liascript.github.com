---
title: "AlaSQL for LiaScript: Teach SQL and Query CSV Data in the Browser"
slug: "alasql-sql-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://jquery-plugins.net/image/plugin/alasql-javascript-sql-database-library.png"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Database
    - SQL
    - Interactive Exercises
    - No Server
    - Data Science

description: "Use the AlaSQL template to run SQL queries directly inside LiaScript courses — with support for CSV data, JSON, and JavaScript arrays. No server, no setup."
---

SQL is not only for relational databases.
With the [AlaSQL template](https://github.com/liaTemplates/AlaSQL), you can run SQL queries inside LiaScript courses against in-memory tables, JavaScript arrays, and CSV files — entirely in the browser.

No backend, no installation, no accounts.
Just import the template and start writing SQL.

---

## What is AlaSQL?

[AlaSQL](http://alasql.org) is a lightweight, JavaScript-native SQL interpreter.
Unlike traditional database engines ported to WebAssembly, AlaSQL is written directly in JavaScript and runs without any binary runtime.

It supports a large subset of standard SQL — `CREATE TABLE`, `INSERT`, `SELECT`, `JOIN`, `GROUP BY`, `ORDER BY`, subqueries — and extends it with the ability to query JavaScript arrays, JSON objects, CSV files, `localStorage`, and `IndexedDB`.

The LiaScript AlaSQL template wraps this into two focused macros that integrate cleanly with LiaScript code blocks.

---

## Quick Start

Add this line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md
-->
```

All macros are now available throughout the document.

---

## Basic SQL: `@AlaSQL.eval`

Add `@AlaSQL.eval` after any SQL code block to make it executable and editable.
The block is sent to the AlaSQL interpreter and the result is displayed below as formatted JSON.

```` markdown
``` sql
CREATE TABLE students (id INT, name STRING, grade INT);

INSERT INTO students VALUES (1, 'Alice', 92);
INSERT INTO students VALUES (2, 'Bob',   78);
INSERT INTO students VALUES (3, 'Carol', 85);

SELECT * FROM students ORDER BY grade DESC;
```
@AlaSQL.eval
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md
-->

# AlaSQL Demo

``` sql
CREATE TABLE students (id INT, name STRING, grade INT);

INSERT INTO students VALUES (1, 'Alice', 92);
INSERT INTO students VALUES (2, 'Bob',   78);
INSERT INTO students VALUES (3, 'Carol', 85);

SELECT * FROM students ORDER BY grade DESC;
```
@AlaSQL.eval
{{< /liascript >}}

---

## Persistent State Across Blocks

AlaSQL maintains its own runtime environment within a course page.
Tables created in one block are available in all subsequent blocks on the same page — no need to recreate data for every query.

```` markdown
``` sql
CREATE TABLE products (id INT, name STRING, price FLOAT, category STRING);

INSERT INTO products VALUES (1, 'Laptop',  999.00, 'Electronics');
INSERT INTO products VALUES (2, 'Desk',    249.00, 'Furniture');
INSERT INTO products VALUES (3, 'Monitor', 399.00, 'Electronics');
INSERT INTO products VALUES (4, 'Chair',   189.00, 'Furniture');
INSERT INTO products VALUES (5, 'Tablet',  549.00, 'Electronics');
```
@AlaSQL.eval

``` sql
-- Subsequent block — table is already there
SELECT category, COUNT(*) AS items, ROUND(AVG(price), 2) AS avg_price
FROM products
GROUP BY category
ORDER BY avg_price DESC;
```
@AlaSQL.eval
````

This is useful for multi-step exercises where each block builds on the previous one.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md
-->

# AlaSQL – Persistent State

``` sql
CREATE TABLE products (id INT, name STRING, price FLOAT, category STRING);

INSERT INTO products VALUES (1, 'Laptop',  999.00, 'Electronics');
INSERT INTO products VALUES (2, 'Desk',    249.00, 'Furniture');
INSERT INTO products VALUES (3, 'Monitor', 399.00, 'Electronics');
INSERT INTO products VALUES (4, 'Chair',   189.00, 'Furniture');
INSERT INTO products VALUES (5, 'Tablet',  549.00, 'Electronics');
```
@AlaSQL.eval

``` sql
SELECT category, COUNT(*) AS items, ROUND(AVG(price), 2) AS avg_price
FROM products
GROUP BY category
ORDER BY avg_price DESC;
```
@AlaSQL.eval
{{< /liascript >}}

---

## CSV Import: `@AlaSQL.eval_with_csv`

`@AlaSQL.eval_with_csv` is the standout feature of this template.
It accepts two consecutive code blocks: the first contains a SQL statement (use `?` as a placeholder for the data), the second contains the raw CSV with a header row.
[PapaParse](https://www.papaparse.com) handles the CSV parsing automatically.

```` markdown
``` sql
CREATE TABLE sales;
INSERT INTO sales SELECT * FROM ?;
```
``` text -data.csv
Region,Country,Item,Units,Revenue
Europe,Germany,Laptop,12,11988.00
Europe,France,Tablet,8,4392.00
Asia,Japan,Monitor,15,5985.00
Americas,USA,Laptop,22,21978.00
Asia,India,Tablet,19,10431.00
Americas,Canada,Desk,7,1743.00
Europe,Spain,Chair,11,2079.00
```
@AlaSQL.eval_with_csv
````

After the import you can query the table in any following block with `@AlaSQL.eval`:

```` markdown
``` sql
SELECT Region, SUM(Revenue) AS total
FROM sales
GROUP BY Region
ORDER BY total DESC;
```
@AlaSQL.eval
````

Try the full flow live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md
-->

# AlaSQL – CSV Import

``` sql
CREATE TABLE sales;
INSERT INTO sales SELECT * FROM ?;
```
``` text -data.csv
Region,Country,Item,Units,Revenue
Europe,Germany,Laptop,12,11988.00
Europe,France,Tablet,8,4392.00
Asia,Japan,Monitor,15,5985.00
Americas,USA,Laptop,22,21978.00
Asia,India,Tablet,19,10431.00
Americas,Canada,Desk,7,1743.00
Europe,Spain,Chair,11,2079.00
```
@AlaSQL.eval_with_csv

``` sql
SELECT Region, SUM(Revenue) AS total
FROM sales
GROUP BY Region
ORDER BY total DESC;
```
@AlaSQL.eval
{{< /liascript >}}

---

## Full Template Demo

The complete AlaSQL README is itself a self-documenting LiaScript course — explore all macros and examples live:

{{< liascript-show "https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md" >}}

---

## Use Cases

**SQL fundamentals** — Teach `SELECT`, `WHERE`, `JOIN`, `GROUP BY`, and aggregation functions with live, editable exercises.
No DBMS to install, no accounts to create — students open the course URL and write SQL immediately.

**Data literacy with CSV** — Load a realistic CSV dataset directly into the course and let students explore it with SQL queries.
This is a natural fit for courses on business data, statistics, or research methods where data arrives as spreadsheet exports.

**Introductory data analysis** — Combine SQL filtering and aggregation with LiaScript's quiz blocks for guided, self-paced data exploration exercises.

**Lightweight NoSQL-style queries** — AlaSQL can query JavaScript arrays and JSON objects as if they were tables.
This makes it useful for explaining the conceptual bridge between structured data formats and SQL queries.

**Courses without internet dependency** — Because AlaSQL is JavaScript-native (no WASM download required), the template starts faster than WASM-based alternatives and works well in low-bandwidth environments.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — pure JavaScript, no backend |
| **Database engine** | AlaSQL (JavaScript-native) |
| **SQL support** | Standard SQL: SELECT, JOIN, GROUP BY, subqueries, and more |
| **CSV support** | Yes — via PapaParse, with automatic header detection |
| **External dependency** | AlaSQL and PapaParse loaded from CDN on first use |
| **State persistence** | Yes — tables persist across blocks on the same page |
| **Offline capable** | After first load (browser cache) |
| **Named databases** | No — single shared AlaSQL runtime per page |
| **License** | MIT (AlaSQL: MIT, PapaParse: MIT) |
| **Maintained** | Yes |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/AlaSQL/master/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/liaTemplates/AlaSQL" label="View on GitHub" >}}

---

## Related Templates

- [**SQLite**](https://github.com/liaTemplates/SQLite) — full SQLite engine via WebAssembly, with named persistent databases, EXPORT/IMPORT, and support for `.db` file loading
- [**DuckDB**](https://github.com/LiaTemplates/DuckDB) — analytical SQL in the browser with DuckDB/WASM, optimised for large datasets and OLAP queries
- [**PGlite**](https://github.com/LiaTemplates/PGlite) — full PostgreSQL in the browser, for courses that target Postgres-specific syntax
- [**Pyodide**](https://github.com/LiaTemplates/Pyodide) — run Python with pandas in the browser; pairs well with SQL for data science courses
