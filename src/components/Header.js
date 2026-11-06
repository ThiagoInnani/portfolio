// src/components/Header.js
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Topo Mobile (<= 1024px) */}
      <header className="mobile-header">
        <div className="mobile-brand">
          <span className="label">{t.nav.brandYear}</span>
          <a href="#about" className="mobile-title-link">
            <h1 className="mobile-title">Thiago Innani</h1>
          </a>
        </div>

        <div className="mobile-header-actions">
          <LanguageSwitch className="lang-switch-mobile-top" />
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar Menu de Navegação / Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            type="button"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <nav id="mobile-nav" className="mobile-dropdown">
              <div className="mobile-dropdown-lang">
                <span className="label">Language / Idioma:</span>
                <LanguageSwitch className="lang-switch-dropdown" />
              </div>

              <ul>
                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    [01] {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                    [02] {t.nav.skills}
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                    [03] {t.nav.experience}
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                    [04] {t.nav.portfolio}
                  </a>
                </li>
              </ul>
              <div className="mobile-dropdown-footer">
                <a
                  href="/curriculo-thiago-innani.pdf"
                  download={t.hero.cvFileName}
                  className="mobile-cv-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg viewBox="0 0 24 24" className="btn-icon" aria-hidden="true">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                  </svg>
                  <span>{t.hero.downloadCV}</span>
                </a>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Barra Lateral Desktop (> 1024px) */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-header-row">
            <span className="label">{t.nav.brandYear}</span>
            <LanguageSwitch className="lang-switch-sidebar" />
          </div>
          <h1>
            Thiago<br />Innani
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
            <li>
              <a href="#experience">{t.nav.experience}</a>
            </li>
            <li>
              <a href="#portfolio">{t.nav.portfolio}</a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          {t.nav.sidebarFooter.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Header;
