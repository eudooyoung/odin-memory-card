import Card from "./Card";

export default function Cards({
  cards,
  className,
  onClick,
  totalCard,
}) {
  if (cards.length === 0) {
    for (let i = 0; i < totalCard; i++) {
      cards.push({ id: i, isPlaceholder: true });
    }
  }

  return (
    <div className={className}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onClick={onClick}
            isPlaceholder={card.isPlaceholder}
          />
        );
      })}
    </div>
  );
}
