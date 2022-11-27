import { PostExcerpt } from "components/blog/PostExcerpt";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { getAllPostIds, getPostData, getSortedPostsData } from "lib/posts";
import { Post as TPost } from "lib/types";
import { Post } from "components/blog/Post";
import Head from "next/head";

export const PostPage = ({ postData }: { postData: TPost }) => {
  return (
    <>
      <Head>
        <title>Blog: {postData.title} | Apsis Labs</title>
      </Head>
      <Section guides={false} bordered>
        <Navbar showTagline={false} />
      </Section>

      <Section narrow spaced guides={false}>
        <Post post={postData} />
      </Section>
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

// export default function ({ postData }) {
//   return (
//     <Section>
//       <article itemScope itemType="http://schema.org/BlogPosting">
//         <header className={"my-4"}>
//           <h1 className={"lead text-5xl mb-3"} itemProp="name headline">
//             {postData.title}
//           </h1>
//         </header>

//         <div
//           className="typography"
//           itemProp="articleBody"
//           dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
//         />
//       </article>
//     </Section>
//   );
// }
