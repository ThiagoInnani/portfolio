// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./App.css";

function MainContent() {
  const { t } = useLanguage();

  return (
    <div className="app-layout">
      <Header />
      <main className="main-scroll">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <footer className="footer">
          <div className="label">{t.footer.sectionLabel}</div>
          <div className="footer-contact">
            <a href="mailto:thiagoinnani@gmail.com" className="footer-email">
              thiagoinnani@gmail.com
            </a>
            <span className="footer-divider">|</span>
            <span className="footer-phone">(42) 99865-7082</span>
          </div>
          <p className="footer-copy">{t.footer.copyright}</p>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
