import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const featuresFAQs: IFAQ[] = [
    {
        question: `Does ${siteDetails.siteName} require an internet connection (WiFi or Mobile Data)?`,
        answer: `Yes, ${siteDetails.siteName} requires an internet connection to send the check-in notification. If your connection drops and you miss a check-in, your contacts will still be notified to help ensure your safety.`,
    },
];
