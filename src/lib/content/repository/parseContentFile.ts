import matter, { GrayMatterFile } from "gray-matter";
import yaml from "js-yaml";
import { truncate } from "lodash-es";

export const parseContentFile = (fileContents: string) => {
  const { content, data, excerpt } = matter(fileContents, {
    // @ts-expect-error: type is wrong from source
    excerpt: (file: GrayMatterFile) => {
      file.excerpt = file.data.excerpt ?? truncate(file.content, { length: 300 });
    },
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return {
    content,
    data,
    excerpt: excerpt ?? data.excerpt ?? "",
    desc: excerpt ?? data.excerpt,
  };
};
