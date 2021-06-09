import Link from "next/link";
import { Post } from "lib/types";
import { PostHeader } from "./PostHeader";
import { PostMeta } from "./PostMeta";
import styles from "styles/components/blog/Post.module.scss";
import clsx from "clsx";

export const PostExcerpt: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<article
			className={clsx(styles.post, styles["post--list"])}
			itemType="http://schema.org/BlogPosting"
		>
			<PostHeader post={post} />

			<div className={styles["post__content"]} dangerouslySetInnerHTML={{__html: post.excerpt ?? ''}} />

			<PostMeta post={post} />
		</article>
	);
};
