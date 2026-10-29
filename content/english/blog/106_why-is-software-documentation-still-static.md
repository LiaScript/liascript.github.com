---
title: "Why Is Software Documentation Still Static? – WeAreDevelopers World Congress 2026"
slug: why-is-software-documentation-still-static
date: 2026-09-10
draft: false
authors:
    - André Dietrich
    - Jihad Hyadi
categories:
    - News
    - Feature
tags:
    - Video
    - AI
    - Interactive
    - Code
    - Charts
    - JavaScript
    - GitHub
    - Education
    - OER
description: "A recap of our WeAreDevelopers World Congress 2026 talk: why documentation is still static, and how LiaScript turns Markdown into an interactive, browser-native runtime for executable docs."
---

We had the chance to speak at the [WeAreDevelopers World Congress 2026](https://www.wearedevelopers.com/videos/2054-why-is-software-documentation-still-static-and-why-modern-browsers-deserve-better) (Virtual Stage) about a question that has bugged us for a while: why does software documentation still follow a one-way publishing pipeline — Markdown in, static HTML out — when it doesn't match how developers actually work? Reading, running, changing, observing, debugging: that loop happens somewhere else, never inside the docs themselves. Our answer is to stop treating the browser as a mere display device and start treating it as an application runtime, right there inside the Markdown.

## Watch the Talk

{{< youtube vNjeNjt52F0 >}}

In the talk we walk through how [LiaScript](https://liascript.github.io) turns a plain README into that kind of runtime:

* Converting static documentation into an executable environment, without leaving the page
* Embedding and running native JavaScript — including live TensorFlow.js tensor operations and neural network training
* Wiring up Chart.js for dynamic, data-bound visualizations
* Using LiaScript's macro system to cut down on boilerplate
* Capturing console output and handling asynchronous code cleanly
* Adding interactivity through sliders and responsive data binding
* Enhancing tutorials with animations and text-to-speech narration
* Publishing the whole thing as a decentralized, interactive resource straight from a Git repository

## The Slides Are the Demo

True to the talk's own argument, the slides aren't a PDF — they're a LiaScript course, published as a public, CC0-licensed repository. Every code example shown live in the talk (the TensorFlow.js demos included) is in there to read, run, and reuse.

## Try It Yourself

Here are the slides in the LiveEditor — change the Markdown on the left and see the result on the right:

{{< liascript-show "https://raw.githubusercontent.com/andre-dietrich/We-Are-Developers-2026/main/README.md" >}}

<br/>

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/andre-dietrich/We-Are-Developers-2026/main/README.md" label="Open the Interactive Slides" >}}

<br/>
<br/>

{{< button link="https://github.com/andre-dietrich/We-Are-Developers-2026" label="View the Repository on GitHub" >}}

<br/>
<br/>

{{< button link="https://www.wearedevelopers.com/videos/2054-why-is-software-documentation-still-static-and-why-modern-browsers-deserve-better" label="See the Talk on WeAreDevelopers" >}}
