import React from "react";
import styles from "./css/footer.module.css";
import Image from "../images/instagram.png";
// import Grid from '@material-ui/core/Grid';

// Footer from https://www.youtube.com/watch?v=g459Eia-bxw&t=8s

function Footer () {
  return (
    <div className={styles.mainFooter}>
      {/* <Grid 
        container 
        spacing={3}
        alignItems="center"
      > */}
        {/* <Grid item xs = {7}>
          <div className={styles.info}>
            <ul>
              <li>CONTACT EMAIL: <a href="mailto:hacks@calvin.edu">hacks@calvin.edu</a></li>
              <li>MORE INFO</li>
              <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>•<a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Privacy Policy</a></li>
            </ul>
          </div>
        </Grid>
        <Grid item xs = {2}>
          <div className={styles.follow}>FOLLOW US</div>
        </Grid>
        <Grid item xs = {3}>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/calvinhacks/"><img className={styles.socialMediaIcon} src={Image} alt="Missing img..."></img></a>
          </div>
        </Grid>
      </Grid> */}

      <div className={styles.leftContainer}>
        <div className={styles.info}>
          <ul>
            <li>CONTACT EMAIL: <a href="https://www.google.com">hacks@calvin.edu</a></li>
            <li>MORE INFO</li>
            <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a> | <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Privacy Policy</a></li>
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

export default Footer