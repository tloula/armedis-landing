import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const usageFAQs: IFAQ[] = [
    {
        question: `Can I change my check-in schedule and contact preferences?`,
        answer: `Yes, you can update your check-in schedule, contact preferences, and check-in options at any time by going to the Settings tab. From there, you can:
        - Adjust the days, times, and durations of your check-ins to better suit your routine.
        - Add, remove, or edit your contacts and their notification preferences to ensure the right people stay informed.
        - Change your check-in options, such as including prompts like "Do you need assistance?" or adding mood tracking.
        - Pause your check-ins by temporarily disabling any scheduled check-in, giving you flexibility when needed.`,
    },
    {
        question: `What types of check-in options are available?`,
        answer: `You can choose from four check-in options:
        - **One-tap check-in:** A single tap lets you confirm you're okay, with no additional input required.
        - **Mood status:** Select from mood options like bad, okay, good, or great to let your loved ones know how you're feeling.
        - **Request assistance:** Send an alert to your contacts to let them know you need help.
        - **Combination:** Use a mix of the above options to provide more detailed updates during a check-in.`,
    },
    {
        question: `Will the app remind me to check in?`,
        answer: `Yes! ${siteDetails.siteName} will send you a notification when your check-in window opens—at the exact time you've scheduled. From there, you have as long as you've set the window to complete your check-in. The app will visibly count down the remaining time for you, so you always know how much time you have left. If the window closes without a check-in, your selected contacts will be notified based on your preferences, ensuring they're informed about any missed check-ins.`,
    },
    {
        question: `How do I create an account?`,
        answer: `To create an account: download the app, enter your name and email address, and set a password. Once your account is created, you can add your contacts, set up your check-in schedule, and activate your subscription.`,
    },
    {
        question: `How do I schedule my check-ins?`,
        answer: `You can schedule your check-ins by selecting the days of the week, the time you'd like your check-in to open, and how long you'd like the check-in window to stay open. You can add multiple check-ins to fully customize your schedule—for example, setting different times or durations for specific days. This allows you to tailor your routine, like giving yourself extra time on busier days or adjusting check-ins to fit weekdays and weekends differently. The flexibility helps ensure your schedule aligns with your lifestyle and needs.`,
    },
    {
        question: `Can I set different check-in times or frequencies for different days?`,
        answer: `Yes, ${siteDetails.siteName} lets you fully customize your check-in schedule. You can set multiple check-ins a day, once a day, or even just once a week, depending on your needs. You can also adjust the schedule for specific days—for example, set daily check-ins during the week and fewer or no check-ins on weekends. Additionally, you can customize the duration of each check-in, giving yourself more time on busier days. This flexibility ensures your check-ins fit seamlessly into your routine.`,
    },
    {
        question: `Can I add multiple contacts for notifications?`,
        answer: `Yes, you can add as many contacts as you'd like. Each contact can be customized to receive specific types of notifications, such as completed check-ins, missed check-ins, or assistance requests.`,
    },
    {
        question: `How do I customize the notification settings for each contact?`,
        answer: `When adding or editing a contact, you can adjust their notification preferences using three toggles:
        - The first toggle enables notifications if you miss a check-in.
        - The second toggle sends updates for completed check-ins, which may include your mood status (e.g., bad, okay, good, or great), depending on your check-in option.
        - The third toggle alerts contacts when you request assistance, ensuring they can follow up promptly.
        
        Each toggle can be set to "off" or "on" by sliding left or right. For example, you can configure some contacts to receive notifications only for missed check-ins, while others may receive all completed check-in updates or assistance alerts.`,
    },
    {
        question: `Do my contacts need to verify their phone numbers?`,
        answer: `Yes, your contacts will receive a verification text when you add them. They must reply "YES" to confirm their phone number and start receiving notifications. Until they complete this step, the app will show their status as "pending verification," and they won't receive any updates, including completed check-ins, missed check-ins, or assistance alerts. Be sure to remind them to verify promptly so they don't miss important updates.`,
    },
    {
        question: `What information is required to set up my profile and contacts?`,
        answer: `To set up your profile, you'll need your name, email address, and password. For contacts, you'll need their name and phone number. Contacts must also verify their phone numbers by replying “YES” to an initial confirmation text.`,
    }
];
