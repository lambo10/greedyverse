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
<<<<<<< HEAD

  @media (min-width: 320px) and (max-width: 480px) {
    .supportList {
      width: 100%;
      justify-content: space-between;
    }
    .supportImgContainer {
      position: relative;
      width: 45%;
      border-radius: 10px;
      margin-top: 10px;
      height: 150px;
    }
  }
=======
>>>>>>> ad48899e29989a914c14d08b768d41331a47fa18
`;

export default StyledSupport;
