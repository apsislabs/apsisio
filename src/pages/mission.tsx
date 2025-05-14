import { PostImage } from "components/blog/PostImage";
import { CtaProps } from "components/Cta";
import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { getPostData, getRandomCta } from "lib/posts";
import { Post } from "lib/types";
import { NextPage } from "next";
import Link from "next/link";

export async function getStaticProps() {
  const content = await getPostData({
    year: "2015",
    month: "04",
    day: "23",
    slug: "work-sustainably",
  });

  return {
    props: {
      content,
      cta: await getRandomCta(),
    },
  };
}

const MissionPage: NextPage<{ cta: CtaProps; content: Post }> = ({
  cta,
  content,
}) => {
  return (
    <>
      <PageMeta
        title="Our Mission"
        description="Our mission: work sustainably. Build cool things with interesting people, but always, always, find time to live life."
        canonical="/blog/2015/04/23/work-sustainably"
      />

      <SiteLayout contained cta={cta}>
        <article className="stack gap-md">
          <PageHeader
            title="Our Mission"
            center
            subtitle={
              <span className="text-muted">Good code. Sustainable work.</span>
            }
          />

          <div className="stack gap-lg">
            <section className="typography">
              <p>
                When we started Apsis Labs,{" "}
                <Link href="/blog/2015/04/23/work-sustainably/">
                  we didn't draw a line between our personal values and the
                  company's values
                </Link>{" "}
                — they were one and the same. And for over a decade, that's
                worked for us: we strive to build a company where people want to
                work: one that prioritizes{" "}
                <strong>
                  quality, sustainability, and respect that life happens away
                  from the computer.
                </strong>
              </p>
              <p>
                When faced with a decision to make, we always come back to one
                simple idea:
              </p>

              <h1 className="text-primary pullquote text-center">
                <em>Work sustainably</em>.
              </h1>

              <p>
                This is harder than it sounds, and the{" "}
                <Link href="/blog/2025/04/02/burnout-and-recovery/">
                  burnout rate in software is no joke
                </Link>
                . Software is creative work, and creativity is hard to come by
                when you're exhausted and constantly behind. When thinking about
                what kind of company we wanted to be, we started from a very
                basic premise:{" "}
                <strong>
                  you can only expect 20 hours of creative output in a week.
                </strong>
              </p>
              <p>
                At your typical 40-hours a week gig, once your 20 hours are up,
                you've got another 10 of okay work, and then another 10 of bad
                work. Then, when you come back on Monday, you spend your 20 good
                hours fixing last week's mistakes. At Apsis, we asked ourselves:{" "}
                <strong>
                  what if we just stopped when the good work stops?
                </strong>
              </p>
              <p>
                So that's what we do: we ask our team for 20 hours. That's it.
                Beyond that, your time is your own. After a decade, we're more
                confident than ever that this approach works. Our metrics show
                that{" "}
                <strong>
                  our 20-hour approach retains approximately 85% of the
                  productivity of our 40-hour peers
                </strong>
                , whether you measure by story points closed, KPIs met, or
                features delivered.
              </p>

              <p>
                And as it turns out, what's good for our developers is good for
                our clients. Capping development time keeps our team performing
                at their peak—and our customers see exceptional results while
                saving money by avoiding diminishing returns.
              </p>

              <p>
                Curious? <Link href="/hire">Come see for yourself.</Link>
              </p>
            </section>
          </div>
        </article>
      </SiteLayout>
    </>
  );
};

export default MissionPage;
