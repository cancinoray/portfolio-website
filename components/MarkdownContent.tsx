"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const baseClasses =
  "[&_p]:mb-6 [&_p]:leading-8 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1 [&_strong]:font-semibold [&_a]:underline [&_a:hover]:opacity-80 [&_hr]:my-10 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_td]:border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:text-sm [&_code]:font-mono [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic";

const variantClasses = {
  default:
    "[&_p]:text-gray-700 [&_p]:dark:text-gray-300 [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_strong]:text-gray-900 [&_strong]:dark:text-white [&_a]:text-primary [&_a]:dark:text-primary-light [&_hr]:border-gray-200 [&_hr]:dark:border-gray-700 [&_table]:text-sm [&_table]:text-gray-700 [&_table]:dark:text-gray-300 [&_th]:border-gray-300 [&_th]:dark:border-gray-600 [&_th]:bg-gray-50 [&_th]:dark:bg-gray-800 [&_td]:border-gray-300 [&_td]:dark:border-gray-600 [&_pre]:bg-gray-100 [&_pre]:dark:bg-gray-800 [&_pre]:text-gray-800 [&_pre]:dark:text-gray-100 [&_code]:text-sm [&_blockquote]:border-gray-300 [&_blockquote]:dark:border-gray-600 [&_blockquote]:text-gray-600 [&_blockquote]:dark:text-gray-400",
  editorial:
    "[&_p]:text-ink/80 [&_h2]:font-display [&_h2]:tracking-tight [&_h3]:font-display [&_h3]:tracking-tight [&_strong]:text-ink [&_a]:text-signal [&_hr]:border-rule [&_table]:font-mono [&_table]:text-[12px] [&_th]:border-rule [&_th]:bg-chalk [&_th]:font-mono [&_th]:text-[11px] [&_th]:uppercase [&_th]:tracking-wider [&_td]:border-rule [&_td]:text-ink/80 [&_pre]:bg-ink [&_pre]:text-paper [&_code]:text-[12px] [&_blockquote]:border-signal [&_blockquote]:text-muted",
} as const;

interface MarkdownContentProps {
  content: string;
  variant?: keyof typeof variantClasses;
}

export default function MarkdownContent({
  content,
  variant = "default",
}: MarkdownContentProps) {
  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            const srcStr = typeof src === "string" ? src : undefined;
            if (!srcStr) return null;

            // Editorial pages show screenshots at their natural aspect ratio
            // (they're wide dashboards that shouldn't be cropped). react-markdown
            // wraps a lone image in a <p>, so keep the wrapper inline (span)
            // rather than a block-level <figure>, which would nest invalidly.
            if (variant === "editorial") {
              return (
                <span className="my-8 block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={srcStr}
                    alt={alt ?? ""}
                    loading="lazy"
                    className="w-full h-auto rounded-lg border border-rule bg-chalk"
                  />
                  {alt && (
                    <span className="mt-3 block text-center font-mono text-[11px] text-muted">
                      {alt}
                    </span>
                  )}
                </span>
              );
            }

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
                  <span className="block px-2 py-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    {alt}
                  </span>
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
