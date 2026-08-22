import { ctaDetails } from "@/data/cta"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-6 mb-16 lg:mt-10 lg:mb-28">
            <div className="relative h-full w-full z-10 mx-auto py-14 sm:py-20 lg:py-24 overflow-hidden rounded-[2rem]">
                <div className="h-full w-full">
                    <div className="rounded-[2rem] absolute inset-0 -z-10 h-full w-full bg-[#2d4334]">
                        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[60px] border-white/[0.06]"></div>
                        <div className="absolute -left-16 -bottom-24 h-64 w-64 rounded-full border-[48px] border-white/[0.05]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-[var(--accent-text)] text-center px-5">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl md:leading-[1.08] tracking-[-0.045em] font-semibold mb-5 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-5 flex flex-col sm:flex-row items-center sm:gap-3">
                        <AppStoreButton />
                        <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
