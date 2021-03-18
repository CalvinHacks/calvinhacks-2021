// Todo: Link the Discord icon to our discord server

import React from "react";
import styles from "./css/footer.module.css";

export default function Footer () {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.leftContainer}>
        <div className={styles.info}>
          <ul className={styles.leftList}>
            {/* <li className={styles.leftItem}>CONTACT EMAIL: <a className={styles.link} href="mailto: hacks@calvin.edu">hacks@calvin.edu</a></li>
            <li></li> */}
            <li className={styles.leftItem}>MORE INFO</li>
            <li className={styles.leftItem}>
              <a className={styles.link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
                MLH Code of Conduct 
              </a>
              {/* </a> | <a className={styles.link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a></li> */}
            </li>
            <li></li>
            <li className={styles.leftItem}>Copyright © CalvinHacks 2021</li>
          </ul>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.followText}>
          FOLLOW US ON SOCIAL MEDIA!
        </div>
        <div className={styles.socialMedia}>
          <a className={styles.footerButton} href="mailto:hacks@calvin.edu">
            <i className={`fa fa-envelope ${styles.icon}`} aria-hidden="true"></i>
          </a>
          <a className={styles.footerButton} href="https://www.instagram.com/calvinhacks/" target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-instagram ${styles.icon}`} aria-hidden="true"></i>
          </a>
          {/* <a className={styles.footerButton} href="" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-discord ${styles.icon}`} aria-hidden="true"></i>
          </a> */}
        </div>
      </div>
    </div>
  )
}