import React from "react";
import styles from "./ProductComponentImages.module.css";
import { Link } from "react-router-dom";

const ProductComponentImages = ({cateogoryImage}) => {
  return (
    <div className={styles.productImagesComp}>
      <div className={styles.productImagesContainer}>
        {
          cateogoryImage.map((item)=>{
            return(
              <div className={styles.productImagesImgContainer} key={item.id}>
                {/* to={item.path} */}
                <Link to="/details">
                <img src={item.pic} alt={item.name} />
                <h4>{item.name}</h4>
                </Link>
              </div>
            )
          })
      }
      </div>
    </div>
  );
};

export default ProductComponentImages;