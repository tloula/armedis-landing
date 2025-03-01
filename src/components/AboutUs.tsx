import React from 'react';
import Image from 'next/image';
import { aboutUsData } from '@/data/aboutUs';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <div className="lg:w-1/2">
        <Image
          src={aboutUsData.imagePath}
          alt="About Us"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-secondary mb-4">{aboutUsData.subtitle}</h3>
        <p className="text-foreground-accent mb-6">{aboutUsData.description}</p>
        
        <div className="space-y-6">
          {aboutUsData.content.map((item, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-2">{item.heading}</h4>
              <p className="text-foreground-accent">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;