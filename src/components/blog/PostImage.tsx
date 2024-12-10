import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";

export const PostImage: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles["post__image-wrapper"]}>
      <img
        src={post.image}
        alt={post.title}
        className={styles["post__image"]}
        data-action="zoom"
      />

      {post.credit && (
        <small className={styles["post__photo-credit"]}>
          Image by {post.credit}
        </small>
      )}
    </div>
  );
};
