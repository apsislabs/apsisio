import { siteConf } from "conf";

export const formattedTitle = (title?: string) =>
  `${title ?? siteConf.meta.title} | Apsis Labs`;
