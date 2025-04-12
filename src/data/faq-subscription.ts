import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const subscriptionFAQs: IFAQ[] = [
    {
        question: `Why isn't ${siteDetails.siteName} free?`,
        answer: `Maintaining ${siteDetails.siteName} comes with real costs — app store fees, cloud hosting, SMS services, and business expenses. Instead of selling your data to cover these costs, we charge a small fee to keep things running smoothly.\nThis approach allows us to provide better support, improve our service, and continue building features that matter to you. As a family-run project, we truly appreciate your support in helping us keep ${siteDetails.siteName} going.`
    },
    {
        question: `What is included in the subscription plan?`,
        answer: `The subscription plan includes unlimited check-ins, customizable schedules, flexible notification settings for your contacts, assistance request alerts, and access to your check-in history.`,
    },
    {
        question: `Is there a free trial available?`,
        answer: `Yes, ${siteDetails.siteName} offers a two-week free trial. This allows you to explore all the app's features before committing to a subscription.`,
    },
    {
        question: `How do I activate my subscription?`,
        answer: `To activate your subscription: download the app, create your account, and choose your subscription plan. Follow the payment instructions within the app to complete the activation process.`,
    },
    {
        question: `What happens when my subscription ends?`,
        answer: `When your subscription ends, you will still have access to the app, but all your check-ins will be disabled.`
    },
    {
        question: `Can I cancel my subscription anytime?`,
        answer: `You can manage or cancel your subscription anytime through your app store's subscription management system. Once canceled, you will retain access to paid features until the end of the current billing period`
    },
    {
        question: `Are there any additional costs or hidden fees?`,
        answer: `No, there are no hidden fees. The subscription cost covers all features, and there are no additional charges beyond the advertised pricing.`,
    }
];
