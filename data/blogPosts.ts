import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "my-career-shift-to-web-development",
    title: "My Career Shift to Web Development",
    summary:
      "How I moved from mechanical engineering into software and what made the transition sustainable.",
    publishedAt: "2026-02-10",
    readingTime: "4 min read",
    tags: ["Career Shift", "Web Development", "Learning"],
    content: [
      "For years, I worked in mechanical engineering and built a strong foundation in systems thinking, process optimization, and structured problem-solving. Those habits ended up becoming my biggest advantage when I began learning to code.",
      "My transition started with curiosity and small experiments. I focused on practical projects and documented what I learned. Instead of chasing every trend, I stayed consistent with fundamentals: JavaScript, React, and building user-facing features.",
      "One of the most important lessons was to ship visible work. A portfolio is more than a collection of screenshots. It is evidence of how you think, how you write code, and how you improve over time.",
      "This blog will be where I share build notes, lessons from project work, and thoughts about growing as an engineer after a non-traditional start.",
    ],
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
