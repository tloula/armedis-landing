"use client";

import React from 'react';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import HeroAnimation from './HeroAnimation';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-[760px] items-center justify-center overflow-x-clip pb-20 pt-32 md:pb-24 md:pt-36 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background">
                </div>
                <div className="absolute -top-32 right-[-12rem] h-[34rem] w-[34rem] rounded-full border-[90px] border-white/35" />
                <div className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full border-[70px] border-primary/10" />
            </div>

            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-[1.08fr_0.92fr] items-center gap-12 lg:gap-20">
                <div className="md:text-left text-center relative z-10">
                    <h1 className="text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem] lg:leading-[0.98] font-semibold tracking-[-0.06em] text-foreground max-w-3xl">{heroDetails.heading}</h1>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground-accent max-w-xl mx-auto md:mx-0">{heroDetails.subheading}</p>
                    <div className="mt-7 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start sm:gap-3 w-fit mx-auto md:mx-0">
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </div>
                </div>
                <div className="flex justify-center md:justify-end relative z-10 before:absolute before:inset-x-8 before:bottom-3 before:h-28 before:rounded-full before:bg-primary/20 before:blur-3xl">
                    <HeroAnimation />
                </div>
            </div>
        </section>
    );
};

export default Hero;
