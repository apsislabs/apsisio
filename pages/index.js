import { Clients } from "components/Clients";
import { Section } from "components/Section";
import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";
import { ServicesSection } from "../components/ServicesSection";

export const IndexPage = () => {
  return (
    <>
      <Section className="theme--blue" bordered>
        <Navbar />
      </Section>
      <Section className="theme--blue">
        <Hero />
      </Section>
      <Section guides={false} className="theme--gray" bordered>
        <Clients />
      </Section>
      <Section label="Services" spaced>
        <ServicesSection />
      </Section>
    </>
  );
};

export default IndexPage;
