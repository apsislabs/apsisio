import { PostExcerpt } from "components/blog/PostExcerpt";
import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { getSortedPostsData } from "lib/posts";
import { Post } from "lib/types";

import Head from "next/head";

export const BlogIndexPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <PageMeta title="Blog" description="Apsis Labs blog. Written by our devs to help you understand our process in developing scalable, secure web and mobile applications." />
      </Head>

      <SiteLayout contained>
        {posts.map((p) => (
          <PostExcerpt key={p.id} post={p} />
        ))}
      </SiteLayout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getSortedPostsData(),
    },
  };
}

export default BlogIndexPage;
