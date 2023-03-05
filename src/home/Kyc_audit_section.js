import "./home.css";
import "./home2.css";
import img_shield from "../img/shield.svg";
import cst from "../img/cst_full.png";
import badge_ico from "../img/badge-ico.png";

const Kyc_audit_section = () => {
    return(
        <div className="container-fluid bg-black-1 lb_margin_bottom_20 lb_padding_top_20" data-v-0c2fbe55="">
            <div className="container lb_px_80_mob_50">
            <div className="row g-0" data-v-0c2fbe55="">
               <div className="col-md-9 kycSection_inner_1">
                <a href="https://github.com/Coinsult/solidity/blob/main/Coinsult_Greedyverse_0x6F...2672_Audit.pdf" ><img src={img_shield} className="shieldimg" /></a>
          
                <div class="sideDiv1"><div class="fs-4 bold-text lb_txt_color_white2 lb_txt_uppercase">Contract fully audited and shown to be 100% secure</div><div> Team verified by COINSULT to ensure anti-rug and complete project security.</div></div>
           
               </div>
               <div className="col-md-3 lb_txt_right_mob_left">
               {/* <a href="#" className="shieldimg lb_game_logo lb_left_right_padding_5"><img src={badge_ico} /></a> */}
               <a href="https://coinsult.net/projects/greedyverse/" className="shieldimg lb_game_logo lb_left_right_padding_5"><img src={cst} /></a>
               </div>
            </div>
            </div>

            <div className="lb_with_100p lb_txt_center lb_padding_top_20">
            <div className="lb_game_logo">
            <a href="https://greedyverse.gitbook.io/white-paper"
                                                   target="_blank" className="blackColor ml-2 " data-v-2a374f33="">
                            <button className="apes-btn-primary blackColor" data-v-2a374f33="">Whitepaper</button>
                        </a>
            </div>
          
            </div>
            </div>
        )
   
}
export default Kyc_audit_section;
