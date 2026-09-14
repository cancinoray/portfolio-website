import type { MetadataRoute } from "next";
import { getProjectCaseStudySlugs } from "@/lib/projects";
import { getBlogSlugs } from "@/lib/blog";

const BASE_URL = "https://cancinoray.netlify.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified, priority: 1 },
    { url: `${BASE_URL}/blog/`, lastModified, priority: 0.6 },
    ...getBlogSlugs().map((slug) => ({
      url: `${BASE_URL}/blog/${slug}/`,
      lastModified,
      priority: 0.5,
    })),
    ...getProjectCaseStudySlugs().map((slug) => ({
      url: `${BASE_URL}/projects/${slug}/`,
      lastModified,
      priority: 0.8,
    })),
  ];
}
