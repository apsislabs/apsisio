import { processMarkdown } from "lib/markdown";
import { HTMLProps } from "react";

export const MarkdownContent: React.FC<
  { content: string } & HTMLProps<HTMLDivElement>
> = ({ content, ...rest }) => (
  <div
    {...rest}
    dangerouslySetInnerHTML={{ __html: processMarkdown(content) ?? "" }}
  />
);
