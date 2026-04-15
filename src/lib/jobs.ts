import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";
import { Job } from "lib/types";

const dataDirectory = path.join(process.cwd(), "data");

export const getJobs = async (): Promise<Record<string, Job>> => {
  const jobFile = readFileSync(path.join(dataDirectory, "jobs.yml"), "utf8");
  return yaml.load(jobFile);
};

export const getActiveJobs = async (): Promise<Record<string, Job>> => {
  const jobs = await getJobs();

  return Object.fromEntries(Object.entries(jobs).filter(([_, job]) => job.active));
};
