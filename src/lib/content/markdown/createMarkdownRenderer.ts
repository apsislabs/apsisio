import hljs from "highlight.js";
import { Marked } from "marked";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import { markedSmartypants } from "marked-smartypants";
export const createMarkdownRenderer = ({
  use,
}: {
  use?: (marked: Marked) => void;
} = {}) => {
  const marked = new Marked(
    {
      gfm: true,
      pedantic: false,
    },
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
    markedAlert(),
    gfmHeadingId(),
    markedFootnote(),
    markedSmartypants()
  );

  use?.(marked);

  return marked;
};
