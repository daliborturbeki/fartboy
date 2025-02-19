import { Container } from "react-bootstrap"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircle } from "react-bootstrap-icons";
import { useMediaQuery } from 'react-responsive';

export const Game = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 869px)' });

  return (
    <section className="game" id="game">
      <Container>
        {isDesktopOrLaptop && (
        <div className="go-back-button">
          <button onClick={() => window.location.href = '/'} title="Go back">
            <ArrowLeftCircle size={55} color="white" />
          </button>
        </div>
        )}
        <div className="iframe-container text-center">
          <iframe title="Fartboy game" frameborder="0" src="https://itch.io/embed-upload/12738277?color=121212" width="1280" height="740" allowfullscreen>
            <a href="https://scranstudios.itch.io/fartboy-flies-again">Play FartBoy Flies Again! on itch.io</a>
          </iframe>
        </div>
      </Container>
    </section>
  )
}
