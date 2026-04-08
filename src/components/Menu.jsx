export default function Menu() {
    const clickReloadButtonHandler = () => {
    window.location.reload();
  };
  return (
    <div className="menu-container">
      <button className="reload" onClick={clickReloadButtonHandler}>
        Change Cards
      </button>
    </div>
  );
}
