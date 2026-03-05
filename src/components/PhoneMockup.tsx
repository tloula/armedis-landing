import clsx from "clsx";
import React from "react";

interface PhoneMockupProps {
    children: React.ReactNode;
    className?: string;
    imageWidth?: number;
    imageHeight?: number;
}

const PhoneMockup = ({ children, className, imageWidth, imageHeight }: PhoneMockupProps) => {
    const screenStyle = imageWidth && imageHeight
        ? { aspectRatio: `${imageWidth}/${imageHeight}` }
        : undefined;
    return (
        <div className={clsx("relative", className)}>
            {/* Side buttons */}
            <div className="absolute -left-[2px] top-[18%] w-[3px] h-8 bg-[#2a2323] rounded-l-sm" />
            <div className="absolute -left-[2px] top-[28%] w-[3px] h-12 bg-[#2a2323] rounded-l-sm" />
            <div className="absolute -left-[2px] top-[38%] w-[3px] h-12 bg-[#2a2323] rounded-l-sm" />
            <div className="absolute -right-[2px] top-[30%] w-[3px] h-16 bg-[#2a2323] rounded-r-sm" />

            <div className="bg-gradient-to-br from-[#2a2323] via-[#1c1817] to-[#141010] rounded-[2.5rem] p-[7px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4),0_8px_20px_-6px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.08]">
                {/* Dynamic Island */}
                <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-20 md:w-24 h-[22px] md:h-[26px] bg-[#0a0808] rounded-full z-20" />

                {/* Screen */}
                <div
                    className={clsx("relative bg-[#f0eeea] rounded-[2.2rem] overflow-hidden", { "aspect-[9/17.5]": !screenStyle })}
                    style={screenStyle}
                >
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 z-[5] pointer-events-none rounded-[2.2rem] shadow-[inset_0_0_8px_rgba(0,0,0,0.08)]" />
                    {/* Glass reflection */}
                    <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                    {children}

                    {/* Home indicator bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-black/20 rounded-full z-10" />
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;
