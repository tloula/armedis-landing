# Checkin More - Landing Page

A modern, responsive landing page for the Checkin More mobile app built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 📊 Performance optimized
- 📝 Blog system with MDX support
- 🚀 GitHub Pages deployment ready

## Blog System

The landing page includes a full-featured blog system that supports MDX (Markdown with React components):

### Blog Features
- ✅ MDX support for rich content
- ✅ Static generation at build time (perfect for GitHub Pages)
- ✅ Blog post listing page (`/blog`)
- ✅ Individual blog post pages (`/blog/[slug]`)
- ✅ Tag system with styled badges
- ✅ Author and date metadata
- ✅ Estimated read time calculation
- ✅ Related posts recommendations
- ✅ SEO-optimized metadata

### Adding Blog Posts

1. Create a new `.mdx` file in `src/markdown/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2025-01-27"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
image: "/images/your-image.jpg"
---
```

3. Write your content in Markdown
4. Run `npm run generate:mdx` to regenerate the blog data
5. The post will be automatically included in the build

### Blog Structure

- `src/markdown/blog/` - MDX blog post files
- `src/components/Blog/` - Blog-related React components
- `src/libs/mdx.ts` - MDX processing utilities
- `src/libs/blogData.js` - Auto-generated blog data (do not edit manually)
- `scripts/generateMdxData.js` - Build-time data generation script

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (includes blog data generation)
npm run build

# Generate blog data manually
npm run generate:mdx
```

## Deployment

This project is configured for GitHub Pages deployment with static generation. The blog posts are processed at build time, making the entire site static and suitable for GitHub Pages hosting.

## Technologies Used

- Next.js 14+
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX processing (gray-matter, remark-html, unified)
- Date formatting (date-fns)
