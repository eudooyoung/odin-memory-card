import "../styles/Result.css";

export default function Result({ onClick }) {
  return (
    <div className="result-container">
      <span>Congratulation!</span>
      <button onClick={onClick}>
        Play Again?
      </button>
    </div>
  );
}
