// src/components/About.js
import React from "react";
import profilePic from "../assets/foto-perfil.jpg";

const About = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <span className="label">[01] Introdução</span>
        <h1 className="hero-title">
          <span className="hero-title-line">Engenheiro de Software &amp;</span>
          <span className="hero-title-line hero-title-highlight">Pesquisador em IA</span>
        </h1>
        <div className="about-text">
          Engenheiro de software e pesquisador de mestrado na UTFPR, focado em{" "}
          <strong style={{ color: "var(--ink)" }}>Visão Computacional</strong>,{" "}
          <strong style={{ color: "var(--ink)" }}>IA Generativa (Seg2Sat-P)</strong> e desenvolvimento{" "}
          <strong style={{ color: "var(--ink)" }}>Full-Stack</strong> de alta performance. Apaixonado por
          tecnologia desde pequeno, alio rigor científico e excelência em engenharia para
          desenvolver soluções digitais modernas, eficientes e escaláveis para negócios.
        </div>
        <div className="location-pill">
          <span className="label" style={{ color: "var(--accent)", margin: 0 }}>
            ● Paraná, Brasil
          </span>
        </div>
        <div className="hero-actions">
          <a
            href="/curriculo-thiago-innani.pdf"
            download="Curriculo_Thiago_Innani.pdf"
            className="btn-download-cv"
            title="Baixar Currículo de Thiago Innani em PDF"
          >
            <svg viewBox="0 0 24 24" className="btn-icon" aria-hidden="true">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
            </svg>
            <span>Baixar Currículo (PDF)</span>
          </a>
          <div className="social-links">
            <a
              href="mailto:thiagoinnani@gmail.com"
              title="E-mail: thiagoinnani@gmail.com"
              aria-label="E-mail"
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 4H2C.9 4 .01 4.9.01 6L0 18c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-10 6L2 8V6l10 6 10-6v2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-innani-2212941b4"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a
              href="https://github.com/ThiagoInnani"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-pic-container">
        <img
          src={profilePic}
          alt="Thiago Innani Justus"
          className="profile-pic"
        />
      </div>
    </section>
  );
};

export default About;
