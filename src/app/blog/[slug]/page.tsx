import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format, parse } from 'date-fns';
import { getBlogPost, getBlogPosts, getAllBlogSlugs } from '@/libs/mdx';
import Container from '@/components/Container';
import TagBadge from '@/components/Blog/TagBadge';
import BlogCard from '@/components/Blog/BlogCard';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found - CheckIn More',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getBlogPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="py-20 lg:py-32">
      <Container>
        <article className="max-w-4xl mx-auto border rounded-lg p-8" style={{ borderColor: 'var(--border)' }}>
          {/* Header */}
          <div className="mb-8">
            {post.image && (
              <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="space-y-4">
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              )}

              <h1
                className="text-3xl lg:text-4xl font-bold leading-tight"
                style={{ color: 'var(--foreground)' }}
              >
                {post.title}
              </h1>

              {post.description && (
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: 'var(--foreground-accent)' }}
                >
                  {post.description}
                </p>
              )}

              <div
                className="flex items-center gap-6"
                style={{ color: 'var(--foreground-accent)' }}
              >
                {post.author && (
                  <span
                    className="font-medium"
                    style={{ color: 'var(--foreground)' }}
                  >
                    By {post.author}
                  </span>
                )}
                {post.date && (
                  <time>
                    {format(parse(post.date, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy')}
                  </time>
                )}
                {post.readTime && <span>{post.readTime}</span>}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none [&_ul]:ml-8 [&_ol]:ml-8 [&_li]:mb-2 [&_li]:pl-2"
            style={{
              '--tw-prose-headings': 'var(--foreground)',
              '--tw-prose-body': 'var(--foreground-accent)',
              '--tw-prose-links': 'var(--link-text)',
              '--tw-prose-bold': 'var(--foreground)',
              '--tw-prose-code': 'var(--foreground)',
              '--tw-prose-quotes': 'var(--foreground-accent)'
            } as React.CSSProperties}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: 'var(--foreground)' }}
            >
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.slug}
                  image={relatedPost.image}
                  title={relatedPost.title}
                  description={relatedPost.description}
                  tags={relatedPost.tags}
                  author={relatedPost.author}
                  date={relatedPost.date}
                  readTime={relatedPost.readTime}
                  href={`/blog/${relatedPost.slug}`}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}