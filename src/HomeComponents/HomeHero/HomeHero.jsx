import React, { useState } from "react";
import styles from "./HomeHero.module.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import "animate.css";

const HomeHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className={styles.homeheroContainer}>
      <div className={styles.homeHeroVideoCotainer}>
        <video autoPlay loop muted className={styles.homeHeroVideo}>
          {/* <source src="/HomeMain.mp4" type="video/mp4" /> */}
          <source src="/home1.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={`animate__animated animate__fadeInDown ${styles.homeHeroTextDiv}`}
      >
        <h1>Ageless Master Pieces</h1>
        <p>ROYAL AUCTIONS HOUSE</p>
        <Link
          to="/discover-more"
          className={`${styles.discoverMore} ${isHovered ? "animate__animated animate__pulse" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <i>
            <AddIcon />
          </i>
          <span>Discover more</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
