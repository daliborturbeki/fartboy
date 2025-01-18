import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tokenomics } from "./components/Tokenomics";
import { Stories } from "./components/Stories";
import { Chart } from "./components/Chart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Tokenomics />
      <Stories />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
