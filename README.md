# LiaScript - Website

This is the source code of the LiaScript website, which is based on the Hugo framework. The website is hosted on GitHub pages and can be found at [https://liascript.github.io](https://liascript.github.io).

## Installation

1. Install Hugo: [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/)
2. Clone this repository: `git clone https://github.com/liaScript/liascript.github.com`
3. Change into the directory: `cd liascript.github.com`
4. Run the installation: `npm install`
5. Run the Hugo server: `npm run dev`

   WebServer is available at: [http://localhost:1313](http://localhost:1313)

6. Build via `npm run build`

## Contributing

New posts can be added by creating a new markdown file in the `content/english/blog` directory. The markdown file should have the following front matter:

```markdown
---
title: "Title of the Post"
date: 2023-05-03
draft: false
author: "Author Name"
image: "/images/post/image.jpg"
categories:
    - Examples
tags:
    - LiaScript
    - ...
description: "Description of the post"
---
```

The content of the post can be written in markdown format below the front matter.

Images should be placed in the `assets/images` or `assets/images/post` directory.

The website is afterwards served from the `docs` directory, which is the default directory for GitHub pages.