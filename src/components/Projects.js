// src/components/Projects.js
import React, { useState } from "react";

// Imagens dos projetos
import gasparelloImg from "../assets/projects/gasparello.png";
import joaoBarbosaImg from "../assets/projects/joao-barbosa.png";
import nutrinaniImg from "../assets/projects/nutrinani.png";
import nanispecsImg from "../assets/projects/nanispecs.png";
import sibgrapiImg from "../assets/projects/sibgrapi.png";
import consultaImpostosImg from "../assets/projects/consulta-impostos.png";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projectList = [
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
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectList
      : projectList.filter((proj) => proj.category === activeCategory);

  return (
    <section id="portfolio">
      <span className="label">[04] Projetos Selecionados</span>
      <h2>Portfólio de Projetos</h2>

      {/* Filtros Monospace em Português */}
      <div className="filter-controls">
        <button
          type="button"
          className={`filter-link ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          [TODOS] ({projectList.length})
        </button>
        <button
          type="button"
          className={`filter-link ${activeCategory === "web" ? "active" : ""}`}
          onClick={() => setActiveCategory("web")}
        >
          [WEB] Websites &amp; Aplicações (4)
        </button>
        <button
          type="button"
          className={`filter-link ${activeCategory === "research" ? "active" : ""}`}
          onClick={() => setActiveCategory("research")}
        >
          [PESQUISA] Pesquisa &amp; Software (2)
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj) => (
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={proj.id}
          >
            <div className="project-thumb-box">
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
              />
              <span className="project-badge-tag">{proj.badge}</span>
            </div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <span className="btn-visit">{proj.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
