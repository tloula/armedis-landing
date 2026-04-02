import {
    CheckInContent,
    CompleteContent,
    MissedContent,
    NotificationContent,
    PhoneCallBubble,
    SmsBubble,
} from "@/components/HeroAnimation";
import PhoneMockup from "@/components/PhoneMockup";

const SCENE_PADDING = 130;

function Scene({
    name,
    children,
    phoneClassName,
    scenePadding,
}: {
    name: string;
    children: React.ReactNode;
    phoneClassName: string;
    scenePadding: number;
}) {
    return (
        <div
            data-scene={name}
            style={{ padding: scenePadding, display: "inline-block" }}
        >
            <div className="relative">
                <PhoneMockup className={phoneClassName}>{children}</PhoneMockup>
            </div>
        </div>
    );
}

export default function ScreenshotHelperView({
    adMode = false,
}: {
    adMode?: boolean;
}) {
    const phoneClassName = "w-[355px]";
    const standaloneBubbleStyle = adMode
        ? { transform: "scale(1.08)", transformOrigin: "top left" as const }
        : undefined;

    return (
        <div style={{ background: "transparent", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Scene
                name="notification"
                phoneClassName={phoneClassName}
                scenePadding={SCENE_PADDING}
            >
                <NotificationContent adMode={adMode} />
            </Scene>

            <Scene
                name="checkin"
                phoneClassName={phoneClassName}
                scenePadding={SCENE_PADDING}
            >
                <CheckInContent adMode={adMode} />
            </Scene>

            <div
                data-scene="complete"
                style={{ padding: SCENE_PADDING, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className={phoneClassName}>
                        <CompleteContent adMode={adMode} />
                    </PhoneMockup>
                    <SmsBubble variant="success" adMode={adMode} />
                </div>
            </div>

            <div
                data-scene="missed"
                style={{ padding: SCENE_PADDING, display: "inline-block" }}
            >
                <div className="relative">
                    <PhoneMockup className={phoneClassName}>
                        <MissedContent adMode={adMode} />
                    </PhoneMockup>
                    <SmsBubble variant="alert" adMode={adMode} />
                    <PhoneCallBubble variant="alert" adMode={adMode} />
                </div>
            </div>

            <div data-scene="bubble-sms-success" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <SmsBubble variant="success" standalone adMode={adMode} />
                </div>
            </div>

            <div data-scene="bubble-sms-alert" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <SmsBubble variant="alert" standalone adMode={adMode} />
                </div>
            </div>

            <div data-scene="bubble-phone-call" style={{ padding: 20, display: "inline-block" }}>
                <div style={standaloneBubbleStyle}>
                    <PhoneCallBubble variant="alert" standalone adMode={adMode} />
                </div>
            </div>
        </div>
    );
}
