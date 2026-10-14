import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerDetails } from '@/data/footer';
import { siteDetails } from '@/data/siteDetails';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden bg-secondary text-[#eeecf9] pt-16 pb-10">
            <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-2">
                        {/* <FaUsers className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
                        <Image
                            src={siteDetails.lightLogoPath}
                            alt={`${siteDetails.siteName} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto object-contain"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-4 max-w-sm text-[#eeecf9]/75">
                        {footerDetails.subheading}
                    </p>
                    <div className="mt-8">
                        <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#eeecf9]/50 mb-4">Contact</h4>
                        {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-[#eeecf9]/85 hover:text-white transition-colors">Email: {footerDetails.email}</a>}
                        {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-[#eeecf9]/85 hover:text-white transition-colors">Phone: {footerDetails.telephone}</a>}
                    </div>
                    {footerDetails.socials && (
                        <div className="mt-6 flex items-center gap-3 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 transition-all [&>svg]:h-[18px] [&>svg]:w-[18px]"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#eeecf9]/50 mb-4">Quick Links</h4>
                    <ul className="text-[#eeecf9]">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="text-[#eeecf9]/85 hover:text-white transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#eeecf9]/50 mb-4">Legal</h4>
                    <ul className="text-[#eeecf9]">
                        {footerDetails.legalLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="text-[#eeecf9]/85 hover:text-white transition-colors">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="termly-display-preferences text-[#eeecf9]/85 hover:text-white transition-colors">Consent Preferences</a>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 md:text-center text-[#eeecf9]/70 px-6 text-base">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-[#eeecf9]/45">A product of <a href="https://hydroxygenlabs.com" target="_blank" className="hover:text-white transition-colors">HydrOxygen Labs LLC.</a></p>
                {/* <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p> */}
            </div>
        </footer>
    );
};

export default Footer;
