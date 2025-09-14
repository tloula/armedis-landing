import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - CheckIn More',
  description: 'CheckIn More privacy policy - learn how we protect your personal information and respect your privacy.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
