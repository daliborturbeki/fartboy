import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tokenomics } from "./components/Tokenomics";
import { Stories } from "./components/Stories";
import { Chart } from "./components/Chart";
import { Footer } from "./components/Footer";
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react"
import { Game } from './components/Game';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StarsCanvas from './canvas/Stars';

function App() {

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
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
        <Analytics/>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <div className="stars-behind">
                <Banner />
                <Tokenomics />
                <StarsCanvas />
                <Stories />
                {/* <Chart /> */}
                <Footer />
              </div>
            </>
          } />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
