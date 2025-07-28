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
    return (
        <article
            className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
            style={{ 
                backgroundColor: 'var(--background)', 
                borderColor: 'var(--border)',
                border: '1px solid'
            }}
        >
            <Link href={href} className="block">
                {image && (
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image 
                            src={image} 
                            alt={title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                )}
                <div className="p-6">
                    <div className="space-y-4">
                        {tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                                {tags.slice(0, 3).map((tag) => (
                                    <TagBadge tag={tag} key={tag} />
                                ))}
                            </div>
                        )}
                        <h2 
                            className="text-xl font-semibold leading-tight transition-colors hover:text-[var(--link-text)]"
                            style={{ 
                                color: 'var(--foreground)' 
                            }}
                        >
                            {title}
                        </h2>
                        {description && (
                            <p 
                                className="line-clamp-3"
                                style={{ color: 'var(--foreground-accent)' }}
                            >
                                {description}
                            </p>
                        )}
                        {(author || date || readTime) && (
                            <div 
                                className="flex items-center gap-4 text-sm"
                                style={{ color: 'var(--foreground-accent)' }}
                            >
                                {author && (
                                    <span 
                                        className="font-medium"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {author}
                                    </span>
                                )}
                                {date && (
                                    <time>
                                        {format(parse(date, 'yyyy-MM-dd', new Date()), 'MMM d, yyyy')}
                                    </time>
                                )}
                                {readTime && <span>{readTime}</span>}
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default BlogCard; 