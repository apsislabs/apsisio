import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { TeamMember } from "components/TeamMember";
import { getCurrentPeople } from "lib/posts";
import { Person } from "lib/types";
import { NextPage } from "next";

export async function getStaticProps() {
  return {
    props: {
      team: await getCurrentPeople(),
    },
  };
}

const TeamPage: NextPage<{ team: Person[] }> = ({ team }) => {
  return (
    <>
      <PageMeta
        title="Our Team"
        description="Apsis Labs is seven dedicated senior engineers, ready to help turn your startup into a standout."
      />

      <SiteLayout
        contained
        cta={{
          button: "Get in touch",
          title: "Want to be friends?",
          subtitle:
            "We're always looking for new projects. Let's make something happen.",
        }}
      >
        <div className="stack gap-lg">
          <article className="stack gap-md">
            <PageHeader
              title="Our Team"
              subtitle={
                <>
                  Little <span className="text-accent">company</span>, powerful{" "}
                  <s className="text-muted">code</s>{" "}
                  <span className="text-primary">people</span>.
                </>
              }
            />

            <section className="typography">
              <p className="lead">
                Apsis started at brunch one morning in January, 2014. Noah and
                Wyatt &mdash; young and foolish &mdash; sat down to eat
                pancakes, and ended up quitting their jobs to start a company.
                The premise? "If we can't find enough work to survive, we're
                probably not very good developers."
              </p>
              <p className="lead">
                11 years, 5 babies, & 4 weddings later things <em>still</em>{" "}
                haven't managed to fall apart. The rest, they say, is history.
              </p>
            </section>
          </article>

          <hr className="divider" />

          {Object.entries(team).map(([key, person]) => (
            <TeamMember
              key={key}
              name={person.name}
              title={person.title}
              image={person.image}
              social={person.social}
              bio={<MarkdownContent content={person.bio} />}
            />
          ))}
        </div>
      </SiteLayout>
    </>
  );
};

export default TeamPage;
