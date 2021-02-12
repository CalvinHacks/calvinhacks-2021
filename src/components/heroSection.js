// Standard imports
import React from "react";

// Import custom components
import Button from "./button";
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
        <h1>Devos Communication Center</h1>
        <p>March 26-27</p>
        <div className={styles.heroBtns}>
          <a
            href="https://my.mlh.io/oauth/authorize?client_id=ypzioIbsUMnyoDOo0VfrnFhxPrUvwouAbSuxGnnKrZA&redirect_uri=http%3A%2F%2Fcalvinhacks.github.io%2Fcalvinhacks-2021%2F&response_type=token"
            target="_self"
            rel="noopener noreferrer"
          >
            <Button buttonStyle="sign-up">Sign Up</Button>
          </a>

          {/* Put link to sponsorship packet */}
          <Button className={styles.btns} buttonStyle="sponsor">
            Sponsor Us
          </Button>
        </div>
      </div>
    </div>
  );
}
