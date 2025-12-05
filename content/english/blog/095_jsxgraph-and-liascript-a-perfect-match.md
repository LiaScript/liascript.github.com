---
title: "JSXGraph & LiaScript ... a Perfect Match"
date: 2025-10-15
draft: false
image: "https://jsxgraph.uni-bayreuth.de/home/media/conferences/conf2025.png"
tags:
    - OER
    - Interactive
    - Charts
    - JavaScript
    - Macros
    - Code
    - Education
    - Video
    - Visualization
categories:
    - News
    - Feature
author: "André Dietrich"
description: "Discover how JSXGraph integrates seamlessly with LiaScript through a powerful extension system, enabling interactive mathematical visualizations and dynamic geometry directly in your educational content. Presented at JSXGraph Conference 2025."
---

As you know, [LiaScript](https://liascript.github.io) is an extension for Markdown that was developed as a language for easy and decentralized creation of interactive online courses—in short, a language for OER. It adds various features to Markdown which were previously missing, such as the integration of multimedia content, oEmbed sites, the execution of script tags, animations in combination with text-to-speech output to generate a mixture between screencast and interactive textbooks. It does not require an additional compilation step, since the content is directly interpreted within the browser. Additionally, other Markdown dialects often lack the ability to extend the language; in LiaScript this is possible with an additional macro syntax which allows for integrating and mixing external JavaScript, CSS, plus the LiaScript Markdown language.

We have therefore added a [JSXGraph extension](https://github.com/LiaTemplates/JSXGraph), which is in itself a Markdown file that only has to be imported into the header of a document. This README is itself self-describing documentation. Afterwards, it is possible to use different JSXGraph extensions directly within code blocks, which are indicated by the `@JSX.Graph...` macros.

We have presented this integration at the JSXGraph Conference 2025 in Bayreuth, Germany.
Check out the conference page for more information:

{{< button link="https://jsxgraph.org/conf2025/" label="JSXGraph Conference 2025" >}}


See the complete presentation about the integration of JSXGraph into LiaScript at the [JSXGraph Conference 2025](https://jsxgraph.org/conf2025/) here:

{{< youtube 0A3OuQv3sdk >}}

You can try out this example directly in the LiveEditor:

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaPlayground/JSXGraph-LiaScript...a-prefect-Match/refs/heads/main/README.md"></iframe>

