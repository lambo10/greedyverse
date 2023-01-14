import React from "react";
import StyledTokenomics from "./Tokenomics.styles";
import indicator from "../../../utils/tokenomicsIndicator.array";
import tokenAllocation from "../../../img/tokenomic-piechart.webp";
import tokenBg from "../../../img/tokenomic_bg.png";
import Header from "../../header/Header";

function Tokenomics() {
  return (
    <StyledTokenomics>
      <Header text="Allocation" />
      <header className="allocationIntro">
        The total maximum fixed supply of the game's token is 1,000,000,000
        $GVERSE, which will be distributed between the following areas in the
        Greedverse.
      </header>
      <div
        className=" frameHolder"
        style={{
          backgroundImage: `url(${tokenBg}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="overallContainer">
          <aside className="indicatorContainer">
            {indicator.map(
              (item, index) =>
                index < 4 && (
                  <li className="indicatorList">
                    <main className="indicatorText">{item.title}</main>
                    <span className="percent">{item.percent}</span>
                    <aside
                      style={{ backgroundColor: `${item.color}` }}
                      className="indicator"
                    ></aside>
                  </li>
                )
            )}
          </aside>
          <main className="indicatorChartContainer">
            <img
              src={tokenAllocation}
              alt="Token Allocation"
              title="Token Allocation"
              className="indicatorChart"
            />
          </main>
          <aside className="indicatorContainer">
            {indicator.map(
              (item, index) =>
                index > 3 && (
                  <li className="indicatorList">
                    <main className="indicatorText">{item.title}</main>

                    <span className="percent">{item.percent}</span>
                    <aside
                      style={{ backgroundColor: `${item.color}` }}
                      className="indicator"
                    ></aside>
                  </li>
                )
            )}
          </aside>
        </div>
      </div>
      <div className="seeTokenomics">
        See detailed info about tokenomics <a href="#">here</a>
      </div>
    </StyledTokenomics>
  );
}

export default Tokenomics;
