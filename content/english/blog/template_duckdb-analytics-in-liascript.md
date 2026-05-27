---
title: "DuckDB for LiaScript: Teach Data Analytics Directly in the Browser"
slug: "duckdb-analytics-in-liascript"
date: 2026-05-27
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/DuckDB"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Database
    - SQL
    - Data Science
    - Higher Education
    - No Server

description: "Use the DuckDB template to run analytical SQL queries, explore datasets, and teach data analytics directly inside LiaScript courses — no server, fully powered by WebAssembly."
---

Modern data analysis relies on SQL.
With the [DuckDB template](https://github.com/LiaTemplates/DuckDB), you can teach analytical queries interactively — learners write real SQL, run it immediately, and see results as formatted tables or charts, right inside the course.

No database server, no local installation, no accounts.
The template uses [DuckDB-Wasm](https://duckdb.org/docs/api/wasm/overview.html), a full port of DuckDB to WebAssembly, so the entire engine runs in the browser.
Just import the template and start querying.

---

## What is DuckDB?

[DuckDB](https://duckdb.org) is an in-process analytical database system designed for fast OLAP (Online Analytical Processing) workloads.
Unlike SQLite, which is optimised for transactional (OLTP) use, DuckDB excels at aggregations, window functions, and processing large datasets — the kinds of queries central to data science and business intelligence.

DuckDB supports:

- Complex `GROUP BY` and aggregations
- Window functions (`ROW_NUMBER`, `RANK`, `LAG`, `LEAD`, moving averages)
- Common Table Expressions (CTEs) and subqueries
- Reading **CSV, JSON, and Parquet files directly from URLs**
- PostgreSQL-compatible SQL dialect

The LiaScript DuckDB template wraps DuckDB-Wasm into three macros and supports multiple isolated database instances within a single course.

---

## Quick Start

Add this line to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->
```

All macros are now available throughout the document.
A pinned version is also available:

``` markdown
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/0.0.9/README.md
```

---

## Basic Queries: `@DuckDB.eval`

The primary macro executes a SQL code block and renders the result as a formatted table.
Every call receives a database name as parameter — that database persists for the lifetime of the page, so multiple blocks sharing the same name share the same state.

```` markdown
``` SQL
SELECT 'Hello, DuckDB!' AS greeting, 42 AS answer;
```
@DuckDB.eval(demo)
````

Create tables, insert data, and query them across blocks:

```` markdown
``` SQL
CREATE TABLE weather AS
SELECT * FROM (VALUES
    ('San Francisco', 46, 50, 0.25, DATE '1994-11-27'),
    ('San Francisco', 43, 57, 0.0,  DATE '1994-11-29'),
    ('Hayward',       37, 54, NULL, DATE '1994-11-29')
) AS t(city, temp_lo, temp_hi, prcp, date);

SELECT city, (temp_hi + temp_lo) / 2 AS temp_avg, date
FROM weather
ORDER BY temp_avg DESC;
```
@DuckDB.eval(demo)
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->

# DuckDB Demo

``` SQL
CREATE TABLE weather AS
SELECT * FROM (VALUES
    ('San Francisco', 46, 50, 0.25, DATE '1994-11-27'),
    ('San Francisco', 43, 57, 0.0,  DATE '1994-11-29'),
    ('Hayward',       37, 54, NULL, DATE '1994-11-29')
) AS t(city, temp_lo, temp_hi, prcp, date);

SELECT city, (temp_hi + temp_lo) / 2 AS temp_avg, date
FROM weather
ORDER BY temp_avg DESC;
```
@DuckDB.eval(demo)
{{< /liascript >}}

---

## Interactive Terminal: `@DuckDB.terminal`

`@DuckDB.terminal` creates a persistent SQL console.
Unlike `@DuckDB.eval`, which runs once, the terminal stays open — learners can type follow-up queries, explore the database freely, and build on earlier results.

```` markdown
``` SQL
-- Initial setup: create and populate the table
CREATE TABLE products AS
SELECT * FROM (VALUES
    (1, 'Laptop',  999.99, 'Electronics'),
    (2, 'Mouse',    29.99, 'Electronics'),
    (3, 'Desk',    299.99, 'Furniture'),
    (4, 'Chair',   199.99, 'Furniture')
) AS t(id, name, price, category);
-- Now try: SELECT category, AVG(price) AS avg_price FROM products GROUP BY category;
```
@DuckDB.terminal(shop)
````

The terminal is ideal for open-ended exploration tasks.
The database state is maintained between inputs, so students can incrementally build up a schema, insert more data, or run `JOIN` queries across tables they created earlier.

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->

# DuckDB Terminal

``` SQL
CREATE TABLE products AS
SELECT * FROM (VALUES
    (1, 'Laptop',  999.99, 'Electronics'),
    (2, 'Mouse',    29.99, 'Electronics'),
    (3, 'Desk',    299.99, 'Furniture'),
    (4, 'Chair',   199.99, 'Furniture')
) AS t(id, name, price, category);
```
@DuckDB.terminal(shop)
{{< /liascript >}}

---

## Reading External Files

DuckDB can read CSV, JSON, and Parquet files directly from URLs — no upload, no preprocessing.
This makes it ideal for data literacy courses that work with real-world datasets:

```` markdown
``` SQL
SELECT * FROM read_csv_auto(
  'https://raw.githubusercontent.com/duckdb/duckdb-web/main/data/weather.csv'
) LIMIT 10;
```
@DuckDB.eval(files)
````

Learners get real data immediately, without any server-side data pipeline.

---

## Charts: `CHART` Keyword

Prefix your query with `CHART` to render the result as an interactive chart instead of a table.
The first column becomes the X-axis; all subsequent columns become series.

```` markdown
``` SQL
CHART
WITH monthly_stats AS (
    SELECT
        store,
        DATE_TRUNC('week', sale_date) AS week,
        SUM(sales) AS weekly_total
    FROM daily_sales
    GROUP BY store, DATE_TRUNC('week', sale_date)
)
SELECT store, COUNT(*) AS num_weeks, AVG(weekly_total) AS avg_weekly_sales
FROM monthly_stats
GROUP BY store
ORDER BY avg_weekly_sales DESC;
```
@DuckDB.eval(advanced)
````

DuckDB detects date columns automatically and uses a time axis for time-series data.
Categorical columns produce bar charts; numeric X-axes produce line charts.

Try it live — first the setup query creates the data, then `CHART` renders it as a bar chart:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->

# DuckDB Charts

``` SQL
CREATE TABLE revenue AS
SELECT * FROM (VALUES
    ('Electronics', 'Q1', 42000),
    ('Electronics', 'Q2', 51000),
    ('Electronics', 'Q3', 47000),
    ('Electronics', 'Q4', 63000),
    ('Furniture',   'Q1', 18000),
    ('Furniture',   'Q2', 21000),
    ('Furniture',   'Q3', 19500),
    ('Furniture',   'Q4', 24000),
    ('Software',    'Q1', 31000),
    ('Software',    'Q2', 38000),
    ('Software',    'Q3', 35000),
    ('Software',    'Q4', 44000)
) AS t(category, quarter, amount);
```
@DuckDB.eval(charts)

``` SQL
CHART
SELECT quarter, SUM(amount) AS total_revenue
FROM revenue
GROUP BY quarter
ORDER BY quarter;
```
@DuckDB.eval(charts)
{{< /liascript >}}

---

## Window Functions and Advanced Analytics

DuckDB's primary strength is its SQL feature set.
Moving averages, rankings, cumulative sums, and multi-step CTEs all work:

```` markdown
``` SQL
CREATE TABLE daily_sales AS
SELECT
    DATE '2024-01-01' + INTERVAL (day) DAY AS sale_date,
    50 + (random() * 50)::INTEGER AS sales,
    'Store ' || ((day % 3) + 1) AS store
FROM range(30) AS t(day);

SELECT
    sale_date,
    store,
    sales,
    AVG(sales) OVER (
        PARTITION BY store
        ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3day
FROM daily_sales
ORDER BY store, sale_date
LIMIT 15;
```
@DuckDB.eval(advanced)
````

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->

# DuckDB Window Functions

``` SQL
CREATE TABLE daily_sales AS
SELECT
    DATE '2024-01-01' + INTERVAL (day) DAY AS sale_date,
    50 + (random() * 50)::INTEGER AS sales,
    'Store ' || ((day % 3) + 1) AS store
FROM range(30) AS t(day);

SELECT
    sale_date,
    store,
    sales,
    AVG(sales) OVER (
        PARTITION BY store
        ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3day
FROM daily_sales
ORDER BY store, sale_date
LIMIT 15;
```
@DuckDB.eval(advanced)
{{< /liascript >}}

---

## Custom JavaScript: `@DuckDB.js`

For advanced use cases, `@DuckDB.js` provides direct access to the DuckDB connection object.
Write JavaScript that executes queries, processes results programmatically, and renders custom HTML output.

```` markdown
``` js
const result = await conn.query(`
    SELECT product, SUM(revenue)::INTEGER AS total_revenue
    FROM sales
    GROUP BY product
    ORDER BY total_revenue DESC
`);
const data = result.toArray();
console.log(JSON.stringify(data));
```
@DuckDB.js(analytics)
````

This is useful for courses that integrate database results with visualisation libraries or that need to build custom output formats.

> **Note on BigInt values:** DuckDB returns some numeric aggregations as BigInt.
> Cast them to `INTEGER` using `::INTEGER` in SQL, or use `.toString()` / `Number()` in JavaScript to avoid serialisation errors.

---

## ER Diagrams: `ERDIAGRAM`

Prefix a query with `ERDIAGRAM` to render the current schema as an interactive entity-relationship diagram via [dbdiagram.io](https://dbdiagram.io).
No extra parameters needed — the macro introspects the database automatically:

```` markdown
``` SQL
ERDIAGRAM
```
@DuckDB.eval(mydb)
````

Try it live — create a relational schema and then render the ER diagram:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md
-->

# DuckDB ER Diagram

``` SQL
CREATE TABLE customers (
    id      INTEGER PRIMARY KEY,
    name    VARCHAR,
    email   VARCHAR
);

CREATE TABLE orders (
    id          INTEGER PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    placed_at   DATE,
    total       DECIMAL(10,2)
);

CREATE TABLE order_items (
    id         INTEGER PRIMARY KEY,
    order_id   INTEGER REFERENCES orders(id),
    product    VARCHAR,
    quantity   INTEGER,
    unit_price DECIMAL(10,2)
);

INSERT INTO customers VALUES (1, 'Alice', 'alice@example.com'), (2, 'Bob', 'bob@example.com');
INSERT INTO orders VALUES (101, 1, DATE '2024-03-01', 129.98), (102, 2, DATE '2024-03-05', 59.99);
INSERT INTO order_items VALUES (1, 101, 'Keyboard', 1, 79.99), (2, 101, 'Mouse', 1, 49.99), (3, 102, 'USB Hub', 1, 59.99);
```
@DuckDB.eval(shop)

``` SQL
ERDIAGRAM
```
@DuckDB.eval(shop)
{{< /liascript >}}

---

## Database Isolation

Each macro call receives a database name in parentheses.
Different names create fully independent databases — tables in one are invisible to another, even within the same course page:

```` markdown
``` SQL
CREATE TABLE users AS
SELECT * FROM (VALUES (1, 'Alice'), (2, 'Bob')) AS t(id, name);
SELECT * FROM users;
```
@DuckDB.eval(db1)

``` SQL
-- Completely separate database
CREATE TABLE orders AS
SELECT * FROM (VALUES (101, 'Order A', 150.00)) AS t(id, label, amount);
SELECT * FROM orders;
```
@DuckDB.eval(db2)
````

Use descriptive database names to make exercise scoping explicit to learners.

---

## Full Template Demo

The complete DuckDB README is itself a LiaScript course — browse all macros and examples live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md" >}}

---

## Use Cases

**Database and SQL courses** — Teach schema design, `JOIN`, aggregations, window functions, and CTEs with live, runnable exercises.
No DBMS to install, no accounts.
Students open the course URL and write SQL immediately.

**Data literacy and data science education** — Load real CSV or Parquet datasets from URLs, query them with DuckDB's analytical SQL, and use `CHART` to visualise results — all in one interactive document.

**Business intelligence teaching** — DuckDB is the standard tool for OLAP on local data.
Teach aggregations, grouping sets, and reporting queries in an environment students will recognise in professional tools.

**Higher education and research** — DuckDB's performance with larger datasets makes it suitable for university courses on databases, data engineering, or research data management.

**Open-ended lab exercises** — Use `@DuckDB.terminal` for exploration tasks where students investigate a dataset at their own pace and depth.

**OER and reproducibility** — Course source is plain Markdown, the engine runs in the browser, no external service is involved.
Courses remain runnable indefinitely without a server.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — WebAssembly (WASM), no backend |
| **Database engine** | DuckDB via DuckDB-Wasm 1.29.0 |
| **SQL support** | Full analytical SQL: window functions, CTEs, `GROUP BY`, Parquet/CSV/JSON ingestion |
| **External dependency** | DuckDB-Wasm runtime loaded from CDN (jsDelivr) on first use |
| **Offline capable** | After first load (browser cache) |
| **Named databases** | Yes — independent per name within one page |
| **File ingestion** | CSV, JSON, Parquet from URL via `read_csv_auto`, `read_json_auto`, `read_parquet` |
| **Chart rendering** | Yes — `CHART` keyword, powered by Apache ECharts |
| **ER diagrams** | Yes — `ERDIAGRAM` keyword via dbdiagram.io |
| **Custom JS access** | Yes — via `@DuckDB.js` with full DuckDB connection API |
| **License** | MIT |
| **Maintained** | Yes |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/DuckDB/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/DuckDB" label="View on GitHub" >}}

---

## Related Templates

- [**SQLite**](/blog/sqlite-sql-in-liascript) — transactional SQL in the browser via sql.js, ideal for schema design and CRUD exercises
- [**AlaSQL**](/blog/alasql-sql-in-liascript) — lightweight client-side SQL and NoSQL, works well with JSON and CSV data
- [**PGlite**](https://github.com/LiaTemplates/PGlite) — full PostgreSQL in the browser via PGlite, for courses targeting Postgres-specific syntax
- [**Pyodide**](/blog/pyodide-python-in-liascript) — run Python with pandas and NumPy in the browser, pairs well with DuckDB for end-to-end data science courses
