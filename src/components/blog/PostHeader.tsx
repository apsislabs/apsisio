import Link from "next/link";
import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss"

export const PostHeader: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<header className={styles["post__header"]}>
			{post.image && (
				<>
					<div className={styles["post__image-wrapper"]}>
						<img
							src={post.image}
							alt={post.title}
							className={styles["post__image"]}
							data-action="zoom"
						/>
					</div>
					
					{post.credit && (
						<small className={styles["post__photo-credit"]}>Image by {post.credit}</small>
					)}
				</>
			)}

			<h2 className={styles["post__title"]}>
				<Link href={post.href} passHref>
					{post.title}
				</Link>
			</h2>
		</header>
	);
};
