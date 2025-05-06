import React from "react";
import styles from "./S34.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const S34 = () => {
  return (
    <div className={styles.s34Container}>
      <div className={styles.S34Left}>
        <div>
          <h1>ROYAL AUCTIONS HOUSE</h1>
        </div>
        {/* <img src="./S34.jpg" alt="" /> */}
        <video autoPlay loop muted className={styles.video}>
          <source src="./s34.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.S34mid}>
        <h2>
          We are proud antique collectors and have a huge selection of 19th and
          18th century European antique furniture
        </h2>
        <p>
          Royal Auction House specializes in unique vintage furniture and
          accessories designed to imbue, luxury, sophistication and unique
          character to your home. Living and breathing decorative, industrial,
          mid-century, and European, Egyptian and Asian antiques, introduce
          imaginative style to both period and contemporary decor settings. We
          source a complete range of vintage furniture and decorative objects in
          a wide range of ages and styles. Our key objective is that our items
          work harmoniously within a contemporary design scheme, adding soul and
          style to your home, shop, cafe, restaurant, chalet, or boutique hotel.
        </p>
        <Link to="/discover-more" className={`${styles.discoverMore}`}>
          <i>
            <AddIcon />
          </i>
          <span>Discover more</span>
        </Link>
      </div>
      <div className={styles.S34Right}>
        <p>
        Established in 2004, the Royal House of Auctions strives to find the perfect pieces to complete your most imaginative interior designs. <br /> <br />
        If there's a special something you'd like, you can commission us to find it for you ! Or if you have any questions, we are happy to discuss all the details. Just email us at <strong> Khaled@roualautionhouse.com </strong>
        </p>
      </div>
    </div>
  );
};

export default S34;
