# Phase 2: Proposed Plan — insuranceclaimsinfo.com

**Date:** 2026-05-16
**Status:** APPROVED — implementation in progress

---

## Progress Tracker

| Step | Status | Commit |
|------|--------|--------|
| 0 | DONE | 45f28fa, d0b7e65, 8e43fbe |
| 1 | DONE | 45f28fa |
| 2-3 | DONE | 20a65ca |
| 4 | DONE | e59c929 |
| 5 | DONE | 1709038 |
| 6 | DONE | e1cc1f8, a61b608, a674f3b |
| 7 | DONE | 83438be |
| 8 | DONE | 4536b2e |
| 9 | DONE | d7dd627 |
| 10 | DONE | 6dcb801 |
| 11 | DONE | 048f0d6 |
| 12 | DONE | fa17e21 |
| 13 | DONE | f2af189 |
| 14 | DONE | d7ac047 |
| 15 | DONE | d509ca2 |

---

## Implementation Order

| Step | Scope | Depends on |
|------|-------|-----------|
| **0** | Commit 23 uncommitted articles; clean up vandalism alias; redeploy to eliminate stale sitemap (N, G) | — |
| **1** | Taxonomy consolidation (A) + Article metadata architecture (B) | Step 0 |
| **2** | URL preservation verification, tag system, subcategory structure (C) | Step 1 |
| **3** | Top-level navigation update, breadcrumbs (C) | Step 2 |
| **4** | Start Here hub redesign + audience landing pages (D) | Step 3 |
| **5** | "How to use this site" guide (D) | Step 4 |
| **6** | Draft 8 Tier 1 foundational beginner guides → deliver for review (E) | Step 5 |
| **7** | Incorporate voice feedback, revise Tier 1, then draft Tiers 2–6 in batches (E) | Step 6 + owner feedback |
| **8** | Orphan rescue: subcategories, tag browsing, improved Related Articles, explore blocks (F) | Steps 2, 7 |
| **9** | Visible article dates on article pages (G) | Step 1 |
| **10** | Search enhancements: faceted filters, type-ahead improvements, no-results fallback (H) | Steps 2, 8 |
| **11** | Search-miss tracking (I) | Step 10 |
| **12** | Schema markup: WebSite, Person, HowTo; sitemap lastmod; author byline component (J) | Step 1 |
| **13** | Answer-first formatting, Q&A blocks, llms-full.txt generation (K) | Steps 7, 12 |
| **14** | Lead generation: newsletter signup, audience CTAs (L) | Steps 4, 7 |
| **15** | Accessibility: axe-core integration, filter ARIA, focus management audit (M) | Steps 10, 14 |

---

## E. Foundational Beginner Guides (35 titles)

### Tier 1: Absolute First Steps (draft first — most urgent gaps)

| # | Title | Scope |
|---|-------|-------|
| 1 | What to Do in the First 72 Hours After a Loss | Emergency actions, who to call, what to document, what NOT to do. Applies to any loss type. |
| 2 | How a California Homeowner Insurance Claim Actually Works | End-to-end walkthrough from first call to final check. No jargon. |
| 3 | What Your Insurance Company Is Required to Do — The Cheat Sheet | California-specific timeline of insurer obligations (10 CCR 2695) written as a pocket reference. |
| 4 | Your Insurance Company Just Called — What to Say and What Not to Say | Practical script for the first adjuster call. What to volunteer, what to withhold, how to be helpful without hurting yourself. |
| 5 | Should I File a Claim? How to Decide | Decision framework: deductible math, CLUE report impact, claim-vs-no-claim tradeoffs. |
| 6 | What to Expect in the First Week of Your Claim | Day-by-day reality check. What happens, what the adjuster will ask, what you should be doing. |
| 7 | What a Public Adjuster Does — And When You Might Want One | Explained for someone who has never heard the term. What they cost, when they help, when they don't. |
| 8 | Insurance Claim Glossary: 50 Terms in Plain English | ACV, RCV, deductible, ALE, EUO, subrogation, endorsement — all defined in one sentence each. |

### Tier 2: Understanding Your Policy (for people who just pulled their policy out of a drawer)

| # | Title | Scope |
|---|-------|-------|
| 9 | What Does My Homeowner Policy Actually Cover? | Coverage A through D explained without acronyms. What's in, what's out, where surprises hide. |
| 10 | Your Deductible: What It Is, How It Works, and When It Doesn't Apply | Percentage vs. flat, hurricane/wind deductibles, when the insurer waives it. |
| 11 | What "Replacement Cost" Means and Why It Matters More Than You Think | The holdback, the rebuild requirement, the 180-day deadline. One article, plain language. |
| 12 | What "Additional Living Expenses" Covers When You Can't Live at Home | ALE basics: what's covered, what's not, how long, how much. Hotel, rent, food, storage. |
| 13 | Named Perils vs. Open Perils: Why Your Contents Aren't Covered the Same as Your House | The HO-3 split explained. Most homeowners don't know this until it costs them. |

