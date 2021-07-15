import { useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const history = useHistory();
  const { setLogin, setUsername, setPic } = useContext(LoginContext);

  function SendCode() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (Object.keys(params).length) {
      const code = params["code"];
      const data = { code: code };
      const url = "http://localhost:5000/api/login";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.hasOwnProperty("name")) {
            setUsername(json["name"]);
            setPic(json["pic"]);
            setLogin(true);
            history.push("/");
          }
        });
    }
  }

  useEffect(() => {
    SendCode();
  }, []);

  return <div></div>;
};

export default Login;
