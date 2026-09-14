# Portfolio Revamp: Claude Code Instructions

Apply a full brandboard revamp to this Next.js portfolio. Read all existing files first before making any changes.

---

## Brand System

### Colors

```
--ink:     #0E0F0C   (body text)
--paper:   #F0EDE4   (page background)
--chalk:   #F5F4EE   (card/section backgrounds)
--surface: #FFFFFF   (elevated surfaces)
--muted:   #8A8880   (secondary text)
--rule:    #DEDAD2   (borders, dividers)
--slate:   #1B2A3B   (Engineering Slate: dark sections, authority)
--signal:  #0062FF   (Signal Blue: primary accent, CTAs, links)
--amber:   #E8871A   (Precision Amber: warm callouts)
--mint:    #00C896   (Data Mint: success, metrics, tags)
```

### Typography

- **Display / Headlines:** `Cabinet Grotesk` (weights 700, 800, 900), tight letter-spacing (-0.03em), used for all headings and names
- **Mono / Labels / Code:** `Martian Mono` (weights 400, 500), used for nav links, tags, badges, section numbers, metadata
- **Serif / Body / Quotes:** `Lora` (italic, weights 400, 600), used for bio copy, taglines, humanizing text

### Personality

Precise · Builder · Educator · Grounded. Techy data-dashboard aesthetic with a warm Philippine-rooted identity. Light mode with a faint CSS grid background.

---

## Tasks

### 1. Create branch

```
git checkout -b feat/brandboard-revamp
```

### 2. Update `tailwind.config.ts`

- Replace the `colors` block with the full brand palette above (ink, paper, chalk, surface, muted, rule, slate, signal, amber, mint)
- Keep legacy aliases (`primary`, `secondary`, `dark`, `light`) pointing to the new colors so nothing breaks
- Replace `fontFamily.sans` with `fontFamily.display` pointing to `var(--font-cabinet)`
- Add `fontFamily.mono` → `var(--font-martian)` and `fontFamily.serif` → `var(--font-lora)`
- Add `tracking-tightest: "-0.04em"` and `tracking-tighter: "-0.03em"` to `letterSpacing`
- Add keyframes: `fadeUp` (opacity 0→1 + translateY 20px→0), `pulseDot` (opacity pulse)

### 3. Update `app/layout.tsx`

- Import `Cabinet_Grotesk`, `Martian_Mono`, and `Lora` from `next/font/google`
  - Cabinet Grotesk: weights 400, 500, 700, 800, 900 → `variable: "--font-cabinet"`
  - Martian Mono: weights 300, 400, 500, 700 → `variable: "--font-martian"`
  - Lora: weights 400, 600, styles normal + italic → `variable: "--font-lora"`
- Apply all three font variables to the `<body>` className
- Update metadata: title `"Raymond Cancino | Data Engineer & Developer"`, description `"Building systems that teach, and teaching people to build."`

### 4. Update `styles/globals.css`

- Add CSS custom properties (all brand tokens above) to `:root`
- Add a subtle grid background on `body::before`: `background-image` with two linear-gradients at `rgba(0,98,255,0.04)` on a 48px grid, `position: fixed`, `pointer-events: none`, `z-index: 0`
- Add `.reveal` class: `opacity: 0`, `transform: translateY(24px)`, `transition: opacity 0.6s ease, transform 0.6s ease`
- Add `.reveal.visible`: `opacity: 1`, `transform: translateY(0)`
- Add `.chip`, `.btn`, `.btn-primary`, `.btn-ghost` utility classes using the brand tokens

### 5. Add `lib/useReveal.ts`

Create a React hook:

```ts
"use client";
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
```

### 6. Revamp `components/Navbar.tsx`

- Logo: `ray.cancino` in Martian Mono, the `.` in Signal Blue
- Nav links: Martian Mono, 11px, uppercase, tracking-widest, text-muted → hover text-signal
- "Connect" link styled as a filled slate button → hover bg-signal
- Sticky with `backdrop-blur` and `bg-paper/90` on scroll
- Hide nav links on mobile (hamburger optional)

### 7. Revamp `components/Hero.tsx`

Structure (top to bottom):

1. **Eyebrow row**: animated mint pulsing dot + `"Open to opportunities · Philippines-based"` in Martian Mono
2. **Name**: `Raymond` + `Cancino.` (second word in Signal Blue), Cabinet Grotesk 900, `clamp(56px, 9vw, 108px)`, tracking -0.04em
3. **Tagline**: `"Building systems that teach, and teaching people to build."` in Lora italic, text-muted
4. **Role chips**: `["Data Engineer" (primary/slate-filled), "Full-Stack Dev", "EdTech Co-Founder", "ME Educator", "Python · SQL · Next.js"]` using `.chip` classes
5. **CTA buttons**: `View Projects` (btn-primary) + `View Resume` (btn-ghost, links to existing resume URL)
6. **Metrics bar**: 4-column grid in a bordered `bg-surface` card:
   - `4+` Projects Shipped (Signal Blue top accent)
   - `3+` Certifications (Mint top accent)
   - `2+` Startups Built (Amber top accent)
   - `ME+` Engineering Roots (Slate top accent)

- Stagger all elements with `animate-fade-up` and increasing `animationDelay`

### 8. Revamp `components/About.tsx`

- **Left column:** Profile photo (`/assets/profile.jpg`) with `"📍 Philippines"` label overlay on bottom-left in a slate badge
- **Right column:**
  - Lora italic bio quote: `"From thermal cycles to data pipelines, I bridge mechanical engineering thinking with modern data and software practice."`
  - Two short paragraphs of body copy (existing bio text, cleaned up)
  - 2×2 meta grid (bordered, bg-chalk cells): Location, Role, Startup, Status (Status shows `● Available` in mint)
  - `Download Resume` btn-primary

