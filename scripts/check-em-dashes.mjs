// Fails if any em dash (U+2014) is found in the repo's text files.
//
// Usage:
//   node scripts/check-em-dashes.mjs
//   npm run check:emdash
//
// En dashes (U+2013, "–") are intentionally allowed: the repo uses them for
// numeric ranges (e.g. "2011–2024", "Oct 2025–Present").

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EM_DASH = "\u2014";

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  "out",
  ".git",
  ".parcel-cache",
]);

const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".md",
  ".mdx",
  ".json",
  ".css",
  ".scss",
  ".yml",
  ".yaml",
  ".html",
  ".txt",
]);

// Generated files that never need reviewing.
const SKIP_FILES = new Set(["package-lock.json", "tsconfig.tsbuildinfo"]);

/** @returns {string[]} offending "path:line" entries */
function scan(dir) {
  const hits = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      hits.push(...scan(full));
      continue;
    }
    if (SKIP_FILES.has(entry.name)) continue;
    if (!TEXT_EXTENSIONS.has(path.extname(entry.name))) continue;

    const contents = fs.readFileSync(full, "utf-8");
    if (!contents.includes(EM_DASH)) continue;

    contents.split("\n").forEach((line, index) => {
      if (line.includes(EM_DASH)) {
        hits.push(`${path.relative(ROOT, full)}:${index + 1}`);
      }
    });
  }
  return hits;
}

const hits = scan(ROOT);

if (hits.length > 0) {
  console.error(
    `Found ${hits.length} em dash(es); replace them with a comma, colon, or parentheses:\n`
  );
  for (const hit of hits) console.error(`  ${hit}`);
  process.exitCode = 1;
} else {
  console.log("No em dashes found.");
}
