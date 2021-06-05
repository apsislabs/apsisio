import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import Link from "next/link";
import { getSortedPostsData, Post } from "lib/posts";
import { PostExcerpt } from "components/blog/PostExcerpt";



export const BlogIndexPage = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			<Section guides={false} bordered>
				<Navbar />
			</Section>
			<Section spaced guides={false}>
				{posts.map((p) => (
					<PostExcerpt key={p.id} post={p} />
				))}
			</Section>
		</>
	);
};

export async function getStaticProps() {
	const posts = getSortedPostsData();

	return {
		props: {
			posts,
		},
	};
}

export default BlogIndexPage;
