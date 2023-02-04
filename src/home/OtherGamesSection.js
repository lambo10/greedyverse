import "./home.css";
import "./home2.css";
import greedyMilitia from "../img/greedyMilitia.png";
import greedyRace from "../img/greedyRace.png";
import styled from "styled-components";
import colors from "../constants/colors";

const OtherGamesSection = () => {
  return (
    <div className="bg-black-1 lb_padding_top_45">
      <div className="container mt-10">
        <div className="text-center mb-3">
          {/* <img src={HeaderTop} alt='header-top' className='mb-3' /> */}
          <h1 className="burbank heading-5 text-white text-uppercase">
            OTHER <span className="text-green">GAMES</span>
          </h1>
        </div>

        <div className="row">
            <div className="col-md-6 lb_padding_full30 lb_top_0_onmMobile">
                <div className=" glowBorderDiv">
                <img src={greedyMilitia} className="lb_image_withine_glowBorderDiv" />
                </div>
            </div>

            <div className="col-md-6 lb_padding_full30 lb_top_0_onmMobile">
                <div className=" glowBorderDiv">
                <img src={greedyRace} className="lb_image_withine_glowBorderDiv" />
                </div>
            </div>

        </div>
        

      </div>
    </div>
  );
};

const HeaderImage = styled.img`
  height: 20px;
`;
export const HeaderText = styled.h4`
  color: ${colors.darkText};
`;
export const DetailsWrapper = styled.div`
  position: relative;
  &::after {
    border-left: 1px dashed #fff;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    padding-left: 1rem;
    margin-left: 15px;
  }
  &::before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEUAAADyzoryzoryzorTsn3yzoryzoryzoryzoryzoryzoryzoryzoryzoryzoqxk2nyzoryzoryzoryzorHm2nUuoTFnGqffFjBj16qimLNrXrOp3Onh1/HrX3Wv4nyzoq2mm2ceVWceVW+i1rYvofyzorWt4HYwIrPuISZdlO8hVbGrXy7hlXXv4rQuIXYu4XYwInGrX27n3LOp3Omh2CIAUFzAAAALXRSTlMAPurC/mL53NLLin44GQX+Z8RIJ/5VUf38VlL7+/nk41paVFFOIfz5+efhWk5ehSb/AAAA/klEQVQoz4WT2XKDMAxFr03ZAw2hBkK2tmm605X//7aMSCQHP5Azw4sPI+QrAUElhQ4CXSQKLn4YpSrL80ylUeiP1CH2FATlxQcIajfHiPlO3l3oGRxmeoGBkt3YliBiW/Ph7VEqx0OfnnV1XYv1qOdQvr1c932/XnKXIaAidve3J9hGCknK7o+pMJAmKM5VPza/zKY9ZwGdgTBfF7waOso0ghzEtrtkS0d5wNJ0PwMdPS9PJ8llYb6FZ3JUVhqCuWFaHo69CtrVP7GqIFexIaC6I8hxCBSf2KZp9pD4xsFj//4JG7wdmYsfTw57ek3YugtGjind1SyvL/Xk73AEOFoZb/rmWvEAAAAASUVORK5CYII=)
      0 0 no-repeat;
    content: "";
    height: 28px;
    left: -15px;
    position: absolute;
    top: -15px;
    width: 28px;
    margin-left: 15px;
  }
`;
export const Details = styled.div`
  padding-left: 2rem;
  & h4 {
    color: ${colors.yellow};
  }
  & ul {
    color: ${colors.darkText};
  }
`;
export const DetailsContainer = styled.div`
  margin-top: 3rem;
`;
export default OtherGamesSection;
