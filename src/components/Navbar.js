import "../index.css";
import Menu from "./Menu";

function Navbar({logo, login}) {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img src={logo} width="43" height="49" alt=""/>
        <span className="logo-text">Spoti-tools</span>
      </div>
      <Menu />
      <button className="btn-login">
        <img src={login} alt="" />
      </button>
    </div>
  );
}

export default Navbar;
