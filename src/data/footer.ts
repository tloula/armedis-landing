import { IMenuItem, ISocials } from "@/types";
import { siteDetails } from "./siteDetails";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    legalLinks: IMenuItem[];
    email: string;
    telephone?: string;
    socials: ISocials;
} = {
    subheading: "Quick check-ins for loved ones living alone.",
    quickLinks: [
        {
            text: "Features",
            url: "/#features"
        },
        {
            text: "Pricing",
            url: "/#pricing"
        },
        // {
        //     text: "Testimonials",
        //     url: "/#testimonials"
        // }
        {
            text: "About",
            url: "/#about"
        },
        {
            text: "FAQs",
            url: "/faqs"
        },
        {
            text: "How It Works",
            url: "/how-it-works"
        },
        {
            text: "Contact",
            url: "/contact"
        }
    ],
    legalLinks: [
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms of Service",
            url: "/terms"
        },
        {
            text: "Cookie Policy",
            url: "/cookies"
        },
        {
            text: "Data Request",
            url: "/data-request"
        }
    ],
    email: siteDetails.supportEmail,
    // telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        facebook: 'https://www.facebook.com/people/CheckIn-More/61579662565810/',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/checkin.more/',
    }
}