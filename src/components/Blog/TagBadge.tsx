import React from 'react';

interface TagBadgeProps {
    tag: string;
    className?: string;
}

export default function TagBadge({ tag, className = '' }: TagBadgeProps) {
    return (
        <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}
            style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'var(--background)' 
            }}
        >
            {tag}
        </span>
    );
} 