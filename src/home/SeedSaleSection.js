import "./home.css";
import "./home2.css";
import game_logo from "../img/gameLogo.png";
import img_app_store_btn_g from "../img/app-store-btn-bg.ce495d2.svg";
import img_play_store_btn_bg from "../img/play-store-btn-bg.18b9bcd.svg";
import { Link } from "react-router-dom";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import styled from "styled-components";
import TransactionDetails from "../components/presale/transactionDetails/TransactionDetails";
import React, { useState,useEffect } from "react";
import {ethers} from "ethers";

import SignClient from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";

const SeedSaleSection = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false); 
  const [sessions, setSessions] = useState([]); 
  const [accounts, setAccounts] = useState([]); 
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
    margin: "5px",
    transform: "translateY(-10px)",
  };

  const [signClient, setSignClient] = useState(false); 

const web3modal = new Web3Modal({
    projectId: process.env.WalletConnectProjetID,
    standaloneChains: ["eip555:5"]
})

function onSessionConnect(session){
    if(!session) throw Error("Cannot connect. Sign session is not created");
    try{
        setIsWalletConnected(true);
        setSessions(session);
        setAccounts(session.namespaces.eip155.accounts[0].slice(9))
    }catch(e){
        console.log(e);
    }
    
}

  async function createClient(){
      try{
          const client = await SignClient.init({
              projectId: process.env.WalletConnectProjetID
          })
          console.log('client',client);
      }catch(e){
          console.log(e);
      }
  }

  async function handleconnect(){
    if(!signClient) throw Error("Cannot connect. Sign Client is not created");
    try{
        const proposalNameSpace = {
            eip155:{
                chains: ["eip155:5"],
                methods: ["eth_sendTransaction"],
                events: ["connect","disconnect"]
            }
        };

        const { uri, approval } = await signClient.connect({
            requiredNamespaces: proposalNameSpace
        });

        console.log(uri);

        if(uri){
            web3modal.openModal({uri});
            const sessionNameSpace = await approval();
            onSessionConnect(sessionNameSpace);
            web3modal.closeModal();
        }

    }catch(e){
        console.log(e);
    }
  }

useEffect(() => {
      if(!signClient){
          createClient();
      }
  }, [signClient]);

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
              className="lb_sale1_section supercellmagic_font text-uppercase text-white mb-xl-0 "
              data-v-2a374f33=""
            >
              <span className="text-yellow ">GreedyVerse</span> is an innovative
              gamefi project building the next generation of Play-to-earn games
              that are fun and immersive, starting with GREEDY CLANS - A
              multiplayer real-time battle strategy game built on the blockchain
              where players can build, battle, earn and connect. Our <a className="lb_txt_orange lb_remove_text_decoration" href="https://greedyverse.gitbook.io/white-paper/introduction/problems-with-crypto-games-and-our-solutions">SOLUTIONS</a>.
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
              <a href="#" target="_blank" data-v-2a374f33="">
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
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">SeedSale</span>
          </div>
          <div className="lb_txt_size_12 lb_padding_top_15 lb_txt_color_orange2">
          Buy any amount with USDT (min. 50 USDT)
          </div>
         
          <div className="lb_padding_top_5 lb_txt_color_white_only">
          Buy 0.2 BNB in tokens to earn 1 NFT
          </div>
          <div className="lb_padding_top_15">
          {!isWalletConnected && (
          <a id="connect" onClick={() => handleconnect()} className="lb_connect_wallet_txt lb_remove_text_decoration lb_cusor_pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
                    &nbsp; Connect Wallet
            </a>
          )}
          {isWalletConnected && (
            <div><div className="lb_txt_color_white_only">Wallet Address</div><div className="lb_txt_color_lightGreen">{accounts}</div><div><button onClick={() => setIsWalletConnected(false)} className="lb_logout_btn">Change Wallet</button></div></div>
          )}
          </div>
          <div className="lb_padding_top_10">
            <div className="lb_txt_color_white_only">
            Select Currency
            </div>
       <div>
       <select className="lb_select_currency" id="selectCurrency">
            <option>USDT</option>
            <option>ETH</option>
            <option>BUSD</option>
            <option>BNB</option>
          </select>
       </div>
          </div>
          <div className="lb_padding_top_15">
            <input className="lb_sales_amount_input lb_sales_amount_input_border" type="text" placeholder="Eg: 1000"/>
          </div>

          <div className="lb_padding_top_5 lb_txt_color_lightGreen">
          <div className="">You bought: 100000000000 $GVERSE</div>
          </div>

          <div className="lb_padding_top_15">
              {" "}
              <Link to="/presale">
                <div className="lb_saleBTN lb_game_logo">Buy now</div>
              </Link>
          </div>
          <div className="lb_txt_size_12 lb_padding_top_15 lb_txt_color_orange2">
          15,051,423 tokens sold
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
              className="lb_sale1_section supercellmagic_font text-uppercase text-white mb-xl-0 "
              data-v-2a374f33=""
            >
              <span className="text-yellow ">GreedyVerse</span> is an innovative
              gamefi project building the next generation of Play-to-earn games
              that are fun and immersive, starting with GREEDY CLANS - A
              multiplayer real-time battle strategy game built on the blockchain
              where players can build, battle, earn and connect. Our <a className="lb_txt_orange lb_remove_text_decoration" href="https://greedyverse.gitbook.io/white-paper/introduction/problems-with-crypto-games-and-our-solutions">SOLUTIONS</a>.
             </div>
          </div>
          <a href="https://greedyverse.gitbook.io/white-paper">
            <div className="lb_whitePaper lb_game_logo lb_txt_orange">whitepaper</div>
          </a>
          <br />
          <div>
            <button className="play-store-btn d-md-inline" data-v-2a374f33="">
              <a href="#" target="_blank" data-v-2a374f33="">
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
export default SeedSaleSection;
