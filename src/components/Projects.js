// src/components/Projects.js
import React from "react";
import { useInView } from "react-intersection-observer";
import sibgrapiImg from "../assets/projects/sibgrapi.png";
import consultaImpostosImg from "../assets/projects/consulta-impostos.png";
import websitesImg from "../assets/projects/websites.png";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectList = [
    {
      title: "Artigo para SIBGRAPI 2025",
      description:
        "Este trabalho envolvia a geração de imagens sintéticas de pinus no meio de campos e florestas a partir de máscaras usadas como input. O estudo utiliza como base Seg2Sat, que é um modelo do Stable Diffusion pré-treinado para imagens aéreas, fiz um treinamento com um dataset pequeno de 29 imagens. O trabalho foi selecionado para apresentação no congresso SIBGRAPI 2025.",
      image: sibgrapiImg,
      link: "https://drive.google.com/file/d/1ZbDhVvWNu2mOGie01RLtrK8iQh5pPOjE/view?usp=sharing", // Adicione o link para o artigo ou projeto aqui
    },
    {
      title: "Software de Consulta de Impostos",
      description:
        "Desenvolvi uma aplicação desktop com Python para a Justus Informática, que permitia aos usuários consultar impostos de produtos a partir do seu código CFOP, otimizando processos internos. A UI do programa foi feita utilizando a biblioteca customtkinter e foi utilizado um banco de dados local mysql. A proposta envolvia consultar os impostos de produtos por estados e conferir se haveria um CFOP ou NCM que poderia ser trocado a fim de ter uma taxa menor sobre o produto, o usuário dava como input uma nota fiscal e então o programa avaliava a partir dos produtos na nota.",
      image: consultaImpostosImg,
      link: "https://github.com/ThiagoInnani/justus-ncm-reader", // Adicione o link para o repositório ou demo aqui
    },
    {
      title: "Criação de Websites",
      description:
        "Participei da criação, monitoramento e otimização de tráfego para o website da Justus Informática e desenvolvi sites para clientes na Pixie Empresa Júnior.",
      image: websitesImg,
      link: "https://justus.com.br", // Adicione o link para o portfólio de sites aqui
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className={`section ${inView ? "is-visible" : ""}`}
    >
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projectList.map((proj) => (
          <div className="project-card" key={proj.title}>
            <div className="project-content">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title-link"
              >
                <h3>{proj.title}</h3>
              </a>
              <p>{proj.description}</p>
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
