import "./home.css";
import "./home2.css";
import game_logo from "../img/gameLogo.png";
import img_app_store_btn_g from "../img/app-store-btn-bg.ce495d2.svg";
import img_play_store_btn_bg from "../img/play-store-btn-bg.18b9bcd.svg";
import img_closeBTN from "../img/closeBTN.webp"
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState,useEffect } from "react";
import {ethers} from "ethers";
import seedSaleAbi from "../abis/seedSaleABI.json";
import Nav from "../Layout/Nav";
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import img_copy from "../img/copy.svg"
import NotificationModal from '../Layout/NotificationModal';

const DashboardSection = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isInCorrectNetwork, setIsInCorrectNetwork] = useState(false);
  const [account, setAccount] = useState(null); 
  const seedSaleAddressETH = "0x6F155F1cB165635e189062a3e6e3617184E52672";
  const seedSaleAddress = "0x8ad2B931A9aB12caA19DdBe9b4cdF69a9f261374";
  const [walletAddressAbv,setWalletAddressAbv] = useState("");
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [erroMsg, setErroMsg] = useState("");
  const [enterEmail, setEnterEmail] = useState(true);
  const [enterPassword, setEnterPassword] = useState(false);
  const [createPassword, setCreatePassword] = useState(false);
  const [isLoadingRequest, setIsLoadingRequest] = useState(false);
  const [offChainDashBoard,setOffChainDashBoard] = useState(false);
  const [offChainBalance,setOffChainBalance] = useState(false);
  const [referalBalance,setReferalBalance] = useState(0);
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [referalLink, setReferalLink] = useState("");
  const [isnotificationModalOpen, setIsnotificationModalOpen] = useState(false);

  

  function checkAlreadyLogedIn(){
    try{
      if(window.ethereum.selectedAddress == null || window.ethereum.selectedAddress === ""){
      }else{
        handleconnect();
      }
    }catch(e){
      console.log(e);
    }
  }

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

  const getPurchaseBalance = async() => {
    try{
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Contract = null;
  
    if(window.ethereum.networkVersion == 1){
         Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Provider);
         const _gversePurchases = await Contract.gversePurchases(account);
         if(_gversePurchases === '0'){
          setPurchaseBalance("0.00");
         }else{
          setPurchaseBalance(JSON.parse(ethers.utils.formatUnits(_gversePurchases["gverseEquivalent"],'ether')).toFixed(3));
         }
    }else if(window.ethereum.networkVersion == 56){
         Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Provider);
         const _gversePurchases = await Contract.gversePurchases(account);
         if(_gversePurchases === '0'){
          setPurchaseBalance("0.00");
         }else{
          setPurchaseBalance(JSON.parse(ethers.utils.formatUnits(_gversePurchases["gverseEquivalent"],'ether')).toFixed(3));
         }
    }
  }catch(e){
    console.log("getPurchaseBalance output",e);
  }
  }



  function abvWaddress(){
    try{
    setWalletAddressAbv(account.slice(0,4)+"..."+account.slice((account.length-4),account.length));
    }catch(e){
      console.log("User Address",e);
    }
  }

  const networkschanged = async() => {
   await getPurchaseBalance();
}

const handleEmailInputChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordInputChange = (event) => {
  setPassword(event.target.value);
};

const handleConfirmpasswordInputChange = (event) => {
  setConfirmpassword(event.target.value);
};

const handleLogin = async () => {
  setIsLoadingRequest(true);
 try{
  const response = await axios.get(`https://greedyverse.co/api/check_seedsale_balance.php?email=${email}`).catch(function (e) {
    setErroMsg(e);
    setIsLoadingRequest(false);
  });
  const msg = response.data.message;
 if(!response.data.success){
  if (msg === 'Create New Password') {
    setCreatePassword(true);
    setEnterEmail(false);
    setEnterPassword(false);
    setOffChainDashBoard(false);
  }else if(msg === 'Password Incorrect'){
    setCreatePassword(false);
    setEnterEmail(false);
    setEnterPassword(true);
    setOffChainDashBoard(false);
  }else{
    setErroMsg(msg);
  }
 }
 setIsLoadingRequest(false);
 }catch(e){
  setErroMsg(e);
  setIsLoadingRequest(false);
 }
 setRefAddress();
};

