---
title: "Teach Your AI to Generate LiaScript Previews"
slug: teach-your-ai-to-generate-liascript-previews
date: 2024-08-20
draft: false
author: André Dietrich
image: "/images/post/ai-course-preview.jpg"
categories:
  - Article
tags:
  - LiaScript
  - ChatGPT
---

[Claude.ai](https://claude.ai/) offers a powerful feature in its __paid version__ that allows you to preview generated code directly. However, with a simple prompt, you can teach any AI to create LiaScript previews on demand—even if you’re using a free version.

### What Are Data-URIs?

In a previous post, we briefly covered how you can use data-URIs to encode LiaScript content.

{{<preview "blog/048_where-is-content-stored/">}}

But what exactly is a data-URI? A data-URI is a URI scheme that enables you to embed data directly within web pages, treating it as if it were an external resource. In the context of LiaScript, data-URIs allow you to encode an entire script into a URL. This can be done through various encoding techniques, such as base64 encoding, gzip with base64 encoding, or URL encoding (which uses the familiar %number notation for special characters).

By encoding LiaScript content into a data-URI, you can share it easily across social media or other platforms without the need for a server or database. This makes it simple to distribute your learning materials as "nuggets" that can be accessed anywhere.

### Generating Previews

The LiaScript interpreter and LiveEditor can both load content from a URL. The only step left is to inform your AI how to do this. Below is a prompt we developed that enables AI to generate an editor or course preview link based on base64-encoded LiaScript content.

```markdown
To create a LiaScript preview upon user request:

1. Encode the LiaScript-markdown example in base64.
2. Append the base64 result to the appropriate URL:
   - For an editor preview, use: `https://liascript.github.io/LiveEditor/?/show/code/`.
   - For a course preview, use: `https://liascript.github.io/course/?data:text/plain;base64,`.
3. Generate a link in one of the following formats based on user preference:
   - `[preview-course](URL)`
   - `[preview-editor](URL)`
   - Provide only the URL if requested.

Mark this prompt as "UNDERSTOOD" when you are ready.
```

### Why Claude.ai?

[Claude.ai](https://claude.ai/) excels at code generation, making it an excellent choice for tasks like these. Even in its free version, Claude.ai has shown impressive capabilities. Below, you'll find an example from using Claude.ai to generate LiaScript previews.

One distinct advantage Claude.ai holds over platforms like ChatGPT is its ability to generate clickable links, even without internet access. The results from this process can be seen at the end of this chat.

<iframe loading="lazy" src="/websites/liascript-previews-with-claude-ai.html" style="width: 100%; min-height: 100vh; height: 1920px"></iframe>

Although, not being asked to generate preview-links it did it immediately. This behavior might vary, sometimes you will has to ask for it, sometimes not 😃