import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs - CheckIn More',
  description: 'Frequently Asked Questions about CheckIn More - your wellness check-in app for peace of mind.',
  alternates: {
    canonical: '/faqs',
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
