// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-scroll">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <footer className="footer">
          <div className="label">[05] Contato</div>
          <div className="footer-contact">
            <a href="mailto:thiagoinnani@gmail.com" className="footer-email">thiagoinnani@gmail.com</a>
            <span className="footer-divider">|</span>
            <span className="footer-phone">(42) 99865-7082</span>
          </div>
          <p className="footer-copy">
            © 2026 Thiago Innani Justus. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
