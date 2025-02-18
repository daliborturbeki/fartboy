import { useState } from "react";
import { Container } from "react-bootstrap";
import 'animate.css';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Chart = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/chart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="chart" id="connect">
      <Container>
        <div className="DexScreenerEmbed">
          <style>
            {`
              #dexscreener-embed {
                position: relative;
                width: 100%;
                padding-bottom: 125%;
              }
              @media (min-width: 1400px) {
                #dexscreener-embed {
                  padding-bottom: 65%;
                }
              }
              #dexscreener-embed iframe {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border: 0;
              }
            `}
          </style>
          <div id="dexscreener-embed">
            <iframe
              src="https://dexscreener.com/solana/DhHVd5s4hqBGnTkFztsK98WGPtYUJjpUCqNnWaNLWb4F?embed=1&loadChartSettings=0&trades=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              title="Dexscreener Embed"
            ></iframe>
          </div>
        </div>
      </Container>
      <img className="background-image-right-60" src={colorSharp2}></img>
    </section>
  )
}
