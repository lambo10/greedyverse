import styled from "styled-components";

const StyledSupport = styled.section`
  margin: auto;
  margin-top: 100px;
  width: 80%;
  height: auto;

  .supportList {
    width: 90%;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
  }

  .supportImgContainer {
    position: relative;
    width: 200px;
    border-radius: 10px;
    margin-top: 10px;
    height: 150px;
  }

  .supportImg {
    position: absolute;
    width: 90%;
    height: 100%;
    border-radius: 4px;
  }
`;

export default StyledSupport;
