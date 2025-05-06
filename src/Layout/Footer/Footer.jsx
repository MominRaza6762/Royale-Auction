import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <Link to="/">
          {/* <h1 >RA</h1> */}
          <img src="./onoraLogo.jpg" alt="logo" />
        </Link>
      </div>
      <div className={styles.footerMid}>
        <Link className={styles.footerMidContent} to="/credits">
          Credits
        </Link>
        <Link to="/privacy" className={styles.footerMidContent}>
          Privacy
        </Link>
        <p
          style={{
            fontSize: "14px",
            padding: "0 10px",
          }}
        >
          P.IVA 04630340265 / Henge 2019
        </p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerRightIcons}>
          <Link to="/" className={styles.footerIcons}>
            <i>
              <InstagramIcon />
            </i>
          </Link>
          <Link to="/" className={styles.footerIcons}>
            <i>
              <FacebookIcon />
            </i>
          </Link>
          <Link to="/" className={styles.footerIcons}>
            <i>
              <YouTubeIcon />
            </i>
          </Link>
          <Link to="/" className={styles.footerIcons}>
            <i>
              <PinterestIcon />
            </i>
          </Link>
          <Link to="/" className={styles.footerIcons}>
            <i>
              <LinkedInIcon />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
