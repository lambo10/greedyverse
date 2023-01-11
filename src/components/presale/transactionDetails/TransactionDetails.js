import React from "react";
import StyledTransactionDetails from "./TransactionDetails.styles";

function TransactionDetails() {
  const v = "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX";
  return (
    <StyledTransactionDetails>
      <main className="container">
        <div className="subContainer">
          <header>Connected Address:</header>
          <aside id="address">{v}</aside>
        </div>
        <div className="subContainer">
          <header>Current Price:</header>
          <aside>1 USDT = 30.77 $GVERSE</aside>
        </div>
      </main>
      <main className="container">
        <div className="subContainer">
          <header>Minimum Purchase:</header>
          <aside>100 $GVERSE</aside>
        </div>

        <div className="subContainer">
          <header className="connectedAddress">You already bought:</header>
          <aside>0 $GVERSE</aside>
        </div>
      </main>

      <main className="container">
        <div className="subContainer">
          <header>Select Currency</header>
          <select id="selectCurrency">
            <option>ETH</option>
            <option>USDT</option>
            <option>USDC</option>
            <option>BUSD</option>
            <option>DIA</option>
          </select>
        </div>
        <div className="subContainer">
          <header className="connectedAddress">Enter Amount:</header>
          <input type="text" className="enterAmount" />
        </div>
      </main>

      <main className="buttonHolder">
        <button className="buy">Buy</button>
        <button className="claim">Claim</button>
      </main>
    </StyledTransactionDetails>
  );
}

export default TransactionDetails;
