import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      <Row className="align-items-center">
          <Col size={12}>
            <h2 style={{color: 'white'}}>How to Buy Farts</h2>
            <ol style={{color: 'white'}}>
              <li>
                <strong>Access DexScreener:</strong>
                <p>Visit <a href="https://dexscreener.com" style={{color: 'white'}}>dexscreener.com</a> through your browser or use the DexScreener app for easy access.</p>
              </li>
              <li>
                <strong>Search contract address:</strong>
                <p>Contact address is <b>y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump</b>. You can access it anytime via our website, X account, or join the Telegram group for quick updates.</p>
              </li>
              <li>
                <strong>Buy Farts:</strong>
                <p>To make a purchase, select the amount you'd like to buy, adjust your slippage settings, and click the <i>Buy</i> button. When you're ready to sell, follow the same steps but choose the red <i>Sell</i> button before confirming. However, I recommend holding off on selling for now! 👀</p>
              </li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <hr style={{borderTop: '1px solid white'}} />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{color: 'white'}}>FartBoy</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://x.com/FARTBOY_CTO"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://t.me/FARTBOYYCTO"><img src={navIcon1} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
