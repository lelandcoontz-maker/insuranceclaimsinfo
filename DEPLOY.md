# Deploying insuranceclaimsinfo.com to Vercel

## Step 1 — Install Node.js (if you haven't already)
1. Go to https://nodejs.org
2. Download and install the "LTS" version
3. Restart your computer after installation

## Step 2 — Create a GitHub account
1. Go to https://github.com and sign up (free)
2. Remember your username and password

## Step 3 — Create a Vercel account
1. Go to https://vercel.com
2. Click "Sign Up" → choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub

## Step 4 — Install Git (if needed)
1. Go to https://git-scm.com/download/win
2. Download and install (use all default options)

## Step 5 — Install the project and generate data
Open a terminal (Windows Terminal or Command Prompt) and run:

```
cd "C:\Users\lelan\Desktop\Claude Projects"
python generate_contents_json.py
cd insuranceclaimsinfo
npm install
npm run dev
```

Visit http://localhost:3000 to preview the site locally.
Press Ctrl+C to stop.

## Step 6 — Push to GitHub
In the terminal (from the insuranceclaimsinfo folder):

```
git init
git add .
git commit -m "Initial build"
git branch -M main
```

Then on github.com:
1. Click the "+" icon → "New repository"
2. Name it: insuranceclaimsinfo
3. Leave it public or private (either works)
4. Click "Create repository"
5. Copy the "push an existing repository" commands and run them

## Step 7 — Deploy to Vercel
1. Go to vercel.com → "Add New Project"
2. Click "Import" next to your insuranceclaimsinfo repository
3. Click "Deploy" (defaults are fine)
4. Vercel gives you a URL like https://insuranceclaimsinfo.vercel.app

## Step 8 — Connect your GoDaddy domain
1. In Vercel: go to your project → Settings → Domains
2. Type: insuranceclaimsinfo.com → Add
3. Vercel shows you DNS records to add

In GoDaddy:
1. Log in → My Products → DNS → Manage
2. Change Nameservers to:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   (OR add the A and CNAME records Vercel shows you)
3. Save — takes 15–60 minutes to go live

## Step 9 — Set up lead notification emails (optional but recommended)
1. Create a free account at https://resend.com
2. In Vercel: Settings → Environment Variables → Add:
   - RESEND_API_KEY = (your Resend API key)
   - LEAD_NOTIFY_EMAIL = your email address
3. Uncomment the Resend block in app/api/leads/route.ts
4. Redeploy (Vercel auto-deploys when you push to GitHub)

Until then: leads are logged to Vercel → your project → Logs tab (search "LEAD")

## Updating the site
Make changes to the files, then:
```
git add .
git commit -m "Description of changes"
git push
```
Vercel auto-deploys in about 60 seconds.

## Updating the contents list
1. Edit build_master_contents.py (add/remove items in SECTIONS)
2. Run: python generate_contents_json.py
3. Copy the updated contents.json to insuranceclaimsinfo/public/data/
4. Commit and push

## Future Features Roadmap
- [ ] Lead email notifications (Resend)
- [ ] Lead database (Vercel Postgres or Airtable)
- [ ] Full resource articles (MDX files or Contentful CMS)
- [ ] User accounts to save inventory progress
- [ ] Photo swipe mode (item images, swipe yes/no)
- [ ] AI interview chatbot (Claude API)
- [ ] Address lookup / floor plan detection
- [ ] Mobile app (React Native using this same codebase)
