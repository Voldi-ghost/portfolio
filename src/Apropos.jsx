import React from 'react';
import "./assets/apropos.css";
import {stack} from "./composants/StackCard";

export default function Apropos() {
  return (
    <section className='apropos'>
      <div className="title"><h1>À propos de moi</h1></div>
      <div className="maPhoto">
        <img src="./assets/profil.png" alt="avatar" />
      </div>
      <p className="maDescription">
        Je suis Voldi MBU, un Software Systems Architect & Digital Designer passionné par la création de solutions numériques innovantes. Avec une expertise approfondie en Design graphique et Développement, e transforme les idées en produits numériques performants et élégants.
      </p>
      <hr />
      <div className="stack">
        <h2 className="stack-title">Mes Compétences Techniques</h2>
        <div className="stack-card">
          <div class="swiper logo-swiper">
            <div class="swiper-wrapper">
                {
                  stack.map((card)=>{
                    <div class="swiper-slide">
                      <img src={card.img} alt="" />
                      rrr
                    </div>
                  })
                }
              
            </div>
          </div>
            {/* {
                stack.map((card) =>
                    <div className='card'>
                        <img src={card.img} alt="" />
                        <h3>{card.title}</h3>
                        <p>{card.category}</p>
                    </div>
                )
              
            } */}
            {/* <div className="card">
                <img src="ressource/html.png" alt="" srcset="" />
                <h3>HTML</h3>
                <p>Front-end</p>
            </div> */}
        </div>
      </div>

    </section>
  )
}
