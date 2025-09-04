// src/components/Skills.js
import React from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faLaptopCode,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillList = [
    {
      icon: faPencilRuler,
      title: "Design",
      description:
        "Criação de interfaces intuitivas e experiências de usuário focadas na usabilidade e na estética moderna.",
    },
    {
      icon: faLaptopCode,
      title: "Desenvolvimento Full-Stack",
      description:
        "Desenvolvimento de aplicações web completas, do back-end ao front-end, utilizando tecnologias como Python, React e frameworks modernos.",
    },
    {
      icon: faBrain,
      title: "Machine Learning",
      description:
        "É o meu objeto de estudo no mestrado, sou familiarizado com redes neurais e possuo experiência especificamente em GANs.",
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className={`section ${inView ? "is-visible" : ""}`}
    >
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skillList.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon">
              <FontAwesomeIcon icon={skill.icon} size="3x" />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
