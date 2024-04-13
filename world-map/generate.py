from string import Template
from datetime import datetime
import yaml
import json


TITLE = "WorldMap"
DATE = datetime.today().strftime("%Y-%m-%d")
DESCRIPTION = "An overview on existing projects implemented with LiaScript"


header = Template("""---
title: "$title"
meta_title: "LiaScript - $title"
image: "/images/post/world-map2.png"
date: $date
description: "$description"
draft: false
css:
    - "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
js:
    - "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
---

Since LiaScript is a distributed approach to create and share educational content, it is difficult to keep track of all the projects that are created with it.
This is why we have created a world map that shows the locations of projects that have been implemented with LiaScript so far.
""")
                  
script = Template("""
<div id="map" style="height: 60vh"></div>

<script>
const map = L.map('map').setView([50.92566782800542, 13.33071481622859], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const projects = $projects

for(let [gps,card] of projects) {
    L.marker(gps).addTo(map).bindPopup(card);
}
</script>

If you want to add your project to this map, please follow the instructions in the blog post:

{{< button link="/blog/liascript-world-map" label="contribute" >}}
                  
... or leave us a comment ;-)

More information about the projects and a search will be embedded in the near future.
""")

site = header.substitute(title = TITLE, date = DATE, description = DESCRIPTION )

def toCard(data):
    
    image = data.get("image")
    if image is not None:
        image = '<img src="'+ image + '" style="width: 100%; max-height: 180px; margin: 0px;"/>'
    
    title = data.get("title")
    if title is not None:
        title = "<h5 style='font-size: 16px;'>" + title + "</h5>"
    
    description = data.get("description")
    if description is not None:
        description = '<div style="max-height: ' + ('200' if image is None else '100') + 'px; overflow: auto">' + description + '</div>'


    link = data.get("link")
    if link is not None:
        link = '<a style="font-size: 10px" target="_blank" href="' + link + '">' + (link if len(link) <= 40 else link[:40] + "...") + '</a>'

    card = Template("<div>$image$title$description$link</div>")

    return card.substitute(image = image or "", title = title or "", description = description or "", link = link)


projects = []
with open('projects.yml', 'r') as file:
    config = yaml.safe_load(file)


for project in config:
    projects.append([[project["gps"]["latitude"], project["gps"]["longitude"]], toCard(project)])

site = site + script.substitute(projects = json.dumps(projects))

with open('../content/english/pages/world-map.md', 'w') as file:
    file.write(site)