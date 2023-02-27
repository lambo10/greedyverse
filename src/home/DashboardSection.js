import "./home.css";
import "./home2.css";
import game_logo from "../img/gameLogo.png";
import img_app_store_btn_g from "../img/app-store-btn-bg.ce495d2.svg";
import img_play_store_btn_bg from "../img/play-store-btn-bg.18b9bcd.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState,useEffect } from "react";
import {ethers} from "ethers";
import Nav from "../Layout/Nav";


const DashboardSection = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isInCorrectNetwork, setIsInCorrectNetwork] = useState(false);
  const [account, setAccount] = useState(null); 

  async function handleconnect(){
    if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'}).then(result => {
            setAccount(result[0]);
            setIsWalletConnected(true);
        });
    }else{
        setIsWalletConnected(false);
    }
  }

  return (
    <div
    style={{
      overflowX: "hidden",
    }}
  >
    <Nav />

    <div
      className="row  p-3 lb_sale_section_padding lb_hero_bg_dashboard padding_on_mobile"
      data-v-2a374f33=""
      style={{
        height: "auto",
      }}
    >
    
    {/* <div className="col-lg-6 lb_txt_right" data-v-2a374f33="">
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_txt_center">
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
    
      <div className="col-lg-6 lb_txt_left" data-v-2a374f33="">
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_txt_center">
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
      </div> */}

{/*     
<div className="col-lg-12 lb_txt_center lb_single_panel" data-v-2a374f33="">
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_txt_center">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">SeedSale</span>
          </div>
          <div className="lb_txt_size_15 lb_padding_top_15 lb_txt_color_orange2">
          500000000 $GVERSE
          </div>
          <br/>
          <div className="lb_txt_only_color_white">Please Note that your tokens would be available for claim at lunch</div>
          <div className="lb_txt_color_white_only lb_txt_center">
            <div className="lb_dashboard_claim_divs">
                <div className="lb_claim_div"><span className="amount">450000000</span></div><div className="lb_claim_div">60%</div><div className="lb_claim_div"><div className="lb_claimBTN lb_game_logo">Claim</div></div>
            </div>
            <div className="lb_dashboard_claim_divs">
                <div className="lb_claim_div"><span className="amount">450000000</span></div><div className="lb_claim_div">10%</div><div className="lb_claim_div"><div className="lb_claimBTN lb_game_logo">Claim</div></div>
            </div>
            <div className="lb_dashboard_claim_divs">
                <div className="lb_claim_div"><span className="amount">450000000</span></div><div className="lb_claim_div">10%</div><div className="lb_claim_div"><div className="lb_claimBTN lb_game_logo">Claim</div></div>
            </div>
            <div className="lb_dashboard_claim_divs">
                <div className="lb_claim_div"><span className="amount">450000000</span></div><div className="lb_claim_div">10%</div><div className="lb_claim_div"><div className="lb_claimBTN lb_game_logo">Claim</div></div>
            </div>
            <div className="lb_dashboard_claim_divs">
                <div className="lb_claim_div"><span className="amount">450000000</span></div><div className="lb_claim_div">10%</div><div className="lb_claim_div"><div className="lb_claimBTN lb_game_logo">Claim</div></div>
            </div>
            </div>


        </div>
      </div> */}



    
<div className="col-lg-12 lb_txt_center lb_single_panel" data-v-2a374f33="">
<div className="lb_width_100P lb_txt_center">
<div className="blackColor lb_width_60Mob_60Dex lb_game_logo" data-v-2a374f33="">
                           
                            {!isWalletConnected && (
           <button onClick={() => handleconnect()} className="apes-btn-primary blackColor" data-v-2a374f33=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
           &nbsp;Connect</button>
          )}
          {isWalletConnected && (
            <div><div className="lb_txt_color_white_only">Wallet Address</div><div className="lb_txt_size_20 lb_txt_color_lightGreen"><b>{account.slice(0,4)+"..."+account.slice((account.length-4),account.length)}</b></div><div><button onClick={() => setIsWalletConnected(false)} className="lb_logout_btn">Disconnect</button></div></div>
          )}
                        </div>
</div>
<br/>
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_txt_center">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">SeedSale</span>
          </div>
          <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
          <b>Total $GVERSE</b>
          </div>
          <div className="lb_txt_color_white_only lb_txt_center lb_padding_top_10">
          <input type="number" name="claimableAmount" placeholder="0.00" class="lb_portal__input" disabled />
          </div>
          <br/>
          <div className="lb_dashboard_note_txt">
            <span className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 -0.00109863C4.48 -0.00109863 0 4.4789 0 9.9989C0 15.5189 4.48 19.9989 10 19.9989C15.52 19.9989 20 15.5189 20 9.9989C20 4.4789 15.52 -0.00109863 10 -0.00109863ZM10 14.9989C9.45 14.9989 9 14.5489 9 13.9989V9.9989C9 9.4489 9.45 8.9989 10 8.9989C10.55 8.9989 11 9.4489 11 9.9989V13.9989C11 14.5489 10.55 14.9989 10 14.9989ZM11 6.9989H9V4.9989H11V6.9989Z" fill="currentColor"></path></svg> </span>
             <b>Please Note that your tokens would be available for claim at lunch</b></div>

          <div>
          <br/>
          <div className="blackColor" data-v-2a374f33="">
                            <button className="lb_claimBtnShadowD blackColor" data-v-2a374f33="">Claim</button>
                        </div>
          </div>
          
        </div>
      </div>



    </div>
    </div>
  );
};

export default DashboardSection;
