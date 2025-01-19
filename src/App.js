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
    "description": "FartBoy is a playful and community-focused cryptocurrency inspired by the hilarious and heroic spirit of the comic book character. ",
    "publisher": {
      "@type": "Memecoin",
      "name": "FartBoy"
    },
    "image": "https://www.fartboysol.com/static/media/fartboy_2.6e1751091c05c4cff2bf.png"
  };

  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
        <meta property="og:title" content="FartBoy" />
        <meta property="og:description" content="FartBoy is a playful and community-focused cryptocurrency inspired by the hilarious and heroic spirit of the comic book character." />
        <meta property="og:image" content="https://www.fartboysol.com/static/media/fartboy_2.6e1751091c05c4cff2bf.png" />
        <meta property="og:url" content="https://www.fartboysol.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FARTBOY_CTO" />
        <meta name="twitter:title" content="FartBoy - The Fun Cryptocurrency" />
        <meta name="twitter:description" content="FartBoy is a playful and community-focused cryptocurrency inspired by the hilarious and heroic spirit of the comic book character." />
        <meta name="twitter:image" content="https://www.fartboysol.com/static/media/fartboy_2.6e1751091c05c4cff2bf.png" />
        <meta name="twitter:image:alt" content="FartBoy" />
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
