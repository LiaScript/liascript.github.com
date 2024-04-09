---
title: "We Are Developers 22 - Interactive Markdown for Education & Documentation"
date: 2022-12-07
draft: false
authors:
    - Sebatian Zug
    - André Dietrich
image: "/images/post/wearedev22.png"
categories: ["Conference", "Talk"]
tags: ["LiaScript", "YouTube", "Coding"]

description: "In this talk, we will present LiaScript, a Markdown-based DSL that is intended to be used for developing online courses, that look like screen-cast with various interactive elements."
---

Well... there is a so called OER movement - OER stands for OpenEducationalResources. In contrast to the OpenSource initiative, there is no such thing as a common or uniting (programming) language, where people can contribute peaces to a larger project.

It might sound strange, but we think that Markdown can be an ideal language candidate for e-learning. But it is mainly used to create static content, the syntax is fixed and not extendable. We tried to reinterpret Markdown and started to develop LiaScript, a WebApp that runs entirely within the browser; and just by referencing can turn any README into an interactive textbook, presentation, or screencast with an auto. narrator where:

* code-snippets can be executed & edited
* tables turn into diagrams
* native JavaScript support
* as well as quizzes, surveys, ASCII-art, etc.

LiaScript has its own macro-language, which can be used by developers to introduce new features that can be utilized in other courses.

Like it?

``` markdown
    [[X]] YES
    [[ ]] no
```

{{< youtube 2YMjXpiz0aI >}}