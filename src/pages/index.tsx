import { Button } from "components/Button";
import { Carousel } from "components/Carousel";
import { Clients } from "components/Clients";
import { CtaProps } from "components/Cta";
import { Hero } from "components/Hero";
import { MarkdownContent } from "components/MarkdownContent";
import { PageMeta } from "components/PageMeta";
import { ProjectSlide } from "components/ProjectSlide";
import { Row } from "components/Row";
import { Section } from "components/Section";
import { SiteLayout } from "components/SiteLayout";
import { ValueSection } from "components/ValueSection";
import { siteConf } from "conf";
import { readFileSync } from "fs";
import yaml from "js-yaml";
import { dataDirectory, getRandomCta } from "lib/posts";
import {
  ChevronRight,
  FileJson,
  FormInput,
  Gem,
  PresentationIcon,
  SquareTerminalIcon,
} from "lucide-react";
import { NextPage } from "next";
import path from "path";
import { RepoCard } from "../components/RepoCard";

export async function getStaticProps() {
  const projectsData = readFileSync(path.join(dataDirectory, "projects.yml"));

  return {
    props: {
      projects: yaml.load(projectsData),
      cta: getRandomCta(),
    },
  };
}

export const IndexPage: NextPage<{ projects: any[]; cta: CtaProps }> = ({
  projects,
  cta,
}) => {
  return (
    <>
      <PageMeta title={siteConf.meta.title} />

      <SiteLayout showTagline navTheme="blue" navGuides cta={cta}>
        <Section theme="blue" className="overflow-hidden">
          <Hero />
        </Section>

        <Section guides={false} theme="gray" bordered>
          <Clients />
        </Section>

        <Section spaced>
          <ValueSection />
        </Section>

        <Section
          label="Open Source"
          centerLabel
          spaced
          Icon={SquareTerminalIcon}
        >
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
                works to provide software that will work today without
                sacrificing tomorrow.
              </p>

              <p>
                Born and raised in the Pacific Northwest, we have worked with
                everyone from startups to enterprise, and we're looking forward
                to discovering what we can do working with you.
              </p>
            </div>

            <footer className="stack stack-h gap-md">
              <Button href="/mission" EndIcon={ChevronRight}>
                Our Mission
              </Button>

              <Button href="/hire" variant="tertiary">
                Work with us
              </Button>
            </footer>
          </section>
        </Section>

        <Section label="Projects" Icon={PresentationIcon} spaced>
          <Carousel
            slides={projects.map((p, i) => (
              <ProjectSlide
                key={i}
                title={p.title}
                content={<MarkdownContent content={p.content} />}
                image={p.image}
                button={p.button}
                link={p.link}
              />
            ))}
          />
        </Section>
      </SiteLayout>
    </>
  );
};

export default IndexPage;
