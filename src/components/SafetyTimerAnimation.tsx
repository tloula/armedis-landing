"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import PhoneMockup from "./PhoneMockup";

// ─── Step config ─────────────────────────────────────────────────────────────

const STEPS = [
    { label: "Home Safe" },
    { label: "Timer Missed" },
];

// Duration each step stays visible before auto-advancing (ms)
const STEP_DURATIONS = [8500, 10000];

// ─── Message types ───────────────────────────────────────────────────────────

interface SmsMessage {
    from: "user" | "bot" | "divider";
    text: string;
    delay: number; // seconds from scene mount
    isAlert?: boolean;
}

const safeReturnMessages: SmsMessage[] = [
    { from: "user", text: "Going on run, 1h", delay: 0.5 },
    { from: "bot", text: "Got it! Timer set for 1 hour. I'll check in when time's up. 🏃", delay: 1.7 },
    { from: "divider", text: "1 hour later", delay: 3.5 },
    { from: "user", text: "Home safe!", delay: 4.5 },
    { from: "bot", text: "Great! Timer cleared. Stay safe! ✓", delay: 5.7 },
];

const missedTimerMessages: SmsMessage[] = [
    { from: "user", text: "Going on run, 1h", delay: 0.5 },
    { from: "bot", text: "Got it! Timer set for 1 hour.", delay: 1.7 },
    { from: "divider", text: "Timer expired — no response", delay: 3.2, isAlert: true },
    { from: "bot", text: "Are you safe? Check-in now or we'll notify your contacts.", delay: 4.0, isAlert: true },
    { from: "bot", text: "We've notified Meredith and Jon.", delay: 5.8, isAlert: true },
];

const ALL_MESSAGES = [safeReturnMessages, missedTimerMessages];

// ─── Individual message bubble ────────────────────────────────────────────────