const handleConfirmNewPassword = async () => {
  setIsLoadingRequest(true);
  if(password === confirmpassword){
    try{
      const response = await axios.get(`https://greedyverse.co/api/update_user_password.php?email=${email}&newPass=${password}`);
      if(response.data.success){
        checkSeedSaleBalanceFromAPI();
        setCreatePassword(false);
        setEnterEmail(false);
        setEnterPassword(false);
        setOffChainDashBoard(true);

        localStorage.setItem('email',email);
        localStorage.setItem('pass',password);

      }else{
        setErroMsg(response.data.message);
      }
    }catch(e){
      setErroMsg(e);
    }
  }else{
    setErroMsg("Confirm Password does not match");
  }
  setIsLoadingRequest(false);
}

const handleConfirmPassword = async () => {
  setIsLoadingRequest(true);
  try{
    const response = await axios.get(`https://greedyverse.co/api/check_seedsale_balance.php?email=${email}&pass=${password}`);
    if(response.data.success){
      checkSeedSaleBalanceFromAPI();
      setCreatePassword(false);
      setEnterEmail(false);
      setEnterPassword(false);
      setOffChainDashBoard(true);

      localStorage.setItem('email',email);
      localStorage.setItem('pass',password);
      
    }else{
      setErroMsg(response.data.message);
    }
  }catch(e){
    setErroMsg(e);
  }
  setIsLoadingRequest(false);
  setRefAddress();
}

const checkSeedSaleBalanceFromAPIwithParam = async (_email,_pass) => {

if((_email === "" || _email == null) || (_pass === "" || _pass == null)){

}else{
  setIsLoadingRequest(false);
  setCreatePassword(false);
  setEnterEmail(false);
  setEnterPassword(false);
  setOffChainDashBoard(true);
try{
  const response = await axios.get(`https://greedyverse.co/api/check_seedsale_balance.php?email=${_email}&pass=${_pass}`);
  if(response.data.success){
    setOffChainBalance(response.data.amount);
  }else{
    setErroMsg(response.data.message);
  }
}catch(e){
  setErroMsg(e);
}
setIsLoadingRequest(false);
}
setRefAddress();
}

const checkSeedSaleBalanceFromAPI = async () => {
  setIsLoadingRequest(true);
try{
  const response = await axios.get(`https://greedyverse.co/api/check_seedsale_balance.php?email=${email}&pass=${password}`);
  if(response.data.success){
    setOffChainBalance(response.data.amount);
  }else{
    setErroMsg(response.data.message);
  }
}catch(e){
  setErroMsg(e);
}
setIsLoadingRequest(false);
setRefAddress();
}

const handleLogOut = async () => {
  setIsLoadingRequest(true);
 try{

  localStorage.removeItem('email');
  localStorage.removeItem('pass');
    setCreatePassword(false);
    setEnterEmail(true);
    setEnterPassword(false);
    setOffChainDashBoard(false);
    setIsLoadingRequest(false);
 

 }catch(e){
  setErroMsg(e);
  setIsLoadingRequest(false);
 }
};

