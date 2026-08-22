"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { IFAQ } from "@/types";
import { formatText } from "@/utils/textFormatting";

interface FAQAccordianProps {
    faqs: IFAQ[];
}

const FAQAccordian: React.FC<FAQAccordianProps> = ({ faqs }) => {
    return (
        <>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex items-center justify-between gap-4 w-full px-5 py-5 lg:px-6 text-left hover:bg-[var(--surface-muted)] transition-colors">
                                    <span className="text-lg font-semibold leading-snug">{faq.question}</span>
                                    {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                </DisclosureButton>
                                <DisclosurePanel className="px-5 lg:px-6 pb-6 text-foreground-accent leading-relaxed">
                                    {formatText(faq.answer)}
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                </div>
            ))}
        </>
    );
};

export default FAQAccordian;
