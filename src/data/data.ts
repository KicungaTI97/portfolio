// data/data.ts
import { PersonalInfoType, Project, Certificate, SocialLinkProps, FooterLinkType } from "../types/types";
import { Code, Coffee, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo: PersonalInfoType = {
  name: "João Kicunga",
  title: "Desenvolvedor Frontend Pleno",
  profiles: {
    profile1: "src/assets/profile.png",
    profile3: "src/assets/profile3.jpg",
  },
  location: "Lobito, Angola",
  yearsOfExperience: 2,
  availability: "Disponível",
  cv: "../doc/cv-Dev.pdf",
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
  ],
  hobbies: [
    {
      name: "Fotografia Urbana",
      description: "Explorando a arte de capturar a essência da cidade através de composições únicas, documentando a vida urbana e sua arquitetura em constante mudança.",
      category: "Criativo",
      frequency: "Semanal"
    },
    {
      name: "Culinária Experimental",
      description: "Explorando fusões gastronômicas e técnicas modernas de cozinha, criando pratos únicos que combinam diferentes culturas culinárias.",
      category: "Cultura",
      frequency: "Quinzenal"
    },
    {
      name: "Jardinagem Urbana",
      description: "Mantendo um jardim vertical e horta hidropônica em casa, experimentando com cultivo sustentável e automação de irrigação.",
      category: "Outdoor",
      frequency: "Diário"
    },
    {
      name: "Criação de Conteúdo Tech",
      description: "Produzindo vídeos e artigos sobre tecnologia e desenvolvimento, compartilhando conhecimento e experiências com a comunidade.",
      category: "Tecnologia",
      frequency: "Semanal"
    }
  ]
};

export const projects: Project[] = [
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
    id: 4,
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
    id: 5,
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

export const footerLinks: FooterLinkType[] = [
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
      { name: 'Currículo', url: '/cv.pdf', icon: Download},
      { name: 'Portfólio PDF', url: '/portfolio.pdf', icon: Download},
      { name: 'Stack Técnica', url: '#skills', icon: Code},
      { name: 'Agendar Call', url: '#contact', icon: Coffee}
    ]
  }
];

export const skills = {
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

export const certificates: Certificate[] = [
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

export const socialLinks: SocialLinkProps[] = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/your-profile',
    username: '@yourprofile'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/your-username',
    username: '@yourusername'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://instagram.com/your-handle',
    username: '@yourhandle'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'https://instagram.com/your-handle',
    username: '@yourhandle'
  }
];