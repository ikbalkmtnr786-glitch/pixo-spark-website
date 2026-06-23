export type PageType = 'home' | 'services' | 'portfolio' | 'about' | 'blog' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Lucide icon identifier
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'meta-ads' | 'social' | 'design' | 'video' | 'development';
  summary: string;
  metrics: { label: string; value: string }[];
  description: string;
  bgColor: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  seoKeywords: string[];
}

export interface AuditRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}
