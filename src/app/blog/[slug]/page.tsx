import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format, parse } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getBlogPost, getBlogPosts, getAllBlogSlugs } from '@/libs/mdx';
import { mdxComponents } from '@/components/Blog/MdxComponents';
import Container from '@/components/Container';
import PageBackdrop from '@/components/PageBackdrop';
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
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `https://checkinmore.com${post.image}` : undefined,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'CheckIn More Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CheckIn More',
      url: 'https://checkinmore.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://checkinmore.com/blog/${resolvedParams.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://checkinmore.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://checkinmore.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://checkinmore.com/blog/${resolvedParams.slug}`,
      },
    ],
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-40 lg:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="absolute inset-x-0 top-0 h-[560px] -z-10">
        <PageBackdrop />
      </div>
      <Container>
        <article>
          {/* Header */}
          <header className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground/70 hover:text-foreground transition-colors"
            >
              <span aria-hidden="true">&larr;</span> Blog
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex gap-1.5 flex-wrap">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}

            <h1 className="mt-5 text-4xl md:text-5xl md:leading-[1.08] font-extrabold text-foreground text-balance">
              {post.title}
            </h1>

            {post.description && (
              <p className="mt-5 text-xl leading-relaxed text-foreground/75">
                {post.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-2 text-base text-foreground/60">
              {post.author && (
                <span className="font-semibold text-foreground/80">
                  {post.author}
                </span>
              )}
              {post.author && post.date && <span aria-hidden="true">·</span>}
              {post.date && (
                <time dateTime={post.date}>
                  {format(parse(post.date, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy')}
                </time>
              )}
              {post.readTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </header>

          {post.image && (
            <div className="relative mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(83,55,55,0.5)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1100px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="mx-auto mt-12 max-w-3xl">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 border-t border-foreground/10 pt-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-center text-foreground">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
