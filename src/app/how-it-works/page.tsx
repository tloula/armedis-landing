"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { howItWorksSections } from "@/data/how-it-works";
import { formatText } from "@/utils/textFormatting";
import { IHowItWorksSubsection } from "@/types";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";

const fadeUp: Variants = {
    offscreen: {
        opacity: 0,
        y: 40
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 0.9,
        }
    }
};

export default function HowItWorks() {
    return (
        <>
            <PageHeader
                title="How It Works"
                description="CheckIn More is a simple and effective way to stay connected with your loved ones. Here's how it works:"
            />
            <Container className="pb-10">
                <section id="how-it-works">
                    {howItWorksSections.map((section, index) => (
                        <section key={index} className="py-10 lg:py-16">
                            <motion.div
                                className="mx-auto max-w-3xl text-center"
                                variants={fadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h2 className="text-3xl lg:text-5xl lg:leading-[1.1] font-extrabold">{section.title}</h2>
                                {section.description && (
                                    <div className="card mt-8 p-7 md:p-10 text-left text-lg leading-relaxed text-foreground/85">
                                        {formatText(section.description)}
                                    </div>
                                )}
                            </motion.div>

                            {section.subsections && (
                                <div className="mt-12 lg:mt-16 space-y-16 lg:space-y-24">
                                    {section.subsections.map((subsection: IHowItWorksSubsection, idx: number) => {
                                        const textFirst = idx % 2 === (section.offset ?? 0);
                                        const isTall = (subsection.imageHeight ?? 0) > (subsection.imageWidth ?? 0);

                                        return (
                                            <motion.div
                                                key={idx}
                                                variants={fadeUp}
                                                initial="offscreen"
                                                whileInView="onscreen"
                                                viewport={{ once: true, amount: 0.25 }}
                                                className={clsx(
                                                    "flex flex-col items-center justify-center gap-8 lg:gap-20",
                                                    textFirst ? "lg:flex-row" : "lg:flex-row-reverse"
                                                )}
                                            >
                                                <div className="w-full max-w-lg text-center lg:text-left">
                                                    <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">{subsection.subtitle}</h3>
                                                    <div className="text-lg leading-relaxed text-foreground/80 [&_li]:text-left">
                                                        {formatText(subsection.description)}
                                                    </div>
                                                </div>

                                                {subsection.imageSrc && (
                                                    <div className="relative flex justify-center w-full max-w-[400px]">
                                                        {/* Soft halo behind the screenshot */}
                                                        <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[85%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(95,121,79,0.22),transparent)]" />
                                                        <Image
                                                            src={subsection.imageSrc}
                                                            alt={subsection.subtitle}
                                                            width={subsection.imageWidth ?? 400}
                                                            height={subsection.imageHeight ?? 400}
                                                            sizes="400px"
                                                            quality={100}
                                                            className={clsx("h-auto", isTall ? "w-[300px]" : "w-full")}
                                                        />
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            )}
                        </section>
                    ))}
                </section>

                <CTA />
            </Container>
        </>
    );
}
