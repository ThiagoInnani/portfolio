// src/components/Skills.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <span className="label">{t.skills.sectionLabel}</span>
      <h2>{t.skills.title}</h2>
      <div className="skills-grid">
        {t.skills.items.map((skill) => (
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
