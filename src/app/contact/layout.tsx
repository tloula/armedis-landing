import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CheckIn More',
  description: 'Get in touch with the CheckIn More team. We\'re here to help with your questions.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
