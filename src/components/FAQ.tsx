"use client"

import { faqs } from "@/data/faq";
import { siteDetails } from "@/data/siteDetails";
import FAQAccordian from "./FAQAccordian";
import SectionTitle from "./SectionTitle";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-16 lg:py-28 border-t border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-20">
                <div>
                    <p className="hidden lg:block text-xs tracking-[0.16em] font-bold text-primary">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:" className="mt-3 block text-xl lg:text-2xl text-primary font-semibold hover:text-primary-accent text-center lg:text-left break-all">{siteDetails.supportEmail}</a>
                </div>

                <div className="w-full mx-auto">
                    <FAQAccordian faqs={faqs} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
