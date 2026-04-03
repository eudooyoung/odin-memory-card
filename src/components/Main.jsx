import Container from "./Container.jsx";
import "../styles/Main.css";

export default function Main() {

  return (
    <main>
      <Container className="card-container" />
      <Container className="score-container" />
    </main>
  );
}
