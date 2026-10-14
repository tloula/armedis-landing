import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {tiers.map((tier) => (
                <PricingColumn key={tier.name} tier={tier} highlight={tier.name === 'Plus'} />
            ))}
        </div>
    )
}

export default Pricing