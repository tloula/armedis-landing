import Container from "@/components/Container";
import FAQAccordian from "@/components/FAQAccordian";
import Section from "@/components/Section";
import { featuresFAQs } from "@/data/faq-features";
import { overviewFAQs } from "@/data/faq-overview";
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
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Features</h4>
                    <FAQAccordian faqs={featuresFAQs} />
                </div>
                <div className="w-full lg:max-w-6xl mx-auto border-b">
                    <h4 className="text-2xl font-semibold mb-6 mt-6">Subscription</h4>
                    <FAQAccordian faqs={subscriptionFAQs} />
                </div>
            </Section>
        </Container>
    );
};

export default FAQsPage;