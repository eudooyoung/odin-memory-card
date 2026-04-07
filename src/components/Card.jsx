import { useState } from "react";
import "../styles/Card.css";

export default function Card({ card, onClick }) {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="card" id={card.id} onClick={onClick}>
      <div className="image-wrapper">
        <img
          src={card.imgUrl}
          alt={`Image of ${card.name}`}
          onLoad={() => setIsComplete(true)}
        />
      </div>
      {!isComplete && <div className="loading">Loading...</div>}
      <span className="pokemon-name">
        {card.name.at(0).toUpperCase() + card.name.slice(1)}
      </span>
    </div>
  );
}
