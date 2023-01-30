import "./home.css";
import img_videoThumbNail from "../img/monkey-video-bg.09ba4c4.png";
import img_play_btn from "../img/play-btn.cb88663.svg";
import React, { useState } from "react";

const VideoSection = () => {
  const videoId = "wAuoJYnd-CY"; // Replace with the actual YouTube video ID
  const url = `https://www.youtube.com/embed/${videoId}`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-fluid bg-black-1 p-t-180 p-b-160">
      <div className="container p-x-80">
        <div className="row g-0">
          <div className="col-12 col-xl-10">
            <h1 className="burbank heading-5 text-white text-uppercase">
            GREEDY CLANS <span className="text-green">NFTs</span>
            </h1>
            <div className="text-white text-1">
            These are the limited playable in-game assets in the Greedy Clans game. All NFTs are solely owned by the players and are classified into Lands, buildings, weapons and Warriors. <a className="lb_remove_text_decoration lb_blue-gradient-text" href="https://greedyverse.gitbook.io/white-paper/gameplay/in-game-nft-assets">Read more</a>
            </div>
          </div>
          <div className="col-12 py-5 position-relative">
        

            <iframe  className="lb_embeded_vid" src="https://www.youtube.com/embed/wAuoJYnd-CY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
