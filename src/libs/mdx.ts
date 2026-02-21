import { BlogPost } from '@/types/blog';

import blogData from './blogData.js';

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = blogData || [];
  return posts.slice().sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    return 0;
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = blogData || [];
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  return post;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = blogData || [];
  return posts.map(post => post.slug);
}
