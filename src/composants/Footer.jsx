import React from "react";
import "../assets/footer.css"

export default function Footer() {
  return (
    <section>
        <hr className="separateur"/>
      <div className="container" id="contact">
        <h2 className="text-title">
          Intéressé par mon profil ?
        </h2>
        <p className="text-paragraphe">
          Je suis toujours ouvert à de nouvelles opportunités et collaborations.
        </p>
        <div className="container-reseau">
          <a
            href="https://www.linkedin.com/in/voldi-mbu-b328a1247/"
            className="link-footer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Voldi-ghost/"
            className="link-footer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="link-footer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="text-bottom">
          © 2025 Voldi MBU. Fait avec{" "}
          <i className="fas fa-heart text-red-500 mx-1"></i> et du code.
        </p>
      </div>
    </section>
  );
}
