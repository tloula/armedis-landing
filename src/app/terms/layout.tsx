import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - CheckIn More',
  description: 'CheckIn More terms of service - understand the terms and conditions for using our wellness check-in app.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
