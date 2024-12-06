import clsx from "clsx";
import { TeamMember } from "components/TeamMember";
import { Post as TPost } from "lib/types";
import styles from "styles/components/blog/Post.module.scss";
import { PostHeader } from "./PostHeader";
import { MarkdownContent } from "components/MarkdownContent";

export const Post: React.FC<{ post: TPost }> = ({ post }) => {
  return (
    <div
      className={clsx(styles["post-wrapper"], styles["post-wrapper--single"])}
    >
      <article
        className={clsx(styles.post)}
        itemType="http://schema.org/BlogPosting"
      >
        <PostHeader as="h1" post={post} />

        <div
          className={styles["post__content"]}
          dangerouslySetInnerHTML={{ __html: post.contentHtml ?? "" }}
        />

        {post.person && (
          <div className="stack">
            <hr className="divider" />

            <TeamMember
              small
              slug={post.author}
              name={post.person.name}
              bio={<MarkdownContent content={post.person.bio_short} />}
              title={post.person.title}
              image={post.person.image}
              social={post.person.social}
              size={60}
            />
          </div>
        )}
      </article>
    </div>
  );
};
