import React from "react";
import Spindance from "../images/spindance.png";
import TEKTON from "../images/TEKTON.png";
import AtomicObject from "../images/atomic-object.png";
import Steelcase from "../images/steelcase.svg";

import styles from "./css/sponsorSection.module.css";

export default function SponsorSection() {
  return (
    <>
      <div className={styles.sponsorContainer}>
        <h2>Our Sponsors</h2>
        <div className={styles.tierContainer}>
          <a href="https://www.tekton.com">
            <img
              className={`${styles.logo} ${styles.goldTier}`}
              alt=""
              src={TEKTON}
            />
          </a>
          <a href="https://spindance.com">
            <img
              className={`${styles.logo} ${styles.goldTier}`}
              alt=""
              src={Spindance}
            />
          </a>
        </div>
        <div className={styles.tierContainer}>
          <a href="https://www.atomicobject.com">
            <img
              className={`${styles.logo} ${styles.silverTier}`}
              alt=""
              src={AtomicObject}
            />
          </a>
        </div>
        <div className={styles.tierContainer}>
          <a href="https://www.steelcase.com">
            <img
              className={`${styles.logo} ${styles.bronzeTier}`}
              alt=""
              src={Steelcase}
            />
          </a>
        </div>
      </div>
    </>
  );
}
