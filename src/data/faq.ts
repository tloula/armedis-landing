import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Does ${siteDetails.siteName} require an internet connection (WiFi or Mobile Data)?`,
        answer: `Yes, ${siteDetails.siteName} requires an internet connection to send the check-in notification. If your connection drops and you miss a check-in, your contacts will still be notified to help ensure your safety.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your account syncs seamlessly across all your devices. You\'ll receive a CheckIn notification on all devices your signed in to.',
    },
    {
        question: `Can I pause or disable check-ins temporarily?`,
        answer: `Yes! You can pause check-ins for vacations, travel, or other circumstances without deleting your schedule. Just go to the CheckIn you want to pause and select "Disable".`
    },
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
    {
        question: `What if I need help using ${siteDetails.siteName}?`,
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`
    },
];
