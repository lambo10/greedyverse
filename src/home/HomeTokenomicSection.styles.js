import styled from "styled-components";

const StyledHomeTokenomicsSection = styled.section`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  .indicatorContainer {
    width: 25%;
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
    color: #000;
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

  .seeTokenomics {
    line-height: 2;
    color: rgba(255, 255, 255, 0.5);
  }

  .seeTokenomics a {
    color: #fbae04;
    text-decoration: none;
  }

  .seeTokenomics a:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    .indicatorContainer {
      width: 80%;
    }

    .indicatorChartContainer {
      width: 80%;
    }
  }
`;

export default StyledHomeTokenomicsSection;
