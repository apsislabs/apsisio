import { inlineSvgPlugin } from "lib/svgTokenizer";
import { createMarkdownRenderer } from "./createMarkdownRenderer";

const renderer = createMarkdownRenderer({
  use(marked) {
    marked.use(
      inlineSvgPlugin({ imgPaths: ["public", "public/img"], classNames: "svg" })
    );
  },
});

export const renderServerMarkdown = (markdown: string): string => {
  return renderer.parse(markdown ?? "", { async: false });
};
