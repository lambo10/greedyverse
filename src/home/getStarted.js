import "./home.css";
import "./home2.css";
import img_app_store_btn_g_black from "../img/appStoreBtnBlack.png";
import img_play_store_btn_bg_black from "../img/playstoreBtnBlack.png";
import getAPK from "../img/getAPK.png";

const getStarted = () => {
  return (
    <div data-v-1cbb962a>
      <div class="container" data-v-3942c62a="">
        <div
          class="header burbank heading-1 lb_txt_color_orange mobileTxtAlignment lb_margin_top_30 lb_margin_bottom_5"
          data-v-3942c62a=""
        >
          GET STARTED!
        </div>{" "}
        <div class="start-content" data-v-3942c62a="">
          <ul data-v-3942c62a="" className="lb_margin_bottom_30">
            <li data-v-3942c62a="">
              <div class="wallet-title title burbank" data-v-3942c62a="">
                1. INSTALL GAME
              </div>{" "}
              <p class="wallet-desc text-1" data-v-3942c62a="">
               
              <button
                  className="play-store-btn d-md-inline lb_padding5"
                  data-v-2a374f33=""
                >
                  <a href="https://greedyverse.co/gameBuilds/GreedyClans.apk" target="_blank" data-v-2a374f33="">
                    <img
                      className="lb_fill_black"
                      src={img_play_store_btn_bg_black}
                      alt=""
                      data-v-2a374f33=""
                    />
                  </a>
                </button>
               
                <button
                  className="app-store-btn d-md-inline lb_padding5"
                  data-v-2a374f33=""
                >
                  <a href="#" target="_blank" data-v-2a374f33="">
                    <img
                      className="lb_fill_black"
                      src={img_app_store_btn_g_black}
                      alt=""
                      data-v-2a374f33=""
                    />
                  </a>
                </button>
                
              </p>
              
            </li>{" "}
            <li data-v-3942c62a="">
              <div class="connect-title title burbank" data-v-3942c62a="">
                2. CONNECT
              </div>{" "}
              <div class="connect-desc" data-v-3942c62a="">
                <p class="text-1" data-v-3942c62a="">
                  1. Open the Game.
                </p>{" "}
                <p class="text-1" data-v-3942c62a="">
                  2. Click Create Wallet to create a new wallet or Import to
                  import an exsiting wallet.
                </p>{" "}
                <p class="text-1" data-v-3942c62a="">
                  3. Click Copy and Back up your Pass Phrase.
                </p>
                <p class="text-1" data-v-3942c62a="">
                  4. Click Create or import if you are importing an exsisting
                  wallet
                </p>
              </div>
            </li>{" "}
            <li data-v-3942c62a="">
              <div class="enjoy-title title burbank" data-v-3942c62a="">
                3. SIGNUP
              </div>{" "}
              <p class="text-1" data-v-3942c62a="">
                <p class="text-1" data-v-3942c62a="">
                  1. Enter the required details in the login page.
                </p>
                <p class="text-1" data-v-3942c62a="">
                  2. Click SignUp.
                </p>
                <p class="text-1" data-v-3942c62a="">
                  3. Enter the 6 digit verification code sent to your email.
                </p>
                <p class="text-1" data-v-3942c62a="">
                  4. Click Verify.
                </p>
                <p class="text-1" data-v-3942c62a="">
                  5. Login and <span className="lb_success_txt">Enjoy</span>.
                </p>
               <br/>
                If you need more support,please <span className="lb_txt_only_color_white">.</span>
                <a
                  href="https://t.me/GreedyVerse_Portal"
                  target="_blank"
                  class="link"
                  data-v-3942c62a=""
                >
                   join our Telegram community
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default getStarted;
