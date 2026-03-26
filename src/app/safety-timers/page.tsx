"use client";

import { motion } from "framer-motion";
import AppStoreButton from "@/components/AppStoreButton";
import PlayStoreButton from "@/components/PlayStoreButton";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Section from "@/components/Section";
import SafetyTimerAnimation from "@/components/SafetyTimerAnimation";
import SafetyTimerPricing from "@/components/Pricing/SafetyTimerPricing";
import { LuBell, LuShieldCheck, LuTimer } from "react-icons/lu";

const containerVariants = {
    offscreen: { opacity: 0, y: 80 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const childVariants = {
    offscreen: { opacity: 0, x: -40 },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", bounce: 0.2, duration: 1 },
    },
};

const howItWorksSteps = [
    {
        icon: LuTimer,
        title: "Set a Timer",
        description:
            "Open the app and set a duration with an optional reason — \"45 minute run\" or \"hiking trail, back by 3pm\".",
    },
    {
        icon: LuShieldCheck,
        title: "Do Your Thing",
        description:
            "Go on your run, your date, your drive. CheckIn More runs quietly in the background. No interruptions until it matters.",
    },
    {
        icon: LuBell,
        title: "Contacts Notified if Missed",
        description:
            "If you don't check back in, your contacts are notified after a five-minute grace period — automatically, no action needed.",
    },
];

export default function SafetyTimers() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="relative flex items-center justify-center overflow-x-clip pb-0 pt-32 md:pt-40 px-5">
                <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                    <div className="absolute inset-0 h-full w-full bg-hero-background [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
                </div>
                <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[#dad7cd] to-[#dad7cd]" />

                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Text column */}
                    <div className="md:text-left text-center md:w-1/2 relative z-10">
                        <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-xl">
                            Safety Timers: A Check-In for the Unexpected
                        </h1>
                        <p className="mt-4 text-foreground/70 max-w-lg leading-relaxed">
                            Set a countdown before a solo run, a first date, or a late-night drive.
                            If you don&apos;t check back in, your contacts are notified automatically.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start sm:gap-4 w-fit mx-auto md:mx-0">
                            <AppStoreButton dark />
                            <PlayStoreButton dark />
                        </div>
                    </div>

                    {/* Animation column */}
                    <div className="md:w-1/2 flex justify-center md:justify-end relative z-10 pb-24 md:pb-0">
                        <SafetyTimerAnimation />
                    </div>
                </div>
            </section>

            <Container>
                {/* ── How It Works ──────────────────────────────────────────── */}
                <Section
                    id="how-it-works"
                    title="How Safety Timers Work"
                    description="Simple by design. Set a timer, go, check back in."
                >
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-5"
                        variants={containerVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                    >
                        {howItWorksSteps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={childVariants}
                                    className="flex flex-col items-center text-center p-7 rounded-2xl bg-white/60 border border-foreground/10 shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="text-primary text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Section>

                {/* ── Pricing ────────────────────────────────────────────────── */}
                <Section
                    id="pricing"
                    title="Simple Pricing"
                    description="Transparent pricing for your peace of mind."
                >
                    <SafetyTimerPricing />
                </Section>

                <CTA />
            </Container>
        </>
    );
}
