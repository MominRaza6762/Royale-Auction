import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopSlider from "./TopSlider";
import { ClearOutlined as CrossIcon } from "@mui/icons-material";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopSlider, setshowTopSlider] = useState(false);
  const toggleBar = () => {
    setShowNavbar(!showNavbar);
    setShowSidebar(!showSidebar);
  };
  const toggleTopSlider = () => {
    setshowTopSlider(!showTopSlider);
  };
  return showTopSlider ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TopSlider />
      <CrossIcon
        onClick={toggleTopSlider}
        style={{
          position: "absolute",
          right: "2%",
          top: "0",
          cursor: "pointer",
          marginTop: "10px",
          zIndex: "1000",
        }}
      />
    </div>
  ) : (
    <header className={styles.header}>
      {showNavbar && (
        <nav className={styles.nav}>
          <Link to="/">
            {/* <h1 >RA</h1> */}
            <img src="./onoraLogo.jpg" alt="logo" />
          </Link>
          <ul className={styles.navList}>
            <li>
              <SearchIcon />
            </li>
            <li onClick={toggleBar}>PRODUCTS</li>
            <li onClick={toggleTopSlider}>
              <MenuIcon />
            </li>
          </ul>
        </nav>
      )}
      {showSidebar && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          setShowNavbar={setShowNavbar}
          showNavbar={showNavbar}
        />
      )}
    </header>
  );
};

export default Navbar;
