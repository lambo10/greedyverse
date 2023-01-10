import './home.css';
import './home2.css';
import './brandsBanner.css';
import unity from '../img/banner_unity.png';
import trustWallet from '../img/banner_TrustWallet.jpg';
import metamask from '../img/banner_metamask.jpg';
import dex from '../img/banner_dex.png';
import coinMarketCap from '../img/banner_coinMarketCap.png';
import coinGecko from '../img/banner_coinGecko.jpg';
import bsc from '../img/banner_bsc.jpg';
import aws from '../img/banner_aws.png';
const BrandsBanner = () => {
    return(
        <div className='lb_banner'>

        <div className="photobanner">
            <a href='https://unity.com/' target='_blank'><img className="first" src={unity} alt="" /></a>
            <a href='https://trustwallet.com/' target='_blank'><img src={trustWallet} alt="" /></a>
            <a href='https://metamask.io/' target='_blank'><img src={metamask} alt="" /></a>
            <a href='https://www.dextools.io/app/en' target='_blank'><img src={dex} alt="" /></a>
            <a href='https://coinmarketcap.com/' target='_blank'><img src={coinMarketCap} alt="" /></a>
            <a href='https://www.coingecko.com/' target='_blank'><img src={coinGecko} alt="" /></a>
            <a href='https://www.bnbchain.org/en' target='_blank'><img src={bsc} alt="" /></a>
            <a href='https://aws.amazon.com/' target='_blank'><img src={aws} alt="" /></a>
        </div>
    </div>
    )
}
export default BrandsBanner;