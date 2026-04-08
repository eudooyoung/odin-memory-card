import Card from "./Card";

export default function Cards({
  cards,
  className,
  onClick,
  totalCard,
  hasFetchedAll,
}) {
  const placeholderArr = [];
  for (let i = 0; i < totalCard; i++) {
    placeholderArr.push(<Card isPlaceholder={true} key={i} />);
  }

  return (
    <div className={className}>
      {hasFetchedAll &&
        cards.map((card) => {
          return <Card key={card.id} card={card} onClick={onClick} />;
        })}
      {!hasFetchedAll && placeholderArr}
    </div>
  );
}
