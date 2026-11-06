// src/locales/translations.js

// Imagens dos projetos
import gasparelloImg from "../assets/projects/gasparello.png";
import joaoBarbosaImg from "../assets/projects/joao-barbosa.png";
import nutrinaniImg from "../assets/projects/nutrinani.png";
import nanispecsImg from "../assets/projects/nanispecs.png";
import sibgrapiImg from "../assets/projects/sibgrapi.png";
import consultaImpostosImg from "../assets/projects/consulta-impostos.png";

export const translations = {
  pt: {
    meta: {
      langCode: "pt",
      langName: "Português",
      switchPrompt: "Mudar para Inglês",
    },
    nav: {
      brandYear: "Portfólio 2026",
      about: "Sobre Mim",
      skills: "Habilidades",
      experience: "Experiência",
      portfolio: "Portfólio",
      sidebarFooter: "© 2026 Thiago Innani Justus\nEngenheiro de Software & Pesquisador",
    },
    hero: {
      sectionLabel: "[01] Introdução",
      titleLine1: "Engenheiro de Software &",
      titleLine2: "Pesquisador em IA",
      aboutText: {
        part1: "Engenheiro de software e pesquisador de mestrado na UTFPR, focado em ",
        strong1: "Visão Computacional",
        part2: ", ",
        strong2: "IA Generativa (Seg2Sat-P)",
        part3: " e desenvolvimento ",
        strong3: "Full-Stack",
        part4: " de alta performance. Apaixonado por tecnologia desde pequeno, alio rigor científico e excelência em engenharia para desenvolver soluções digitais modernas, eficientes e escaláveis para negócios.",
      },
      location: "● Paraná, Brasil",
      downloadCV: "Baixar Currículo (PDF)",
      cvFileName: "Curriculo_Thiago_Innani.pdf",
      cvTitle: "Baixar Currículo de Thiago Innani em PDF",
      emailTitle: "E-mail: thiagoinnani@gmail.com",
    },
    skills: {
      sectionLabel: "[02] Especialidades",
      title: "Habilidades & Especialidades",
      items: [
        {
          category: "Visão Computacional",
          title: "Visão Computacional & IA Generativa",
          description:
            "Foco do meu mestrado na UTFPR. Pesquisa e desenvolvimento em modelos generativos e difusão (Seg2Sat-P), síntese de imagens e redes neurais profundas com PyTorch.",
        },
        {
          category: "Desenvolvimento Web",
          title: "Desenvolvimento Full-Stack",
          description:
            "Construção de aplicações web robustas e modernas utilizando React, Vite, JavaScript/TypeScript, Tailwind CSS, Python, Supabase, MySQL e arquitetura REST.",
        },
        {
          category: "3D & Interatividade",
          title: "3D Web & Interatividade",
          description:
            "Criação de experiências imersivas no navegador com Three.js e WebGL, modelagem interativa de cenas, visão explodida e shaders de alta fidelidade visual.",
        },
        {
          category: "Docência & Pesquisa",
          title: "Docência & Pesquisa Científica",
          description:
            "Atuação em Estágio de Docência na UTFPR ministrando tópicos de Machine Learning (como Árvores de Decisão), além de publicação e apresentação em congresso internacional (SIBGRAPI).",
        },
      ],
    },
    experience: {
      sectionLabel: "[03] Trajetória",
      title: "Experiência Profissional",
      items: [
        {
          company: "UTFPR - Mestrado em Computação",
          role: "Pesquisador em Visão Computacional & IA Generativa",
          period: "Fev 2024 — Presente",
          description:
            "Pesquisa voltada à Visão Computacional e Inteligência Artificial Generativa com foco no modelo Seg2Sat-P (geração de imagens sintéticas de sensoriamento remoto a partir de máscaras semânticas com Stable Diffusion). Autor de artigo científico apresentado no SIBGRAPI 2025. Desenvolvimento de pipelines de treinamento e avaliação com PyTorch.",
          technologies: [
            "Stable Diffusion",
            "PyTorch",
            "IA Generativa",
            "Seg2Sat-P",
            "Deep Learning",
            "Python",
          ],
        },
        {
          company: "UTFPR - Departamento de Computação",
          role: "Estágio de Docência (Aprendizado de Máquina)",
          period: "2024 — 2025",
          description:
            "Atuação no Programa de Estágio de Docência junto ao departamento de computação da UTFPR. Planejamento e condução de aulas teóricas e práticas sobre tópicos fundamentais de Machine Learning, com destaque para algoritmos de Árvores de Decisão (Decision Trees, Random Forests), métricas de avaliação e mentoria prática a turmas de graduação.",
          technologies: [
            "Machine Learning",
            "Árvores de Decisão",
            "Didática",
            "Scikit-Learn",
            "Python",
          ],
        },
        {
          company: "Justus Informática",
          role: "Desenvolvedor Full Stack & Suporte Técnico",
          period: "Ago 2023 — Jan 2025",
          description:
            "Desenvolvimento de software interno desktop em Python (CustomTkinter + MySQL) para automatização fiscal, permitindo consulta de alíquotas tributárias por CFOP e NCM a partir de notas fiscais. Criação de scripts de processamento para compatibilizar arquivos do eSocial com o ERP Exactus TOP. Gestão integral do website corporativo e suporte a infraestrutura de TI.",
          technologies: [
            "Python",
            "CustomTkinter",
            "MySQL",
            "ERP Exactus TOP",
            "Full Stack",
            "SEO",
          ],
        },
        {
          company: "PLSS Soluções / Quiver",
          role: "Técnico N1 & Desenvolvedor DevOps",
          period: "Jun 2021 — Mar 2023",
          description:
            "Resolução de incidentes computacionais para empresas parceiras, com atuação presencial alocado na Prestes Construtora em infraestrutura e redes. Promovido a Desenvolvedor DevOps na Quiver, atuando em automação de rotinas, sustentação de servidores e garantia de alta disponibilidade de sistemas.",
          technologies: [
            "DevOps",
            "Redes",
            "Hardware",
            "Linux",
            "Suporte Corporativo",
          ],
        },
        {
          company: "Pixie Empresa Júnior",
          role: "Desenvolvedor Web & Líder de Marketing e Vendas",
          period: "Ago 2020 — Jun 2022",
          description:
            "Desenvolvimento colaborativo de múltiplos websites comerciais utilizando tecnologias web modernas em ambiente ágil com foco em aprendizado contínuo. Liderança ativa da equipe de marketing e vendas, prospecção e negociação direta de projetos com clientes.",
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Gestão Ágil",
            "Marketing",
          ],
        },
      ],
    },
    portfolio: {
      sectionLabel: "[04] Projetos Selecionados",
      title: "Portfólio de Projetos",
      filterAll: "[TODOS]",
      filterWeb: "[WEB] Websites & Aplicações",
      filterResearch: "[PESQUISA] Pesquisa & Software",
      ctaDefault: "Ver Projeto →",
      ctaPaper: "Ver Artigo →",
      ctaCode: "Ver Código →",
      items: [
        {
          id: "gasparello",
          category: "web",
          title: "Gasparello Restaurante",
          badge: "React + Vite",
          description:
            "Website institucional e gastronômico moderno e de alta performance desenvolvido com React e Vite. Apresenta cardápio dinâmico, reservas e design refinado.",
          image: gasparelloImg,
          link: "https://restaurantegasparello.com.br/",
          technologies: ["React", "Vite", "JavaScript", "CSS Moderno"],
          cta: "Ver Projeto →",
        },
        {
          id: "joao-barbosa",
          category: "web",
          title: "João Barbosa Vendas",
          badge: "Representação Comercial",
          description:
            "Website profissional desenvolvido para escritório de representação comercial com mais de 20 anos de mercado. Destaque para catálogos digitais de indústrias parceiras e tabelas comerciais.",
          image: joaoBarbosaImg,
          link: "https://joaobarbosavendas.com.br/",
          technologies: ["React", "Vite", "B2B", "SEO", "Varejo"],
          cta: "Ver Projeto →",
        },
        {
          id: "nutrinani",
          category: "web",
          title: "Nutrinani App",
          badge: "Full-Stack • Supabase",
          description:
            "Aplicação web full-stack de livro de receitas digital e drinks. Desenvolvida com React, Tailwind CSS e Supabase para banco de dados relacional em tempo real e autenticação.",
          image: nutrinaniImg,
          link: "https://www.nutrinani.com.br/",
          technologies: ["React", "Tailwind CSS", "Supabase", "PostgreSQL"],
          cta: "Ver Projeto →",
        },
        {
          id: "nanispecs",
          category: "web",
          title: "NaniSpecs 3D",
          badge: "3D Interativo • WebGL",
          description:
            "Showcase interativo em 3D de hardware gamer construído com Three.js e WebGL. Conta com animação de visão explodida controlada pelo usuário em tempo real e shaders dinâmicos.",
          image: nanispecsImg,
          link: "https://www.nanispecs.com.br/",
          technologies: ["WebGL", "Three.js", "React", "3D Interativo"],
          cta: "Ver Projeto →",
        },
        {
          id: "sibgrapi",
          category: "research",
          title: "Artigo SIBGRAPI 2025",
          badge: "Pesquisa • IA Generativa",
          description:
            "Pesquisa de mestrado na UTFPR para geração de imagens sintéticas de sensoriamento remoto (pinus e florestas) a partir de máscaras semânticas com Stable Diffusion adaptado (Seg2Sat-P).",
          image: sibgrapiImg,
          link: "https://drive.google.com/file/d/1ZbDhVvWNu2mOGie01RLtrK8iQh5pPOjE/view?usp=sharing",
          technologies: ["PyTorch", "Stable Diffusion", "Seg2Sat-P", "Visão Computacional"],
          cta: "Ver Artigo →",
        },
        {
          id: "consulta-impostos",
          category: "research",
          title: "Consulta de Impostos",
          badge: "Desktop • Python & MySQL",
          description:
            "Aplicação desktop corporativa criada em Python (CustomTkinter + MySQL) para a Justus Informática para consultar alíquotas fiscais e otimizar a carga tributária por CFOP/NCM.",
          image: consultaImpostosImg,
          link: "https://github.com/ThiagoInnani/justus-ncm-reader",
          technologies: ["Python", "CustomTkinter", "MySQL", "Automação"],
          cta: "Ver Código →",
        },
      ],
    },
    footer: {
      sectionLabel: "[05] Contato",
      copyright: "© 2026 Thiago Innani Justus. Todos os direitos reservados.",
    },
  },
  en: {
    meta: {
      langCode: "en",
      langName: "English",
      switchPrompt: "Switch to Portuguese",
    },
    nav: {
      brandYear: "Portfolio 2026",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      portfolio: "Portfolio",
      sidebarFooter: "© 2026 Thiago Innani Justus\nSoftware Engineer & AI Researcher",
    },
    hero: {
      sectionLabel: "[01] Introduction",
      titleLine1: "Software Engineer &",
      titleLine2: "AI Researcher",
      aboutText: {
        part1: "Software engineer and Master's researcher at UTFPR, specializing in ",
        strong1: "Computer Vision",
        part2: ", ",
        strong2: "Generative AI (Seg2Sat-P)",
        part3: ", and high-performance ",
        strong3: "Full-Stack",
        part4: " development. Passionate about technology since childhood, I combine scientific rigor and engineering excellence to develop modern, efficient, and scalable digital solutions for businesses.",
      },
      location: "● Paraná, Brazil",
      downloadCV: "Download Resume (PDF)",
      cvFileName: "Thiago_Innani_Resume.pdf",
      cvTitle: "Download Thiago Innani's Resume in PDF",
      emailTitle: "Email: thiagoinnani@gmail.com",
    },
    skills: {
      sectionLabel: "[02] Specialties",
      title: "Skills & Specialties",
      items: [
        {
          category: "Computer Vision",
          title: "Computer Vision & Generative AI",
          description:
            "Focus of my Master's degree at UTFPR. Research and development in generative and diffusion models (Seg2Sat-P), image synthesis, and deep neural networks with PyTorch.",
        },
        {
          category: "Web Development",
          title: "Full-Stack Development",
          description:
            "Building robust and modern web applications using React, Vite, JavaScript/TypeScript, Tailwind CSS, Python, Supabase, MySQL, and REST architecture.",
        },
        {
          category: "3D & Interactivity",
          title: "3D Web & Interactivity",
          description:
            "Creating immersive browser experiences with Three.js and WebGL, interactive scene modeling, exploded views, and high-fidelity visual shaders.",
        },
        {
          category: "Teaching & Research",
          title: "Teaching & Scientific Research",
          description:
            "Teaching Assistantship at UTFPR lecturing on fundamental Machine Learning topics (such as Decision Trees), alongside international conference publications and presentations (SIBGRAPI).",
        },
      ],
    },
    experience: {
      sectionLabel: "[03] Career Path",
      title: "Professional Experience",
      items: [
        {
          company: "UTFPR - Master's in Computing",
          role: "Computer Vision & Generative AI Researcher",
          period: "Feb 2024 — Present",
          description:
            "Research focused on Computer Vision and Generative Artificial Intelligence specializing in the Seg2Sat-P framework (synthetic remote sensing image generation from semantic masks using adapted Stable Diffusion). Author of scientific paper presented at SIBGRAPI 2025. Developing training and evaluation pipelines using PyTorch.",
          technologies: [
            "Stable Diffusion",
            "PyTorch",
            "Generative AI",
            "Seg2Sat-P",
            "Deep Learning",
            "Python",
          ],
        },
        {
          company: "UTFPR - Department of Computing",
          role: "Teaching Assistant (Machine Learning)",
          period: "2024 — 2025",
          description:
            "Teaching Assistantship in UTFPR's Computer Science department. Planned and delivered theoretical and hands-on lectures on fundamental Machine Learning topics, emphasizing Decision Tree algorithms (Decision Trees, Random Forests), evaluation metrics, and practical mentoring for undergraduate cohorts.",
          technologies: [
            "Machine Learning",
            "Decision Trees",
            "Pedagogy",
            "Scikit-Learn",
            "Python",
          ],
        },
        {
          company: "Justus Informática",
          role: "Full Stack Developer & IT Support",
          period: "Aug 2023 — Jan 2025",
          description:
            "Developed internal desktop application in Python (CustomTkinter + MySQL) for fiscal automation, enabling tax rate queries by CFOP and NCM from fiscal invoices. Built automated processing scripts to integrate eSocial data with the Exactus TOP ERP. Managed corporate website and IT infrastructure.",
          technologies: [
            "Python",
            "CustomTkinter",
            "MySQL",
            "Exactus TOP ERP",
            "Full Stack",
            "SEO",
          ],
        },
        {
          company: "PLSS Soluções / Quiver",
          role: "Tier 1 Tech & DevOps Developer",
          period: "Jun 2021 — Mar 2023",
          description:
            "Resolved IT incidents for partner enterprises, with on-site placement at Construtora Prestes managing corporate networks and infrastructure. Promoted to DevOps Developer at Quiver, focusing on routine automation, server maintenance, and system high availability.",
          technologies: [
            "DevOps",
            "Networks",
            "Hardware",
            "Linux",
            "Corporate Support",
          ],
        },
        {
          company: "Pixie Junior Enterprise",
          role: "Web Developer & Head of Marketing and Sales",
          period: "Aug 2020 — Jun 2022",
          description:
            "Collaborative development of multiple commercial websites using modern web technologies in an agile environment. Led marketing and sales team, conducting direct client outreach, proposal design, and contract negotiations.",
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Agile Management",
            "Marketing",
          ],
        },
      ],
    },
    portfolio: {
      sectionLabel: "[04] Selected Projects",
      title: "Project Portfolio",
      filterAll: "[ALL]",
      filterWeb: "[WEB] Websites & Applications",
      filterResearch: "[RESEARCH] Research & Software",
      ctaDefault: "View Project →",
      ctaPaper: "View Paper →",
      ctaCode: "View Code →",
      items: [
        {
          id: "gasparello",
          category: "web",
          title: "Gasparello Restaurant",
          badge: "React + Vite",
          description:
            "Modern, high-performance gastronomic and institutional website built with React and Vite. Features dynamic menus, table reservations, and refined aesthetics.",
          image: gasparelloImg,
          link: "https://restaurantegasparello.com.br/",
          technologies: ["React", "Vite", "JavaScript", "Modern CSS"],
          cta: "View Project →",
        },
        {
          id: "joao-barbosa",
          category: "web",
          title: "João Barbosa Sales",
          badge: "Commercial Agency",
          description:
            "Professional website built for a commercial representation agency with over 20 years in the retail market. Highlights digital product catalogs and commercial price sheets.",
          image: joaoBarbosaImg,
          link: "https://joaobarbosavendas.com.br/",
          technologies: ["React", "Vite", "B2B", "SEO", "Retail"],
          cta: "View Project →",
        },
        {
          id: "nutrinani",
          category: "web",
          title: "Nutrinani App",
          badge: "Full-Stack • Supabase",
          description:
            "Full-stack digital recipe and cocktail web app. Built with React, Tailwind CSS, and Supabase for real-time relational database management and authentication.",
          image: nutrinaniImg,
          link: "https://www.nutrinani.com.br/",
          technologies: ["React", "Tailwind CSS", "Supabase", "PostgreSQL"],
          cta: "View Project →",
        },
        {
          id: "nanispecs",
          category: "web",
          title: "NaniSpecs 3D",
          badge: "3D Interactive • WebGL",
          description:
            "Interactive 3D hardware showcase built with Three.js and WebGL. Features user-controlled real-time exploded view animations and custom dynamic shaders.",
          image: nanispecsImg,
          link: "https://www.nanispecs.com.br/",
          technologies: ["WebGL", "Three.js", "React", "Interactive 3D"],
          cta: "View Project →",
        },
        {
          id: "sibgrapi",
          category: "research",
          title: "SIBGRAPI 2025 Paper",
          badge: "Research • Generative AI",
          description:
            "UTFPR Master's research on generating synthetic remote sensing imagery (pinus and forests) from semantic segmentation masks with adapted Stable Diffusion (Seg2Sat-P).",
          image: sibgrapiImg,
          link: "https://drive.google.com/file/d/1ZbDhVvWNu2mOGie01RLtrK8iQh5pPOjE/view?usp=sharing",
          technologies: ["PyTorch", "Stable Diffusion", "Seg2Sat-P", "Computer Vision"],
          cta: "View Paper →",
        },
        {
          id: "consulta-impostos",
          category: "research",
          title: "Tax Rate Lookup",
          badge: "Desktop • Python & MySQL",
          description:
            "Corporate desktop application created in Python (CustomTkinter + MySQL) for Justus Informática to query tax rates and optimize fiscal compliance by CFOP/NCM.",
          image: consultaImpostosImg,
          link: "https://github.com/ThiagoInnani/justus-ncm-reader",
          technologies: ["Python", "CustomTkinter", "MySQL", "Automation"],
          cta: "View Code →",
        },
      ],
    },
    footer: {
      sectionLabel: "[05] Contact",
      copyright: "© 2026 Thiago Innani Justus. All rights reserved.",
    },
  },
};
