import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import Logo from './images/Logo.svg'

function App() {
  return (
    <div>
      <Header logo={Logo}/>
      <Body />
      <Footer logo={Logo} />
    </div>
  );
}

export default App;
