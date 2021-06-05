//
// Sourced from https://github.com/NickTomlin/nicktomlin.github.io/blob/3b7002c115904a16e8daad23b4766e6db3bef3d9/lib/posts.js
//

import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { processMarkdown } from "./markdown";
import yaml from "js-yaml";
import { Url, UrlObject } from "url";

export type Modify<T, R> = Omit<T, keyof R> & R;
export type Modify3<T, R, Q> = Modify<Modify<T, R>, Q>;

const postsDirectory = path.join(process.cwd(), "posts");

const getPostPaths = () => {
  return fg.sync(path.join(postsDirectory, "**"), { objectMode: true });
};

export type FrontmatterData = {
  excerpt: string;
  title: string;
  date: Date;
};

export type PostFrontmatter = {
  content: string;
  data: FrontmatterData;
};

const parseMatter = (fileContents: string): PostFrontmatter => {
  const { content, data, excerpt } = matter(fileContents, {
    excerpt: (file) => {
      file.excerpt = file.content.split(".").slice(0, 2).join(" ");
    },
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return {
    content,
    data: {
      ...data,
      excerpt: excerpt || data.excerpt || "",
    },
  };
};

export type Post = Modify<
  {
    id: string;
    params: { id: string };
    href: string | UrlObject;
    contentHtml?: string;
  },
  FrontmatterData
>;

function getAllPosts(): Post[] {
  return getPostPaths().map(({ path, name }): Post => {
    const fileContents = readFileSync(path, "utf8");
    const matterResult = parseMatter(fileContents);
    const id = name.replace(".md", "");
    return {
      id,
      params: { id },
      href: {
        pathname: "/blog/[id]",
        query: { id },
      },
      ...matterResult.data,
    };
  });
}

export function getSortedPostsData() {
  // Sort posts by date
  return getAllPosts().sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  return getAllPosts().map((post) => ({
    params: post.params,
  }));
}

export async function getPostData({ id }: { id: string }): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { content, data } = parseMatter(fileContents);
  const contentHtml = await processMarkdown(content);

  return {
    id,
    href: {
      pathname: "/posts/[name]",
      query: { id },
    },
    contentHtml,
    ...data,
  };
}
