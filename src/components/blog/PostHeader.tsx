import Link from "next/link";
import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";
import { PostMeta } from "./PostMeta";

export const PostHeader: React.FC<{ post: Post; as?: React.ElementType; }> = ({ post, as: HeaderComponent = 'h2' }) => {
  return (
    <header className={styles["post__header"]}>
      <div>
        <HeaderComponent className={styles["post__title"]}>
          <Link href={post.href} passHref>
            {post.title}
          </Link>
        </HeaderComponent>
        <PostMeta post={post} />
      </div>

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
            <small className={styles["post__photo-credit"]}>
              Image by {post.credit}
            </small>
          )}
        </>
      )}
    </header>
  );
};
