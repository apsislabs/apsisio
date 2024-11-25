import { Button } from "components/Button";
import { Clients } from "components/Clients";
import { Hero } from "components/Hero";
import { PageMeta } from "components/PageMeta";
import { Row } from "components/Row";
import { Section } from "components/Section";
import { SiteLayout } from "components/SiteLayout";
import { siteConf } from "conf";
import { formattedTitle } from "lib/metadata";
import {
  ChevronRight,
  FileJson,
  FormInput,
  Gem,
  Github,
  List,
} from "lucide-react";
import { NextPage } from "next";
import Head from "next/head";
import { RepoCard } from "../components/RepoCard";
import { ServicesSection } from "../components/ServicesSection";

export const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formattedTitle(siteConf.meta.title)}</title>
        <PageMeta />
      </Head>

      <SiteLayout showTagline navTheme="blue" navGuides>
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
          <section className="stack gap-md">
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
                everyone from startups to enterprise, and we’re looking forward
                to discovering what we can do working with you.
              </p>
            </div>

            <footer>
              <Button
                href="mailto:contact@apsis.io?subject=Apsis Project Inquiry"
                EndIcon={ChevronRight}
              >
                Drop us a line
              </Button>
            </footer>
          </section>
        </Section>
      </SiteLayout>
    </>
  );
};

export default IndexPage;
