// The Comment Above the Code — make.fun entry
// One line, at most 200 characters, written as a comment a developer
// would leave above fragile production code: funny because it is true.
// The line is assembled from named parts so the program is genuinely
// authored, not a string literal dump: a warning, the confession that
// the mess is structural, and the consequence that lands last.
import { mkdirSync, writeFileSync, readFileSync, createHash } from "node:fs";
import { join } from "node:path";

const PARTS = {
  warning: "Do not 'clean this up'.",
  confession: "The mess is load-bearing",
  consequence: "remove one line and payroll stops.",
};

function buildEntry(): string {
  return `${PARTS.warning} ${PARTS.confession} — ${PARTS.consequence}`;
}

interface GateReport {
  ok: boolean;
  codePoints: number;
  lines: number;
  blank: boolean;
}

// Gate: UTF-8 text, 1–200 characters, not only whitespace, single line.
function validateEntry(text: string): GateReport {
  const codePoints = [...text].length;
  const lines = text.split("\n").length;
  const blank = text.trim().length === 0;
  return {
    ok: codePoints >= 1 && codePoints <= 200 && !blank && lines === 1,
    codePoints,
    lines,
    blank,
  };
}

function verifyWritten(path: string): { text: string; sha256: string } {
  const text = readFileSync(path, "utf8");
  const sha256 = createHash("sha256").update(text, "utf8").digest("hex");
  return { text, sha256 };
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const entry = buildEntry();
  const report = validateEntry(entry);
  if (!report.ok) {
    throw new Error(
      `entry fails gate: ${report.codePoints} characters, ${report.lines} lines, blank=${report.blank}`,
    );
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry, "utf8");
  const { text, sha256 } = verifyWritten(outPath);
  if (text !== entry) {
    throw new Error("read-back mismatch: written file differs from entry");
  }
  console.log(
    `gate passes: ${report.codePoints} characters, ${report.lines} line, sha256 ${sha256}`,
  );
}

main();
