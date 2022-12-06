import { Clients } from "components/Clients";
import { Section } from "components/Section";
import { Navbar } from "components/Navbar";
import { Hero } from "components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { Button } from "components/Button";
import {
  ChevronRight,
  FileJson,
  FormInput,
  Gem,
  Github,
  List,
} from "lucide-react";
import { Row } from "components/Row";
import { RepoCard } from "../components/RepoCard";
import { Footer } from "components/Footer";
import Head from "next/head";

export const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Apsis Labs – A Code Company</title>
      </Head>

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

      <Section label="Open Source" centerLabel spaced Icon={Github}>
        <Row>
          <RepoCard
            title="phi_attrs"
            Icon={Gem}
            description="hipaa logging for rails"
            direction="nw"
            href="https://github.com/apsislabs/phi_attrs"
          />

          <RepoCard
            title="slayer"
            Icon={Gem}
            href="https://github.com/apsislabs/slayer"
            description="a killer service layer for ruby"
            direction="se"
          />

          <RepoCard
            title="cf7 gated content"
            Icon={FormInput}
            description="gated files for wordpress"
            direction="ne"
            href="https://github.com/apsislabs/cf7-gated-content"
          />

          <RepoCard
            title="papers please"
            Icon={FileJson}
            description="type-safe role-based access control"
            direction="sw"
            href="https://github.com/apsislabs/papers_please_ts"
          />
        </Row>
      </Section>

      <Section spaced kebabed narrow>
        <div className="typography">
          <p>
            We believe that arriving at the right solution is an iterative
            process, built with hard work, strong communication, and a
            dedication to craft. At Apsis, our team of experienced engineers
            works provide software that will work today without sacrificing
            tomorrow.
          </p>

          <p>
            Born and raised in the Pacific North West, we have worked with
            everyone from startups to enterprise, and we’re looking forward to
            discovering what we can do working with you.
          </p>
        </div>

        <Button href="mailto:contact@apsis.io" EndIcon={ChevronRight}>
          Drop us a line
        </Button>
      </Section>

      <Section theme="gray" bordered>
        <Footer />
      </Section>
    </>
  );
};

export default IndexPage;
