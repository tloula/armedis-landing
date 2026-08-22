import React from 'react';
import { aboutUsData } from '@/data/aboutUs';

const AboutUs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {aboutUsData.content.map((item, index) => (
        <div key={index} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-8">
          <h4 className="text-xl font-semibold mb-3">{item.heading}</h4>
          {item.heading === "Our Values" ? (
            <div className="space-y-2 text-foreground-accent leading-relaxed">
              {item.text.split('\n').map((value, i) => {
                const [label, content] = value.split(': ');
                return (
                  <div key={i}>
                    <span className="font-bold">{label}</span>: {content}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-foreground-accent leading-relaxed">{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
