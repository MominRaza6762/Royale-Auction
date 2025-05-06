import React from "react";
import styles from "./Navbar.module.css";

const TopSlider = () => {
  return (
    <div className={`animate__animated animate__slideInDown ${styles.topSlider}`}>
      <section className={styles.topSliderSection}>
        <h2>COMPNAY</h2>
        <div className={styles.topSliderSectionContent}>
          <span>ABOUT US</span>
          <span>S-34</span>
          <span>DESIGNERS</span>
        </div>
      </section>
      <section className={styles.topSliderSection}>
        <h2>PRODUCTS</h2>
        <div className={styles.topSliderSectionContent}>
          <span>ALL PRODUCTS</span>
          <span>COLLECTIONS</span>
          <span>MATERIALS</span>
          <span>PROJECTS</span>
        </div>
      </section>
      <section className={styles.topSliderSection}>
        <h2>MEDIA</h2>
        <div className={styles.topSliderSectionContent}>
          <span>PRESSKIT 23</span>
          <span>MEDIA KIT</span>
          <span>PRESS CLIPPINGS</span>
          <span>CATALOGUES</span>
          <span>H-LIFE</span>
        </div>
      </section>
      <section className={styles.topSliderSection}>
        <h2>NETWORK</h2>
        <div className={styles.topSliderSectionContent}>
          <span>STORE FINDER</span>
          <span>2D/3D</span>
          <span>CONTACTS</span>
        </div>
      </section>
    </div>
  );
};

export default TopSlider;
