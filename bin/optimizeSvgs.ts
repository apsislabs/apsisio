#!/usr/bin/env bun

import fg from "fast-glob";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { optimize } from "svgo";

function sanitizeSvgForSvgo(svg: string): string {
  return (
    svg
      // Remove empty or broken inline styles like style=";" or style=":;"
      .replace(/style="[^a-zA-Z0-9]*"/g, "")
      // Remove empty <style> tags entirely
      .replace(/<style[^>]*>\s*<\/style>/g, "")
      // Remove broken CSS inside <style> tags (like just `;`)
      .replace(/<style[^>]*>[^a-zA-Z0-9]*<\/style>/g, "")
  );
}

function sanitizeSvgStyles(svg: string): string {
  return (
    svg
      // Remove empty or invalid style attributes like style=";"
      .replace(/style=";?"/g, "")
      // Remove empty <style> tags
      .replace(/<style[^>]*>\s*<\/style>/g, "")
  );
}

async function optimizeAllSVGs(dir: string) {
  console.log(`🔍 Optimizing SVGs in: ${dir}`);

  // Convert to forward slashes for glob compatibility
  const pattern = `${dir.replace(/\\/g, "/")}/**/*.svg`;
  const svgPaths = await fg(pattern, { dot: false });

  for (const svgPath of svgPaths) {
    try {
      const raw = readFileSync(svgPath, "utf-8");
      const cleaned = sanitizeSvgStyles(sanitizeSvgForSvgo(raw));

      const result = optimize(cleaned, {
        path: svgPath,
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                minifyStyles: false,
              },
            },
          },
        ],
      });

      if ("data" in result) {
        writeFileSync(svgPath, result.data, "utf-8");
        console.log(`✅ Optimized: ${svgPath}`);
      } else {
        console.warn(`⚠️ Could not optimize: ${svgPath}`);
      }
    } catch (err) {
      console.error(`❌ Failed to optimize ${svgPath}`);
      throw err;
    }
  }
}

async function main() {
  try {
    const args = process.argv.slice(2);
    const targetDir = args[0] ? resolve(args[0]) : resolve("public");

    await optimizeAllSVGs(targetDir);

    console.log("🎉 Static export complete and SVGs optimized.");
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

main();
