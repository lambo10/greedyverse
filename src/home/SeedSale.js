import "./home.css";
import SaleNotitficationBanner from "./saleNotitficationBanner";
import PosterSection from "./PosterSection";
import VideoSection from "./videoSection";
import AboutSection1 from "./aboutSection1";
import AboutSection2 from "./aboutSection2";
import AboutSection3 from "./aboutSection3";
import KycAuditSection from "./Kyc_audit_section";
import JoinDiscordSection from "./joinDiscordSection";
import NftDisplaySection from "./nftDisplaySection";
import RoadMapSection from "./RoadMapSection";
import GetStarted from "./getStarted";
import Faq from "./faq";
import Footer from "./footer";
import SeedSaleSection from "./SeedSaleSection2";
import NavigationBar from "./NavigationBar";
import TokenNomics from "./TokenNomicsSection";
import Team from "./Team";
import BrandsBanner from "./BrandsBanner";
import Presale from "../components/presale/Presale";
import UnderDevelopmentSection from "./UnderDevelopmentSection";
import LoadingPanel from "./loadingPanel";
import Nav from "../Layout/Nav";
import PoweredBy from "../home/PoweredBy";
import OtherGamesSection from "./OtherGamesSection";
import TrailerSection from "./TrailerSection";


import React from "react";

const SeedSale = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      {/* <UnderDevelopmentSection/> */}

      <LoadingPanel />
      <Nav />

      {/* <SaleNotitficationBanner /> */}
      
      <SeedSaleSection />
      <TrailerSection />
      <BrandsBanner />
      <KycAuditSection />
      <PosterSection />
      <OtherGamesSection />

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
export default SeedSale;
