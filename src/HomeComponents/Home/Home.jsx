import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import style from "./Home.module.css";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
import Products from "../Products/Products";
import S34 from "../S34/S34";
import HomeVideo from "../HomeVideo/HomeVideo";
import Catalogue from "../Catalogue/Catalogue";
import HengeKitchens from "../HengeKitchens/HengeKitchens";
import VillaCannes from "../VillaCannes/VillaCannes";
import HLife from "../HLife/HLife";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <HomeHero />
      <Products />
      <S34 />
      <HomeVideo />
      <Catalogue />
      <HengeKitchens />
      <VillaCannes />
      <HLife />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
