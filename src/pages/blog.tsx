import { PostExcerpt } from "components/blog/PostExcerpt";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { getSortedPostsData } from "lib/posts";
import { Post } from "lib/types";

export const BlogIndexPage = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			<Section guides={false} bordered>
				<Navbar showTagline={false} />
			</Section>

			<Section narrow spaced guides={false}>
				{posts.map((p) => (
					<PostExcerpt key={p.id} post={p} />
				))}
			</Section>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {
			posts: await getSortedPostsData(),
		},
	};
}

export default BlogIndexPage;
