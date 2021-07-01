import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

import Logo from "./images/Logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
