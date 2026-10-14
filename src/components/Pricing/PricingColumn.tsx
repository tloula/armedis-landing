import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";
import DownloadLink from "../DownloadLink";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, text, features } = tier;

    return (
        <div
            className={clsx(
                "relative w-full max-w-sm mx-auto rounded-3xl lg:max-w-full flex flex-col transition-transform duration-300 hover:-translate-y-1",
                highlight
                    ? "bg-foreground text-[var(--accent-text)] shadow-[0_30px_60px_-20px_rgba(83,55,55,0.6)] ring-1 ring-foreground md:-my-4 md:py-4"
                    : "card"
            )}
        >
            <div className={clsx("p-7 border-b", highlight ? "border-white/10" : "border-foreground/10")}>
                <h3 className={clsx("text-xl font-bold mb-4", highlight ? "text-[var(--accent-text)]" : "text-foreground")}>{name}</h3>
                <p className="manrope text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    <span>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className={clsx("text-lg font-medium", highlight ? "text-white/60" : "text-foreground/60")}>/mo</span>}
                </p>
                <DownloadLink
                    className={clsx(
                        "w-full py-3 px-4 rounded-full font-semibold transition-all block text-center",
                        highlight
                            ? "bg-primary text-[var(--accent-text)] hover:bg-primary-accent shadow-[0_8px_20px_-8px_rgba(95,121,79,0.9)]"
                            : "bg-foreground/[0.06] text-foreground ring-1 ring-foreground/15 hover:bg-primary hover:text-[var(--accent-text)] hover:ring-primary"
                    )}
                >
                    Get Started
                </DownloadLink>
            </div>
            <div className="p-7 flex-1">
                <p className={clsx("text-xs font-bold tracking-[0.14em] mb-1", highlight ? "text-white/60" : "text-foreground/60")}>FEATURES</p>
                <p className={clsx("mb-5 text-base", highlight ? "text-white/85" : "text-foreground/80")}>{text}</p>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-base">
                            <BsFillCheckCircleFill className={clsx("h-[18px] w-[18px] mr-2.5 flex-shrink-0", highlight ? "text-primary-accent" : "text-primary")} />
                            <span className={highlight ? "text-white/90" : "text-foreground/85"}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
