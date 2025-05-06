import React from "react";
import styles from "./Contact.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
      <div className={styles.contactLeft}>
        <h3>
          SUBSCRIBE TO <br />
          OUR NEWSLETTER
        </h3>
        <p>To stay up to date on new products and events of the Henge world</p>
      </div>
      <div className={styles.contactRight}>
        <div className={styles.contactRightInput}>
          <input type="email" name="email" id="email" placeholder="Email*" />
          <i>
            <KeyboardArrowRightIcon />
          </i>
        </div>
        <div className={styles.contactRightCheckbox}>
          <input type="checkbox"  name="terms"  />
          <label htmlFor="termsAndConditions">Agree to <Link>Terms and Conditions</Link></label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
