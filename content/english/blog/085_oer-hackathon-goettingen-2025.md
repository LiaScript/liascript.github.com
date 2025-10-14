---

title: "Joining forces: OER Hackathon Göttingen 2025"
description: "The OER Hackathon Göttingen 2025 is a collaborative event focused on enhancing the discoverability and accessibility of Open Educational Resources (OER) through innovative solutions and community engagement."
slug: "oer-hackathon-goettingen-2025"
date: 2025-04-30
draft: false
authors:
    - André Dietrich
    - Sebastian Zug
image: "https://edu-sharing-network.org/wp-content/uploads/sites/3/2025/02/HackathOERN-Logo-2-1.png"

categories:
    - News
    - Community
tags:
    - OER
    - Collaboration

---

From April 28 to 30, the OER Hackathon took place in Göttingen ([Edu-Sharing Network](https://edu-sharing-network.org/projekt-hackathoern/)). Stakeholders and experts from education and IT convened to develop concepts and work on solutions that strengthen OER- and OEP-supportive infrastructures in Germany. In addition to fostering new connections, the event focused on knowledge transfer—exploring how innovations and prototypes can be integrated into existing systems and transitioned into everyday teaching practice. Of the eight projects on offer, André chose to participate in **Edufeed**, while Sebastian joined the **LearnGraph** team.

![group image](/images/post/oer-hackathon-goettingen-2025/group.jpg)

## Edufeed: A Social-Feed for Open Educational Resources

https://www.edufeed.org

**Edufeed** reimagines the way OER are shared and discovered by applying a social-media feed model to educational content. Instead of isolated repositories, educators can publish videos, texts, quizzes, and lesson plans into a continuous stream—much like posting on a social network.

A core innovation is the use of **Nostr**, a decentralized, open protocol that powers the feed. Nostr lets Edufeed users publish “notes” (in this case, LiaScript documents) to a network of relays. André implemented this functionality into the LiaScript [LiveEditor](https://liascript.github.io/LiveEditor) so that course documents can be stored directly on Nostr relays. While the LiaScript website will now also interpret `nostr:` URIs to directly load the content from there.

![group image](/images/post/oer-hackathon-goettingen-2025/nostr-sharing.png)

Key benefits include:

* **Seamless Sharing**
  Contributors post resources once and any platform that supports Edufeed can display them, eliminating the need for separate uploads and manual imports.

* **Decentralized Control**
  By building on a distributed protocol (Nostr), Edufeed avoids central servers and gives each user full ownership of their contributions, while still making it easy for others to subscribe and follow updates.

* **Contextual Discovery**
  Tags, subject filters, and simple licensing metadata allow teachers to quickly find materials relevant to their curriculum, and to see which peers or institutions have recommended or adapted a resource.

{{< preview "/blog/086_nostr-and-liascript-and-oer/" >}}

## LearnGraph: Mapping Knowledge Visually

https://learngraph.org

**LearnGraph** provides an interactive, map-based interface to navigate the ever-growing landscape of OER. Instead of scrolling through lists, learners and instructors see a network of interconnected topics and resources—like landmarks on a map.

Sebastian’s own OER lectures (see his resources [here](https://tubaf-ifi-liascript.github.io/)) served as test data for developing the learning graphs. The idea behind LearnGraph is that every learner can define where they currently are and where they want to be capable in the future—creating a personalized learning graph. The system then reasons about potential paths and suggests linked resources to guide users from their starting point to their goals. Think of it like a map: along the way, learners can discover new topics, take detours, and explore alternate routes toward their learning objectives.

![group image](/images/post/oer-hackathon-goettingen-2025/group-small.jpg)

Its main features include:

* **Interactive Knowledge Maps**
  Nodes represent individual resources (articles, videos, exercises) and are linked by conceptual relationships. Zoom and pan controls let users explore broad overviews or dive into specific topic clusters.

* **AI-Enhanced Recommendations**
  An optional recommendation engine suggests “next steps” along a learning path, revealing routes a user might not have considered and helping to fill gaps in their understanding.

* **Crowdsourced Linkages**
  Educators and learners can propose new connections, vote on the most helpful pathways, and enrich the map collaboratively—making the tool more powerful with each contribution.

---

## Looking Ahead

As HackathOERn continues through its series of events up to 2027, these early efforts will be refined, integrated, and tested in real-world educational settings—bringing us closer to a truly interoperable, open, and learner-centered infrastructure for OER in Germany.
