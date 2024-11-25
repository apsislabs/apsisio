import { PostExcerpt } from "components/blog/PostExcerpt";
import { CtaProps } from "components/Cta";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { formattedTitle } from "lib/metadata";
import { getRandomCta, getSortedPostsData } from "lib/posts";
import { Post } from "lib/types";
import { NextPage } from "next";

import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      posts: await getSortedPostsData(),
      cta: getRandomCta(),
    },
  };
}

export const BlogIndexPage: NextPage<{
  posts: Post[];
  cta: CtaProps;
}> = ({ posts, cta }) => {
  return (
    <>
      <Head>
        <title>{formattedTitle("The Apsis Blog")}</title>
        <PageMeta
          title="Blog"
          description="Apsis Labs blog. Written by our devs to help you understand our process in developing scalable, secure web and mobile applications."
        />
      </Head>

      <SiteLayout contained cta={cta}>
        <div className="stack gap-lg">
          {posts.map((p) => (
            <PostExcerpt key={p.id} post={p} />
          ))}
        </div>
      </SiteLayout>
    </>
  );
};

export default BlogIndexPage;
