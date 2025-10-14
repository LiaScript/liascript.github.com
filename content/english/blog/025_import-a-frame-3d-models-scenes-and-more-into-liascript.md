---
title: Import A-Frame 3D models, scenes, and more into LiaScript open-courSes
slug: import-a-frame-3d-models-scenes-and-more-into-liascript
date: 2022-05-18
draft: false
author: André Dietrich
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/A-Frame_Hello_World_example.png/800px-A-Frame_Hello_World_example.png"
categories:
    - Tutorial
tags:
    - 3D
    - Macros
    - Video

description: This blog entry presents an example of how to import A-Frame 3D models, scenes, and more into LiaScript open-courSes.
---

This blog entry presents an example of how to import A-Frame 3D models, scenes, and more into LiaScript open-courSes.

{{< youtube "PPmZZiFloS8" >}}

The entire README file can be interpreted as a library, we say template, that only needs to be imported into your LiaScript course via:

``` markdown
<!--
import: https://raw.githubusercontent.com/liaTemplates/aframe/master/README.md
-->

# Your Course
```

And then you can start to use all the features and examples that are provided in the original README file.

The idea of a template is to provide a fully functional course that also works as documentation for the implemented functionality/macros. During the initialization LiaScript will only parse the main-header of the import and load all JavaScript, CSS, defined macros and make them usable in your course.

The following link will open the course in the LiaScript editor:

{{< button link="https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/aframe/master/README.md" label="Open AFrame in LiaScript" >}}

... or take a look at the implementation within the LiaScript LiveEditor:

{{< button link="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/liaTemplates/aframe/master/README.md" label="Open AFrame in LiveEditor" >}}

or visit the implementation on GitHub:

https://github.com/liatemplates/aframe

To see an overview on all available templates, please visit:

https://github.com/topics/liascript-template