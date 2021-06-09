import Link from "next/link";
import { Post as TPost } from "lib/types";
import { PostHeader } from "./PostHeader";
import { PostMeta } from "./PostMeta";
import styles from "styles/components/blog/Post.module.scss";
import clsx from "clsx";

export const Post: React.FC<{ post: TPost }> = ({ post }) => {

	return (
		<div
			className={clsx(styles["post-wrapper"], styles["post-wrapper--single"])}
		>
			<article
				className={clsx(styles.post)}
				itemType="http://schema.org/BlogPosting"
			>
				<PostHeader post={post} />

				<div
					className={styles["post__content"]}
					dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
				/>

				<PostMeta post={post} />
			</article>
		</div>
	);
};
