"use client";

import HeroAnimation from "@/components/HeroAnimation";

export default function VideoHelperPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                margin: 0,
                display: "grid",
                placeItems: "center",
                background: "#ffffff",
            }}
        >
            <div
                data-video-stage="hero-animation"
                style={{
                    width: 1080,
                    height: 1080,
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden",
                    background: "#ffffff",
                    position: "relative",
                }}
            >
                <div style={{ position: "relative", zIndex: 1, transform: "scale(1.14)" }}>
                    <HeroAnimation loop={false} stepDuration={2500} />
                </div>
            </div>
        </main>
    );
}