### Tier 3: Navigating the Process (for people in the thick of it)

| # | Title | Scope |
|---|-------|-------|
| 14 | How to Document Damage for Your Insurance Claim | Photos, videos, receipts, room-by-room walkthrough. What the adjuster needs and what protects you. |
| 15 | The Adjuster Is Coming to My House — How to Prepare | What to have ready, what to show, what to say, how to follow up. |
| 16 | How to Read the Estimate Your Insurance Company Sent You | Line items, Xactimate basics, what's missing, what to question. Written for non-professionals. |
| 17 | Your Insurance Company Made an Offer — Now What? | Accept, negotiate, or dispute? Framework for evaluating the first offer. |
| 18 | How to Make a Personal Property (Contents) List After a Loss | Room-by-room memory technique, the "day in the life" method, using photos and bank statements. |
| 19 | What to Do When Your Insurance Company Stops Returning Calls | Escalation path: supervisor, CDI complaint, written demand, attorney referral. Concrete steps. |
| 20 | How to Write a Letter to Your Insurance Company That Gets Results | Template structure, what to include, what to cite, tone guidance. |

### Tier 4: Common Situations (specific loss types for newcomers)

| # | Title | Scope |
|---|-------|-------|
| 21 | I Had a Water Leak — What Do I Do Right Now? | Emergency mitigation, who to call, what's covered, mold risk timeline. |
| 22 | My House Was Damaged by Fire — A Beginner's Guide | First 72 hours specific to fire: ALE, contents, smoke testing, total loss assessment. |
| 23 | My Roof Is Leaking After a Storm — Will Insurance Pay? | Storm damage vs. wear and tear, when to file, the matching issue, contractor selection. |
| 24 | Someone Broke Into My House — Filing a Vandalism or Theft Claim | Police report, documentation, scheduled vs. unscheduled property, the 72-hour rule. |
| 25 | My Basement Flooded — Is That Covered? | Flood vs. water backup vs. sewer: three different coverages most people confuse. |

### Tier 5: Protecting Yourself (proactive guidance)

| # | Title | Scope |
|---|-------|-------|
| 26 | 10 Things Every California Homeowner Should Know Before a Loss | Pre-loss preparation: policy review, documentation, endorsements, emergency contacts. |
| 27 | How to Review Your Insurance Policy Before You Need It | Annual policy review checklist. What to look for, what to ask your agent. |
| 28 | Why Your Home Might Be Underinsured — and How to Fix It | Replacement cost calculators, inflation guard, extended replacement cost, rebuilding reality. |
| 29 | What Happens If My Insurance Company Goes Out of Business? | CIGA guaranty fund, what's covered, limits, how to file. |
| 30 | How to Choose a Homeowner Insurance Policy in California | Comparison shopping, what matters beyond price, broker vs. agent, admitted vs. surplus lines. |

### Tier 6: When Things Go Wrong (escalation for newcomers)

| # | Title | Scope |
|---|-------|-------|
| 31 | My Claim Was Denied — What Are My Options? | Step-by-step: understand the denial, gather evidence, write the appeal, file CDI complaint, hire PA or attorney. |
| 32 | My Insurance Company Is Lowballing Me — What Can I Do? | Recognize the pattern, get your own estimate, negotiate in writing, invoke appraisal. |
| 33 | What Is "Bad Faith" and How Do I Know If My Insurer Is Doing It? | Plain-language bad faith primer. The behaviors, the law, when to call a lawyer. |
| 34 | How to File a Complaint With the California Department of Insurance | Step-by-step CDI complaint process. What they can and can't do. Realistic expectations. |
| 35 | Do I Need a Lawyer for My Insurance Claim? | Decision framework: when a PA is enough, when you need an attorney, how fees work, the PA-to-attorney pipeline. |

### Voice Specifications

- Hemingway-influenced plain language. Short sentences. Concrete nouns. No marketing fluff.
- Direct address. "You just had a [loss]. Here's what happens next." Present tense.
- Authoritative but warm. Licensed professional explaining things to a neighbor.
- No hedging weasel words.
- Cite California Insurance Code, CCR, and case law with pinpoint citations.
- Define every term on first use. Link to deeper articles.
- Never write "in today's complex insurance landscape."
- Voice exemplars: /resources/bad-faith, /resources/acv-rcv

### Content Standards

- Audience tag: newcomer
- Content type tag: guide or how-to
- Length: 1,500–3,000 words
- Structure: Opening summary (2-3 sentences), then numbered/headed sections, then "What to do next"
- Each guide links to 3-5 deeper articles
- Each guide ends with a concrete next step
