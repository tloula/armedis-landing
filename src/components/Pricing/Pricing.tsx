import PricingColumn from "./PricingColumn";

import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-[400px] justify-center mx-auto">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.name} tier={tier} />
            ))}
        </div>
    )
}

export default Pricing