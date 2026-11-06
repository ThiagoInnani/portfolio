// src/components/LanguageSwitch.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitch = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-switch ${className}`}
      role="group"
      aria-label="Seleção de idioma / Language selector"
    >
      <button
        type="button"
        className={`lang-btn ${language === "pt" ? "active" : ""}`}
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        title="Português (Brasil)"
      >
        <span className="lang-code">PT</span>
      </button>
      <span className="lang-divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        title="English"
      >
        <span className="lang-code">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitch;
