---
title: "LiaScript - WorldMap"
slug: liascript-world-map
date: 2024-04-12
image: "/images/post/world-map.png"
author: "André Dietrich"
categories:
    - Community
tags:
    - Sharing
    - Collaboration
draft: false

description: "Where can you store your course content and how can you host it for free..."
---

This idea was motivated by the [OER-World Map](https://www.youtube.com/watch?v=VLcd41vLDGs) in order to to visualize the distribution of educational content that was created with LiaScript or events and meetings. Our map is based on the [OpenStreetMap](https://www.openstreetmap.org/#map=7/51.330/10.453) and uses the [Leaflet](https://leafletjs.com/) library to display the markers.
Blue is associated to projects, while future events are displayed in green and past events in transparent gray.

{{< button link="/world-map" label="visit the world-map" >}}

All information about the projects is stored within a static YAML-file:

https://github.com/liascript/liascript.github.com/world-map/projects.yml

If you want to add your project to this map, the easiest way is to send us an email with the following information, or leave a comment:

``` yaml
- title: "Your Project Title"
  link: "https://link-to-your-project.web"
  gps:
    latitude: 51.330
    longitude: 10.453
  image: "https://link-to-your-image.jpg"
  icon: "https://link-to-your-organization-icon.png"
  description: |
    This can be a description of your project where you can also embed HTML,
    with more links or contact information
    <a href="mailto:LiaScript@web.de>Send us an email</a>
  data: "2024-04-12"
  categories:
    - Computer Science
    - Statistics
    - Machine Learning
  tags:
    - Need Help
    - Looking for Contributors
    - German  
```

We will add your information to `projects.yml` and update the map.

> The only information that is mandatory is the `title`, `link`, and `gps`. The `image` is optional, but it will make your project more visible. The `description` can be a short text or a long description, and you can also embed HTML, like links or images. The `categories` and `tags` are optional too, but they will help to filter the projects later on the map. And finally, the `icon` is optional, and we will later use this to modify the markers on the map, which can be a logo of your institution, project, or company. `date` is optional and will be used to classify markers to projects or events.

Otherwise you can also fork the repository `https://github.com/liascript/liascript.github.com`, add your project by yourself and create a pull request. This way you will also be visible in the list of contributors on GitHub 😉

If you host your project on GitHub you can also take a look at the following post to increase its visibility:

{{< preview "/blog/027_promoting-your-content/" >}}

#### Preview Changes

If you have forked the repository, you can also preview your changes locally. At first follow the installation instruction as described in the [README.md](https://github.com/LiaScript/liascript.github.com/blob/master/README.md) of the repository.
Then run the following commands in the root directory of the repository:

``` bash
cd world-map
python3 generate.py
cd ..
npm run dev
```

The python command will generate the content/english/pages/world-map.md file. You can preview the changes by opening the browser and navigating to:

[http://localhost:1313/world-map/](http://localhost:1313/world-map/)

#### Credits & Stand with Ukraine

As aforementioned, the map the [Leaflet](https://leafletjs.com/) library, which was developed by Volodymyr Agafonkin a Ukrainian developer still living in Kiev. You might take a look at his personal website to see how you might support him and Ukraine...

https://agafonkin.com/

