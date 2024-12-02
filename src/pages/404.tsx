import { Button } from "components/Button";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { formattedTitle } from "lib/metadata";
import { ChevronRight } from "lucide-react";
import { NextPage } from "next";
import Head from "next/head";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formattedTitle("404: Page Not Found")}</title>

        <PageMeta
          title="404: Page Not Found"
          description="I know this isn't what you were looking for, but... maybe we can help."
        />
      </Head>

      <SiteLayout
        contained
        cta={{
          title: "Not what you're looking for?",
          subtitle: "We get it. Maybe we can help.",
          button: "Let's find it",
        }}
      >
        <article>
          <PageHeader
            title="404: no clue 🤷‍♂️"
            subtitle="Don't worry, it's not you &mdash; it's us"
          />

          <div className="stack gap-md">
            <section className="typography">
              <p className="lead">
                The page you were looking for has moved or never existed at all.
                That's on us &mdash; we'll take a look and see if we can build
                it for you.
              </p>
            </section>

            <footer>
              <Button href="/" EndIcon={ChevronRight}>
                Go home
              </Button>
            </footer>
          </div>
        </article>
      </SiteLayout>
    </>
  );
};

export default NotFoundPage;
