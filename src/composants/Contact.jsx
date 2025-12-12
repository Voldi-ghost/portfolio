import React from "react";
import "../assets/contact.css"
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-section">
        <div className="contact-item">
          <div className="contact-texte">
            <h2>Commencer un projet</h2>
            <p>
              Prêt à passer au niveau supérieur ? Que vous ayez besoin d’un site
              web ou d’un accompagnement fiable en support informatique, je suis
              là pour vous aider. ensemble, trouvons des solutions efficaces,
              sur-mesure et durables !
            </p>
            <button><a href="#contact">Contact-moi</a></button>
          </div>
          <div className="image">
            <img src="./assets/illustration1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
