"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

type LatestBlogProps = {
  posts: BlogPostMeta[];
};

export default function LatestBlog({ posts }: LatestBlogProps) {

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-dark dark:text-white"
        >
          Latest from the Blog
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                {post.coverImage ? (
                  <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl text-primary/30 dark:text-primary-light/30 font-serif">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary-light/20 dark:text-primary-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary dark:group-hover:text-primary-light">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.readingTime}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{post.summary}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center font-semibold text-primary dark:text-primary-light hover:underline"
          >
            View all posts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
