import hljs from "highlight.js";
import { Marked } from "marked";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import { markedSmartypants } from "marked-smartypants";
import { inlineSvgPlugin } from "./svgTokenizer";

const marked = new Marked(
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

marked.use(
  inlineSvgPlugin({ imgPaths: ["public", "public/img"], classNames: "svg" })
);

export const processMarkdown = (markdownString: string): string => {
  const parsed = marked.parse(markdownString, { async: false });

  return parsed;
};
