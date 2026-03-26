import PricingColumn from "./PricingColumn";
import { IPricing } from "@/types";

const safetyTimerTiers: IPricing[] = [
    {
        name: 'Free',
        price: 'Free',
        text: 'Basic safety net for your daily needs',
        features: [
            '1 safety timer per day',
            '1 contact',
            'Email notifications',
        ],
    },
    {
        name: 'Plus',
        price: 6.99,
        text: 'Unlimited safety timers and SMS notifications',
        features: [
            'Unlimited safety timers',
            'Unlimited contacts',
            'Email & SMS notifications',
            '14-day free trial',
        ],
    },
    {
        name: 'Premium',
        price: 19.99,
        text: 'Maximum protection with AI phone call alerts',
        features: [
            'Unlimited safety timers',
            'Unlimited contacts',
            'Email & SMS notifications',
            'AI phone call alerts',
            '14-day free trial',
        ],
    }
]

const SafetyTimerPricing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {safetyTimerTiers.map((tier) => (
                <PricingColumn key={tier.name} tier={tier} highlight={tier.name === 'Plus'} />
            ))}
        </div>
    )
}

export default SafetyTimerPricing;
