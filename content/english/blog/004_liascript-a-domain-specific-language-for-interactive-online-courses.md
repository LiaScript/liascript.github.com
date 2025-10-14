---
title: "LiaScript: a domain-specific-language for interactive online courses"
slug: liascript-a-domain-specific-language-for-interactive-online-courses
date: 2019-09-19
draft: false
author: André Dietrich
image: "/images/post/mccsis.png"
categories:
  - News
  - Documentation
tags:
  - OER
  - Education
  - Video
  - Markdown

description: "Interactive conference paper for the eLearning 2019 conference in Porto"
---

This is the first paper published about LiaScript, which was presented at the _International Association for Development of the Information Society (IADIS) International Conference on e-Learning 2019_ in Porto. It gives an overview of the language and its features, as well as the motivation behind its development.

__Abstract.__ LiaScript is an attempt to enable everyone to create free and interactive online courses, without the need of being an experienced programmer. Instead, it aims to bring both parties, software-and course-developers, closer together by introducing Open-Source techniques into the Open-courSe development process. LiaScript was designed to be compatible to Common-Markdown, but it introduces lots of language extensions that deal with quizzes, surveys, ASCII-art, text2speech, animations, online programming, the integration of JavaScript, etc. as well as its own macro-system that simplifies tedious and repetitive tasks. It comes along with its own just-in-time compiler that runs in the browser and therefor does not require additional tooling.

[download](https://files.eric.ed.gov/fulltext/ED621589.pdf) / [liascript](https://liascript.github.io/course/?https://raw.githubusercontent.com/andre-dietrich/e-Learning-2019/master/README.md) / [github](https://github.com/LiaScript/LiaScript)

{{< accordion "bibtex" >}}

``` bibtex
@InProceedings{dietrich2019,
  author    = {Andr\'e Dietrich},
  title     = {LiaScript: a domain-specific-language for interactive online courses},
  booktitle = {Proceedings of the International Conference on e-Learning 2019},
  year      = {2019},
  pages     = {186--194},
  address   = {Porto, Portugal}
}
```

{{< /accordion >}}

> The video recording below was made at the 7th of April in 2024. I am looking back at the conference with a smile, remembering that the best presentation award was a publication that made calculations and estimates about the real prices of developing online courses and MOOCs with traditional tools and systems... The same document that I wrote 5 years ago, is still there, it can be still used. The document did not change, while we constantly improve the interpreter.

{{< youtube b3CQC8HUG84 >}}

Click on the link below to try out this interactive paper in LiaScript by your own:

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/andre-dietrich/e-Learning-2019/master/README.md" label="try it out">}}
