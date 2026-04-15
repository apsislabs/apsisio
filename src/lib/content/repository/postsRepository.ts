import { readFileSync } from "fs";
import path from "path";
import fg from "fast-glob";
import { PostParams } from "lib/types";
import { parseContentFile } from "./parseContentFile";

const postsDirectory = path.join(process.cwd(), "posts");
const POST_SLUG_REGEX = /(\d{4})-(\d{2})-(\d{2})-(.*).md/;

export const getPostPath = ({ year, month, day, slug }: PostParams) =>
  path.join(postsDirectory, `${year}-${month}-${day}-${slug}.md`);

export const parsePostFile = parseContentFile;

export const parseNameToParams = (name: string): PostParams | null => {
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

export const getPostPaths = () => {
  return fg.sync(path.join(postsDirectory, "**"), { objectMode: true });
};

export const getPostRecordByParams = async (params: PostParams) => {
  const fullPath = getPostPath(params);
  const fileContents = readFileSync(fullPath, "utf8");

  return {
    id: params.slug,
    params,
    ...parsePostFile(fileContents),
  };
};

export const getAllPostRecords = async () => {
  return getPostPaths()
    .map(({ path: postPath, name }) => {
      const params = parseNameToParams(name);

      if (!params) {
        return null;
      }

      const fileContents = readFileSync(postPath, "utf8");

      return {
        id: params.slug,
        params,
        ...parsePostFile(fileContents),
      };
    })
    .filter(Boolean);
};
