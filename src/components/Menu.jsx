export default function Menu({ onClick }) {
  return (
    <div className="menu-container">
      <button onClick={onClick}>
        Change Cards
      </button>
    </div>
  );
}
