//
// Sourced from https://github.com/NickTomlin/nicktomlin.github.io/blob/3b7002c115904a16e8daad23b4766e6db3bef3d9/lib/markdown.js
//

import remark from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

export const processMarkdown = async (
  markdownString: string
): Promise<string> => {
  const processedContent = await remark()
    .use(remarkPrism, {
      transformInlineCode: true,
    })
    .use(html)
    .process(markdownString);

  return processedContent.toString();
};
