import React from 'react';
import { BsCompass, BsEye, BsHeart, BsStars } from 'react-icons/bs';

import { aboutUsData } from '@/data/aboutUs';

const HEADING_ICONS: Record<string, React.ReactNode> = {
  "Our Story": <BsHeart />,
  "Our Mission": <BsCompass />,
  "Our Vision": <BsEye />,
  "Our Values": <BsStars />,
};

const AboutUs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {aboutUsData.content.map((item, index) => (
        <div key={index} className="card p-7 md:p-9">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary text-xl ring-1 ring-primary/15">
              {HEADING_ICONS[item.heading]}
            </span>
            <h4 className="text-2xl font-bold text-foreground">{item.heading}</h4>
          </div>
          {item.heading === "Our Values" ? (
            <ul className="space-y-4 text-foreground/80">
              {item.text.split('\n').map((value, i) => {
                const [label, content] = value.split(': ');
                return (
                  <li key={i} className="border-l-2 border-primary/40 pl-4">
                    <span className="block font-bold text-foreground">{label}</span>
                    <span className="text-base">{content}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-foreground/80 leading-relaxed">{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
