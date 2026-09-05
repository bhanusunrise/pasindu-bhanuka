export type ProjectCategory =
  | "University"
  | "Freetime"
  | "Hackathon"
  | "Client"
  | "Volunteer";

export interface TechStackItem {
  purpose: string;
  stack: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  category: ProjectCategory;
  description: string[];
  websiteUrl?: string;
  githubUrl?: string;
  techStack?: TechStackItem[];
  seoKeywords?: string[];
}

export interface EducationItem {
  id: string;
  image?: string;
  institute: string;
  description: string;
  fromYear: string;
  toYear: string;
}

export interface CertificationItem {
  id: string;
  image: string;
  institute: string;
  name: string;
  description: string;
  year: string;
}

export interface JobExperienceItem {
  id: string;
  organization: string;
  position: string;
  description: string;
  fromYear: string;
  toYear: string;
}

export interface ExtraCurricularItem  { 
  id: string;
  organization?: string;
  sport?: string;
  position: string;
  description: string;
  fromYear: string;
  toYear: string;
  
}
