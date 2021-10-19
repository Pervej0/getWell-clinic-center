import React from "react";
import BannerSlide from "./Compo/HomeBanner/BannerSlide";
import Brands from "./Compo/Brands";
import HomeServices from "./Compo/HomeServices";
import Welcome from "./Compo/Welcome";

const Home = () => {
  return (
    <>
      <BannerSlide />
      <Welcome />
      <HomeServices />
      <Brands />
    </>
  );
};

export default Home;
