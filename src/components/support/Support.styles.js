import styled from "styled-components";

const StyledSupport = styled.section`
  margin: auto;
  margin-top: 100px;
  width: 80%;
  height: auto;
  /* background-color: red; */

  .supportList {
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .supportImgContainer {
    width: 200px;
    height: 100px;
    position: relative;
  }

  .supportImg {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    color: #fff;
  }
`;

export default StyledSupport;
