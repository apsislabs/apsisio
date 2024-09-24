import { PostExcerpt } from "components/blog/PostExcerpt";
import { SiteLayout } from "components/SiteLayout";
import { getSortedPostsData } from "lib/posts";
import { Post } from "lib/types";

import Head from "next/head";

export const BlogIndexPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Blog | Apsis Labs</title>
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
