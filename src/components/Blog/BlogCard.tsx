import Link from 'next/link';
import Image from 'next/image';
import { format, parse } from 'date-fns';
import React from 'react';
import TagBadge from './TagBadge';

interface BlogCardProps {
    image?: string;
    title: string;
    description?: string;
    tags?: string[];
    author?: string;
    date?: string;
    readTime?: string;
    href: string;
    className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    image,
    title,
    description,
    tags = [],
    author,
    date,
    readTime,
    href,
    className = '',
}) => {
    const meta = [
        date ? format(parse(date, 'yyyy-MM-dd', new Date()), 'MMM d, yyyy') : null,
        readTime,
    ].filter(Boolean);

    return (
        <article
            className={`group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(83,55,55,0.35)] ${className}`}
        >
            <Link href={href} className="flex h-full flex-col">
                {image && (
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                    </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                    {tags.length > 0 && (
                        <div className="mb-4 flex gap-1.5 flex-wrap">
                            {tags.slice(0, 2).map((tag) => (
                                <TagBadge tag={tag} key={tag} />
                            ))}
                        </div>
                    )}
                    <h2 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-2.5 text-base leading-relaxed text-foreground/75 line-clamp-3">
                            {description}
                        </p>
                    )}
                    {(author || meta.length > 0) && (
                        <div className="mt-auto flex flex-wrap items-center gap-x-2 pt-5 text-sm text-foreground/60">
                            {author && (
                                <span className="font-semibold text-foreground/80">
                                    {author}
                                </span>
                            )}
                            {meta.map((item) => (
                                <React.Fragment key={item}>
                                    <span aria-hidden="true">·</span>
                                    <span>{item}</span>
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </article>
    );
};

export default BlogCard;
