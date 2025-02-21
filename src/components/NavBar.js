import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleNavClick = (section) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand as={Link} to="/">
            <h1 style={{color: 'white'}}>FartBoy</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={Link} to="/" className={activeLink === 'tokenomics' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('tokenomics')}>Tokenomics</Nav.Link>
              <Nav.Link as={Link} to="/" className={activeLink === 'stories' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('stories')}>Stories</Nav.Link>
              <Nav.Link as={Link} to="/" className={activeLink === 'chart' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('chart')}>Chart</Nav.Link>
              <Nav.Link as={Link} to="/" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('footer')}>How to buy</Nav.Link> */}
              <Nav.Link as={Link} to="/game" className={`${activeLink === 'game' ? 'active navbar-link' : 'navbar-link'} rainbow-text`} onClick={() => onUpdateActiveLink('game')}>Game</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://x.com/FARTBOY_CTO"><img src={navIcon2} alt="X" /></a>
                <a href="https://t.me/iamfartboy"><img src={navIcon1} alt="Fartboy" /></a>
                <a href="discord.gg/coinskid"><img src={navIcon4} alt="Discord" /></a>
                <a href="https://promote.mexc.com/r/kxNhCFTY"><img src={navIcon5} alt="MEXC" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Fart</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
