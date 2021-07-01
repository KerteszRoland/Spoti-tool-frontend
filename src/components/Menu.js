import login from "../images/login.svg";

function Menu() {
  return (
    <div className="navbar">
      <button className="btn-navbar">heti felfedezés</button>
      <button className="btn-navbar">kedvencek</button>
      <button className="btn-navbar">időkapszula</button>
      <button className="btn-navbar">kapcsolat</button>
      <button className="btn-login" onClick={Login}>
        <img src={login} alt="login" />
      </button>
    </div>
  );
}

function Login() {
  const redirect_uri = "http://localhost:3000/dashboard";
  const my_client_id = "a19a2ed0d72544649fa79140d716ea29";
  var scopes =
    "playlist-modify-public user-library-read user-read-private user-read-currently-playing user-read-playback-state user-modify-playback-state";
  window.location.replace(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      my_client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
}

export default Menu;
