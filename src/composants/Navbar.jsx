
import React, { useState } from "react";
import "../assets/navbar.css";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="">
            <span className="text-primary">&lt;</span>Voldi
            <span className="text-white">Mbu</span>
            <span className="text-primary">/&gt;</span>
          </a>
        </div>

        {/* Menu central */}
        {/* <ul className={isOpen ? "menu-center active" : "menu-center"}>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}

        <div className="social-links">
          <a href="https://github.com/Voldi-ghost/">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/voldi-mbu-b328a1247/">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:mbuvoldi@gmail.com">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>

        {/* <div className={isOpen ? "active hamburger" : "hamburger"} onClick={toggleMenu} id="hamburger">
          <span></span>
          <span className="middle"></span>
          <span></span>
        </div> */}
      </nav>
    </header>
  );
}
