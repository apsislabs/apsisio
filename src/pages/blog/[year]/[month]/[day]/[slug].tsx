import { Post } from "components/blog/Post";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { formattedTitle } from "lib/metadata";
import { getAllPostIds, getPostData } from "lib/posts";
import { Post as TPost } from "lib/types";
import Head from "next/head";

export const PostPage = ({ postData }: { postData: TPost }) => {
  return (
    <>
      <Head>
        <title>
          {formattedTitle(postData.title ? `Apsis Blog: ${postData.title}` : "Blog")}
        </title>
        <PageMeta
          title={postData.title ? `Blog: ${postData.title}` : "Blog"}
          description={
            postData.excerpt ??
            "A blog post from Apsis Labs, an agency dedicated to building secure, scalable web and mobile applications."
          }
        />
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
