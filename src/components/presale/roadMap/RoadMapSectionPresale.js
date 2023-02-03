import React from "react";
import {
  Details,
  DetailsContainer,
  DetailsWrapper,
  HeaderText,
} from "../../../home/RoadMapSection";
import Header from "../../header/Header";

function RoadMapSectionPresale() {
  return (
    <div
      className="p-t-150 p-b-120"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="container mt-10">
        <div className="text-center mb-3">
          <Header text="ROADMAP" />
        </div>
        <HeaderText className="heading-6 burbank fw-bold text-center text-uppercase">
          The GreedyVerse Roadmap lays down the important milestones and
          expected development timeline for the project.
        </HeaderText>
        <DetailsContainer>
          <div className="row text-white">
            <DetailsWrapper className="col-lg-3 sm-l col-sm-4 col-12">
              <Details className="fw-bold pt-4">
                <h4>PHASE 1</h4>
                <ul>
                  <li>Greedy Clans development</li>
                  <li>Website V1 launch</li>
                  <li>White Paper</li>
                  <li>Community building </li>
                  <li>Tokenmetrics</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className="col-lg-3 sm-l col-sm-4 col-12">
              <Details className="fw-bold pt-4">
                <h4>PHASE 2</h4>
                <ul>
                  <li>Beta version (Greedy Clans)</li>
                  <li>Greedy Milita development (Game 2)</li>
                  <li>KYC Team & Contract Audits</li>
                  <li>Private Sales</li>
                  <li>Marketing and partnerships</li>
                  <li>Presales</li>
                  <li>NFT mints</li>
                  <li>Greedy Race development (Game 3)</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className="col-lg-3  sm-l col-sm-4 col-12">
              <Details className="fw-bold pt-4">
                <h4>PHASE 3</h4>
                <ul>
                  <li>DEX & CEX listings</li>
                  <li>Game full launch (Greedy Clans)</li>
                  <li>NFT marketplace</li>
                  <li>Greedy Wallet</li>
                  <li>Staking Dapp</li>
                  <li>GreedyDAO launch</li>
                  <li>Beta version (Greedy Militia)</li>
                  <li>GreedySwap Launch</li>
                  <li>Beta version (Greedy Race)</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className="col-lg-3 sm-l col-sm-4 col-12">
              <Details className="fw-bold pt-4">
                <h4>PHASE 4</h4>
                <ul>
                  <li>More CEX listings</li>
                  <li>Greedy Militia full launch</li>
                  <li>Huge marketing campaign</li>
                  <li>Greedy Race full Launch</li>
                  <li>Partnership with top KOLs</li>
                  <li>Onboard 100k daily players</li>
                  <li>Upscale the ecosystem</li>
                </ul>
              </Details>
            </DetailsWrapper>
          </div>
        </DetailsContainer>
      </div>
    </div>
  );
}

export default RoadMapSectionPresale;
