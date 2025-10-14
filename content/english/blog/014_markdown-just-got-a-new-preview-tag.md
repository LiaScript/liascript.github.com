---
title: "Markdown just got a new preview tag"
slug: markdown-just-got-a-new-preview-tag
date: 2020-09-30
draft: false

author: André Dietrich

description: Create a link preview from your Markdown documents and LiaScript courses.

image: "/images/post/preview.jpg"

categories:
  - Feature
tags:
  - Markdown
  - Preview

description: "Create a link preview from your Markdown documents and LiaScript courses."

---

LiaScript has a new link type/tag that allows you to add preview cards to your LiaScript course or even to your personal website. This way you do not have to update your personal website and other resources.


### Requirements and Usage

First of all, your Markdown document must have an HTML comment tag at the beginning. If your document is on GitHub, this will not be visible on the rendered Markdown document. This first comment contains any kind of meta information, such as `author`, `email`, `version`, `logo`, `comment`, and if you want to, also `tags`. These are at the moment all information, that will be visible on your card, as well as the Main title of your document. You can skip the rest, it is only relevant if you want to make your Markdown document interactive with LiaScript.

``` markdown
<!--
author:   André Dietrich
email:    LiaScript@web.de
version:  0.0.1

tags:     LiaScript, education, OER

logo:     https://liascript.github.io/img/bg-showcase-1.jpg

comment:  This document shall provide an entire compendium and course on the
          development of Open-courSes with [LiaScript](https://LiaScript.github.io).
          As the language and the systems grows, also this document will be updated.
          Feel free to fork or copy it.

script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js
          https://felixhao28.github.io/JSCPP/dist/JSCPP.es5.min.js

link: https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css
link: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css

translation: Deutsch  translations/German.md
translation: Français translations/French.md
translation: Русский  translations/Russian.md

-->

# Main Title

...

[preview-lia](https://raw.githubusercontent.com/liaScript/docs/master/README.md)

[Preview-Lia](https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md)
```

If you want to add a preview into your LiaScript course, simply add a Markdown link with the name `preview-lia` with a URL that is either pointing to the raw Markdown file or to the LiaScript interpreter. It depends on what you want your link should point, if you are using other Markdown tools.

The example below, shows an example for the LiaScipt documentation:

<preview-lia src="https://raw.githubusercontent.com/liaScript/docs/master/README.md"></preview-lia>

### Using Previews on your Website

If you want to make this functionality available on your site, will have to include the `preview-lia` web component, by adding the script tag, as it is depicted below, to the `head` of your HTML website. Then it is possible to use the tag `<preview-lia>` everywhere on your site. Use either the address of the raw document or the reference to the interactive LiaScript course. The application of both tags is equal to their application in Markdown.

``` html
<html>
  <head>
    <script type="text/javascript" src="https://liascript.github.io/course/preview-lia.js"></script>
  </head>
  <body>
    ...
    <preview-lia src="https://raw.githubusercontent.com/liaScript/docs/master/README.md">
    </preview-lia>

    <preview-lia src="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaScript/docs/master/README.md">
    </preview-lia>

    ...
  </body>
</html>
```

If you want your preview to point to another direction and not to LiaScript website, it is also possible to change the goto reference by adding the attribute `link` to the web component. Add what ever target link you want to point to, either to the GitHub-repository, to the project website or anywhere else.

``` html
<preview-lia link="https://github.com/liascript/docs"
src="https://raw.githubusercontent.com/liaScript/docs/master/README.md"
></preview-lia>
```

### Adding this web component to Ghost

Go to your ghost blog website, click on `< > Code injection` in your settings, and add the following script tag to the **Site Header** field. That's it, now you can add the `<preview-lia>` tag in all of your posts and pages into the HTML content.

``` html
<script type="text/javascript" src="https://liascript.github.io/course/preview-lia.js"></script>
```

![Preview](/images/post/ghost.png)

### How does it work?

Under the hood, this is a simple web component that grabs the markdown content and parses only the meta information and the first title. Everything happens within the browser at client-side.

The web component was originally developed as part of LiaScript, the entire project can be found here:

https://github.com/LiaScript/LiaScript

While the part, that implements the web component can be found here:

https://github.com/LiaScript/LiaScript/blob/master/src/javascript/webcomponents/preview-lia.js

The style of the presented preview will change in the near future, and probably also the parts that will be shown to the audience. Any suggestions and improvements are welcome ;)

### Examples

<preview-lia src="https://raw.githubusercontent.com/LiaBooks/C-Programming/master/README.md"></preview-lia>
<preview-lia src="https://raw.githubusercontent.com/liaBooks/Lua-Programming/master/README.md"></preview-lia>
<preview-lia src="https://raw.githubusercontent.com/LiaBooks/SisterFoxAndTheGrayWolf/master/README.md"></preview-lia>

