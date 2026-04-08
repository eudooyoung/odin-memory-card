import "../styles/Card.css";

export default function Card({ card, onClick, isPlaceholder }) {
  return (
    <>
      {!isPlaceholder && (
        <div className="card" id={card.id} onClick={onClick}>
          <div className="image-wrapper">
            <img
              src={card.imgUrl}
              alt={`Image of ${card.name}`}
            />
          </div>
          <span className="pokemon-name">
            {card.name.at(0).toUpperCase() + card.name.slice(1)}
          </span>
        </div>
      )}
      {isPlaceholder && <div className="card placeholder">Loading...</div>}
    </>
  );
}
