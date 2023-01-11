import React from "react";
import StyledSupport from "./Support.styles";
import Header from "../header/Header";
import support from "../../utils/support.array";
function Support() {
  return (
    <StyledSupport>
      <Header text="Supported by" />
      {/* <main className="supportList">
        {support.map((item) => (
          <div className="supportImgContainer">
            <img
              src={item.icon}
              title={item.title}
              alt={item.alt}
              className="supportImg"
            />
          </div>
        ))}
      </main> */}
    </StyledSupport>
  );
}

export default Support;
