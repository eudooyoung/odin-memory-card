import "../styles/Main.css";
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Score from "./Score.jsx";

export default function Main() {
  const cardTotal = 9;
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [memory, setMemory] = useState(new Set());

  const getRandomIds = () => {
    const idSet = new Set();
    for (let i = 0; i < cardTotal; i++) {
      let randomId = 0;
      do {
        randomId = Math.floor(Math.random() * 1024) + 1;
      } while (idSet.has(randomId));
      idSet.add(randomId);
    }
    return [...idSet];
  };

  const getFetchUrls = (ids) => {
    return ids.map((id) => {
      return `https://pokeapi.co/api/v2/pokemon/${id}/`;
    });
  };

  const reorderCards = () => {};

  const clickCardHandler = (e) => {
    const clickedCardId = e.target.closest(".card").id;
    if (memory.has(clickCardHandler)) {
      setScore(0);
    }
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
      <Cards
        className="card-container"
        cards={cards}
        onClick={clickCardHandler}
      />
      <Score className="score-container" score={score} />
    </main>
  );
}
