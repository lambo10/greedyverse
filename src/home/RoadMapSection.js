import "./home.css";
import "./home2.css";
import HeaderTop from "../img/roadmap_before.png";
import HeaderBottom from "../img/roadmap_after.png";
import styled from "styled-components";
import colors from "../constants/colors";

const RoadMapSection = () => {
  return (
    <div className='bg-black-1 p-t-150 p-b-120'>
      <div className='container mt-10'>
        <div className='text-center mb-3'>
          {/* <img src={HeaderTop} alt='header-top' className='mb-3' /> */}
          <h1 className='heading-6 burbank text-white fw-bold text-center text-uppercase m-0 p-0 '>
            ROADMAP
          </h1>
          <HeaderImage src={HeaderBottom} alt='header-bottom' />
        </div>
        <HeaderText className='heading-6 burbank fw-bold text-center text-uppercase'>
        The GreedyVerse Roadmap lays down the important milestones and expected development timeline for the project.
        </HeaderText>
        <DetailsContainer>
          <div className='row text-white'>
            <DetailsWrapper className='col-lg-3 sm-l col-sm-4 col-12'>
              <Details className='fw-bold pt-4'>
                <h4>PHASE 1</h4>
                <ul>
                  <li>Greedy Clans development</li>
                  <li>Website V1 launch</li>
                  <li>White Paper</li>
                  <li>Community building </li>
                  <li>Tokenmetrics</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className='col-lg-3 sm-l col-sm-4 col-12'>
              <Details className='fw-bold pt-4'>
                <h4>PHASE 2</h4>
                <ul>
                  <li>Beta version (Greedy Clans)</li>
                  <li>Greedy Milita development (Game 2)</li>
                  <li>KYC Team & Contract Audits</li>
                  <li>Private Sales</li>
                  <li>Marketing and partnerships</li>
                  <li>Presales</li>
                  <li>NFT mints</li>
                  <li>Greedy Race development (Game 3)</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className='col-lg-3  sm-l col-sm-4 col-12'>
              <Details className='fw-bold pt-4'>
                <h4>PHASE 3</h4>
                <ul>
                  <li>DEC & CEX listings</li>
                  <li>Game full launch (Greedy Clans)</li>
                  <li>NFT marketplace</li>
                  <li>Greedy Wallet</li>
                  <li>Staking Dapp</li>
                  <li>GreedyDAO launch</li>
                  <li>Beta version (Greedy Militia)</li>
                  <li>GreedySwap Launch</li>
                  <li>Beta version (Greedy Race)</li>
                </ul>
              </Details>
            </DetailsWrapper>

            <DetailsWrapper className='col-lg-3 sm-l col-sm-4 col-12'>
              <Details className='fw-bold pt-4'>
                <h4>PHASE 4</h4>
                <ul>
                  <li>More CEX listings</li>
                  <li>Greedy Militia full launch</li>
                  <li>Huge marketing campaign</li>
                  <li>Greedy Race full Launch</li>
                  <li>Partnership with top KOLs</li>
                  <li>Onboard 100k daily players</li>
                  <li>Upscale the ecosystem</li>
                </ul>
              </Details>
            </DetailsWrapper>
          </div>
        </DetailsContainer>
      </div>
    </div>
  );
};

const HeaderImage = styled.img`
  height: 20px;
`;
const HeaderText = styled.h4`
  color: ${colors.darkText};
`;
const DetailsWrapper = styled.div`
  position: relative;
  &::after {
    border-left: 1px dashed #fff;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
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
  }

  @media (max-width: 576px) {
    margin-left: 1rem;
  }
`;
const Details = styled.div`
  padding-left: 2rem;
  & h4 {
    color: ${colors.yellow};
  }
  & ul {
    color: ${colors.darkText};
  }
`;
const DetailsContainer = styled.div`
  margin-top: 3rem;
`;
export default RoadMapSection;
