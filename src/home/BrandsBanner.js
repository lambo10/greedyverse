import "./home.css";
import "./home2.css";
import "./brandsBanner.css";
import unity from "../img/banner_unity.png";
import trustWallet from "../img/banner_TrustWallet.jpg";
import metamask from "../img/banner_metamask.jpg";
import dex from "../img/banner_dex.png";
import coinMarketCap from "../img/banner_coinMarketCap.png";
import coinGecko from "../img/banner_coinGecko.jpg";

import Insight from "../img/brands/insight.png";
import Coincheckup from "../img/brands/coincheckup.png";
import Yahoo from "../img/brands/yahoo.png";
import Coindesk from "../img/brands/coindesk.png";
import Cointelegraph from "../img/brands/cointelegraph.png";
import CoinSniper from "../img/brands/coinsniper.png";

import bsc from "../img/banner_bsc.jpg";
import aws from "../img/banner_aws.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandsBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider_container">
      <Slider {...settings}>
        <a href="https://www.analyticsinsight.net/" target="_blank" rel="noreferrer">
          <div className="image_container">
            <img src={Insight} alt="unit" className="image_main" />
          </div>
        </a>

        <a href="https://coincheckup.com/" target="_blank" rel="noreferrer">
          <div className="image_container">
            <img src={Coincheckup} alt="trustWallet" className="image_main" />
          </div>
        </a>

        <a href="https://finance.yahoo.com/" target="_blank" rel="noreferrer">
          <div className="image_container">
            <img src={Yahoo} alt="metamask" className="image_main" />
          </div>
        </a>

        <a
          href="https://www.coindesk.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="image_container">
            <img src={Coindesk} alt="dex" className="image_main" />
          </div>
        </a>

        <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">
          <div className="image_container">
            <img
              src={Cointelegraph}
              alt="coinMarketCap"
              className="image_main"
            />
          </div>
        </a>

        <a href="https://coinsniper.net/" target="_blank" rel="noreferrer">
          <div className="image_container">
            <img src={CoinSniper} alt="bsc" className="image_main" />
          </div>
        </a>
      </Slider>
    </div>
  );
};
export default BrandsBanner;
