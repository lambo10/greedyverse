import "./home.css";
import img_videoThumbNail from "../img/monkey-video-bg.09ba4c4.png";
import img_play_btn from "../img/play-btn.cb88663.svg";
const videoSection = () => {
  return (
    <div
      className="container-fluid bg-black-1 p-t-180 p-b-160"
      data-v-311c30c2=""
    >
      <div className="container p-x-80" data-v-311c30c2="">
        <div className="row g-0" data-v-311c30c2="">
          <div className="col-12 col-xl-10" data-v-311c30c2="">
            <h1
              className="burbank heading-5 text-white text-uppercase"
              data-v-311c30c2=""
            >
              Are you monkey enough to go
              <span className="text-yellow" data-v-311c30c2="">
                bananas
              </span>
              , and have fun in this crazy world of{" "}
              <span className="text-green" data-v-311c30c2="">
                meta Apes
              </span>
              ?
            </h1>
          </div>{" "}
          <div className="col-12 py-5 position-relative" data-v-311c30c2="">
            <img
              alt="video-thumbnail"
              src={img_videoThumbNail}
              className="img-fluid"
              data-v-311c30c2=""
            />{" "}
            <img
              alt="play-btn"
              src={img_play_btn}
              className="play-btn"
              data-v-311c30c2=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default videoSection;
