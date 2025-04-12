import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const useCaseFAQs: IFAQ[] = [
    {
        question: `Can the app be used for young adults living alone?`,
        answer: `Yes, ${siteDetails.siteName} is ideal for young adults living alone who want to provide their loved ones with peace of mind. In addition to one-tap check-ins, the app's mood tracking feature allows users to share how they're feeling, offering deeper insights into their well-being and strengthening emotional connections with their contacts.`,
    },
    {
        question: `Is ${siteDetails.siteName} suitable for elderly users who aren't tech-savvy?`,
        answer: `Yes, ${siteDetails.siteName} is designed with simplicity in mind, making it easy for elderly users to complete their check-ins with just a tap. The intuitive interface and straightforward setup ensure that even those who aren't tech-savvy can use the app comfortably.`,
    }
];
