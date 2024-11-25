import clsx from "clsx";
import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";
import { PostHeader } from "./PostHeader";
import { MarkdownContent } from "components/MarkdownContent";

export const PostExcerpt: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<article
			className={clsx(styles.post, styles["post--list"])}
			itemType="http://schema.org/BlogPosting"
		>
			<PostHeader post={post} />

			<MarkdownContent content={post.excerpt} className={styles["post__content"]} />
		</article>
	);
};
