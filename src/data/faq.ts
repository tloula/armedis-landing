import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer: `${siteDetails.siteName} is a mobile app for automated, virtual wellness check-ins. You set your preferred times and frequency to check in, and the app reminds you when it's time. With just a tap, you confirm your check-in, and your chosen contacts are notified. If you miss a check-in or need assistance, the app sends alerts to your contacts so they can respond.`,
    },
    {
        question: `Can multiple family members share the same account to monitor a loved one?`,
        answer: `Absolutely! A single account keeps a person's selected circle informed. Emergency contacts receive text updates for completed check-ins, missed check-ins, or assistance requests, ensuring they stay aware of their loved one's status—no extra accounts needed!`,
    },
    {
        question: `How does the app notify my contacts?`,
        answer: `The app sends notifications to your selected contacts via text messages whenever a check-in status is updated. These alerts are based on the preferences you've set for each contact—so they'll only receive the updates you've chosen for them.
        
        For example:
        - **Completed check-ins:** As soon as you confirm your check-in, the app immediately sends a text notification to your designated contacts, letting them know you're okay.
        - **Missed check-ins:** If a check-in window closes without a response, a notification is sent to your contacts, alerting them that the check-in wasn't completed.
        - **Help requests or concerns:** If you mark a bad day or request help, your contacts receive an immediate alert so they can respond quickly.
        
        This ensures your loved ones are informed when it matters while avoiding unnecessary alerts. You're in full control of who gets notified and when!`,
    },
    {
        question: `Can I change my check-in schedule and contact preferences?`,
        answer: `Yes, you can update your check-in schedule, contact preferences, and check-in options at any time by going to the Settings tab. From there, you can:
        - Adjust the days, times, and durations of your check-ins to better suit your routine.
        - Add, remove, or edit your contacts and their notification preferences to ensure the right people stay informed.
        - Change your check-in options, such as including prompts like "Do you need assistance?" or adding mood tracking.
        - Pause your check-ins by temporarily disabling any scheduled check-in, giving you flexibility when needed.`,
    },
    {
        question: `Why isn't ${siteDetails.siteName} free?`,
        answer: `Maintaining ${siteDetails.siteName} comes with real costs — app store fees, cloud hosting, SMS services, and business expenses. Instead of selling your data to cover these costs, we charge a small fee to keep things running smoothly.\nThis approach allows us to provide better support, improve our service, and continue building features that matter to you. As a family-run project, we truly appreciate your support in helping us keep ${siteDetails.siteName} going.`
    }
];
