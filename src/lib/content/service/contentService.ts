import {
  CaseStudyPageModel,
  Person,
  PersonPageModel,
  Post,
  PostListItem,
  PostPageModel,
  PostParams,
  TeamPageModel,
} from "lib/types";
import { truncate } from "lodash-es";
import { renderMarkdown } from "../markdown";
import { renderServerMarkdown } from "../markdown/server";
import {
  getAllPostRecords,
  getPostRecordByParams,
} from "../repository/postsRepository";
import {
  getCurrentPeopleMap,
  getPeopleMap,
} from "../repository/peopleRepository";
import {
  getCaseStudyRecord,
  listAllCaseStudyIds as listAllCaseStudyRecordIds,
} from "../repository/caseStudiesRepository";

const comparePostsByDateDesc = (a: PostListItem, b: PostListItem) => {
  if (a.date && b.date && new Date(a.date) < new Date(b.date)) {
    return 1;
  } else {
    return -1;
  }
};

const toPostListItem = (
  post: Awaited<ReturnType<typeof getPostRecordByParams>>
): PostListItem => ({
  ...post.data,
  id: post.id,
  params: post.params,
  href: {
    pathname: "/blog/[year]/[month]/[day]/[slug]",
    query: post.params,
  },
  excerpt: renderMarkdown(post.excerpt),
});

const toPostModel = (
  post: Awaited<ReturnType<typeof getPostRecordByParams>>,
  people: Record<string, Person>
): PostPageModel => ({
  ...post.data,
  id: post.id,
  params: post.params,
  href: {
    pathname: "/blog/[year]/[month]/[day]/[slug]",
    query: post.params,
  },
  person: people[post.data.author] ?? null,
  contentHtml: renderServerMarkdown(post.content),
  excerpt: renderMarkdown(post.excerpt),
  desc: post.desc,
});

export const loadPostByParams = async (
  params: PostParams
): Promise<PostPageModel> => {
  const [post, people] = await Promise.all([
    getPostRecordByParams(params),
    getPeopleMap(),
  ]);

  return toPostModel(post, people);
};

export const listSortedPosts = async (): Promise<PostListItem[]> => {
  const posts = await getAllPostRecords();

  return posts.map(toPostListItem).sort(comparePostsByDateDesc);
};

export const listAllPostIds = async () => {
  const posts = await getAllPostRecords();

  return posts.map((post) => ({
    params: post.params,
  }));
};

export const loadPersonPageModel = async (
  personSlug: string
): Promise<PersonPageModel | null> => {
  const [people, postRecords] = await Promise.all([
    getPeopleMap(),
    getAllPostRecords(),
  ]);
  const person = people[personSlug];

  if (!person || !person.current) {
    return null;
  }

  const fullPosts = postRecords
    .filter((post) => post.data.author === personSlug)
    .map((post) => toPostModel(post, people));

  return {
    person,
    posts: fullPosts,
  };
};

export const listCurrentPeople = async (): Promise<TeamPageModel> => {
  return getCurrentPeopleMap();
};

export const listCurrentPersonIds = async () => {
  const people = await listCurrentPeople();

  return Object.keys(people).map((person) => ({
    params: {
      person,
    },
  }));
};

export const listAllCaseStudyIds = async () => {
  const clients = await listAllCaseStudyRecordIds();

  return clients.map((client) => ({
    params: {
      client,
    },
  }));
};

export const loadCaseStudyPageModel = async (
  client: string
): Promise<CaseStudyPageModel> => {
  const caseStudy = await getCaseStudyRecord(client);

  return {
    ...caseStudy.data,
    description: truncate(caseStudy.content ?? "", { length: 120 }),
    contentHtml: renderServerMarkdown(caseStudy.content),
  } as CaseStudyPageModel;
};
