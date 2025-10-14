import { NewsletterCTA } from "components/NewsletterCTA";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { Section } from "components/Section";
import { SiteLayout } from "components/SiteLayout";
import { NextPage } from "next";
import { InlineWidget } from "react-calendly";

const HirePage: NextPage = () => {
  return (
    <>
      <PageMeta
        title="Book a Call"
        description="Apsis Labs is ready to get started making your project a reality."
      />

      <SiteLayout
        contained
        footer={
          <Section bordered theme="blue">
            <NewsletterCTA />
          </Section>
        }
      >
        <div className="stack gap-lg">
          <article className="stack gap-md">
            <PageHeader
              center
              title="Book a Call"
              subtitle={
                <>
                  Got a project?{" "}
                  <span className="text-primary">Let's talk.</span>
                </>
              }
            />

            <InlineWidget
              styles={{
                height: "1200px",
              }}
              url="https://calendly.com/wyattapsis/30min"
            />
          </article>
        </div>
      </SiteLayout>
    </>
  );
};

export default HirePage;
