'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';
import DownloadLink from './DownloadLink';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full px-3 pt-3 md:px-6 md:pt-5">
            <Container className="!px-0">
                <nav className="border border-white/70 bg-[rgba(251,250,247,0.88)] shadow-[0_8px_30px_rgba(38,52,44,0.08)] backdrop-blur-xl mx-auto flex justify-between items-center py-2.5 px-4 md:px-5 rounded-2xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        {/* <FaUsers className="text-foreground min-w-fit w-7 h-7" /> */}
                        <Image
                            src={siteDetails.darkLogoPath}
                            alt={`${siteDetails.siteName} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-auto object-contain rounded-lg"
                        />
                        <span className="manrope text-lg font-semibold tracking-[-0.03em] text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-1">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-sm font-medium text-foreground-accent hover:text-foreground px-3 py-2 rounded-lg transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <DownloadLink className="text-[var(--accent-text)] bg-primary hover:bg-primary-accent px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                                Download
                            </DownloadLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-[var(--accent-text)] bg-primary focus:outline-none rounded-xl w-10 h-10 flex items-center justify-center"
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden mt-2 mx-auto max-w-7xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden">
                    <ul className="flex flex-col gap-1 py-4 px-4">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block px-3 py-2 rounded-lg" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <DownloadLink className="text-[var(--accent-text)] bg-primary hover:bg-primary-accent px-5 py-2.5 rounded-xl block w-full text-center mt-2" onClick={toggleMenu}>
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
