"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownClasses =
  "[&_p]:mb-6 [&_p]:leading-8 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_strong]:font-semibold [&_a]:text-primary [&_a]:dark:text-primary-light [&_a]:underline [&_a:hover]:opacity-80";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className={markdownClasses}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            const srcStr = typeof src === "string" ? src : undefined;
            if (!srcStr) return null;
            return (
              <span className="my-6 block overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <span className="relative block aspect-video w-full">
                  <Image
                    src={srcStr}
                    alt={alt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </span>
                {alt && (
                  <figcaption className="px-2 py-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                  </figcaption>
                )}
              </span>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
