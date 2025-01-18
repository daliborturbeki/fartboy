import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
    },
    {
      title: "Ready, Aim, Fart!",
      // description: "Design & Development",
      imgUrl: fartboy_2,
    },
    {
      title: "Enter The Spewtank",
      // description: "Design & Development",
      imgUrl: fartboy_3,
    },
    {
      title: "Let It Rip!",
      // description: "Design & Development",
      imgUrl: fartboy_4,
    },
    {
      title: "Bottom Burp Battle",
      // description: "Design & Development",
      imgUrl: fartboy_5,
    },
    {
      title: "Booger Butt Boogie",
      // description: "Design & Development",
      imgUrl: fartboy_6,
    },
    {
      title: "Toenails of Terror",
      // description: "Design & Development",
      imgUrl: fartboy_7,
    },
    {
      title: "Bin Juice of Destiny",
      // description: "Design & Development",
      imgUrl: fartboy_8,
    },
    {
      title: "Back to The Farture",
      // description: "Design & Development",
      imgUrl: fartboy_9,
    },
  ];

  return (
    <section className="project" id="stories">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Stories</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="stories-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          stories.map((project, index) => {
                            return (
                              <StoryCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
