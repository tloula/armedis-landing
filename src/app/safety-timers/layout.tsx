import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety Timers - CheckIn More',
  description: 'CheckIn More now has safety timers — set a countdown for a run, a date night, or any solo activity, and your contacts are automatically notified if you don\'t check back in.',
  alternates: {
    canonical: '/safety-timers',
  },
};

export default function SafetyTimersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
