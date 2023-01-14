import "./home.css";
import "./home2.css";
import React, { useState } from "react";

const Faq = () => {
  const [faq1Expanded, setFaq1Expanded] = useState(false);
  const [faq2Expanded, setFaq2Expanded] = useState(false);
  const [faq3Expanded, setFaq3Expanded] = useState(false);
  const [faq4Expanded, setFaq4Expanded] = useState(false);
  const [faq5Expanded, setFaq5Expanded] = useState(false);
  const [faq6Expanded, setFaq6Expanded] = useState(false);
  const [faq7Expanded, setFaq7Expanded] = useState(false);
  const [faq8Expanded, setFaq8Expanded] = useState(false);
  const [faq9Expanded, setFaq9Expanded] = useState(false);
  const [faq10Expanded, setFaq10Expanded] = useState(false);
  const [faq11Expanded, setFaq11Expanded] = useState(false);
  const [faq12Expanded, setFaq12Expanded] = useState(false);

  return (
    <div className="bg-yellow">
      <div className="container p-y-90">
        <div className="row g-0 justify-content-center">
          <div className="col-12 col-xl-9 p-3">
            <div
              id="faqCollapse"
              className="accordion accordion-flush bg-transparent"
            >
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq1Expanded(!faq1Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What is GreedyVerse?
                  </button>
                </h2>
                <div
                  id="faqq1"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq1Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    GreedyVerse is a Gamefi ecosystem building the next
                    generation of revolutionary crypto games starting with the
                    Greedy Clans........A multiplayer online real-time battle
                    strategy game built on the blockchain where players can
                    build, battle, earn and connect. The Greedy Clans game is
                    the first in a series of carefully designed Play2Earn fun
                    games with an innovative gaming economy, immersive gameplay
                    and good common sense built for game lovers all over the
                    world.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq2Expanded(!faq2Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What is the Greedy Clans?
                  </button>
                </h2>
                <div
                  id="faqq2"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq2Expanded ? "show" : ""
                  }`}
                ></div>
                <div
                  id="faqq2"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq2Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    Greedy Clans is a massively multiplayer online real-time
                    battle strategy pvp game built on the Binance Network where
                    players can build, battle, earn and connect. Earn in-game
                    rewards in exciting battle gameplays as you send your greedy
                    warriors to battle for riches and glory. The game would be
                    available on most native platforms.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq4Expanded(!faq4Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What is an ICO?
                  </button>
                </h2>
                <div
                  id="faqq4"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion
                      -collapse collapse ${faq4Expanded ? "show" : ""}`}
                >
                  <div className="accordion-body text-1 pe-5">
                    An initial coin offering (ICO) is the cryptocurrency
                    industry’s equivalent of an initial public offering (IPO). A
                    company seeking to raise money to create a new coin, app, or
                    service can launch an ICO as a way to raise funds.
                    Interested investors can buy into an initial coin offering
                    to receive a new cryptocurrency token issued by the company.
                    This token may have some utility related to the product or
                    service that the company is offering or represent a stake in
                    the company or project.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq5Expanded(!faq5Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What currencies can I use to purchase?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq5Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    You may purchase with USDT, ETH, BNB or CREDIT/DEBIT cards.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq6Expanded(!faq6Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What are benefits of joining the ICOs?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq6Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    Early GreedyVerse investors join the ICOs with the measured
                    expectation that the tokens will yield high returns after
                    launch.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq7Expanded(!faq7Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    Tell us more about the $GVERSE utilities.
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq7Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    GVERSE is the well-regulated native token of the GreedyVerse
                    project powering the entire ecosystem. This would be the
                    only currency used in all our DeFi product and services.
                    There are numerous usecases for the increasingly scarce
                    token. They would be used for in-game purchases and rewards,
                    Trading NFTs, Staking returns, Community rewards, Governance
                    and upgrades.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq8Expanded(!faq8Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    How are GreedyVerse games different from other games?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq8Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    GreedyVerse is changing the paradigm by building p2e games
                    that fix the issues faced by other crypto games. Most of the
                    current crypto games lack entertainment, got poor gaming
                    economy, high barrier entry, plagued with volatility and are
                    majorly disguised farming. We are changing all that.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq9Expanded(!faq9Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    How many games are in the GreedyVerse?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq9Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    The GreedyVerse project is comprised of 3 crypto
                    games(Greedy Clans, Greedy Militia and Greedy Race). The
                    Greedy Clans is in Alpha testings while the others are in
                    different stages of development.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq10Expanded(!faq10Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What platform is Greedy Clans currently available on?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq10Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    Greedy Clans is a mobile game supporting both Android and
                    IOS and available on Google Play and App Store. A web
                    version would be launched in the future.
                  </div>
                </div>
              </div>{" "}
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq11Expanded(!faq11Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    What blockchain does Greedy Clans use?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq11Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    Greedy Clans runs on the BNB Smart chain, would later run on
                    the BNB Application Sidechain (BAS), which would allow us
                    have our own chain dedicated to GreedyVerse only (Greedy
                    Chain).
                  </div>
                </div>
              </div>{" "}
              <div className="accordion-item border-0 bg-transparent">
                <h2 id="flush-headingOne" className="accordion-header">
                  <button
                    type="button"
                    onClick={() => setFaq12Expanded(!faq12Expanded)}
                    className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                  >
                    Do I need to buy NFT to start playing the game?
                  </button>
                </h2>
                <div
                  id="faqq5"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqCollapse"
                  className={`accordion-collapse collapse ${
                    faq12Expanded ? "show" : ""
                  }`}
                >
                  <div className="accordion-body text-1 pe-5">
                    No, you do not need an NFT to start playing the game! The
                    game is free-to-play for anyone with a mobile device. Greedy
                    Clans got both an on-chain and off-chain version.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
