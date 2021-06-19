import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Footer from "./components/Footer";
import Logo from './images/Logo.svg'
import Login from './images/login.svg'

function App() {
  return (
    <div>
      <Navbar logo={Logo} login={Login}/>
      <Body />
      <Footer logo={Logo} url="www.orangethereal.hu"/>
    </div>
  );
}

export default App;
