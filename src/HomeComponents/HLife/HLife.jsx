import React from "react";
import styles from "./HLife.module.css";

const HLife = () => {
  return (
    <div className={styles.HLife}>
      <h1>How to Buy</h1>
      <div className={styles.HLifeContainer}>
        <div className={styles.HLifeContainerLeft}>
          <video autoPlay loop muted>
            <source src="/howToBuy.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.HLifeContainerMid}>
          <h3>How to Buy :</h3>
          <p>
            Subscribe to our newsletter and follow us on social networks •
            Subscribe to the newsletter - follow the discoveries of our
            specialists and receive e-catalogues. • Be informed of our news on
            social networks.
            <br />
            Before the sale, you may request information from the department To
            send you, on request, additional information by e-mail: condition
            reports, certificates, photos... We can send you additional photos
            and videos by WhatsApp
          </p>
        </div>
        <div className={styles.HLifeContainerRight}>
          <p>
            Talk to us specialist to inspect the object you are interested in
            acquiring . We welcome you for a private visit by appointment. We
            systematically invite you to the public appraisal a few days before
            the sale. If you can't come, we schedule an audio or video
            conversation to talk with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HLife;
