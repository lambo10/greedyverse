import './home.css';
import './home2.css';
import tokenNomics from '../img/tokenNomics.png';



const TokenNomicsSection = () => {

    return(
      <div className="container-fluid p-t-150 p-b-120" data-v-107fd072="">
        <div data-v-107fd072=""><h1 className="heading-5 burbank text-black fw-bold text-center text-uppercase" data-v-107fd072="">
     TOKENOMICS
    </h1></div> 
        <div className="text-center" ><img src={tokenNomics} alt="img" className="img-fluid new-img lb_img_tokeknNomics"  /></div> 
        <div className="row h-100 p-3" data-v-2a374f33="">
            <div className="col-lg-4 lb_txt_center lb_padding_full20" data-v-2a374f33="">
                <div className='lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey'><div><b>BEP-20</b></div><div>BNB Token</div></div>
            </div>
            <div className="col-lg-4 lb_txt_center lb_padding_full20" data-v-2a374f33="">
                <div className='lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey'><div><b>1 Billion</b></div><div>Total Sale</div></div>
            </div>
            <div className="col-lg-4 lb_txt_center lb_padding_full20" data-v-2a374f33="">
                <div className='lb_border_1px lb_radius_10 lb_padding_full20 lb_border_color_grey'><div><b>D2T</b></div><div>D2T Token</div></div>
            </div>
        </div>
    </div>
        )
   
}
export default TokenNomicsSection;