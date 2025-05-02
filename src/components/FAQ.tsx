"use client"

import { faqs } from "@/data/faq";
import { siteDetails } from "@/data/siteDetails";
import FAQAccordian from "./FAQAccordian";
import SectionTitle from "./SectionTitle";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:" className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left">{siteDetails.supportEmail}</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    <FAQAccordian faqs={faqs} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
