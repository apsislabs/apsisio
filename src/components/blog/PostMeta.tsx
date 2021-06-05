import { Post } from "lib/posts";

export const PostMeta: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<footer className="post__meta">
			Posted on
			<time
				dateTime="{{ post.date | date_to_xmlschema }}"
				itemProp="datePublished"
			>
				{post.date}
			</time>
			{post.author && (
				<>
					by
					<span itemProp="author" itemScope itemType="http://schema.org/Person">
						<span itemProp="name">{post.author}</span>
					</span>
				</>
			)}
		</footer>
	);
};
