#!/usr/bin/env bun

import { readFileSync, writeFileSync, renameSync } from "fs";
import { resolve, dirname, basename, join } from "path";
import { optimize } from "svgo";
import { DOMParser, XMLSerializer } from "xmldom";

// --- Argument Parsing ---
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("❌ Usage: ./script.ts <input.svg> [-o output.svg]");
  process.exit(1);
}

const inputPath = resolve(args[0]);
let outputPath: string | null = null;

const oIndex = args.indexOf("-o");
if (oIndex !== -1 && args[oIndex + 1]) {
  outputPath = resolve(args[oIndex + 1]);
}

// --- Helpers ---
const isBlack = (fill: string) => {
  const normalized = fill.toLowerCase().trim();
  return normalized === "#000" || normalized === "#000000";
};

const isColorToReplace = (fill: string) => {
  const normalized = fill.toLowerCase().trim();
  return (
    (/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/.test(normalized) ||
      /^rgba?\(/.test(normalized) ||
      /^[a-z]+$/.test(normalized)) &&
    normalized !== "currentcolor" &&
    !isBlack(normalized)
  );
};

function sanitizeStyleAttribute(el: Element) {
  const style = el.getAttribute("style");
  if (!style) return;

  const rules = style
    .split(";")
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  const updatedRules: string[] = [];

  for (const rule of rules) {
    const [prop, value] = rule.split(":").map((p) => p.trim().toLowerCase());
    if (prop === "fill") {
      if (isBlack(value)) continue;
      if (isColorToReplace(value)) {
        updatedRules.push("fill:currentColor");
        continue;
      }
    }
    updatedRules.push(`${prop}:${value}`);
  }

  if (updatedRules.length > 0) {
    el.setAttribute("style", updatedRules.join(";"));
  } else {
    el.removeAttribute("style");
  }
}

function sanitizeFills(node: Element): void {
  if (node.hasAttribute("fill")) {
    const fill = node.getAttribute("fill");
    if (fill) {
      if (isBlack(fill)) {
        node.removeAttribute("fill");
      } else if (isColorToReplace(fill)) {
        node.setAttribute("fill", "currentColor");
      }
    }
  }

  sanitizeStyleAttribute(node);

  const children = node.childNodes;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.nodeType === 1) {
      sanitizeFills(child as Element);
    }
  }
}

// --- Process File ---
try {
  const raw = readFileSync(inputPath, "utf-8");

  const optimized = optimize(raw, {
    path: inputPath,
    multipass: true,
    plugins: ["preset-default"],
  });

  if (!("data" in optimized)) {
    throw new Error("SVGO optimization failed");
  }

  const doc = new DOMParser().parseFromString(optimized.data, "image/svg+xml");
  sanitizeFills(doc.documentElement);
  const finalSvg = new XMLSerializer().serializeToString(doc);

  if (outputPath) {
    // Output to provided path
    writeFileSync(outputPath, finalSvg, "utf-8");
    console.log(`✅ Output written to: ${outputPath}`);
  } else {
    // Backup and overwrite original
    const dir = dirname(inputPath);
    const base = basename(inputPath, ".svg");
    const origPath = join(dir, `${base}.orig.svg`);
    renameSync(inputPath, origPath);
    writeFileSync(inputPath, finalSvg, "utf-8");
    console.log(`✅ Processed and overwritten: ${inputPath}`);
    console.log(`📦 Original backed up as: ${origPath}`);
  }
} catch (err) {
  console.error("❌ Error:", err);
  process.exit(1);
}
