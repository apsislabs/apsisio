import { readFileSync } from "fs";
import path from "path";
import fg from "fast-glob";
import { parseContentFile } from "./parseContentFile";

const dataDirectory = path.join(process.cwd(), "data");
const caseStudiesDirectory = path.join(dataDirectory, "cases");

export const getCaseStudyPaths = () => {
  return fg.sync(path.join(caseStudiesDirectory, "**.md"), {
    objectMode: true,
  });
};

export const listAllCaseStudyIds = async () => {
  return getCaseStudyPaths().map(({ name }) => name.replaceAll(".md", ""));
};

export const getCaseStudyRecord = async (client: string) => {
  const fullPath = path.join(caseStudiesDirectory, `${client}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  return {
    client,
    ...parseContentFile(fileContents),
  };
};
