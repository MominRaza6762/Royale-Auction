import React from "react";
import styles from "./HomeVideo.module.css";
const HomeVideo = () => {
  return (
    <div className={styles.homeVideoContainer}>
      <div className={styles.homeVideo}>
        <video autoPlay loop muted>
          {/* <source src="/HomeHero.mp4" type="video/mp4" /> */}
          <source src="/home2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.homeVideoText}> 
        <p>S34/2 Collection</p>
      </div>
    </div>
  );
};

export default HomeVideo;
