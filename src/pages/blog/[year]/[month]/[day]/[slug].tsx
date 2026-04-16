import { Post } from "components/blog/Post";
import { CtaProps } from "components/Cta";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import {
  listAllPostIds,
  loadPostByParams,
} from "lib/content/service/contentService";
import { getRandomCta } from "lib/ctas";
import { PostPageModel } from "lib/types";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const postData = await loadPostByParams(params);

  return {
    props: {
      postData,
      cta: getRandomCta(),
    },
  };
}

export async function getStaticPaths() {
  const paths = await listAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const PostPage = ({
  postData,
  cta,
}: {
  postData: PostPageModel;
  cta: CtaProps;
}) => {
  const { asPath } = useRouter();

  return (
    <>
      <PageMeta
        title={postData.title ? `Blog: ${postData.title}` : "Apsis Blog"}
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
