import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

import login from "../images/login.svg";
import logout from "../images/logout.svg";
import Profile from "./Profile";

const LogoutBtn = ({ onClick }) => {
  return (
    <button className="btn-logout" onClick={onClick}>
      <img src={logout} alt="log out" />
    </button>
  );
};

function LoginBtn({ onClick }) {
  return (
    <button className="btn-login" onClick={onClick}>
      <img src={login} alt="login" />
    </button>
  );
}

function Menu() {
  const { logged_in, setLogin, pic, username, history } = useContext(LoginContext);

  function Login() {
    const redirect_uri = "http://localhost:3000/login";
    const my_client_id = "a19a2ed0d72544649fa79140d716ea29";
    var scopes =
      "playlist-modify-public user-library-read user-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";
    window.location.href =
      "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      my_client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri);
  }

  function Logout() {
    const url = "http://localhost:5000/api/logout";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ asd: "asd" }),
    }).then((resp) => {
      if (resp.ok) {
        setLogin(false);
        history.push("/");
      }
    });
  }

  return (
    <div className="navbar">
      <button className="btn-navbar">heti felfedezés</button>
      <button className="btn-navbar">kedvencek</button>
      <button className="btn-navbar">időkapszula</button>
      <button className="btn-navbar">kapcsolat</button>
      {console.log(logged_in)}
      {logged_in && <Profile name={username} pic={pic} />}
      {logged_in ? (
        <LogoutBtn onClick={Logout} />
      ) : (
        <LoginBtn onClick={Login} />
      )}
    </div>
  );
}

export default Menu;
