import { IHowItWorksSection } from "@/types";

export const howItWorksSections: IHowItWorksSection[] = [
    {
        title: "Overview",
        description: `CheckIn More simplifies virtual wellness checks by allowing you to schedule check-ins at preferred times and frequencies. When it's time to check in, the app sends you a notification. With just a few taps, you can complete your check-in, and text updates are sent to your contacts based on your status or if you need assistance.`,
    },
    {
        title: "Setting Up Your Account",
        subsections: [
            {
                subtitle: "Sign Up",
                description: "Create your account by entering your name, email address, and password. You can access your account across multiple devices, ensuring seamless updates even if you switch phones or use a tablet.",
                imageSrc: "/images/how-it-works/1-signup.webp"
            },
            {
                subtitle: "Enable Notifications",
                description: "Turn on notifications in your device settings for the app to receive check-in reminders.",
                imageSrc: "/images/how-it-works/2-notifications.webp"
            },
            {
                subtitle: "Add Your Contacts",
                description: "Add your contacts' names and phone numbers. Use toggles to customize what types of notifications each contact will receive, such as completed check-ins, missed check-ins, or assistance requests.",
                imageSrc: "/images/how-it-works/3-add-contacts.webp"
            },
            {
                subtitle: "Verify Your Contacts",
                description: "Ask your contacts to reply \"Yes\" to the verification text they'll receive. Contacts will appear as \"pending verification\" until this step is completed.",
                imageSrc: "/images/how-it-works/4-verify-contacts.webp"
            },
            {
                subtitle: "Set Your Check-In Schedule",
                description: `Customize your schedule by choosing:

	- **Check-in time**: When notifications are sent to remind you to check in.
	- **Check-in window**: How long you have to complete your check-in.
	- **Days of the week**: Select specific days for check-ins to align with your weekly routine.
	- **Additional check-ins**: Add multiple check-ins per day to match your schedule and ensure regular updates.
This flexibility lets you tailor your check-ins to fit your unique lifestyle and commitments.`,
                imageSrc: "/images/how-it-works/5-set-checkin-schedule.webp"
            },
            {
                subtitle: "Select Your Check-In Option",
                description: `Choose how you want to check in:

	- **One-Tap:** Quick and straightforward.
	- **Mood Status:** Share your mood with emoji options for bad, okay, good, or great.
	- **Request Assistance:** Notify your contacts if help is needed.
Combination: Include multiple check-in types for more detailed updates.`,
                imageSrc: "/images/how-it-works/6-set-checkin-option.webp"
            },
            {
                subtitle: "Activate Your Subscription",
                description: "Activate your subscription directly through the app store for full access to all features. Both iOS and Android support subscriptions. Start with a free trial before committing.",
                imageSrc: "/images/how-it-works/7-activate-subscription.webp"
            }
        ]
    },
    {
        title: "Completing a Check-In",
        offset: 1,
        subsections: [
            {
                subtitle: "It's Check In Time",
                description: "At the check-in time you set, you'll receive a notification reminder. Open the app and tap the active check-in to get started.",
                imageSrc: "/images/how-it-works/8-open-checkins.webp"
            },
            {
                subtitle: "Submit Your Check-In",
                description: `Complete your check-in with just a few taps, and the app handles notifying your contacts based on your response:

    - **Completed Check-Ins:** Contacts opted in for completed check-ins will get the time you checked in and, if applicable, your status (great, good, okay, or bad).
    - **Missed Check-Ins:** If you don't check in before the window closes, contacts set to receive missed check-in alerts will be notified.
    - **Need Assistance:** If you request assistance, an immediate text alert is sent to your designated contacts so they can follow up and provide help as needed.`,
                imageSrc: "/images/how-it-works/9-checkin.webp"
            }
        ]
    },
    {
        title: "Bonus Features",
        offset: 1,
        subsections: [
            {
                subtitle: "Review Your Check-In History",
                description: "Track completion times, check-in responses, and notifications sent. Use this feature for identifying patterns or monitoring mood trends.",
                imageSrc: "/images/how-it-works/11-history.webp"
            },
            {
                subtitle: "Pause Your Check-In Schedule",
                description: "Disable check-ins temporarily by editing the schedule in the app.",
                imageSrc: "/images/how-it-works/12-pause-checkin.webp"
            },
            {
                subtitle: "In-App Support",
                description: "Need help? Tap the \"?\" icon in the app for detailed guidance on any step of the process.",
                imageSrc: "/images/how-it-works/13-support.webp"
            }
        ]
    },
];
