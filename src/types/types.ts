// types/types.ts

// Enum para níveis de habilidade
export enum SkillLevel {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4,
}

// Interface para itens genéricos
export interface Item {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

// Interfaces para diferentes tipos de dados
export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface Project extends Item {
  id: number;
  image: string;
  status: 'Em Produção' | 'Em Desenvolvimento' | 'Concluído';
  date: string;
  github: string;
  highlights: string[];
  collaborators?: {
    name: string;
    avatar: string;
  }[];
  metrics: {
    views: number;
    likes: number;
    commits: number;
  };
}

export interface Certificate {
  name: string;
  issuer: string;
  link: string;
  date: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  technologies: string[];
  companyLogo: string;
  role?: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Hobby {
  name: string;
  description: string;
  category: 'Criativo' | 'Esporte' | 'Tecnologia' | 'Cultura' | 'Outdoor' | 'Ciência';
  frequency: string;
}

export interface PersonalInfoType {
  name: string;
  title: string;
  profiles: {
    profile1: string;
    profile3: string;
  };
  hobbies: Hobby[];
  yearsOfExperience: number;
  location: string;
  availability: "Disponível" | "Indisponível" | "Freelance";
  bio: string;
  cv: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  }[];
  interests: string[];
  languages: {
    name: string;
    level: string;
    percentage: number;
  }[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experiences: Experience[];
}

export interface SocialLinkProps {
  name: string;
  icon: React.ElementType;
  url: string;
  username: string;
}
export interface LinksType {
  name: string;
  url: string;
  icon?: React.ElementType;
}

export interface FooterLinkType {
  title: string;
  links: LinksType[];
}

export interface DataContextType {
  personalInfo: PersonalInfoType;
  skills: {
    technical: Skill[];
    softSkills: Skill[];
    tools: Skill[];
  };
  projects: Project[];
  certificates: Certificate[];
  socialLinks: SocialLinkProps[];
  footerLinks: FooterLinkType[];
}

export interface DataProviderProps {
  children: React.ReactNode;
}