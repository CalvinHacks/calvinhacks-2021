import React from "react";
import styles from "./css/footer.module.css";
import Image from "../images/instagram.png";
import Grid from '@material-ui/core/Grid';

// Footer from https://www.youtube.com/watch?v=g459Eia-bxw&t=8s

function Footer () {
  return (
    <div className={styles.mainFooter}>
      <Grid 
        container 
        spacing={3}
        alignItems="center"
      >
        <Grid item xs = {7}>
          <div className={styles.info}>
            <ul>
              <li>CONTACT EMAIL: <a href="https://www.google.com">calvinhacks@placeholder.com</a></li>
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
      </Grid>

      {/* <div className="containter">
        <div className="row">
          <div className="info">
            <ul>
              <li>Contact email: <a href="https://www.google.com">calvinhacks@placeholder.com</a></li>
              <li>CalvinHacks more info</li>
              <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>•<a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="row2">
          <div className="follow">follow us
            <span className="social-media">
              <a href="https://www.instagram.com/calvinhacks/"><img className="social-media-icon" src={Image} alt="Missing img..."></img></a>
              <img className="social-media-icon" src={Image} alt="Missing img..."></img>
              <img className="social-media-icon" src={Image} alt="Missing img..."></img>
            </span>
          </div>
        </div>

      </div> */}
    </div>
  )
}

export default Footer