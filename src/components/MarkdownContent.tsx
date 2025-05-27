import hljs from "highlight.js";
import { Marked } from "marked";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import { markedSmartypants } from "marked-smartypants";
import { HTMLProps } from "react";

const browserMarked = new Marked(
  {
    gfm: true,
    pedantic: false,
  },
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  markedAlert(),
  gfmHeadingId(),
  markedFootnote(),
  markedSmartypants()
);

const processMarkdownForBrowser = (markdownString: string): string => {
  const parsed = browserMarked.parse(markdownString, { async: false });

  return parsed;
};

export const MarkdownContent: React.FC<
  { content: string } & HTMLProps<HTMLDivElement>
> = ({ content, ...rest }) => (
  <div
    {...rest}
    dangerouslySetInnerHTML={{
      __html: processMarkdownForBrowser(content) ?? "",
    }}
  />
);
