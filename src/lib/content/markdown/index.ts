import { createMarkdownRenderer } from "./createMarkdownRenderer";

const renderer = createMarkdownRenderer();

export const renderMarkdown = (markdown: string): string => {
  return renderer.parse(markdown ?? "", { async: false });
};
