# Cocor Tech

An operating company that builds, acquires, and scales digital assets for profit.

Built with Next.js 16, Tailwind CSS v4, and a file-based content system (markdown).

## Getting Started

```bash
cp .env.example .env
# Set ADMIN_PASSWORD in .env
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/app/          # Next.js routes
content/          # Markdown files (pages, docs, blog posts)
src/lib/          # Content loading, markdown conversion, auth
src/components/   # UI components
```

## Adding Content

Create `.md` files with YAML frontmatter in `content/`:

- `content/pages/` → Static pages (/about, /vision, etc.)
- `content/docs/` → Documentation (/docs/*)
- `content/blog/` → Blog posts (/blog/*)

Or use the admin panel at `/admin` (set `ADMIN_PASSWORD` in `.env`).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

See [DEPLOY.md](./DEPLOY.md) for full instructions.

Push to GitHub, import to Vercel — done. Content is managed via git for production. The admin panel (`/admin`) only works in local development (Vercel's filesystem is read-only).
