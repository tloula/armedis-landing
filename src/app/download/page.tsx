"use client";

import AppStoreButton from '@/components/AppStoreButton';
import Container from '@/components/Container';
import PlayStoreButton from '@/components/PlayStoreButton';
import {
  buildAppStoreUrl,
  buildPlayStoreUrl,
} from '@/utils/appStoreUrls';
import {
  detectDevice,
  parseTrackingParams,
  trackAppStoreRedirect,
  trackQRRedirectPageView,
} from '@/utils/tracking';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function DownloadPageContent() {
  const [detecting, setDetecting] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Parse tracking parameters from URL
    const params = parseTrackingParams(searchParams);

    // Detect device type
    const deviceInfo = detectDevice();

    // Track page view
    trackQRRedirectPageView(params, deviceInfo);

    if (deviceInfo.isIOS) {
      // Build App Store URL with tracking
      const appStoreUrl = buildAppStoreUrl(params);
      
      // Track redirect event
      trackAppStoreRedirect('app_store', deviceInfo, params);
      
      // Small delay to ensure event fires before redirect
      setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 100);
      
    } else if (deviceInfo.isAndroid) {
      // Build Google Play URL with tracking
      const playStoreUrl = buildPlayStoreUrl(params);
      
      // Track redirect event
      trackAppStoreRedirect('google_play', deviceInfo, params);
      
      // Small delay to ensure event fires before redirect
      setTimeout(() => {
        window.location.href = playStoreUrl;
      }, 100);
      
    } else {
      // If device type can't be determined, show options
      setDetecting(false);
    }
  }, [searchParams]);

  if (detecting) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--foreground)] mx-auto mb-4"></div>
          <p className="text-lg" style={{ color: 'var(--foreground)' }}>Redirecting to app store...</p>
        </div>
      </div>
    );
  }

  // Fallback: show both options if device can't be detected
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Download CheckIn More</h1>
        <p className="text-lg mb-8" style={{ color: 'var(--foreground-accent)' }}>
          Choose your platform to download the app:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <AppStoreButton />
          <PlayStoreButton />
        </div>
      </div>
    </Container>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--foreground)] mx-auto mb-4"></div>
          <p className="text-lg" style={{ color: 'var(--foreground)' }}>Loading...</p>
        </div>
      </div>
    }>
      <DownloadPageContent />
    </Suspense>
  );
}

