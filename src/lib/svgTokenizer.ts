import fs from "fs";
import path from "path";
import type { RendererObject, Tokens } from "marked";

interface InlineSvgPluginOptions {
  imgPaths?: string[];
  classNames?: string;
}

export function inlineSvgPlugin(options: InlineSvgPluginOptions = {}) {
  const imgPaths = options.imgPaths ?? [];
  const defaultClass = options.classNames?.trim() ?? "";

  const svgCache = new Map<string, string>();

  const renderer: Partial<RendererObject> = {
    image(this: unknown, token: Tokens.Image): string | false {
      const href = token.href;
      const title = token.title || "";
      const rawText = token.text || "";

      const isSvg = href.endsWith(".svg");
      const isRemote =
        href.startsWith("http://") || href.startsWith("https://");

      const [altText, classFromAlt = ""] = rawText
        .split("|")
        .map((s) => s.trim());
      const combinedClass = [defaultClass, classFromAlt]
        .filter(Boolean)
        .join(" ")
        .trim();

      if (!isSvg || isRemote) {
        const titleAttr = title ? ` title="${title}"` : "";
        return `<img src="${href}" alt="${altText}"${titleAttr} loading="lazy">`;
      }

      let resolvedPath: string | null = null;
      for (const base of [
        process.cwd(),
        ...imgPaths.map((p) => path.resolve(process.cwd(), p)),
      ]) {
        const fullPath = path.resolve(base, href);
        if (fs.existsSync(fullPath)) {
          resolvedPath = fullPath;
          break;
        }
      }

      if (!resolvedPath) {
        console.warn(`⚠️ SVG not found: ${href}`);
        return `<span style="color: orange;">[SVG not found: ${altText}]</span>`;
      }

      try {
        let svgContent: string;
        svgContent = fs.readFileSync(resolvedPath, "utf8");
        svgCache.set(resolvedPath, svgContent);

        // Add or merge class attribute into the <svg> tag
        svgContent = svgContent.replace(/<svg\b([^>]*)>/, (match, attrs) => {
          const classAttr = attrs.match(/\bclass=["']([^"']*)["']/);
          if (classAttr) {
            const existing = classAttr[1];
            const newClass = `${existing} ${combinedClass}`.trim();
            return `<svg ${attrs.replace(classAttr[0], `class="${newClass}"`)}>`;
          } else {
            return `<svg ${attrs} class="${combinedClass}">`;
          }
        });

        return svgContent;
      } catch (err) {
        console.error(`❌ Failed to inline SVG "${resolvedPath}":`, err);
        return `<span style="color: red;">[Error loading SVG: ${altText}]</span>`;
      }
    },
  };

  return { renderer };
}
