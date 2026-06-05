# Deploy to Vercel

## Prerequisites

- GitHub, GitLab, or Bitbucket account
- Vercel account (free tier)
- A domain (optional, Vercel provides a `.vercel.app` domain for free)

## Step 1: Push to Git

```bash
cd /root/cocor.tech
git init
git add .
git commit -m "Initial commit"
```

Create a repo on GitHub/GitLab and push:

```bash
git remote add origin https://github.com/your-username/cocor.tech.git
git branch -M main
git push -u origin main
```

## Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel auto-detects Next.js — no build commands to change
4. Click **Deploy**

That's it. The site will be live in ~2 minutes.

## Step 3: Configure Domain (Optional)

1. In the Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add `cocor.tech`
3. Follow Vercel's DNS instructions for your domain provider

## Step 4: Environment Variables

In Vercel project **Settings** → **Environment Variables**, add:

| Name | Value | Purpose |
|---|---|---|---|
| `ADMIN_PASSWORD` | (your chosen password) | Admin login at /admin |
| `FORMSPREE_URL` | `https://formspree.io/f/your-id` | Contact form submissions |
| `GITHUB_TOKEN` | (GitHub PAT with repo scope) | Enables admin content writes via GitHub API |
| `GITHUB_REPO_OWNER` | your GitHub username | Repo owner for GitHub API writes |
| `GITHUB_REPO_NAME` | `cocor.tech` | Repo name for GitHub API writes |
| `GITHUB_BRANCH` | `main` | Branch to commit to |

The first 3 are required for the admin and contact form to work. The GitHub vars are needed for the admin to write content on Vercel — without them, the admin works in read-only mode.

## How Content Works on Vercel

| Operation | Without GitHub vars | With GitHub vars |
|---|---|---|
| **Reading content** | ✅ Filesystem (works) | ✅ Filesystem (works) |
| **Writing content** | ❌ Filesystem is read-only | ✅ GitHub API commits to repo |
| **Creating content** | ❌ Blocked | ✅ Auto-commits to git → triggers redeploy |
| **Deleting content** | ❌ Blocked | ✅ Auto-commits to git → triggers redeploy |

### How GitHub API mode works

When `GITHUB_TOKEN`, `GITHUB_REPO_OWNER`, and `GITHUB_REPO_NAME` are set in environment variables:

1. Admin creates/edits/deletes a `.md` file
2. The API commits the change directly to your GitHub repo via the GitHub Contents API
3. Vercel detects the push and automatically redeploys
4. Within ~2 minutes, the content is live

Set up a GitHub token at https://github.com/settings/tokens with `repo` scope (for private repos) or `public_repo` scope (for public repos).

## Build Settings

Auto-detected by Vercel:

- **Framework**: Next.js
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `.next` (auto)
- **Node.js Version**: 18+ (auto)

## Notes

- Admin auth is cookie-based (stateless). No file storage or database needed.
- All routes are statically generated where possible. Dynamic routes (`/docs/[[...slug]]`, `/blog/category/[category]`) are server-rendered.
- The admin panel shows its current mode (local filesystem vs GitHub API) in the header.