function SmsMessageBubble({ msg, isNew }: { msg: SmsMessage; isNew: boolean }) {
    const isUser = msg.from === "user";

    if (msg.from === "divider") {
        return (
            <motion.div
                initial={isNew ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 py-2"
            >
                <div className={`flex-1 h-px ${msg.isAlert ? "bg-red-300/60" : "bg-foreground/15"}`} />
                <p className={`text-[9px] font-medium uppercase tracking-wider ${msg.isAlert ? "text-red-500" : "text-foreground/40"}`}>
                    {msg.text}
                </p>
                <div className={`flex-1 h-px ${msg.isAlert ? "bg-red-300/60" : "bg-foreground/15"}`} />
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={isNew ? { opacity: 0, scale: 0.85, x: isUser ? 14 : -14, y: 4 } : false}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", bounce: 0.28, duration: 0.45 }}
            className={`flex items-end gap-1.5 mb-0.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
        >
            {!isUser && (
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src="/images/logo-dark.png"
                        alt="CheckIn More"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div
                className={`
                    max-w-[76%] px-2.5 py-1.5 rounded-2xl text-[10px] md:text-[11px] leading-relaxed
                    ${isUser
                        ? "bg-primary text-white rounded-br-sm"
                        : msg.isAlert
                            ? "bg-red-50 text-red-700 rounded-bl-sm border border-red-200"
                            : "bg-white text-foreground rounded-bl-sm shadow-sm"
                    }
                `}
            >
                {msg.text}
            </div>
        </motion.div>
    );
}

// ─── SMS conversation phone screen ───────────────────────────────────────────

function SmsConversationScreen({ messages }: { messages: SmsMessage[] }) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        setVisibleCount(0);
        const timers = messages.map((msg, i) =>
            setTimeout(() => setVisibleCount(i + 1), msg.delay * 1000)
        );
        return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    const visibleMessages = messages.slice(0, visibleCount);

    return (
        <div className="absolute inset-0 bg-[#f2f2f7] flex flex-col">
            {/* Status bar */}
            <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span className="text-[10px] font-semibold text-foreground">9:41</span>
                <span className="text-[10px] text-foreground/40 tracking-widest">● ● ●</span>
            </div>

            {/* Contact header */}
            <div className="flex flex-col items-center pb-2.5 border-b border-black/[0.06]">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
                    <Image
                        src="/images/logo-dark.png"
                        alt="CheckIn More"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-[11px] font-semibold text-foreground mt-1 leading-tight">CheckIn More</p>
                <p className="text-[9px] text-foreground/40 leading-tight">Business</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-hidden px-2.5 py-2 flex flex-col justify-end gap-0">
                <AnimatePresence initial={false}>
                    {visibleMessages.map((msg, i) => (
                        <SmsMessageBubble
                            key={i}
                            msg={msg}
                            isNew={i === visibleCount - 1}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Input bar */}
            <div className="px-2.5 pb-7 pt-1.5">
                <div className="bg-white rounded-full px-3 py-1.5 border border-black/10 flex items-center">
                    <span className="text-[9px] text-foreground/30 flex-1">iMessage</span>
                </div>
            </div>
        </div>
    );
}

// ─── Floating notifications (for missed timer scene) ─────────────────────────

function MeredithSmsNotification() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ delay: 6.3, type: "spring", bounce: 0.25, duration: 0.6 }}
            className="absolute z-20 w-[178px] md:w-[210px] -right-5 bottom-10 md:-right-12 lg:-right-20 bg-white rounded-2xl p-3 shadow-lg border border-foreground/10"
        >
            <div className="flex items-start gap-2">
                <BsChatLeftTextFill className="text-red-500 text-xs flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] font-bold text-gray-700">Meredith</p>
                        <p className="text-[9px] text-gray-400">now</p>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">
                        Sarah missed her safety timer — 1 hour run
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function JonPhoneNotification() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ delay: 7.2, type: "spring", bounce: 0.25, duration: 0.6 }}
            className="absolute z-20 w-[185px] md:w-[225px] -left-5 top-[28%] md:-left-12 lg:-left-20 bg-white rounded-2xl p-3 shadow-lg border border-foreground/10"
        >
            <div className="flex items-center gap-2.5">
                <motion.div
                    className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0"
                    animate={{ rotate: [0, -12, 12, -12, 12, -8, 8, 0] }}
                    transition={{
                        delay: 7.8,
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/images/logo-dark.png"
                        alt="CheckIn More"
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-gray-800 leading-tight">Jon</p>
                    <p className="text-[9px] text-gray-400 leading-tight">Incoming Call</p>
                </div>
                <div className="flex gap-1.5">
                    <button className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <LuPhone className="text-white text-xs" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <LuPhone className="text-white text-xs rotate-[135deg]" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function SafetyTimerAnimation() {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setTimeout(() => {
            setActiveStep((prev) => (prev + 1) % STEPS.length);
        }, STEP_DURATIONS[activeStep]);
        return () => clearTimeout(timer);
    }, [isPaused, activeStep]);

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative">
                <PhoneMockup className="w-[260px] md:w-[340px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.35 } }}
                            exit={{ opacity: 0, transition: { duration: 0.25 } }}
                            className="absolute inset-0"
                        >
                            <SmsConversationScreen messages={ALL_MESSAGES[activeStep]} />
                        </motion.div>
                    </AnimatePresence>
                </PhoneMockup>

                <AnimatePresence>
                    {activeStep === 1 && (
                        <>
                            <MeredithSmsNotification key="meredith-sms" />
                            <JonPhoneNotification key="jon-phone" />
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
                            onClick={() => setActiveStep(i)}
                            aria-label={`Step ${i + 1}: ${step.label}`}
                            className={`rounded-full transition-all duration-300 ${
                                i === activeStep
                                    ? "w-7 h-2.5 bg-primary"
                                    : "w-2.5 h-2.5 bg-foreground/30 hover:bg-foreground/50"
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
