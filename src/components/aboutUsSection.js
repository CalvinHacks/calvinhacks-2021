import React from "react";
import "./css/aboutUsSection.module.css";

import picture from "../images/Jason.jpg";
import styles from "./css/aboutUsSection.module.css";
import beach from "../images/beach.png"

export default function AboutUsSection() {
  return (
    <div className={styles.background}>
      <div className={styles.introduction}>
      <img className={styles.beach} src={beach}></img>
        <p className={styles.header}>
          CalvinHacks2021 is a 24Hr hackathon at Calvin University <br>
          </br> Local, young and bright students will develop amazing software and hardware projects.
          The best projects will be awarded prizes! It's a great, <br>
          </br>
          free opportunity for students to learn new things, connect with local companies, and have TONS of fun!
        </p>
      </div>
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
