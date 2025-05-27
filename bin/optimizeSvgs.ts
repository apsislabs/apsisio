#!/usr/bin/env bun

import fg from "fast-glob";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { optimize } from "svgo";

async function optimizeAllSVGs(dir: string) {
  console.log(`🔍 Optimizing SVGs in: ${dir}`);

  // Convert to forward slashes for glob compatibility
  const pattern = `${dir.replace(/\\/g, "/")}/**/*.svg`;
  const svgPaths = await fg(pattern, { dot: false });

  for (const svgPath of svgPaths) {
    try {
      const raw = readFileSync(svgPath, "utf-8");
      const result = optimize(raw, {
        path: svgPath,
        multipass: true,
        plugins: ["preset-default"],
      });

      if ("data" in result) {
        writeFileSync(svgPath, result.data, "utf-8");
        console.log(`✅ Optimized: ${svgPath}`);
      } else {
        console.warn(`⚠️ Could not optimize: ${svgPath}`);
      }
    } catch (e) {
      console.error(`❌ Failed to optimize ${svgPath}`, e);
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
