---
title: "SpreadSheet for LiaScript: Excel-Style Interactive Tables in Your Course"
slug: "spreadsheet-excel-tables-in-liascript"
date: 2026-05-28
draft: false
author: "André Dietrich"
image: "https://opengraph.githubassets.com/1/LiaTemplates/SpreadSheet"
categories:
    - Template
    - Tutorial
tags:
    - Templates
    - Interactive Exercises
    - Data Science
    - Teachers
    - No Server
liascript: true

description: "Embed fully interactive spreadsheets with formulas, dropdowns, checkboxes, and multiple worksheets directly in LiaScript — powered by JSSpreadsheet, no backend required."
---

Interactive data tables are a staple of business, science, and data literacy education.
The [SpreadSheet template](https://github.com/LiaTemplates/SpreadSheet) brings [JSSpreadsheet (jspreadsheet.js)](https://jspreadsheet.com/) into LiaScript, enabling student-editable tables with Excel-style formulas, dropdown selectors, checkboxes, sorting, search, and persistence — all without a server.

---

## Quick Start

``` markdown
<!--
import: https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/refs/heads/main/README.md
-->
```

---

## Macro: `@spreadsheet` (in fence header)

Place `@spreadsheet` in the header of a JSON code block.
The JSON block defines worksheets, column types, and data.

```` markdown
```json @spreadsheet
{
  "worksheets": [{
    "data": [
      ["Task", "Owner", "Done?"],
      ["Write course", "You", true],
      ["Review draft", "Me", false]
    ],
    "columns": [
      { "type": "text",     "title": "Task",  "width": 200 },
      { "type": "dropdown", "title": "Owner", "source": ["You","Me","Both"] },
      { "type": "checkbox", "title": "Done?" }
    ],
    "worksheetName": "Project Tracker"
  }]
}
```
````

---

## Column Types

| Type | Description |
|---|---|
| `"text"` | Free text input |
| `"numeric"` | Number input (right-aligned) |
| `"dropdown"` | Select from list (use `"source": [...]`) |
| `"checkbox"` | Boolean toggle |
| `"calendar"` | Date picker |
| `"image"` | Image URL cell |
| `"color"` | Color picker |

---

## Excel Formulas

JSSpreadsheet supports Excel-style formulas.
Write formulas as cell content in `"data"`:

```` markdown
```json @spreadsheet
{
  "worksheets": [{
    "data": [
      ["Q1", "Q2", "Q3", "Q4", "Total"],
      [1200, 1400, 900, 1600, "=SUM(A2:D2)"],
      [800, 1100, 750, 1300, "=SUM(A3:D3)"],
      ["=SUM(A2:A3)", "=SUM(B2:B3)", "=SUM(C2:C3)", "=SUM(D2:D3)", "=SUM(E2:E3)"]
    ],
    "columns": [
      { "type": "numeric", "title": "Q1" },
      { "type": "numeric", "title": "Q2" },
      { "type": "numeric", "title": "Q3" },
      { "type": "numeric", "title": "Q4" },
      { "type": "numeric", "title": "Total" }
    ],
    "worksheetName": "Sales Data"
  }]
}
```
````

---

## Multiple Worksheets

Add more objects to the `"worksheets"` array:

```` markdown
```json @spreadsheet
{
  "worksheets": [
    {
      "data": [["Name","Score"],[" Alice",95],["Bob",82]],
      "columns": [{"type":"text","title":"Name"},{"type":"numeric","title":"Score"}],
      "worksheetName": "Class A"
    },
    {
      "data": [["Name","Score"],[" Carol",88],["Dave",76]],
      "columns": [{"type":"text","title":"Name"},{"type":"numeric","title":"Score"}],
      "worksheetName": "Class B"
    }
  ]
}
```
````

---

## Persistence

Add `persistent: true` to the LiaScript slide header to save student edits:

``` markdown
# My Sheet
<!-- persistent: true -->

@spreadsheet
```

The data is stored in `localStorage` and restored on the next visit.

---

## Full Template Demo

{{< liascript-show "https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/main/README.md" >}}

---

## Use Cases

**Data literacy and statistics** — Students enter and calculate with real datasets using familiar spreadsheet interaction.
Formulas make the calculations transparent and editable.

**Business and economics courses** — Budget simulations, break-even analysis, and financial modeling without needing Excel.

**Science labs** — Enter measurement results in a structured table; formulas compute averages, standard deviation, and error margins.

**Project management training** — Use checkbox and dropdown columns for task assignment and status tracking exercises.

**Language and humanities** — Use text columns for vocabulary tables, grammar tables, and annotation matrices.

---

## Technical Facts

| | |
|---|---|
| **Runs in browser** | Yes — fully client-side |
| **Server required** | No |
| **Formulas** | Yes — Excel-compatible |
| **Multiple sheets** | Yes — tabs |
| **Search & sort** | Yes — built in |
| **Persistence** | Yes — `persistent: true` |
| **Column types** | text, numeric, dropdown, checkbox, calendar, image, color |
| **Based on** | JSSpreadsheet (jspreadsheet.js) |
| **License** | MIT |
| **Maintained** | Version 0.0.1 |

---

## Try It

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/main/README.md" label="Try in LiaScript" >}}

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/main/README.md" label="Open in LiveEditor" >}}

{{< button link="https://github.com/LiaTemplates/SpreadSheet" label="View on GitHub" >}}

---

## Related Templates

- [**Random**](/blog/random-quiz-banks-in-liascript) — randomized exercise pools from larger question banks
- [**TextAnalysis**](/blog/textanalysis-readability-in-liascript) — analyze and grade text complexity
- [**Chart.js**](/blog/chartjs-data-visualization-in-liascript) — visualize spreadsheet data as bar, line, or pie charts
