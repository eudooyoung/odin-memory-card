import Card from "./Card";

export default function Cards({ cards, className, onClick }) {
  return (
    <div className={className}>
      {cards.map((card) => {
        return <Card key={card.id} card={card} onClick={onClick} />;
      })}
    </div>
  );
}
