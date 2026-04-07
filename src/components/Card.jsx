import { useState } from "react";
import "../styles/Card.css";
import Loading from "./Loading";

export default function Card({ card, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="card" id={card.id} onClick={onClick}>
      <div className="image-wrapper">
        <img
          src={card.imgUrl}
          alt={`Image of ${card.name}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {!isLoaded && <Loading />}
      <span className="pokemon-name">
        {card.name.at(0).toUpperCase() + card.name.slice(1)}
      </span>
    </div>
  );
}
