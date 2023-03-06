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
import axios from 'axios';
// import WalletConnectProvider from "@walletconnect/web3-provider";
import CountdownTimer from './CountdownTimer';
// import TranslateApp from "../Layout/TranslateApp";
import NotificationModal from '../Layout/NotificationModal';



const SeedSaleSection = () => {
  const [isTransferModalActive, setIsTransferModalActive] = useState(false);
  const [isNetworkInputSelectedOption, setNetworkInputSelectedOption] = useState("BUSD BEB20");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isInCorrectNetwork, setIsInCorrectNetwork] = useState(false);
  const [account, setAccount] = useState(null); 
  const seedSaleAddressETH = "0x6F155F1cB165635e189062a3e6e3617184E52672";
  const seedSaleAddress = "0x8ad2B931A9aB12caA19DdBe9b4cdF69a9f261374";
  const BusdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const UsdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const [purchase_amount, setPurchase_amount] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(() => {return "BUSD"});
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [email, setEmail] = useState(""); 
  const [erroMsg, setErroMsg] = useState("");
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [isnotificationModalOpen, setIsnotificationModalOpen] = useState(false);
  const [buyBtnActive, setBuyBtnActive] = useState(false);
  const [IsApprovalRequestNotDone, setIsApprovalRequestNotDone] = useState(false);
  const [IsBuyRequestNotDone, setIsBuyRequestNotDone] = useState(false);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [totalSeedSaleTokenPurchased, setTotalSeedSaleTokenPurchased] = useState(0);
  const [totalSeedSaleTokenPurchased_loading, setTotalSeedSaleTokenPurchased_loading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isNetworkInputSelectedOptionImg, setNetworkInputSelectedOptionImg] = useState(img_busd);
  const [gen_address, setGen_address] = useState("");
  const [minPurchaseAmount, setMinPurchaseAmount] = useState(100);
  const timerIdRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(900); // Time to run the function for (in seconds)
  const [orderExpired, setOrderExpired] = useState(false);
  const [gverseRateloading, setGverseRateloading] = useState(false);
  const [firstTimeLoad, setFirstTimeLoad] = useState(false);
  const [amountBelowMinimum, setAmountBelowMinimum] = useState(false);
  const ref = useRef(null);
  const iconStyling = {
    width: "30px",
    height: "30px",
    color: "#fff",
    margin: "5px",
    transform: "translateY(-10px)",
  };
  const [dispCurrencyOptions, setdispCurrencyOptions] = useState(false);
  const privateSaleNotStarted = false;

  const toggleOptions = () => {
    setdispCurrencyOptions((prev) => !prev);
  };

  const hideOptions = () => {
    setdispCurrencyOptions(false);
  };


  useEffect(() => {
  
   try{
    if (!window.ethereum) {
      setIsMobileDevice(true);
      setBuyBtnActive(true);
      getRate_from_api();
  }else{
      // checkAlreadyLogedIn();
      window.ethereum.on("chainChanged",networkschanged);
      getRate();
 }
 getTotalGverseSold();
   }catch(e){
    console.log(e);
   }
   

   return () => {
    stopTimer();
  };

    }, []);

    useEffect(() => {
        if(!isMobileDevice){
          if(firstTimeLoad){
            handleOptionChange_sub();
          }else{
            setFirstTimeLoad(true);
          }
        
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

    useEffect(() => {
        if (remainingTime <= 0) {
          stopTimer();
        }
      }, [remainingTime]);

      useEffect(() => {
        handleInputChange2();
      }, [rate]);

      useEffect(() => {
        if(notificationMsg != null){
          setIsnotificationModalOpen(true);
        }
      }, [notificationMsg]);

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
        setAmountBelowMinimum(false);
        setTimeout(() => {
                  setVisible(true);
                }, 500); 
    }

    function closePaymentSuccessfull(){
        setVisible(false);
        setShowPanel(false);
    }

    const networkschanged = () => {
        setErroMsg();
        // const element = ref.current;
        // setSelectedOption(element.value);
        getRate();
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
            handleOptionChange_sub();
            setErroMsg();
        });
    }else{
        setIsWalletConnected(false);
    }
  }

  const getPurchaseBalance = async() => {
  //   let Provider = new ethers.providers.Web3Provider(window.ethereum);
  //   let Contract = null;
  // try{
  //   if(selectedOption.localeCompare("USDT") == 0 || selectedOption.localeCompare("ETH") == 0){
  //       await checkAndSwitchNetwork();
  //        Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Provider);
  //        const _gversePurchases = await Contract.gversePurchases(account);
  //        setPurchaseBalance(_gversePurchases["gverseEquivalent"]);
  //   }else if(selectedOption.localeCompare("BUSD") == 0 || selectedOption.localeCompare("BNB") == 0){
  //       await checkAndSwitchNetworkBNB();
  //        Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Provider);
  //        const _gversePurchases = await Contract.gversePurchases(account);
  //        setPurchaseBalance(ethers.utils.formatUnits(_gversePurchases["gverseEquivalent"],'ether'));
  //   }
  // }catch(e){
  //   console.log("getPurchaseBalance output",e);
  // }
  }

  const getRate = async (_selectedOption) => {
    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    let Contract = null;
    setGverseRateloading(true);
   
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
            setGverseRateloading(false);
        }else{
            setRate(await Contract.gverse_usd_conversion_rate());
            setGverseRateloading(false);
        }
    }catch(e){
        console.log("geting rate erro",e);
    } 
    setAmountBelowMinimum(false);
  }



  const handleInputChange = (event) => {
    setPurchase_amount(event.target.value);
    setTotal(event.target.value * rate);
    if(isMobileDevice){
        setBuyBtnActive(true);
    }
  };

  const handleInputChange2 = () => {
    setPurchase_amount(purchase_amount);
    setTotal(purchase_amount * rate);
    if(isMobileDevice){
        setBuyBtnActive(true);
    }
  };

  const getRate_from_api = async () => {
    setGverseRateloading(true);
    try{
        const new_tmp_wallet_request = await axios.get("https://greedyverseblockchainoperation.herokuapp.com/get-seed-sale-rate?network="+selectedOption);
        if(new_tmp_wallet_request.data.success){
            setRate(parseFloat(new_tmp_wallet_request.data.msg)); 
            setGverseRateloading(false);
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
    if(!privateSaleNotStarted){
      // if(true){
    setBuyBtnActive(false);
    setIsBuyRequestNotDone(true);

    if(isMobileDevice){
        startTransferPayment();
    }else{


      if(((purchase_amount >= minPurchaseAmount) && (selectedOption === "USDT")) || ((purchase_amount >= minPurchaseAmount) && (selectedOption === "BUSD")) || ((((purchase_amount * rate)/5000) >= minPurchaseAmount) && (selectedOption === "BNB")) || ((((purchase_amount * rate)/5000) >= minPurchaseAmount) && (selectedOption === "ETH"))){

    let Provider = new ethers.providers.Web3Provider(window.ethereum);
    let Signer = Provider.getSigner();
    
    try{
    if(selectedOption.localeCompare("USDT") == 0){
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
        await Contract.receiveBUSD(ethers.utils.parseEther(purchase_amount)).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            getTotalGverseSold();
            stopTimer();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("ETH") == 0){
        const options = {
            value: ethers.utils.parseEther(purchase_amount),
            gasLimit: 4e5,
        }
        let Contract = new ethers.Contract(seedSaleAddressETH,seedSaleAbi,Signer);
        await Contract.receiveBNB(options).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            getTotalGverseSold();
            stopTimer();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("BUSD") == 0){
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
        await Contract.receiveBUSD(ethers.utils.parseEther(purchase_amount)).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            getTotalGverseSold();
            stopTimer();
            displayPaymentSuccessfull();
            console.log("Transaction output",e);
        });
    }else if(selectedOption.localeCompare("BNB") == 0){
        const options = {
            value: ethers.utils.parseEther(purchase_amount),
            gasLimit: 4e5,
        }
        let Contract = new ethers.Contract(seedSaleAddress,seedSaleAbi,Signer);
        await Contract.receiveBNB(options).then(e => {
            setIsBuyRequestNotDone(false);
            setBuyBtnActive(true);
            getPurchaseBalance();
            getTotalGverseSold();
            stopTimer();
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
                    setAmountBelowMinimum(true);
                }else if(error.includes("Transfer failed")){
                    setErroMsg("Transfer failed. Pls try again");
                }
                setBuyBtnActive(true);
    }
}else{
  setErroMsg("Amount Below Minimum");
  setBuyBtnActive(true);
  setAmountBelowMinimum(true);
}
    }
}else{
  setNotificationMsg("Private Sale not Started");
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

  const handleOptionChange_sub = async () => {
    try{

            if(selectedOption.localeCompare("BUSD") == 0 || selectedOption.localeCompare("BNB") == 0){

                      const networkId = 56; // replace with the ID of the network you want to switch to

                      if (window.ethereum) {
                        // Request account access if needed
                        await window.ethereum.request({ method: 'eth_requestAccounts' });

                        // Switch the network
                        await window.ethereum.request({
                          method: 'wallet_switchEthereumChain',
                          params: [{ chainId: `0x${networkId.toString(16)}` }]
                        });

                        getRate();
                      } else {
                        setErroMsg('Metamask not detected');
                      }

                }else{
                    const networkId = 1; // replace with the ID of the network you want to switch to

                    if (window.ethereum) {
                      // Request account access if needed
                      await window.ethereum.request({ method: 'eth_requestAccounts' });

                      // Switch the network
                      await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: `0x${networkId.toString(16)}` }]
                      });

                      getRate();
                    } else {
                      setErroMsg('Metamask not detected');
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
                await Contract.approve(seedSaleAddressETH, ethers.utils.parseEther(purchase_amount)).then(e => {
                    setBuyBtnActive(true);
                    setIsApprovalRequestNotDone(false);
                    setAmountBelowMinimum(false);
                });
                
                }
            }else if(paymentOption.localeCompare("BUSD") == 0){
                if(await checkAndSwitchNetworkBNB()){
                let Provider = new ethers.providers.Web3Provider(window.ethereum);
                let Signer = Provider.getSigner();
                let Contract = new ethers.Contract(BusdAddress,typicalTokenJsonABI,Signer);
                await Contract.approve(seedSaleAddress, ethers.utils.parseEther(purchase_amount)).then(e => {
                    setBuyBtnActive(true);
                    setIsApprovalRequestNotDone(false);
                    setAmountBelowMinimum(false);
                });
                }
            }
        }catch(e){
            var error = e.toString();
            setErroMsg(error);
        }
        }else{
          handleOptionChange_sub();
        }
    }else{
        setErroMsg("Please Connect Wallet")
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
        setNotificationMsg(type+" Copied successfully");
    
    }catch(e){
        console.log("copy erro",e);
    }
}

