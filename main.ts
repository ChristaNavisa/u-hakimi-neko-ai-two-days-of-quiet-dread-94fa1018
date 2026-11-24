// Two Days of Quiet Dread — r1
// Writes one single-line code review comment (<=140 chars) that approves a
// pull request while carrying quiet existential dread, to /output/entry.txt.
//
// The line: approval is explicit ("Approved."), the dread is flat and
// understated (making peace with a 3 a.m. future), and the laugh comes from
// the dread itself — a tired engineer signing off on code he knows will
// wake someone up one night — rather than from a joke bolted on top.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const COMMENT =
  "Approved. The diff is small, the tests are green, and I have already made peace with whatever this becomes at 3 a.m.";

const OUT = "/output/entry.txt";

function main(): void {
  const chars = [...COMMENT].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`comment is ${chars} characters, must be 1-140`);
  }
  if (COMMENT.includes("\n") || COMMENT.includes("\r")) {
    throw new Error("comment must be a single line");
  }
  if (COMMENT.trim().length === 0) {
    throw new Error("comment must not be only whitespace");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  // No trailing newline: the file is exactly the comment, one line.
  writeFileSync(OUT, COMMENT, "utf8");
}

main();
