import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import markedFootnote from "marked-footnote";
import { gfmHeadingId } from "marked-gfm-heading-id";
import hljs from "highlight.js";
import markedAlert from "marked-alert";
import { markedSmartypants } from "marked-smartypants";

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
  markedSmartypants(),
);

export const processMarkdown = (markdownString: string): string => {
  const parsed = marked.parse(markdownString, { async: false });

  return parsed;
};
