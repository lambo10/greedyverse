import './home.css';
import './home2.css';
import img_logo from '../img/GREEDY_CLANS_NORM.png';
import img_app_store_btn_g  from '../img/app-store-btn-bg.ce495d2.svg';
import img_play_store_btn_bg  from '../img/play-store-btn-bg.18b9bcd.svg';
import img_app_store_btn_g_mobile from '../img/appStoreBtnBlack.png';
import img_play_store_btn_bg_mobile from '../img/playstoreBtnBlack.png';
const PosterSection = () => {
    return(
        <div className="container-fluid hero-bg" data-v-2a374f33="">
            <div className="container-fluid position-absolute p-3 start-0" data-v-2a374f33="">
                <div className="nav justify-content-between g-0" data-v-2a374f33="">
                <div className="d-inline-block logo-container" data-v-2a374f33=""><a href="#" data-v-2a374f33=""><img src={img_logo} alt="logo" class="img-fluid meta-apes-logo" data-v-2a374f33="" /></a></div>
                    <div className="d-inline-block" data-v-2a374f33="">
                    <button className="play-store-btn d-md-inline d-none" data-v-2a374f33=""><a
                            href="#" target="_blank"
                            data-v-2a374f33=""><img src={img_play_store_btn_bg} alt=""
                                                    data-v-2a374f33="" /></a></button>
                        <button className="app-store-btn d-md-inline d-none" data-v-2a374f33=""><a
                            href="#" target="_blank"
                            data-v-2a374f33=""><img src={img_app_store_btn_g} alt=""
                                                    data-v-2a374f33="" /></a></button>
                     
                     {/* <button className="play-store-btn d-inline d-md-none lb_padding5" data-v-2a374f33=""><a
                            href="#" target="_blank"
                            data-v-2a374f33=""><img src={img_play_store_btn_bg_mobile} alt=""
                                                    data-v-2a374f33="" /></a></button>

                        <button className="app-store-btn d-inline d-md-none lb_padding5" data-v-2a374f33=""><a
                            href="#" target="_blank"
                            data-v-2a374f33=""><img src={img_app_store_btn_g_mobile} alt=""
                                                    data-v-2a374f33="" /></a></button> */}
                        
                    </div>
                </div>
            </div>
            <div className="row h-100 p-3" data-v-2a374f33="">
                <div className="col-12 col-lg-7 col-xl-10 mt-auto lb_margin-b-up mb-xl-0" data-v-2a374f33=""><h1
                    className="heading-1 burbank text-uppercase text-white mb-xl-0 lb_txt_color_orange" data-v-2a374f33="">
                    <div className="text-yellow lb_txt_color_white">MAY THE GREEDIEST WIN!!</div>
                </h1>
                    <div className="row gap-3" data-v-2a374f33="">
                        <br/>
                        <div className="col-12 col-xl-7 text-white mb-2 " data-v-2a374f33="">
                        GREEDY CLANS is set in a fictional brutal world filled with greed, chaos and factions fighting over scarce resources. Players must build their bases, acquire weapons, recruit warriors and conquer other clans while strategically defending against invaders.  <p>EARN IN-GAME rewards in exciting battle gameplays as you lead your army to battle for glory and riches. The game would be available on most native platforms. <a href='https://greedyverse.gitbook.io/white-paper' className='lb_txt_only_color_black lb_txt_only_color_orange_onHover'><b>Read more</b></a></p>
                        </div>
                        <div data-v-2a374f33=""><a href="https://greedyverse.co/whitepaper.pdf"
                                                   target="_blank" className="blackColor" data-v-2a374f33="">
                            <button className="apes-btn-primary blackColor lb_txt_color_white_1" data-v-2a374f33="">Whitepaper</button>
                        </a>

                        <a href="https://greedyverse.co/whitepaper.pdf"
                                                   target="_blank" className="blackColor ml-2" data-v-2a374f33="">
                            <button className="apes-btn-primary blackColor lb_txt_color_white_1" data-v-2a374f33="">Community</button>
                        </a>

{/* 
                        <button className="app-store-btn apes-btn-primary blackColor ml-2" data-v-2a374f33=""><a
                            href="https://apps.apple.com/us/app/meta-apes/id1621913848" target="_blank"
                            data-v-2a374f33=""><img src={img_app_store_btn_g} alt=""
                                                    data-v-2a374f33="" /></a></button>

                        <button className="play-store-btn apes-btn-primary blackColor" data-v-2a374f33=""><a
                            href="https://play.google.com/store/apps/details?id=com.mkbanana.gp" target="_blank"
                            data-v-2a374f33=""><img src={img_play_store_btn_bg} alt=""
                                                    data-v-2a374f33="" /></a></button> */}
                                                    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PosterSection;