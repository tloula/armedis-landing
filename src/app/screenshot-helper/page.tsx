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

function Scene({
    name,
    children,
    phoneClassName,
    scenePadding,
    contentStyle,
}: {
    name: string;
    children: React.ReactNode;
    phoneClassName: string;
    scenePadding: number;
    contentStyle?: React.CSSProperties;
}) {
    return (
        <div
            data-scene={name}
            style={{ padding: scenePadding, display: "inline-block" }}
        >
            <div className="relative" style={contentStyle}>
                <PhoneMockup className={phoneClassName}>{children}</PhoneMockup>
            </div>
        </div>
    );
}

export default function ScreenshotHelper({
    searchParams,
}: {
    searchParams?: { variant?: string };
}) {
    const isAdVariant = searchParams?.variant === "ad";
    const phoneClassName = "w-[355px]";
    const scenePadding = SCENE_PADDING;
    const standaloneBubbleStyle = isAdVariant
        ? { transform: "scale(1.08)", transformOrigin: "top left" as const }
        : undefined;

    return (
        <div style={{ background: "transparent", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Scene
                name="notification"
                phoneClassName={phoneClassName}
                scenePadding={scenePadding}
            >
                <NotificationContent adMode={isAdVariant} />
            </Scene>

            <Scene
                name="checkin"
                phoneClassName={phoneClassName}
                scenePadding={scenePadding}
            >
                <CheckInContent adMode={isAdVariant} />
            </Scene>

            {/* Scenes with floating bubbles — bubbles must be siblings of PhoneMockup
                inside the same relative container so their absolute positioning works. */}
            <div
                data-scene="complete"
                style={{ padding: scenePadding, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className={phoneClassName}>
                        <CompleteContent adMode={isAdVariant} />
                    </PhoneMockup>
                    <SmsBubble variant="success" adMode={isAdVariant} />
                </div>
            </div>

            <div
                data-scene="missed"
                style={{ padding: scenePadding, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className={phoneClassName}>
                        <MissedContent adMode={isAdVariant} />
                    </PhoneMockup>
                    <SmsBubble variant="alert" adMode={isAdVariant} />
                    <PhoneCallBubble variant="alert" adMode={isAdVariant} />
                </div>
            </div>

            {/* Standalone bubble screenshots */}
            <div data-scene="bubble-sms-success" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <SmsBubble variant="success" standalone adMode={isAdVariant} />
                </div>
            </div>

            <div data-scene="bubble-sms-alert" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <SmsBubble variant="alert" standalone adMode={isAdVariant} />
                </div>
            </div>

            <div data-scene="bubble-phone-call" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <PhoneCallBubble variant="alert" standalone adMode={isAdVariant} />
                </div>
            </div>
        </div>
    );
}
