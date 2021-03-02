// Standard imports
import React from "react";

// Import custom components
import LocalButton from "./localButton";
import Logo from "../images/logo-noBG.png";

// Import styles
import styles from "./css/heroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1>Devos Communication Center / Virtual</h1>
        <p>March 26-27</p>
        <div className={styles.heroBtns}>
          <LocalButton buttonStyle="sign-up" to="/sign-up">
            Sign Up
          </LocalButton>

          {/* Put link to sponsorship packet */}
          <LocalButton className={styles.btns} buttonStyle="sponsor">
            Sponsor Us
          </LocalButton>
        </div>
      </div>
    </div>
  );
}
