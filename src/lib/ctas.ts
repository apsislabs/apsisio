import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";
import { sample } from "lodash-es";

const dataDirectory = path.join(process.cwd(), "data");

export const getCtas = () => {
  const ctas = readFileSync(path.join(dataDirectory, "ctas.yml"));
  return yaml.load(ctas);
};

export const getRandomCta = () => {
  return sample(getCtas());
};
