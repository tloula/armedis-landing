"use client";

import { motion } from "framer-motion";
import AppStoreButton from "@/components/AppStoreButton";
import PlayStoreButton from "@/components/PlayStoreButton";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import PageBackdrop from "@/components/PageBackdrop";
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
    offscreen: { opacity: 0, y: 24 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.15, duration: 0.8 },
    },
};

const howItWorksSteps = [
    {
        icon: LuTimer,
        title: "Set a Timer",
        description:
            "Open the app and set a duration with an optional reason - or just text us — \"45 minute run\" or \"hiking trail, back by 3pm\".",
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
            <section className="relative flex items-center justify-center overflow-x-clip pb-16 md:pb-24 pt-28 md:pt-40 px-5">
                <PageBackdrop />

                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 md:gap-8">
                    {/* Text column */}
                    <div className="md:text-left text-center md:w-1/2 relative z-10">
                        <h1 className="text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05] font-extrabold text-foreground max-w-lg md:max-w-xl text-balance">
                            Safety Timers: A Check-In for the Unexpected
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Set a countdown before a solo run, a first date, or a late-night drive.
                            If you don&apos;t check back in, your contacts are notified automatically.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start sm:gap-4 w-fit mx-auto md:mx-0">
                            <AppStoreButton dark />
                            <PlayStoreButton dark />
                        </div>
                    </div>

                    {/* Animation column */}
                    <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
                        {/* Halo behind the phone */}
                        <div aria-hidden="true" className="absolute left-1/2 md:left-auto md:right-[8%] top-[42%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 h-[340px] w-[340px] md:h-[440px] md:w-[440px] rounded-full bg-[radial-gradient(circle,rgba(95,121,79,0.28)_0%,rgba(95,121,79,0)_70%)]" />
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
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
                                    className="card flex flex-col items-start p-7 md:p-8"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-soft ring-1 ring-primary/15 flex items-center justify-center mb-5">
                                        <Icon className="text-primary text-[22px]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-base text-foreground/75 leading-relaxed">{step.description}</p>
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
