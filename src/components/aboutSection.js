import React from "react";

import styles from "./css/aboutSection.module.css";

export default function AboutSection() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.headerText}>What is CalvinHacks?</h2>
          <p className={styles.infoText}>
            CalvinHacks is a 24-hour hackathon at Calvin University where
            creative and bright students come together to develop projects,
            learn new skills, and bond with like-minded individuals! Students
            have the opportunity to design software and win prizes, something
            you just don't get in university-level coursework.
          </p>
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.headerText}>How We've Adapted</h2>
          <p className={styles.infoText}>
            This year, we are hosting a fully online hackathon! Through Discord
            and Microsoft Teams, we'll be holding workshops, fun events, and
            more. For Calvin University students, we have the opportunity to
            host a 10-hour in-person portion! Sign up to stay updated!
          </p>
        </div>
      </div>
    </>
  );
}
