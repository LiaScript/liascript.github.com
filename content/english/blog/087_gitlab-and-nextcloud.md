---
title: "Sharing via gitlab://"
slug: "sharing-via-gitlab"
date: 2025-06-11
draft: false
authors:
  - André Dietrich
image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/GitLab_logo_%282%29.svg"
tags:
  - GitLab
  - OER
---

> **TL;DR**  
> Add `gitlab://` in front of any raw-file URL that refuses to load in LiaScript.  
> We’ll translate it into a GitLab API v4 request behind the scenes, bypassing CORS for you.

---

LiaScript has a built-in URL-translation engine that lets you embed external resources—even when browsers would normally block them because of CORS (Cross-Origin Resource Sharing) limitations. The most common stumbling block is self-hosted GitLab, so let’s start there.

## What *api/v4* Means in GitLab

`/api/v4/` is the root of **GitLab’s REST API version 4**—the current, stable API that’s been in place since GitLab 9.0 (2017).<br>
Every stable GitLab release ships this endpoint, and all official docs and examples assume v4 unless noted otherwise. In practice, the path signals three things:

1. **Versioning:** Using `v4` lets GitLab evolve its API without breaking older clients; if a future v5 appears, your v4 calls will still work.  
2. **REST semantics:** Endpoints map cleanly to resources such as *projects*, *repository files*, *issues*, etc.  
3. **CORS-friendly headers:** The API replies with the right CORS headers, so browsers are allowed to fetch the content.

In short, *api/v4* is the safest way to programmatically grab anything from a GitLab server.

---

## GitLab Integration in LiaScript

### 1. Public GitLab .com

When you paste a normal raw-file link, LiaScript silently rewrites it:

```text
https://gitlab.com/user/repo/-/raw/main/README.md
````

becomes

```text
https://gitlab.com/api/v4/projects/user%2Frepo/repository/files/README.md/raw?ref=main
```

So the file is fetched through the CORS-friendly API instead of the raw file server.

### 2. Self-Hosted GitLab (or Locked-Down Groups)

Some admins disable CORS entirely. In that case, prepend `gitlab://` yourself:

```text
gitlab://git.example.org/user/repo/-/raw/main/README.md
```

LiaScript detects the scheme, swaps it for an API v4 call, and URL-encodes the project path:

```text
https://git.example.org/api/v4/projects/user%2Frepo/repository/files/README.md/raw?ref=main
```

**That’s all—no extra setup, no browser plugins, no CORS errors.**

---

## Other Platforms Supported Out of the Box

The system also handles URLs from:

- GitHub
- Dropbox
- OneDrive
- Codeberg
- NextCloud -- `nextcloud://`

Each platform has its own pattern matching and transformation rules to ensure content can be properly embedded in LiaScript courses.