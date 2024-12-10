import { Post } from "components/blog/Post";
import { CtaProps } from "components/Cta";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { formattedTitle } from "lib/metadata";
import { getAllPostIds, getPostData, getRandomCta } from "lib/posts";
import { Post as TPost } from "lib/types";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params);

  return {
    props: {
      postData,
      cta: getRandomCta(),
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const PostPage = ({
  postData,
  cta,
}: {
  postData: TPost;
  cta: CtaProps;
}) => {
  const { asPath } = useRouter();

  const title = formattedTitle(
    postData.title ? `Blog: ${postData.title}` : "Apsis Blog",
  );

  return (
    <>
      <PageMeta
        title={title}
        image={postData.image}
        path={asPath}
        description={
          postData.desc ??
          "A blog post from Apsis Labs, an agency dedicated to building secure, scalable web and mobile applications."
        }
      />

      <SiteLayout contained cta={cta}>
        <Post post={postData} />
      </SiteLayout>
    </>
  );
};

export default PostPage;
