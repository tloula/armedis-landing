import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const overviewFAQs: IFAQ[] = [
    {
        question: `What if I need help using ${siteDetails.siteName}?`,
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`
    },
];
