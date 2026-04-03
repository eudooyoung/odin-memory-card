import "../styles/Main.css";
import Card from "./Card.jsx";
import { useEffect, useState } from "react";

export default function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let ignore = false;
    const newCards = [];
    for (let i = 0; i < 9; i++) {
      const randomId = Math.floor(Math.random() * 1024) + 1;
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then((response) => response.json())
        .then((data) => {
          if (!ignore) {
            const pokemon = {
              id: data.id,
              name: data.name,
              imgUrl: data.sprites.other["official-artwork"].front_default,
            };
            newCards.push(pokemon);
            if (i === 8) {
              setCards(newCards);
            }
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, []);

  console.log(cards);
  return (
    <main>
      <div className="card-container">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div className="score-container"></div>
    </main>
  );
}
