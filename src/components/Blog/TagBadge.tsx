import React from 'react';

interface TagBadgeProps {
    tag: string;
    className?: string;
}

export default function TagBadge({ tag, className = '' }: TagBadgeProps) {
    return (
        <span
            className={`rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary ring-1 ring-primary/15 ${className}`}
        >
            {tag}
        </span>
    );
}
