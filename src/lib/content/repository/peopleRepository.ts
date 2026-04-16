import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";
import { Person } from "lib/types";

const dataDirectory = path.join(process.cwd(), "data");

export const getPeopleMap = async (): Promise<Record<string, Person>> => {
  const peopleFile = readFileSync(path.join(dataDirectory, "people.yml"), "utf8");
  return yaml.load(peopleFile);
};

export const getCurrentPeopleMap = async (): Promise<Record<string, Person>> => {
  const people = await getPeopleMap();

  return Object.fromEntries(
    Object.entries(people).filter(([_, person]) => person.current)
  );
};
