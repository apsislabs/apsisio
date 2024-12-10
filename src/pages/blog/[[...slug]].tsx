import { Pager } from "components/blog/Pager";
import { PostExcerpt } from "components/blog/PostExcerpt";
import { CtaProps } from "components/Cta";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { formattedTitle } from "lib/metadata";
import { getRandomCta, getSortedPostsData } from "lib/posts";
import { Post } from "lib/types";
import _ from "lodash";
import { NextPage } from "next";

import Head from "next/head";

const paginatedPosts = async (perPage: number = 5) => {
  const posts = await getSortedPostsData();
  return _.chunk(posts, perPage);
};

export async function getStaticProps({ params }) {
  const pages = await paginatedPosts();
  const pageIdx = params.slug ? Number(params.slug[1]) - 1 : 0;
  const posts = pages.at(pageIdx) ?? pages.at(0);

  return {
    props: {
      posts,
      numPages: pages.length,
      activePageIdx: pageIdx,
      cta: getRandomCta(),
    },
  };
}

export async function getStaticPaths() {
  const pages = await paginatedPosts();
  const pagePaths = pages.map((p, idx) => ({
    params: { slug: ["page", (idx + 1).toString()] },
  }));

  return {
    paths: [{ params: { slug: undefined } }, ...pagePaths],
    fallback: false,
  };
}

export const BlogIndexPage: NextPage<{
  posts: Post[];
  numPages: number;
  activePageIdx: number;
  cta: CtaProps;
}> = ({ posts, cta, numPages, activePageIdx }) => {
  const title =
    activePageIdx > 0
      ? formattedTitle(`Apsis Blog | Page ${activePageIdx + 1}`)
      : formattedTitle("The Apsis Blog");
  return (
    <>
      <Head>
        <title>{title}</title>
        <PageMeta
          title={title}
          description="Apsis Labs blog. Written by our devs to help you understand our process in developing scalable, secure web and mobile applications."
        />
      </Head>

      <SiteLayout contained cta={cta}>
        <div className="stack gap-lg">
          {posts.map((p) => (
            <PostExcerpt key={p.id} post={p} />
          ))}

          <div style={{ margin: "0 auto" }}>
            <Pager
              numPages={numPages}
              activePageIdx={activePageIdx}
              baseUrl="/blog"
            />
          </div>
        </div>
      </SiteLayout>
    </>
  );
};

export default BlogIndexPage;
