import React from "react";
import StyledError from "./Error.styles";
import bgImage from "../../img/private_sale_background.png";

function Error() {
  return (
    <StyledError
      style={{
        backgroundImage: `url(${bgImage}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
      }}
    >
      <div className="errorCode">404 | Page Not Found!</div>
    </StyledError>
  );
}

export default Error;
