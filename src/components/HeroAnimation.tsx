"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsChatLeftTextFill, BsCheckCircleFill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { LuFrown, LuLaugh, LuMeh, LuPhone, LuSmile } from "react-icons/lu";
import PhoneMockup from "./PhoneMockup";

const STEPS = [
    { label: "Get Reminded" },
    { label: "Check In" },
    { label: "Family Updated" },
    { label: "Safety Net" },
];

const STEP_DURATION = 4000;

interface HeroSceneProps {
    adMode?: boolean;
}

interface HeroAnimationProps {
    loop?: boolean;
    stepDuration?: number;
}

const TODAY = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
});

// ─── Scene 1: Notification arrives ──────────────────────────────────

export function NotificationContent({ adMode = false }: HeroSceneProps) {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0eeea] to-[#e6e3de] flex flex-col">
            <div className={`flex justify-between items-center px-6 ${adMode ? "pt-12 pb-2" : "pt-14 pb-1"}`}>
                <span className={`${adMode ? "text-base" : "text-sm"} font-semibold text-foreground`}>9:00 AM</span>
                <span className={`${adMode ? "text-base" : "text-sm"} text-foreground/50 tracking-wider`}>● ● ●</span>
            </div>

            <div className={`text-center ${adMode ? "mt-7" : "mt-10 md:mt-14"}`}>
                <p className={`${adMode ? "text-base" : "text-sm"} text-foreground/60 tracking-widest uppercase`}>
                    {TODAY}
                </p>
                <p className={`${adMode ? "text-7xl" : "text-6xl md:text-7xl"} font-extralight text-foreground mt-1`}>
                    9:00
                </p>
            </div>

            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", bounce: 0.25, duration: 0.7 }}
                className={`mx-4 ${adMode ? "mt-6 p-5 rounded-[1.4rem]" : "mt-8 md:mt-12 p-4 rounded-2xl"} bg-white/85 backdrop-blur-md shadow-sm border border-white/50`}
            >
                <div className={`flex items-start ${adMode ? "gap-4" : "gap-3"}`}>
                    <motion.div
                        className={`${adMode ? "w-12 h-12" : "w-11 h-11"} rounded-xl bg-primary flex items-center justify-center flex-shrink-0`}
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <CiBellOn className={`${adMode ? "text-white text-2xl" : "text-white text-xl"}`} />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                            <p className={`${adMode ? "text-base" : "text-sm"} font-bold text-foreground tracking-wide`}>
                                CHECKIN MORE
                            </p>
                            <p className={`${adMode ? "text-sm" : "text-xs"} text-foreground/50`}>now</p>
                        </div>
                        <p className={`${adMode ? "text-base mt-1" : "text-sm mt-0.5"} text-foreground/80 leading-relaxed`}>
                            It&apos;s check-in time! Tap to check in now.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// ─── Scene 2: User checks in ────────────────────────────────────────

export function CheckInContent({ adMode = false }: HeroSceneProps) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setSelected(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const moods = [
        { icon: LuFrown, label: "Bad" },
        { icon: LuMeh, label: "Okay" },
        { icon: LuSmile, label: "Good" },
        { icon: LuLaugh, label: "Great" },
    ];

    return (
        <div className="absolute inset-0 bg-primary flex flex-col">
            <div className={`px-4 ${adMode ? "pt-12 pb-5" : "pt-14 pb-4"} relative`}>
                <span className={`absolute left-6 ${adMode ? "top-6 text-sm" : "top-7 text-xs"} font-medium text-white`}>9:00 AM</span>
                <p className={`${adMode ? "text-lg" : "text-base"} font-bold text-white text-center tracking-wide`}>
                    Check In
                </p>
            </div>

            <div className={`flex-1 flex flex-col items-center justify-center ${adMode ? "px-7" : "px-6"} bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]`}>
                <p className={`${adMode ? "text-xl" : "text-lg"} font-bold text-foreground`}>Good Morning Sarah!</p>
                <p className={`${adMode ? "text-base mt-1.5" : "text-sm mt-1"} text-foreground/60`}>How are you feeling?</p>

                <div className={`flex ${adMode ? "gap-3 mt-8" : "gap-1 md:gap-5 mt-7"}`}>
                    {moods.map((mood, i) => {
                        const Icon = mood.icon;
                        const isActive = i === 3 && selected;
                        return (
                            <div
                                key={mood.label}
                                className="flex flex-col items-center gap-1.5"
                            >
                                <div className={`${adMode ? "w-14 h-14" : "w-12 h-12 md:w-14 md:h-14"} rounded-full flex items-center justify-center`}>
                                    <Icon
                                        className={`${adMode ? "w-9 h-9" : "w-8 h-8 md:w-9 md:h-9"} stroke-[1.5] transition-colors duration-300 ${
                                            isActive
                                                ? "text-primary"
                                                : "text-foreground/50"
                                        }`}
                                    />
                                </div>
                                <span className={`${adMode ? "text-sm" : "text-xs"} transition-colors duration-300 ${
                                    isActive
                                        ? "text-primary font-semibold"
                                        : "text-foreground/60"
                                }`}>
                                    {mood.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <motion.div
                    className={`${adMode ? "mt-10" : "mt-9"} w-full`}
                    animate={{
                        scale: [1, 1, 0.93, 1.02, 1],
                    }}
                    transition={{
                        duration: 3,
                        times: [0, 0.5, 0.55, 0.62, 0.68],
                        ease: "easeInOut",
                    }}
                >
                    <div className={`bg-primary text-white rounded-xl ${adMode ? "py-3.5 text-lg" : "py-3 text-base"} text-center font-bold shadow-md`}>
                        Complete CheckIn ✓
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Scene 3: Check-in complete ─────────────────────────────────────

export function CompleteContent({ adMode = false }: HeroSceneProps) {
    return (
        <div className="absolute inset-0 bg-primary flex flex-col">
            <div className={`px-4 ${adMode ? "pt-12 pb-5" : "pt-14 pb-4"} relative`}>
                <span className={`absolute left-6 ${adMode ? "top-6 text-sm" : "top-7 text-xs"} font-medium text-white`}>9:00 AM</span>
                <p className={`${adMode ? "text-lg" : "text-base"} font-bold text-white text-center tracking-wide`}>
                    Check In
                </p>
            </div>

            <div className={`flex-1 flex flex-col items-center justify-center ${adMode ? "px-7" : "px-6"} bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]`}>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.6,
                    }}
                    className={`${adMode ? "w-28 h-28" : "w-24 h-24 md:w-28 md:h-28"} rounded-full bg-green-50 flex items-center justify-center`}
                >
                    <BsCheckCircleFill className={`${adMode ? "text-primary text-5xl" : "text-primary text-4xl md:text-5xl"}`} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className={`${adMode ? "text-2xl mt-5" : "text-xl mt-4"} font-bold text-foreground`}
                >
                    CheckIn Complete
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className={`${adMode ? "text-base mt-2.5" : "text-sm mt-2"} text-foreground/60`}
                >
                    Thanks for checking in!
                </motion.p>

            </div>
        </div>
    );
}

// ─── Scene 4: Missed check-in ───────────────────────────────────────

export function MissedContent({ adMode = false }: HeroSceneProps) {
    return (
        <div className="absolute inset-0 bg-foreground flex flex-col">
            <div className={`px-4 ${adMode ? "pt-12 pb-5" : "pt-14 pb-4"} relative`}>
                <span className={`absolute left-6 ${adMode ? "top-6 text-sm" : "top-7 text-xs"} font-medium text-white`}>11:00 AM</span>
                <p className={`${adMode ? "text-lg" : "text-base"} font-bold text-white text-center tracking-wide`}>
                    Check In
                </p>
            </div>

            <div className={`flex-1 flex flex-col items-center justify-center ${adMode ? "px-7" : "px-6"} bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]`}>
                <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        bounce: 0.35,
                    }}
                    className={`${adMode ? "w-28 h-28" : "w-24 h-24 md:w-28 md:h-28"} rounded-full bg-red-50 flex items-center justify-center`}
                >
                    <FiClock className={`${adMode ? "text-red-500 text-5xl" : "text-red-500 text-4xl md:text-5xl"}`} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className={`${adMode ? "text-2xl mt-5" : "text-xl mt-4"} font-bold text-foreground`}
                >
                    Missed Check-In
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className={`${adMode ? "text-base mt-2" : "text-sm mt-1.5"} text-foreground/60 text-center`}
                >
                    We notified Meridith that you missed your 9:00 AM check-in
                </motion.p>
            </div>
        </div>
    );
}

// ─── Floating SMS bubble ────────────────────────────────────────────

export function SmsBubble({ variant, standalone, adMode = false }: { variant: "success" | "alert"; standalone?: boolean; adMode?: boolean }) {
    const isAlert = variant === "alert";

    return (
        <motion.div
            initial={{ opacity: 0, x: standalone ? 0 : 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: standalone ? 0 : 30, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{
                delay: 0.7,
                type: "spring",
                bounce: 0.25,
                duration: 0.6,
            }}
            className={`
                ${standalone
                    ? `${adMode ? "relative w-[270px]" : "relative w-[230px]"}`
                    : `absolute z-20 ${adMode ? "w-[255px] -right-14" : "w-[190px] md:w-[230px] -right-8 md:-right-16 lg:-right-24"} bottom-2 md:bottom-auto ${isAlert ? "md:top-[48%]" : "md:top-[38%]"}`
                }
                bg-white rounded-xl ${adMode ? "p-4" : "p-3 md:p-3.5"} shadow-lg
                border ${isAlert ? "border-foreground/20" : "border-primary/20"}
            `}
        >
            <div className={`flex items-start ${adMode ? "gap-3" : "gap-2.5"}`}>
                <BsChatLeftTextFill
                    className={`${adMode ? "text-sm" : "text-xs"} flex-shrink-0 mt-0.5 ${
                        isAlert ? "text-red-500" : "text-primary"
                    }`}
                />
                <div className="min-w-0">
                    <p className={`${adMode ? "text-sm" : "text-xs md:text-sm"} font-bold text-gray-700`}>
                        {isAlert ? "CheckIn More" : "CheckIn More"}
                    </p>
                    <p className={`${adMode ? "text-sm mt-1" : "text-[11px] md:text-xs mt-0.5"} text-gray-500 leading-relaxed`}>
                        {isAlert
                            ? "Sarah missed her 9:00 AM check-in"
                            : "Sarah completed her check-in and is having a great day!"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Floating phone call bubble ──────────────────────────────────────

export function PhoneCallBubble({ variant, standalone, adMode = false }: { variant: "success" | "alert"; standalone?: boolean; adMode?: boolean }) {
    const isAlert = variant === "alert";

    return (
        <motion.div
            initial={{ opacity: 0, x: standalone ? 0 : -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: standalone ? 0 : -30, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{
                delay: 0.7,
                type: "spring",
                bounce: 0.25,
                duration: 0.6,
            }}
            className={`
                ${standalone
                    ? `${adMode ? "relative w-[285px]" : "relative w-[250px]"}`
                    : `${adMode ? "absolute z-20 w-[275px] -left-16 top-28 md:top-[24%]" : "absolute z-20 w-[210px] md:w-[250px] -left-8 top-32 md:top-[26%] md:-left-16 lg:-left-24"}`
                }
                bg-white rounded-xl ${adMode ? "p-4" : "p-3 md:p-3.5"} shadow-lg
                border ${isAlert ? "border-foreground/20" : "border-primary/20"}
            `}
        >
            <div className={`flex items-center ${adMode ? "gap-3" : "gap-2.5"}`}>
                {/* App icon */}
                <motion.div
                    className={`${adMode ? "w-10 h-10" : "w-9 h-9"} rounded-xl overflow-hidden flex-shrink-0`}
                    animate={{ rotate: [0, -12, 12, -12, 12, -8, 8, 0] }}
                    transition={{
                        delay: 1.3,
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                    }}
                >
                    <Image src="/images/logo-dark.png" alt="CheckIn More" width={36} height={36} className="w-full h-full object-cover" />
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className={`${adMode ? "text-sm" : "text-xs"} font-bold text-gray-800 leading-tight`}>CheckIn More</p>
                    <p className={`${adMode ? "text-xs" : "text-[10px]"} text-gray-400 leading-tight`}>Incoming Call</p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-1.5">
                    <button className={`${adMode ? "w-9 h-9" : "w-8 h-8"} rounded-full bg-green-500 flex items-center justify-center flex-shrink-0`}>
                        <LuPhone className={`${adMode ? "text-white text-base" : "text-white text-sm"}`} />
                    </button>
                    <button className={`${adMode ? "w-9 h-9" : "w-8 h-8"} rounded-full bg-red-500 flex items-center justify-center flex-shrink-0`}>
                        <LuPhone className={`${adMode ? "text-white text-base" : "text-white text-sm"} rotate-[135deg]`} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ─────────────────────────────────────────────────

export default function HeroAnimation({
    loop = true,
    stepDuration = STEP_DURATION,
}: HeroAnimationProps) {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimer = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    useEffect(() => {
        clearTimer();

        if (isPaused) {
            return;
        }

        const isLastStep = activeStep >= STEPS.length - 1;
        if (!loop && isLastStep) {
            return;
        }

        timeoutRef.current = setTimeout(() => {
            setActiveStep((prev) => {
                if (loop) {
                    return (prev + 1) % STEPS.length;
                }

                return Math.min(prev + 1, STEPS.length - 1);
            });
        }, stepDuration);

        return clearTimer;
    }, [activeStep, clearTimer, isPaused, loop, stepDuration]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        clearTimer();
    };

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Phone + floating SMS container */}
            <div className="relative">
                {/* Phone frame */}
                <PhoneMockup className="w-[260px] md:w-[355px]">
                    <AnimatePresence>
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.4 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.35 },
                            }}
                            className="absolute inset-0"
                        >
                            {activeStep === 0 && (
                                <NotificationContent />
                            )}
                            {activeStep === 1 && <CheckInContent />}
                            {activeStep === 2 && <CompleteContent />}
                            {activeStep === 3 && <MissedContent />}
                        </motion.div>
                    </AnimatePresence>
                </PhoneMockup>

                {/* Floating SMS bubbles */}
                <AnimatePresence>
                    {activeStep === 2 && (
                        <SmsBubble key="sms-success" variant="success" />
                    )}
                    {activeStep === 3 && (
                        <>
                        <SmsBubble key="sms-alert" variant="alert" />
                        <PhoneCallBubble key="phone-alert" variant="alert" />
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Step indicators */}
            <div className="flex flex-col items-center mt-5 gap-2 z-10">
                <div className="flex gap-1.5">
                    {STEPS.map((step, i) => (
                        <button
                            key={step.label}
                            onClick={() => handleStepClick(i)}
                            aria-label={`Step ${i + 1}: ${step.label}`}
                            className={`rounded-full transition-all duration-300 ${
                                i === activeStep
                                    ? "w-7 h-2.5 bg-primary"
                                    : "w-2.5 h-2.5 bg-foreground hover:bg-foreground"
                            }`}
                        />
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeStep}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="text-[11px] md:text-xs font-medium text-foreground/60"
                    >
                        {STEPS[activeStep].label}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
