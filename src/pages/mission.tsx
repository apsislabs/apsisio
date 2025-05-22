import { CtaProps } from "components/Cta";
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
                  we didn't draw a line between our personal values and our
                  company's values
                </Link>{" "}
                — they were one and the same. Over a decade later, that still
                holds true.
              </p>
              <p>
                We're building a company where people want to work. Where they
                can take pride in what they build. Where{" "}
                <strong>quality and sustainability</strong> aren't competing
                priorities — they go hand in hand. And where we never forget
                that life happens away from the keyboard.
              </p>
              <p>
                When we face a decision, we always come back to one core idea:
              </p>
              <h1 className="text-primary pullquote text-center">
                <em>Work sustainably</em>.
              </h1>
              <p>
                That's harder than it sounds.{" "}
                <Link href="/blog/2025/04/02/burnout-and-recovery/">
                  Burnout in tech is no joke.
                </Link>
                Software is creative work, and creativity doesn't thrive when
                you're exhausted or constantly behind.
              </p>
              <p>
                At Apsis, we operate from a simple truth:{" "}
                <strong>
                  most people only have about 20 hours of peak creative output
                  per week.
                </strong>
              </p>
              <p>
                In a typical 40+ hour job, once those 20 hours are used up,
                you're left with 10 hours of decent work — and 10+ of
                low-quality, error-prone work. By Monday, you're using next
                week's best hours to clean up last week's mess.
              </p>
              <p>
                So we asked:{" "}
                <strong>
                  what if we just stopped when the best work stops?
                </strong>
              </p>
              <p>
                That's what we do. We ask our team for 20 hours a week &mdash;
                no more. The rest of their time is theirs.
              </p>
              <p>
                After a decade of observing how developers actually work, we're
                more confident than ever that this is the right approach. And
                the data backs it up:{" "}
                <strong>
                  our 20-hour weeks deliver about 85% of the productivity of a
                  traditional 40-hour schedule &mdash; whether you're measuring
                  story points, KPIs, or features shipped.
                </strong>
              </p>
              <p>
                What's better for our team ends up better for our clients.
                Working at peak performance leads to cleaner code, fewer
                mistakes, and more focused problem-solving. It also saves our
                clients money &mdash; because they're not paying for diminishing
                returns.
              </p>
              <p>
                Curious?{" "}
                <Link href="/hire">
                  Come see what sustainable, high-output development looks like.
                </Link>
              </p>
            </section>
          </div>
        </article>
      </SiteLayout>
    </>
  );
};

export default MissionPage;
