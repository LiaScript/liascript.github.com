---
title: "VSCode - Editor"
meta_title: "LiaScript - VSCode Editor"
# meta description
description: "Install the VSCode editor with the LiaScript-Preview plugin."
# save as draft
draft: false
---

## Installation

To install VSCode with LiaScript follow the steps from the following Blog-post.

{{< preview "/blog/install-visual-studio-code-with-liascript">}}


## Usage

After finishing the installation, you can use <kbd>Alt</kbd> + <kbd>L</kbd> to start the [development server](https://www.npmjs.com/package/@liascript/devserver) in preview mode for your working directory directly from VSCode. This will open a new browser window with the preview of your course. Whenever you save a file, the preview will be updated automatically.

![preview.gif](https://github.com/andre-dietrich/liascript-preview-vscode/raw/main/preview.gif)





### Features

Currently there are 5 different options, which you can either activate by <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> and then type "liascript" or you use one of the following short-cuts:

* Start the development server in live mode: <kbd>Alt</kbd> + <kbd>L</kbd> - on Mac <kbd>Cmd</kbd> + <kbd>L</kbd>

  This option will start the server in the current directory and watch for changes. Every time a file is changed and saved, the preview will be reloaded automatically.
  If no file has been selected previously, then you will be presented with a folder overview, where you can open different files.

* Start the development server: <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> - on Mac <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>

  If automatically reloading might be annoying, you can use this option. It will only start the development and you will have to perform a reload of the course manually within the browser.

* Start the development server and test your course on the project-website:

  Text to speech is not enabled at the moment, but if you want to test your course on the LiaScript [project-website](https://LiaScript.github.io) this option can be used.

* Stop the development server: <kbd>Alt</kbd> + <kbd>L</kbd> + <kbd>C</kbd> - on Mac <kbd>Cmd</kbd> + <kbd>L</kbd> + <kbd>C</kbd>

  Once the server has been started, it will remain active until you close VScode or by using this command.
* Navigation:

  * from Preview to file: Simply by double-clicking onto an element on the slide
  * from cursor position to Preview: <kbd>Ctrl</kbd> + mouse-click> ... which means, simply press control and click with the mouse onto the position in the editor, which you want see at the preview