### 9. Revamp `components/Skills.tsx` (or equivalent)

- **Dark slate background section**
- 3-column grid of skill cards (`bg-white/5`, `border-white/10`)
- Each card: icon + Martian Mono category label + flex-wrap of tags
- "Hot" tags (primary skills): `bg-mint/15 border-mint/35 text-mint`
- Regular tags: `bg-white/7 border-white/12 text-white/75`
- Skills data:
  - 🔧 Data Engineering: Python✦, SQL✦, Apache Airflow, dbt, ClickHouse, PostgreSQL, PySpark, Pandas
  - ☁️ Cloud & Infra: GCP✦, AWS✦, BigQuery, Snowflake, Docker, Terraform, Vercel, Neon
  - 🌐 Full-Stack Dev: Next.js✦, TypeScript✦, React, Tailwind CSS, Node.js, REST APIs
  - 🤖 ML & Analytics: Metabase✦, scikit-learn, TensorFlow, Mapbox
  - ⚙️ Tools & Workflow: Git/GitHub, VS Code, Postman, Figma, Notion
  - 📐 Engineering: Mechanical Eng.✦, Thermodynamics, Applied Math, PRC Board Prep, Curriculum Design
  - (✦ = hot tag)

### 10. Revamp `components/Projects.tsx` (or equivalent)

- Keep existing projects data from `data/projects.ts`; do not delete any projects
- Layout: vertical list of project rows, each row: `bg-surface border-rule` card
  - `grid-template-columns: 52px 1fr auto`
  - Index number (Martian Mono, text-muted)
  - Project name (Cabinet Grotesk 800), description (text-muted, 13px), stack tags
  - Source/Visit link (text-signal, with `→` arrow)
- On hover: `border-signal` + `translateX(4px)`
- Accent tags (primary stack items): `bg-signal/7 text-signal border-signal/20`
- Regular tags: `bg-chalk text-muted border-rule`

### 11. Add `components/Experience.tsx`

Create this new component (it doesn't currently exist):

- Section header: `04 · Experience`
- Single bordered container (`bg-surface border-rule rounded-sm overflow-hidden`)
- Three rows, each `grid-template-columns: 200px 1fr`, divided by `border-b border-rule`
- Left meta cell (`bg-chalk border-r border-rule`): period in signal blue, company name bold, type in muted mono
- Right content cell: role title (Cabinet Grotesk 800), description, tags

Experience data:

```
1. 2024–Present | Carnot Coaching Center | EdTech · PH
   Role: Co-Founder & Tech Lead
   Desc: Co-founded an EdTech startup targeting Philippine engineering licensure examinees. Leading frontend development, infrastructure setup, data strategy, and go-to-market planning for the August 2026 MELE cohort launch.
   Tags: Next.js, PostgreSQL, Vercel, Product Strategy, Team Leadership

2. 2023–Present | University of Pangasinan | PHINMA Education · PH
   Role: ME Faculty Member
   Desc: Teaching Mechanical Engineering subjects at the College of Engineering and Architecture. Developing curricula combining engineering principles with modern computational tools.
   Tags: Thermodynamics, Applied Math, Curriculum Design, PRC Board Prep

3. 2023–Present | AR-ES Gift Shop | Sole Proprietorship · PH
   Role: Founder & Operator
   Desc: Running an online crafting and gifting business. Managing e-commerce operations, BIR compliance, and digital marketing alongside technical work.
   Tags: E-Commerce, Operations, BIR Compliance
```

### 12. Revamp `components/Contact.tsx`

- **Dark slate background**
- Two-column layout:
  - **Left:** Large headline `"Let's / Build / Something."` with "Build" in Signal Blue; Lora italic subtitle; three contact link cards (email, LinkedIn, GitHub) with icon + label + value, hover → signal blue border
  - **Right:** Centered card with:
    - Mint "● Available for hire" badge
    - `"Ready to collaborate?"` headline
    - Short mono body copy
    - `"Send a Message →"` button (bg-signal)
- Contact info:
  - Email: cancinoray@gmail.com
  - LinkedIn: https://www.linkedin.com/in/cancinoraymond/
  - GitHub: https://github.com/cancinoray

### 13. Revamp `components/Footer.tsx`

- `bg-ink` background
- Single row: `"© 2026 Raymond Cancino · Built with intention."` on left, `"Cabinet Grotesk · Martian Mono · Lora"` on right
- Both in Martian Mono, `text-white/30`, 11px

### 14. Update `app/page.tsx`

- Import and render all revamped components in order:
  `Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer`
- Wrap main content in `<main>`

### 15. Commit and push

```
git add -A
git commit -m "feat: apply brandboard revamp

- New color system: Engineering Slate, Signal Blue, Data Mint, Precision Amber, Chalk
- New typography: Cabinet Grotesk + Martian Mono + Lora
- Revamped all components with data-dashboard aesthetic
- Added Experience section and useReveal scroll animation hook
- Updated tailwind.config.ts and globals.css with full brand token system"

git push origin feat/brandboard-revamp
```

---

## Notes for Claude Code

- Read every existing file before modifying it; preserve any logic, data, or blog functionality not mentioned here
- Keep `data/projects.ts` and `data/certificates.ts` untouched; only update the UI components that render them
- Keep all blog functionality in `app/blog/` and `content/blog/` completely untouched
- If a component file doesn't exist yet (e.g. `Experience.tsx`), create it
- If Cabinet Grotesk is not available in `next/font/google`, use `Syne` as the fallback display font
- Run `npm run build` at the end to verify no TypeScript or build errors
