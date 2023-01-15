import "./home.css";
import "./home2.css";
import img_logo from "../img/gameLogo2.png";
import img_gverse_logo from "../img/greedyverseLogo.png";
const UnderDevelopmentSection = () => {
  return (
    <div className="container-fluid lb_hero_bg" data-v-2a374f33="">
      <div
        className="container-fluid position-absolute p-3 start-0"
        data-v-2a374f33=""
      >
        <div className="nav justify-content-between g-0" data-v-2a374f33="">
          <div
            className="lb_txt_center lb_width_100P lb_padding_top_30P"
            data-v-2a374f33=""
          >
            <a
              className="lb_game_logo lb_game_logo_img"
              href="#"
              data-v-2a374f33=""
            >
              <img
                src={img_logo}
                alt="logo"
                class="img-fluid "
                data-v-2a374f33=""
              />
            </a>
            <br />
            <br />
            <br />
            <a
              className="lb_game_logo lb_game_logo_img lb_remove_text_decoration"
              href="#"
              data-v-2a374f33=""
            >
              <img
                src={img_gverse_logo}
                alt="logo"
                class="img-fluid "
                data-v-2a374f33=""
              />
              <br />
              <br />
              <div
                className="lb_sale2_section supercellmagic_font text-uppercase text-white mb-xl-0"
                data-v-2a374f33=""
              >
                <span className="">Currently Under-Development</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnderDevelopmentSection;
