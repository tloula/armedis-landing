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

export const childVariants = {
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

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, imageWidth, imageHeight, bullets } = benefit;

    return (
        <section className="benefit-section rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
            <motion.div
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 px-6 py-12 sm:px-10 lg:px-16 lg:py-20"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-xl mx-auto", { "lg:order-1": !imageAtRight })}
                    
                >
                    <div className="w-full text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl text-left">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-3 leading-normal text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("relative flex justify-center py-4", { "lg:order-2": imageAtRight })}>
                    <div className="absolute inset-0 m-auto h-[82%] w-[82%] rounded-full bg-[var(--surface-muted)]" />
                    <div className="relative w-fit flex justify-center">
                        <PhoneMockup className="w-[245px] md:w-[300px]" imageWidth={imageWidth} imageHeight={imageHeight}>
                            <Image src={imageSrc} alt={title} fill className="object-fill" quality={100} />
                        </PhoneMockup>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
