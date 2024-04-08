---
title: Setting up Atom (Deprecated)
date: 2022-05-20
draft: false
author: André Dietrich
image: "/images/post/atom.png"
categories: ["Tutorial", "Article", "Editor"]
tags: ["LiaScript", "Tools"]

description: This post will help you to set up your Atom with the appropriate plugins to speed up your development process.
---

This post will help you to set up your [Atom](https://atom.io) with the appropriate plugins to speed up your development process. If you have not installed [Atom](https://atom.io) so far, check out our blog-post on [Install Atom with LiaScript](https://aizac.herokuapp.com/install-atom-with-liascript). It will guide you through the installation procedure for Atom and the two [LiaScript](https://liascript.github.io) plugins and tell you something about the navigation within a document. However, there exist a couple of other plugins for [Atom](https://atom.io) that are very handy and simplify the writing process for Markdown and of course [LiaScript](https://liascript.github.io)

Whether you are using [Atom](https://atom.io) or [VSCode](https://code.visualstudio.com/) as your main editor, the main keystrokes you have to remember are <kbd>Ctrl</kbd>-<kbd>S</kbd> to save the current document you are in, and the other one is <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> to get into a fuzzy search over all possible options.

### spell-check

This module is already installed by default, but for some reason, we had to enable it first for Markdown. You can either hit <kbd>Ctrl</kbd>+<kbd>,</kbd> and the settings-view will open immediately, or you can use the magic keystroke <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> to get to the fuzzy search and type `settings`. After that, hit enter and in both cases, you should be presented with a view similar to one displayed in the image below:

![spell-check](/images/post/setting-up-atom/spell-check.png)

Click onto the Packages-tab on the left, which lists all the installed packages and type `spell-check` into the main input field, or simply scroll down your list until you find it. Then click onto the settings-button for the spell-check plugin and append `, text.md` to the default list of grammar file types. Doing so, we tell [Atom](https://atom.io) to apply this plugin onto all of our Markdown files. Last but not least, you can also specify the language to check within the Locals settings. In our case, this was en-US, but any other language shortcut [(IETF-language-tag)](https://en.wikipedia.org/wiki/IETF_language_tag) is also possible. You will have to restart [Atom](https://atom.io).

However, this plugin will only use the system internal spell-checker.
If spell-checking is not working for some reason, you might have to install it manually. Please follow the instructions of the package maintainers, which can be found [here](https://atom.io/packages/spell-check).

### minimap

Minimap gives you a nice overview on your documents, as depicted below. This comes handy when you need to scroll through a larger document. Minimap will show you your position within the file, and you can click onto your minimap to navigate within your document.

To install minimap, go to the settings via <kbd>Ctrl</kbd>+<kbd>,</kbd> or hit <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> and type `settings` info the fuzzy search. Within the settings-view you will have to click onto the install-tab and type `minimap` into the search. Do not directly install the first plugin, but search for the one whose title is exactly `minimap` and then click on install. That's it, now you will be presented with a nice little map of your documents on the right.

![minimap](/images/post/setting-up-atom/minimap.png)

For more information, see the [project-page](https://atom.io/packages/minimap).

### language-markdown

Although syntax-highlighting for Markdown files should already work, you can install the `language-markdown` package too. The procedure is the same as for minimap, but this time you have to search for `language-markdown` instead. This will add additional grammar support for Markdown (including Github flavored, AtomDoc, Markdown Extra, CriticMark, YAML/TOML front-matter, and R Markdown), and smart context-aware behavior to lists, and keyboard shortcuts for inline emphasis. As shown in the demonstration below, this will automatically add new bullet-points for you, or by selecting a word or a phrase and then typing \*, \_, \`, etc. it will automatically add these annotations to your selection.


![language-markdown](/images/post/setting-up-atom/markdown.gif)

More information can be found [here](https://atom.io/packages/language-markdown).

### markdown-table-editor 

This is one of the most beautiful packages and a need for everyone who writes Markdown. It will automatically format tables, add spaces, cells, and rows for you. No need to manually hit spaces anymore. For jumping from cell to cell, simply use the <kbd>Tab</kbd> key.

![markdown-table-editor](/images/post/setting-up-atom/table.gif)

Have a look at the [project-website](https://atom.io/packages/markdown-table-editor) for a detailed description of all features.

### autocomplete-emojis

After installing this plugin, you will never have to search for a [unicode-icon or emoji](https://en.wikipedia.org/wiki/Emoji) again. Only type colon and search for the icon that you want to insert. In [LiaScript](https://liascript.github.io) you can add emojis everywhere, in titles, and even in [ASCII-Art](https://en.wikipedia.org/wiki/ASCII_art) images.

![autocomplete-emojis](/images/post/setting-up-atom/emoji.gif)

[Project-website](https://atom.io/packages/autocomplete-emojis)

### autocomplete-math

This is not only useful for Markdown. Simply write between parenthesis your mathematical formula and this plugin will perform the calculation for you. It is based on [Math.js](https://mathjs.org/index.html) and can do more than simple calculations.

![autocomplete-math](/images/post/setting-up-atom/math.gif)

It is not only possible to convert between different entities, but also to make calculation with different ones. Thereby the first entity defines the result, others will be translated into this first one.

``` markdown
(12cm to inch)      --> 4.72440944882 inch

(12days + 3months)  --> 103.3125 days

(3months + 12days)  --> 3.39425051335 months

(sin(45 deg) ^ 2)   --> 0.5
```

[Package-website](https://atom.io/packages/autocomplete-math)

## LiaScript

As mentioned in the blog post [Install Atom with LiaScript](/blog/install-atom-with-liascript), it is for us and some others at the moment not possible to update our packages. Thus, the LiaScript [snippets](https://github.com/andre-dietrich/liascript-snippets) and [preview](https://github.com/andre-dietrich/liascript-preview) plugins have to be installed from [GitHub](https://github.com). The procedure to install these two packages is similar to the installation of the previews packages. Go to the settings, select the install tab and instead of typing `liascript-snippets` or `liascript-preview` into the search field, you have to mention the [GitHub](https://github.com) repository first. In our case, these two projects are in:

https://github.com/andre-dietrich

That is why you have to insert `andre-dietrich/liascript-snippets` and `andre-dietrich/liascript-preview` to install them directly from:

* https://github.com/andre-dietrich/liascript-snippets
* https://github.com/andre-dietrich/liascript-preview

### liascript-snippets

To activate the snippets, go to a Markdown file and type `lia` all snippets are associated with this starting phrase. You can create a base stub for your course by typing `liainit` and then hitting enter. But, you can also search for quizzes, code snippets, etc. simply by typing `lia` and then searching or scrolling through the options. All snippets come with a little explanation and some examples.

There are two additional key-phrases, one is `voice` and the other one is `hili`, which stands for highlight-language. The first `voice`-phrase can be used to search through all supported voices for the text-to-speech output, currently we rely on [responsivevoice](https://responsivevoice.org) to support the same quality of spoken text on all browsers. `hili` allows you to search through all supported languages for code-snippets (e.g., cpp, java, javascript, python, ...).

![liascript-snippets](/images/post/setting-up-atom/snippets.gif)

### liascript-preview

You can either hit <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>P</kbd> and then type `liascript` into the fuzzy search to see all options for this plugin. In most cases, you want to toggle the preview for your course, that is why you also can use the short-cut <kbd>Alt</kbd>-<kbd>L</kbd>, which will either open or close the preview-pane. Whenever you make changes to your document and save them, the preview will be reloaded. Use the short-cut <kbd>Ctrl</kbd>-<kbd>S</kbd> to save your document, this is a standard and works also in Word. To navigate through your document, you can use double-clicks. If you double-click on a word within the editor, the slide for this element will be opened with the preview. If you double-click onto an element within the preview, then the cursor will jump to the respective line within the editor.

![liascript-preview](/images/post/setting-up-atom/preview.gif)

For more keyboard short-cuts, hit [Ctrl+Shift+P] or visit the [project website](https://github.com/andre-dietrich/liascript-preview).