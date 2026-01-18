export interface TrackingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export interface DeviceInfo {
  type: 'ios' | 'android' | 'unknown';
  isIOS: boolean;
  isAndroid: boolean;
}

/**
 * Detects device type from user agent
 */
export function detectDevice(): DeviceInfo {
  if (typeof window === 'undefined') {
    return { type: 'unknown', isIOS: false, isAndroid: false };
  }

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
  const isAndroid = /android/i.test(userAgent);

  return {
    type: isIOS ? 'ios' : isAndroid ? 'android' : 'unknown',
    isIOS,
    isAndroid,
  };
}

/**
 * Tracks a Google Analytics 4 event
 */
export function trackGA4Event(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (typeof window === 'undefined') {
    return;
  }

  const gtag = (window as any).gtag;
  if (gtag && typeof gtag === 'function') {
    gtag('event', eventName, eventParams);
  }
}

/**
 * Tracks QR redirect page view
 */
export function trackQRRedirectPageView(params: TrackingParams, deviceInfo: DeviceInfo): void {
  trackGA4Event('qr_redirect_page_view', {
    device_type: deviceInfo.type,
    utm_source: params.utm_source || 'direct',
    utm_medium: params.utm_medium || 'qr',
    utm_campaign: params.utm_campaign || 'app_download',
    utm_content: params.utm_content || '',
  });
}

/**
 * Tracks app store redirect
 */
export function trackAppStoreRedirect(
  store: 'app_store' | 'google_play',
  deviceInfo: DeviceInfo,
  params: TrackingParams
): void {
  trackGA4Event('app_store_redirect', {
    store,
    device_type: deviceInfo.type,
    utm_source: params.utm_source || 'direct',
    utm_medium: params.utm_medium || 'qr',
    utm_campaign: params.utm_campaign || 'app_download',
    utm_content: params.utm_content || '',
  });
}

/**
 * Parses UTM parameters from URL search params
 */
export function parseTrackingParams(searchParams: URLSearchParams): TrackingParams {
  return {
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
  };
}

