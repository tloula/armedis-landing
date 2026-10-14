"use client"

import { HiOutlineEnvelope } from "react-icons/hi2";

import { faqs } from "@/data/faq";
import { siteDetails } from "@/data/siteDetails";
import FAQAccordian from "./FAQAccordian";
import SectionTitle from "./SectionTitle";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-14 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                <div className="lg:w-[380px] flex-shrink-0 flex flex-col items-center lg:items-start">
                    <p className="hidden lg:block text-foreground/70">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="mt-2 !leading-[1.1] lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <div className="mt-8 lg:mt-10 w-full max-w-sm card p-6 text-center lg:text-left">
                        <p className="text-foreground/75">
                            Ask us anything!
                        </p>
                        <a
                            href={`mailto:${siteDetails.supportEmail}`}
                            className="mt-3 inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary-accent transition-colors break-all"
                        >
                            <HiOutlineEnvelope className="h-5 w-5 flex-shrink-0" />
                            {siteDetails.supportEmail}
                        </a>
                    </div>
                </div>

                <div className="w-full lg:max-w-3xl mx-auto">
                    <FAQAccordian faqs={faqs} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
