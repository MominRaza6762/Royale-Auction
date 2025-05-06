import React from "react";
import ProductComponentHero from "../../ProductsComponent/ProductComponentHero/ProductComponentHero";
import ProductComponentImages from "../../ProductsComponent/ProductComponentImages/ProductComponentImages";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
const Lanterns = ({ cateogoryImage }) => {
  return (
    <div>
      <ProductComponentHero />
      <ProductComponentImages cateogoryImage={cateogoryImage} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Lanterns;
