import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

// const WEBSITE_UUID = '755421fc-6f7f-4418-856b-2ee915e7166c'

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  alternates: {
    canonical: siteDetails.siteUrl,
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'CheckIn More',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '6.99',
    priceCurrency: 'USD',
  },
  description: siteDetails.metadata.description,
  url: siteDetails.siteUrl,
  downloadUrl: [
    'https://apps.apple.com/us/app/checkin-more/id6748661948',
    'https://play.google.com/store/apps/details?id=com.hydroxygenlabs.armedis',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CheckIn More?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CheckIn More is a mobile app for automated, virtual wellness check-ins. You set your preferred times and frequency to check in, and the app reminds you when it\'s time. With just a tap, you confirm your check-in, and your chosen contacts are notified. If you miss a check-in or need assistance, the app sends alerts to your contacts so they can respond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can multiple family members share the same account to monitor a loved one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! A single account keeps a person\'s selected circle informed. Emergency contacts receive text updates for completed check-ins, missed check-ins, or assistance requests, ensuring they stay aware of their loved one\'s status - no extra accounts needed!',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the app notify my contacts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The app sends notifications to your selected contacts via text messages whenever a check-in status is updated. These alerts are based on the preferences you\'ve set for each contact. Completed check-ins send an instant notification. Missed check-ins alert your contacts that the check-in wasn\'t completed. Help requests or concerns trigger an immediate alert so contacts can respond quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my check-in schedule and contact preferences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can update your check-in schedule, contact preferences, and check-in options at any time by going to the Settings tab. You can adjust days, times, and durations, add or edit contacts and their notification preferences, change check-in options like mood tracking, and pause check-ins temporarily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why isn\'t CheckIn More free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintaining CheckIn More comes with real costs - app store fees, cloud hosting, SMS services, and business expenses. We charge a small fee to keep things running smoothly. This approach allows us to provide better support, improve our service, and continue building features that matter to you. As a family-run project, we truly appreciate your support.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script
          defer
          data-website-id="6858c1e2f4a5bf0c3a1d5bac"
          data-domain="checkinmore.com"
          src="https://datafa.st/js/script.js"
        />
      </body>
    </html>
  );
}
