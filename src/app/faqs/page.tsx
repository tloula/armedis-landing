import Container from "@/components/Container";
import FAQAccordian from "@/components/FAQAccordian";
import PageHeader from "@/components/PageHeader";
import { IFAQ } from "@/types";
import { overviewFAQs } from "@/data/faq-overview";
import { notificationFAQs } from "@/data/faq-notification";
import { setupFAQs } from "@/data/faq-setup";
import { supportFAQs } from "@/data/faq-support";
import { usageFAQs } from "@/data/faq-usage";
import { useCaseFAQs } from "@/data/faq-use-cases";
import { subscriptionFAQs } from "@/data/faq-subscription";

const sanitizeFaqAnswer = (answer: string) =>
    answer.replace(/\*\*/g, "").replace(/^\s*-\s+/gm, "").replace(/\s+/g, " ").trim();

const allFAQs: IFAQ[] = [
    ...overviewFAQs,
    ...subscriptionFAQs,
    ...setupFAQs,
    ...usageFAQs,
    ...notificationFAQs,
    ...useCaseFAQs,
    ...supportFAQs,
];

const faqGroups: { id: string; title: string; faqs: IFAQ[] }[] = [
    { id: "overview", title: "Overview", faqs: overviewFAQs },
    { id: "subscription", title: "Subscription", faqs: subscriptionFAQs },
    { id: "setup", title: "Setup", faqs: setupFAQs },
    { id: "usage", title: "Usage", faqs: usageFAQs },
    { id: "notifications", title: "Notifications", faqs: notificationFAQs },
    { id: "use-cases", title: "Use Cases", faqs: useCaseFAQs },
    { id: "support", title: "Support", faqs: supportFAQs },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: sanitizeFaqAnswer(faq.answer),
        },
    })),
};

const FAQsPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <PageHeader title="FAQs" description="Frequently Asked Questions" />
            <Container className="pb-20 lg:pb-28">
                <section id="faqs" className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    <nav aria-label="FAQ categories" className="hidden lg:block lg:w-56 flex-shrink-0">
                        <ul className="sticky top-28 space-y-1">
                            {faqGroups.map(group => (
                                <li key={group.id}>
                                    <a
                                        href={`#${group.id}`}
                                        className="block rounded-full px-4 py-2 text-base font-medium text-foreground/75 hover:bg-foreground/5 hover:text-foreground transition-colors"
                                    >
                                        {group.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="w-full max-w-3xl mx-auto lg:mx-0 space-y-14">
                        {faqGroups.map(group => (
                            <div key={group.id} id={group.id}>
                                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">{group.title}</h2>
                                <FAQAccordian faqs={group.faqs} />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </>
    );
};

export default FAQsPage;