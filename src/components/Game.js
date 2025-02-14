import { Container } from "react-bootstrap"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircle } from "react-bootstrap-icons";

export const Game = () => {
  return (
    <section className="game" id="game">
      <Container className="text-center"> 
        <button onClick={() => window.location.href = '/'} style={{position: 'absolute', top: '20px', left: '20px'}} title="Go back">
          <ArrowLeftCircle size={55} color="white" />
        </button>
        <iframe frameborder="0" src="https://itch.io/embed-upload/12738277?color=4f6781" allowfullscreen="" width="1280" height="740">
          <a href="https://scranstudios.itch.io/fartboy-flies-again">Play FartBoy Flies Again! on itch.io</a>
        </iframe>
      </Container>
    </section>
  )
}
