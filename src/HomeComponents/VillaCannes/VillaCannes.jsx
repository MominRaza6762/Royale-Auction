import React from "react";
import styles from "./VillaCannes.module.css";

const VillaCannes = () => {
  return (
    <div className={styles.villaCannes}>
      <div className={styles.villaCannesTop}>
        <h4>HENGE PROJECTS</h4>
        <h2>VILLA CANNES</h2>
      </div>
      <div className={styles.villaCannesBottom}>
        <video autoPlay loop muted>
          <source src="/cannen.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VillaCannes;
// cannen
