export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'Full-Stack' | 'Frontend' | 'Utility';
  categories?: ('Web' | 'Mobile' | 'API' | 'Full-Stack')[];
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  role: string;
  highlights: string[];
  backendReadiness?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Database' | 'Core & Tools';
  level: number; // percentage
  experience: string;
  description: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  field: string;
  status: string;
  description: string;
  achievements: string[];
  courses: string[];
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  profileImage?: string;
  email: string;
  phone: string;
  location: string;
  country: string;
  region: string;
  careerObjective: string;
  bio: string;
  languages: { language: string; proficiency: string }[];
  availability: string;
  socialLinks: {
    github: string;
    linkedin: string;
    telegram: string;
    email: string;
    phone: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrOrg: string;
  avatar?: string;
  initials: string;
  relationship: string;
  content: string;
  contentOm?: string;
  rating: number; // 1 to 5
  date: string;
  projectRelation?: string;
}
