import "../styles/Main.css";
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Score from "./Score.jsx";

export default function Main() {
  const cardTotal = 9;
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const getRandomIds = () => {
    const randomIds = [];
    for (let i = 0; i < cardTotal; i++) {
      let randomId = 0;
      do {
        randomId = Math.floor(Math.random() * 1024) + 1;
      } while (randomIds.includes(randomId));
      randomIds.push(randomId);
    }
    return randomIds;
  };

  const getFetchUrls = (ids) => {
    return ids.map((id) => {
      return `https://pokeapi.co/api/v2/pokemon/${id}/`;
    });
  };

  useEffect(() => {
    let ignore = false;
    const newCards = [];
    const randomIds = getRandomIds();
    const fetchUrls = getFetchUrls(randomIds);

    Promise.all(
      fetchUrls.map((url) => fetch(url).then((response) => response.json())),
    ).then((dataset) => {
      dataset.forEach((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          imgUrl: data.sprites.other["official-artwork"].front_default,
        };
        newCards.push(pokemon);
      });
      if (!ignore) {
        setCards(newCards);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <Cards className="card-container" cards={cards} />
      <Score className="score-container" score={score} />
    </main>
  );
}
