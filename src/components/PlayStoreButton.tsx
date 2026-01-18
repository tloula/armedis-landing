"use client";

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { ctaDetails } from '@/data/cta';
import { buildPlayStoreUrl } from '@/utils/appStoreUrls';
import { detectDevice, parseTrackingParams, trackGA4Event } from '@/utils/tracking';

interface PlayStoreButtonProps {
    dark?: boolean;
    url?: string;
}

function PlayStoreButtonInner({ dark, href, onClick }: { dark?: boolean; href: string; onClick?: () => void }) {
    return (
        <a href={href} onClick={onClick}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                        <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                        </path>
                        <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                        </path>
                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                        </path>
                        <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                        </path>
                    </svg>
                </div>
                <div>
                    <div className="text-xs">
                        GET IT ON
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Google Play
                    </div>
                </div>
            </button>
        </a>
    )
}

function PlayStoreButtonContent({ dark, url }: PlayStoreButtonProps) {
    const searchParams = useSearchParams()
    
    // If url is provided, use it directly (for fallback page with tracking params)
    // Otherwise, build URL with UTM parameters from current page
    const href = url || (() => {
        // Get existing UTM parameters from URL
        const existingParams = parseTrackingParams(searchParams)
        
        // Add website source if not already present
        const params = {
            utm_source: existingParams.utm_source || 'website',
            utm_medium: existingParams.utm_medium || 'button',
            utm_campaign: existingParams.utm_campaign || 'app_download',
            utm_content: existingParams.utm_content,
        }
        
        return buildPlayStoreUrl(params)
    })()

    // Track button click event
    const handleClick = () => {
        const existingParams = parseTrackingParams(searchParams)
        const deviceInfo = detectDevice()
        
        trackGA4Event('app_store_button_click', {
            store: 'google_play',
            device_type: deviceInfo.type,
            utm_source: existingParams.utm_source || 'website',
            utm_medium: existingParams.utm_medium || 'button',
            utm_campaign: existingParams.utm_campaign || 'app_download',
            utm_content: existingParams.utm_content || '',
        })
    }

    return <PlayStoreButtonInner dark={dark} href={href} onClick={handleClick} />
}

const PlayStoreButton = (props: PlayStoreButtonProps) => {
    return (
        <Suspense fallback={<PlayStoreButtonInner dark={props.dark} href={props.url || ctaDetails.googlePlayUrl} />}>
            <PlayStoreButtonContent {...props} />
        </Suspense>
    )
}

export default PlayStoreButton