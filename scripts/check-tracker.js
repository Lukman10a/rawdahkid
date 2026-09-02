#!/usr/bin/env node
/* eslint-disable */
// Guardrail: if lib/ changed, docs/ENROL_PAYMENT_FINALIZATION.md must be updated
const { execSync } = require("child_process");

function getDiff(base = "origin/main") {
  try {
    const out = execSync(`git diff --name-only ${base}...HEAD`, { encoding: "utf-8" });
    return out.split("\n").filter(Boolean);
  } catch {
    // fallback to staged
    const out = execSync("git diff --cached --name-only", { encoding: "utf-8" });
    return out.split("\n").filter(Boolean);
  }
}

const changed = getDiff();
const libChanged = changed.some((f) => f.startsWith("lib/"));
const trackerChanged = changed.includes("docs/ENROL_PAYMENT_FINALIZATION.md");

if (libChanged && !trackerChanged) {
  console.error("::error::lib/ changed but docs/ENROL_PAYMENT_FINALIZATION.md not updated. Update Log + checkbox.");
  process.exit(1);
}

const log = execSync("git log --oneline origin/main..HEAD 2>nul || git log --oneline -1", { encoding: "utf-8" });
if (!/Closes #[0-9]+/.test(log)) {
  console.warn("::warning::No 'Closes #X' found. Use 'Closes #X' (no parentheses) to auto-close issue.");
}

console.log("Tracker check passed");
