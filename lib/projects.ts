import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export interface ProjectCaseStudyMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  ogImage?: string;
  role?: string;
  timeline?: string;
  highlights?: string[];
}

export interface ProjectCaseStudy extends ProjectCaseStudyMeta {
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function parseFrontmatter(slug: string, raw: string): ProjectCaseStudyMeta {
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    summary: data.summary ?? "",
    publishedAt: data.publishedAt ?? "",
    readingTime: data.readingTime ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage,
    githubUrl: data.githubUrl,
    liveUrl: data.liveUrl,
    ogImage: data.ogImage,
    role: data.role,
    timeline: data.timeline,
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
  };
}

/** Returns all project case study metadata, sorted by date (newest first). */
export function getSortedProjectCaseStudies(): ProjectCaseStudyMeta[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md");
  const studies: ProjectCaseStudyMeta[] = files.map((filename) => {
    const slug = getSlugFromFilename(filename);
    const fullPath = path.join(PROJECTS_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    return parseFrontmatter(slug, raw);
  });
  return studies.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/** Returns a single project case study by slug, with markdown content, or undefined. */
export function getProjectCaseStudyBySlug(
  slug: string
): ProjectCaseStudy | undefined {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...parseFrontmatter(slug, raw),
    content: content.trim(),
  };
}

/** Returns all project case study slugs (for generateStaticParams). */
export function getProjectCaseStudySlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => getSlugFromFilename(f));
}
