export interface Project {
  title: string;
  description: string;
  highlight?: string;
  /** Short label for the kind of work, shown above the title on the card. */
  kind?: string;
  features?: string[];
  stack?: string[];
  /** 16:10 card cover. Projects without one render a text plate instead. */
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  courseUrl?: string;
  /** When set, the project links to an internal /projects/<slug> case-study page. */
  slug?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  /** Case study on this site showing the work done for the credential. */
  projectUrl?: string;
  /** Label for the case-study link; defaults to "View Project". */
  projectLabel?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Blog types live in lib/blog.ts (BlogPostMeta, BlogPost) for Markdown-based posts.
