export interface Project {
  id: string;
  title: string;
  category: "Detection & EDR" | "Cloud & AWS" | "AI & ML Security" | "Web Engineering";
  tier: 1 | 2;
  role: string;
  tagline: string;
  problemSolved: string;
  architectureHighlights: string[];
  keyTechnicalImplementation: string[];
  metrics?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  mitreMapping?: string[];
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Full-time" | "Academic";
  responsibilities: string[];
  technologies: string[];
  securityRelevance: string;
  verifiedOutcomes: string[];
}

export interface Certification {
  name: string;
  issuer: "AWS" | "Google Cloud" | "Industry";
  status: "Completed" | "In Progress";
  year?: string;
  domain: string;
  credentialUrl?: string;
  highlight?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  gpaOrScore: string;
  highlights?: string[];
  relevantCoursework?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
}
