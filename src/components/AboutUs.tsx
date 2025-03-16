import React from 'react';
import { aboutUsData } from '@/data/aboutUs';

const AboutUs: React.FC = () => {
  const halfLength = Math.floor(aboutUsData.content.length / 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {aboutUsData.content.map((item, index) => (
        <div key={index}>
          <h4 className="text-xl font-semibold mb-2">{item.heading}</h4>
          {item.heading === "Our Values" ? (
            <div className="space-y-1 text-foreground-accent">
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
            <p className="text-foreground-accent">{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;