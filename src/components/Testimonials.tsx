import React from 'react';
import { testimonials } from '@/data/testimonials';
import { ctaDetails } from '@/data/cta';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

const Testimonials: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="grid gap-8 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white/50 rounded-2xl shadow-sm p-6 flex flex-col gap-3"
                    >
                        <StarRating rating={testimonial.rating} />
                        <p className="text-foreground-accent flex-1">
                            &quot;{testimonial.message}&quot;
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <span className="font-semibold text-secondary text-sm">
                                {testimonial.name}
                            </span>
                            <span className="text-xs text-foreground-accent">
                                {testimonial.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <a
                href={ctaDetails.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground-accent hover:text-secondary transition-colors"
            >
                <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span>Read all reviews on the App Store</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
    );
};

export default Testimonials;
