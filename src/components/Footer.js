import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import colorSharp from "../assets/img/color-sharp.png"

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
      <Row className="align-items-center">
           <Col size={12}>
            <h2 style={{color: 'white'}}>How to Buy FARTBOY Tokens</h2>
            <br />
            <ol style={{color: 'white'}}>
              <li>
                <strong>Install and Set Up Phantom Wallet:</strong>
                <p>If you haven't already, download the Phantom Wallet extension for your browser or install the mobile app.</p>
                <p>Create a new wallet and securely back up your recovery phrase.</p>
              </li>
              <li>
                <strong>Fund Your Wallet with SOL:</strong>
                <p>Acquire Solana's native token, SOL, through a reputable cryptocurrency exchange or with your Phantom wallet using <i>Google Pay/Moonpay/Credit Card/Paypal/Transak</i>.</p>
                <p>Transfer the purchased SOL to your Phantom Wallet by copying your wallet's public address and using it as the destination in your exchange's withdrawal process.</p> 
                <p>Alternatively, you can purchase SOL directly within the Phantom Wallet using integrated services like MoonPay, Robinhood, or Coinbase Pay.</p>
              </li>
              <li>
                <strong>Access a Decentralized Exchange (DEX):</strong>
                <p>Navigate to a Solana-compatible DEX such as Raydium.</p>
                <p>Ensure your Phantom Wallet is connected to the DEX platform.</p>
              </li>
              <li>
                <strong>Swap SOL for FARTBOY Tokens:</strong>
                <p>On the DEX interface, select SOL as the token you want to swap.</p>
                <p>Enter the official FARTBOY token address to ensure accuracy: <b>y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump</b>.</p>
                <p>Specify the amount of SOL you wish to exchange for FARTBOY tokens.</p>
                <p>Review the transaction details, including the exchange rate and any associated fees.</p>
                <p>Confirm the swap to execute the transaction.</p>
              </li>
              <li>
                <strong>Verify the Transaction:</strong>
                <p>After the transaction is processed, check your Phantom Wallet to ensure the FARTBOY tokens have been successfully added to your balance.</p>
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
              <a href="https://x.com/FARTBOY_CTO"><img src={navIcon2} alt="X" /></a>
              <a href="https://t.me/iamfartboy"><img src={navIcon1} alt="Telegram" /></a>
              <a href="discord.gg/coinskid"><img src={navIcon4} alt="Discord" /></a>
              <a href="https://promote.mexc.com/a/PshctDoI"><img src={navIcon5} alt="MEXC" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left-68" src={colorSharp} alt="Blur" />
    </footer>
  )
}