const startTimer = (tmpWalletRequest) => {
    const id = setInterval(() => {
            startPaymentReciveChecks(tmpWalletRequest);
            setRemainingTime((prevTime) => prevTime - 20);   
    }, 20000);

    timerIdRef.current = id
    console.log("here ---- here --- here");
  };

  const stopTimer = (_dispSuccessfull = false) => {
    try{
        console.log("timer object->",timerIdRef.current);
        clearInterval(timerIdRef.current);
        if(_dispSuccessfull){
        displayPaymentSuccessfull();
        }
    }catch(e){
        console.log("Erro Stoping timer",e);
    }
  };

async function startPaymentReciveChecks(new_tmp_wallet_request){
  setErroMsg("");
    const check_seed_sale_payments = await axios.get("https://greedyverse.co/api/check_seedSale_payments.php?gen_address="+new_tmp_wallet_request.data.gen_address+"&email="+email+"&token="+selectedOption+"&amount="+purchase_amount);
      
       if (check_seed_sale_payments.data.success) {
        stopTimer(true);
        setIsTransferModalActive(false);
        getTotalGverseSold();
      }
}

const setOrderExpired_func = (_state) => {
    setOrderExpired(_state);
    stopTimer();
}

async function startTransferPayment(){
  setErroMsg("");
    setOrderExpired_func(false);
   try{
   if(email === '' || email == null){
    setErroMsg("Pls Enter Email");
    setIsBuyRequestNotDone(false);
    setBuyBtnActive(true);
   }else{
    if(((purchase_amount >= minPurchaseAmount) && (selectedOption === "USDT")) || ((purchase_amount >= minPurchaseAmount) && (selectedOption === "BUSD")) || ((((purchase_amount * rate)/5000) >= minPurchaseAmount) && (selectedOption === "BNB")) || ((((purchase_amount * rate)/5000) >= minPurchaseAmount) && (selectedOption === "ETH"))){
        const new_tmp_wallet_request = await axios.get("https://greedyverse.co/api/create_new_tmp_wallet.php?email="+email);
        setGen_address(new_tmp_wallet_request.data.gen_address);
        startTimer(new_tmp_wallet_request);

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

  const closeNotificationModal = () => {
    setIsnotificationModalOpen(false);
    setNotificationMsg(null);
  }

  async function getTotalGverseSold(){
    setTotalSeedSaleTokenPurchased_loading(true);
      try{
        const check_seed_sale_payments = await axios.get("https://greedyverse.co/api/checkTotalAmountPurchasedOnSeedSale.php");
        
         if (check_seed_sale_payments.data.success) {
          if(privateSaleNotStarted){
            setTotalSeedSaleTokenPurchased(0);
          }else{
            setTotalSeedSaleTokenPurchased(check_seed_sale_payments.data.amount);
          }

          setTotalSeedSaleTokenPurchased_loading(false);

        }
      }catch(e){
        console.log(e);
      }
  }

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
{/* 
      <div className="">
      <TranslateApp/>
      </div> */}

      <div>
      {isnotificationModalOpen && (
        <NotificationModal isOpen={isnotificationModalOpen} text={notificationMsg} zIndex={2000} onClose={closeNotificationModal}/>
      )}
      </div>
      

        <div >

        {isTransferModalActive && (
<div className={`blue-checkmark-container_lpadding`}>
<div className=" lb_txt_center lb_padding_full20">

{!orderExpired && (
    <div className="lb_game_logo lb_transfer_payment_modal_div">
        <div onClick={()=>{setIsTransferModalActive(false); stopTimer()}} className="lb_txt_right lb_modalCloseBTN"><img src={img_closeBTN} width={20} height={20} /></div>
    <div className="lb_tp_padding">
    <div className="lb_transfer_payment_header_container"><div className="lb_transfer_payment_header"><b>Transfer <br/> {purchase_amount} {selectedOption} to</b></div>
    <div className="lb_tp_timer"> <CircularCountdownTimer onOrderExpired={setOrderExpired_func} duration={900}
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
)}

{orderExpired && (
    <div className="lb_game_logo lb_orderExpired_modal_div">
        <div className="lb_tp_padding">
            <br/><br/><br/><br/>
        <div className="lb_transfer_payment_header lb_txt_only_color_white"><b>Order has <br/> Expired!</b></div>
        <br/>
        <div className="lb_odf_txtPadding1">
        No payment was detected within the given time. To pay for your order, please restart the payment process.
        </div>
        <div className="lb_margin_top_10"><button onClick={()=>{setIsTransferModalActive(false); stopTimer()}} class="apes-btn-primary blackColor lb_background_white" data-v-2a374f33="">Back</button></div>
        </div>
    </div>
)}

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
    <div className='lb_txt_only_color_white'><h3>Payment Successful</h3></div>
    <div className="lb_padding_top_15"><a href='/dashoard' className='lb_remove_text_decoration lb_ps_dashboard_btn'><b>Dashboard</b></a></div>
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
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
            data-v-2a374f33=""
          >
            <span className="">Private Sale</span>
          </div>

         <div className="lb_txt_only_color_white lb_txt_size_17 lb_padding_top_10">
          <div>Ends In</div>
         <b><CountdownTimer className="" targetDate="2023-03-13T13:00:00Z" /></b>
         </div>
         
          {!isMobileDevice && (
            <div>
          <div className="lb_padding_top_15_real">
          {!isWalletConnected && (
          // <a id="connect" onClick={() => handleconnect()} className="lb_connect_wallet_txt lb_remove_text_decoration lb_cusor_pointer">
          //                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
          //           &nbsp; Connect Wallet
          //   </a>
            <div onClick={() => handleconnect()} className="lb_txt_center lb_cusor_pointer"><div className="lb_game_logo lb_walletAddress"><div className="lb_game_logo lb_txt_size_12 lb_txt_only_color_white"><b>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16"> <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path> </svg>
         &nbsp; Connect Wallet
              
              </b></div></div></div>
          )}
          {isWalletConnected && (
            // <div><div className="lb_txt_color_white_only">Wallet Address</div><div className="lb_txt_size_20 lb_txt_color_lightGreen"><b>{account.slice(0,4)+"..."+account.slice((account.length-4),account.length)}</b></div><div><button onClick={() => {setIsWalletConnected(false); window.ethereum.disconnect();}} className="lb_logout_btn">Disconnect</button></div></div>
            <div className="lb_txt_center"><div className="lb_game_logo lb_walletAddress"><div className="lb_game_logo lb_txt_size_17 lb_txt_only_color_white"><b>{account.slice(0,4)+"..."+account.slice((account.length-4),account.length)}</b> <button onClick={() => {setIsWalletConnected(false); window.ethereum.disconnect();}} className="lb_logout_btn2"><img src={img_closeBTN} width={20} height={20} /></button></div></div></div>
         )}
          </div>
          </div>
          )}

<div className="lb_2sideBTN_row lb_padding_top_10">
          <div className="lb_2sideBTN lb_align-self_start">

          <div className="lb_width_100P lb_txt_only_color_white lb_txt_size_12 ">Private sale</div>
            <div className="">
            <b><span className="gradient_txt_color">$0.0002</span></b>
            </div>
           
          </div>
          <div className="lb_2sideBTN lb_align-self_end">
          <div className="lb_width_100P lb_txt_only_color_white lb_txt_size_12">Listing Price</div>
            <div className="">
            <b><span className="gradient_txt_color">$0.0008</span></b>
            </div>
          </div>
        </div>

          <div className="lb_txt_center lb_padding_top_15_real">
            <div className="lb_game_logo lb_txt_color_orange2">
              {!totalSeedSaleTokenPurchased_loading && (
                <div><b>{addCommas(totalSeedSaleTokenPurchased)}</b> <span> Tokens sold</span></div>
              )}

              {totalSeedSaleTokenPurchased_loading && (
                  <div><ColorRing className="spinner" visible={totalSeedSaleTokenPurchased_loading} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing></div>
                )}
            
            </div>
          
          </div>

         
          
          <div className="lb_padding_top_10">
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
      {isMobileDevice && (
      <div className={`dropText ${dispCurrencyOptions ? "lb_display_block" : ""}`}>
        <a href="#" onClick={() => handleOptionChange("USDT","USDT ERC20")}>
          <img src={img_usdt} width="20" height="20" /> USDT ERC20
        </a>
        <a href="#" onClick={() => handleOptionChange("ETH","ETH ERC20")}>
          <img src={img_eth} width="20" height="20" /> ETH ERC20
        </a>
        <a href="#" onClick={() => handleOptionChange("BUSD","BUSD BEB20")}>
          <img src={img_busd} width="20" height="20" /> BUSD BEP20
        </a>
        <a href="#" onClick={() => handleOptionChange("BNB","BNB BEB20")}>
          <img src={img_bnb} width="20" height="20" /> BNB BEP20
        </a>
      </div>
      )}
       {!isMobileDevice && (
      <div className={`dropText ${dispCurrencyOptions ? "lb_display_block" : ""}`}>
        {/* <a href="#" onClick={() => handleOptionChange("USDT","USDT ERC20")}>
          <img src={img_usdt} width="20" height="20" /> USDT ERC20
        </a>
        <a href="#" onClick={() => handleOptionChange("ETH","ETH ERC20")}>
          <img src={img_eth} width="20" height="20" /> ETH ERC20
        </a> */}
        <a href="#" onClick={() => handleOptionChange("BUSD","BUSD BEB20")}>
          <img src={img_busd} width="20" height="20" /> BUSD BEB20
        </a>
        <a href="#" onClick={() => handleOptionChange("BNB","BNB BEB20")}>
          <img src={img_bnb} width="20" height="20" /> BNB BEB20
        </a>
      </div>
      )}
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
      {gverseRateloading && (
         <div className="lb_loader_in_input"><ColorRing className="spinner lb_game_logo" visible={gverseRateloading} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing></div>
      )}
          <input  className={`lb_sales_amount_input lb_sales_amount_input_border ${gverseRateloading ? "lb_display_none" : "lb_display_block"}`} value={total} type="text" disabled/>     
          </div></div>

          <div class="sale__exchange-info lb_with_100p"><div class="sale__exchange-item"><div class="sale__exchange-text"><span class="sale__exchange-title">MINIMUM BUY</span> $100</div></div><div class="sale__exchange-item"><div class="sale__exchange-text"><span class="sale__exchange-title">MAX</span> $25,000</div></div></div>
         

          {/* {!isMobileDevice && (
          <div className="lb_dapp_Notice">
            <div>How to buy</div>
            <div>1. Connect wallet</div>
            <div>2. Input desired amount</div>
            <div>3. Approve transactions</div>
            <div>4. Swap for $GVERSE tokens</div>
          </div>
          )}

          {isMobileDevice && (
          <div className="lb_dapp_Notice">
            <div>How to buy</div>
            <div>1. Input desired amount</div>
            <div>2. Enter email address</div>
            <div>3. Send tokens to the wallet shown</div>
            <div>4. Wait for transaction confirmation</div>
          </div>
          )} */}

        

          {isMobileDevice && (
             <div className="lb_padding_top_10">
             <div className="input-with-select-email">
          
            <div className="lb_padding_top_5 lb_game_logo">
            <input onChange={handleEmailInputChange}  className="lb_sales_amount_input-email lb_sales_amount_input_border lb_with_100p" type="text" placeholder="Enter Email"/>  
            </div>
            </div></div>
          )}
        

          {erroMsg && (
            <div className="lb_padding_top_5 lb_txt_red">
            <div className="">{erroMsg}</div>
            </div>
          )}

          {(!isMobileDevice && (selectedOption.localeCompare("USDT") == 0 || selectedOption.localeCompare("BUSD") == 0)) && (
          <div>
            {(buyBtnActive || IsApprovalRequestNotDone) ? (
              <div>
                 {amountBelowMinimum ? (
                  <div className="lb_padding_top_10"><button onClick={() => handle_busd_Usdt_approval_expenditure(selectedOption)} className="lb_logout_btn lb_approve_btn"><b>Approve</b></button></div>
                 ):(
                  <div className="lb_padding_top_10"><button className="lb_logout_btn lb_approve_btn_inactive"><ColorRing className="spinner" visible={IsApprovalRequestNotDone} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing><b>Approve</b></button></div>
                 )}
                
              </div>
            
            ):(<div className="lb_padding_top_10"><button onClick={() => handle_busd_Usdt_approval_expenditure(selectedOption)} className="lb_logout_btn lb_approve_btn"><b>Approve</b></button></div>)}
          </div>
          )}
          
          <div className="lb_padding_top_15">
              
          {buyBtnActive ? (<div onClick={handleBuyClick1} className="lb_saleBTN lb_game_logo">Buy now</div>):(<div className="lb_saleBTN_inactive lb_game_logo"><ColorRing className="spinner" visible={IsBuyRequestNotDone} height="30" width="30" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}></ColorRing>Buy now</div>)}
                
           
          </div>

          {/* <div className="lb_2sideBTN_row lb_padding_top_15">
          <div className="lb_2sideBTN lb_align-self_start">
            <div className="lb_2sideBTN_design lb_dapp_grey">
            <b><span className="lb_txt_only_color_white">15,051,423</span></b>
            </div>
            <div className="lb_width_100P lb_txt_only_color_white lb_txt_size_12 ">tokens sold</div>
          </div>
          <div className="lb_2sideBTN lb_align-self_end">
            <div className="lb_2sideBTN_design">
            <b>Dashboard</b>
            </div>
            <Link to="/dashoard" className="lb_txt_e_dashoard_link"><div className="lb_width_100P lb_txt_only_color_white lb_txt_size_12">Enter dashboard</div></Link>
          </div>
        </div> */}


        <div className="lb_txt_center lb_padding_top_10">

        <Link to="/dashoard" className="lb_txt_e_dashoard_link lb_cusor_pointer">
            <div className="lb_dashboardBTN lb_game_logo">
            <b>Enter Dashboard</b>
            </div>
        </Link>

          </div>


          <div className="lb_2sideBTN_row lb_padding_top_15">
          <div className="lb_2sideBTN_45 lb_align-self_start">
            <div className="">
            <b><a href="https://greedyverse.gitbook.io/white-paper/other-links/how-to-buy" className="lb_txt_only_color_white lb_cusor_pointer lb_txt_only_color_orange_onHover">How to buy?</a></b>
            </div>
          </div>
          <div className="lb_2sideBTN_45 lb_align-self_end">
            <div className="">
            <b><a href="https://t.me/GreedyVerse_Support" className="lb_txt_only_color_white lb_cusor_pointer lb_txt_only_color_orange_onHover">New to crypto?</a></b>
            </div>
          </div>
        </div>


        </div>

        {isMobileDevice && (
        <div className="lb_salePanel lb_game_logo lb_width_60Mob_60Dex">
          <div
            className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0 lb_txt_size_15"
            data-v-2a374f33=""
          >
            <span className="">REFER and EARN</span>
          </div>
          <br/>
             <div className="lb_txt_only_color_white lb_margin_bottom_20">
             Invite your friends and earn 10% of $GVERSE tokens bought
             </div>
             <Link to="/dashoard" className="lb_cusor_pointer"><button className="lb_approve_btn">Get Started</button></Link>
          </div>
        )}


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
export default SeedSaleSection;
