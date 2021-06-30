import "../index.css";
import Menu from "./Menu";

function Header({logo}) {
  return (
    <div className="header">
      <div className="branding">
        <img src={logo} width="43" height="49" alt="logo"/>
        <span className="logo-text">Spoti-tools</span>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
