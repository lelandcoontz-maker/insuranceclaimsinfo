// One-off polish script: adds missing opening "Not Legal Advice" CalloutBox and
// closing signature block to articles in a-c range.
// Run from project root: node scripts/polish_abc.js <listfile> <mode>
//   mode: "both" | "disc" | "sig"

const fs = require('fs');
const path = require('path');

const OPENING_BLOCK = `      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

`;

const CLOSING_BLOCK = `      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
`;

const SIG_ONLY_BLOCK = `      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
`;

const IMPORT_LINE = `import { CalloutBox } from '@/components/content/CalloutBox'`;

function ensureCalloutBoxImport(src) {
  if (src.includes("from '@/components/content/CalloutBox'")) return src;
  // Find existing import block and insert after last import
  const lines = src.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx === -1) {
    // Prepend
    return IMPORT_LINE + '\n' + src;
  }
  lines.splice(lastImportIdx + 1, 0, IMPORT_LINE);
  return lines.join('\n');
}

function addOpeningDisclaimer(src) {
  // Anchor: "export default function Content() {" then "return (" then "<>"
  // Find the line with "<>" that follows return( within the Content function.
  const idx = src.indexOf('export default function Content()');
  if (idx === -1) {
    throw new Error('No export default function Content() found');
  }
  // Find the first "<>" after that position
  const fragIdx = src.indexOf('<>', idx);
  if (fragIdx === -1) {
    throw new Error('No <> fragment opener found');
  }
  // Move to end of line containing <>
  const lineEnd = src.indexOf('\n', fragIdx);
  if (lineEnd === -1) throw new Error('No newline after <>');
  // Insert OPENING_BLOCK right after that newline
  const before = src.slice(0, lineEnd + 1);
  const after = src.slice(lineEnd + 1);
  return before + OPENING_BLOCK + after;
}

function addClosingBlock(src, sigOnly) {
  // Anchor: the LAST occurrence of "</>" before the function closing
  const lastFrag = src.lastIndexOf('</>');
  if (lastFrag === -1) {
    throw new Error('No </> fragment closer found');
  }
  // Find start of that line (preceding newline)
  const lineStart = src.lastIndexOf('\n', lastFrag) + 1;
  // Get the indentation of that line
  const indent = src.slice(lineStart, lastFrag);
  // Insert closing block before that line
  const block = sigOnly ? SIG_ONLY_BLOCK : CLOSING_BLOCK;
  const before = src.slice(0, lineStart);
  const after = src.slice(lineStart);
  return before + block + after;
}

function processFile(filePath, mode) {
  let src = fs.readFileSync(filePath, 'utf8');
  const original = src;
  let changes = [];

  if (mode === 'both' || mode === 'disc') {
    src = ensureCalloutBoxImport(src);
    src = addOpeningDisclaimer(src);
    changes.push('disclaimer');
  }
  if (mode === 'both' || mode === 'sig') {
    // Determine if there's already a plain-text bottom disclaimer paragraph
    // similar to the standard. If so, only add the sig line; else add full block.
    const tailLen = 800;
    const tail = src.slice(Math.max(0, src.length - tailLen));
    const hasBottomDisclaimerText =
      /informational purposes only/i.test(tail) ||
      /does not constitute legal advice/i.test(tail);
    src = addClosingBlock(src, hasBottomDisclaimerText);
    changes.push(hasBottomDisclaimerText ? 'sig-only' : 'sig+disclaimer');
  }

  if (src !== original) {
    fs.writeFileSync(filePath, src, 'utf8');
    return changes;
  }
  return null;
}

const [, , listFile, mode] = process.argv;
if (!listFile || !mode) {
  console.error('Usage: node polish_abc.js <listfile> <both|disc|sig>');
  process.exit(1);
}

const baseDir = path.resolve(__dirname, '..', 'lib', 'content', 'articles');
const filenames = fs
  .readFileSync(listFile, 'utf8')
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter(Boolean);

let ok = 0;
let fail = 0;
const failures = [];
for (const f of filenames) {
  const fp = path.join(baseDir, f);
  try {
    const result = processFile(fp, mode);
    if (result) {
      console.log(`OK  ${f}  [${result.join(',')}]`);
      ok++;
    } else {
      console.log(`SKIP ${f} (no change)`);
    }
  } catch (e) {
    console.log(`FAIL ${f}: ${e.message}`);
    failures.push(`${f}: ${e.message}`);
    fail++;
  }
}
console.log(`\nSummary: ${ok} ok, ${fail} failed`);
if (failures.length) {
  console.log('Failures:');
  for (const f of failures) console.log('  ' + f);
}
