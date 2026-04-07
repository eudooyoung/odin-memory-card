export default function Menu({ onClick }) {
  return (
    <div className="menu-container">
      <button className="reload" onClick={onClick}>
        Change Cards
      </button>
    </div>
  );
}
