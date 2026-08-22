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
        <div className={clsx("w-full max-w-sm mx-auto rounded-2xl border lg:max-w-full bg-[var(--surface)] overflow-hidden", { "shadow-lg": highlight }, "border-[var(--border)]")}>
            <div className="p-6 lg:p-8 border-[var(--border)] border-b">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
                </p>
                <DownloadLink className={clsx("w-full py-3 px-4 rounded-xl transition-colors text-[var(--accent-text)] font-semibold block text-center", { "bg-primary hover:bg-primary": highlight, "bg-primary hover:bg-primary-accent": !highlight })}>
                    Get Started
                </DownloadLink>
            </div>
            <div className="p-6 lg:p-8 mt-1">
                <p className="text-xs tracking-[0.14em] font-bold mb-1">FEATURES</p>
                <p className="text-foreground-accent mb-5">{text}</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
