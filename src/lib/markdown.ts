import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import markedFootnote from "marked-footnote";
import hljs from "highlight.js";

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
  markedFootnote()
);

export const processMarkdown = (markdownString: string): string => {
  return marked.parse(markdownString, { async: false });
};
