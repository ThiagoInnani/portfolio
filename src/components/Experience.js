// src/components/Experience.js
import React from "react";

const Experience = () => {
  const experiences = [
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
  ];

  return (
    <section id="experience">
      <span className="label">[03] Trajetória</span>
      <h2>Experiência Profissional</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={`${exp.company}-${index}`}>
            <div className="experience-meta">
              <span className="period">{exp.period}</span>
            </div>
            <div className="experience-content">
              <h3>{exp.company}</h3>
              <span className="role-title">{exp.role}</span>
              <p>{exp.description}</p>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
