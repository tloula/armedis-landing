export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  content: string;
  date?: string;
  author?: string;
  tags?: string[];
  image?: string;
  readTime?: string;
}

export interface Author {
  name: string;
  image?: string;
  bio?: string;
} 