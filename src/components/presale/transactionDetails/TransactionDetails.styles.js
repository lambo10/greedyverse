import styled from "styled-components";

const StyledTransactionDetails = styled.section`
  width: 49%;
  height: auto;

  .container {
    padding: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .subContainer {
    width: 48%;
  }

  .subContainer header {
    height: auto;
    padding: 0px;
    width: 100%;
    font-family: arial;
    color: #fff;
    font-weight: 500;
    background-color: transparent;
  }

  .container aside {
    color: rgba(255, 255, 255, 0.7);

    width: 100%;
    height: auto;
    word-wrap: break-word;
  }

  #address {
    font-size: 14px;
  }

  #selectCurrency {
    width: 100%;
  }

  .buttonHolder {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 10px;
  }

  .buttonHolder button {
    width: 20%;
    border: none;
    outline: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
  }
  .buy {
    background-color: #ffa500;
  }

  .claim {
    background-color: #333;
    margin-left: 10px;
  }

  .claim:hover {
    background-color: #ffa500;
  }

  .buy:hover {
    background-color: #333;
  }

  .enterAmount {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
    margin: auto;

    .container {
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .subContainer {
      width: 90%;
    }

    .subContainer header,
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 2;
      font-size: 18px;
    }

    .buttonHolder {
      justify-content: space-between;
      align-items: center;
      width: 70%;
    }

    .buttonHolder button {
      width: 35%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 98%;
    margin: auto;

    .container {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .subContainer {
      width: 90%;
    }

    .buttonHolder {
      justify-content: space-between;
      align-items: center;
      width: 70%;
    }

    .buttonHolder button {
      width: 35%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 98%;
    margin: auto;

    .container {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .subContainer {
      width: 80%;
    }

    .buttonHolder {
      justify-content: space-between;
      align-items: center;
      width: 70%;
    }

    .buttonHolder button {
      width: 35%;
    }
  }
`;

export default StyledTransactionDetails;
