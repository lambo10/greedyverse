import React from "react";
import StyledSelectWallet from "./SelectWallet.styles";
import wallets from "../../../utils/wallet.array";

function SelectWallet({ connectWallet, setConnectWallet }) {
  return (
    <StyledSelectWallet>
      <div className="walletContainer">
        <div className="closeWallet">
          <span
            className="close"
            title="close"
            onClick={() => setConnectWallet(!connectWallet)}
          >
            X
          </span>
        </div>

        {wallets.map((item) => (
          <>
            <li className="perWallet">
              <div className="walletIcon">
                <img src={item.icon} />
              </div>
              <div className="walletTitle">{item.title}</div>
            </li>
          </>
        ))}
      </div>
    </StyledSelectWallet>
  );
}

export default SelectWallet;
