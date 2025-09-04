// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre Mim</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
