import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4"
            variants={childVariants}
        >
            <div className="flex h-10 w-10 items-center justify-center flex-shrink-0 rounded-xl bg-primary/10 text-primary [&>svg]:h-5 [&>svg]:w-5">
                {icon}
            </div>
            <div>
                <h4 className="text-base font-semibold leading-snug tracking-[-0.02em]">
                    {title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
