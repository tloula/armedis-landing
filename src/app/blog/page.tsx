import { Metadata } from 'next';
import BlogCard from '@/components/Blog/BlogCard';
import { getBlogPosts } from '@/libs/mdx';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Blog - Armedis',
  description: 'Stay up to date with the latest news, tips, and insights from the Armedis team.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-20 lg:py-32">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>
            <h2 className="my-3 !leading-snug">Our Blog</h2>
          </SectionTitle>
          <p 
            className="mt-4"
            style={{ color: 'var(--foreground-accent)' }}
          >
            Stay up to date with the latest news, tips, and insights from the Armedis team.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              No blog posts yet
            </h3>
            <p style={{ color: 'var(--foreground-accent)' }}>
              We&apos;re working on creating great content for you. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                image={post.image}
                title={post.title}
                description={post.description}
                tags={post.tags}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
} 