import { UrlObject } from "url";

export type Modify<T, R> = Omit<T, keyof R> & R;
export type Modify3<T, R, Q> = Modify<Modify<T, R>, Q>;

type Person = {
  name: string;
  title: string;
  current: boolean;
  bio: string;
  bio_short: string;
  image: string;
  social?: SocialLink[];
};

type SocialLink = {
  network: "twitter" | "bluesky" | "linkedin" | "github" | "blog";
  link: string;
};

export type FrontmatterData = {
  excerpt?: string;
  title?: string;
  date?: string;
  image?: string;
  credit?: string;
  author?: string;
  desc?: string;
};

export type PostFrontmatter = {
  content: string;
  data: FrontmatterData;
};

export type PostParams = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export type Post = Modify<
  {
    id: string;
    params?: PostParams | null;
    href: string | UrlObject;
    contentHtml?: string;
    person?: Person | null;
    desc?: string;
  },
  FrontmatterData
>;


export type Job = {
  title: string;
  content: string;
  salary: string;
  active: boolean;
}