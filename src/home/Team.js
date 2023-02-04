import "./home.css";
import "./home2.css";
import img_07b2fb6 from "../img/cT1.png";
import img_561932f from "../img/cT2.png";
import img_dbb7bef from "../img/cT3.png";

import img_d59cb2a from "../img/cT4.png";
import img_e2a0668 from "../img/cT5.png";

const Team = () => {
  return (
    <div
      className="container-fluid bg-black-1 lb_padding_top_45 lb_padding_bottom_45"
      data-v-107fd072=""
    >
      <div data-v-107fd072="">
        <h1
          className="heading-5 burbank text-white fw-bold text-center text-uppercase"
          data-v-107fd072=""
        >
          CORE TEAM
        </h1>
      </div>

      <div
        className="p-5 d-flex flex-row text-white nft-list justify-content-lg-center gap-40"
        data-v-107fd072=""
      >
        <div data-v-107fd072="">
          <div className="position-relative mx-auto" data-v-107fd072="">
            <img
              src={img_07b2fb6}
              alt="nft-1.png"
              className="image-blur nft-img"
              data-v-107fd072=""
            />{" "}
            <img
              src={img_07b2fb6}
              alt="nft-1.png"
              className="position-relative nft-img lb_50X50_size lb_img_border_curv"
              data-v-107fd072=""
            />
          </div>{" "}
          <div className="fw-bold pt-4" data-v-107fd072="">
            <p data-v-107fd072="">Franklin C</p>
            <p data-v-107fd072="" className="lb_txt_orange">Co-Founder/COO</p>
          </div>
        </div>
        <div data-v-107fd072="">
          <div className="position-relative mx-auto" data-v-107fd072="">
            <img
              src={img_561932f}
              alt="nft-2.png"
              className="image-blur nft-img"
              data-v-107fd072=""
            />{" "}
            <img
              src={img_561932f}
              alt="nft-2.png"
              className="position-relative nft-img lb_50X50_size lb_img_border_curv"
              data-v-107fd072=""
            />
          </div>{" "}
          <div className="fw-bold pt-4" data-v-107fd072="">
            <p data-v-107fd072="">Lambert N</p>
            <p data-v-107fd072="" className="lb_txt_orange">Co-Founder/CTO</p>
          </div>
        </div>
        <div data-v-107fd072="">
          <div className="position-relative mx-auto" data-v-107fd072="">
            <img
              src={img_dbb7bef}
              alt="nft-3.png"
              className="image-blur nft-img"
              data-v-107fd072=""
            />{" "}
            <img
              src={img_dbb7bef}
              alt="nft-3.png"
              className="position-relative nft-img lb_50X50_size lb_img_border_curv"
              data-v-107fd072=""
            />
          </div>{" "}
          <div className="fw-bold pt-4" data-v-107fd072="">
            <p data-v-107fd072="">Taofiq I</p>
            <p data-v-107fd072="" className="lb_txt_orange">CMO</p>
          </div>
        </div>
        <div data-v-107fd072="">
          <div className="position-relative mx-auto" data-v-107fd072="">
            <img
              src={img_d59cb2a}
              alt="nft-4.png"
              className="image-blur nft-img"
              data-v-107fd072=""
            />{" "}
            <img
              src={img_d59cb2a}
              alt="nft-4.png"
              className="position-relative nft-img lb_50X50_size lb_img_border_curv"
              data-v-107fd072=""
            />
          </div>{" "}
          <div className="fw-bold pt-4" data-v-107fd072="">
            <p data-v-107fd072="">Peter O</p>
            <p data-v-107fd072="" className="lb_txt_orange">Project Manager</p>
          </div>
        </div>

        <div data-v-107fd072="">
          <div className="position-relative mx-auto" data-v-107fd072="">
            <img
              src={img_e2a0668}
              alt="nft-5.png"
              className="image-blur nft-img"
              data-v-107fd072=""
            />{" "}
            <img
              src={img_e2a0668}
              alt="nft-5.png"
              className="position-relative nft-img lb_50X50_size lb_img_border_curv"
              data-v-107fd072=""
            />
          </div>{" "}
          <div className="fw-bold pt-4" data-v-107fd072="">
            <p data-v-107fd072="">Binh D</p>
            <p data-v-107fd072="" className="lb_txt_orange">Studio Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
