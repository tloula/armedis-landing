import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    // {
    //     name: 'Basic (Ad Supported)',
    //     price: 'Free',
    //     text: '',
    //     features: [
    //         '1 checkin option',
    //         '1 checkin time',
    //         '1 contact',
    //         'Email support',
    //     ],
    // },
    {
        name: 'Plus',
        price: 6.99,
        text: 'Everything in basic, plus...',
        features: [
            'No ads',
            '4 checkin options',
            'Unlimited checkin times',
            'Unlimited contacts',
        ],
    }
    // {
    //     name: 'Premium',
    //     price: 8.99,
    //     text: 'Everything in Plus, plus...',
    //     features: [
    //         'Last known location',
    //         'Custom checkin messages'
    //     ],
    // },
]
