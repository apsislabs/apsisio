import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import Head from "next/head";

const ConductPage: React.FC = () => {
  return (
    <>
      <Head>
        <PageMeta title="Code of Conduct" description="Code of Conduct for Apsis Labs and Apsis Labs projects. Apsis Labs is your partner in developing secure, scalable web and mobile applications." />
      </Head>

      <SiteLayout contained>
        <article className="typography">
          <header>
            <h1>Code of Conduct</h1>
            <h3>Last updated: 2024-09-23</h3>
          </header>

          <p>
            At Apsis, we are committed to fostering an inclusive, respectful,
            and harassment-free community across all our open source projects.
          </p>

          <h3>Summary</h3>

          <p>
            Harassment or violation of personal boundaries in any form is not
            tolerated in Apsis's codebases, issue trackers, or events. Offenders
            will be warned by the Apsis team, with repeat violations potentially
            leading to a ban or block by the third offense.
          </p>

          <h3>Details</h3>

          <p>
            Harassment includes, but is not limited to, offensive comments
            related to gender identity, gender expression, sexual orientation,
            disability, physical appearance, body size, race, religion, or
            sexual content. Actions such as deliberate intimidation, stalking,
            unwelcome sexual attention, or disruption of discussions are equally
            unacceptable.
          </p>

          <p>
            Anyone asked to stop harassing behavior is expected to comply
            immediately, including maintainers.
          </p>

          <p>
            In cases of harassment, Apsis may take appropriate action. This
            includes issuing warnings, deleting comments, removing individuals
            from the project or communication platforms, and involving GitHub
            support if necessary.
          </p>

          <p>
            If you experience or witness harassment, or have other concerns,
            please reach out to a core team member or contact us at{" "}
            <a href="mailto:contact@apsis.io">contact@apsis.io</a>.
          </p>

          <p>
            We expect everyone to adhere to these rules across all Apsis project
            spaces.
          </p>

          <h3>Thanks</h3>

          <p>
            This Code of Conduct was modified from and inspired by the code of
            conduct from{" "}
            <a href="https://thoughtbot.com/open-source-code-of-conduct">
              thoughtbot's code of conduct
            </a>
            . Thanks thoughtbot!
          </p>

          <h3>License</h3>

          <p>
            Where possible, Apsis waives all copyright and related rights to
            this Code of Conduct.
          </p>
        </article>
      </SiteLayout>
    </>
  );
};

export default ConductPage;
