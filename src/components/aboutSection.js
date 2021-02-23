import React from "react";
import "./css/aboutSection.module.css";

import picture from "../images/Jason.jpg";
import styles from "./css/aboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <span class={styles.circle}>
            <img className={styles.photo} src={picture} alt=""></img>
          </span>
          <p className={styles.fullName}>Jason Park</p>
          <p className={styles.title}>Head Designer/IT</p>
        </div>
        <div className={styles.imageContainer}>
          <span class={styles.circle}>
            <img className={styles.photo} src={picture} alt=""></img>
          </span>
          <p className={styles.fullName}>Jason Park</p>
          <p className={styles.title}>Head Designer/IT</p>
        </div>
        <div className={styles.imageContainer}>
          <span class={styles.circle}>
            <img className={styles.photo} src={picture} alt=""></img>
          </span>
          <p className={styles.fullName}>Jason Park</p>
          <p className={styles.title}>Head Designer/IT</p>
        </div>
        <div className={styles.imageContainer}>
          <span class={styles.circle}>
            <img className={styles.photo} src={picture} alt=""></img>
          </span>
          <p className={styles.fullName}>Jason Park</p>
          <p className={styles.title}>Head Designer/IT</p>
        </div>
        <div className={styles.imageContainer}>
          <span class={styles.circle}>
            <img className={styles.photo} src={picture} alt=""></img>
          </span>
          <p className={styles.fullName}>Jason Park</p>
          <p className={styles.title}>Head Designer/IT</p>
        </div>
      </div>
    </div>
  );
}
