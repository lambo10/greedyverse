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
import React, { useState,useEffect,useRef } from "react";
import {ethers} from "ethers";
import seedSaleAbi from "../abis/seedSaleABI.json";
import typicalTokenJsonABI from "../abis/typicalTokenABI.json";


const SeedSaleSection = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [account, setAccount] = useState(null); 
  const seedSaleAddressETH = "";
  const seedSaleAddress = "0x03408793bD3d0E86fc7FCcEdF13b485314C9A7c9";
  const BusdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const UsdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const [purchase_amount, setPurchase_amount] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(() => {return "USDT"});
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [email, setEmail] = useState(false); 
  const [erroMsg, setErroMsg] = useState("");
  const ref = useRef(null);
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
    margin: "5px",
    transform: "translateY(-10px)",
  };

  useEffect(() => {
    if (!window.ethereum) {
        setIsMobileDevice(true);
    }else{
        window.ethereum.on("chainChanged",networkschanged);
        getRate();
    }

    }, []);

    useEffect(() => {
        handleOptionChange_sub();
        getRate();
    }, [selectedOption]);

    const networks = {
        eth:{
            chainId: `0x${Number(1).toString(16)}`,
            chainName: "Ethereum Mainnet",
            nativeCurrency:{
                name: "Ethereum",
                symbol: "ETH",
                decimals: 18
            },
            rpcUrls: [
                "https://eth.llamarpc.com",
                "https://rpc.payload.de",
                "https://ethereum.publicnode.com",
                "https://eth-rpc.gateway.pokt.network",
                "https://rpc.builder0x69.io",
                "https://eth-rpc.gateway.pokt.network",
                "https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
                "https://singapore.rpc.blxrbdn.com",
                "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7"

            ],
            blockExplorerUrls: ["https://etherscan.io"]
        },
        bsc:{
            chainId: `0x${Number(56).toString(16)}`,
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency:{
                name: "Binance Smart Chain",
                symbol: "BNB",
                decimals: 18
            },
            rpcUrls: [
                "https://bsc-dataseed1.binance.org",
                "https://bsc-dataseed2.binance.org",
                "https://bsc-dataseed1.defibit.io",
                "https://bscrpc.com",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bsc-dataseed2.ninicoin.io",
                "https://bsc-dataseed3.ninicoin.io",
                "https://bsc-dataseed4.ninicoin.io",
                "https://rpc.ankr.com/bsc",
                "https://bsc.rpc.blxrbdn.com",
                "https://bsc-dataseed.binance.org/"
            ],
            blockExplorerUrls: ["https://bscscan.com"]
        }
    }

    const networkschanged = () => {
        setErroMsg();
        const element = ref.current;
        setSelectedOption(element.value);
        getRate(element.value);
    }

    const handleNetworkChange = async (networkName) => {
        setErroMsg();
        await changeNetwork({networkName,setErroMsg});
      };

    const changeNetwork = async ({networkName,setErroMsg}) => {
        try{
            if(!window.ethereum) throw new Error("Metamask was not found");
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        ...networks[networkName]
                    }
                ]
            })
        }catch(erro){
            console.log(""+networkName,erro);
            setErroMsg(erro);
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

  const getRate = async (_selectedOption) => {
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    let Contract = null;
   
    let wkrSelectedOption = null;
    if(_selectedOption == null){
        wkrSelectedOption = selectedOption;
    }else{
        wkrSelectedOption = _selectedOption;
    }

    if(wkrSelectedOption.localeCompare("USDT") == 0 || wkrSelectedOption.localeCompare("ETH") == 0){
        await checkAndSwitchNetwork();
         Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
    }else if(wkrSelectedOption.localeCompare("BUSD") == 0 || wkrSelectedOption.localeCompare("BNB") == 0){
        await checkAndSwitchNetworkBNB();
         Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
    }
    try{
        setRate(await Contract.gverse_usd_conversion_rate());
    }catch(e){
        console.log("geting rate erro",e);
    } 
  }



  const handleInputChange = (event) => {
    setPurchase_amount(event.target.value);
    setTotal(event.target.value * rate);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBuyClick1 = async ()=>{
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    
    try{
    if(selectedOption.localeCompare("USDT") == 0){
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
        await Contract.receiveBUSD(purchase_amount);
    }else if(selectedOption.localeCompare("ETH") == 0){
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
    }else if(selectedOption.localeCompare("BUSD") == 0){
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
        await Contract.receiveBUSD(purchase_amount);
    }else if(selectedOption.localeCompare("BNB") == 0){
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
    }
    }catch(e){
        var error = e.toString();
                if (error.includes("transfer amount exceeds balance")) {
                   setErroMsg("Insufficient BUSD Balance");
                }else if(error.includes("Amount Below Minimum")){
                    setErroMsg("Amount Below Minimum");
                }else if(error.includes("Transfer failed")){
                    setErroMsg("Transfer failed. Pls try again");
                }
    }
    
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setErroMsg("");
  };

  const handleOptionChange_sub = () => {
    try{

            if(selectedOption.localeCompare("BUSD") == 0 || selectedOption.localeCompare("BNB") == 0){
                if(window.ethereum.networkVersion != 56){
                    handleNetworkChange("bsc");
                }
            }
        
      }catch(e){
        setErroMsg(e);
      }
      
  }

  const handle_busd_Usdt_approval_expenditure = async (paymentOption) => {
    setErroMsg("");
    try{
        if(paymentOption.localeCompare("USDT") == 0){
            if(await checkAndSwitchNetwork()){
            let Provider = new ethers.providers.Web3Provider(window.ethereum);
            let Signer = Provider.getSigner();
            let Contract = new ethers.Contract(UsdtAddress,typicalTokenJsonABI,Signer);
            await Contract.approve(account, purchase_amount);
            }
        }else if(paymentOption.localeCompare("BUSD") == 0){
            if(await checkAndSwitchNetworkBNB()){
            let Provider = new ethers.providers.Web3Provider(window.ethereum);
            let Signer = Provider.getSigner();
            let Contract = new ethers.Contract(BusdAddress,typicalTokenJsonABI,Signer);
            await Contract.approve(account, purchase_amount);
            }
        }
    }catch(e){
        var error = e.toString();
    }
  };

  async function checkAndSwitchNetwork() {
    try {
      
        await window.ethereum.request({ method: 'eth_chainId' }).then(function (chainId) {
          const networkName = (chainId === '0x1') ? 'Main Ethereum Network' : 'Unknown Network';
          console.log(`Connected to ${networkName}`);
          if (networkName === 'Unknown Network') {
            setErroMsg('Please switch to the Ethereum Network in MetaMask');
            return false;
          }else{
            return true;
          }
        });
        if(window.ethereum.networkVersion == 1){
            return true
        }else{
            setErroMsg('Please switch to the Ethereum Network in MetaMask');
            return false;
        }
     
    } catch (error) {
      setErroMsg(error);
      return false;
    }
  }



  async function checkAndSwitchNetworkBNB() {
    try {
      
        await window.ethereum.request({ method: 'eth_chainId' }).then(function (chainId) {
          const networkName = (chainId === '0x38') ? 'Main Binance Smart Chain Network' : 'Unknown Network';
          console.log(`Connected to ${networkName}`);
          if (networkName === 'Unknown Network') {
            setErroMsg('Please switch to the Binance Smart Chain Network in MetaMask');
            return false;
          }else{
            return true;
          }
        });
        if(window.ethereum.networkVersion == 56){
            return true
        }else{
            setErroMsg('Please switch to the Binance Smart Chain Network in MetaMask');
            return false;
        }
     
    } catch (error) {
      setErroMsg(error);
      return false;
    }
  }

 
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
          {!isMobileDevice && (
            <div>
          <div className="lb_padding_top_15">
          {!isWalletConnected && (
          <a id="connect" onClick={() => handleconnect()} className="lb_connect_wallet_txt lb_remove_text_decoration lb_cusor_pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
                    &nbsp; Connect Wallet
            </a>
          )}
          {isWalletConnected && (
            <div><div className="lb_txt_color_white_only">Wallet Address</div><div className="lb_txt_size_20 lb_txt_color_lightGreen"><b>{account.slice(0,4)+"..."+account.slice((account.length-4),account.length)}</b></div><div><button onClick={() => setIsWalletConnected(false)} className="lb_logout_btn">Disconnect</button></div></div>
          )}
          </div>
          <div className="lb_padding_top_10">
            <div className="lb_txt_color_white_only">
            Select Currency
            </div>
       <div>
       <select ref={ref} className="lb_select_currency" value={selectedOption} onChange={handleOptionChange}>
            <option value="USDT">USDT</option>
            <option value="ETH">ETH</option>
            <option value="BUSD">BUSD</option>
            <option value="BNB">BNB</option>
          </select>
       </div>
       
          </div>
          </div>
          )}
          <div className="lb_padding_top_15">
          <input onChange={handleInputChange}  className="lb_sales_amount_input lb_sales_amount_input_border" type="text" placeholder="Eg: 1000"/>          </div>
          {isMobileDevice && (
            <div className="lb_padding_top_5">
            <input onChange={handleEmailInputChange}  className="lb_sales_amount_input lb_sales_amount_input_border" type="text" placeholder="Enter Email"/>  
            </div>
          )}
          <div className="lb_txt_left lb_no_padding_left_1px lb_txt_color_white_only lb_padding_top_5">
          <div className="">{total} $GVERSE</div>
          </div> 

          {erroMsg && (
            <div className="lb_padding_top_5 lb_txt_red">
            <div className="">{erroMsg}</div>
            </div>
          )}



          <div className="lb_padding_top_5 lb_txt_color_lightGreen">
          <div className="">You bought: 0 $GVERSE</div>
          </div>

          {(!isMobileDevice && (selectedOption.localeCompare("USDT") == 0 || selectedOption.localeCompare("BUSD") == 0)) && (
          <div className="lb_padding_top_15"><button onClick={() => handle_busd_Usdt_approval_expenditure(selectedOption)} className="lb_logout_btn lb_approve_btn"><b>Approve</b></button></div>
          )}
          <div className="lb_padding_top_15">
              
                <div onClick={handleBuyClick1} className="lb_saleBTN lb_game_logo">Buy now</div>
           
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
