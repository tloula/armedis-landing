import { ctaDetails } from "@/data/cta"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-16 lg:my-24">
            <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#4d6540] px-6 py-16 sm:py-24 shadow-[0_40px_80px_-30px_rgba(61,82,50,0.7)]">
                {/* Decorative layers */}
                <div aria-hidden="true" className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_125%,rgba(83,55,55,0.55)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(124,156,104,0.55)_0%,transparent_45%)]" />
                </div>

                <div className="flex flex-col items-center justify-center text-[var(--accent-text)] text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] md:leading-[1.1] font-extrabold mb-5 max-w-3xl text-balance">{ctaDetails.heading}</h2>

                    <p className="mx-auto max-w-xl md:px-5 text-lg md:text-xl text-white/80">{ctaDetails.subheading}</p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center sm:gap-4">
                        <AppStoreButton />
                        <PlayStoreButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
