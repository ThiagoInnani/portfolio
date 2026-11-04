// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skillList = [
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
  ];

  return (
    <section id="skills">
      <span className="label">[02] Especialidades</span>
      <h2>Habilidades &amp; Especialidades</h2>
      <div className="skills-grid">
        {skillList.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <span className="label" style={{ color: "var(--accent)" }}>
              {skill.category}
            </span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
