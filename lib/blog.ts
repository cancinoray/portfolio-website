import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function parseFrontmatter(slug: string, raw: string): BlogPostMeta {
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    summary: data.summary ?? "",
    publishedAt: data.publishedAt ?? "",
    readingTime: data.readingTime ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage,
  };
}

/** Returns all blog post metadata, sorted by date (newest first). */
export function getSortedBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md");
  const posts: BlogPostMeta[] = files.map((filename) => {
    const slug = getSlugFromFilename(filename);
    const fullPath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    return parseFrontmatter(slug, raw);
  });
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Returns the N most recent posts (for home page). */
export function getLatestBlogPosts(limit = 3): BlogPostMeta[] {
  return getSortedBlogPosts().slice(0, limit);
}

/** Returns a single post by slug, with markdown content, or undefined. */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...parseFrontmatter(slug, raw),
    content: content.trim(),
  };
}

/** Returns all blog slugs (for generateStaticParams). */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => getSlugFromFilename(f));
}
