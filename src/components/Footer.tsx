import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerDetails } from '@/data/footer';
import { siteDetails } from '@/data/siteDetails';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-[#eeecf9] pt-16 pb-8">
            <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <Link href="/" className="flex items-center gap-2">
                        {/* <FaUsers className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
                        <Image
                            src={siteDetails.lightLogoPath}
                            alt={`${siteDetails.siteName} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto object-contain rounded-lg"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-4 text-[#eeecf9]/70 max-w-lg">
                        {footerDetails.subheading}
                    </p>
                    <div className="mt-8">
                        <h4 className="text-sm tracking-[0.12em] uppercase font-semibold mb-4">Contact</h4>
                        {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-[#eeecf9]/70 hover:text-white">Email: {footerDetails.email}</a>}
                        {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-[#eeecf9]/70 hover:text-white">Phone: {footerDetails.telephone}</a>}
                    </div>
                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
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
                    <h4 className="text-sm tracking-[0.12em] uppercase font-semibold mb-4">Quick Links</h4>
                    <ul className="text-[#eeecf9]/70">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-white">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm tracking-[0.12em] uppercase font-semibold mb-4">Legal</h4>
                    <ul className="text-[#eeecf9]/70">
                        {footerDetails.legalLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-white">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="termly-display-preferences">Consent Preferences</a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 md:text-center text-[#eeecf9]/60 px-6 text-sm">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">A product of <a href="https://hydroxygenlabs.com" target="_blank">HydrOxygen Labs LLC.</a></p>
                {/* <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p> */}
            </div>
        </footer>
    );
};

export default Footer;
