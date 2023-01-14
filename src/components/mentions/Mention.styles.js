import styled from "styled-components";

const StyledMention = styled.section`
  margin: auto;
  margin-top: 100px;
  width: 80%;
  height: auto;

  .mentionsList {
    width: 90%;
    margin: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10px;
  }

  .mentionsImgContainer {
    position: relative;
    width: 200px;
    border-radius: 10px;
    margin-top: 10px;
    height: 150px;
  }

  .mentionsImg {
    position: absolute;
    width: 90%;
    height: 100%;
    border-radius: 4px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .mentionsList {
      width: 100%;
      justify-content: space-between;
    }
    .mentionsImgContainer {
      position: relative;
      width: 45%;
      border-radius: 10px;
      margin-top: 10px;
      height: 150px;
    }
  }
`;

export default StyledMention;
