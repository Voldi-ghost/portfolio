import React from "react";
import "./assets/accueil.css";
import { ProjetsData } from "./ProjesData";
import { motion, AnimatePresence  } from "framer-motion";

export default function Accueil() {
  const [filter, setFilter] = React.useState("all");
  const donneesFiltrees = ProjetsData.filter((projet) =>
    filter === "all" ? true : projet.category === filter
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] // easeOut premium
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.25,
      ease: "easeIn"
    }
  }
};


  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.4 },
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0.9,
  //     transition: { duration: 0.25 },
  //   },
  // };

  const name = "Voldi MBU";

  return (
    <>
      <motion.section
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <div className="container-profil">
          <img
            src="./assets/mon-logo-bleu.png"
            alt="Avatar"
            className="img-profil"
          />
        </div> */}

        <motion.h1 className="text-accueil" variants={fadeUp}>
          Bonjour, je suis{" "}
          <span className="text-nom">
            {name.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: index * 0.1
        }}
      >
        {char}
      </motion.span>
    ))}
          </span>
        </motion.h1>

        <motion.p className="text-paragraph" variants={fadeUp}>
          Passionné par le développement web, mobile et le graphique design.
          Voici une collection de mes projets personnels, mes contributions et
          mes design.
        </motion.p>
        <motion.div className="btn-container" variants={fadeUp}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active btn-filter" : "btn-filter"}
          >
            Tout voir
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("dev")}
            className={filter === "dev" ? "active btn-filter" : "btn-filter"}
          >
            <i className="fas fa-code mr-2"></i> Dév & Apps
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("design")}
            className={filter === "design" ? "active btn-filter" : "btn-filter"}
          >
            {" "}
            <i className="fas fa-network-wired mr-2"></i> Graphique et web
            design
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter("participation")}
            className={
              filter === "participation" ? "active btn-filter" : "btn-filter"
            }
          >
            <i className="fas fa-users mr-2"></i> Participations
          </motion.button>
        </motion.div>
      </motion.section>

      <section className="projets">
        <motion.div className="projects-grid"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AnimatePresence mode="popLayout">
          {donneesFiltrees.map((projet) => (
            <motion.article 
            className="project-card" data-category={projet.category} key={projet.id}
              variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
          whileHover={{ y: -8 }}
            >
              <div className="image-header">
                <div className="gid-overlay">
                  <i className={projet.image}></i>
                </div>
              </div>
              <div className="content">
                <div className="top-row">
                  <span className="tag">{projet.type}</span>
                  <a href="#">
                    <i className="fab fa-github github"></i>
                  </a>
                </div>

                <h3 className="title">{projet.title}</h3>

                <p className="description">{projet.description}</p>

                <div className="tech-list">
                  {projet.liste.map((lien, index) => (
                    <span>{lien}</span>
                  ))}
                </div>

                <a href="https://t-change.org" className="btn">
                  Voir le projet
                </a>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
