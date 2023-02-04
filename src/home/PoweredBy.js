import "./home.css";
import "./home2.css";
import tokenNomics from "../img/tokenomic-piechart.webp";
import indicator from "../utils/tokenomicsIndicator.array";
import tokenPicture from "../img/tokenomic-piechart.png";
import StyledHomeTokenomicsSection from "./HomeTokenomicSection.styles";
import support from "../utils/support.array";

const TokenNomicsSection = () => {
  return (
   <div>
<br/>
<div data-v-107fd072="">
        <h1
          className="heading-5 burbank text-black fw-bold text-center text-uppercase"
          data-v-107fd072=""
        >
          PARTNERS
        </h1>
      </div>

    <div class="row m-1">


   
      
        {support.map((item) => (
          <div className="lb_p5 lb_float_left lb_support_grid_position lb_support_grid_cell">
            <div class="lb_support_item-logo lb_support_content">
             <a href={item.link}>
            <img
              src={item.icon}
              title={item.title}
              alt={item.alt}
              className="supportImg"
            />
            </a>
            </div>
          </div>
        ))}


                                    </div>
   </div>
  );
};
export default TokenNomicsSection;
