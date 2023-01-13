import React from "react";
import StyledMention from "./Mention.styles";
import Header from "../header/Header";
import support from "../../utils/support.array";
import mentions from "../../utils/mentions.array";

function Mention() {
  return (
    <StyledMention>
      <Header text="Mentions" />
      <main className="mentionsList">
        {mentions.map((item) => (
          <div className="mentionsImgContainer">
            <img
              src={item.icon}
              title={item.title}
              alt={item.alt}
              className="mentionsImg"
            />
          </div>
        ))}
      </main>
    </StyledMention>
  );
}

export default Mention;
