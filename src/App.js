import { useState, useEffect } from "react";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Tools from "./pages/Tools";

import Logo from "./images/Logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { LoginContext } from "./Context/LoginContext";

function App() {
  const [logged_in, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setUsername(localStorage.getItem("name"));
    }

    if (localStorage.getItem("pic")) {
      setPic(localStorage.getItem("pic"));
    }

    const is_logged_in = localStorage.getItem("logged_in");
    if (is_logged_in) {
      if (is_logged_in === "true") {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("logged_in", logged_in);
    if (logged_in) {
      localStorage.setItem("name", username);
      localStorage.setItem("pic", pic);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("pic");
    }
  }, [username, pic, logged_in]);

  useEffect(() => {
      const url = "http://localhost:5000/api/session";
      fetch(url, {
        method: "GET",
        credentials: "include",
      })
        .then((resp) => resp.json())
        .then((json) => {
          if (json.hasOwnProperty("session")) {
            if (json["session"] === "valid") {
              setLogin(true);
            } else {
              if(history.location.pathname !== "/"){
                history.push("/");
              }
              setLogin(false);
            }
          }
        });
    
  });

  return (
    <div>
      <LoginContext.Provider
        value={{ logged_in, setLogin, username, setUsername, pic, setPic, history}}
      >
        <Header logo={Logo} />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
        </Switch>
        <Footer logo={Logo} />
      </LoginContext.Provider>
    </div>
  );
}

export default withRouter(App);
