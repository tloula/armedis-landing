import { ctaDetails } from '@/data/cta';
import { TrackingParams } from './tracking';

/**
 * Builds App Store URL with tracking parameters
 */
export function buildAppStoreUrl(params?: TrackingParams): string {
  const url = new URL(ctaDetails.appStoreUrl);

  if (params) {
    // Apple App Store supports pt (partner token) and ct (campaign token)
    // Using ct for utm_content (or utm_source as fallback) since Apple's dashboard shows ct as the campaign name
    // pt is not visible as a filterable dimension in App Store Connect
    // Prioritize utm_content as it often contains the most granular tracking info (e.g., "findlay-card")
    if (params.utm_content) {
      url.searchParams.set('ct', params.utm_content);
    } else if (params.utm_source) {
      url.searchParams.set('ct', params.utm_source);
    }
    // Optionally store campaign in pt (not visible in dashboard but still tracked)
    if (params.utm_campaign) {
      url.searchParams.set('pt', params.utm_campaign);
    }
  }

  return url.toString();
}

/**
 * Builds Google Play Store URL with tracking parameters
 */
export function buildPlayStoreUrl(params?: TrackingParams): string {
  const url = new URL(ctaDetails.googlePlayUrl);

  if (params) {
    // Google Play supports referrer parameter (URL-encoded)
    const referrerParams = new URLSearchParams();

    if (params.utm_source) referrerParams.set('utm_source', params.utm_source);
    if (params.utm_medium) referrerParams.set('utm_medium', params.utm_medium);
    if (params.utm_campaign) referrerParams.set('utm_campaign', params.utm_campaign);
    if (params.utm_content) referrerParams.set('utm_content', params.utm_content);

    if (referrerParams.toString()) {
      url.searchParams.set('referrer', referrerParams.toString());
    }
  }

  return url.toString();
}

