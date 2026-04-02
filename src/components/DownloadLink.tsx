"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

interface DownloadLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children?: React.ReactNode;
}

function DownloadLinkInner({ children, ...props }: DownloadLinkProps) {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const href = queryString ? `/download?${queryString}` : '/download';

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export default function DownloadLink(props: DownloadLinkProps) {
  return (
    <Suspense fallback={<Link href="/download" {...props} />}>
      <DownloadLinkInner {...props} />
    </Suspense>
  );
}
