import { PostImage } from "components/blog/PostImage";
import { CtaProps } from "components/Cta";
import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { getPostData, getRandomCta } from "lib/posts";
import { Post } from "lib/types";
import { NextPage } from "next";

const Disclaimer = () => (
  <MarkdownContent
    content={`>[!NOTE]\n>This originally appeared as a [blog post](/blog/2015/04/23/work-sustainably/) way back in 2015. We've migrated the content here to make it easier to find, and reaffirm our commitment even a decade on.`}
  />
);

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
            subtitle={
              <>
                <span className="text-primary">Sustainable work</span>. Exceptional software.
              </>
            }
          />

          <Disclaimer />

          <div className="stack gap-lg">
            <PostImage post={content} />

            <section className="typography">
              <MarkdownContent content={content.contentHtml} />
            </section>
          </div>
        </article>
      </SiteLayout>
    </>
  );
};

export default MissionPage;
