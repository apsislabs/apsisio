import { Section } from "components/Section";
import { getAllPostIds, getPostData } from "lib/posts";

export default function Post({ postData }) {
  return (
    <Section>
      <article itemScope itemType="http://schema.org/BlogPosting">
        <header className={"my-4"}>
          <h1 className={"lead text-5xl mb-3"} itemProp="name headline">
            {postData.title}
          </h1>
        </header>

        <div
          className="typography"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Section>
  );
}

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
