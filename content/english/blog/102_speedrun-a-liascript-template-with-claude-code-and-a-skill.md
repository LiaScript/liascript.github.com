---
title: "Speedrun: Building a LiaScript Template with Claude Code and a Skill"
slug: "speedrun-a-liascript-template-with-claude-code-and-a-skill"
date: 2026-06-30
draft: false
author: André Dietrich
image: "/images/post/wictionary.jpg"
categories:
    - News
    - Feature
    - Template
tags:
    - AI
    - OER
    - Video
    - ClaudeCode
    - Markdown
---

LiaScript can be extended with almost any functionality you can imagine — and this time I did not program that extension myself.
I let an AI (Claude Code) do it: a small but practical **Wiktionary template**, built in just a few minutes as a "speedrun".
The template turns words into clickable links that show a Wiktionary definition in a tooltip — language- and translation-aware, live, with no external library.

What made it fast and reproducible was a **skill**.

{{< youtube 278q1Zs-zDw >}}

---

### What a skill is — and why it matters here

A skill is bundled expert knowledge for an AI assistant — a kind of specialization.
Instead of re-explaining to the model on every task how LiaScript templates are structured, which conventions apply, and how a template is published, all of that lives in a single, reusable skill.
The AI *loads* it when needed and immediately works according to the project's established standards — reproducibly, and without half-knowledge.

Concretely, a skill is just a folder with a `SKILL.md` file (plus optional reference files):

``` text
template-development/
└── SKILL.md       # description + the full expert knowledge the model loads on demand
```

The `SKILL.md` starts with a short front-matter `description`. The agent reads only that description most of the time; when a task matches — *"build a LiaScript template"* — it pulls in the full body with all the rules, macro patterns, and worked examples.

In this case the skill did not only help while building.
At the end, we even extended the skill itself — adding the knowledge of how a finished template is correctly published to GitHub.
That is the nice part: the skill gets better every time you use it.

---

### Installing the skill

The LiaScript skills live in one repository: [github.com/LiaScript/skills](https://github.com/LiaScript/skills).
It currently bundles four skills:

- **template-development** — building reusable LiaScript macros and integrating JavaScript libraries (the one used here)
- **exporter-workflow** — GitHub Actions and export configurations for LiaScript courses
- **oersi-metadata** — `metadata.yml` files for publishing Open Educational Resources
- **reference-checker** — validates scientific citations and detects fabricated sources

#### Option 1 — via `npx` (recommended)

The fastest way is the `skills` installer, which works with Claude Code, GitHub Copilot, Cursor, Gemini CLI, and 50+ other agents. No clone, no manual copying:

```bash
# install all skills into the current project
npx skills add LiaScript/skills

# preview what is available first
npx skills add LiaScript/skills --list

# install only one specific skill
npx skills add LiaScript/skills --skill template-development
```

#### Option 2 — local / manual installation

A skill is just a folder, so you can also drop it in by hand. Clone the repo and copy the skill into your agent's skills directory:

```bash
git clone https://github.com/LiaScript/skills
cp -r skills/template-development .claude/skills/
```

Where to put it depends on the scope you want:

- **Project only** — Claude Code: `.claude/skills/` · Copilot / Cursor / Gemini CLI: `.agents/skills/`
- **All projects (personal)** — any agent: `~/.agents/skills/` · Copilot: `~/.copilot/skills/`

Once the folder is in place, the agent discovers it automatically. From then on, asking for a LiaScript template produces output that follows the project's conventions instead of generic Markdown.

---

### What the Wiktionary template does

It turns words in a course into clickable terms.
A click shows a tooltip with the definition straight from the Wiktionary API — live, no external library.
Handy for language courses, technical texts, or any material where terms should be explained quickly.

The special part: it is **language- and translation-aware**.
If the course is translated into another language, the lookup automatically follows the current word and the new language.

Pull it into any course with a single `import:` line:

```markdown
import: https://raw.githubusercontent.com/LiaTemplates/Wictionary/0.0.2/README.md
```

Then mark words inline:

```markdown
@wik(house)              <!-- look up "house" in the document language -->
@wik(Haus, de)           <!-- force the German lookup -->
@wikd(Haus, de, Häuser)  <!-- show "Häuser", but look up "Haus" in German -->
```

#### Try it in the LiveEditor

<iframe loading="lazy" class="liveeditor" src="https://liascript.github.io/LiveEditor/?/show/file/https://raw.githubusercontent.com/LiaTemplates/Wictionary/master/README.md"></iframe>

Or open the rendered course directly:

https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Wictionary/master/README.md

---

### Why this is the LiaScript way

The beautiful thing about the LiaScript principle: extensions like this are themselves open, shareable building blocks (OER).
Once built, anyone can pull them into their own course with a single `import:` line — no build step, no server, no installation.

And with a skill, the *building* of such extensions becomes reproducible too.
The knowledge no longer lives only in one developer's head — it lives in a file that any model can load, and that grows every time it is used.

🔗 **Try it & dig deeper:**

- Template (live): https://liascript.github.io/course/?https://raw.githubusercontent.com/LiaTemplates/Wictionary/master/README.md
- Code: https://github.com/LiaTemplates/Wictionary
- The skills repository: https://github.com/LiaScript/skills
- LiaScript: https://liascript.github.io
