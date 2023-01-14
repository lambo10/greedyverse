import "./home.css";
import img_cooperation from "../img/cooperation.ff1e381.webp";
const aboutSection1 = () => {
  return (
    <div>
      <div className="p-b-120 p-b-56">
        <h1 className="top-text heading-1 text-black position-relative text-uppercase burbank text-center new-text lb_txt_color_orange">
          multiplayer
        </h1>

        <div className="text-center">
          <img src={img_cooperation} alt="img" className="img-fluid new-img" />
        </div>

        <div className="container pt-4">
          <div className="row justify-content-center gap-4">
            <div className="col-12 col-xl-3 max-w-255 text-center text-1">
              <strong>Own land </strong> erect buildings and become a Clan Chief
              in the GreedyVerse
            </div>{" "}
            <div className="col-12 col-xl-3 max-w-255 text-center text-1">
              <strong>Attack other Bases </strong> and take part in massive PVP
              wars!
            </div>{" "}
            <div className="col-12 col-xl-3 max-w-255 text-center text-1">
              <strong>Lead your army </strong> to victory and earn the GVERSE
              token
            </div>{" "}
            <div className="col-12 col-xl-3 max-w-255 text-center text-1">
              <strong>Connect </strong> and make friends with other players
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutSection1;
