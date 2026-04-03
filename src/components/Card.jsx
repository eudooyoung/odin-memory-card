import "../styles/Card.css";

export default function Card({ card }) {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={card.imgUrl} alt={`Image of ${card.name}`} />
      </div>
      <span className="pokemon-name">{card.name}</span>
    </div>
  );
}
