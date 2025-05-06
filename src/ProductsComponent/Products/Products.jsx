import React from "react";
import styles from "./Products.module.css";
import style from "../ProductComponentHero/ProductComponentHero.module.css"
import { Link } from "react-router-dom";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
import {productCategories} from "../ProductsCategories";

const Products = () => {
  return (
    <div>
      <div className={style.ProductComponentHero}>
        <div className={style.ProductComponentHeroContainer}>
          <div className={style.ProductComponentHeroHeading}>
            <Link to="/products" className={style.ProductHeroLink}>
              Products
            </Link>
          </div>
        </div>
        <h1 className={style.ProductHeroPath}>Products</h1>
      </div>
      <div className={styles.productImagesContainer}>
        {productCategories.map((item) => {
          return (
            <Link to={item.path} className={styles.productImagesImgContainer}>
              <img src={item.pic} alt="" srcset="" />
              <h2 style={{color:"whitesmoke",margin:'5px'}}>{item.name}</h2>
            </Link>
          );
        })}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Products;
