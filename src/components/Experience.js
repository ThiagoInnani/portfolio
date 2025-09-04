// src/components/Experience.js
import React from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "Pixie Empresa Júnior",
      role: "Aprendiz, Desenvolvedor e Líder da Equipe de Marketing e Vendas.",
      period: "Ago 2020 - Jun 2022",
      description:
        "Atuando de forma colaborativa na equipe de desenvolvimento, participei da criação de múltiplos websites. Nossa dinâmica de trabalho era pautada no aprendizado contínuo, dedicando os finais de semana ao estudo em grupo para, em seguida, aplicar diretamente o conhecimento adquirido nos projetos em andamento. Além de minhas responsabilidades técnicas, também assumi a posição de líder da equipe de marketing e vendas.",
      technologies: ["HTML", "CSS", "JavaScript", "Gestão de Equipes"],
    },
    {
      company: "PLSS Soluções",
      role: "Técnico N1, Desenvolvedor Dev-Ops",
      period: "Jun 2021 - Mar 2023",
      description:
        "Minha principal responsabilidade era o atendimento e a resolução de problemas computacionais para diversas empresas da região. Durante esse período, atuei presencialmente na Prestes Construtora, onde oferecia suporte à infraestrutura e auxiliava nas questões técnicas do dia a dia. Posteriormente, em reconhecimento ao meu trabalho, fui promovido à função de Desenvolvedor Dev-Ops, passando a atuar na empresa Quiver.",
      technologies: ["DevOps", "Redes", "Hardware", "Atendimento"],
    },
    {
      company: "Justus Informática",
      role: "Estágiario, Desenvolvedor Full Stack",
      period: "Ago 2023 - Jan 2025",
      description:
        "Durante minha atuação, fui encarregado de prestar suporte técnico integral tanto para a empresa quanto para seus clientes, abrangendo desde a infraestrutura de TI até o software utilizado no dia a dia - o Exactus TOP. Além disso, gerenciei todo o ciclo de vida do website corporativo, o que incluiu sua criação, o monitoramento de desempenho e a implementação de estratégias para o aumento de tráfego. No âmbito do desenvolvimento, criei uma aplicação interna utilizando Python e tkinter, projetada para otimizar processos ao permitir que os usuários consultassem os impostos de um item específico através de seu código CFOP. Outra aplicação que foi desenvolvida envolvia pegar um documento de texto do portal esocial e editá-lo para deixa-lo compatível com o programa Exactus TOP.",
      technologies: ["Python", "MySQL", "Suporte de TI"],
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className={`section ${inView ? "is-visible" : ""}`}
    >
      <h2>Experiência Profissional</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.company}>
            <h3>{exp.company}</h3>
            <h4 className="role-title">{exp.role}</h4>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
            <div className="technologies-container">
              {exp.technologies.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
