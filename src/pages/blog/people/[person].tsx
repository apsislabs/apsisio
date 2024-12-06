import { PostExcerpt } from "components/blog/PostExcerpt";
import { CtaProps } from "components/Cta";
import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { TeamMember } from "components/TeamMember";
import { formattedTitle } from "lib/metadata";
import { getPeople, getRandomCta, getSortedPostsData } from "lib/posts";
import { Person, Post as TPost } from "lib/types";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const posts = (await getSortedPostsData()).filter(
    (p) => p.author == params.person,
  );

  const people = await getPeople();
  const person = people[params.person];

  if (!person) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      person,
      cta: getRandomCta(),
    },
  };
}

export async function getStaticPaths() {
  const people = await getPeople();
  const paths = Object.keys(people).map((p) => ({
    params: {
      person: p,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const PersonPage = ({
  posts,
  cta,
  person,
}: {
  posts: TPost[];
  cta: CtaProps;
  person: Person;
}) => {
  const { asPath } = useRouter();
  const title = formattedTitle(`Blog | Posts by ${person.name}`);

  return (
    <>
      <Head>
        <title>{title}</title>
        <PageMeta
          title={title}
          path={asPath}
          description={`Blog posts by ${person.name} for the Apsis Labs blog. Need help building your next great idea? Apsis Labs is a team of for-hire developers here to help.`}
        />
      </Head>

      <SiteLayout contained cta={cta}>
        <div className="stack gap-lg">
          <PageHeader title={`Posts by ${person.name}`} />

          <TeamMember
            name={person.name}
            bio={<MarkdownContent content={person.bio} />}
            title={person.title}
            image={person.image}
            social={person.social}
            size={160}
          />

          <hr className="divider" />

          <div className="stack gap-lg">
            {posts.length === 0 && (
              <span className="text-muted">It's quiet&hellip; too quiet</span>
            )}

            {posts.map((p) => (
              <PostExcerpt key={p.id} post={p} small />
            ))}
          </div>
        </div>
      </SiteLayout>
    </>
  );
};

export default PersonPage;
