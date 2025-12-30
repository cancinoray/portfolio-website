export interface Project {
  title: string;
  description: string;
  features?: string[];
  stack?: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  courseUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

