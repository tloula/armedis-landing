"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import clsx from "clsx";
import { BiPlus } from "react-icons/bi";

import { IFAQ } from "@/types";
import { formatText } from "@/utils/textFormatting";

interface FAQAccordianProps {
    faqs: IFAQ[];
}

const FAQAccordian: React.FC<FAQAccordianProps> = ({ faqs }) => {
    return (
        <div className="flex flex-col gap-3 pb-7">
            {faqs.map((faq, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <div
                            className={clsx(
                                "rounded-2xl border transition-colors duration-300",
                                open ? "border-white/70 bg-surface shadow-[0_12px_28px_-18px_rgba(83,55,55,0.4)]" : "border-foreground/10 bg-surface/40 hover:bg-surface/70"
                            )}
                        >
                            <DisclosureButton className="flex items-center justify-between gap-6 w-full px-5 py-5 md:px-6 text-left">
                                <span className="manrope text-lg md:text-xl font-bold text-foreground">{faq.question}</span>
                                <span
                                    className={clsx(
                                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
                                        open ? "rotate-45 bg-primary text-[var(--accent-text)]" : "bg-primary-soft text-primary"
                                    )}
                                >
                                    <BiPlus className="w-5 h-5" />
                                </span>
                            </DisclosureButton>
                            <DisclosurePanel
                                transition
                                className="origin-top px-5 md:px-6 pb-6 -mt-1 text-foreground/80 leading-relaxed transition duration-200 ease-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
                            >
                                {formatText(faq.answer)}
                            </DisclosurePanel>
                        </div>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};

export default FAQAccordian;
