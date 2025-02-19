import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your account syncs seamlessly across all your devices. You\'ll receive a checkin notification on all devices your signed in to.',
    },
    {
        question: 'What if I need help using the app?',
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`
    }
];