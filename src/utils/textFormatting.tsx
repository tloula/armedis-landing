import React from 'react';

export const formatText = (text: string): React.ReactNode[] => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        if (line.trim().startsWith('-')) {
            return (
                <ul key={idx} className="list-disc pl-5">
                    <li dangerouslySetInnerHTML={{ __html: formattedLine.trim().substring(1).trim() }} />
                </ul>
            );
        } else if (line.trim() === '') {
            return <br key={idx} />;
        } else {
            return <p key={idx} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
        }
    });
};
