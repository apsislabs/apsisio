import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import Head from "next/head";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Head>
        <PageMeta
          title="Mandatory Data Breach Notification Policy"
          description="Mandatory Data Breach Notification Policy for Apsis Labs and Apsis Labs projects. At Apsis, we take data security seriously, which is why we provide documentation on our data breach policy for all clients."
        />
      </Head>

      <SiteLayout contained>
        <article className="typography">
          <header>
            <h1>Mandatory Data Breach Notification Policy</h1>
            <h3>Last updated: 2024-09-23</h3>
          </header>

          <p>
            Apsis Labs believes that access to Personal Identifiable Information
            (PII) — especially Personal Health Information (PHI) — is a
            privilege not to be taken lightly. Our customers, and the customers
            of our clients, trust that we will be responsible stewards of their
            data; that we will not abuse our access to privately held
            information for personal gain or malevolent purpose.
          </p>

          <p>
            In short, our commitment is to treat your data the way we would
            treat our own data. To that end, Apsis Labs is committed to
            providing timely and appropriate notice when there is a reasonable
            belief that any form of PII held by Apsis Labs has been compromised
            by a data breach.
          </p>

          <p>
            The purpose of this policy is to outline how Apsis Labs will respond
            to incidents involving data breaches. It will define the steps and
            procedures that will be followed when those breaches occur, and how
            we will notify our clients or customers of unauthorized access to
            data.
          </p>

          <p>
            This policy applies to all information or assets which Apsis Labs
            has access to, unless otherwise agreed to in writing with our
            customer or client.
          </p>

          <h2>Definitions</h2>

          <p>
            <strong>Data Breach</strong>: An incident in which an external actor
            — known or unknown — has gained unauthorized access to PII held by
            Apsis Labs. PII does not include information reasonably considered
            to be public information; information which has been voluntarily
            shared with Apsis Labs for the purpose of sharing with third
            parties; nor does it include information that has been previously
            made public by its owner.
          </p>

          <p>
            Access to information for a legitimate purpose is not to be
            considered a data breach, so long as accessed PII is not used for an
            unlawful or explicitly unauthorized action.
          </p>

          <p>
            <strong>Personal Identifiable Information</strong>: Apsis Labs
            defines PII in accordance with the{" "}
            <a href="https://oag.ca.gov/privacy/ccpa" target="_blank">
              CCPA
            </a>{" "}
            as:
          </p>

          <blockquote>
            “information that identifies, relates to, describes, is reasonably
            capable of being associated with, or could reasonably be linked,
            directly or indirectly, with a particular consumer or household.”
          </blockquote>

          <p>
            <strong>Personal Health Information</strong>: Apsis Labs defines PHI
            in accordance with{" "}
            <a href="https://www.hhs.gov/hipaa/index.html" target="_blank">
              HIPAA
            </a>{" "}
            as:
          </p>

          <blockquote>
            “[I]ndividually identifiable health information" held or transmitted
            by a covered entity or its business associate, in any form or media,
            whether electronic, paper, or oral.”
          </blockquote>

          <h2>Policy</h2>

          <h3>Reporting Responsibilities</h3>

          <p>
            All affiliates of Apsis Labs, including (but not limited to)
            Partners, Employees, and Contractors, should report suspected or
            actual data breaches immediately to a Partner, or to{" "}
            <a href="mailto:contact@apsis.io">contact@apsis.io</a>. Examples of
            incidents which should be reported include, but are not limited to:
          </p>

          <ul>
            <li>
              Physical or remote access by an unknown individual to any resource
              managed by Apsis Labs
            </li>
            <li>Evidence of access to a system which stores PII or PHI</li>
            <li>
              Unauthorized sharing of credentials which provide access to PII or
              PHI
            </li>
            <li>
              Identification of software bugs which may have provided access to
              PII or PHI
            </li>
            <li>
              Loss or theft of a device which is authorized for access to PII or
              PHI
            </li>
            <li>Unauthorized access to an apsis.io email account</li>
            <li>
              Documents, files, or images containing PHI or PII sent to the
              wrong recipient
            </li>
          </ul>

          <h3>Data Breach Procedures</h3>

          <p>Upon receipt of a report of a data breach, Apsis Labs will:</p>

          <ol>
            <li>
              <strong>Determine</strong> whether a data breach has occurred.
            </li>
            <li>
              If a data breach is determined to have occurred,{" "}
              <strong>contain</strong> the breach such that no further
              unauthorized access is allowed.
            </li>
            <li>
              Once contained, <strong>assess</strong> the scope and impact of
              the data breach.
            </li>
            <li>
              <strong>Preserve</strong> all evidence used during determination
              and assessment of a data breach for future analysis.
            </li>
            <li>
              <strong>Document</strong> all steps taken during the determination
              and assessment for further review.
            </li>
            <li>
              <strong>Notify</strong> all customers, clients, or users that a
              breach has occurred.
            </li>
          </ol>

          <h3>Notification</h3>

          <p>
            Apsis Labs will provide electronic written notification of a data
            breach within <strong>30 days</strong> of the conclusion of the
            internal assessment process. This notification will be provided to
            our client or customer, or the individual owner of the accessed PII,
            depending on the nature of the data breach, or if another mechanism
            of notice has been previously agreed upon in writing.
          </p>

          <p>
            If the nature of the breach prevents notification in writing (i.e.
            access to PII which does not have an associated mechanism for
            notification), substitute notice will be provided by placing a
            conspicuous notice of the breach on the Apsis Labs website for a
            minimum of 30 days.
          </p>

          <p>The written notification will include, at a minimum:</p>

          <ul>
            <li>A description of the data breach</li>
            <li>A timeline of the data breach</li>
            <li>A summary of the steps taken to contain the breach</li>
            <li>An assessment of the scope of the breach</li>
            <li>
              An email address to contact with further questions regarding the
              breach
            </li>
          </ul>
        </article>
      </SiteLayout>
    </>
  );
};

export default PrivacyPage;
