---
title: "Live - Editor"
# meta title
meta_title: "LiaScript - LiveEditor"
# save as draft
draft: false
description: "The LiveEditor is an entirely browser-based collaborative Editor. It covers nearly all functionalities of other server-based solutions, but in this case, you don't need a server nor a login."
author: André Dietrich
---

The LiveEditor is an entirely browser-based collaborative Editor. It covers nearly all functionalities of other server-based solutions, but in this case, you don't need a server nor a login.
All your notes or courses will be directly stored within your browser.

{{< button label="Try the LiveEditor" link="https://liascript.github.io/LiveEditor" style="solid" >}}

In contrast to only image-uploads you can furthermore also upload audio and video files, as shown in the video below, and use any kind of LiaScript-template to add additional functionalities. Collaboration is based on [Yjs](https://docs.yjs.dev/).

{{< youtube EZuxYsMBKO4 >}}

## Editing

The live update is deactivated to minimize computational costs and to stop errors from being show, when HTML, JavaScript is not fully written down.
You have to update the preview by your own, simply by clicking onto the compilation button at the top or, to speed up things, by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd> on your keyboard.

| Shortcut                          | Action                                             |
| --------------------------------- | -------------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>S</kbd>    | Update the preview                                 |
| <kbd>Ctrl</kbd> + <kbd>F</kbd>    | Open document search                               |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>    | Select all                                         |
| <kbd>F1</kbd>                     | Open command line pallet                           |
| <kbd>Tab</kbd>                    | Formatting and jumping through table-cells         |
| <kbd>Tab</kbd> + <kbd>Shift</kbd> | Jump to previous cells                             |
| <kbd>Ctrl</kbd> + <kbd>E</kbd>    | [MathJS](https://mathjs.org) - Evaluate expression |
| <kbd>Ctrl</kbd> + <kbd>M</kbd>    | [MathJS](https://mathjs.org) - Simplify expression |
| <kbd>Ctrl</kbd> + <kbd>O</kbd>    | [MathJS](https://mathjs.org) - To Tex-Formula      |

### Snippets

We added 4 types of snippets, that are indicated by `lia`, `hili`, `voice` and `:`.
This way you do not have to remember all details but can simply search through the different options.
One way to start a document is by typing \`liainit\` and then hitting <kbd>Enter</kbd>.
This will generate a document stub for you, which you can use as a starting point.
_When you update the preview, this help will be gone._

You have to extend the snippets-view by clicking onto the arrow on the right.
This way, more information will be presented and you can start your experiments.

1. Start typing `lia` in your markdown document to see the extended help, that can be explored via fuzzy-searching.
   Hit <kbd>Tab</kbd> or <kbd>Enter</kbd> for inserting your selected snippet.

2. To ease the `voice` selection for different narrators, start typing voice and search through all possible voice settings.

3. Syntax highlighting help is offered if you start typing `hili` followed by your language of choice.
   Since LiaScript applies the ace-editor, there is a matching done between highlight.js and ace.
   You can select your language from highlight.js, but it will be translated into the text in parentheses.

4. Use `:` to search for any kind of emoji or Unicode - symbol.

### Navigating

You can use the mouse to navigate between the editor and the preview.

1. __Preview --> Editor__:
   If you double-click on an element within the preview pane the cursor within the editor will automatically jump to the corresponding line.  

2. __Editor --> Preview__:
   Press <kbd>Ctrl</kbd> and double-click on a word with the editor, which will open the corresponding page within the preview.

</article>

## Sharing

![Sharing](images/live-editor.png)

There are multiple methods embedded to share your content:

* __Share editor ...__

  - collaboration link: For this you have the change the online status to WebRTC or WebSocket, by clicking onto the "Offline" button. Sharing this link allows you and other authors to directly collaborate on a document.
  - snapshot url: Use this, if you want to share an example within the editor. This will encode your LiaScript-content within the URL. Too long URLs might be truncated by different messaging services, so keep this in mind.
  - external resource: This will open an input field, where you can place the URL of an already existing course. This is especially useful, when you are teaching LiaScript. This way all start with the same state before they fork it. (forking means, create a new copy of the current course and store it in the browsers indexedDB)

* __Share course via ...__

  - GitHub gist link: Therefore your have to first export your course to a GitHub gist.
  - data-URI: This will use different encoding strategies to attach your course content to the URL. You should use the shortest one. This is an easy way for creating learning-nuggets, that you want to share without the necessity of storing or hosting them.
  - file URL: This will be visible if you have created or opened the editor as an external resource.

* __Download to ...__

  - README.md: This will download only the LiaScript-Markdown file.
  - Project-xxxxx.zip: If you have uploaded images or multimedia content to your browser, this will be included into the zip-file too.

* __Export to ...__

  - GitHub gist: If you have a GitHub account, this will allow to export your content directly to a GitHub gist. Currently we only support Markdown-files not the additional multimedia-content that you might have uploaded.

  If you have ideas for other export platforms, feel free to contact us or make a pull-request when you have updated the LiveEditor.

## Organization

All of your content will be visible on the main editor-page as cards, you can use a full-text search in this view, but you can also add tags to your courses and use the following attributes to change the appearance ouf the course-cards:

``` markdown
<!--
author: Your Name

content: Short description of your course ...

logo: URL to an image

tags: topic 1, topic 2, topic n
-->

# Title
```

## Multimedia

You can also upload and store multimedia-content (images, audio, video) to your browser ;-) ...
When uploading videos, you should use Chrome, the replay of local videos is somehow slow in Firefox.
If you need for example simple diagrams, you can use also the LiaScript ASCII-art features.

You can copy and paste the following example into your document:

``` markdown
                                Multiline
  1.9 |
      |                 ***
    y |               *     *
    - | r r r r r r r*r r r r*r r r r r r r
    a |             *         *
    x |            *           *
    i | B B B B B * B B B B B B * B B B B B
    s |         *                 *
      | *  * *                       * *  *
   -1 +------------------------------------
      0              x-axis               1
```


or ...

```` markdown
``` ascii
+------+   +-----+   +-----+   +-----+
|      |   |     |   |     |   |     |
| Foo  +-->| Bar +---+ Baz |<--+ Moo |
|      |   |     |   |     |   |     |
+------+   +-----+   +--+--+   +-----+
              ^         |
              |         V
.-------------+-----------------------.
| Hello here and there and everywhere |
'-------------------------------------'
```
````


## Resources

- __SourceCode on GitHub:__ https://github.com/LiaScript/LiveEditor/
- __LiveEditor:__ https://LiaScript.github.io/LiveEditor/
- __Examples:__ https://liascript.github.io/LiveEditor/examples.html