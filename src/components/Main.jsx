import "../styles/information.css";
import "../styles/Button.css";
import "../styles/Main.css";
import { useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import Cards from "./Cards.jsx";
import Score from "./Score.jsx";
import Result from "./Result.jsx";
import Menu from "./Menu.jsx";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [hasFetchedAll, setHasFetchedAll] = useState(false);

  const totalCard = 9;
  // const isComplete = totalCard === bestScore;
  const isComplete = true;

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
    if (isComplete) {
      return;
    }
    const cardId = e.target.closest(".card").id;
    if (!memory.includes(cardId)) {
      const newScore = score + 1;
      const newBestScore = Math.max(newScore, bestScore);
      setScore(newScore);
      setBestScore(newBestScore);
      if (newScore === totalCard) {
        return;
      }
      setMemory([cardId, ...memory]);
    } else {
      setScore(0);
      setMemory([]);
    }

    reorderCards();
  };

  const clickReplayButtonHandler = () => {
    setScore(0);
    setBestScore(0);
    setMemory([]);
    reorderCards();
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
        setHasFetchedAll(true);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main>
      <div className="information">
        <Menu />
        {isComplete && <Result onClick={clickReplayButtonHandler} />}
        <Score
          className="score-container"
          score={score}
          bestScore={bestScore}
          isComplete={isComplete}
        />
      </div>
      <Cards
        className="card-container"
        cards={cards}
        onClick={clickCardHandler}
      />
      {!hasFetchedAll && <Loading />}
    </main>
  );
}
