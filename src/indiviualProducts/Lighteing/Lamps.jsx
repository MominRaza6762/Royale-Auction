import React from "react";
import ProductComponentHero from "../../ProductsComponent/ProductComponentHero/ProductComponentHero";
import ProductComponentImages from "../../ProductsComponent/ProductComponentImages/ProductComponentImages";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
import { lighting } from "../../ProductsComponent/ProductsCategories";
import styles from "../../ProductsComponent/ProductComponentImages/ProductComponentImages.module.css";
import { Link } from "react-router-dom";

const Lamps = () => {
  return (
    <div>
      <ProductComponentHero />
      <ProductComponentImages cateogoryImage={lighting} />
      <Contact />
      <Footer />
    </div>
  );
};
export default Lamps;