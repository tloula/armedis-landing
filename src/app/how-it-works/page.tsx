"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { howItWorksSections } from "@/data/how-it-works";
import { formatText } from "@/utils/textFormatting";
import { IHowItWorksSubsection } from "@/types";
import Section from "@/components/Section";
import Container from "@/components/Container";

const containerVariants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

export default function HowItWorks() {
    return (
        <Container className="mt-12">
            <Section
                id="how-it-works"
                title="How It Works"
                description="CheckIn More is a simple and effective way to stay connected with your loved ones. Here's how it works:"
            >
                {howItWorksSections.map((section, index) => (
                    <motion.section
                        key={index}
                        className="mb-24"
                        variants={containerVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <motion.div variants={childVariants} className="w-full max-w-lg text-center">
                                <h3 className="text-3xl font-semibold">{section.title}</h3>
                            </motion.div>

                            {section.description && (
                                <motion.div variants={childVariants} className="mt-4 text-foreground-accent w-full max-w-4xl">
                                    {formatText(section.description)}
                                </motion.div>
                            )}

                            {section.imageSrc && (
                                <motion.div variants={childVariants} className="mt-8">
                                    <Image
                                        src={section.imageSrc}
                                        alt={section.title}
                                        width={384}
                                        height={762}
                                        quality={100}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                            )}

                            {section.subsections && (
                                <div className="mt-12 space-y-16 w-full">
                                    {section.subsections.map((subsection: IHowItWorksSubsection, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            variants={childVariants}
                                            className={`
          flex flex-wrap items-center justify-center gap-8 lg:gap-20 lg:flex-nowrap
          ${idx % 2 === 0 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'}
        `}
                                        >
                                            <div className="flex flex-col w-full max-w-lg">
                                                <h3 className="text-xl font-semibold mb-2">{subsection.subtitle}</h3>
                                                <div className="text-foreground-accent">{formatText(subsection.description)}</div>
                                            </div>

                                            {subsection.imageSrc && (
                                                <div className="mt-8 lg:mt-0">
                                                    <Image
                                                        src={subsection.imageSrc}
                                                        alt={subsection.subtitle}
                                                        width={400}
                                                        height={400}
                                                        quality={100}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </motion.section>
                ))}
            </Section>
        </Container>
    );
}