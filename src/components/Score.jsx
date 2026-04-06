import "../styles/Score.css";

export default function Score({ className, score }) {
  return (
    <div className={className}>
      <div>
        <span>Score: </span>
        <span>{score}</span>
      </div>
      <div>
        <span>Best Score: </span>
        <span></span>
      </div>
      <div>
        <span>Result</span>
        <span></span>
      </div>
    </div>
  );
}
