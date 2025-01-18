import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tokenomics } from "./components/Tokenomics";
import { Stories } from "./components/Stories";
import { Chart } from "./components/Chart";
import { Footer } from "./components/Footer";
import { Helmet } from 'react-helmet';

function App() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FartBoy",
    "url": "https://www.fartboysol.com",
    "description": "FartBoy coin to the moon",
    "publisher": {
      "@type": "Memecoin",
      "name": "FartBoy"
    }
  };

  return (
    <div className="App">
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </Helmet>
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
