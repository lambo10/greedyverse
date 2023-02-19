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
      </div>





    </div>
    </div>
  );
};

export default DashboardSection;
