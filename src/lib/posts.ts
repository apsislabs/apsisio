//
// Sourced from https://github.com/NickTomlin/nicktomlin.github.io/blob/3b7002c115904a16e8daad23b4766e6db3bef3d9/lib/posts.js
//

import { readFileSync } from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import fg from "fast-glob";
import { processMarkdown } from "./markdown";
import yaml from "js-yaml";

import { PostFrontmatter, Post, PostParams } from "lib/types";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostPaths = () => {
  return fg.sync(path.join(postsDirectory, "**"), { objectMode: true });
};

const parseMatter = async (fileContents: string): Promise<PostFrontmatter> => {
  const { content, data, excerpt } = matter(fileContents, {
    // @ts-expect-error: type is wrong from source
    excerpt: (file: GrayMatterFile) => {
      file.excerpt = file.content.split(".").slice(0, 5).join(".");
    },
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return {
    content,
    data: {
      ...data,
      excerpt: await processMarkdown(excerpt ?? data.excerpt ?? ""),
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
        ...matterResult.data,
      };
    })
  );
}

export async function getSortedPostsData() {
  // Sort posts by date
  const posts = await getAllPosts();
  return posts.sort((a, b) => {
    if (a.date && b.date && a.date < b.date) {
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
  const fullPath = path.join(
    postsDirectory,
    `${year}-${month}-${day}-${slug}.md`
  );
  const fileContents = readFileSync(fullPath, "utf8");
  const { content, data } = await parseMatter(fileContents);
  const contentHtml = await processMarkdown(content);

  return {
    id: slug,
    href: {
      pathname: "/blog/[year]/[month]/[day]/[slug]",
      query: { year, month, day, slug },
    },
    contentHtml,
    ...data,
  };
}
