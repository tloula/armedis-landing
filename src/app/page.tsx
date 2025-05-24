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
import { siteDetails } from "@/data/siteDetails";
import Clarity from "@microsoft/clarity";
import React from "react";

const HomePage: React.FC = () => {

  React.useEffect(() => {
    if (siteDetails.clarityId) {
      console.log('Initializing Clarity', siteDetails.clarityId);
      Clarity.init(siteDetails.clarityId);
    }
  }, []);

  return (
    <>
      <Hero />
      <Promo />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        {/* <Section
          id="testimonials"
          title="What Our Customers Say"
          description="Hear from those who love our product."
        >
          <Testimonials />
        </Section> */}

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
