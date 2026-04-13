export type UnifiedProject = {
  // Common fields (all projects)
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  images: string[];
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  status?: string;
  clientName?: string;
  completionDate?: string;

  // Web Development specific
  projectUrl?: string;
  githubUrl?: string;
  techStack?: string[];

  // Video Editing specific
  videoUrl?: string;
  videoDuration?: string;
  resolution?: string;
  videoType?: string;
  platforms?: string[];
  softwareUsed?: string[];

  // Graphic Design specific
  designTools?: string[];
  projectType?: string;
  colorPalette?: string[];

  // Content Creation specific
  contentType?: string;
  contentUrl?: string;
  wordCount?: number;
  industry?: string;

  // Sales Copywriting specific
  copyType?: string;
  results?: string;

  // Social Media specific
  profileUrl?: string;
  campaignType?: string;
  duration?: string;

  // AI Automation specific
  aiTechnologies?: string[];
  automationType?: string;
  integrations?: string[];
  demoUrl?: string;

  // Mobile App specific
  appStoreUrl?: string;
  playStoreUrl?: string;
  appType?: string;
  downloads?: string;
  rating?: string;

  // Universal features array
  features?: string[];
};
