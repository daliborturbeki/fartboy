import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon4 from '../assets/img/nav-icon4.svg'
import navIcon5 from '../assets/img/nav-icon5.svg'
import colorSharp from "../assets/img/color-sharp.png"

export const Footer = () => {
  const [activeKey, setActiveKey] = useState('first')

  return (
    <footer className="footer" id="footer">
      <section>
        <Container>
          <Row>
            <Col size={12}>
              <h2 className='mb-5'>How to buy FARTBOY?</h2>
              <Tab.Container id="footers-tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className={activeKey === 'first' ? 'first-tab' : ''}>MEXC</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className={activeKey === 'second' ? 'second-tab' : ''}>Using DEX</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row> 
                      <Col size={12}>
                        <ol style={{color: 'white'}}>
                          <li>
                            <strong>Create an Account on MEXC:</strong>
                            <p>If you don't already have an account, go to the MEXC website or download the mobile app.</p>
                            <p>Click "Sign Up" and complete the registration process by providing your email, creating a password, and verifying your identity if required.</p>
                          </li>
                          <li>
                            <strong>Deposit Funds into Your MEXC Account:</strong>
                            <p>Log in to your MEXC account and navigate to the "Wallet" section.</p>
                            <p>Select "Deposit" and choose the cryptocurrency you wish to deposit (e.g., USDT).</p>
                            <p>Copy the deposit address and transfer funds from your external wallet or another exchange.</p>
                          </li>
                          <li>
                            <strong>Find the FARTBOY Trading Pair:</strong>
                            <p>Go to the "Trade" section on MEXC and select "Spot Trading."</p>
                            <p>In the search bar, type "FARTBOY" to find the FARTBOY/USDT trading pair.</p>
                          </li>
                          <li>
                            <strong>Buy FARTBOY Tokens:</strong>
                            <p>On the trading interface, ensure you have selected the correct trading pair (FARTBOY/USDT).</p>
                            <p>Choose the type of order (Limit, Market, or Stop-Limit).</p>
                            <p>Enter the amount of USDT you wish to spend or the number of FARTBOY tokens you want to purchase.</p>
                            <p>Click "Buy" to execute the trade.</p>
                          </li>
                          <li>
                            <strong>Verify Your Purchase:</strong>
                            <p>Once the transaction is complete, go to "Wallet" and select "Spot Wallet" to confirm that your FARTBOY tokens have been successfully added to your balance.</p>
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row> 
                      <Col size={12}>
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
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <>
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
                </>
              </Col>
            </Row>
          </Container>
        </section>
      <img className="background-image-left-68" src={colorSharp} alt="Blur" />
    </footer>
  )
}