"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCheckCircleFill, BsChatLeftTextFill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { LuFrown, LuMeh, LuSmile, LuLaugh } from "react-icons/lu";

const STEPS = [
    { label: "Get Reminded" },
    { label: "Check In" },
    { label: "Family Updated" },
    { label: "Safety Net" },
];

const STEP_DURATION = 4000;

const TODAY = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
});

// ─── Scene 1: Notification arrives ──────────────────────────────────

function NotificationContent() {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0eeea] to-[#e6e3de] flex flex-col">
            <div className="flex justify-between items-center px-6 pt-14 pb-1">
                <span className="text-sm font-semibold text-foreground">9:00 AM</span>
                <span className="text-sm text-foreground/50 tracking-wider">● ● ●</span>
            </div>

            <div className="text-center mt-10 md:mt-14">
                <p className="text-sm text-foreground/60 tracking-widest uppercase">
                    {TODAY}
                </p>
                <p className="text-6xl md:text-7xl font-extralight text-foreground mt-1">
                    9:00
                </p>
            </div>

            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", bounce: 0.25, duration: 0.7 }}
                className="mx-4 mt-8 md:mt-12 bg-white/85 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/50"
            >
                <div className="flex items-start gap-3">
                    <motion.div
                        className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0"
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <CiBellOn className="text-white text-xl" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-foreground tracking-wide">
                                CHECKIN MORE
                            </p>
                            <p className="text-xs text-foreground/50">now</p>
                        </div>
                        <p className="text-sm text-foreground/80 mt-0.5 leading-relaxed">
                            It&apos;s check-in time! Tap to check in now.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// ─── Scene 2: User checks in ────────────────────────────────────────

function CheckInContent() {
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
            <div className="px-4 pt-14 pb-4 relative">
                <span className="absolute top-7 left-6 text-xs font-medium text-white">9:00 AM</span>
                <p className="text-base font-bold text-white text-center tracking-wide">
                    Check In
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-4 bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]">
                <p className="text-lg font-bold text-foreground">Good Morning Sarah!</p>
                <p className="text-sm text-foreground/60 mt-1">How are you feeling?</p>

                <div className="flex gap-5 mt-7">
                    {moods.map((mood, i) => {
                        const Icon = mood.icon;
                        const isActive = i === 3 && selected;
                        return (
                            <div
                                key={mood.label}
                                className="flex flex-col items-center gap-1.5"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                                    <Icon
                                        className={`w-8 h-8 md:w-9 md:h-9 stroke-[1.5] transition-colors duration-300 ${
                                            isActive
                                                ? "text-primary"
                                                : "text-foreground/50"
                                        }`}
                                    />
                                </div>
                                <span className={`text-xs transition-colors duration-300 ${
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
                    className="mt-9 w-full"
                    animate={{
                        scale: [1, 1, 0.93, 1.02, 1],
                    }}
                    transition={{
                        duration: 3,
                        times: [0, 0.5, 0.55, 0.62, 0.68],
                        ease: "easeInOut",
                    }}
                >
                    <div className="bg-primary text-white rounded-xl py-3 text-center text-base font-bold shadow-md">
                        Complete CheckIn ✓
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// ─── Scene 3: Check-in complete ─────────────────────────────────────

function CompleteContent() {
    return (
        <div className="absolute inset-0 bg-primary flex flex-col">
            <div className="px-4 pt-14 pb-4 relative">
                <span className="absolute top-7 left-6 text-xs font-medium text-white">9:00 AM</span>
                <p className="text-base font-bold text-white text-center tracking-wide">
                    Check In
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.6,
                    }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-green-50 flex items-center justify-center"
                >
                    <BsCheckCircleFill className="text-primary text-4xl md:text-5xl" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-xl font-bold text-foreground mt-4"
                >
                    CheckIn Complete
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="text-sm text-foreground/60 mt-2"
                >
                    Thanks for checking in!
                </motion.p>

            </div>
        </div>
    );
}

// ─── Scene 4: Missed check-in ───────────────────────────────────────

function MissedContent() {
    return (
        <div className="absolute inset-0 bg-foreground flex flex-col">
            <div className="px-4 pt-14 pb-4 relative">
                <span className="absolute top-7 left-6 text-xs font-medium text-white">11:00 AM</span>
                <p className="text-base font-bold text-white text-center tracking-wide">
                    Check In
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#f0eeea] to-[#e6e3de]">
                <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        bounce: 0.35,
                    }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-red-50 flex items-center justify-center"
                >
                    <FiClock className="text-red-500 text-4xl md:text-5xl" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="text-xl font-bold text-foreground mt-4"
                >
                    Missed Check-In
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="text-sm text-foreground/60 mt-1.5 text-center"
                >
                    We notified Meridith that you missed your 9:00 AM check-in
                </motion.p>
            </div>
        </div>
    );
}

// ─── Floating SMS bubble ────────────────────────────────────────────

function SmsBubble({ variant }: { variant: "success" | "alert" }) {
    const isAlert = variant === "alert";

    return (
        <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{
                delay: 0.7,
                type: "spring",
                bounce: 0.25,
                duration: 0.6,
            }}
            className={`
                absolute z-20 w-[190px] md:w-[230px]
                -right-8 bottom-2
                md:bottom-auto md:-right-16 lg:-right-24
                ${isAlert ? "md:top-[48%]" : "md:top-[38%]"}
                bg-white rounded-xl p-3 md:p-3.5 shadow-lg
                border ${isAlert ? "border-foreground/20" : "border-primary/20"}
            `}
        >
            <div className="flex items-start gap-2.5">
                <BsChatLeftTextFill
                    className={`text-xs flex-shrink-0 mt-0.5 ${
                        isAlert ? "text-red-500" : "text-primary"
                    }`}
                />
                <div className="min-w-0">
                    <p className="text-xs md:text-sm font-bold text-gray-700">
                        {isAlert ? "CheckIn More" : "CheckIn More"}
                    </p>
                    <p className="text-[11px] md:text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {isAlert
                            ? "Sarah missed her 9:00 AM check-in"
                            : "Sarah completed her check-in and is having a great day!"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main component ─────────────────────────────────────────────────

export default function HeroAnimation() {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % STEPS.length);
        }, STEP_DURATION);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            startTimer();
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, startTimer]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        startTimer();
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
                <div className="relative w-[260px] md:w-[355px]">
                    {/* Side buttons */}
                    <div className="absolute -left-[2px] top-[18%] w-[3px] h-8 bg-[#2a2323] rounded-l-sm" />
                    <div className="absolute -left-[2px] top-[28%] w-[3px] h-12 bg-[#2a2323] rounded-l-sm" />
                    <div className="absolute -left-[2px] top-[38%] w-[3px] h-12 bg-[#2a2323] rounded-l-sm" />
                    <div className="absolute -right-[2px] top-[30%] w-[3px] h-16 bg-[#2a2323] rounded-r-sm" />

                    <div className="bg-gradient-to-br from-[#2a2323] via-[#1c1817] to-[#141010] rounded-[2.5rem] p-[7px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4),0_8px_20px_-6px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.08]">
                        {/* Dynamic Island */}
                        <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-20 md:w-24 h-[22px] md:h-[26px] bg-[#0a0808] rounded-full z-20" />

                        {/* Screen */}
                        <div className="relative bg-[#f0eeea] rounded-[2.2rem] overflow-hidden aspect-[9/17.5]">
                            {/* Screen inner shadow for depth */}
                            <div className="absolute inset-0 z-[5] pointer-events-none rounded-[2.2rem] shadow-[inset_0_0_8px_rgba(0,0,0,0.08)]" />
                            {/* Subtle glass reflection */}
                            <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

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

                            {/* Home indicator bar */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-black/20 rounded-full z-10" />
                        </div>
                    </div>
                </div>

                {/* Floating SMS bubbles */}
                <AnimatePresence>
                    {activeStep === 2 && (
                        <SmsBubble key="sms-success" variant="success" />
                    )}
                    {activeStep === 3 && (
                        <SmsBubble key="sms-alert" variant="alert" />
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
