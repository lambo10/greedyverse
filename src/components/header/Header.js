import React from "react";
import StyledHeader from "./Header.styles";
import preHeader from "../../img/greedyVerseDivider2.png";
import header from "../../img/greedyVerseDivider.png";

function Header({ text }) {
  return (
    <StyledHeader>
      <main className="connectWalletHeader">
        <header className="connectWalletHeaderDivider">
          <img src={preHeader} alt="presale" />
        </header>
        <main className="connectWalletHeaderText">{text}</main>
        <aside className="connectWalletHeaderDivider">
          <img src={header} alt="presale" className="headerDividerImg" />
        </aside>
      </main>
    </StyledHeader>
  );
}

export default Header;
