import styled from "styled-components";

const StyledPresale = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  padding-bottom: 50px;

  .bg_shade {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #main {
    width: 80%;
    margin: auto;
    height: 100%;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logoContainer {
    width: 35%;
    margin: auto;
    height: 15vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }

  #logoImg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .socialMediaLinks {
    width: 30%;
    margin: auto;
    height: 10vh;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .socialLink {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .socialIconContainer {
    position: relative;
  }

  .socialIcon {
    width: 15px;
    height: 15px;
  }

  .connectWalletSection {
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 50px;
  }

  .connectWalletContainer {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .textProgressBarContainer {
    width: 47%;
    height: 100%;
  }

  .progressBarContainerHeader {
    background-color: transparent;
    color: #fff;
    height: auto;
    padding: 0;
    line-height: 1.5;
  }

  .progressBarMainText {
    padding: 5px;
    color: rgba(255, 255, 255, 0.8);
  }

  .coinRate {
    line-height: 1.5;
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    color: #fff;
  }

  .hurryNowText {
    line-height: 2;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #ffa500;
  }

  .buyCoinContainer {
    width: 47%;
    height: 100%;
  }

  .buyButtonContainer {
    width: 100%;
    height: 100%;
  }

  .buyButtonHeader {
    font-family: arial;
    text-align: center;
    height: auto;
    line-height: 2;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
  }

  .buttonContainer {
    width: 80%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    margin: auto;
    margin-top: 5px;
    cursor: pointer;
    font-family: "supercellmagic";
    font-size: 13px;
    outline: none;
    border: none;
  }

  .buttonContainer:hover {
    color: #333;
  }

  .accessoryContainer {
    width: 75%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffa500;
    margin-top: 20px;
  }

  .accessoryContainer a {
    text-decoration: none;
    color: #ffa500;
    letter-spacing: -0.5px;
    word-spacing: -0.5px;
    font-weight: 300;
  }

  .accessoryContainer a:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    #main {
      width: 95%;
      margin: auto;
      padding-top: 10px;
    }

    .logoContainer {
      width: 40%;
    }

    .socialMediaLinks {
      width: 50%;
    }

    .connectWalletSection {
      height: auto;
    }

    .connectWalletContainer {
      flex-direction: column-reverse;
    }

    .textProgressBarContainer {
      width: 90%;
      margin: auto;
      margin-top: 50px;
    }

    .progressBarContainerHeader {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 2;
    }

    .progressBarMainText {
      width: 80%;
      margin: auto;
      text-align: justify;
      font-size: 18px;
    }

    .buyCoinContainer {
      width: 100%;
    }

    .coinRate {
      width: 98%;
      margin: auto;
    }

    .hurryNowText {
      font-weight: 400;
    }

    .buyButtonHeader {
      font-weight: 400;
    }

    .accessoryContainer {
      width: 70%;
      font-weight: 500;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    #main {
      width: 95%;
      margin: auto;
      padding-top: 10px;
    }

    .logoContainer {
      width: 70%;
    }

    .socialMediaLinks {
      width: 70%;
    }

    .connectWalletSection {
      margin-top: 15px;
      height: auto;
    }

    .connectWalletContainer {
      flex-direction: column-reverse;
    }

    .textProgressBarContainer {
      width: 98%;
      margin-top: 50px;
    }

    .progressBarContainerHeader {
      text-align: center;
    }

    .progressBarMainText {
      width: 90%;
      margin: auto;
      text-align: justify;
    }

    .buyCoinContainer {
      width: 100%;
    }

    .coinRate {
      width: 98%;
      margin: auto;
    }

    .hurryNowText {
      font-weight: 400;
    }

    .buyButtonHeader {
      font-weight: 400;
    }

    .accessoryContainer {
      width: 90%;
      font-weight: 500;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    #main {
      width: 95%;
      margin: auto;
      padding-top: 10px;
    }

    .logoContainer {
      width: 70%;
    }

    .socialMediaLinks {
      width: 70%;
    }

    .connectWalletSection {
      margin-top: 15px;
      height: auto;
    }

    .connectWalletContainer {
      flex-direction: column-reverse;
    }

    .textProgressBarContainer {
      width: 98%;
      margin-top: 50px;
    }

    .progressBarContainerHeader {
      text-align: center;
    }

    .progressBarMainText {
      width: 90%;
      margin: auto;
      text-align: justify;
    }

    .buyCoinContainer {
      width: 100%;
    }

    .coinRate {
      width: 98%;
      margin: auto;
    }

    .hurryNowText {
      font-weight: 400;
    }

    .buyButtonHeader {
      font-weight: 400;
    }

    .accessoryContainer {
      width: 100%;
      font-weight: 500;
    }
  }
`;

export default StyledPresale;
