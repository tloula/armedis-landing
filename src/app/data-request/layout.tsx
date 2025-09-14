import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Request - CheckIn More',
  description: 'Request your personal data from CheckIn More. We respect your privacy and provide easy access to your information.',
  alternates: {
    canonical: '/data-request',
  },
};

export default function DataRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
