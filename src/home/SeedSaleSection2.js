import "./home.css";
import "./home2.css";
import game_logo from "../img/gameLogo.png";
import img_app_store_btn_g from "../img/app-store-btn-bg.ce495d2.svg";
import img_play_store_btn_bg from "../img/play-store-btn-bg.18b9bcd.svg";
import img_usdt from "../img/tinyIcon_usdt.svg";
import img_eth from "../img/tinyIcon_ETH.svg";
import img_busd from "../img/tinyIcon_BUSD.svg";
import img_bnb from "../img/tinyIcon_BNB.svg";
import img_gverse from "../img/GV.png";
import img_copy from "../img/copy.svg"
import img_closeBTN from "../img/closeBTN.webp"
import { Link } from "react-router-dom";
import { AiFillMediumCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import styled from "styled-components";
import TransactionDetails from "../components/presale/transactionDetails/TransactionDetails";
import React, { useState,useEffect,useRef } from "react";
import {ethers} from "ethers";
import seedSaleAbi from "../abis/seedSaleABI.json";
import typicalTokenJsonABI from "../abis/typicalTokenABI.json";
import { ColorRing } from 'react-loader-spinner';
import './BlueCheckMark.css'; 
import CircularCountdownTimer from "../components/circlerCountDown/CircularCountdownTimer";
import QRCodeGenerator from "./QRCodeGenerator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';



const SeedSaleSection = () => {
  const [isTransferModalActive, setIsTransferModalActive] = useState(false);
  const [isNetworkInputSelectedOption, setNetworkInputSelectedOption] = useState("USDT ERC20");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isInCorrectNetwork, setIsInCorrectNetwork] = useState(false);
  const [account, setAccount] = useState(null); 
  const seedSaleAddressETH = "";
  const seedSaleAddress = "0x5B9ABCD1455100ec733B3821734C939269570349";
  const BusdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const UsdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const [purchase_amount, setPurchase_amount] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(() => {return "USDT"});
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [email, setEmail] = useState(""); 
  const [erroMsg, setErroMsg] = useState("");
  const [buyBtnActive, setBuyBtnActive] = useState(false);
  const [IsApprovalRequestNotDone, setIsApprovalRequestNotDone] = useState(false);
  const [IsBuyRequestNotDone, setIsBuyRequestNotDone] = useState(false);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isNetworkInputSelectedOptionImg, setNetworkInputSelectedOptionImg] = useState(img_usdt);
  const [gen_address, setGen_address] = useState("");
  const [minPurchaseAmount, setMinPurchaseAmount] = useState(1);
  const ref = useRef(null);
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
    margin: "5px",
    transform: "translateY(-10px)",
  };
  const [dispCurrencyOptions, setdispCurrencyOptions] = useState(false);

  const toggleOptions = () => {
    setdispCurrencyOptions((prev) => !prev);
  };

  const hideOptions = () => {
    setdispCurrencyOptions(false);
  };

  useEffect(() => {
  
    if (!window.ethereum) {
        setIsMobileDevice(true);
    }else{
        if(!isMobileDevice){
        window.ethereum.on("chainChanged",networkschanged);
        getRate();
    }else{
        setBuyBtnActive(true);
        getRate_from_api();
    }
   }

    }, []);

    useEffect(() => {
        if(!isMobileDevice){
            handleOptionChange_sub();
        getRate();
        
        if(selectedOption.localeCompare("BUSD") == 0 || selectedOption.localeCompare("USDT") == 0){
            setBuyBtnActive(false);
        }else{
            setBuyBtnActive(true);
        }
        hideOptions();
        }else{
            getRate_from_api();
            hideOptions();
            setBuyBtnActive(true);
        }
    }, [selectedOption]);

    useEffect(() => {
        if(isMobileDevice){
            setIsTransferModalActive(true);
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
        }
    }, [gen_address]);

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


    function displayPaymentSuccessfull(){
        setShowPanel(true);
        setTimeout(() => {
                  setVisible(true);
                }, 500); 
    
                setTimeout(() => {
                    setShowPanel(false);
                    setVisible(false);
                  }, 4000); 
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

  const getPurchaseBalance = async() => {
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Contract = null;
  try{
    if(selectedOption.localeCompare("USDT") == 0 || selectedOption.localeCompare("ETH") == 0){
        await checkAndSwitchNetwork();
         Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Provider);
         const _gversePurchases = await Contract.gversePurchases(account);
         setPurchaseBalance(_gversePurchases["gverseEquivalent"]);
    }else if(selectedOption.localeCompare("BUSD") == 0 || selectedOption.localeCompare("BNB") == 0){
        await checkAndSwitchNetworkBNB();
         Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Provider);
         const _gversePurchases = await Contract.gversePurchases(account);
         setPurchaseBalance(ethers.utils.formatUnits(_gversePurchases["gverseEquivalent"],'ether'));
    }
  }catch(e){
    console.log("getPurchaseBalance output",e);
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
        if(wkrSelectedOption.localeCompare("BNB") == 0 || wkrSelectedOption.localeCompare("ETH") == 0){
            const gverseUsdRate = await Contract.gverse_usd_conversion_rate();
            const bnbUsdRate = await Contract.getBNBtoBusdPrice("1");
            setRate(gverseUsdRate*bnbUsdRate);
        }else{
            setRate(await Contract.gverse_usd_conversion_rate());
        }
    }catch(e){
        console.log("geting rate erro",e);
    } 
  }



  const handleInputChange = (event) => {
    setPurchase_amount(event.target.value);
    setTotal(event.target.value * rate);
    if(isMobileDevice){
        setBuyBtnActive(true);
    }
  };


  const getRate_from_api = async () => {
    try{
        const new_tmp_wallet_request = await axios.get("https://greedyverseblockchainoperation.herokuapp.com/get-seed-sale-rate?network="+selectedOption);
        if(new_tmp_wallet_request.data.success){
            setRate(parseFloat(new_tmp_wallet_request.data.msg)); 
        }else{
            setRate(0);
        }
    }catch(e){
        console.log(e);
    }
  }


  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBuyClick1 = async ()=>{
    setBuyBtnActive(false);
    setIsBuyRequestNotDone(true);

    if(isMobileDevice){
        startTransferPayment();
    }else{

    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    
    try{
    if(selectedOption.localeCompare("USDT") == 0){
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
        Contract.receiveBUSD(ethers.utils.parseEther(purchase_amount)).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("ETH") == 0){
        const options = {
            value: ethers.utils.parseEther(purchase_amount),
            gasLimit: 4e5,
        }
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
        Contract.receiveBNB(options).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("BUSD") == 0){
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
        Contract.receiveBUSD(ethers.utils.parseEther(purchase_amount)).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("BNB") == 0){
        const options = {
            value: ethers.utils.parseEther(purchase_amount),
            gasLimit: 4e5,
        }
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
        Contract.receiveBNB(options).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
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
    
  }

  const handleOptionChange = (optionValue,inputTXT) => {
    setSelectedOption(optionValue);
    setNetworkInputSelectedOption(inputTXT);
    if(optionValue === "USDT"){
        setNetworkInputSelectedOptionImg(img_usdt);
    }else if(optionValue === "ETH"){
        setNetworkInputSelectedOptionImg(img_eth);
    }else if(optionValue === "BUSD"){
        setNetworkInputSelectedOptionImg(img_busd);
    }else if(optionValue === "BNB"){
        setNetworkInputSelectedOptionImg(img_bnb);
    }
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
    if(isWalletConnected){
        if(isInCorrectNetwork){
            setErroMsg("");
        setIsApprovalRequestNotDone(true);
        try{
            if(paymentOption.localeCompare("USDT") == 0){
                if(await checkAndSwitchNetwork()){
                let Provider = new ethers.providers.Web3Provider(window.ethereum);
                let Signer = Provider.getSigner();
                let Contract = new ethers.Contract(UsdtAddress,typicalTokenJsonABI,Signer);
                Contract.approve(seedSaleAddressETH, ethers.utils.parseEther(purchase_amount)).then(e => {
                    setBuyBtnActive(true);
                    setIsApprovalRequestNotDone(false);
                });
                
                }
            }else if(paymentOption.localeCompare("BUSD") == 0){
                if(await checkAndSwitchNetworkBNB()){
                let Provider = new ethers.providers.Web3Provider(window.ethereum);
                let Signer = Provider.getSigner();
                let Contract = new ethers.Contract(BusdAddress,typicalTokenJsonABI,Signer);
                Contract.approve(seedSaleAddress, ethers.utils.parseEther(purchase_amount)).then(e => {
                    setBuyBtnActive(true);
                    setIsApprovalRequestNotDone(false);
                });
                }
            }
        }catch(e){
            var error = e.toString();
            setErroMsg(error);
        }
        }
    }else{
        setErroMsg("Pls Connect Wallet")
    }
    
  };

  async function checkAndSwitchNetwork() {
    try {
      
        await window.ethereum.request({ method: 'eth_chainId' }).then(function (chainId) {
          const networkName = (chainId === '0x1') ? 'Main Ethereum Network' : 'Unknown Network';
          console.log(`Connected to ${networkName}`);
          if (networkName === 'Unknown Network') {
            setErroMsg('Please switch to the Ethereum Network in MetaMask');
            setIsInCorrectNetwork(false);
            return false;
          }else{
            setIsInCorrectNetwork(true);
            return true;
          }
        });
        if(window.ethereum.networkVersion == 1){
            setIsInCorrectNetwork(true);
            return true
        }else{
            setErroMsg('Please switch to the Ethereum Network in MetaMask');
            setIsInCorrectNetwork(false);
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
            setIsInCorrectNetwork(false);
            return false;
          }else{
            setIsInCorrectNetwork(true);
            return true;
          }
        });
        if(window.ethereum.networkVersion == 56){
            setIsInCorrectNetwork(true);
            return true
        }else{
            setErroMsg('Please switch to the Binance Smart Chain Network in MetaMask');
            setIsInCorrectNetwork(false);
            return false;
        }
     
    } catch (error) {
      setErroMsg(error);
      return false;
    }
  }


  async function handleCopy(txt) {
   await navigator.clipboard.writeText(txt);
  }

  async function handleCopyClick(txt,type) {
    try{
        await handleCopy(txt);
        alert(type+" Copied successfully");
    
    }catch(e){
        console.log("copy erro",e);
    }
}

async function startTransferPayment(){
   try{
   if(email === '' || email == null){
    setErroMsg("Pls Enter Email");
    setIsBuyRequestNotDone(false);
    setBuyBtnActive(true);
   }else{
    if((purchase_amount >= minPurchaseAmount && selectedOption === "USDT") || (purchase_amount >= minPurchaseAmount && selectedOption === "BUSD")){
        const new_tmp_wallet_request = await axios.get("https://greedyverse.co/api/create_new_tmp_wallet.php?email="+email);
        setGen_address(new_tmp_wallet_request.data.gen_address);
       const check_seed_sale_payments = await axios.get("https://greedyverse.co/api/check_seedSale_payments.php?gen_address="+new_tmp_wallet_request.data.gen_address+"&email="+email+"&token="+selectedOption+"&amount="+purchase_amount);
       if(check_seed_sale_payments.data.success){
            setIsTransferModalActive(false);
            displayPaymentSuccessfull();
       }
    }else{
        setErroMsg("Amount Below Minimum");
        setIsBuyRequestNotDone(false);
        setBuyBtnActive(true);
    }
   }
}catch(e){
    console.log("Transfer Request Erro",e);
    setIsBuyRequestNotDone(false);
    setBuyBtnActive(true);
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
      

        <div >

        {isTransferModalActive && (
<div className={`blue-checkmark-container_lpadding`}>
<div className=" lb_txt_center lb_padding_full20">
    <div className="lb_game_logo lb_transfer_payment_modal_div">
        <div onClick={()=>{setIsTransferModalActive(false)}} className="lb_txt_right lb_modalCloseBTN"><img src={img_closeBTN} width={20} height={20} /></div>
    <div className="lb_tp_padding">
    <div className="lb_transfer_payment_header_container"><div className="lb_transfer_payment_header"><b>Transfer <br/> {purchase_amount} {selectedOption} to</b></div>
    <div className="lb_tp_timer"> <CircularCountdownTimer    duration={900}
        updateInterval={1000}
        diameter={70}
        borderThickness={10}></CircularCountdownTimer> </div>
    </div>
    <div className="lb_transfer_payment_note_txt lb_padding_top_15_real">Scan the QR code, or copy and paste the address into your wallet.</div>
    <div className="lb_padding_top_15_real"><QRCodeGenerator value={gen_address}/></div>

    <div className="lb_padding_top_15_real MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren e1ubno920 css-15rqsm7" role="separator"><span class="MuiDivider-wrapper css-c1ovea">or</span></div>

    <div className="lb_padding_top_15_real">
    <div className="lb_txt_left"><b>Amount</b></div>
    <div data-test="p-invoice-amount" className="css-kzuic3 e15y8aaw2"><span className="lb_txt_tp_amount_margin">{purchase_amount}</span>
    
    <button onClick={()=>{handleCopyClick(purchase_amount,"Amount")}} className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  e10oj9ve4 css-i9u842" tabindex="0" type="button" data-test="btn-copy-amount">
        <div className="css-f5h8od e1hx9n3z0">
            <span className="lb_copyBtnSpan1">
                   
                    </span>
                    <img alt="Copy" src={img_copy} decoding="async" data-nimg="intrinsic" className="lb_copyBtnCopyImg" />
                    <span className="lb_txt_size_12">Copy</span>
                    </div></button>
                    </div>
    </div>

    <div className="lb_padding_top_15_real">
    <div className="lb_txt_left"><b>Address</b></div>
    <div data-test="p-invoice-amount" className="css-kzuic3 e15y8aaw2"><span className="lb_txt_tp_amount_margin">{gen_address.slice(0,10)+"..."+gen_address.slice((gen_address.length-10),gen_address.length)}</span>
    <button onClick={()=>{handleCopyClick(gen_address,"Address")}} className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  e10oj9ve4 css-i9u842" tabindex="0" type="button" data-test="btn-copy-amount">
        <div className="css-f5h8od e1hx9n3z0">
            <span className="lb_copyBtnSpan1">
                   
                    </span>
                    <img alt="Copy" src={img_copy} decoding="async" data-nimg="intrinsic" className="lb_copyBtnCopyImg" />
                    <span className="lb_txt_size_12">Copy</span>
                    </div></button></div>

    </div>
<br/>
    <div className="lb_padding_top_15_real">
        <span>Powered by</span><img src={img_gverse} width={20} height={20} /><span><b>Greedyverse</b></span>
        </div>
   
    </div>
    </div>
    </div>
</div>
        )}


  </div>



        <div >
{showPanel && (

<div className="blue-checkmark-container">

<div>
     <div className='blue-checkmark-div'>
     {visible && (
        <svg
          className="blue-checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle className="blue-checkmark-circle" cx="26" cy="26" r="25" />
          <path
            className="blue-checkmark-check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      )}
     </div>
      
    </div>
    <br/>
    <div className='lb_txt_only_color_white'><h3>Payment Successfull</h3></div>
    <div><a href='' className='lb_remove_text_decoration lb_txt_orange'><b>Dashboard</b></a></div>
    </div>

)}


  </div>

      
    
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
          </div>
          )}
          
          <div className="lb_padding_top_15">
            <div className="input-with-select">
              
<div className="dropdown">
      <div className="dropbtn" onClick={toggleOptions}>
        <img src={isNetworkInputSelectedOptionImg} width="20" height="20" />
        <span> {isNetworkInputSelectedOption}</span>
        <span aria-hidden="true">
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="lb_txt_only_color_white"
          >
            <path
              class="lb_fill_white"
              d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
            ></path>
          </svg>
        </span>
      </div>
      <div className={`dropText ${dispCurrencyOptions ? "lb_display_block" : ""}`}>
        <a href="#" onClick={() => handleOptionChange("USDT","USDT ERC20")}>
          <img src={img_usdt} width="20" height="20" /> USDT ERC20
        </a>
        <a href="#" onClick={() => handleOptionChange("ETH","ETH ERC20")}>
          <img src={img_eth} width="20" height="20" /> ETH ERC20
        </a>
        <a href="#" onClick={() => handleOptionChange("BUSD","BUSD BEB20")}>
          <img src={img_busd} width="20" height="20" /> BUSD BEB20
        </a>
        <a href="#" onClick={() => handleOptionChange("BNB","BNB BEB20")}>
          <img src={img_bnb} width="20" height="20" /> BNB BEB20
        </a>
      </div>
    </div>

          <input onChange={handleInputChange}  className="lb_sales_amount_input lb_sales_amount_input_border" type="text" placeholder="Eg: 1000"/>       
             </div>
             </div>

             {!isMobileDevice && (
             <div class={`sale__arrow-wrapper ${isWalletConnected ? "lb_arrow_position2" : "lb_arrow_position"}`}><div class="sale__arrow">
            </div></div>
             )}

            {isMobileDevice && (
             <div class={`sale__arrow-wrapper lb_arrow_position_mobile`}><div class="sale__arrow">
            </div></div>
             )}

          
             <div className="lb_padding_top_10">
            <div className="input-with-select">
            <div className="dropdown">
      <div className="dropbtn" onClick={toggleOptions}>
        <img src={img_gverse} width="20" height="20" />
        <span> $GVERSE</span>
      </div>
      </div>
          <input  className="lb_sales_amount_input lb_sales_amount_input_border" value={total} type="text" disabled/>     
          </div></div>

          <div class="sale__exchange-info lb_with_100p"><div class="sale__exchange-item"><div class="sale__exchange-text"><span class="sale__exchange-title">MINIMUM BUY</span> $250</div></div><div class="sale__exchange-item"><div class="sale__exchange-text"><span class="sale__exchange-title">MAX</span> $25,000</div></div></div>

          {isMobileDevice && (
             <div className="lb_padding_top_10">
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handleEmailInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="text" placeholder="Enter Email"/>  
            </div>
            </div></div>
          )}
        

          {erroMsg && (
            <div className="lb_padding_top_5 lb_txt_orange">
            <div className="">{erroMsg}</div>
            </div>
          )}



          <div className="lb_padding_top_5 lb_txt_color_lightGreen">
          <Link to="/dashoard" className="lb_txt_e_dashoard_link"><div className="">Enter Dashboard{`>>`} </div></Link>
          </div>

          {(!isMobileDevice && (selectedOption.localeCompare("USDT") == 0 || selectedOption.localeCompare("BUSD") == 0)) && (
          <div>
            {(buyBtnActive || IsApprovalRequestNotDone) ? (<div className="lb_padding_top_15"><button className="lb_logout_btn lb_approve_btn_inactive"><ColorRing className="spinner" visible={IsApprovalRequestNotDone} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing><b>Approve</b></button></div>):(<div className="lb_padding_top_15"><button onClick={() => handle_busd_Usdt_approval_expenditure(selectedOption)} className="lb_logout_btn lb_approve_btn"><b>Approve</b></button></div>)}
          </div>
          )}
          <div className="lb_padding_top_15">
              
          {buyBtnActive ? (<div onClick={handleBuyClick1} className="lb_saleBTN lb_game_logo">Buy now</div>):(<div className="lb_saleBTN_inactive lb_game_logo"><ColorRing className="spinner" visible={IsBuyRequestNotDone} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>Buy now</div>)}
                
           
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
