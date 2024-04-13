---
title: "WorldMap"
meta_title: "LiaScript - WorldMap"
image: "/images/post/world-map2.png"
date: 2024-04-12
description: "An overview on existing projects implemented with LiaScript"
draft: false
css:
    - "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
js:
    - "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
---

Since LiaScript is a distributed approach to create and share educational content, it is difficult to keep track of all the projects that are created with it.
This is why we have created a world map that shows the locations of projects that have been implemented with LiaScript so far.

<div id="map" style="height: 60vh"></div>

<script>
const map = L.map('map').setView([50.92566782800542, 13.33071481622859], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const projects = [[[50.92566782800542, 13.33071481622859], "<div><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Universitaetsbibliothek_Freiberg_Fassade.jpg/1024px-Universitaetsbibliothek_Freiberg_Fassade.jpg\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>Arbeitsgruppe Softwareentwicklung und Robotik</h5><div style=\"max-height: 100px; overflow: auto\">Alle Lehrmaterialien der Arbeitsgruppe wurden mit LiaScript erstellt und sind im interaktiven\nModus \u00fcber die untenstehenden Links erreichbar.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://tubaf-ifi-liascript.github.io\">https://tubaf-ifi-liascript.github.io</a></div>"]]

for(let [gps,card] of projects) {
    L.marker(gps).addTo(map).bindPopup(card);
}
</script>

If you want to add your project to this map, please follow the instructions in the blog post:

{{< button link="/blog/liascript-world-map" label="contribute" >}}

... or leave us a comment ;-)

More information about the projects and a search will be embedded in the near future.
