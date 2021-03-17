// Standard imports
import React, { useState, useEffect } from "react";

// Import custom components
import LocalButton from "./localButton";
import { Link, useLocation } from "react-router-dom";
// import { ReactComponent as Logo } from "../images/logo.svg";

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

  let pathname = useLocation();
  const BreakLine = () => {
    return <div className="break-line"></div>;
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
            CalvinHacks 2021
            {/* <Logo fill="red" /> */}
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
              {pathname === "/schedule" ? BreakLine() : null}
            </li>
            <li className={styles.navItem}>
              <Link
                to="/faq"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
              {pathname === "/faq" ? BreakLine() : null}
            </li>

            {/* <li className={styles.navItem}>
              <Link
                to="/about-us"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li> */}

            <li>
              <Link to="sign-up">
                <button
                  className={styles.navLinksMobile}
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </button>
              </Link>
              {pathname === "/sign-up" ? BreakLine() : null}
            </li>
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
