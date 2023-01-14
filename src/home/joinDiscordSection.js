import './home.css';
import img_communication from '../img/communication.0735ca4.png';
const joinDiscordSection = () => {

    return(
        <div ><div className="container-fluid p-b-120 p-b-56" ><div className="text-center -top-text position-relative lb_txt_color_orange" ><img alt="characters" src={img_communication} className="img-fluid communication-img"  /> <h1 className="heading-3 text-black position-relative text-uppercase burbank text-center"  >
        Join the Greedyverse Discord Server!
      </h1></div> <div className="container pt-4 -top-margin position-relative" ><div className="row justify-content-center gap-4" ><div className="col-12 col-xl-6 text-center text-1" >
          Check out the Greedyverse community on Discord — hang out with 2 other
          members and enjoy free voice and text chat.
        </div> <div className="text-center" ><a href="https://discord.gg/qhtxG4BrtX" target="_blank" ><button className="apes-btn-primary blackColor" >Join Discord</button></a></div></div></div></div></div>
        )
   
}
export default joinDiscordSection;