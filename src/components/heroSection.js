// Standard imports
import React from "react";

// Import custom components
import LocalButton from "./localButton";
import OutsideButton from "./outsideButton";
import Logo from "../images/logo-noBG.png";
import SponsorshipPacket from "../pages/sponsorship_doc_2021.pdf";

// Import styles
import styles from "./css/heroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.hacksLogo} src={Logo} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1>Calvin University / Virtual</h1>
        <p>March 26-27</p>
        <div className={styles.heroBtns}>
          <LocalButton className={styles.signUpBtn} to="/sign-up">
            Sign Up
          </LocalButton>
          <span className={styles.btnDivider} s />
          <OutsideButton className={styles.sponsorBtn} href={SponsorshipPacket}>
            Sponsor us
          </OutsideButton>
        </div>
      </div>
    </div>
  );
}
