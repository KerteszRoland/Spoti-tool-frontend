import { Link } from "react-router-dom";

import "../index.css";
import Menu from "./Menu";

function Header({ logo }) {
  return (
    <div className="header">
      <Link className="branding" to="/">
        <img src={logo} width="43" height="49" alt="logo" />
        <span className="logo-text">Spoti-tools</span>
      </Link>
      <Menu />
    </div>
  );
}

export default Header;