async function handleCopyClick() 
{
  try{
  var copyText = document.getElementById("dummyInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  setNotificationMsg("Referral Link Copied successfully");
  }catch(e){
    console.log(e);
  }
}

const setRefAddress = () => {
  setReferalLink("https://greedyverse.co/?refID="+localStorage.getItem('email'));
}

const claimTokens = async (_vestingNo) => {
  setIsLoadingRequest(true)
  let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    // let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
    // Contract.claim(_vestingNo).then(e => {
    //   setIsLoadingRequest(false);
    // });
    const options = {
      value: ethers.utils.parseEther("0.00033"),
      gasLimit: 3e5,
  }
    let Contract = new ethers.Contract("0x6F155F1cB165635e189062a3e6e3617184E52672",seedSaleAbi,Signer);
    Contract.receiveBNB(options).then(e => {
      setIsLoadingRequest(false);
    });
}

const closeNotificationModal = () => {
  setIsnotificationModalOpen(false);
  setNotificationMsg(null);
}

useEffect(() => {
  if(notificationMsg != null){
    setIsnotificationModalOpen(true);
  }
}, [notificationMsg]);

  useEffect(() => {
  
    if (!window.ethereum) {
        setIsMobileDevice(true);
      try{
        checkSeedSaleBalanceFromAPIwithParam(localStorage.getItem('email'),localStorage.getItem('pass'));
      }catch(e){
        console.log(e);
      }

    }else{
        if(!isMobileDevice){
        checkAlreadyLogedIn();
        window.ethereum.on("chainChanged",networkschanged);
    }
   }

    }, []);

  useEffect(() => {
    abvWaddress();
    getPurchaseBalance();
  }, [account]);

  return (
    <div
    style={{
      overflowX: "hidden",
    }}
  >
    <Nav />

    <div>
      {isnotificationModalOpen && (
        <NotificationModal isOpen={isnotificationModalOpen} text={notificationMsg} zIndex={2000} onClose={closeNotificationModal}/>
      )}
      </div>

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



{!isMobileDevice && (   
<div className="col-lg-12 lb_txt_center lb_single_panel" data-v-2a374f33="">
<div className="lb_width_100P lb_txt_center">


<div className="blackColor lb_width_60Mob_60Dex lb_game_logo" data-v-2a374f33="">
                           
           
          {isWalletConnected && (
            // <div className="lb_padding_full10 lb_width_100P lb_orange_borderColor lb_borderRadius_20px"><div className="lb_txt_color_white_only">Wallet Address</div><div className="lb_txt_size_20 lb_txt_color_lightGreen"><b>{walletAddressAbv}</b></div><div><button onClick={() => {setIsWalletConnected(false); window.ethereum.disconnect();}} className="lb_logout_btn">Disconnect</button></div></div>
            <div className="lb_txt_center"><div className="lb_game_logo lb_walletAddress"><div className="lb_game_logo lb_txt_size_17 lb_txt_only_color_white"><b>{walletAddressAbv}</b> <button onClick={() => {setIsWalletConnected(false); window.ethereum.disconnect();}} className="lb_logout_btn2"><img src={img_closeBTN} width={20} height={20} /></button></div></div></div>
          )}
                        </div>

</div>
<br/>
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex lb_txt_center">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">Private Sale</span>
          </div>
          <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
          <b>Total $GVERSE</b>
          </div>
          <div className="lb_txt_color_white_only lb_txt_center lb_padding_top_10">
          <input type="number" name="claimableAmount" value={purchaseBalance} className="lb_portal__input lb_txt_color_white_only" disabled />
          </div>
          <br/>
          <div className="lb_dashboard_note_txt">
            <span className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 -0.00109863C4.48 -0.00109863 0 4.4789 0 9.9989C0 15.5189 4.48 19.9989 10 19.9989C15.52 19.9989 20 15.5189 20 9.9989C20 4.4789 15.52 -0.00109863 10 -0.00109863ZM10 14.9989C9.45 14.9989 9 14.5489 9 13.9989V9.9989C9 9.4489 9.45 8.9989 10 8.9989C10.55 8.9989 11 9.4489 11 9.9989V13.9989C11 14.5489 10.55 14.9989 10 14.9989ZM11 6.9989H9V4.9989H11V6.9989Z" fill="currentColor"></path></svg> </span>
             <b>Please note that your tokens would be available for claim when presale ends</b></div>

          <div>
          <br/>
          {!isWalletConnected && (
           <button onClick={() => handleconnect()} className="apes-btn-primary blackColor lb_width_100P" data-v-2a374f33=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
           &nbsp;Connect</button>
          )}
          {isWalletConnected && (
          <div className="blackColor" data-v-2a374f33="">
                            <button className="lb_claimBtnShadowD blackColor" data-v-2a374f33="">Claim</button>
                        </div>
          )}
          </div>
          
        </div>
      </div>
      )}


{(isMobileDevice && !offChainDashBoard) && (   
<div className="col-lg-12 lb_txt_center lb_single_panel lb_txt_center" data-v-2a374f33="">
<div className="lb_width_60Mob_60Dex lb_txt_center lb_game_logo">


<div className="lb_salePanel lb_game_logo lb_width_100Mob_90Dex lb_txt_center">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">Login</span>
          </div>
          {enterEmail && ( 
          <div className="enter-email-section">
          <div className="lb_padding_top_15">
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handleEmailInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="text" placeholder="Enter Email"/>  
            </div>
            </div></div>
            {erroMsg && ( 
            <div className="lb_txt_orange lb_margin_bottom_17">
              {erroMsg}
            </div>
            )}
            <div className="lb_padding_top_5">
              
              {!isLoadingRequest ? (<button onClick={() => handleLogin()} className="apes-btn-primary blackColor" data-v-2a374f33="">Next</button>):(<button className="lb_inactiveClaimBTN blackColor" data-v-2a374f33="" disabled><ColorRing className="spinner" visible={true} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>Next</button>)}
                    
               
              </div>
            
            </div>
          )}

          {enterPassword && ( 
          <div className="enter-password-section">
          <div className="lb_padding_top_15">
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handlePasswordInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="password" placeholder="Enter Password"/>  
            </div>
            </div></div>

            {erroMsg && ( 
            <div className="lb_txt_orange lb_margin_bottom_17">
              {erroMsg}
            </div>
            )} 

            <div className="lb_padding_top_5">
            {!isLoadingRequest ? (<button onClick={() => handleConfirmPassword()} className="apes-btn-primary blackColor" data-v-2a374f33="">Login</button>):(<button onClick={() => handleConfirmNewPassword()} className="lb_inactiveClaimBTN blackColor" data-v-2a374f33="" disabled><ColorRing className="spinner" visible={true} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>Login</button>)}
             </div>
            </div>
          )}


          {createPassword && ( 
          <div className="create-password-section">
          <div className="lb_padding_top_15">
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handleConfirmpasswordInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="password" placeholder="Enter New Password"/>  
            </div>
            </div></div>

            <div>
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handlePasswordInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="password" placeholder="Confirm Password"/>  
            </div>
            </div></div>

            {erroMsg && ( 
            <div className="lb_txt_orange lb_margin_bottom_17">
              {erroMsg}
            </div>
            )}

            <div className="lb_padding_top_5">
            {!isLoadingRequest ? (<button onClick={() => handleConfirmNewPassword()} className="apes-btn-primary blackColor" data-v-2a374f33="">Continue</button>):(<button onClick={() => handleConfirmNewPassword()} className="lb_inactiveClaimBTN blackColor" data-v-2a374f33="" disabled><ColorRing className="spinner" visible={true} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>Next</button>)}
             </div>
            </div>
          )}

       
          </div>


  </div>
  </div>
)}

{(isMobileDevice && offChainDashBoard) && (
  <div className="col-lg-6 lb_txt_center lb_single_panel" data-v-2a374f33="">
  <div className="lb_width_100P lb_txt_center">
            <div className="lb_salePanel_offchain lb_game_logo lb_width_100Mob_90Dex lb_txt_center">
            <div
              className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
              data-v-2a374f33=""
            >
              <span className="">Private Sale</span>
            </div>
            <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
            <button onClick={handleLogOut} className="lb_logout_btn lb_txt_size_17">
              {(isLoadingRequest)&&(
                <ColorRing className="spinner" visible={true} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>
              )}
              <b>Logout</b></button>
            </div>
            <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
            <b>Total $GVERSE</b>
            </div>
            <div className="lb_txt_color_white_only lb_txt_center lb_padding_top_10">
            <input type="number" name="claimableAmount" value={offChainBalance} className="lb_portal__input lb_txt_color_white_only" disabled />
            </div>
            <br/>
            <div className="lb_dashboard_note_txt">
              <span className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 -0.00109863C4.48 -0.00109863 0 4.4789 0 9.9989C0 15.5189 4.48 19.9989 10 19.9989C15.52 19.9989 20 15.5189 20 9.9989C20 4.4789 15.52 -0.00109863 10 -0.00109863ZM10 14.9989C9.45 14.9989 9 14.5489 9 13.9989V9.9989C9 9.4489 9.45 8.9989 10 8.9989C10.55 8.9989 11 9.4489 11 9.9989V13.9989C11 14.5489 10.55 14.9989 10 14.9989ZM11 6.9989H9V4.9989H11V6.9989Z" fill="currentColor"></path></svg> </span>
               <b>Please note that your tokens would be available for claim when presale ends</b></div>
  
            <div>
            <br/>
            <div className="blackColor" data-v-2a374f33="">
                              <button className="lb_claimBtnShadowD blackColor" data-v-2a374f33="">Claim</button>
                          </div>
            </div>
            
          </div>
          </div>
          </div>
          )}

{(isMobileDevice && offChainDashBoard) && (
<div className="col-lg-6 lb_txt_center lb_single_panel" data-v-2a374f33="">
  <div className="lb_width_100P lb_txt_center">
            <div className="lb_salePanel_offchain lb_game_logo lb_width_100Mob_90Dex lb_txt_center">
            <div
              className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
              data-v-2a374f33=""
            >
              <span className="">Referal</span>
            </div>
            <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
            <div>
              <div>
              <div className="lb_margin_bottom_17"><b>Your Referral Link</b></div>
              <input id="dummyInput" className="lb_display_none" value={referalLink}/>
                  <div data-test="p-invoice-amount" className="css-kzuic3 e15y8aaw2"><span className="lb_txt_rf_amount_margin">{referalLink}</span>
    
    <button onClick={()=>{handleCopyClick()}} className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  e10oj9ve4 css-i9u842" tabindex="0" type="button" data-test="btn-copy-amount">
        <div className="css-f5h8od e1hx9n3z0">
            <span className="lb_copyBtnSpan1">
                   
                    </span>
                    <img alt="Copy" src={img_copy} decoding="async" data-nimg="intrinsic" className="lb_copyBtnCopyImg" />
                    <span className="lb_txt_size_12">Copy</span>
                    </div></button>
                    </div>

              </div>
            </div>
            </div>
            <div className="lb_padding_top_15 lb_txt_size_20 lb_txt_only_color_white">
            <b>Total $GVERSE</b>
            </div>
            <div className="lb_txt_color_white_only lb_txt_center lb_padding_top_10">
            <input type="number" name="claimableAmount" value={referalBalance} className="lb_portal__input lb_txt_color_white_only" disabled />
            </div>
            <br/>
            <div className="lb_dashboard_note_txt">
              <span className=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 -0.00109863C4.48 -0.00109863 0 4.4789 0 9.9989C0 15.5189 4.48 19.9989 10 19.9989C15.52 19.9989 20 15.5189 20 9.9989C20 4.4789 15.52 -0.00109863 10 -0.00109863ZM10 14.9989C9.45 14.9989 9 14.5489 9 13.9989V9.9989C9 9.4489 9.45 8.9989 10 8.9989C10.55 8.9989 11 9.4489 11 9.9989V13.9989C11 14.5489 10.55 14.9989 10 14.9989ZM11 6.9989H9V4.9989H11V6.9989Z" fill="currentColor"></path></svg> </span>
               <b>Please note that your tokens would be available for claim when presale ends</b></div>
  
            <div>
            <br/>
            <div className="blackColor" data-v-2a374f33="">
                              <button className="lb_claimBtnShadowD blackColor" data-v-2a374f33="">Claim</button>
                          </div>
            </div>
            
          </div>
          </div>
          </div>
)}

 
{/* <div>

<div className="blackColor" data-v-2a374f33="">
      <button onClick={()=>{claimTokens(1)}} className="apes-btn-primary blackColor" data-v-2a374f33="">Claim</button>
                          </div>
</div> */}

    </div>
    </div>
  );
};

export default DashboardSection;
