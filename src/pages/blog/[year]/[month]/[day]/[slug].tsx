import { Post } from "components/blog/Post";

import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { SiteLayout } from "components/SiteLayout";
import { getAllPostIds, getPostData } from "lib/posts";
import { Post as TPost } from "lib/types";
import Head from "next/head";

export const PostPage = ({ postData }: { postData: TPost }) => {
  return (
    <>
      <Head>
        {postData.title ? (
          <title>Blog: {postData.title} | Apsis Labs</title>
        ) : (
          <title>Blog | Apsis Labs</title>
        )}
      </Head>

      <SiteLayout contained>
        <Post post={postData} />
      </SiteLayout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params);

  return {
    props: {
      postData,
    },
  };
}

export default PostPage;
