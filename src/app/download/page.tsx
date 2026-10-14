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
          <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-primary/20 border-t-primary mx-auto mb-5"></div>
          <p className="text-lg font-medium text-foreground/80">Redirecting to app store...</p>
        </div>
      </div>
    );
  }

  // Fallback: show both options if device can't be detected
  return (
    <Container className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="card max-w-xl w-full text-center px-8 py-12 sm:px-12">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-foreground">Download CheckIn More</h1>
        <p className="text-lg mb-6 text-foreground/75">
          Choose your platform to download the app:
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-4 justify-center items-center">
          <AppStoreButton dark />
          <PlayStoreButton dark />
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
          <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-primary/20 border-t-primary mx-auto mb-5"></div>
          <p className="text-lg font-medium text-foreground/80">Loading...</p>
        </div>
      </div>
    }>
      <DownloadPageContent />
    </Suspense>
  );
}

