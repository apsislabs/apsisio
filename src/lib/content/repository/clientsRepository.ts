import { Client } from "lib/types";
import { readFileSync } from "fs";
import path from "path";
import yaml from "js-yaml";

const dataDirectory = path.join(process.cwd(), "data");

export const getClientsMap = async (): Promise<Record<string, Client>> => {
  const clientsFile = readFileSync(path.join(dataDirectory, "clients.yml"), "utf8");
  return yaml.load(clientsFile);
};

export const listAllClientIds = async () => {
  const clients = await getClientsMap();
  return Object.keys(clients).map((client) => ({
    params: {
      client,
    },
  }));
};
