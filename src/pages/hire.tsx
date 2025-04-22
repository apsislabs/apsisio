import { ContactForm } from "components/forms/ContactForm";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { NextPage } from "next";

const HirePage: NextPage = () => {
  return (
    <>
      <PageMeta
        title="Hire Us"
        description="Apsis Labs is ready to get started making your project a reality."
      />

      <SiteLayout contained>
        <div className="stack gap-lg">
          <article className="stack gap-md">
            <PageHeader
              title="Hire Us"
              subtitle={
                <>
                  Exploration. <span className="text-primary">Proposal</span>.{" "}
                  <span className="text-accent">Blast off</span>. Let's get to
                  work.
                </>
              }
            />

            <section className="form">
              <ContactForm />
            </section>
          </article>
        </div>
      </SiteLayout>
    </>
  );
};

export default HirePage;
