import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkHtml from 'remark-html';
import { BlogPost } from '@/types/blog';

// Import generated blog data
import blogData from './blogData.js';

async function processMarkdown(content: string): Promise<string> {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkHtml)
    .process(content);
  
  let html = processed.toString();
  
  // Add spacing improvements through post-processing
  html = html
    // Add spacing after headings
    .replace(/<\/h([1-6])>/g, '</h$1><div class="mb-4"></div>')
    // Add spacing before headings (except first one)
    .replace(/(?<!^)<h([1-6])>/g, '<div class="mt-6"></div><h$1>')
    // Make H1 elements smaller in content
    .replace(/<h1>/g, '<h1 class="text-2xl lg:text-3xl font-bold">')
    // Add spacing around lists
    .replace(/<ul>/g, '<div class="my-4"></div><ul class="list-disc ml-8 mb-4">')
    .replace(/<\/ul>/g, '</ul><div class="mb-4"></div>')
    .replace(/<ol>/g, '<div class="my-4"></div><ol class="list-decimal ml-8 mb-4">')
    .replace(/<\/ol>/g, '</ol><div class="mb-4"></div>')
    // Add spacing around paragraphs
    .replace(/<p>/g, '<p class="mb-4">')
    // Add spacing for list items
    .replace(/<li>/g, '<li class="mb-2 pl-2">')
    // Add spacing for strong elements
    .replace(/<strong>/g, '<strong class="font-semibold">')
    // Add spacing for blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-gray-300 pl-4 my-4 italic">');
  
  return html;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = blogData || [];
  // Sort by date (desc)
  return posts.slice().sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    return 0;
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = blogData || [];
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  
  const htmlContent = await processMarkdown(post.content || '');
  return {
    ...post,
    content: htmlContent,
  };
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = blogData || [];
  return posts.map(post => post.slug);
} 