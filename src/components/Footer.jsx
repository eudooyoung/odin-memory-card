import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <span>
        Pokémon data by{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferer">
          PokéAPI
        </a>{" "}
        ·
      </span>
      <span> © 2026 all rights reserved ·</span>
      <span>
        {" "}
        <a
          className="github"
          href="https://github.com/eudooyoung/odin-memory-card.git"
          target="_blank"
          rel="noreferer"
        >
          <i className="devicon-github-original"></i>
        </a>
      </span>
    </footer>
  );
}
