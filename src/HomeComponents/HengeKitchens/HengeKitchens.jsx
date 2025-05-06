import React from "react";
import styles from "./HengeKitchens.module.css";
import AddIcon from "@mui/icons-material/Add";

const HengeKitchens = () => {
  return (
    <div className={styles.hengeKitchen}>
      <h1>
        Our <span>services </span>
      </h1>
      <div className={styles.hengeKitchenContainer}>
        <div className={styles.hengeKitchenLeft}>
          {/* <img src="./hengeKitchen.jpg" alt="hengeKitchen" /> */}
          <video autoPlay loop muted>
            <source src="./hengeKitchen.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.hengeKitchenRight}>
          <h1>
            SELLING
            <span style={{ color: "black", fontSize: "16px" }}>
              {" "}
              AT Royal Auction House 15 Years of Passion for Auctions
            </span>
          </h1>
          <p style={{ fontSize: "14px" }}>
            We provide you with a personalized and confidential service of
            valuation and appraisal of your belongings. As certified experts and
            specialists we advise you on the latest trends we advise and
            developments in the Art Market. They assist you in your approach
            from the expertise (period, estimation...), You can contact us for
            an inventory, an inheritance, partition, or the sale of a specific
            piece of art or a private collection.
          </p>
          <p style={{ fontSize: "14px" }}>
            Exchanges and appointments in complete confidentiality: you want to
            know the value of your items and works of art before selling them.
            <br />
            Simply follow the steps below to contact our specialists and discuss
            our valuation appointment and fees
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              cursor: "pointer",
            }}
          >
            <i style={{ paddingTop: "3px" }}>
              <AddIcon fontSize="small" />
            </i>
            <p
              style={{
                color: "black",
                fontWeight: "bolder",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Discover
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HengeKitchens;
