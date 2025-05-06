import React from "react";
import styles from "./ProductComponentHero.module.css";
import { Link } from "react-router-dom";

const ProductComponentHero = () => {
  const path = window.location.pathname.split("/").pop();
  return (
    
      <div className={styles.ProductComponentHero}>
        <div className={styles.ProductComponentHeroContainer}>
          <div className={styles.ProductComponentHeroHeading}>
            <Link to="/products" className={styles.ProductHeroLink}>
              Products
            </Link>
            / {path}
          </div>
        </div>
        <h1 className={styles.ProductHeroPath}>{path}</h1>
      </div>
  );
};

export default ProductComponentHero;
