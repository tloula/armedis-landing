import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - CheckIn More',
  description: 'Learn how CheckIn More works - simple wellness check-ins for peace of mind and staying connected with loved ones.',
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
