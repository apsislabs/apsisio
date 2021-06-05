import Link from "next/link";
import { Post } from "lib/posts";
import { PostHeader } from "./PostHeader";
import { PostMeta } from "./PostMeta";

export const PostExcerpt: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<article
			className="post post--list"
			itemType="http://schema.org/BlogPosting"
		>
			<PostHeader post={post} />

			<div className="post__content">
				{post.excerpt}

				<p>
					<Link href={post.href}>Read More &raquo;</Link>
				</p>
			</div>

			<PostMeta post={post} />
		</article>
	);
};
