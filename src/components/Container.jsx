import Card from "./Card";
import Score from "./Score";

export default function Container({ className }) {
  return (
    <div className={className}>
      {className === "card-container" && null}
      {className === "score-container" && null}
    </div>
  );
}
