import "../styles/Main.css";
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Score from "./Score.jsx";

export default function Main() {
  const totalCard = 9;
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const getRandomIds = () => {
    const idSet = new Set();
    for (let i = 0; i < totalCard; i++) {
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

  const reorderCards = () => {
    const idxSet = new Set();
    const newCards = [];
    for (let i = 0; i < totalCard; i++) {
      let randomIdx = -1;
      do {
        randomIdx = Math.floor(Math.random() * totalCard);
      } while (idxSet.has(randomIdx));
      newCards.push(cards[randomIdx]);
      idxSet.add(randomIdx);
    }
    setCards(newCards);
  };

  const clickCardHandler = (e) => {
    const cardId = e.target.closest(".card").id;
    reorderCards();
    if (!memory.includes(cardId)) {
      setScore(score + 1);
      setMemory([cardId, ...memory]);
    } else {
      setScore(0);
      setMemory([]);
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
