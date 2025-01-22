import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fartboy from "../assets/img/fartboy_1on1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Hi, I am FartBoy" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Fart me to the moon</span>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Hi! I am FartBoy" ]'><span className="wrap">{text}</span></span></h1>
                  <p>From Comic Book Hero to Crypto Icon: Ride the Wind with Fartboy!</p>
                  <p>Straight from the explosive pages of the beloved Fartboy comic book, this token is more than just fun—it’s a breath of fresh air in the crypto world. Backed by a passionate community of over 100,000 members, Fartboy is taking off faster than you can say “silent but deadly.”</p>
                  <p>In just two days, we’ve gained 2,000+ followers and are already making waves with top exchanges for global listings. Our journey hasn’t been without challenges, but like our hero, we’ve proven unstoppable. The charts don’t lie—Fartboy has made an epic comeback!</p>
                  <p>Now is your chance to grab hold of this wind-powered project on the Solana network. Don’t let this opportunity blow by—join the Fartboy movement today!</p>
                  <button onClick={() => window.open("https://dexscreener.com/solana/dhhvd5s4hqbgntkfztsk98wgptyujjpucqnnwanlwb4f?maker=BvsKaN2WZhFWjqErg8kpkGbsvGr2UeAo3QrTSiTZuTM6", "_blank")}>Let’s Fart <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={fartboy} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
