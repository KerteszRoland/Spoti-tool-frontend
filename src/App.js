import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

import Logo from "./images/Logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { LoginContext } from "./Context/LoginContext";

function App() {
  const [logged_in, setLogin] = useState(false);
  const [username, setUsername] = useState("")
  const [pic, setPic] = useState("")

  return (
    <div>
      <LoginContext.Provider value={{logged_in, setLogin, username, setUsername, pic, setPic}}>
        <Header logo={Logo} />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer logo={Logo} />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
