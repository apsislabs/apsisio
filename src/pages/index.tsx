import { Clients } from "components/Clients";
import { Section } from "components/Section";
import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { Button } from "components/Button";
import { ChevronRight, GitHub, List } from "react-feather";
import { Row } from "components/Row";
import { RepoCard } from "../components/RepoCard";

export const IndexPage: React.FC = () => {
  return (
    <>
      <Section theme="blue" bordered>
        <Navbar />
      </Section>

      <Section theme="blue">
        <Hero />
      </Section>

      <Section guides={false} theme="gray" bordered>
        <Clients />
      </Section>

      <Section label="Services" spaced Icon={List}>
        <ServicesSection />
      </Section>

      <div>
        <Section spaced kebabed narrow>
          <div className="typography">
            <p>
              We believe the right software isn’t just innovative: it’s
              inspiring. At Apsis, our team of dedicated engineers works hard to
              provide solutions that will work today without sacrificing
              tomorrow.
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

        <Section label="Open Source" centerLabel spaced Icon={GitHub}>
          <Row>
            <RepoCard
              title="slayer"
              Icon={GitHub}
              href="https://github.com/apsislabs/slayer"
              description="a service layer for ruby"
              direction="se"
            />

            <RepoCard
              title="cf7 gated content"
              Icon={GitHub}
              description="gated files for wordpress"
              direction="ne"
              href="https://github.com/apsislabs/cf7-gated-content"
            />

            <RepoCard
              title="orca"
              Icon={GitHub}
              description="simple javascript orechestration"
              direction="sw"
              href="https://github.com/apsislabs/orca"
            />

            <RepoCard
              title="phi_attrs"
              Icon={GitHub}
              description="hipaa logging for rails"
              direction="nw"
              href="https://github.com/apsislabs/phi_attrs"
            />
          </Row>
        </Section>

        <Section spaced kebabed narrow>
          <div className="typography">
            <p>
              We believe the right software isn’t just innovative: it’s
              inspiring. At Apsis, our team of dedicated engineers works hard to
              provide solutions that will work today without sacrificing
              tomorrow.
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
      </div>
    </>
  );
};

export default IndexPage;
