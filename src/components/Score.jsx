import "../styles/Score.css";

export default function Score({ className, score, bestScore, isComplete }) {
  return (
    <div className={className}>
      <div className="score">
        <span>Score: </span>
        <span>{score}</span>
      </div>
      <div className="score best">
        <span>Best Score: </span>
        <span>{bestScore}</span>
      </div>
    </div>
  );
}
