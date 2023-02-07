import './home.css';
import './home2.css';
import img_logo from '../img/GREEDY_CLANS_NORM.png';
import img_app_store_btn_g  from '../img/app-store-btn-bg.ce495d2.svg';
import img_play_store_btn_bg  from '../img/play-store-btn-bg.18b9bcd.svg';
import img_app_store_btn_g_mobile from '../img/appStoreBtnBlack.png';
import img_play_store_btn_bg_mobile from '../img/playstoreBtnBlack.png';
import getAPK from "../img/getAPK.png";
const TrailerSection = () => {
    return(
        <div className=" lb_trailer_vid_padding bg-black-1" data-v-2a374f33="">
           <div className='glowBorderWithShadow lb_with_100p'>
           <iframe className="lb_trailer_vid lb_image_withine_glowBorderDiv" width="560" height="315" src="https://www.youtube.com/embed/c0iBcO69H4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
        </div>
    )
}
export default TrailerSection;