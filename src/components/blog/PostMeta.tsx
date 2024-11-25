import { Post } from "lib/types";
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

export const PostMeta: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <footer className={styles["post__meta"]}>
      Posted on{" "}
      <time dateTime={post.date} itemProp="datePublished">
        {post.date}
      </time>{" "}
      {post.person && post.author ? (
        <Byline author={`${post.person.name}, ${post.person.title}`} />
      ) : (
        <Byline author={post.author} />
      )}
    </footer>
  );
};
