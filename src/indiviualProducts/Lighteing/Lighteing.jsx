import React from "react";
import ProductComponentHero from "../../ProductsComponent/ProductComponentHero/ProductComponentHero";
import styles from "../../ProductsComponent/ProductComponentImages/ProductComponentImages.module.css";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
const LighteingCategories = [
  {
    id: 1,
    name: "Chandelier ",
    pic: "/public/products/Lighting/1.jpg",
    path: "/lighting/chandelier",
  },
  {
    id: 2,
    name: "Lanterns",
    pic: "/public/products/Lighting/2.jpg",
    path: "/lighting/lanterns",
  },
  {
    id: 3,
    name: "Scones",
    pic: "/public/products/Lighting/3.jpg",
    path: "/lighting/scones",
  },
  {
    id: 4,
    name: "Lamps",
    pic: "/public/products/Lighting/4.jpg",
    path: "/lighting/lamps",
  },
];
const Lighteing = () => {
  return (
    <div>
      <ProductComponentHero />
      <div className={styles.productImagesComp}>
        <div className={styles.productImagesContainer}>
          {LighteingCategories.map((item) => {
            return (
              <div className={styles.productImagesImgContainer} key={item.id}>
                {/* to={item.path} */}
                <Link to={item.path}>
                  <img src={item.pic} alt={item.name} />
                  <h4>{item.name}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Lighteing;
