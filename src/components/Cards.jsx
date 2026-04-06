import Card from "./Card";

export default function Cards({ cards, className }) {
  return (
    <div className={className}>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
