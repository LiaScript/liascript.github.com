---
title: "Atom - Editor"

meta_title: "LiaScript - Atom Editor"
description: "Install the Atom editor with the LiaScript-Preview plugin."
# save as draft
draft: false
---

Although, the Atom editor is not actively maintained anymore, it is still a great editor for writing Markdown documents. Especially if your are dealing with very large documents, the Atom editor outperforms other editors like VS-Code. We still use the Atom editor for our documentation:

https://github.com/liascript/docs

<img src="https://raw.githubusercontent.com/andre-dietrich/liascript-preview/master/preview.gif" style="width: 100%">

## Installation

To install the Atom editor together with the LiaScript-Preview plugin, follow the instructions in the following blog post:

{{< preview "/blog/install-atom-with-liascript" >}}

To set up the Atom editor for a better writing experience, follow the instructions in the following blog post:

{{< preview "/blog/setting-up-atom/" >}}

## Features

* Autoreload on save
* Toggle Preview
* History navigation
* Resizing
* Syncing in both directions via double-clicking
* Separate Dev-Tools
* Experimental jit-compiler



### Keyboard - Shortcuts


| Shortcut                                      | Action                                          |
| --------------------------------------------- | ----------------------------------------------- |
| <kbd>Alt</kbd> + <kbd>L</kbd>                 | Toggle preview                                  |
| <kbd>F5</kbd>                                 | Reload preview                                  |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>                | Save Markdown and update preview                |
| <kbd>Alt</kbd> + <kbd>Left</kbd>              | Go back in the browser history                  |
| <kbd>Alt</kbd> + <kbd>Right</kbd>             | Go forward in the browser history               |
| <kbd>Ctrl</kbd> + <kbd>+</kbd>                | Zoom-in with 10% steps                          |
| <kbd>Ctrl</kbd> + <kbd>-</kbd>                | Zoom-out with 10% steps                         |
| <kbd>Ctrl</kbd> + <kbd>0</kbd>                | Reset zoom to original (100%)                   |
| <kbd>Ctrl</kbd> + <kbd>R</kbd>                | Reset all stored settings, codes, quizzes, etc. |
| <kbd>Ctrl</kbd> + <kbd>N</kbd>                | Open LiaScript in browser window                |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> + <kbd>I</kbd> | Open Dev Tools for LiaScript-webview            |



## Related Projects

It is recommended to install also:

[liascript-snippets](https://github.com/andre-dietrich/liascript-snippets)

A collection of short-codes for mor efficient course generation.