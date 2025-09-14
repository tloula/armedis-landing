import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - CheckIn More',
  description: 'Learn about how CheckIn More uses cookies to improve your experience.',
  alternates: {
    canonical: '/cookies',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
