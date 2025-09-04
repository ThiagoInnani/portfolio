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
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <footer className="footer">
        <p>© 2025 Thiago Innani Justus. Todos os direitos reservados.</p>
        <p>
          Contato:{" "}
          <a href="mailto:thiagoinnani@gmail.com">thiagoinnani@gmail.com</a> |
          Telefone: (42) 99865-7082
        </p>
      </footer>
    </div>
  );
}

export default App;
