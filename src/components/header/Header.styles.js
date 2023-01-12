import styled from "styled-components";

const StyledHeader = styled.section`
  .connectWalletHeader {
    background: transparent;
    z-index: 100;
    width: 80%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-family: "supercellmagic";
  }

  .connectWalletHeaderText {
    line-height: 2;
    font-size: 20px;
    margin-top: 3px;
    color: #fff;
  }

  .connectWalletHeaderDivider {
    background-color: transparent;
    height: 30px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .connectWalletHeader {
      width: 90%;
      margin-top: 0px;
    }

    .connectWalletHeaderText {
      font-size: 24px;
      line-height: 1.5;
      margin-top: 0px;
    }

    .connectWalletHeaderDivider {
      background-color: transparent;
      height: 40px;
    }

    .headerDividerImg {
      width: 95%;
    }
  }
`;

export default StyledHeader;
