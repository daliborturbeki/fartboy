import { Container, Row, Col, Tab } from "react-bootstrap";
import { StoryCard } from "./StoryCard";
import fartboy_1 from "../assets/img/fartboy_1.jpg";
import fartboy_2 from "../assets/img/fartboy_2.png";
import fartboy_3 from "../assets/img/fartboy_3.bmp";
import fartboy_4 from "../assets/img/fartboy_4.jpg";
import fartboy_5 from "../assets/img/fartboy_5.jpg";
import fartboy_6 from "../assets/img/fartboy_6.jpg";
import fartboy_7 from "../assets/img/fartboy_7.jpg";
import fartboy_8 from "../assets/img/fartboy_8.jpg";
import fartboy_9 from "../assets/img/fartboy_9.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Stories = () => {

  const stories = [
    {
      title: "The First Sniff",
      // description: "Design & Development",
      imgUrl: fartboy_1,
      alt: "The First Sniff"
    },
    {
      title: "Ready, Aim, Fart!",
      // description: "Design & Development",
      imgUrl: fartboy_2,
      alt: "Ready, Aim, Fart!"
    },
    {
      title: "Enter The Spewtank",
      // description: "Design & Development",
      imgUrl: fartboy_3,
      alt: "Enter The Spewtank"
    },
    {
      title: "Let It Rip!",
      // description: "Design & Development",
      imgUrl: fartboy_4,
      alt: "Let It Rip!"
    },
    {
      title: "Bottom Burp Battle",
      // description: "Design & Development",
      imgUrl: fartboy_5,
      alt: "Bottom Burp Battle"
    },
    {
      title: "Booger Butt Boogie",
      // description: "Design & Development",
      imgUrl: fartboy_6,
      alt: "Booger Butt Boogie"
    },
    {
      title: "Toenails of Terror",
      // description: "Design & Development",
      imgUrl: fartboy_7,
      alt: "Toenails of Terror"
    },
    {
      title: "Bin Juice of Destiny",
      // description: "Design & Development",
      imgUrl: fartboy_8,
      alt: "Bin Juice of Destiny"
    },
    {
      title: "Back to The Farture",
      // description: "Design & Development",
      imgUrl: fartboy_9,
      alt: "Back to The Farture"
    },
  ];
  
  return (
    <>
      <section className="story" id="stories">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {
                  ({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Stories</h2>
                        <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Row>
                              {
                                stories.map((story, index) => {
                                  return (
                                    <StoryCard key={index} {...story} />
                                  )
                                })
                              }
                            </Row>
                        </div>
                    </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <img className="background-image-right" src={colorSharp2} alt="blur"></img>
    </>
  )
}
