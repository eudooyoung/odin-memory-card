import Container from "./Container.jsx";
import "../styles/Main.css";

export default function Main({ cards }) {
  return (
    <main>
      <div className="card-container"></div>
      <div className="score-container"></div>
    </main>
  );
}
