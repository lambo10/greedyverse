import SignClient from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";
import React, { useState } from "react";

const WalletConnectModal = () => {
    const [signClient, setSignClient] = useState(false); 
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

    const useEffect = useEffect(() => {
        if(!signClient){
            createClient();
        }
    }, [signClient]);
    
}

export default WalletConnectModal;
