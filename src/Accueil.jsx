import React from "react";
import "./assets/accueil.css";
import { ProjetsData } from "./ProjesData";

export default function Accueil() {
  const [filter, setFilter] = React.useState("all");
  const donneesFiltrees = ProjetsData.filter((projet) =>
    filter === "all" ? true : projet.category === filter
  );

 

  return (
    <>
      <section className="container">
        {/* <div className="container-profil">
          <img
            src="./assets/mon-logo-bleu.png"
            alt="Avatar"
            className="img-profil"
          />
        </div> */}

        <h1 className="text-accueil">
          Bonjour, je suis <span className="text-nom">Voldi MBU</span>
        </h1>

        <p className="text-paragraph">
          Passionné par le développement web, mobile et le graphique design.
          Voici une collection de mes projets personnels, mes contributions et
          mes design.
        </p>
        <div className="btn-container">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active btn-filter" : "btn-filter"}
          >
            Tout voir
          </button>
          <button
            onClick={() => setFilter("dev")}
            className={filter === "dev" ? "active btn-filter" : "btn-filter"}
          >
            <i className="fas fa-code mr-2"></i> Dév & Apps
          </button>
          <button
            onClick={() => setFilter("design")}
            className={filter === "design" ? "active btn-filter" : "btn-filter"}
          >
            {" "}
            <i className="fas fa-network-wired mr-2"></i> Graphique et web
            design
          </button>
          <button
            onClick={() => setFilter("participation")}
            className={
              filter === "participation" ? "active btn-filter" : "btn-filter"
            }
          >
            <i className="fas fa-users mr-2"></i> Participations
          </button>
        </div>
      </section>

      <section className="projets">
        <div className="projects-grid">
          {donneesFiltrees.map((projet) => (
            <article className="project-card" data-category={projet.category}>
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
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
