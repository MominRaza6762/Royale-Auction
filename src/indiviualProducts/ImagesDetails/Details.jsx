import React, { useState } from "react";
import styles from "./Details.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Contact from "../../Layout/Contact/Contact";
import Footer from "../../Layout/Footer/Footer";
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import StarIcon from '@mui/icons-material/Star'; 


const Details = () => {
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isFolderHovered, setIsFolderHovered] = useState(false);
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className={styles.detailsContainer}>
        <section className={styles.detailsContainerLeft}>
          <img src="./clocks.jpg" alt="Clocks" />
        </section>

        <section className={styles.detailsContainerRight}>
          <div className={styles.ContainerRightinner}>
            <div className={styles.ContainerRightinnerLeft}>
              <h3>Flora Danica Lidded Ginger Jar by Royal Copenhagen</h3>
              <span>$18,850</span>
            </div>
            <div className={styles.ContainerRightinnerRight}>
              <i
                onMouseEnter={() => setIsFavoriteHovered(true)}
                onMouseLeave={() => setIsFavoriteHovered(false)}
              >
                {isFavoriteHovered ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </i>
              <br />
              <i
                onMouseEnter={() => setIsFolderHovered(true)}
                onMouseLeave={() => setIsFolderHovered(false)}
              >
                {isFolderHovered ? <FolderIcon /> : <FolderOpenIcon />}
              </i>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <Button
              className={styles.purchaseBtn}
              variant="contained"
              style={{
                width: "100%",
                backgroundColor: "#434343",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Purchase
            </Button>
            <Button
              className={styles.offerBtn}
              variant="contained"
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid #434343",
              }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              MAKE AN OFFER
            </Button>
          </div>

          <div className={styles.shippingDetails}>
            <p>
              {" "}
              <i>
                <AutoGraphIcon fontSize="small" />
              </i>{" "}
              Shipping: Rates vary by destination and complexity.
            </p>
            <p>Free Shipping with code FREESHIP Terms Apply</p>
            <p>
              {" "}
              <i>
                <CheckCircleOutlineIcon fontSize="small" />
              </i>{" "}
              The 1stDibs Promise: Authenticity Guarantee, Money-Back Guarantee,
              24-Hour Cancellation.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.itemDetails}>
        <section className={styles.itemDetailsLeft}>
          <p
            style={{
              lineHeight: readMore ? "25px" : "30px",
            }}
          >
            Crafted by Royal Copenhagen, this lidded ginger jar features one of
            the most prestigious porcelain patterns ever produced — the coveted
            Flora Danica pattern. The jar is rarity in the Flora Danica catalog
            in that it displays not one, but three different plants, including
            the Anemone ranunculoidi & nemorosa Kse., or yellow wood anemone,
            the Crocus vernus L., or Dutch crocus, and the Helleborus hyemalis
            L., or winter aconite. In addition to its motif, the form itself is
            extremely rare, as very few Flora Danica lidded ginger jars were
            ever made.
            <br />A work of scientific examination as well as artistic mastery,
            these designs are culled from George Christian Oeder's 1771
            publication Flora Danica (Flowers of Denmark), an encyclopedia
            including 3,000 hand-colored prints depicting every wild plant known
            to exist in Denmark, including mosses, fungi, ferns and flowers.
            {readMore && (
              <span>
                In 1790, King Christian VII of Denmark ordered a set of
                porcelain decorated with exact copies of Oeder's plates, and
                thus Royal Copenhagen's Flora Danica collection was born. Adored
                by royalty since its first inception, it is perhaps the world's
                most prestigious porcelain pattern made today.
              </span>
            )}
            <br />
            <button onClick={() => setReadMore(!readMore)}>
              {!readMore ? "Read More..." : "Read Less..."}
            </button>
          </p>
        </section>

        <section className={styles.itemDetailsMid}>
          <table className={styles.detailsTable}>
            <tbody>
              <tr>
                <td>Creator:</td>
                <td>Royal Copenhagen (Maker)</td>
              </tr>
              <tr>
                <td>Dimensions:</td>
                <td>Height: 12 in (30.48 cm) Diameter: 5 in (12.7 cm)</td>
              </tr>
              <tr>
                <td>Style:</td>
                <td>Other (In the Style Of)</td>
              </tr>
              <tr>
                <td>Materials and Techniques:</td>
                <td>Porcelain, Hand-Painted</td>
              </tr>
              <tr>
                <td>Place of Origin:</td>
                <td>Denmark</td>
              </tr>
              <tr>
                <td>Period:</td>
                <td>20th Century</td>
              </tr>
              <tr>
                <td>Date of Manufacture:</td>
                <td>20th Century</td>
              </tr>
              <tr>
                <td>Condition:</td>
                <td>Excellent</td>
              </tr>
              <tr>
                <td>Seller Location:</td>
                <td>New Orleans, LA</td>
              </tr>
              <tr>
                <td>Seller:</td>
                <td>31-1667</td>
              </tr>
              <tr>
                <td>1stDibs:</td>
                <td>LU891120637622</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.itemDetailsRight}>
          <h3>
            Pricing Guidance <QuestionMarkIcon fontSize="small" />
          </h3>
          <p style={{ marginTop: "10px" }}>
            This item is priced in the higher range of Porcelain by Royal
            Copenhagen sold recently on 1stDibs.
          </p>
          <Button
            className={styles.purchaseBtn}
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "#434343",
              color: "white",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            Negotiate Price
          </Button>
          <p>Questions about this piece?</p>
          <h2 style={{
            marginTop: "10px",
            fontSize:'20px',
            fontWeight:'400',
          }}>Vetted Professional Seller <ThumbUpAltTwoToneIcon  style={{paddingTop:'10px'}}  fontSize="large"/> 5.0<StarIcon fontSize="large" style={{paddingTop:'10px'}}/> </h2>

        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Details;
