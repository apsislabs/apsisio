import { Post, PostListItem } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";

const Byline: React.FC<{ author: React.ReactNode }> = ({ author }) => {
  return (
    <>
      by{" "}
      <span itemProp="author" itemScope itemType="http://schema.org/Person">
        <span itemProp="name">{author}</span>
      </span>
    </>
  );
};

const renderByline = (post: Post | PostListItem) => {
  if ((post as Post).person) {
    return <Byline author={`${(post as Post).person!.name}, ${(post as Post).person!.title}`} />;
  }
  return <Byline author={post.author} />;
};

export const PostMeta: React.FC<{ post: Post | PostListItem }> = ({ post }) => {
  return (
    <footer className={styles["post__meta"]}>
      Posted on{" "}
      <time dateTime={post.date} itemProp="datePublished">
        {post.date}
      </time>{" "}
      {renderByline(post)}
    </footer>
  );
};
