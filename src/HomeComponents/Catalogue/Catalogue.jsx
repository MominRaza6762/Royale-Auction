import React from "react";
import styles from "./Catalogue.module.css";
import AddIcon from "@mui/icons-material/Add";

const Catalogue = () => {
  return (
    <div className={styles.catalogue}>
      <div className={styles.catalogueLeft}>
        <h2>Expertise in Antiques and vintage</h2>
        <h3><strong>What is the difference between Antique and Vintage?</strong></h3>
        <p>
          Everything you buy for the home (furniture, lighting, rugs, artwork)
          can be plotted on a historical timeline and labeled antique or
          vintage. Not everything for sale has a certified date of origin, but
          an item's age is key in determining it's value. Also considered are
          condition, quality and rarity. The age of an item is evaluated not
          only in terms of its actual date of origin but also in the context of
          what is fashionable at the time as well as socio-economic trends.
        </p>
        <br />
        <p>
          Antique: An antique can be defined as "a relic or object of ancient
          times" or "a work of art, piece of furniture, or decorative object
          made at an earlier period.” According to various customs laws, the
          item must be at least 100 years old. If an item is not definitively
          datable to 100 or more years in age, it should not be directly
          referred to as an antique.
          <br />
          <br />
          Vintage:An item described as vintage should speak of the era in which
          it was produced. Vintage can mean an item is of a certain period of
          time, as in "vintage 1950's" but it can also mean (and probably always
          should) that the item exhibits the best of a certain quality
          associated with that specific era. An item should be representational
          and recognizable as belonging to the era in which it was made. Vintage
          should not be used in reference to items less than 20 years old.
        </p>
      </div>
      <div className={styles.catalogueRight}>
        <img src="./catalogue.jpg" alt="catalogue" />
        <div>
          <i>
            <AddIcon fontSize="small" />
          </i>
          <p>S34/2 Catalogue Download</p>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
