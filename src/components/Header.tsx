'use client';

import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';
import DownloadLink from './DownloadLink';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isRaised = isScrolled || isOpen;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full px-3 pt-3 md:px-5 md:pt-4">
            <Container className="!px-0">
                <nav
                    className={clsx(
                        "mx-auto flex justify-between items-center rounded-full border px-4 py-2 md:px-5 transition-all duration-300",
                        isRaised
                            ? "border-white/60 bg-surface/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(83,55,55,0.25)] md:py-2.5"
                            : "border-transparent bg-transparent md:py-4"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* <FaUsers className="text-foreground min-w-fit w-7 h-7" /> */}
                        <Image
                            src={siteDetails.darkLogoPath}
                            alt={`${siteDetails.siteName} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto object-contain"
                        />
                        <span className="manrope text-xl font-bold tracking-tight text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="rounded-full px-3.5 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="ml-2">
                            <DownloadLink className="inline-flex items-center text-base font-semibold text-[var(--accent-text)] bg-primary hover:bg-primary-accent px-6 py-2.5 rounded-full shadow-[0_6px_16px_-6px_rgba(95,121,79,0.7)] hover:-translate-y-px transition-all">
                                Download
                            </DownloadLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-[var(--accent-text)] bg-primary focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div id="mobile-menu" className="lg:hidden mt-2 rounded-3xl border border-white/60 bg-surface/95 backdrop-blur-xl shadow-xl">
                    <ul className="flex flex-col gap-1 p-3">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="block rounded-2xl px-4 py-2.5 font-medium text-foreground hover:bg-foreground/5" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-1">
                            <DownloadLink className="block text-center font-semibold text-[var(--accent-text)] bg-primary hover:bg-primary-accent px-5 py-3 rounded-full" onClick={toggleMenu}>
                                Download
                            </DownloadLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
