import { Metadata } from 'next';
import BlogCard from '@/components/Blog/BlogCard';
import { getBlogPosts } from '@/libs/mdx';
import Container from '@/components/Container';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Blog - CheckIn More',
  description: 'Stay up to date with the latest news, tips, and insights from the folks behind CheckIn More.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHeader
        title="Our Blog"
        description="Stay up to date with the latest news, tips, and insights from the folks behind CheckIn More."
      />
      <Container className="pb-20 lg:pb-28">
        {posts.length === 0 ? (
          <div className="card mx-auto max-w-xl text-center px-6 py-16">
            <h2 className="text-2xl font-bold mb-3 text-foreground">
              No blog posts yet
            </h2>
            <p className="text-foreground/75">
              We&apos;re working on creating great content for you. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
    </>
  );
}
