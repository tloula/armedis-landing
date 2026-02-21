import React from 'react';
import {
  Zap,
  CircleDollarSign,
  Calendar,
  Smartphone,
  Users,
  Handshake,
  Banknote,
  CircleCheck,
  XCircle,
  Clock,
  AlertTriangle,
  ShieldAlert,
  PhoneIcon,
  type LucideIcon,
} from 'lucide-react';
import AppStoreButton from '@/components/AppStoreButton';
import PlayStoreButton from '@/components/PlayStoreButton';

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  'circle-dollar-sign': CircleDollarSign,
  calendar: Calendar,
  smartphone: Smartphone,
  users: Users,
  handshake: Handshake,
  banknote: Banknote,
  'circle-check': CircleCheck,
  'x-circle': XCircle,
  clock: Clock,
  'alert-triangle': AlertTriangle,
  'shield-alert': ShieldAlert,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      className={className ?? 'inline-block w-6 h-6 align-text-bottom mr-1'}
      style={{ color: 'var(--primary)' }}
    />
  );
}

function Yes() {
  return <CircleCheck className="inline-block w-5 h-5 text-green-600 align-text-bottom" />;
}

function No() {
  return <XCircle className="inline-block w-5 h-5 text-red-400 align-text-bottom" />;
}

function Soon() {
  return <Clock className="inline-block w-5 h-5 text-blue-500 align-text-bottom" />;
}

function Warn() {
  return <AlertTriangle className="inline-block w-5 h-5 text-amber-500 align-text-bottom" />;
}

function SOS() {
  return <ShieldAlert className="inline-block w-5 h-5 text-red-600 align-text-bottom" />;
}

function Phone() {
  return <PhoneIcon className="inline-block w-5 h-5 text-blue-500 align-text-bottom" />;
}

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-2xl lg:text-3xl font-bold mt-10 mb-4"
      style={{ color: 'var(--foreground)' }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl lg:text-3xl font-bold mt-10 mb-4"
      style={{ color: 'var(--foreground)' }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl lg:text-2xl font-semibold mt-8 mb-3"
      style={{ color: 'var(--foreground)' }}
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-lg lg:text-xl font-semibold mt-6 mb-2"
      style={{ color: 'var(--foreground)' }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 leading-relaxed"
      style={{ color: 'var(--foreground-accent)' }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" style={{ color: 'var(--foreground)' }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline-offset-2 hover:underline transition-colors"
      style={{ color: 'var(--link-text)' }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ml-6 my-4 space-y-2 marker:text-[var(--primary)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-6 my-4 space-y-2 marker:text-[var(--primary)]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-1 leading-relaxed" style={{ color: 'var(--foreground-accent)' }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 pl-4 my-6 py-3 rounded-r-lg italic [&>p]:mb-1 [&>p:last-child]:mb-0"
      style={{
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(95, 121, 79, 0.05)',
        color: 'var(--foreground-accent)',
      }}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-lg border" style={{ borderColor: 'var(--border)' }}>
      <table className="min-w-full text-base" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead style={{ backgroundColor: 'var(--primary)', color: 'var(--accent-text)' }} {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left text-sm font-semibold" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className="even:bg-[#f5f3ee] border-b last:border-b-0"
      style={{ borderColor: 'var(--border)' }}
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-sm" style={{ color: 'var(--foreground-accent)' }} {...props} />
  ),
  hr: () => <hr className="my-10 border-t" style={{ borderColor: 'var(--border)' }} />,
  Icon,
  Yes,
  No,
  Soon,
  Warn,
  SOS,
  Phone,
  DownloadButtons: ({ slug }: { slug?: string }) => (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 my-2">
      <AppStoreButton dark utmContent={slug ? `blog-${slug}` : 'blog'} />
      <PlayStoreButton dark utmContent={slug ? `blog-${slug}` : 'blog'} />
    </div>
  ),
};
