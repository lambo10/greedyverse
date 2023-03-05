import "./home.css";
import "./home2.css";
import img_2cbba69 from "../img/unity.2cbba69.png";
import img_72fadf4 from "../img/Rating.72fadf4.jpeg";
import binance_logo from "../img/binance-smart-chain-bsc-logo.png";
import aws_logo from "../img/aws_logo.png";
import coinmarketcapwhite from "../img/coinmarketcap-white.png";
import unityLogoHorizontal from "../img/Unity-Logo-White_horizontal.png";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import LogoImg from "../img/greedyverseLogo.png";

const Footer = () => {
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
  };
  return (
    // <div
    //   className="container-fluid footer bg-black-1 lb_padding_top10 lb_footer"
    //   data-v-0f1be33d=""
    // >
    //   <div
    //     className="row g-0 mt-auto d-flex justify-content-between p-t-180 bg-black-1 px-4 pb-4"
    //     data-v-0f1be33d=""
    //   >
    //     <div
    //       className="d-flex flex-wrap justify-content-between"
    //       data-v-0f1be33d=""
    //     >
    //       <div className="col-12 flex-wrap d-flex gap-4" data-v-0f1be33d="">
    //       <a href="https://t.me/GreedyVerse_Portal" target="_blank">
    //           <BsTelegram style={iconStyling} />
    //         </a>
    //         <a
    //           href="https://www.twitter.com/GreedyVerse"
    //           target="_blank"
    //           data-v-0f1be33d=""
    //         >
    //           <div className="twitter-logo" data-v-0f1be33d=""></div>
    //         </a>{" "}
    //         <a
    //           href="https://discord.gg/hvPDgZbEGY"
    //           target="_blank"
    //           data-v-0f1be33d=""
    //         >
    //           <div className="discord-logo" data-v-0f1be33d=""></div>
    //         </a>{" "}
    //         <a
    //           href="https://www.instagram.com/GreedyVerse/"
    //           target="_blank"
    //           data-v-0f1be33d=""
    //         >
    //           <div className="instagram-logo" data-v-0f1be33d=""></div>
    //         </a>{" "}
            
    //         <a href="https://medium.com/@greedyverseproject" target="_blank">
    //           <AiFillMediumCircle style={iconStyling} />
    //         </a>
            
    //         <a href="mailto:support@greedyverse.co" target="_blank" data-v-0f1be33d="">
    //           <div className="email-logo" data-v-0f1be33d=""></div>
    //         </a>

    //       </div>
    //       <div className="col-12 col-lg-7" data-v-0f1be33d="">
    //         <div className="col-12" data-v-0f1be33d="">
    //           <span className="text-white" data-v-0f1be33d="">
    //             {" "}
    //             ©2023, Greedyverse.{" "}
    //           </span>
    //         </div>{" "}
    //         <div className="col-12 lb_txt_only_color_white" data-v-0f1be33d="">
    //           <span className="lb_txt_only_color_white" data-v-0f1be33d="">
    //             This game requires an internet connection to play. Offers in-app
    //             purchases.
    //           </span>
    //         </div>{" "}
    //         <div className="col-12 d-none d-lg-block" data-v-0f1be33d="">
    //           <div
    //             className="d-inline-block lb_txt_only_color_white"
    //             data-v-0f1be33d=""
    //           >
    //             {/* <a
    //               href="/privacy-policy"
    //               className="lb_txt_only_color_white link-light"
    //               data-v-0f1be33d=""
    //             >
    //               Privacy Policy
    //             </a> */}
    //           </div>{" "}
    //           <div
    //             className="d-inline-block lb_txt_only_color_white"
    //             data-v-0f1be33d=""
    //           >
    //             {/* <a
    //               href="/terms-of-use"
    //               className="lb_txt_only_color_white link-light"
    //               data-v-0f1be33d=""
    //             >
    //               Terms Of Use
    //             </a> */}
    //           </div>{" "}
    //           <div
    //             className="d-inline-block lb_txt_only_color_white"
    //             data-v-0f1be33d=""
    //           >
    //             <a
    //               href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Greedyverse_0x6F...2672_Audit.pdf"
    //               target="_blank"
    //               className="lb_txt_only_color_white link-light"
    //               data-v-0f1be33d=""
    //             >
    //               Security Audit
    //             </a>
    //           </div>{" "}
    //           <div
    //             className="d-inline-block lb_txt_only_color_white"
    //             data-v-0f1be33d=""
    //           >
    //             <span className="lb_txt_only_color_white" data-v-0f1be33d="">
    //               <a
    //                href="mailto:support@greedyverse.co"
    //                 className="lb_txt_only_color_white link-light"
    //                 data-v-0f1be33d=""
    //               >
    //                 Contact Us
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>{" "}
    //       <div
    //         className="col-12 col-lg-5 lb_txt_only_color_white"
    //         data-v-0f1be33d=""
    //       >
    //         <div className="row pt-4" data-v-0f1be33d="">
    //           <div
    //             className="col-5 d-block d-lg-none d-flex align-items-center flex-wrap"
    //             data-v-0f1be33d=""
    //           >
    //             {/* <a
    //               href="/privacy-policy"
    //               className="lb_txt_only_color_white link-light"
    //               data-v-0f1be33d=""
    //             >
    //               Privacy Policy
    //             </a>
    //             &nbsp;
    //             <a
    //               href="/terms-of-use"
    //               className="lb_txt_only_color_white link-light "
    //               data-v-0f1be33d=""
    //             >
    //               Terms Of use
    //             </a> */}
    //             &nbsp;
    //             <a
    //               href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Greedyverse_0x6F...2672_Audit.pdf"
    //               target="_blank"
    //               className="lb_txt_only_color_white link-light"
    //               data-v-0f1be33d=""
    //             >
    //               Security Audit
    //             </a>
    //             &nbsp;
    //             <span className="lb_txt_only_color_white" data-v-0f1be33d="">
    //               <a
    //                 href="mailto:support@greedyverse.co"
    //                 className="lb_txt_only_color_white link-light"
    //                 data-v-0f1be33d=""
    //               >
    //                 Contact Us
    //               </a>
    //             </span>
    //           </div>{" "}
    //           <div className="col-7 col-xl-12 text-end" data-v-0f1be33d="">
    //             {" "}
    //             <img
    //               alt="esrb"
    //               src={img_72fadf4}
    //               className="img-fluid foot-img"
    //               data-v-0f1be33d=""
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    <div className="lb_txt_center bg-black-1 lb_padding_full20">
      <div className="lb_game_logo lb_txt_only_color_white lb_txt_size_40">
      <b>Join Our Community</b>
      </div>
      <div className="lb_lambert_will_be_successful">

      <a href="https://t.me/GreedyVerse_Portal" target="_blank">
             <BsTelegram style={iconStyling} />
           </a>
             <a
              href="https://www.twitter.com/GreedyVerse"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="twitter-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            <a
              href="https://discord.gg/hvPDgZbEGY"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="discord-logo" data-v-0f1be33d=""></div>
            </a>{" "}

            <a
              href="https://www.instagram.com/GreedyVerse/"
              target="_blank"
              data-v-0f1be33d=""
            >
              <div className="instagram-logo" data-v-0f1be33d=""></div>
            </a>{" "}
            
            <a href="https://medium.com/@greedyverseproject" target="_blank">
              <AiFillMediumCircle style={iconStyling} />
            </a>
            
            <a href="mailto:support@greedyverse.co" target="_blank" data-v-0f1be33d="">
              <div className="email-logo" data-v-0f1be33d=""></div>
            </a>
            


      </div>
      <div className="lb_txt_center">
      <div className="lb_lambert_will_be_successful_round_b_d lb_footer_sections_width lb_game_logo">
      Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profit may be subject to capital gains or other taxes application in your jurisdiction
      </div>
      </div>
      <div className="lb_line_grey"></div>
      <div className="lb_txt_center">
        <div className="lb_game_logo lb_footer_sections_width">
        <div className="row lb_txt_left">
        <div className="col-md-5">
          <div className="lb_margin_bottom_13">
            <img src={LogoImg} width={250} height={37} />
          </div>

          <div className="lb_txt_color_grey">
          <div>
          RENQ LIMITED
          </div>
          <div>
          Registration Number: 213559
          </div>
          <div>
          Mahe, Seychelles
          </div>
          </div>
          <br/>
          <div>
            <span className="lb_txt_color_grey">Email Us: </span><a href="mailto:support@greedyverse.co" className="lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover lb_remove_text_decoration">support@greedyverse.co</a>
          </div>

        </div>

        <div className="col-md-3 lb_footerOtherCl">
          <div className="lb_margin_bottom_13 lb_txt_size_20 lb_txt_orange">
            <b>Resources</b>
          </div>

          <div className="">
          <div className="lb_margin_bottom_13">
          <a href="mailto:support@greedyverse.co" className="lb_remove_text_decoration lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover">Contact Us</a>
          </div>
          <div className="lb_margin_bottom_13">
          <a href="https://t.me/GreedyVerse_Support" className="lb_remove_text_decoration lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover">New To Crypto</a>
          </div>
          <div className="lb_margin_bottom_13">
          <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Greedyverse_0x6F...2672_Audit.pdf" className="lb_remove_text_decoration lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover">Audit</a>
          </div>
          </div>

        </div>

        <div className="col-md-3 lb_footerOtherCl">
          <div className="lb_margin_bottom_13 lb_txt_size_20 lb_txt_orange">
            <b>Agreements</b>
          </div>

          <div className="">
          <div className="lb_margin_bottom_13">
          <a href="https://greedyverse.gitbook.io/white-paper/other-links/terms-and-conditions" className="lb_remove_text_decoration lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover">Terms & Conditions</a>
          </div>
          <div className="lb_margin_bottom_13">
          <a href="https://greedyverse.gitbook.io/white-paper/other-links/privacy-policy" className="lb_remove_text_decoration lb_txt_only_color_white lb_txt_only_color_greyOrange_onHover">Privacy</a>
          </div>
          </div>

        </div>

        
      </div>
        </div>
      </div>
      <br/>
      <div className="lb_txt_center">
        <div className="lb_game_logo lb_footer_sections_width lb_padding_full20">
          <p><span className="lb_txt_color_grey">Copyright © 2023 -</span> <a href="./" className="lb_txt_only_color_white lb_remove_text_decoration">Greedyverse</a> <span className="lb_txt_color_grey">All Rights Reserved.</span></p>
          </div>
          </div>
    </div>
  );
};
export default Footer;
