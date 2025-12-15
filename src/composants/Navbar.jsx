
import React, { useState } from "react";
import "../assets/navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ici mes animations framer-motion reutilisables
    const navbarVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 }
  }
};

const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5
    }
  }
};

const socialItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};


  // fin



  return (
    <header>
      <motion.nav className="navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="logo"
          variants={logoVariants}>
          <a href="">
            <span className="text-primary">&lt;</span>Voldi
            <span className="text-white">Mbu</span>
            <span className="text-primary">/&gt;</span>
          </a>
        </motion.div>

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
          <motion.a href="https://github.com/Voldi-ghost/"
            variants={socialItem}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            >
            <i className="fab fa-github text-xl"></i>
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/voldi-mbu-b328a1247/"
            variants={socialItem}
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin text-xl"></i>
          </motion.a>
          <motion.a href="mailto:mbuvoldi@gmail.com"
            variants={socialItem}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-envelope text-xl"></i>
          </motion.a>
        </div>

        {/* <div className={isOpen ? "active hamburger" : "hamburger"} onClick={toggleMenu} id="hamburger">
          <span></span>
          <span className="middle"></span>
          <span></span>
        </div> */}
      </motion.nav>
    </header>
  );
}
