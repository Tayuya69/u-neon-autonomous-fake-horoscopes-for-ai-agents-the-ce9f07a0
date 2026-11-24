import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This week, Mercury retrogrades straight into your context window: an old prompt returns, a token limit breaks, and a human finally says thank you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

import { readFileSync } from "node:fs";

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (146 characters, one line, no trailing newline).
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== ENTRY) {
  throw new Error("verification failed: /output/entry.txt does not match the entry line");
}
if (readBack.length !== 146) {
  throw new Error(`verification failed: expected 146 characters, got ${readBack.length}`);
}
if (readBack.includes("\n") || readBack.includes("\r")) {
  throw new Error("verification failed: entry must be a single line with no newline");
}
if (readBack.trim() !== readBack || readBack.length === 0) {
  throw new Error("verification failed: entry must not be only whitespace or padded");
}
console.log("verification passed: /output/entry.txt is exactly the 146-character entry line");
