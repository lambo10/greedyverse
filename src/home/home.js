import "./home.css";
import SaleNotitficationBanner from "./saleNotitficationBanner";
import PosterSection from "./PosterSection";
import VideoSection from "./videoSection";
import AboutSection1 from "./aboutSection1";
import AboutSection2 from "./aboutSection2";
import AboutSection3 from "./aboutSection3";
import JoinDiscordSection from "./joinDiscordSection";
import NftDisplaySection from "./nftDisplaySection";
import RoadMapSection from "./RoadMapSection";
import GetStarted from "./getStarted";
import Faq from "./faq";
import Footer from "./footer";
import PrivateSaleSection from "./PrivateSaleSection";
import PrivateSaleSectionNotStarted from "./privateSaleSectionNotStarted";
import NavigationBar from "./NavigationBar";
import TokenNomics from "./TokenNomicsSection";
import Team from "./Team";
import BrandsBanner from "./BrandsBanner";
import Presale from "../components/presale/Presale";
import UnderDevelopmentSection from "./UnderDevelopmentSection";
import Nav from "../Layout/Nav";
import PoweredBy from "../home/PoweredBy";

import React from "react";

const home = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      {/* <UnderDevelopmentSection/> */}

      <Nav />

      {/* <SaleNotitficationBanner /> */}
      
      <PrivateSaleSectionNotStarted />
      <BrandsBanner />
      <PosterSection />

      <VideoSection/>

      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />

      {/* <JoinDiscordSection/> */}
      {/* <NftDisplaySection/> */}

      <TokenNomics />
      <RoadMapSection />
      <GetStarted />
      <Team />
      <PoweredBy/>
      <Faq />
      <Footer />
    </div>
  );
};
export default home;
