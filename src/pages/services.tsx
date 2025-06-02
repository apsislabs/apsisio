import { CtaProps } from "components/Cta";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { ServicesSection } from "components/ServicesSection";
import { SiteLayout } from "components/SiteLayout";
import { StylizedSvg } from "components/StylizedSvg";
import { getRandomCta } from "lib/posts";
import { NextPage } from "next";

import clsx from "clsx";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { ChevronRight } from "lucide-react";
import ServicesHero from "/public/img/services/hero.svg";

export async function getStaticProps() {
  const cta = getRandomCta();
  return {
    props: {
      cta,
    },
  };
}

const ServicesPage: NextPage<{ cta: CtaProps }> = ({ cta }) => {
  return (
    <>
      <PageMeta
        title="Services"
        description="Apsis Labs is a full-service agency ready to take your idea and make it a reality."
      />

      <SiteLayout cta={cta}>
        <PageHeader
          center
          title="Our Services"
          className="animate fade"
          subtitle={
            <>
              Expertise from <span className="text-primary">Launch</span> to{" "}
              <span className="text-accent">Landing</span>
            </>
          }
          prefix={
            <div className="typography animate slide" style={{ width: "100%" }}>
              <StylizedSvg
                variant="gold"
                className="aligncenter img-m"
                SvgComponent={ServicesHero}
              />
            </div>
          }
        />

        <Section narrow spaced guides={false}>
          <div className="stack gap-lg">
            <div className="typography animate fade">
              <p className="lead">
                Apsis Labs is a full-service software agency dedicated to
                turning your ideas into reality. Whether you're starting from
                scratch or a full-fledged project outline, our team is equipped
                to guide you through every step of the product lifecycle.
              </p>
              <p className="lead">
                From design &amp; discovery to development, first launch, and
                beyond. We specialize in building web and mobile applications,
                scaling infrastructure, and delivering delightful user
                experiences.
              </p>
            </div>

            <div
              className={clsx("stack stack-h gap-md", "animate fade delay-1")}
            >
              <Button href="/hire" variant="primary" EndIcon={ChevronRight}>
                Let's get to work
              </Button>
            </div>
          </div>
        </Section>

        <Section spaced guides={false}>
          <ServicesSection />
        </Section>
      </SiteLayout>
    </>
  );
};

export default ServicesPage;
