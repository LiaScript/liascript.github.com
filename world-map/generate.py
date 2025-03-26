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

const iconSize = [35, 57]
const iconAnchor = [16.6, 57.4]
const popupAnchor = [1, -30]

const greenIcon = L.icon({ iconUrl: '/marker/green.png', iconSize, iconAnchor, popupAnchor });
const grayIcon = L.icon({ iconUrl: '/marker/gray.png', iconSize, iconAnchor, popupAnchor });
const blueIcon = L.icon({ iconUrl: '/marker/blue.png', iconSize, iconAnchor, popupAnchor });

const currentDate = new Date();
const projects = $projects

// Create a function to generate a custom icon with an overlay
function createCustomIcon(baseIcon, overlayUrl) {
  if (!overlayUrl) return baseIcon;

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="position: relative;">
      <img src="$${baseIcon.options.iconUrl}" style="width: 35px; height: 57px;">
      <img src="$${overlayUrl}" style="position: absolute; top: 4px; left: 4px; width: 27px; height: 27px; border-radius: 50%; background: white;">
      </div>`,
    iconSize,
    iconAnchor,
    popupAnchor
  });
}

for(let i=0; i<projects.length; i++) {
  let [gps, card, date, iconUrl] = projects[i];
  let baseIcon = blueIcon;

  if (date) {
    let targetDate = new Date(date);
    baseIcon = (targetDate > currentDate) ? greenIcon : grayIcon;
  }

  let customIcon = iconUrl ? createCustomIcon(baseIcon, iconUrl) : baseIcon;

  let marker = L.marker(gps, {icon: customIcon});
  marker.addTo(map);
  marker.bindPopup(card);
  projects[i].push(marker);
}

function exponentialDecay(x) {
  const a = 25.7475;
  const b = -0.7161;
  return a * Math.exp(b * x);
}

function updateZoomLevel() {
  const zoomLevel = map.getZoom();
  const fix = exponentialDecay(zoomLevel);

  for(let i=0; i<projects.length; i++) {
    let [gps, card, date, marker] = projects[i];
    let pos = {lat: gps[0] - fix, lng: gps[1]};
    marker.setLatLng(pos);
  }
}

map.on('zoomend', function() {
  updateZoomLevel();
});

updateZoomLevel();
</script>

If you want to add your project or event to this map, please follow the instructions in the blog post:

{{< button link="/blog/liascript-world-map" label="contribute" >}}

... or leave us a comment ;-)

More information about the projects and a search will be embedded in the near future.
""")

site = header.substitute(title = TITLE, date = DATE, description = DESCRIPTION )

def toCard(data):
    image = data.get("image")
    if image is not None:
        image = '<img src="'+ image + '" style="width: 100%; max-height: 180px; margin: 0px;"/>'

    icon = data.get("icon")
    if icon is not None:
        if not icon.startswith("http"):
            icon = '/marker/' + icon 
    
    title = data.get("title")
    if title is not None:
        title = "<h5 style='font-size: 16px;color: #000'>" + title + "</h5>"
    
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
    projects.append([[project["gps"]["latitude"], project["gps"]["longitude"]], toCard(project), project.get("date"), project.get("icon")])

site = site + script.substitute(projects = json.dumps(projects))

with open('../content/english/pages/world-map.md', 'w') as file:
    file.write(site)