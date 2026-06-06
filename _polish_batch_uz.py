"""One-shot polish for u-z + digit articles: add opening CalloutBox + closing sig block."""
import os
import re
import sys

ARTICLES_DIR = r"C:\Users\lelan\Desktop\2026 misc to sort\Claude Projects\insuranceclaimsinfo\lib\content\articles"

OPENING_DISCLAIMER = '''      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

'''

CLOSING_BLOCK = '''      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
'''

SIG_ONLY_BLOCK = '''      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
'''

CALLOUT_IMPORT = "import { CalloutBox } from '@/components/content/CalloutBox'"

SIG_MARKER = "CA License #2B53445"
CALLOUT_MARKER = 'CalloutBox variant="legal"'
EXISTING_DISCLAIMER_MARKER = "informational purposes only and does not constitute legal advice"

stats = {
    "total": 0,
    "modified": 0,
    "added_disclaimer": 0,
    "added_sig": 0,
    "added_both": 0,
    "skipped": [],
    "anomalies": [],
}


def is_in_range(name: str) -> bool:
    if not name.endswith(".tsx"):
        return False
    first = name[0].lower()
    return first in "uvwxyz0123456789"


def add_opening_disclaimer(text: str, slug: str) -> tuple[str, bool]:
    """Insert disclaimer right after the opening `<>` of the returned JSX fragment."""
    pattern = re.compile(r"(return \(\s*\n\s*<>\s*\n)")
    m = pattern.search(text)
    if not m:
        stats["anomalies"].append(f"{slug}: could not find `return ( <> ` pattern; opening NOT added")
        return text, False
    insert_at = m.end()
    new_text = text[:insert_at] + OPENING_DISCLAIMER + text[insert_at:]
    return new_text, True


def ensure_callout_import(text: str) -> str:
    if CALLOUT_IMPORT in text:
        return text
    lines = text.split("\n")
    last_import_idx = -1
    for i, line in enumerate(lines):
        if line.startswith("import "):
            last_import_idx = i
    if last_import_idx == -1:
        return CALLOUT_IMPORT + "\n" + text
    lines.insert(last_import_idx + 1, CALLOUT_IMPORT)
    return "\n".join(lines)


def add_closing_sig(text: str, slug: str) -> tuple[str, bool]:
    """Insert closing block immediately before the final `</>` tag.
    If an existing plain-text disclaimer is present, only add the signature line."""
    idx = text.rfind("</>")
    if idx == -1:
        stats["anomalies"].append(f"{slug}: no closing </> tag found; sig NOT added")
        return text, False
    line_start = text.rfind("\n", 0, idx) + 1

    # Check if existing disclaimer is present near the bottom (within 1500 chars)
    tail = text[max(0, idx - 1500):idx]
    if EXISTING_DISCLAIMER_MARKER in tail:
        # Only add signature line
        block = SIG_ONLY_BLOCK
    else:
        block = CLOSING_BLOCK

    new_text = text[:line_start] + block + text[line_start:]
    return new_text, True


def process_file(path: str, name: str):
    stats["total"] += 1
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    original = text

    has_callout = CALLOUT_MARKER in text
    has_sig = SIG_MARKER in text

    if has_callout and has_sig:
        stats["skipped"].append(name.replace(".tsx", ""))
        return

    added_disclaimer = False
    added_sig = False

    if not has_callout:
        text = ensure_callout_import(text)
        text, added_disclaimer = add_opening_disclaimer(text, name)

    if not has_sig:
        text, added_sig = add_closing_sig(text, name)

    if text != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
        stats["modified"] += 1
        if added_disclaimer and added_sig:
            stats["added_both"] += 1
        if added_disclaimer:
            stats["added_disclaimer"] += 1
        if added_sig:
            stats["added_sig"] += 1


def main():
    files = sorted(os.listdir(ARTICLES_DIR))
    for name in files:
        if not is_in_range(name):
            continue
        path = os.path.join(ARTICLES_DIR, name)
        if not os.path.isfile(path):
            continue
        process_file(path, name)

    print("## Polish batch u-z: completed")
    print(f"- Total articles in range: {stats['total']}")
    print(f"- Articles modified: {stats['modified']}")
    print(f"- Disclaimers added: {stats['added_disclaimer']}")
    print(f"- Signatures added: {stats['added_sig']}")
    print(f"- Both added: {stats['added_both']}")
    print(f"- Skipped (already had both): {len(stats['skipped'])}")
    for s in stats["skipped"]:
        print(f"    - {s}")
    print(f"- Anomalies: {len(stats['anomalies'])}")
    for a in stats["anomalies"]:
        print(f"    - {a}")


if __name__ == "__main__":
    main()
