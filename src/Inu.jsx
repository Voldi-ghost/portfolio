import React, { useState } from "react";
// import { MesData } from "./MesData";

function MesComposant() {

const MesData = [
  {
    id: 1,
    title: "Titre 1",
    type: "info",
  },
  {
    id: 2,
    title: "Titre 2",
    type: "annonce",
  },
  {
    id: 3,
    title: "Titre 3",
    type: "info",
  },
  {
    id: 4,
    title: "Titre 4",
    type: "event",
  },
];

  // État qui contient le type sélectionné
  const [filtre, setFiltre] = useState("all");

  // Filtrer les données selon l'état "filtre"
  const donneesFiltrees =
    filtre === "all"
      ? MesData
      : MesData.filter((item) => item.type === filtre);

  return (
    <div>
      {/* Boutons de filtrage */}
      <button onClick={() => setFiltre("all")}>All</button>
      <button onClick={() => setFiltre("info")}>Info</button>
      <button onClick={() => setFiltre("annonce")}>Annonce</button>
      <button onClick={() => setFiltre("event")}>Event</button>

      <div style={{ marginTop: "20px" }}>
        {donneesFiltrees.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{item.title}</h3>
            <p>Type : {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MesComposant;
