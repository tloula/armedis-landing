import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Does ${siteDetails.siteName} require an internet connection (WiFi or Mobile Data)?`,
        answer: `Yes, ${siteDetails.siteName} requires an internet connection to function. If you lose your connection, you will not be able to checkin. If you miss your checkin because of this, your contacts will still be notified.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your account syncs seamlessly across all your devices. You\'ll receive a checkin notification on all devices your signed in to.',
    },
    {
        question: 'What if I need help using the app?',
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`
    },
    {
        question: `Why isn't ${siteDetails.siteName} free?`,
        answer: `Maintaining ${siteDetails.siteName} comes with real costs — app store fees, cloud hosting, SMS services, and business expenses. Instead of selling your data to cover these costs, we charge a small fee to keep things running smoothly.\nThis approach allows us to provide better support, improve our service, and continue building features that matter to you. As a family-run project, we truly appreciate your support in helping us keep ${siteDetails.siteName} going.`
    }
];
