---
title: "PouchDB for LiaScript: NoSQL Documents and Mango Queries in the Browser"
slug: "pouchdb-nosql-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/PouchDB"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Database
    - JavaScript
    - No Server
    - Developers
    - Interactive Exercises
    - Computer Science

description: "Use the PouchDB template to teach NoSQL document databases, Mango queries, and real-time data changes — entirely in the browser, with no server needed."
---

Relational databases are one way to store data.
Documents are another.
The [PouchDB template](https://github.com/LiaTemplates/PouchDB) brings [PouchDB](https://pouchdb.com) — a JavaScript database inspired by Apache CouchDB — directly into your LiaScript courses.

Students write JavaScript to create documents, query them with MongoDB-style selectors, react to changes, and explore geospatial data.
Everything runs in the browser using IndexedDB or in-memory storage.
No server, no driver installation, no database administration.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md
-->
```

Two macros are available: `@PouchDB.eval` for self-contained examples and `@PouchDB.terminal` for interactive sessions.
Both support the full PouchDB 9 API plus three plugins: **pouchdb-find** (Mango queries), **pouchdb-adapter-memory** (in-memory storage), and **geopouch** (geospatial queries).

> **Best practice:** Always use `{adapter: 'memory'}` in course examples and call `db.destroy()` at the end of every `@PouchDB.eval` block to keep the environment clean.

---

## Macro 1: `@PouchDB.eval` — Self-Contained Execution

Attach `@PouchDB.eval` after any JavaScript code block to execute it once and show console output.

```` markdown
```javascript
const db = new PouchDB('library', {adapter: 'memory'});

await db.bulkDocs([
  { _id: 'book1', title: 'Dune',        author: 'Herbert', year: 1965 },
  { _id: 'book2', title: 'Foundation',  author: 'Asimov',  year: 1951 },
  { _id: 'book3', title: 'Neuromancer', author: 'Gibson',  year: 1984 }
]);

const all = await db.allDocs({ include_docs: true });
all.rows.forEach(r => console.log(`${r.doc.year}: ${r.doc.title}`));

await db.destroy();
```
@PouchDB.eval
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md
-->

# PouchDB Demo – CRUD

```javascript
const db = new PouchDB('library', {adapter: 'memory'});

// Create
await db.bulkDocs([
  { _id: 'book1', title: 'Dune',        author: 'Herbert', year: 1965 },
  { _id: 'book2', title: 'Foundation',  author: 'Asimov',  year: 1951 },
  { _id: 'book3', title: 'Neuromancer', author: 'Gibson',  year: 1984 },
  { _id: 'book4', title: '1984',        author: 'Orwell',  year: 1949 }
]);

// Read all
const all = await db.allDocs({ include_docs: true });
console.log('All books:');
all.rows.forEach(r => console.log(`  ${r.doc.year}: ${r.doc.title} — ${r.doc.author}`));

await db.destroy();
```
@PouchDB.eval
{{< /liascript >}}

---

## Macro 2: `@PouchDB.terminal` — Interactive REPL

The terminal macro initializes the database with your setup code and then opens an interactive prompt.
The database state persists between commands, so students can build up data step by step.

```` markdown
```javascript
const db = new PouchDB('movies', {adapter: 'memory'});

await db.bulkDocs([
  { _id: 'movie1', title: 'Inception',    year: 2010, director: 'Nolan', rating: 8.8 },
  { _id: 'movie2', title: 'Interstellar', year: 2014, director: 'Nolan', rating: 8.6 },
  { _id: 'movie3', title: 'The Matrix',   year: 1999, director: 'Wachowski', rating: 8.7 }
]);

console.log('Database ready. Try:');
console.log('  await db.get("movie1")');
console.log('  await db.allDocs({ include_docs: true })');
```
@PouchDB.terminal
````

---

## Mango Queries

PouchDB's **pouchdb-find** plugin adds MongoDB-style declarative queries via `db.find()`.
Create an index on the fields you want to search, then use selectors:

```` markdown
```javascript
const db = new PouchDB('products', {adapter: 'memory'});

await db.bulkDocs([
  { _id: 'p1', name: 'Laptop',    price: 999, category: 'electronics' },
  { _id: 'p2', name: 'Mouse',     price:  25, category: 'electronics' },
  { _id: 'p3', name: 'Desk',      price: 299, category: 'furniture'   },
  { _id: 'p4', name: 'Monitor',   price: 349, category: 'electronics' }
]);

await db.createIndex({ index: { fields: ['category', 'price'] } });

// Find electronics under €300
const result = await db.find({
  selector: { category: 'electronics', price: { $lt: 300 } },
  sort: [{ price: 'asc' }]
});

result.docs.forEach(d => console.log(`${d.name}: €${d.price}`));

await db.destroy();
```
@PouchDB.eval
````

### Available Selector Operators

| Operator | Meaning |
|----------|---------|
| `$eq` | Equal to |
| `$gt` / `$gte` | Greater than / or equal |
| `$lt` / `$lte` | Less than / or equal |
| `$ne` | Not equal |
| `$and` / `$or` / `$not` | Logical operators |
| `$in` / `$nin` | In / not in array |
| `$exists` | Field exists |
| `$regex` | Regular expression |

Try Mango queries live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md
-->

# PouchDB Demo – Mango Queries

```javascript
const db = new PouchDB('movies', {adapter: 'memory'});

await db.bulkDocs([
  { _id: 'm1', title: 'Inception',        year: 2010, director: 'Nolan',     rating: 8.8 },
  { _id: 'm2', title: 'Interstellar',     year: 2014, director: 'Nolan',     rating: 8.6 },
  { _id: 'm3', title: 'The Matrix',       year: 1999, director: 'Wachowski', rating: 8.7 },
  { _id: 'm4', title: 'Pulp Fiction',     year: 1994, director: 'Tarantino', rating: 8.9 },
  { _id: 'm5', title: 'The Dark Knight',  year: 2008, director: 'Nolan',     rating: 9.0 }
]);

await db.createIndex({ index: { fields: ['director', 'rating'] } });

// All Nolan films sorted by rating
const result = await db.find({
  selector: { director: 'Nolan' },
  sort: [{ rating: 'desc' }]
});

console.log('Nolan films by rating:');
result.docs.forEach(m => console.log(`  ${m.rating}  ${m.title} (${m.year})`));

await db.destroy();
```
@PouchDB.eval
{{< /liascript >}}

---

## Change Feeds

PouchDB's `db.changes()` API lets you react to every database modification in real time.
This is useful for teaching reactive programming patterns and event-driven architectures.

```` markdown
```javascript
const db = new PouchDB('reactive', {adapter: 'memory'});

const feed = db.changes({
  since: 'now',
  live: true,
  include_docs: true
}).on('change', change => {
  console.log('Change:', change.doc._id, change.deleted ? '(deleted)' : '');
});

await db.put({ _id: 'doc1', value: 'first' });
await db.put({ _id: 'doc2', value: 'second' });
const doc1 = await db.get('doc1');
await db.remove(doc1);

feed.cancel();
await db.destroy();
```
@PouchDB.eval
````

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md" >}}

---

## Use Cases

**NoSQL fundamentals** — Introduce document-oriented data models: schemaless storage, JSON documents, revision tracking.
Contrast with relational models by running PouchDB and SQLite examples side by side in the same course.

**MongoDB-style queries** — Teach the Mango query language without needing a MongoDB server.
Students learn selectors, indexes, and sorting — concepts that transfer directly to MongoDB, Firebase, and Firestore.

**Event-driven and reactive programming** — Use the changes feed to demonstrate observer patterns, real-time sync, and event sourcing.

**Geospatial data literacy** — The included geopouch plugin supports bounding-box queries on GeoJSON data — useful for mapping, geography, and spatial databases courses.

**Computer science exercises** — Build a todo list, a session store, a shopping cart, or a user profile system as a self-contained in-course exercise.
No deployment needed.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — IndexedDB or in-memory |
| **Server required** | No |
| **Persistent storage** | Optional (IndexedDB) — use `{adapter: 'memory'}` for courses |
| **Query language** | Mango (MongoDB-style selectors) |
| **Geospatial** | Yes — geopouch (bounding-box queries) |
| **Change feed** | Yes — `db.changes()` |
| **Attachments** | Yes — binary data on documents |
| **Based on** | PouchDB 9.0.0 |
| **License** | ISC |
| **Maintained** | Yes (TypeScript, version 0.0.1) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/PouchDB/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/PouchDB" label="View on GitHub" >}}

---

## Related Templates

- [**Redis**](/blog/redis-key-value-in-liascript) — key-value store with rich data structures in the browser
- [**SQLite**](/blog/sqlite-sql-in-liascript) — relational SQL, useful as contrast to PouchDB's document model
- [**AlaSQL**](/blog/alasql-sql-in-liascript) — SQL over JavaScript arrays and JSON, bridges relational and document worlds
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — analytical queries over structured data
