# Portfolio Website

A modern, responsive portfolio website showcasing my projects and professional experience. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode support)

## ✨ Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Fast performance with Next.js static export
- 🎭 Smooth animations and transitions with Framer Motion
- 📱 Fully responsive and mobile-friendly
- ♿ Accessible with proper ARIA labels and semantic HTML
- 🔍 SEO optimized with proper meta tags
- 🎯 Type-safe with TypeScript

## 📁 Project Structure

```
portfolio-website/
├── app/                 # Next.js App Router
│   ├── blog/            # Blog list and post pages
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── About.tsx        # About section
│   ├── LatestBlog.tsx   # Latest posts on home
│   ├── ...              # (Contact, Footer, Hero, Navigation, etc.)
├── data/               # Data files
│   ├── blogPosts.ts     # Blog posts and helpers
│   └── projects.ts      # Projects data
├── lib/                # Utilities
│   └── animations.ts    # Framer Motion configurations
├── public/             # Static assets
│   └── assets/        # Images, resume, etc.
├── styles/             # Global styles
│   └── globals.css    # Tailwind CSS imports
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static files in `out/` directory)
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint

## 🚢 Deployment

This project is configured for static export and can be deployed to:

- **Netlify** (configured with `netlify.toml`)
- **Vercel** (automatic Next.js support)
- **GitHub Pages**
- Any static hosting service

### Netlify Deployment

The project includes a `netlify.toml` configuration file. Simply connect your repository to Netlify, and it will automatically:
- Build command: `npm run build`
- Publish directory: `out`

### Build Output

The production build generates static files in the `out/` directory, which can be served by any static hosting service.

## 🎨 Customization

### Adding blog posts

Blog posts are **Markdown files** in `content/blog/`. To add a new post:

1. **Create a new file** `content/blog/your-post-slug.md`. The filename (without `.md`) is the URL slug (e.g. `/blog/your-post-slug`).

2. **Add frontmatter** at the top between `---` lines: `title`, `summary`, `publishedAt` (YYYY-MM-DD), `readingTime`, `tags`. Optional: `coverImage: "/assets/blog/cover.jpg"`.

3. **Write the body in Markdown** below the frontmatter: paragraphs, **bold**, lists, [links](url), headings with `##`, images with `![alt](/assets/blog/photo.jpg)`.

4. **Images** – put files in `public/assets/blog/` and reference as `/assets/blog/your-image.jpg`.

The **home page** shows the 3 most recent posts in the “Latest from the Blog” section. New posts appear there automatically by date.

### Adding Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  title: "Project Title",
  description: "Project description",
  stack: ["Tech1", "Tech2"],
  features: ["Feature 1", "Feature 2"],
  image: "/assets/project-image.png",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
}
```

### Styling

- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles use Tailwind utility classes

### Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#000428",
    light: "#004e92",
  },
  // ...
}
```

## 📝 License

ISC

## 👤 Author

**Raymond Cancino**

- Portfolio: [https://cancinoray.netlify.app](https://cancinoray.netlify.app)
- LinkedIn: [https://www.linkedin.com/in/cancinoraymond/](https://www.linkedin.com/in/cancinoraymond/)
- GitHub: [https://github.com/cancinoray](https://github.com/cancinoray)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
