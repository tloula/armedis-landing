import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="group flex items-start gap-4 sm:[&:last-child:nth-child(odd)]:col-span-2 rounded-2xl border border-white/50 bg-surface/60 p-4 transition-all duration-300 hover:bg-surface hover:shadow-[0_12px_28px_-16px_rgba(83,55,55,0.35)] hover:-translate-y-0.5"
            variants={childVariants}
        >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary group-hover:text-[var(--accent-text)] [&>svg]:h-[22px] [&>svg]:w-[22px]">
                {icon}
            </div>
            <div>
                <h4 className="text-base font-bold leading-snug text-foreground">
                    {title}
                </h4>
                <p className="mt-1 text-[0.95rem] leading-snug text-foreground/75">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
