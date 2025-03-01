import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#dad7cd] to-[#dad7cd]">
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:text-left text-center md:w-1/2">
                    <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-xl">{heroDetails.heading}</h1>
                    <p className="mt-4 text-foreground max-w-lg">{heroDetails.subheading}</p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start sm:gap-4 w-fit mx-auto md:mx-0">
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={420}
                        height={360}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 420px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className="relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
