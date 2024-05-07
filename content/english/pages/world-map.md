---
title: "WorldMap"
meta_title: "LiaScript - WorldMap"
image: "/images/post/world-map2.png"
date: 2024-05-07
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

const greenIcon = L.icon({
    iconUrl: '/marker/green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const grayIcon = L.icon({
    iconUrl: '/marker/gray.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const currentDate = new Date();
const projects = [[[50.92566782800542, 13.33071481622859], "<div><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Universitaetsbibliothek_Freiberg_Fassade.jpg/1024px-Universitaetsbibliothek_Freiberg_Fassade.jpg\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>Arbeitsgruppe Softwareentwicklung und Robotik</h5><div style=\"max-height: 100px; overflow: auto\">Alle Lehrmaterialien der Arbeitsgruppe wurden mit LiaScript erstellt und sind im interaktiven\nModus \u00fcber die untenstehenden Links erreichbar.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://tubaf-ifi-liascript.github.io\">https://tubaf-ifi-liascript.github.io</a></div>", null], [[-1.9547233, 30.0932888], "<div><img src=\"http://ela-newsportal.com/wp-content/uploads/elabannerpic.gif\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>eLearning Africa 2024: Creating Sustainable and Extendable Open Educational Resources (OER) as Interactive Online Classrooms</h5><div style=\"max-height: 100px; overflow: auto\">In this interactive session, we'll explore the forefront of web technologies and their transformative potential in crafting, disseminating, and collaboratively enhancing open educational resources (OER).\nSurprisingly, the browser has emerged as the new operating system, capable of tackling tasks previously reliant on servers entirely within its interface.\nThus, everything that we show is \u00abnearly\u00bb entirely browser-based.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://www.elearning-africa.com/conference2024/programme_workshops_detail.php?ws=FD2\">https://www.elearning-africa.com/confere...</a></div>", "2024-05-28"], [[14.739632642240597, -17.198549603510727], "<div><img src=\"https://cdn.lmu-klinikum.de/fc8202bd3710a2c1/41542924833b/v/757988c13854/eLearning-Africa-2023.png\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>eLearning Africa 2023: Instant Creation & Publishing of Free and Open Online Courses with LiaScript</h5><div style=\"max-height: 100px; overflow: auto\">Full day workshop on LiaScript course creation...\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/elearning-africa-2023/\">https://liascript.github.io/blog/elearni...</a></div>", "2023-05-24"], [[50.778124727097975, 6.060816170303606], "<div><img src=\"https://delfi-tagung.de/fileadmin/FG/WI-ELE/_processed_/a/d/csm_Flyer_Petrol_994e8b2c56.png\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>DELFI 2023: Konzepte und Erfahrungen bei der Realisierung dezentraler, offener Lehrmaterialien mit LiaScript</h5><div style=\"max-height: 100px; overflow: auto\">LiaScript implementiert als Markdown-basierte Beschreibungssprache f\u00fcr Lehrinhalte die zentralen Konzepte von Open Educational Ressources.\nBasierend auf einer textuellen Darstellung, ohne zentrale Infrastruktur, k\u00f6nnen Lehrmaterialien \u00e4hnlich Open-Source-Softwareprojekten in einer Community entwickelt, geteilt und gepr\u00fcft werden.\nDas Tutorial gibt einen \u00dcberblick \u00fcber den Stand des Projektes und f\u00fchrt die Teilnehmer:innen in die Basiskonzepte und Nutzungsmuster ein.\nDar\u00fcber hinaus werden anhand von Anwendungsf\u00e4llen die Hemmnisse und Herausforderungen bei der Etablierung von Open Educational Ressources (OER) er\u00f6rtert.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/liascript-workshop-auf-der-delfi-tagung-in-aachen/\">https://liascript.github.io/blog/liascri...</a></div>", "2023-09-11"], [[52.50715479711011, 13.345364573209334], "<div><img src=\"https://oeb.global/oeb.png\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>OEB 2023: Serverless Online Education</h5><div style=\"max-height: 100px; overflow: auto\">The presentation at the Open Educa Berlin (OEB) Conference on November 24th 2023 focused on \u201cServerless Online Education\u201d and emphasized the potential of decentralized, browser-based technologies in educational settings.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/serverless-online-education/\">https://liascript.github.io/blog/serverl...</a></div>", "2023-11-24"], [[52.479111000200156, 13.430556106118729], "<div><img src=\"https://festival.hfd.digital/de/wp-content/uploads/sites/3/2022/11/UFF_Sharepics-Allgemein_Twitter-1.png\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>University Future Festival 2023: How can Web 3.0 save Education?</h5><div style=\"max-height: 100px; overflow: auto\">A three-day event all about the future of higher education: University:Future Festival (U:FF) \u2013 Heads up! took place from 26 to 28 April 2023 in the physical as well as in the digital space.\nThe festival addressed a broad range of topics around AI, architectures, technology, strategy development, competences, didactics and much more in the context of the opportunities and challenges of the digital transformation.\nAs the largest and most innovative event on the future of academic education in the DACH region, the festival, bilingual in German and English, offers a comprehensive programme with over 300 talks, workshops, discussions and micro training sessions selected from 620 submissions from an international university community.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/how-can-web-3-save-education/\">https://liascript.github.io/blog/how-can...</a></div>", "2023-04-26"], [[52.499969754519185, 13.270795900217253], "<div><img src=\"https://i.ytimg.com/vi/ibHvdCfQHEs/maxresdefault.jpg\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>We Are Developers 22: Interactive Markdown for Education & Documentation</h5><div style=\"max-height: 100px; overflow: auto\">In this talk, we present LiaScript, a Markdown-based DSL that is intended to be used for developing online courses, that look like screen-cast with various interactive elements.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/we-are-developers-22/\">https://liascript.github.io/blog/we-are-...</a></div>", "2022-06-15"], [[48.789421678825256, 2.3635724329421], "<div><img src=\"https://i.ytimg.com/vi/w_CRABsJNKA/maxresdefault.jpg\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>Elm Europe 2019: Open-Course Development with LiaScript (... Or Markdown on Steroids)</h5><div style=\"max-height: 100px; overflow: auto\">An Elm-talk about the development of an online course DSL that is based on Markdown, given at the elm-europe conference in 2019.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/open-course-development-with-liascript/\">https://liascript.github.io/blog/open-co...</a></div>", "2019-06-27"], [[41.17809556706227, -8.60854852261642], "<div><img src=\"https://liascript.github.io/images/post/mccsis_hu76e9b183dc69f1706ca6266a92843fe0_720379_1110x0_resize_q80_h2_lanczos_3.webp\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>MCCSIS 2019: LiaScript - a Domain-Specific-Language for Interactive Online Courses</h5><div style=\"max-height: 100px; overflow: auto\">This is the first paper published about LiaScript, which was presented at the International Association for Development of the Information Society (IADIS) International Conference on e-Learning 2019 in Porto.\nIt gives an overview of the language and its features, as well as the motivation behind its development.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://liascript.github.io/blog/liascript-a-domain-specific-language-for-interactive-online-courses/\">https://liascript.github.io/blog/liascri...</a></div>", "2019-07-19"], [[51.33871993833814, 12.37935762657965], "<div><img src=\"https://cache.sessionize.com/image/a981-1140o400o3-TgerJadX4kZ1mzBmo7Rk7b.png\" style=\"width: 100%; max-height: 180px; margin: 0px;\"/><h5 style='font-size: 16px;'>University Future Festival 2024: RemoteLabs as OER - The next evolutionary step</h5><div style=\"max-height: 100px; overflow: auto\">We'll demonstrate how easy it is for teachers and institutions to share local hardware and experiments.\nSo far, we've successfully shared setups for Arduino, terminals, and even chemical experiments.\n</div><a style=\"font-size: 10px\" target=\"_blank\" href=\"https://festival.hfd.digital/de/programm-2024/\">https://festival.hfd.digital/de/programm...</a></div>", "2024-06-05"]]

for(let i=0; i<projects.length; i++) {
    let [gps,card,date] = projects[i];
    let marker = null
    if (date) {
        let targetDate = new Date(date);
        marker = L.marker(gps, {icon: (targetDate > currentDate) ? greenIcon : grayIcon});
    } else {
        marker = L.marker(gps)
    }
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

{{< button link="/blog/064_liascript-world-map" label="contribute" >}}

... or leave us a comment ;-)

More information about the projects and a search will be embedded in the near future.
