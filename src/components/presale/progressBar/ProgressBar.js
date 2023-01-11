import React from "react";
import StyledProgressBar from "./ProgressBar.styles";

function ProgressBar() {
  return (
    <StyledProgressBar>
      <div class="lb_meter lb_animate">
        <span className="lb_width">
          <span></span>
        </span>
      </div>
      <div className="progressBar">
        <span>Stage 5 progress: </span>
        <span className="progressFigure">88%</span>
      </div>
      <div className="coinRaised progressIndicator">
        Raised <mark>2,686,660 USDT</mark> out of <mark>3,075,000 USDT</mark>
      </div>
      <div className="coinSold progressIndicator">
        Sold <mark>138,051,106 $GVERSE</mark> out of{" "}
        <mark>150,000,000 $GVERSE</mark>
      </div>
    </StyledProgressBar>
  );
}

export default ProgressBar;
