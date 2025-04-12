import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const overviewFAQs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer: `${siteDetails.siteName} is a mobile app that helps individuals who live alone stay connected with loved ones through scheduled wellness checks.
        
        - **Set check-ins:** Choose times and durations for your check-in window.
        - **Add contacts & preferences:** Select family, friends, or caregivers and decide what updates they receive—completed check-ins, missed check-ins, or assistance alerts.
        - **Receive reminders:** The app notifies you when your check-in window opens and counts down the time remaining.
        - **Send updates:** If you check in, text notifications are immediately sent to selected contacts. If you miss a check-in, notifications go out once the window closes.
        
        Loved ones don't need the app—updates arrive via text. It's a simple way to stay connected and provide peace of mind.`,
    },
    {
        question: `Who is ${siteDetails.siteName} designed for?`,
        answer: `${siteDetails.siteName} is designed for individuals who live alone and their loved ones who want to stay informed about their well-being. Primary users include families with elderly parents living independently and young adults who want to keep their close circle updated.`,
    },
    {
        question: `Can multiple family members share the same account to monitor a loved one?`,
        answer: `Absolutely! ${siteDetails.siteName} is designed for families and close circles to stay connected and receive updates about a loved one. When a premium user completes or misses their check-in, text messages are immediately sent to selected contacts. 
        
        Only one account is needed—family, friends, and caregivers don't need the app to stay informed, because they'll receive updates via text. This ensures that everyone stays connected effortlessly. 
        
        Keep your circle in the loop with the updates that matter the most to them—completed check-ins, missed check-ins, or when assistance is requested—so loved ones are always informed when it counts.`,
    },
    {
        question: `Can the app be used for checking in on multiple people?`,
        answer: `Each ${siteDetails.siteName} account is designed for one individual to share updates with their circle of contacts. This ensures a personalized and focused check-in experience. If you'd like to monitor someone else, they can create their own account and establish a circle of contacts to keep their loved ones informed.`,
    },
    {
        question: `Is ${siteDetails.siteName} available on both iOS and Android?`,
        answer: `Yes, ${siteDetails.siteName} is available for download on both iOS and Android devices through the App Store and Google Play.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: `Absolutely! Your account syncs seamlessly across all your devices. You'll receive a CheckIn notification on all devices you're signed in to.`,
    },
    {
        question: `What if I need help using ${siteDetails.siteName}?`,
        answer: `We provide extensive in-app guides to help you. If you need further assistance, feel free to email us at ${siteDetails.helpEmail}, and we'll respond as quickly as possible.`
    },
];
