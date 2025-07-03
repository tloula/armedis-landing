import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermlyCMP from '@/components/TermlyCMP';
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

const WEBSITE_UUID = '755421fc-6f7f-4418-856b-2ee915e7166c'

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
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
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
