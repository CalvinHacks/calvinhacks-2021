import React from "react";
import styles from "./css/footer.module.css";
import Image from "../images/instagram.png";

export default function Footer () {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.leftContainer}>
        <div className={styles.info}>
          <ul className={styles.leftList}>
            <li className={styles.leftItem}>CONTACT EMAIL: <a className={styles.link} href="https://www.google.com">hacks@calvin.edu</a></li>
            <li></li>
            <li className={styles.leftItem}>MORE INFO</li>
            <li className={styles.leftItem}>
              <a className={styles.link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a> | <a className={styles.link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.followText}>
          FOLLOW US ON SOCIAL MEDIA!
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/calvinhacks/">
            <img className={styles.socialMediaIcon} src={Image} alt="Missing img..." />
          </a>
        </div>   
      </div>
    </div>
  )
}