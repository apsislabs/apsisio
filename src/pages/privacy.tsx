import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import Head from "next/head";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Head>
        <PageMeta
          title="Privacy Policy"
          description="Privacy Policy for Apsis Labs and Apsis Labs projects. Apsis Labs has over 60 years combined experience developing user-centric applications for web and mobile."
        />
      </Head>

      <SiteLayout contained>
        <article className="typography">
          <header>
            <h1>Privacy Policy</h1>
            <h3>Last updated: 2024-09-23</h3>
          </header>

          <p>
            At <strong>Apsis Labs</strong>, we are dedicated to protecting your
            privacy. This Privacy Policy outlines our practices regarding the
            collection, use, and protection of personal data (“Personal Data”)
            on our website, <a href="https://apsis.io">https://apsis.io</a> (the
            “Site”), software distribute by Apsis Labs, and related materials
            provided via the Site (collectively, the “Site”).
          </p>

          <h3>1. Questions; Contacting Us; Reporting Violations</h3>
          <p>
            If you have questions or concerns regarding our Privacy Policy, data
            collection practices, or if you wish to report any violations,
            please contact us at{" "}
            <a href="mailto:contact@apsis.io">contact@apsis.io</a>.
          </p>

          <h3>2. A Note About Children</h3>
          <p>
            We do not knowingly collect Personal Data from children under the
            age of 13. If we discover that we have inadvertently gathered such
            data, we will delete it as soon as possible. If you believe we may
            have collected information from a child under 13, please contact us
            at <a href="mailto:contact@apsis.io">contact@apsis.io</a>.
          </p>

          <h3>3. A Note to Users Outside of the United States</h3>

          <h4>Users in the UK or EEA</h4>
          <p>
            If you are in the UK or European Economic Area (EEA), Apsis Labs
            acts as the Controller of your Personal Data under the General Data
            Protection Regulation (GDPR) and related legislation. We process
            your data based on our legitimate interests, which are not
            overridden by your rights. We ask that you refrain from providing
            Special Category Personal Data (such as race, religion, or health
            data) through our Site.
          </p>

          <p>
            Your data may be transferred outside of the UK or EEA, in accordance
            with the safeguards under GDPR. You can learn more about such
            transfers at the{" "}
            <a
              href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en"
              target="_blank"
            >
              European Commission’s website on adequacy decisions
            </a>
            .
          </p>

          <h4>Users in Singapore</h4>
          <p>
            By accessing or using the Site from Singapore, you agree that your
            Personal Data may be processed and transferred to countries,
            including the United States, where data protection laws may differ.
            We ensure that any transfers comply with Singapore’s Personal Data
            Protection Act (PDPA).
          </p>

          <h3>4. Types of Data We Collect</h3>

          <h4>Personal Data</h4>
          <p>
            This includes information such as your name, email, mailing address,
            phone number, and other non-public details linked to your identity.
          </p>

          <h4>Anonymous Data</h4>
          <p>
            We also collect Anonymous Data that does not directly identify you,
            such as browsing behavior, device information, and site usage data.
          </p>

          <h3>5. How We Use Your Data</h3>

          <ul>
            <li>
              <strong>General Use:</strong> Personal Data is used to respond to
              your requests, improve the Site, and communicate with you.
            </li>
            <li>
              <strong>Anonymous Data:</strong> We may create anonymous records
              to analyze usage patterns and improve our services.
            </li>
          </ul>

          <h3>6. Disclosure of Your Data</h3>

          <p>We may share your Personal Data with:</p>
          <ul>
            <li>
              <strong>Service Providers</strong> to help us deliver services and
              support.
            </li>
            <li>
              <strong>Corporate Transactions</strong> such as mergers or
              acquisitions, in which case your data may be transferred.
            </li>
            <li>
              <strong>Legal Requirements</strong> if necessary to comply with
              the law, protect our rights, or prevent illegal activities.
            </li>
          </ul>

          <h3>7. Third-Party Websites</h3>
          <p>
            Our Site may link to external websites that operate independently of
            Apsis Labs. We are not responsible for their privacy practices, and
            we encourage you to review their privacy policies.
          </p>

          <h3>8. Your Choices</h3>

          <h4>Email Communications</h4>
          <p>
            You may opt-out of promotional emails by following the unsubscribe
            instructions or contacting us.
          </p>

          <h4>Cookies</h4>
          <p>
            You can disable cookies through your browser settings. However,
            certain features of the Site may not work without cookies.
          </p>

          <h4>Deleting Your Data</h4>
          <p>
            You can request the deletion of your Personal Data. However, we may
            need to retain certain information for legal or operational
            purposes.
          </p>

          <h3>9. Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on the Site, and the “Last Updated” date will reflect the
            latest version. Please review this Privacy Policy regularly to stay
            informed.
          </p>
        </article>
      </SiteLayout>
    </>
  );
};

export default PrivacyPage;
