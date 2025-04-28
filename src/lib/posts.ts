//
// Sourced from https://github.com/NickTomlin/nicktomlin.github.io/blob/3b7002c115904a16e8daad23b4766e6db3bef3d9/lib/posts.js
//

import { readFileSync } from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import fg from "fast-glob";
import { processMarkdown } from "./markdown";
import yaml from "js-yaml";

import { PostFrontmatter, Post, PostParams, Person, Job } from "lib/types";
import _ from "lodash";

const postsDirectory = path.join(process.cwd(), "posts");
export const dataDirectory = path.join(process.cwd(), "data");

export const getCtas = () => {
  const ctas = readFileSync(path.join(dataDirectory, "ctas.yml"));
  return yaml.load(ctas);
};

export const getRandomCta = () => {
  return _.sample(getCtas());
};

export const getPeople = async (): Promise<Record<string, Person>> => {
  const peopleFile = readFileSync(
    path.join(dataDirectory, "people.yml"),
    "utf8"
  );
  return yaml.load(peopleFile);
};

export const getCurrentPeople = async (): Promise<Record<string, Person>> => {
  const people = await getPeople();

  return Object.fromEntries(
    Object.entries(people).filter(([_, p]) => p.current)
  );
};

export const getJobs = async (): Promise<Record<string, Job>> => {
  const jobFile = readFileSync(path.join(dataDirectory, "jobs.yml"), "utf8");
  return yaml.load(jobFile);
};

export const getActiveJobs = async (): Promise<Record<string, Job>> => {
  const jobs = await getJobs();

  return Object.fromEntries(Object.entries(jobs).filter(([_, j]) => j.active));
};

const getPostPaths = () => {
  return fg.sync(path.join(postsDirectory, "**"), { objectMode: true });
};

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }

  const subString = str.slice(0, n - 1);

  let truncated = (
    useWordBoundary ? subString.slice(0, subString.lastIndexOf(" ")) : subString
  ).trim();

  // Remove the last character if it's punctuation
  if (/[^\w\s]+/g.test(truncated.slice(-1))) {
    truncated = truncated.substr(0, truncated.length - 1);
  }

  return `${truncated}&hellip;`;
}

const parseMatter = async (fileContents: string): Promise<PostFrontmatter> => {
  const { content, data, excerpt } = matter(fileContents, {
    // @ts-expect-error: type is wrong from source
    excerpt: (file: GrayMatterFile) => {
      file.excerpt = file.data.excerpt ?? truncate(file.content, 300, true);
    },
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return {
    content,
    data: {
      ...data,
      excerpt: processMarkdown(excerpt ?? data.excerpt ?? ""),
      desc: excerpt ?? data.excerpt,
    },
  };
};

const POST_SLUG_REGEX = /(\d{4})-(\d{2})-(\d{2})-(.*).md/;

const parseNameToParams = (name: string): PostParams | null => {
  const match = name.match(POST_SLUG_REGEX);

  if (!match) {
    return null;
  }

  const year = match[1];
  const month = match[2];
  const day = match[3];
  const slug = match[4];

  return { year, month, day, slug };
};

async function getAllPosts(): Promise<Post[]> {
  const people = await getPeople();

  return await Promise.all(
    getPostPaths().map(async ({ path, name }): Promise<Post> => {
      const fileContents = readFileSync(path, "utf8");
      const matterResult = await parseMatter(fileContents);
      const params = parseNameToParams(name);

      if (!params) {
        return null;
      }

      return {
        id: params.slug,
        params,
        href: {
          pathname: "/blog/[year]/[month]/[day]/[slug]",
          query: params,
        },
        person: people[matterResult.data.author] ?? null,
        ...matterResult.data,
      };
    })
  );
}

export async function getSortedPostsData() {
  // Sort posts by date
  const posts = await getAllPosts();
  return posts.sort((a, b) => {
    if (a.date && b.date && new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    params: post.params,
  }));
}

export async function getPostData({
  year,
  month,
  day,
  slug,
}: PostParams): Promise<Post> {
  const people = await getPeople();
  const fullPath = path.join(
    postsDirectory,
    `${year}-${month}-${day}-${slug}.md`
  );
  const fileContents = readFileSync(fullPath, "utf8");
  const { content, data } = await parseMatter(fileContents);
  const contentHtml = processMarkdown(content);

  return {
    id: slug,
    href: {
      pathname: "/blog/[year]/[month]/[day]/[slug]",
      query: { year, month, day, slug },
    },
    person: people[data.author] ?? null,
    desc: data.desc,
    contentHtml,
    ...data,
  };
}
