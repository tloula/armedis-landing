import { IHowItWorksSection } from "@/types";

export const safetyTimerSections: IHowItWorksSection[] = [
    {
        title: "What Are Safety Timers?",
        description: `Safety timers are a different kind of check-in — not scheduled, but on-demand. Set a countdown before a solo run, a first date, a late-night drive, or any moment where you want someone to know you got back okay. If you don't check in when the timer ends, CheckIn More waits five minutes, then notifies your contacts automatically.`,
    },
    {
        title: "How It Works",
        subsections: [
            {
                subtitle: "Set a Timer",
                description: "Open the app and set a duration with an optional reason — \"45 minute run\" or \"hiking trail, back by 3pm\". That's all it takes to activate a safety net.",
            },
            {
                subtitle: "Do Your Thing",
                description: "Go on your run, your date, your drive. CheckIn More runs quietly in the background. No interruptions until it matters.",
            },
            {
                subtitle: "Check Back In",
                description: "When you're back, open the app and cancel the timer. If you forget — or can't — your contacts are notified after a five-minute grace period.",
            },
        ]
    },
    {
        title: "Manage Timers via SMS",
        description: `On Plus and Premium plans, you can create and manage safety timers entirely over SMS — no app required.

Just text CheckIn More directly:

- **"45m going on run"**
- **"date night, back by 10:30pm"**
- **"heading to the trailhead, 2 hours"**

And when you're back, texting something like "just got home" or "I'm back" cancels the timer. You can also adjust mid-timer if plans change:

- **"need 30 more minutes"**
- **"running late, back by midnight"**
- **"cancel"**

No fumbling with the app when your hands are full.`,
    },
    {
        title: "Safety Timers by Plan",
        description: `**Free** — 1 safety timer per day, email notification to 1 contact on missed timer.

**Plus** — Unlimited safety timers, SMS timer management, email + SMS notifications to unlimited contacts on missed timer.

**Premium** — Everything in Plus, plus AI phone call notification on missed timer.

Free users get one safety timer per day — which, for most people in most situations, is exactly what they need. Heading somewhere and want a simple safety net? Set the timer, go, check back in.`,
    },
];
