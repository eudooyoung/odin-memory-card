import "../styles/Score.css";

export default function Score({ className, score, bestScore, isComplete }) {
  return (
    <div className={className}>
      <div>
        <span>Score: </span>
        <span>{score}</span>
      </div>
      <div>
        <span>Best Score: </span>
        <span>{bestScore}</span>
      </div>
  
    </div>
  );
}
