import styled, { isStyledComponent } from "styled-components";

const StyledProgressBar = styled.div`
  margin-top: 30px;
  padding-top: 24px;

  .progressBar {
    color: #ffa500;
    width: 95%;
    margin: auto;
    margin-top: 5px;
    word-spacing: -1px;
  }

  .progressFigure {
    font-weight: 800;
  }

  .progressIndicator {
    line-height: 2;
    font-weight: 300;
    font-size: 15px;
    text-align: start;
    letter-spacing: -0.6px;
    color: rgba(255, 255, 255, 0.7);
  }

  .progressIndicator mark {
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 10px;
    padding-top: 10px;

    .progressBar {
      width: 70%;
      margin: auto;
      line-height: 2;
    }

    .progressIndicator {
      font-size: 18px;
      width: 70%;
      margin: auto;
    }

    .progressIndicator mark {
      background-color: transparent;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 10px;
    padding-top: 10px;

    .progressIndicator {
      line-height: 1.3;
      width: 95%;
      margin: auto;
      font-weight: 400;
      font-size: 15px;
      text-align: start;
      letter-spacing: -0.6px;
      color: rgba(255, 255, 255, 0.7);
    }

    .progressIndicator mark {
      background-color: transparent;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 10px;
    padding-top: 10px;

    .progressIndicator {
      line-height: 1.3;
      width: 95%;
      margin: auto;
      font-weight: 400;
      font-size: 15px;
      text-align: start;
      letter-spacing: -0.6px;
      color: rgba(255, 255, 255, 0.7);
    }

    .progressIndicator mark {
      background-color: transparent;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

export default StyledProgressBar;
