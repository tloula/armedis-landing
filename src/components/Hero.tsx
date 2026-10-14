"use client";

import { motion } from 'framer-motion';
import React from 'react';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import HeroAnimation from './HeroAnimation';
import PageBackdrop from './PageBackdrop';

import { heroDetails } from '@/data/hero';

const HIGHLIGHT = 'living alone';

// Keeps hyphenated words like "check-ins" from breaking across lines
function keepHyphensTogether(text: string) {
    return text.split(/(\S+-\S+)/).map((part, i) =>
        part.includes('-') ? <span key={i} className="whitespace-nowrap">{part}</span> : part
    );
}

// Wraps the highlight phrase (if present) in an accent colour span
function renderHeading(heading: string) {
    const index = heading.indexOf(HIGHLIGHT);
    if (index === -1) {
        return keepHyphensTogether(heading);
    }

    return (
        <>
            {keepHyphensTogether(heading.slice(0, index))}
            <span className="whitespace-nowrap text-primary">
                {HIGHLIGHT}
            </span>
            {keepHyphensTogether(heading.slice(index + HIGHLIGHT.length))}
        </>
    );
}

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center overflow-x-clip pb-24 md:pb-32 pt-28 md:pt-40 px-5"
        >
            <PageBackdrop />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 md:gap-8">
                <motion.div
                    className="md:text-left text-center md:w-1/2 relative z-10"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="text-[2.6rem] leading-[1.08] md:text-6xl lg:text-[4rem] md:leading-[1.05] font-extrabold text-foreground max-w-lg md:max-w-xl text-balance">
                        {renderHeading(heroDetails.heading)}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80 max-w-lg mx-auto md:mx-0">{heroDetails.subheading}</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start sm:gap-4 w-fit mx-auto md:mx-0">
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-end relative z-10"
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Halo behind the phone */}
                    <div aria-hidden="true" className="absolute left-1/2 md:left-auto md:right-[8%] top-[42%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 h-[340px] w-[340px] md:h-[440px] md:w-[440px] rounded-full bg-[radial-gradient(circle,rgba(95,121,79,0.28)_0%,rgba(95,121,79,0)_70%)]" />
                    <HeroAnimation />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
