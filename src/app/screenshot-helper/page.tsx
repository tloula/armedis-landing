"use client";

import {
    CheckInContent,
    CompleteContent,
    MissedContent,
    NotificationContent,
    PhoneCallBubble,
    SmsBubble,
} from "@/components/HeroAnimation";
import PhoneMockup from "@/components/PhoneMockup";

// Padding must be large enough to contain the floating bubbles that use
// negative offsets (e.g. -left-16, -right-16 = 64px) relative to the phone.
const SCENE_PADDING = 130;

function Scene({ name, children }: { name: string; children: React.ReactNode }) {
    return (
        <div
            data-scene={name}
            style={{ padding: SCENE_PADDING, display: "inline-block" }}
        >
            <div className="relative">
                <PhoneMockup className="w-[355px]">{children}</PhoneMockup>
            </div>
        </div>
    );
}

export default function ScreenshotHelper() {
    return (
        <div style={{ background: "transparent", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Scene name="notification">
                <NotificationContent />
            </Scene>

            <Scene name="checkin">
                <CheckInContent />
            </Scene>

            {/* Scenes with floating bubbles — bubbles must be siblings of PhoneMockup
                inside the same relative container so their absolute positioning works. */}
            <div
                data-scene="complete"
                style={{ padding: SCENE_PADDING, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className="w-[355px]">
                        <CompleteContent />
                    </PhoneMockup>
                    <SmsBubble variant="success" />
                </div>
            </div>

            <div
                data-scene="missed"
                style={{ padding: SCENE_PADDING, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className="w-[355px]">
                        <MissedContent />
                    </PhoneMockup>
                    <SmsBubble variant="alert" />
                    <PhoneCallBubble variant="alert" />
                </div>
            </div>

            {/* Standalone bubble screenshots */}
            <div data-scene="bubble-sms-success" style={{ padding: 20, display: "inline-block" }}>
                <SmsBubble variant="success" standalone />
            </div>

            <div data-scene="bubble-sms-alert" style={{ padding: 20, display: "inline-block" }}>
                <SmsBubble variant="alert" standalone />
            </div>

            <div data-scene="bubble-phone-call" style={{ padding: 20, display: "inline-block" }}>
                <PhoneCallBubble variant="alert" standalone />
            </div>
        </div>
    );
}
