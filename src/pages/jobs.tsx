import { ContactForm } from "components/forms/ContactForm";
import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { getActiveJobs } from "lib/posts";
import { Job } from "lib/types";
import { NextPage } from "next";

export async function getStaticProps() {
  return {
    props: {
      jobs: await getActiveJobs(),
    },
  };
}

const HirePage: NextPage<{ jobs: Record<string, Job> }> = ({ jobs }) => {
  return (
    <>
      <PageMeta
        title="Join Our Team"
        description="Sometimes Apsis Labs is hiring. Join us."
      />

      <SiteLayout contained>
        <div className="stack gap-lg">
          <article className="stack gap-md">
            <PageHeader
              title={
                <>
                  Work <span className="text-muted">@</span>{" "}
                  <span className="text-primary">Apsis</span>
                </>
              }
              subtitle={<>Sometimes we're hiring. Join us.</>}
            />
            <section className="typography">
              <p className="lead">
                Apsis Labs is a tightly-knit software agency operating as a
                fully distributed team. We specialize in crafting bespoke
                solutions for our clients — ranging from dynamic web
                applications and mobile experiences to HIPAA compliant data
                warehouses.
              </p>
              <p className="lead">
                To apply, send your resume to{" "}
                <a href="mailto:contact@apsis.io">contact@apsis.io</a>.
              </p>
            </section>
            <hr className="divider" />
            {Object.entries(jobs).length > 0 ? (
              <section className="typography">
                {Object.entries(jobs).map(([key, job]) => (
                  <div key={key} className="stack gap-md">
                    <header className="stack gap-sm">
                      <h3 className="text-primary m-0">{job.title}</h3>
                      <small className="text-muted">
                        <strong>Salary:</strong> {job.salary}
                      </small>
                    </header>
                    <div className="typography">
                      <MarkdownContent content={job.content} />
                      <p>
                        To apply, send your resume to{" "}
                        <a href="mailto:contact@apsis.io">contact@apsis.io</a>.
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <section className="typography">
                <div className="alert alert-note">
                  No jobs at this moment. Check back later!
                </div>
              </section>
            )}
          </article>
        </div>
      </SiteLayout>
    </>
  );
};

export default HirePage;
