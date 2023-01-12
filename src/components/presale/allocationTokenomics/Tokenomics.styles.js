import styled from "styled-components";
const StyledTokenomics = styled.section`
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .allocationIntro {
    background: none;
    color: hsla(0, 0%, 81%, 0.8);
    font-size: 18px;
    width: 70%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    font-family: arial;
    text-align: center;
  }

  .frameHolder {
    width: 90%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 20px;
  }

  .overallContainer {
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .indicatorContainer {
    width: 28%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .indicatorList {
    list-style: none;
    display: flex;
    width: 95%;
    height: 40px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    line-height: 5;
    color: #fff;
    font-family: "supercellmagic";
    cursor: pointer;
    font-size: 14px;
  }

  .indicatorList:hover .indicator {
    border: 2px solid #f8790f;
  }

  .indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .indicatorChartContainer {
    position: relative;
    width: 40%;
    height: 50vh;
  }

  .indicatorChart {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .frameHolder {
      background-image: none !important;
      height: auto;
    }

    .overallContainer {
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .frameHolder {
      background-image: none !important;
      height: auto;
    }

    .overallContainer {
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .frameHolder {
      background-image: none !important;
      height: auto;
    }

    .allocationIntro {
      font-size: 14px;
      width: 90%;
    }

    .overallContainer {
      width: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }
`;

export default StyledTokenomics;
