import Link from "next/link";
import { Post } from "lib/posts";

export const PostHeader: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<header className="post__header">
			{post.image && (
				<>
					<div className="post__image-wrapper">
						<img
							src=""
							alt={post.title}
							className="post__image"
							data-action="zoom"
						/>
					</div>
					{post.credit && (
						<small className="post__photo-credit">Image by {post.credit}</small>
					)}
				</>
			)}

			<h2 className="post__title">
				<Link href={post.href} passHref>
					<a>{post.title}</a>
				</Link>
			</h2>
		</header>
	);
};
