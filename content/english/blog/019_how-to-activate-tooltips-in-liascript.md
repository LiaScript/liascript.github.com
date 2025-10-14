---
title: How to activate Tooltips in LiaScript
slug: how-to-activate-tooltips-in-liascript
date: 2022-01-24
draft: false
author: André Dietrich
image: "/images/post/tooltips.jpg"
categories:
    - Feature
tags:
    - Tooltips
    - Video

description: LiaScript has a new tooltip feature, which was inspired by the Wikipedia tooltips, which provide more information about a certain topic if you hover a link with the mouse.
---


[LiaScript](https://liascript.github.io) has a new [tooltip](https://en.wikipedia.org/wiki/Tooltip) feature, which was inspired by the Wikipedia tooltips, which provide more information about a certain topic if you hover a link with the mouse. In [LiaScript](https://liascript.github.io) this feature needs to be activated manually, since it requires a little additional bandwidth, but the result is pretty much the same as in [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia). 

To activate tooltips:

- open the settings-tab
- check the tooltips check-box

This additional bandwidth is required, since the tooltips are generated on-demand and also without any backend involved. The source-code can be found [here](https://github.com/LiaScript/LiaScript/tree/development/src/typescript/webcomponents/tooltip). What it basically does is, it queries the every link only for the main `index.html` and tries to analyze the HTML-file according to different patterns. All results are stored in a central cache, that is why the first loading might take some time, but all subsequent calls will use the already cached result. Additionally the links on the presented tooltip-card are also clickable like Wikipedia.

{{< youtube qdkyJXLNvfk >}}
