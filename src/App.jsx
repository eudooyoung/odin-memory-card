import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const cards = [];
  for (let i = 1; i <= 9; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          imgUrl: data.sprites.other["official-artwork"].front_default,
        };
        cards.push(pokemon);
      });
  }

  return (
    <>
      <Header />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default App;
