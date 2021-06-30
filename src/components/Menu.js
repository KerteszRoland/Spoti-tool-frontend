import login from "../images/login.svg"

function Menu() {
  return (
    <div className="navbar">
      <button className="btn-navbar">heti felfedezés</button>
      <button className="btn-navbar">kedvencek</button>
      <button className="btn-navbar">időkapszula</button>
      <button className="btn-navbar">kapcsolat</button>
      <button className="btn-login">
        <img src={login} alt="login" />
      </button>
    </div>
  );
}

export default Menu;
