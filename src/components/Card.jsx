import "../styles/Card.css";

export default function Card({ card, onClick }) {
  return (
    <div className="card" id={card.id} onClick={onClick}>
      <div className="image-wrapper">
        <img src={card.imgUrl} alt={`Image of ${card.name}`} />
      </div>
      <span className="pokemon-name">{card.name}</span>
    </div>
  );
}
