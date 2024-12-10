import { PostExcerpt } from "components/blog/PostExcerpt";
import { CtaProps } from "components/Cta";
import { MarkdownContent } from "components/MarkdownContent";
import { PageHeader } from "components/PageHeader";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { TeamMember } from "components/TeamMember";
import { getPeople, getSortedPostsData } from "lib/posts";
import { Person, Post as TPost } from "lib/types";
import { getFirstName } from "lib/utils";
import _ from "lodash";
import { useRouter } from "next/router";

const makePersonalizedCta = (person: Person): CtaProps => {
  const firstName = getFirstName(person);

  const templates = [
    {
      title: "Got an idea? Let's make it happen.",
      subtitle: `${firstName} is standing by to bring your idea to life.`,
      button: `Bug ${firstName}`,
    },
    {
      title: `Need help? ${firstName} here.`,
      subtitle: `You can count on ${firstName} to deliver.`,
      button: `Work with ${firstName}`,
    },
    {
      title: `Have you met ${firstName}?`,
      subtitle: `${firstName} is always looking for new friends. Let's work together.`,
      button: `Contact ${firstName}`,
    },
  ];

  return _.sample(templates);
};

export async function getStaticProps({ params }) {
  const people = await getPeople();
  const person = people[params.person];

  if (!person || !person.current) {
    return {
      notFound: true,
    };
  }

  const posts = (await getSortedPostsData()).filter(
    (p) => p.author == params.person,
  );

  const cta = makePersonalizedCta(person);

  return {
    props: {
      posts,
      cta,
      person,
    },
  };
}

export async function getStaticPaths() {
  const people = await getPeople();
  const paths = Object.entries(people)
    .filter(([_key, person]) => person.current)
    .map(([key, _person]) => ({
      params: {
        person: key,
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

  return (
    <>
      <PageMeta
        title={`Blog | Posts by ${getFirstName(person)}`}
        path={asPath}
        description={`Blog posts by ${person.name} for the Apsis Labs blog. Need help building your next great idea? Apsis Labs is a team of for-hire developers here to help.`}
      />

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
