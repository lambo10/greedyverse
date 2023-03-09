import "./home.css";
import "./home2.css";
import game_logo from "../img/gameLogo.png";
import img_app_store_btn_g from "../img/app-store-btn-bg.ce495d2.svg";
import img_play_store_btn_bg from "../img/play-store-btn-bg.18b9bcd.svg";
import getAPK from "../img/getAPK.png";
import pinkSale from "../img/pinksale-white.png";
import { Link } from "react-router-dom";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import styled from "styled-components";

const PrivateSaleSection = () => {
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
    margin: "5px",
    transform: "translateY(-10px)",
  };
  const privateSaleNotStarted = true;
  return (
    // <div className="container-fluid lb_hero_bg" data-v-2a374f33="">
    <div
      className="row  p-3 lb_sale_section_padding lb_hero_bg padding_on_mobile"
      data-v-2a374f33=""
      style={{
        height: "auto",
      }}
    >
    
    <div
        className="col-lg-6 lb_txt_center disapear_on_mobile"
        data-v-2a374f33=""
      >

        
        <div className="blackColor ml-2" data-v-2a374f33="">
          <img
            src={game_logo}
            alt="greedyclans logo"
            className="lb_game_logo_img lb_game_logo"
          />
          <div className="lb_padding20">
            <div
              className="lb_sale1_section text-white mb-xl-0 "
              data-v-2a374f33=""
            >

              {/* <span className="text-yellow ">GreedyVerse</span> is an innovative
              gamefi project building the next generation of Play-to-earn games
              that are fun and immersive, starting with GREEDY CLANS - A
              multiplayer real-time battle strategy game built on the blockchain
              where players can build, battle, earn and connect. Our <a className="lb_txt_orange lb_remove_text_decoration" href="https://greedyverse.gitbook.io/white-paper/introduction/problems-with-crypto-games-and-our-solutions">SOLUTIONS</a>.
             */}

             <div className="supercellmagic_font text-uppercase text-white lb_txt_size_20">
             BUILDING THE WORLD’S LARGEST COLLECTION OF FUN PLAY-TO-EARN GAMES.
             </div>
             <br/>
             <div className="">
                  Backed by the PixelDat Studio, <span className="text-yellow ">GreedyVerse</span> is building the world’s largest collection of fun and immersive play-to-earn games powered by the <span className="text-yellow ">GVERSE token</span>, starting with the Greedy Clans - a multiplayer real-time battle strategy game where players can build, battle, earn and connect. Invest in the future of Gamefi
             </div>
            
            </div>
          </div>
          <a href="https://greedyverse.gitbook.io/white-paper">
            <div className="lb_whitePaper lb_game_logo">whitepaper</div>
          </a>
          <br />
          <div>
            <button
              className="play-store-btn d-md-inline d-none"
              data-v-2a374f33=""
            >
              <a href="https://greedyverse.co/gameBuilds/GreedyClans.apk" target="_blank" data-v-2a374f33="">
                <img src={img_play_store_btn_bg} alt="" data-v-2a374f33="" />
              </a>
            </button>
            <button
              className="app-store-btn d-md-inline d-none"
              data-v-2a374f33=""
            >
              <a href="#" target="_blank" data-v-2a374f33="">
                <img src={img_app_store_btn_g} alt="" data-v-2a374f33="" />
              </a>
            </button>
          </div>
          <br />
          <div
            className="gap-4 lb_game_logo lb_padding_top_15"
            data-v-0f1be33d=""
          >
            <a href="https://t.me/GreedyVerse_Portal" target="_blank">
              <BsTelegram style={iconStyling} />
            </a>
            <a
              href="https://www.twitter.com/GreedyVerse"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="twitter-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            <a
              href="https://discord.gg/hvPDgZbEGY"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="discord-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            <a
              href="https://www.instagram.com/GreedyVerse/"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="instagram-logo" data-v-0f1be33d=""></div>
            </a>{" "}
          
            <a href="https://medium.com/@greedyverseproject" target="_blank">
              <AiFillMediumCircle style={iconStyling} />
            </a>

            <a
              href="mailto:support@greedyverse.co"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="email-logo" data-v-0f1be33d=""></div>
            </a>
            
          </div>
        </div>
      </div>

      <div className="col-lg-6 lb_txt_center" data-v-2a374f33="">
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_margin_0_onMob">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="gradient_txt_color">Private Sale</span>
          </div>
          <div className="lb_txt_size_15 lb_padding_top_10 lb_txt_orange supercellmagic_font">
            on
            </div>
            <div>
              <img src={pinkSale} width={300} height={70} />
            </div>

          <div className="lb_padding_top_10">

            <div className="lb_padding_top_10">
            {!privateSaleNotStarted && (
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrqMYAK-JmUATrA-vRi7sNh_YfgygxWKPwcVNAv9BDH1TM_w/viewform" className="lb_remove_text_decoration">
                <div className="lb_saleBTN lb_game_logo">Buy Now</div>
                </a>
            )}
             {privateSaleNotStarted && (
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrqMYAK-JmUATrA-vRi7sNh_YfgygxWKPwcVNAv9BDH1TM_w/viewform" className="lb_remove_text_decoration">
                <div className="lb_walletAddress lb_game_logo lb_txt_only_color_white lb_padding_top_5_important"><b>Join WhiteList</b></div>
                <br/><br/>
                </a>
            )}
            </div>

            <div className="lb_game_logo">
            <div className="lb_txt_only_color_white lb_txt_left lb_margin_bottom_20 lb_txt_size_12">
            <div className="lb_padding_top_10"><b>&#x2022; Buy 4X cheaper than launch price</b></div>
            <div className="lb_padding_top_10"><b>&#x2022; 1 Land NFT in the Greedy Clans Game</b></div>
            <div className="lb_padding_top_10"><b>&#x2022; Boosted APRs on staking pools</b></div>
            <div className="lb_padding_top_10"><b>&#x2022; Early Access to the 1st NFT drops</b></div>
            <div className="lb_padding_top_10"><b>&#x2022; Membership in the GreedyDAO</b></div>
            </div>
            </div>
              
            <div className="lb_txt_size_12 lb_padding_top_10 lb_txt_color_white2">
            Contact us via <a href="mailto:support@greedyverse.co" className="lb_remove_text_decoration lb_blue-gradient-text">support@greedyverse.co</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-lg-6 lb_txt_center disapear_on_desktop"
        data-v-2a374f33=""
      >
        <div className="blackColor ml-2" data-v-2a374f33="">
          <div className="lb_padding20">
            <div
              className="lb_sale1_section text-white mb-xl-0 "
              data-v-2a374f33=""
            >
              
              <div className="supercellmagic_font text-uppercase text-white lb_txt_size_20 lb_margin_bottom_13">
             BUILDING THE WORLD’S LARGEST COLLECTION OF FUN PLAY-TO-EARN GAMES.
             </div>
             
             <div className="">
                  Backed by the PixelDat Studio, <span className="text-yellow ">GreedyVerse</span> is building the world’s largest collection of fun and immersive play-to-earn games powered by the <span className="text-yellow ">GVERSE token</span>, starting with the Greedy Clans - a multiplayer real-time battle strategy game where players can build, battle, earn and connect. Invest in the future of Gamefi
             </div>

             </div>
          </div>
          <a href="https://greedyverse.gitbook.io/white-paper">
            <div className="lb_whitePaper lb_game_logo lb_txt_orange">whitepaper</div>
          </a>
          <br />
          <div>
            <button className="play-store-btn d-md-inline" data-v-2a374f33="">
              <a href="https://greedyverse.co/gameBuilds/GreedyClans.apk" target="_blank" data-v-2a374f33="">
                <img src={img_play_store_btn_bg} alt="" data-v-2a374f33="" />
              </a>
            </button>
            <button className="app-store-btn d-md-inline" data-v-2a374f33="">
              <a href="#" target="_blank" data-v-2a374f33="">
                <img src={img_app_store_btn_g} alt="" data-v-2a374f33="" />
              </a>
            </button>
          </div>

          <div
            className="gap-4 lb_game_logo lb_padding_top_15"
            data-v-0f1be33d=""
          >
             <a href="https://t.me/GreedyVerse_Portal" target="_blank">
              <BsTelegram
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#fff",
                  margin: "4px",
                  transform: "translateY(-10px)",
                }}
              />
            </a>

            <a
              href="https://www.twitter.com/GreedyVerse"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="twitter-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            <a
              href="https://discord.gg/hvPDgZbEGY"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="discord-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            <a
              href="https://www.instagram.com/GreedyVerse/"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="instagram-logo" data-v-0f1be33d=""></div>
            </a>{" "}
          
            <a href="https://medium.com/@greedyverseproject" target="_blank">
              <AiFillMediumCircle
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#fff",
                  margin: "4px",
                  transform: "translateY(-10px)",
                }}
              />
            </a>

            <a
              href="mailto:support@greedyverse.co"
              className="lb_game_logo"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="email-logo" data-v-0f1be33d=""></div>
            </a>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

const Sale = styled.div`
  @media only screen and (max-width: 568px) {
    margin-top: 5rem;
  }
`;
export default PrivateSaleSection;
