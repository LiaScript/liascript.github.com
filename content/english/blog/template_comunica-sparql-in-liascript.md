---
title: "Comunica for LiaScript: Run SPARQL Queries and Explore Knowledge Graphs"
slug: "comunica-sparql-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/Comunica"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - SPARQL
    - Semantic Web
    - Database
    - Higher Education
    - Developers
    - No Server

liascript: true

description: "Use the Comunica template to write and execute SPARQL queries against live knowledge graphs and custom RDF datasets — directly in your LiaScript course, with no server needed."
---

The [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) and [Linked Open Data](https://en.wikipedia.org/wiki/Linked_data) are among the richest topics in computer science and information science — but teaching SPARQL interactively has always required running a server.

The [Comunica template](https://github.com/LiaTemplates/Comunica) changes that.
Built on [Comunica](https://comunica.dev), a flexible open-source knowledge graph querying framework, this LiaScript template lets you write and execute SPARQL queries, define custom RDF datasets in Turtle notation, and query real-world knowledge graphs — all directly in the browser, without any backend or configuration.

---

## What Is SPARQL?

[SPARQL](https://en.wikipedia.org/wiki/SPARQL) is the standard query language for RDF data — think SQL, but for knowledge graphs.
Instead of rows and columns, you work with subject–predicate–object triples.
SPARQL queries live knowledge graphs like [DBpedia](https://dbpedia.org) and [Wikidata](https://wikidata.org), as well as countless domain-specific open datasets.

The Comunica template makes every code block in your LiaScript course a fully executable SPARQL editor — learners can run and modify queries without leaving the page.

---

## Quick Start

Add the import to your course header:

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md
-->
```

For a version-stable import (recommended for published courses):

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md
-->
```

That's it. Both macros — `@Comunica.SPARQL` and `@Comunica.RDF_SPARQL` — are now available throughout your document.

---

## Macro 1: `@Comunica.SPARQL` — Query Live Endpoints

The core macro turns any `sparql` code block into an interactive SPARQL editor.
Add a `# source:` comment to specify the endpoint, then attach `@Comunica.SPARQL` after the closing fence:

```` markdown
``` sparql
# source: https://fragments.dbpedia.org/2015/en

SELECT ?s ?p ?o WHERE {
  ?s ?p <http://dbpedia.org/resource/Belgium>.
  ?s ?p ?o
} LIMIT 10
```
@Comunica.SPARQL
````

Try it live:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md
-->

# Comunica Demo – SPARQL Query

``` sparql
# source: https://fragments.dbpedia.org/2015/en

SELECT ?s ?p ?o WHERE {
  ?s ?p <http://dbpedia.org/resource/Belgium>.
  ?s ?p ?o
} LIMIT 10
```
@Comunica.SPARQL
{{< /liascript >}}

### Multiple Sources

You can query across multiple endpoints simultaneously — just add multiple `# source:` comments:

```` markdown
``` sparql
# source: https://fragments.dbpedia.org/2015/en
# source: https://ruben.verborgh.org/profile/

SELECT ?s ?p ?o WHERE {
  ?s ?p <http://dbpedia.org/resource/Belgium>.
  ?s ?p ?o
} LIMIT 5
```
@Comunica.SPARQL
````

### Output Formats

The default output is a `table`.
Override it with a `# format:` comment inside the code block:

| Format | Description |
|--------|-------------|
| `table` | Text-based visual table (default) |
| `simple` | Plain text result |
| `application/json` | Simplified JSON |
| `application/sparql-results+json` | Standard SPARQL/JSON |
| `text/csv` | CSV output |
| `text/tab-separated-values` | TSV output |

Example:

```` markdown
``` sparql
# format: simple
# source: https://fragments.dbpedia.org/2015/en

SELECT ?s ?p ?o WHERE {
  ?s ?p <http://dbpedia.org/resource/Ukraine>.
  ?s ?p ?o
} LIMIT 5
```
@Comunica.SPARQL
````

---

## Macro 2: `@Comunica.RDF_SPARQL` — Query Custom RDF Data

The second macro combines two adjacent code blocks:
the first defines your own RDF dataset in [Turtle notation](https://en.wikipedia.org/wiki/Turtle_%28syntax%29), the second contains your SPARQL query.
Both are attached together with `@Comunica.RDF_SPARQL`:

```` markdown
``` turtle       Turtle
@prefix ex:   <http://example.org/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

ex:Dog    rdfs:subClassOf ex:Animal .
ex:Person rdfs:subClassOf ex:Animal .

ex:Max    a ex:Dog .
ex:Alice  a ex:Person .
ex:Bob    a ex:Person ;
          ex:hasChild ex:Alice .
```
``` sparql       -SPARQL-Query
PREFIX ex:   <http://example.org/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?subject ?type WHERE {
  ?subject a ?type .
}
```
@Comunica.RDF_SPARQL
````

The text after the language name (e.g., `Turtle`, `-SPARQL-Query`) becomes the code block's title.
A leading `-` means the editor starts collapsed; a leading `+` means expanded.

Try a live example with a small family dataset:

{{< liascript mode="preview" >}}
<!--
import: https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md
-->

# Comunica Demo – Custom RDF + SPARQL

``` turtle       Turtle
@prefix ex:  <http://example.org/family#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

ex:Alice  a ex:Person ;
          ex:name "Alice" ;
          ex:hasChild ex:Bob, ex:Carol .
ex:Bob    a ex:Person ;
          ex:name "Bob" .
ex:Carol  a ex:Person ;
          ex:name "Carol" .
```
``` sparql       -SPARQL-Query
PREFIX ex: <http://example.org/family#>

SELECT ?parent ?parentName ?child ?childName WHERE {
  ?parent ex:hasChild ?child .
  ?parent ex:name ?parentName .
  ?child  ex:name ?childName .
}
```
@Comunica.RDF_SPARQL
{{< /liascript >}}

It is still possible to add `# source:` or `# format:` comments inside the SPARQL block when using `@Comunica.RDF_SPARQL` — the local Turtle data and any live endpoint sources are queried together.

---

## Full Template Demo

The full Comunica README is itself a self-documenting LiaScript course.
Explore all macros, output formats, and examples live:

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md" >}}

---

## Use Cases

**Semantic Web and Linked Data courses** — Teach SPARQL syntax interactively: students write queries, run them against DBpedia or Wikidata, and see results immediately.
No endpoint setup, no local triple store required.

**Research Data Management** — Build exercises around real RDF datasets — library catalogues, research object metadata, institutional knowledge graphs.
Use `@Comunica.RDF_SPARQL` with custom Turtle snippets to illustrate data modelling and schema design.

**Ontology and knowledge representation** — Introduce class hierarchies, property inheritance, and OWL reasoning with small, self-contained Turtle examples.
Students can edit both the data and the query and observe how changes propagate.

**Information literacy and open data** — Let learners explore real open data sources: DBpedia, GeoNames, the Linked Open Data Cloud.
Turn abstract graph theory into hands-on data exploration inside an open course.

**Computer science seminars** — Use `@Comunica.RDF_SPARQL` to illustrate RDF modelling patterns, federated queries, and the difference between schema and instance data — all without any local installation.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side (JavaScript / WebAssembly) |
| **Server required** | No (for local RDF data); external endpoints are optional |
| **Interactive editing** | Yes — both query and Turtle data are editable |
| **External API** | Only when querying a live endpoint |
| **Offline capable** | Partially — local RDF works offline; live endpoints need network |
| **Based on** | [Comunica](https://comunica.dev) v5 |
| **License** | Apache-2.0 |
| **Maintained** | Yes (TypeScript, version 0.0.3) |
| **Version-stable import** | Yes (`0.0.3` tag available) |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Comunica/0.0.3/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/Comunica" label="View on GitHub" >}}

---

## Related Templates

- [**SQLite**](/blog/sqlite-sql-in-liascript) — interactive SQL with a full SQLite database in the browser
- [**DuckDB**](/blog/duckdb-analytics-in-liascript) — analytical SQL queries with DuckDB WASM
- [**AlaSQL**](/blog/alasql-sql-in-liascript) — lightweight in-browser SQL + NoSQL
- [**Wikimedia**](/blog/wikimedia-commons-in-liascript) — embed open knowledge and media from Wikimedia Commons
