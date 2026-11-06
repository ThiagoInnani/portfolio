// src/components/Projects.js
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const projectList = t.portfolio.items;

  const filteredProjects =
    activeCategory === "all"
      ? projectList
      : projectList.filter((proj) => proj.category === activeCategory);

  const webCount = projectList.filter((p) => p.category === "web").length;
  const researchCount = projectList.filter((p) => p.category === "research").length;

  return (
    <section id="portfolio">
      <span className="label">{t.portfolio.sectionLabel}</span>
      <h2>{t.portfolio.title}</h2>

      {/* Filtros Monospace */}
      <div className="filter-controls">
        <button
          type="button"
          className={`filter-link ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          {t.portfolio.filterAll} ({projectList.length})
        </button>
        <button
          type="button"
          className={`filter-link ${activeCategory === "web" ? "active" : ""}`}
          onClick={() => setActiveCategory("web")}
        >
          {t.portfolio.filterWeb} ({webCount})
        </button>
        <button
          type="button"
          className={`filter-link ${activeCategory === "research" ? "active" : ""}`}
          onClick={() => setActiveCategory("research")}
        >
          {t.portfolio.filterResearch} ({researchCount})
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
