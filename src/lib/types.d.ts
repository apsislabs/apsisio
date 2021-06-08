import { UrlObject } from "url";

export type Modify<T, R> = Omit<T, keyof R> & R;
export type Modify3<T, R, Q> = Modify<Modify<T, R>, Q>;

export type FrontmatterData = {
	excerpt?: string;
	title?: string;
	date?: Date;
};

export type PostFrontmatter = {
	content: string;
	data: FrontmatterData;
};

export type Post = Modify<
	{
		id: string;
		params?: { id: string };
		href: string | UrlObject;
		contentHtml?: string;
	},
	FrontmatterData
>;
