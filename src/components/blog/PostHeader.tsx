import Link from "next/link";
import { Post } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";
import { PostMeta } from "./PostMeta";
import { PostImage } from "./PostImage";

export const PostHeader: React.FC<{
  post: Post;
  as?: React.ElementType;
  hideImage?: boolean;
}> = ({ post, as: HeaderComponent = "h2", hideImage = false }) => {
  return (
    <header className={styles["post__header"]}>
      <div className="stack gap-sm">
        <HeaderComponent className={styles["post__title"]}>
          <Link href={post.href} passHref>
            {post.title}
          </Link>
        </HeaderComponent>

        <PostMeta post={post} />
      </div>

      {post.image && !hideImage && <PostImage post={post} />}
    </header>
  );
};
