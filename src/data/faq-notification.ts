import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const notificationFAQs: IFAQ[] = [
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
        question: `What types of notifications can I set for my contacts?`,
        answer: `You can set up notifications for completed check-ins, missed check-ins, or assistance requests, allowing you to tailor updates to each contact's preferences.`,
    },
    {
        question: `Can I customize the message that my contacts receive?`,
        answer: `No, ${siteDetails.siteName} sends pre-written messages to ensure clarity and consistency in communication. If this is a feature that you would be interested in, feel free to send your feedback to ${siteDetails.helpEmail}.`,
    },
    {
        question: `What happens if one of my contacts doesn't receive a notification?`,
        answer: `If a contact doesn't receive a notification:
        - Ensure their phone number is entered correctly in the app.
        - Confirm they have verified their phone number.
        - Check that their device can receive text messages.
        - Verify that the contact is toggled on to receive the specific type of alert (completed check-ins, missed check-ins, or assistance alerts).
        - Ensure they aren't blocking messages from unknown numbers or the app.
        
        If issues persist, contact customer support for further assistance.`,
    }
];
