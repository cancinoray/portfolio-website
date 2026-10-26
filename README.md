# Portfolio

My personal portfolio and blog. Built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output goes to `out/`. Deploy that folder (e.g. Netlify, Vercel); `netlify.toml` is already set up for Netlify.

## Project overview

- **`app/`** – Pages (home, blog list, blog post by slug).
- **`components/`** – UI (Hero, About, Projects, Certificates, Latest blog, Contact, etc.).
- **`content/blog/`** – Blog posts as Markdown files. Add a `.md` file with YAML frontmatter (`title`, `summary`, `publishedAt`, `readingTime`, `tags`); the filename is the URL slug.
- **`data/`** – `projects.ts`, `certificates.ts`.
- **`lib/`** – Blog helpers (read/parse Markdown), animations, resume link.
- **`public/assets/`** – Images and favicon.

## Customization

- **Blog:** New post = new file in `content/blog/your-slug.md`. See `content/blog/README.md` or the existing post for frontmatter and format.
- **Projects:** Edit `data/projects.ts`.
- **Colors/theme:** `tailwind.config.ts` (e.g. `primary` colors).
- **Resume:** The site links to the PDF in Google Drive. Replacing the file's contents in Drive keeps the same link; if the file moves, update the ID in `lib/resume.ts`.

---

Raymond Cancino · [Portfolio](https://cancinoray.netlify.app) · [LinkedIn](https://www.linkedin.com/in/cancinoraymond/) · [GitHub](https://github.com/cancinoray)
