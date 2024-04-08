---
title: "VSCode-Web - Editor"
meta_title: "LiaScript - VSCode-Web Editor"
description: "Run the VSCode-Web editor and install the LiaScript-Preview plugin."
# save as draft
draft: false
---

This is a preview module for [LiaScript](https://LiaScript.github.io) courses developed for the VSCode-Web editor, thus no installation everything is browser-based. If you have a GitHub-account simply follow the steps in the video below to for installation:

{{< youtube gyIimfPx_QM >}}

## Usage

After installing press <kbd>F1</kbd> to open the fuzzy search and type "liascript", three options will be presented:

<img src="https://raw.githubusercontent.com/andre-dietrich/liascript-preview-vscode-web/main/assets/demo.gif" style="width: 100%" />

* __LiaScript: Toggle Preview [<kbd>Alt</kbd> <kbd>L</kbd>] - (on Mac [<kbd>Cmd</kbd> <kbd>L</kbd>])__

  This will open a panel on the right side (or close it).
  The preview will be updated only with manual intervention, when you select the option "Update Preview" or hit the keyboard short-cut [<kbd>Ctrl</kbd> <kbd>S</kbd>] or when you completely reload the document without caching [<kbd>Alt</kbd> <kbd>F5</kbd>].

* __LiaScript: Toggle Preview in JIT mode [<kbd>Shift</kbd> <kbd>Alt</kbd> <kbd>L</kbd>] - (on Mac [<kbd>Shift</kbd> <kbd>Cmd</kbd> <kbd>L</kbd>])__

  The difference between this and the upper mode is, that with this option a faster update mode (Just-In-Time compilation) will be used, which will only compile the differences between the current and the previous version.
  This results in optimized update times, especially for large documents, but it also may result in glitches, when state changes of quizzes, code, etc. might be involved.
  If this happens, you simply have to reload the Preview, which will result in an entire re-interpretation of the entire document.

* __LiaScript: Update Preview [<kbd>Ctrl</kbd> <kbd>S</kbd>]__

  Reload the entire document, which is okay if you are writing Markdown, but when you import some JavaScript or CSS, then it is better to reload the entire document.

* __LiaScript: Reload Preview [<kbd>Alt</kbd> <kbd>F5</kbd>]__

  This will reload the entire document and all imported sources.
  This is the best way if you are developing JavaScript or CSS, if you only write Markdown, then use the update option, which will will only compile the document.

As an alternative you can also use the keyboard shortcuts directly.


### Navigation

__Preview to Editor:__
Double-click onto a an element within the preview and the cursor position within the editor will jump to the associated line.

__Editor to Preview:__
Currently not activated.


### Text 2 Speech

> Text to speech uses currently the internal browser text-to-speech engine.
> Depending on the browser you are using, the results might differ.


### MathJS & Formula Support

Put a equation between dollars and click on the hint to get some replacement options, or simply use it for fast calculations.

<img src="https://raw.githubusercontent.com/andre-dietrich/liascript-preview-vscode-web/main/assets/formulas.gif" style="width: 100%" />

---

$(12 km * 3 m)/(12 h)$

$2 miles to m$

$2 miles/h to km/h$

You can define a dictionary after a `%` sign, which is used as a comment.
This dictionary will then be used as a substitution for your formula.

$sin(12 x) * 33 % {x:0.5}$

A similar approach can also be used to check the result of some TeX formulas.

$12 \cdot \frac{e}{x} % {x: 2}$

---

Last but not least, the following example shall demonstrate, how one formula can be presented in different ways:  

$sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - sin(pi / 4)^2$

$sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - sin(pi / 4)^2$

$sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - sin(pi / 4)^2$
