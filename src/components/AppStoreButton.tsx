"use client";

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { ctaDetails } from '@/data/cta';
import { buildAppStoreUrl } from '@/utils/appStoreUrls';
import { detectDevice, parseTrackingParams, trackGA4Event } from '@/utils/tracking';

interface AppStoreButtonProps {
    dark?: boolean;
    url?: string;
    utmContent?: string;
}

function AppStoreButtonInner({ dark, href, onClick }: { dark?: boolean; href: string; onClick?: () => void }) {
    return (
        <a href={href} onClick={onClick}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="30">
                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                        </path>
                    </svg>
                </div>
                <div>
                    <div className="text-xs">
                        Download on the
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        App Store
                    </div>
                </div>
            </button>
        </a>
    )
}

function AppStoreButtonContent({ dark, url, utmContent }: AppStoreButtonProps) {
    const searchParams = useSearchParams()
    
    // If url is provided, use it directly (for fallback page with tracking params)
    // Otherwise, build URL with UTM parameters from current page
    const href = url || (() => {
        const existingParams = parseTrackingParams(searchParams)
        
        const params = {
            utm_source: existingParams.utm_source || 'website',
            utm_medium: existingParams.utm_medium || 'button',
            utm_campaign: existingParams.utm_campaign || 'app_download',
            utm_content: utmContent || existingParams.utm_content,
        }
        
        return buildAppStoreUrl(params)
    })()

    const handleClick = () => {
        const existingParams = parseTrackingParams(searchParams)
        const deviceInfo = detectDevice()
        
        trackGA4Event('app_store_button_click', {
            store: 'app_store',
            device_type: deviceInfo.type,
            utm_source: existingParams.utm_source || 'website',
            utm_medium: existingParams.utm_medium || 'button',
            utm_campaign: existingParams.utm_campaign || 'app_download',
            utm_content: utmContent || existingParams.utm_content || '',
        })
    }

    return <AppStoreButtonInner dark={dark} href={href} onClick={handleClick} />
}

const AppStoreButton = (props: AppStoreButtonProps) => {
    return (
        <Suspense fallback={<AppStoreButtonInner dark={props.dark} href={props.url || ctaDetails.appStoreUrl} />}>
            <AppStoreButtonContent {...props} />
        </Suspense>
    )
}

export default AppStoreButton