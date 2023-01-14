import styled from "styled-components";

const StyledSelectWallet = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  .walletContainer {
    width: 350px;
    height: auto;
    padding: 10px 10px 10px 10px;
    background-color: #000;

    position: absolute;
    top: 40%;
    border-radius: 7px;
  }

  .closeWallet {
    width: 100%;
    height: auto;
    line-height: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* padding: 4px; */
    font-family: none;
  }

  .close {
    border-radius: 50%;
    width: 21px;
    height: 21px;
    border: 1px solid #ffa500;
    display: flex;
    color: #ffa500;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: arial;
    font-size: 12px;
  }

  .close:hover {
    color: #fff;
  }

  .perWallet {
    width: 95%;
    height: 50px;
    color: #fff;
    display: flex;
    margin: auto;
    margin-top: 10px;
    border: 1px solid #ffa500;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .perWallet:hover {
    background-color: #ffa500;
    cursor: pointer;
  }

  .walletTitle {
    margin-left: 10px;
  }
`;

export default StyledSelectWallet;
