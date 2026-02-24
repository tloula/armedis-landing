"use client";

import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Promo from "@/components/Promo";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import { faqs } from "@/data/faq";
import { siteDetails } from "@/data/siteDetails";
import Clarity from "@microsoft/clarity";
import React from "react";

const sanitizeFaqAnswer = (answer: string) =>
  answer.replace(/\*\*/g, "").replace(/^\s*-\s+/gm, "").replace(/\s+/g, " ").trim();

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: sanitizeFaqAnswer(faq.answer),
    },
  })),
};

const HomePage: React.FC = () => {

  React.useEffect(() => {
    if (siteDetails.clarityId) {
      console.log('Initializing Clarity', siteDetails.clarityId);
      Clarity.init(siteDetails.clarityId);
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Promo />
      <Container>
        <Benefits />

        <Section
          id="testimonials"
          title="What Our Users Say"
          description="Real reviews from the App Store."
        >
          <Testimonials />
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="about"
          title="About Us"
          description="Learn more about the people behind CheckIn More."
        >
          <AboutUs />
        </Section>

        <FAQ />

        {/* <Stats /> */}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
