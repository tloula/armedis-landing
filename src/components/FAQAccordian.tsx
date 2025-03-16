"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { IFAQ } from "@/types";

interface FAQAccordianProps {
    faqs: IFAQ[];
}

const FAQAccordian: React.FC<FAQAccordianProps> = ({ faqs }) => {
    return (
        <>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-7">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                                    <span className="text-2xl font-semibold">{faq.question}</span>
                                    {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                </DisclosureButton>
                                <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                    {faq.answer}
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
