import "./home.css";
import "./home2.css";
import tokenNomics from "../img/tokenNomics.png";
import indicator from "../utils/tokenomicsIndicator.array";
import tokenPicture from "../img/tokenomic-piechart.png";
import StyledHomeTokenomicsSection from "./HomeTokenomicSection.styles";
const TokenNomicsSection = () => {
  return (
    <>
      <div className="container-fluid p-t-150 p-b-120" data-v-107fd072="">
        <div data-v-107fd072="">
          <header
            style={{
              height: "auto",
              textAlign: "center",
              padding: "0px",
              width: "50%",
              margin: "auto",
              lineHeight: "2.5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              fontSize: "25px",
            }}
          >
            Tokenomics
          </header>
          <StyledHomeTokenomicsSection>
            <aside className="indicatorContainer">
              {indicator.map(
                (item, index) =>
                  index < 4 && (
                    <li className="indicatorList">
                      <main className="indicatorText">{item.title}</main>
                      <span className="percent">{item.percent}</span>
                      <aside
                        style={{ backgroundColor: `${item.color}` }}
                        className="indicator"
                      ></aside>
                    </li>
                  )
              )}
            </aside>
            <main className="indicatorChartContainer">
              <img
                src={tokenPicture}
                alt="Token Allocation"
                title="Token Allocation"
                className="indicatorChart"
              />
            </main>
            <aside className="indicatorContainer">
              {indicator.map(
                (item, index) =>
                  index > 3 && (
                    <li className="indicatorList">
                      <main className="indicatorText">{item.title}</main>

                      <span className="percent">{item.percent}</span>
                      <aside
                        style={{ backgroundColor: `${item.color}` }}
                        className="indicator"
                      ></aside>
                    </li>
                  )
              )}
            </aside>
          </StyledHomeTokenomicsSection>
        </div>
        <div className="row h-100 p-3" data-v-2a374f33="">
          <div
            className="col-lg-4 lb_txt_center lb_padding_full20"
            data-v-2a374f33=""
          >
            <div className="lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey">
              <div>
                <b>BEP-20</b>
              </div>
              <div>BNB Token</div>
            </div>
          </div>
          <div
            className="col-lg-4 lb_txt_center lb_padding_full20"
            data-v-2a374f33=""
          >
            <div className="lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey">
              <div>
                <b>1 Billion</b>
              </div>
              <div>Total Sale</div>
            </div>
          </div>
          <div
            className="col-lg-4 lb_txt_center lb_padding_full20"
            data-v-2a374f33=""
          >
            <div className="lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey">
              <div>
                <b>D2T</b>
              </div>
              <div>D2T Token</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TokenNomicsSection;
