import React from "react";
import Beach from "../images/beach.png";
// import SignUpForm from "./signUpForm";

import styles from "./css/signUpSection.module.css";

export default function SignUpSection() {
  return (
    <>
      <div className={styles.signUpContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.img} alt="" src={Beach} />
        </div>
        <div className={styles.formContainer}>
          {/* <SignUpForm /> */}
          <h2 className={styles.closedText}>
            Our sign-up window has closed! Thank you for your interest.
          </h2>
        </div>
      </div>
    </>
  );
}
