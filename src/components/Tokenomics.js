import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Tokenomics = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="tokenomics" id="tokenomics">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tokenomics-bx wow zoomIn">
                    <h3 className="tokenomics-address">CA - y1AZt42vceCmStjW4zetK3VoNarC1VxJ5iDjpiupump</h3>
                        <br />
                        <h2>Tokenomics</h2>
                        <p>FartBoy is backed by an active and passionate community of fans and crypto enthusiasts, offering opportunities to engage in exclusive events, challenges, and creative collaborations.</p>
                        {/* hide buttons next and previous */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme tokenomics-slider" showDots={false} arrows={false}>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>LIQUIDITY LOCKED</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5>LIMITED SUPPLY</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>COMMUNITY CLAIMED</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Blur" />
    </section>
  )
}
