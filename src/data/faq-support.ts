import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const supportFAQs: IFAQ[] = [
    {
        question: `What should I do if I encounter a technical issue?`,
        answer: `If you experience a technical issue, try restarting the app or your device first. If the problem persists, ensure your app is updated to the latest version. You can also check your internet connection. If these steps don't resolve the issue, reach out to customer support for further assistance.`,
    },
    {
        question: `Will ${siteDetails.siteName} work without an internet connection?`,
        answer: `${siteDetails.siteName} requires an active internet connection to send the check-in notification. If your connection drops and you miss a check-in, your contacts will be notified to help ensure your safety.`,
    },
    {
        question: `What happens if I change my phone or phone number?`,
        answer: `If you change your phone, simply reinstall the app and log in using your existing account credentials. If you change your phone number, update your contact details within the app to ensure notifications continue to work properly.`,
    },
    {
        question: `What if I need help using ${siteDetails.siteName}?`,
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`,
    },
    {
        question: `How can I contact customer support for assistance?`,
        answer: `You can contact customer support through the app by navigating to the "Help" or "Support" section, where you'll find options to send a message or email directly to the support team.`,
    }
];
