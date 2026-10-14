---
name: checkin-more-blog
description: Write and publish a new CheckIn More marketing blog post (MDX + Pixabay hero image via lens) and open a PR. Use when asked to add, draft, or publish a blog post on checkinmore.com.
---

# CheckIn More blog post

Posts live in `src/markdown/blog/<slug>.mdx` and deploy to `https://checkinmore.com/blog/<slug>` when merged to `main` (GitHub Pages, `.github/workflows/nextjs.yml`).

## 1. Pick a topic

- Read the frontmatter of every post in `src/markdown/blog/` and list open PRs on `tloula/armedis-landing`, so you don't repeat a slug, keyword, or angle.
- Choose one search keyword CheckIn More can credibly rank for that no post targets yet: an audience ("check-in service for …"), a situation (travel, dating, night shifts), or an "<app> alternative" comparison.
- For product facts use the `checkinmore-product` skill if it's available; otherwise use only what existing posts already say. Never invent features, prices, or stats.

## 2. Write the post

Copy the shape of the most recent posts (highest `date`):

```yaml
---
title: "…"                    # contains the keyword, under ~65 chars
description: "…"              # 140–160 chars, contains the keyword
date: "YYYY-MM-DD"            # today
author: "CheckIn More Team"
tags: ["<keyword>", "…"]      # 4–6 keyword-style tags
image: "/images/<slug>.jpg"
---
```

- Slug is the keyword in kebab-case. 900–1,400 words, plain warm tone, short paragraphs, `##`/`###` headings, `---` between major sections, bold the keyword once early.
- Link to the homepage (`[… →](/)`) and to 1–2 related existing posts (`/blog/<slug>`).
- End with a "Getting Started" section, `<DownloadButtons slug="<slug>" />`, and a short "Frequently Asked Questions" section.
- Only use MDX components already used in other posts. Any `<Icon name="…" />` must exist in `iconMap` in `src/components/Blog/MdxComponents.tsx`.

## 3. Hero image with lens

lens (`github.com/tloula/lens`) reads `PIXABAY_API_KEY` / `LENS_PIXABAY_API_KEY` from the environment. Never print or commit the key.

```sh
command -v lens || uv tool install git+https://github.com/tloula/lens
lens search "<concrete visual subject>" --orientation landscape --limit 8
# view a few preview_url candidates, pick one whose subject is obvious at a glance
lens download <id> --output /tmp/lens/<slug>.jpg
cp /tmp/lens/<slug>.jpg public/images/<slug>.jpg
```

Search for a scene, not the keyword (e.g. "woman hiking alone mountain trail", not "check-in service"). Avoid images with visible logos or text. Don't commit the `.photo.json` sidecar; instead add the printed `credit_markdown` as the post's last line, in italics: `*Photo: <credit_markdown>*`.

If lens can't reach Pixabay, stop and report the blocker; don't ship a post without an image or reuse an unrelated one.

## 4. Build

```sh
npm ci
npm run build   # regenerates src/libs/blogData.js and public/sitemap.xml, then next build
```

The build must pass. Commit the regenerated `src/libs/blogData.js` and `public/sitemap.xml` with the post.

## 5. Open the PR

- Branch: the session's designated branch if one is given, otherwise `blog/<slug>`.
- One commit: `Blog: <Title>` containing the `.mdx`, the image, and the regenerated files.
- Open a PR to `main` titled `Blog: <Title>`. Body: target keyword, one-line summary, image credit, and the future URL `https://checkinmore.com/blog/<slug>`.
- Don't merge it; Trevor reviews and merges.
