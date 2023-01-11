import "./home.css";
import "./home2.css";
import "./brandsBanner.css";
import unity from "../img/banner_unity.png";
import trustWallet from "../img/banner_TrustWallet.jpg";
import metamask from "../img/banner_metamask.jpg";
import dex from "../img/banner_dex.png";
import coinMarketCap from "../img/banner_coinMarketCap.png";
import coinGecko from "../img/banner_coinGecko.jpg";
import bsc from "../img/banner_bsc.jpg";
import aws from "../img/banner_aws.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandsBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
    <div className='slider_container'>
      <Slider {...settings}>
        <a href='https://unity.com/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={unity} alt='unit' className='image_main' />
          </div>
        </a>

        <a href='https://trustwallet.com/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={trustWallet} alt='trustWallet' className='image_main' />
          </div>
        </a>

        <a href='https://metamask.io/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={metamask} alt='metamask' className='image_main' />
          </div>
        </a>

        <a
          href='https://www.dextools.io/app/en'
          target='_blank'
          rel='noreferrer'
        >
          <div className='image_container'>
            <img src={dex} alt='dex' className='image_main' />
          </div>
        </a>

        <a href='https://coinmarketcap.com/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img
              src={coinMarketCap}
              alt='coinMarketCap'
              className='image_main'
            />
          </div>
        </a>

        <a href='https://www.coingecko.com/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={coinGecko} alt='coinGecko' className='image_main' />
          </div>
        </a>

        <a href='https://www.bnbchain.org/en' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={bsc} alt='bsc' className='image_main' />
          </div>
        </a>

        <a href='https://aws.amazon.com/' target='_blank' rel='noreferrer'>
          <div className='image_container'>
            <img src={aws} alt='aws' className='image_main' />
          </div>
        </a>
      </Slider>
    </div>
  );
};
export default BrandsBanner;
