import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Email Plan',
        price: 'Free',
        text: 'Email notifications to your contacts & limited features',
        features: [
            'Email notifications',
            '1 check-in option',
            '1 check-in time',
            '1 contact',
            'Email support',
        ],
    },
    {
        name: 'Text (SMS) Plan',
        price: 6.99,
        text: 'SMS text notifications to your contacts and all features',
        features: [
            'Email notifications',
            'SMS notifications',
            '4 check-in options',
            'Unlimited check-in times',
            'Unlimited contacts',
            '14-day free trial',
        ],
    },
    {
        name: 'Voice Plan',
        price: 19.99,
        text: 'Phone calls or SMS text notifications to your contacts and all features',
        features: [
            'Email notifications',
            'SMS notifications',
            'Voice notifications',
            '4 check-in options',
            'Unlimited check-in times',
            'Unlimited contacts',
            '14-day free trial',
        ],
    }
]
