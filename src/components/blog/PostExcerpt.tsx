import clsx from "clsx";
import { MarkdownContent } from "components/MarkdownContent";
import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";
import { PostHeader } from "./PostHeader";

export const PostExcerpt: React.FC<{ post: Post; small?: boolean }> = ({
  post,
  small = false,
}) => {
  return (
    <article
      className={clsx(
        styles.post,
        styles["post--list"],
        small && styles["post--list-small"],
      )}
      itemType="http://schema.org/BlogPosting"
    >
      <PostHeader post={post} hideImage={small} />

      <MarkdownContent
        content={post.excerpt}
        className={styles["post__content"]}
      />
    </article>
  );
};
