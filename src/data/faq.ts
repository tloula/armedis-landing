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
        question: 'Why isn\'t this app free?',
        answer: `We believe in providing a high-quality experience. Your subscription helps us maintain and improve the app, ensuring you get the best service possible. We appreciate your support!`
    }
];
