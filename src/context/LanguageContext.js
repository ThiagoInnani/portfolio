// src/context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

/**
 * Detects initial language with maximum privacy:
 * - Checks localStorage for explicit user override.
 * - Reads standard client-side browser locale (navigator.languages / navigator.language).
 * - Reads local timezone offset (zero external requests, zero tracking, zero third-party leakage).
 */
export function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "pt";
  }

  // 1. Explicit user override from past visits
  try {
    const saved = localStorage.getItem("portfolio_language");
    if (saved === "pt" || saved === "en") {
      return saved;
    }
  } catch (err) {
    // LocalStorage might be disabled in private browsing
  }

  // 2. Privacy-first local browser locale inspection
  try {
    const navLangs =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || ""];

    for (const lang of navLangs) {
      if (lang && lang.toLowerCase().startsWith("pt")) {
        return "pt";
      }
    }

    // 3. Local browser timezone heuristic (no network calls, fully client-side)
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const brazilianZones = [
      "Sao_Paulo",
      "Fortaleza",
      "Belem",
      "Recife",
      "Cuiaba",
      "Manaus",
      "Porto_Velho",
      "Rio_Branco",
      "Maceio",
      "Campo_Grande",
      "Bahia",
      "Noronha",
      "Araguaina",
      "Boa_Vista",
      "Santarem",
    ];

    if (brazilianZones.some((zone) => timeZone.includes(zone))) {
      return "pt";
    }
  } catch (err) {
    // Ignore and fallback safely
  }

  // Default to English for international audiences
  return "en";
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (newLang) => {
    if (newLang === "pt" || newLang === "en") {
      setLanguageState(newLang);
      try {
        localStorage.setItem("portfolio_language", newLang);
      } catch (err) {
        // Ignore storage error
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  // Sync HTML lang attribute whenever language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-br" : "en";
      document.title =
        language === "pt"
          ? "Thiago Innani | Engenheiro de Software & Pesquisador em IA"
          : "Thiago Innani | Software Engineer & AI Researcher";
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language] || translations.pt,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
