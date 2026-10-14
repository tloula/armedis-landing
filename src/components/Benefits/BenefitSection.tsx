"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import PhoneMockup from "../PhoneMockup";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 60
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 0.9,
            delayChildren: 0.15,
            staggerChildren: 0.08,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        y: 16,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 0.8,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, imageWidth, imageHeight, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20 lg:flex-nowrap mb-28 lg:mb-36"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-xl", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col items-center lg:items-start w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl text-balance">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-3 text-xl text-foreground/75">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2 w-full text-left">
                            {bullets.map((item, bulletIndex) => (
                                <BenefitBullet key={bulletIndex} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("relative", { "lg:order-2": imageAtRight })}>
                    {/* Tinted backdrop behind the phone */}
                    <div
                        aria-hidden="true"
                        className={clsx(
                            "absolute inset-x-[-12%] top-[10%] bottom-[6%] rounded-[3rem] bg-gradient-to-br from-primary/25 via-primary-soft/60 to-[#c9a98f]/25",
                            imageAtRight ? "rotate-3" : "-rotate-3"
                        )}
                    />
                    <div className={clsx("relative w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <PhoneMockup className="w-[260px] md:w-[320px]" imageWidth={imageWidth} imageHeight={imageHeight}>
                            <Image src={imageSrc} alt={title} fill className="object-fill" quality={100} />
                        </PhoneMockup>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
