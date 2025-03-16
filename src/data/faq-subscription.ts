import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const subscriptionFAQs: IFAQ[] = [
    {
        question: `How do I cancel my subscription?`,
        answer: `You can manage or cancel your subscription anytime through the app store where you subscribed (Google Play or Apple App Store). You will still have access to your account until the end of your billing cycle.`
    },
    {
        question: `What happens when my subscription ends?`,
        answer: `When your subscription ends, you will still have access to the app, but all your check-ins will be disabled.`
    },
    {
        question: `Why isn't ${siteDetails.siteName} free?`,
        answer: `Maintaining ${siteDetails.siteName} comes with real costs — app store fees, cloud hosting, SMS services, and business expenses. Instead of selling your data to cover these costs, we charge a small fee to keep things running smoothly.\nThis approach allows us to provide better support, improve our service, and continue building features that matter to you. As a family-run project, we truly appreciate your support in helping us keep ${siteDetails.siteName} going.`
    },
];
