import './home.css';
import './home2.css';
import React, { useState } from 'react';

const Faq = () => {

    const [faq1Expanded, setFaq1Expanded] = useState(false);
    const [faq2Expanded, setFaq2Expanded] = useState(false);
    const [faq3Expanded, setFaq3Expanded] = useState(false);
    const [faq4Expanded, setFaq4Expanded] = useState(false);
    const [faq5Expanded, setFaq5Expanded] = useState(false);
  
    return (
      <div className="bg-yellow">
        <div className="container p-y-90">
          <div className="row g-0 justify-content-center">
            <div className="col-12 col-xl-9 p-3">
              <div id="faqCollapse" className="accordion accordion-flush bg-transparent">
                <div className="accordion-item border-0 bg-transparent">
                  <h2 id="flush-headingOne" className="accordion-header">
                    <button
                      type="button"
                      onClick={() => setFaq1Expanded(!faq1Expanded)}
                      className="accordion-button text-1 font-semibold bg-transparent gap-3 collapsed"
                    >
                      What is Meta Apes?
                    </button>
                  </h2>
                  <div
                    id="faqq1"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#faqCollapse"
                    className={`accordion-collapse collapse ${faq1Expanded ? 'show' : ''}`}
                  >
                    <div className="accordion-body text-1 pe-5">
                      Meta Apes is a free-to-play, play-and-earn MMO strategy game. It is set in a post-apocalyptic world, in which humanity has ended and a new era ruled by Apes has begun. Next on the agenda is space domination. Each pri-mate (yes, you) will have to work closely with their Gang to become the strongest Clan and win the ultimate race to space.
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
                      Why is Meta Apes using blockchain technology?
                    </button>
                  </h2>
                  <div
                    id="faqq2"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#faqCollapse"
                    className={`accordion-collapse collapse ${faq2Expanded ? 'show' : ''}`}
                    ></div>
                    <div
                    id="faqq2"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#faqCollapse"
                    className={`accordion-collapse collapse ${faq2Expanded ? 'show' : ''}`}
                  >
                    <div className="accordion-body text-1 pe-5">
                      The biggest differences between Meta Apes and another web2 mobile game are decentralization and ownership. This means the game-related data lives on the blockchain instead of a centralized server, and players have full control and ownership over this data. Additionally, Meta Apes aims to provide a fun gaming experience with a strong narrative and a sense of community.
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
                      Can I play Meta Apes on my computer or only on my phone?
                    </button>
                  </h2>
                  <div
                    id="faqq4"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#faqCollapse"
                    className={`accordion
                      -collapse collapse ${faq4Expanded ? 'show' : ''}`}
                      >
                        <div className="accordion-body text-1 pe-5">
                          Meta Apes is a mobile game, but a destop version is currently under development.
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
                          How do I get started with Meta Apes?
                        </button>
                      </h2>
                      <div
                        id="faqq5"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#faqCollapse"
                        className={`accordion-collapse collapse ${faq5Expanded ? 'show' : ''}`}
                      >
                        <div className="accordion-body text-1 pe-5">
                          To get started with Meta Apes, you can download the game from the App Store or Google Play. Once you have the game installed, you can create your account and start playing. You can also join a Clan or create your own to work with other players towards the ultimate goal of space domination.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
   
}
export default Faq;