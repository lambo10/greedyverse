import styled from "styled-components";

const StyledError = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .errorCode {
    font-size: 40px;
    color: #fff;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffa500;
    letter-spacing: -3px;
  }
`;

export default StyledError;
