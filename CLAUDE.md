# insuranceclaimsinfo.com

Consumer/attorney educational library on property insurance claims — 500+ articles at `/resources/[slug]`. Owner: Leland Coontz, CA Public Adjuster #2B53445.

## Site identity — Leland runs THREE websites; this repo is insuranceclaimsinfo.com only

- **lossappraiser.com** (repo at `Desktop\Claude Projects\lossappraiser`) — Leland's personal services/resume site as appraiser/umpire; first-person marketing voice. (**-ER = the person**)
- **lossappraisal.com** (repo at `Desktop\Claude Projects\lossappraisal`) — educational library about insurance appraisal, especially California. (**-AL = the subject**)
- Never copy articles, components, config, or house rules between sites without Leland's explicit direction. Content transfers are move-with-301, never copy (cross-domain duplicate content).
- This site's deep appraisal-practitioner articles may migrate to lossappraisal.com over time — article-by-article, with 301s, on Leland's direction only. Consumer claims content stays here. Cross-link between sites instead of duplicating.
- One site per session: if asked to work on another site mid-session, treat it as a scope change and confirm.

## Non-negotiables for this site

- **Before drafting any new article:** grep `public/data/article-registry.json` for slug collisions AND topic overlap (2-3 keyword variants). 17-20% of the site once cannibalized itself; never again.
- **Never bare-delete an article slug** — 301 redirect in `next.config.js`.
- **After structural changes:** run `npm run audit` (a11y + seo + internal-links).
- **Voice:** "you might consider," never "you must/you should"; UPL-safe; no carrier ammunition; functional coverage names (dwelling coverage, not "Coverage A"); no "supplemental" terminology.
- **Citations:** verify against primary sources (Cornell LII, leginfo, insurance.ca.gov) — never from memory or Perplexity alone.
- **Changelog:** append every change session to `Desktop\insuranceclaimsinfo.com - Website Development\insuranceclaimsinfo-changelog.md`.
- **HowTo schema is deliberately closed as obsolete** — never implement it even if an old plan doc lists it.

## Operational notes

- Dev server: launch via `C:\Users\lelan\start-next.ps1` (path has spaces); logs to `dev-combined.log`.
- Deploys: push to `main` → Vercel auto-deploys. Never push without Leland's go-ahead.
- The `/site-seo` skill carries the full SEO playbook for THIS site only.
- A similarly named folder `Desktop\Claude Projects\insuranceclaimsinfo` is NOT this repo — it holds unrelated documents.
