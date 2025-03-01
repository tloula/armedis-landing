import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Promo from "@/components/Promo";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
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
