// src/components/Experience.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <span className="label">{t.experience.sectionLabel}</span>
      <h2>{t.experience.title}</h2>
      <div className="experience-list">
        {t.experience.items.map((exp, index) => (
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
