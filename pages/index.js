import { Clients } from "components/Clients";
import { Section } from "components/Section";
import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { Button } from "components/Button";
import { ChevronRight, GitHub, List } from "react-feather";

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

      <Section label="Services" spaced Icon={List}>
        <ServicesSection />
      </Section>

      <Section spaced kebabed narrow>
        <div className="typography">
          <p>
            We believe the right software isn’t just innovative: it’s inspiring.
            At Apsis, our team of dedicated engineers works hard to provide
            solutions that will work today without sacrificing tomorrow.
          </p>

          <p>
            Born and raised in the Pacific North West, we have worked with
            everyone from startups to enterprise, anpm i typewriter-effectnd
            we’re looking forward to discovering what we can do working with
            you.
          </p>

          <Button EndIcon={ChevronRight}>Let's get to work</Button>
        </div>
      </Section>

      <Section label="Open Source" spaced Icon={GitHub}>
        <ServicesSection />
      </Section>

      <Section spaced kebabed narrow>
        <div className="typography">
          <p>
            We believe the right software isn’t just innovative: it’s inspiring.
            At Apsis, our team of dedicated engineers works hard to provide
            solutions that will work today without sacrificing tomorrow.
          </p>

          <p>
            Born and raised in the Pacific North West, we have worked with
            everyone from startups to enterprise, anpm i typewriter-effectnd
            we’re looking forward to discovering what we can do working with
            you.
          </p>

          <Button EndIcon={ChevronRight}>Let's get to work</Button>
        </div>
      </Section>
    </>
  );
};

export default IndexPage;
