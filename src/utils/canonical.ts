import { siteDetails } from '@/data/siteDetails';

/**
 * Generates a canonical URL for a given pathname
 * @param pathname - The pathname (e.g., '/blog', '/contact', '/')
 * @returns The full canonical URL
 */
export function generateCanonicalUrl(pathname: string): string {
  // Remove trailing slash from siteUrl if it exists
  const baseUrl = siteDetails.siteUrl.replace(/\/$/, '');

  // Ensure pathname starts with /
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;

  // For root path, don't add extra slash
  if (cleanPathname === '/') {
    return baseUrl;
  }

  return `${baseUrl}${cleanPathname}`;
}
