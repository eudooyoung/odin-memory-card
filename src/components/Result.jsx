export default function Result({ onClick }) {
  return (
    <div className="result-container">
      <span className="congratulation">CONGRATULATION!</span>
      <button className="replay" onClick={onClick}>
        Play Again?
      </button>
    </div>
  );
}
