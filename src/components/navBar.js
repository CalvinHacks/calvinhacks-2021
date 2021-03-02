// Standard imports
import React, { useState, useEffect } from "react";

// Import custom components
import LocalButton from "./localButton";
import { Link } from "react-router-dom";

// Import styles
import styles from "./css/navBar.module.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
            CalvinHacks 2021
          </Link>

          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li className={styles.navItem}>
              <Link
                to="/"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/schedule"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/faq"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/about-us"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            {/* <li>
              <Button
                className={styles.navLinksMobile}
                onClick={closeMobileMenu}
              >
                Sign Up
              </Button> */}
            {/* <a
                href="https://my.mlh.io/oauth/authorize?client_id=ypzioIbsUMnyoDOo0VfrnFhxPrUvwouAbSuxGnnKrZA&redirect_uri=http%3A%2F%2Fcalvinhacks.github.io%2Fcalvinhacks-2021%2F&response_type=token"
                target="_self"
                rel="noopener noreferrer"
                className={styles.navLinksMobile}
                onClick={closeMobileMenu}
              >
                Sign Up
              </a> */}
            {/* </li> */}
          </ul>

          {button && (
            <LocalButton
              className={styles.btns}
              buttonStyle="btnOutline"
              to="/sign-up"
            >
              SIGN UP
            </LocalButton>
          )}
        </div>
      </nav>
    </>
  );
}
