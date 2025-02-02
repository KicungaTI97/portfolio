import { Code, Coffee, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { createContext, ReactNode } from "react";

// Interface para itens genéricos
interface Item {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

// Enum para níveis de habilidade
enum SkillLevel {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
  Expert = 4,
}

// Interfaces para diferentes tipos de dados
interface Skill {
  name: string;
  level: SkillLevel;
}
interface Project extends Item{
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

interface Certificate {
  name: string;
  issuer: string;
  link: string;
  date: string;
}

interface Experience {
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


interface PersonalInfoType {
  name: string;
  title: string;
  profiles: {
    profile1: string,
    profile3: string,
  };
  yearsOfExperience: number;
  location: string;
  availability: "Disponível" | "Indisponível" | "Freelance";
  bio: string;
  cv: string
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
interface SocialLinkProps {
  name: string,
  icon:ReactNode;
  url: string,
  username: string,
}
interface LinksType{
  name: string,
  url: string
  icon?: ReactNode;
}

interface FooterLinkType{
  title: string;
  links: LinksType[];
}
interface DataContextType {
  personalInfo: PersonalInfoType;
  skills: {
    technical: Skill[];
    softSkills: Skill[];
    tools: Skill[];
  };
  projects: Project[];
  certificates: Certificate[];
  socialLinks:SocialLinkProps[];
  footerLinks: FooterLinkType[]
}

interface DataProviderProps {
  children: React.ReactNode;
}


// Criação do contexto
export const DataContext = createContext({} as DataContextType);

// Provedor de contexto
export function DataProvider({ children }: DataProviderProps) {
  // Dados do portfólio
  const personalInfo: PersonalInfoType = {
    name: "João Kicunga",
    title: "Desenvolvedor Frontend Pleno",
    profiles: {
      profile1: "src/assets/profile.png",
      profile3: "src/assets/profile3.jpg",
    },
    location: "Lobito, Angola",
    yearsOfExperience: 5,
    availability: "Disponível",
    cv:"../doc/cv-Dev.pdf",
    bio: `Desenvolvedor apaixonado por criar experiências web excepcionais, 
          com mais de 5 anos de experiência em desenvolvimento frontend. 
          Especializado em React e arquitetura de aplicações modernas.`,
    socialLinks: {
      github: "https://github.com/KicungaTI97",
      linkedin: "https://www.linkedin.com/in/joao-kicunga-4659572bb/",
      twitter: "https://twitter.com/seu-usuario",
      email: "kicungati@gmail.com",
    },
    education: [
      {
        degree: "Licenciado em Informática",
        institution: "Universidade Lusida de Angola",
        period: "2020 - 2022",
        description: "Foco em Desenvolvimento Web e Arquitetura de Software",
      },
      {
        degree: "Bacharelado em Engenharia Informática",
        institution: "Jean Piaget Benguela",
        period: "2020 - 2023",
        description: "Graduação com ênfase em Engenharia de Software",
      },
    ],
    interests: [
      "Desenvolvimento Web",
      "UI/UX Design",
      "Arquitetura de Software",
      "Open Source",
      "Novas Tecnologias",
      "Machine Learning",
    ],
    languages: [
      { name: "Português", level: "Nativo", percentage: 100 },
      { name: "Inglês", level: "Fluente", percentage: 95 },
      { name: "Espanhol", level: "Intermediário", percentage: 75 },
    ],
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      },
      {
        category: "DevOps",
        items: ["Git", "Docker", "AWS", "CI/CD"],
      },
    ],
    experiences: [
      {
        company: "Tech Company Name",
        position: "Senior Frontend Developer",
        period: "Jan 2023 - Presente",
        location: "São Paulo, SP",
        description: "Liderança no desenvolvimento de aplicações web de alta performance utilizando React, Next.js e TypeScript. Implementação de práticas modernas de desenvolvimento e mentoria de desenvolvedores júniors.",
        achievements: [
          "Reduziu o tempo de carregamento da aplicação principal em 40%",
          "Implementou sistema de CI/CD que reduziu bugs em produção em 60%",
          "Liderou equipe de 5 desenvolvedores em projeto crítico para o negócio"
        ],
        technologies: ["React", "TypeScript", "Next.js", "Node.js", "AWS"],
        companyLogo: "/api/placeholder/64/64"
      },
      {
        company: "Another Tech Ltd",
        position: "Desenvolvedor Frontend",
        period: "Jun 2021 - Dez 2022",
        location: "São Paulo, SP",
        description: "Desenvolvimento de interfaces responsivas e acessíveis para aplicações web de grande escala, com foco em performance e experiência do usuário.",
        achievements: [
          "Desenvolveu sistema de design usado por toda a empresa",
          "Melhorou score de acessibilidade de 67 para 98",
          "Implementou testes automatizados reduzindo bugs em 45%"
        ],
        technologies: ["React", "JavaScript", "Styled Components", "Jest"],
        companyLogo: "/api/placeholder/64/64"
      },
      {
        company: "Startup Inc",
        position: "Desenvolvedor Frontend Jr",
        period: "Jan 2020 - Mai 2021",
        location: "São Paulo, SP",
        description: "Desenvolvimento de features para aplicação SaaS com foco em escalabilidade e manutenibilidade do código.",
        achievements: [
          "Criou componentes reutilizáveis reduzindo tempo de desenvolvimento",
          "Participou da migração de jQuery para React",
          "Implementou sistema de analytics aumentando conversão em 25%"
        ],
        technologies: ["React", "JavaScript", "CSS", "Git"],
        companyLogo: "/api/placeholder/64/64"
      }
    ]
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Website ULA",
      description: "🎓🌐 – Um website moderno e completo para universidades, oferecendo diversas funcionalidades para alunos, professores e administrativos. A plataforma permite acesso a informações acadêmicas, matrículas, notas, horários de aulas e muito mais, tudo em um só lugar. Facilitando a comunicação e a gestão educacional de forma eficiente e acessível!",
      image: "image/ula1.2.jpeg",
      status: "Em Produção",
      date: "2024-01-15",
      tags: ["React", "TypeScript", "Tailwind", "Redux", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      highlights: [
        "100k+ usuários ativos",
        "99.9% de uptime",
        "Processamento em tempo real"
      ],
      collaborators: [
        { name: "João Silva", avatar: "/api/placeholder/32/32" },
        { name: "Maria Santos", avatar: "/api/placeholder/32/32" }
      ],
      metrics: {
        views: 1500,
        likes: 230,
        commits: 456
      }
    },
    {
      id: 2,
      title: "Coffee Delivery",
      description: "☕🚀 – Uma plataforma moderna e eficiente para pedidos e entregas de café. Com apenas alguns cliques, os clientes podem escolher entre diversas opções de cafés frescos e receber seu pedido com rapidez e qualidade. Ideal para quem ama café e valoriza a praticidade!",
      image: "image/coffee1.2.jpeg",
      status: "Em Desenvolvimento",
      date: "2024-02-20",
      tags: ["React", "Typescript"],
      link: "#",
      github: "#",
      highlights: [
        "50k+ tarefas gerenciadas",
        "Integração com 10+ ferramentas",
        "Sistema de notificações em tempo real"
      ],
      collaborators: [
        { name: "Pedro Costa", avatar: "/api/placeholder/32/32" }
      ],
      metrics: {
        views: 800,
        likes: 150,
        commits: 234
      }
    },
    {
      id: 3,
      title: "Ignite Timer",
      description: "⏳🔥 – Um cronômetro inteligente para maximizar seu foco e produtividade. Defina o tempo ideal para suas atividades ou estudos e acompanhe seu progresso de forma simples e eficiente. Perfeito para quem deseja gerenciar melhor o tempo e manter a disciplina!",
      image: "image/Ignite_Timer.jpeg",
      status: "Em Desenvolvimento",
      date: "2024-02-20",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
      highlights: [
        "50k+ tarefas gerenciadas",
        "Integração com 10+ ferramentas",
        "Sistema de notificações em tempo real"
      ],
      collaborators: [
        { name: "Pedro Costa", avatar: "/api/placeholder/32/32" }
      ],
      metrics: {
        views: 800,
        likes: 150,
        commits: 234
      }
    },
    {
      id: 3,
      title: "Dashboard Pizzaria",
      description: "🍕📊 – Um dashboard inteligente para pizzarias, projetado para otimizar a gestão de pedidos, controle de receitas, estoque e relatórios financeiros. Acompanhe tudo em tempo real, agilize processos e melhore a eficiência do seu negócio, garantindo uma experiência incrível para seus clientes!",
      image: "image/dashboard_pizzaria.jpeg",
      status: "Em Desenvolvimento",
      date: "2024-02-20",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
      highlights: [
        "50k+ tarefas gerenciadas",
        "Integração com 10+ ferramentas",
        "Sistema de notificações em tempo real"
      ],
      collaborators: [
        { name: "Pedro Costa", avatar: "/api/placeholder/32/32" }
      ],
      metrics: {
        views: 800,
        likes: 150,
        commits: 234
      }
    },
    {
      id: 3,
      title: "CrecheKids",
      description: "🏫👶 – Uma plataforma completa para a gestão de centros infantis (creches). Permite o acompanhamento do desenvolvimento das crianças, registro de presença, comunicação com os pais e administração de atividades diárias. Tudo em um só lugar, trazendo mais organização e tranquilidade para gestores, educadores e famílias!",
      image: "image/creche.jpeg",
      status: "Em Desenvolvimento",
      date: "2024-02-20",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
      highlights: [
        "50k+ tarefas gerenciadas",
        "Integração com 10+ ferramentas",
        "Sistema de notificações em tempo real"
      ],
      collaborators: [
        { name: "Pedro Costa", avatar: "/api/placeholder/32/32" }
      ],
      metrics: {
        views: 800,
        likes: 150,
        commits: 234
      }
    },
    
  
  ];

  const footerLinks: FooterLinkType[] = [
    {
      title: 'Links Rápidos',
      links: [
        { name: 'Home', url: '#home' },
        { name: 'Sobre', url: '#about' },
        { name: 'Projetos', url: '#projects' },
        { name: 'Experiência', url: '#experience' },
        { name: 'Contato', url: '#contact' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Currículo', url: '/cv.pdf', icon: <Download size={14} /> },
        { name: 'Portfólio PDF', url: '/portfolio.pdf', icon: <Download size={14} /> },
        { name: 'Stack Técnica', url: '#skills', icon: <Code size={14} /> },
        { name: 'Agendar Call', url: '#contact', icon: <Coffee size={14} /> }
      ]
    }
  ];

  const skills = {
    technical: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js", level: 30 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Redux", level: 88 },
      { name: "Jest/RTL", level: 85 },
    ],
    softSkills: [
      { name: "Liderança Técnica", level: 90 },
      { name: "Comunicação", level: 95 },
      { name: "Resolução de Problemas", level: 92 },
      { name: "Trabalho em Equipe", level: 95 },
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 88 },
    ],
  };

  const certificates: Certificate[] = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#",
    },
    {
      name: "React Native Specialist",
      issuer: "Meta",
      date: "2023",
      link: "#",
    },
  ];
  const socialLinks: SocialLinkProps[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/your-profile',
      username: '@yourprofile'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/your-username',
      username: '@yourusername'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://instagram.com/your-handle',
      username: '@yourhandle'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'https://instagram.com/your-handle',
      username: '@yourhandle'
    }
  ];
 
  


  return (
    <DataContext.Provider value={{ personalInfo, certificates, projects, skills, socialLinks, footerLinks}}>
      {children}
    </DataContext.Provider>
  );
}
