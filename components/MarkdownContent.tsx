"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownClasses = [
  "[&_p]:mb-6 [&_p]:leading-[1.8]",
  "[&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-snow [&_h2]:tracking-tight",
  "[&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-snow",
  "[&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-2 [&_li]:leading-[1.8]",
  "[&_strong]:font-semibold [&_strong]:text-snow",
  "[&_a]:text-neon/80 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-neon",
  "[&_blockquote]:border-l-2 [&_blockquote]:border-neon/30 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-fog [&_blockquote]:my-8",
  "[&_code]:font-mono [&_code]:text-sm [&_code]:bg-smoke [&_code]:text-neon/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
  "[&_pre]:my-6 [&_pre]:bg-smoke [&_pre]:border [&_pre]:border-ash/50 [&_pre]:rounded-xl [&_pre]:p-5 [&_pre]:overflow-x-auto",
  "[&_hr]:my-10 [&_hr]:border-ash/30",
].join(" ");

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
              <span className="my-8 block overflow-hidden rounded-xl bg-smoke border border-ash/30">
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
                  <figcaption className="px-4 py-3 text-center text-[11px] font-mono text-fog">
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
