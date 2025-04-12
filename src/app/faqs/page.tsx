import Container from "@/components/Container";
import FAQAccordian from "@/components/FAQAccordian";
import Section from "@/components/Section";
import { overviewFAQs } from "@/data/faq-overview";
import { notificationFAQs } from "@/data/faq-notification";
import { setupFAQs } from "@/data/faq-setup";
import { supportFAQs } from "@/data/faq-support";
import { usageFAQs } from "@/data/faq-usage";
import { useCaseFAQs } from "@/data/faq-use-cases";
import { subscriptionFAQs } from "@/data/faq-subscription";

const FAQsPage = () => {
    return (
        <Container className="mt-12">
            <Section
                id="faqs"
                title="FAQs"
                description="Frequently Asked Questions"
            >
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6">Overview</h4>
                    <FAQAccordian faqs={overviewFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Subscription</h4>
                    <FAQAccordian faqs={subscriptionFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Setup</h4>
                    <FAQAccordian faqs={setupFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Usage</h4>
                    <FAQAccordian faqs={usageFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Notifications</h4>
                    <FAQAccordian faqs={notificationFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Use Cases</h4>
                    <FAQAccordian faqs={useCaseFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Support</h4>
                    <FAQAccordian faqs={supportFAQs} />
                </div>
            </Section>
        </Container>
    );
};

export default FAQsPage;